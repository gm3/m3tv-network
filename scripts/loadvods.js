let player;
let currentVideoIndex = 0;
let videoPlaylist = [];

let isYouTubeAPReady = false;
let isBroadcastWindowDOMReady = false;
let initialPlayerCreationFailed = false; // Flag to track if the very first player creation attempt failed

function attemptInitialPlayerCreation() {
    if (isYouTubeAPReady && isBroadcastWindowDOMReady && videoPlaylist.length > 0 && !player) {
        console.log("Conditions met: YouTube API ready, Broadcast Window DOM ready, videos loaded. Attempting initial player creation.");
        const firstVideo = videoPlaylist[0];
        if (firstVideo && firstVideo.id && firstVideo.title) {
            currentVideoIndex = 0;
            // Pass a special flag for the *very first* attempt to create the player
            loadVideoIntoPlayer(firstVideo.id, firstVideo.title, true, true);
        } else {
            console.warn("Cannot create initial player: First video data is invalid.");
        }
    } else {
        let conditions = `YT API: ${isYouTubeAPReady}, BC Window: ${isBroadcastWindowDOMReady}, Playlist: ${videoPlaylist.length > 0}, Player Exists: ${!!player}`;
        console.log(`Conditions for initial player creation not yet fully met. Status: ${conditions}`);
    }
}

window.onYouTubeIframeAPIReady = function() {
    console.log("YouTube Iframe API is ready.");
    isYouTubeAPReady = true;
    attemptInitialPlayerCreation();
};

document.addEventListener('broadcastWindowReady', function() {
    console.log("'broadcastWindowReady' event received.");
    isBroadcastWindowDOMReady = true;
    attemptInitialPlayerCreation();
});

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");
    // Call the function to load VOD content once the DOM is fully loaded
    loadVodContent();
});

function loadVodContent() {
    fetch('./json/youtube_videos.json') // Changed to fetch YouTube videos JSON
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            // Assuming yt-dlp -J output has an 'entries' array
            // const videoEntries = data.entries; // Keep this for clarity if needed
            // if (!videoEntries) {
            //     console.error('Error: youtube_videos.json is not in the expected format. Missing "entries" array.');
            //     // Try to see if the data itself is the array (older yt-dlp versions or different flags)
            //     let videosToProcess = [];
            //     if (Array.isArray(data)) {
            //         // If data is directly an array, use it. This provides some flexibility.
            //         videosToProcess = data;
            //     } else if (data && Array.isArray(data.entries)) {
            //         videosToProcess = data.entries;
            //     } else {
            //         const vodListElement = document.getElementById('vod-list');
            //         if (vodListElement) {
            //             vodListElement.innerHTML = '<li>Error loading video list. Check console.</li>';
            //         }
            //         return;
            //     }
            // }

            // Use a consistent variable name for the video entries
            const videos = data.entries || (Array.isArray(data) ? data : []);

            if (videos.length === 0) {
                console.warn("No videos found in youtube_videos.json");
                const vodListElement = document.getElementById('vod-list');
                if (vodListElement) {
                    vodListElement.innerHTML = '<li>No videos available.</li>';
                }
                return;
            }
            
            // Clear any existing items in vod-list before populating to avoid duplicates
            const vodListElement = document.getElementById('vod-list');
            if (vodListElement) {
                vodListElement.innerHTML = ''; 
            } else {
                console.error("Element with ID 'vod-list' not found for clearing.");
                return; 
            }

            videos.forEach(item => {
                // If item is null or missing id/title, skip it
                if (!item || !item.id || !item.title) {
                    console.warn('Skipping an item due to missing id or title:', item);
                    return; 
                }

                const vodItem = document.createElement('div');
                vodItem.classList.add('vod-item');

                const videoId = item.id;
                const videoTitle = item.title;
                // Construct YouTube thumbnail URL
                const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`; 

                const titleId = `vodlink-title-${videoId}`;
                const linkId = `vodlink-${videoId}`;

                vodItem.innerHTML = `
                    <div class="title">
                        <a href="#" id="${titleId}">${videoTitle}</a>
                    </div>    
                    <a href="#" id="${linkId}">
                        <img src="${thumbnailUrl}" alt="${videoTitle}">
                    </a>
                `;
                
                vodListElement.appendChild(vodItem);

                // Add click event listeners for loading videos
                document.getElementById(titleId).addEventListener('click', function(event) {
                    event.preventDefault();
                    loadVideoIntoPlayer(videoId, videoTitle); // Pass videoId and title
                });

                document.getElementById(linkId).addEventListener('click', function(event) {
                    event.preventDefault();
                    loadVideoIntoPlayer(videoId, videoTitle); // Pass videoId and title
                });
            });

            // After populating the list, load the first video (which should be the latest)
            if (videos.length > 0) {
                const latestVideo = videos[0];
                if (latestVideo && latestVideo.id && latestVideo.title) {
                    loadVideoIntoPlayer(latestVideo.id, latestVideo.title);
                } else {
                    console.warn("Could not load the latest video: ID or title missing for the first entry.", latestVideo);
                }
            }
        })
        .catch(error => {
            console.error('Error loading YouTube video content:', error);
            const vodListElement = document.getElementById('vod-list');
            if (vodListElement) {
                vodListElement.innerHTML = '<li>Failed to load videos. See console for details.</li>';
            }
        });
}

// Updated loadVideoIntoPlayer function for YouTube embeds (direct src change)
function loadVideoIntoPlayer(videoId, videoTitle) {
    // const titleTextElement = document.getElementById('titleText');
    // if (titleTextElement) {
    //     titleTextElement.textContent = videoTitle ? `Playing: ${videoTitle}` : 'No current show';
    // }

    const iframePlayer = document.getElementById('youtube-player-iframe');
    if (iframePlayer) {
        console.log(`Loading video into iframe by setting src: ${videoId}, Title: ${videoTitle}`);
        iframePlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`; // Added rel=0
    } else {
        console.error("YouTube player iframe (youtube-player-iframe) not found!");
    }
}
