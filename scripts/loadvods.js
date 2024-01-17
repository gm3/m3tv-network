// Event listener for the DOMContentLoaded event
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");
    // Call the function to load VOD content once the DOM is fully loaded
    loadVodContent();
});

function loadVodContent() {
    fetch('./json/basic_m3tv_data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const networkData = data.network;

            Object.keys(networkData).forEach(category => {
                if (category === 'commercials') {
                    return;
                }

                networkData[category].forEach((item, index) => {
                    const readableScheduleTime = item.schedule_time.substring(0, 8); // Extract only the time portion (HH:mm:ss)

                    const vodItem = document.createElement('div');
                    vodItem.classList.add('vod-item');

                    // Generate unique IDs
                    const titleId = `vodlink-title-${item.id}`;
                    const linkId = `vodlink-${item.id}`;

                    // Set the href to the video file URL
                    vodItem.innerHTML = `
                        <div class="title">
                            <a href="${item.metadata.file}" id="${titleId}">${item.title} - ${readableScheduleTime}</a>
                        </div>    
                        <a href="${item.metadata.file}" id="${linkId}">
                            <img src="${item.metadata.thumbnail}" alt="${item.title}">
                        </a>
                    `;

                    document.getElementById('vod-list').appendChild(vodItem);

                    // Add click event listeners for loading videos
                    document.getElementById(titleId).addEventListener('click', function(event) {
                        event.preventDefault();
                        loadVideoIntoPlayer(this.href, item); // Pass 'item' as a parameter
                    });

                    document.getElementById(linkId).addEventListener('click', function(event) {
                        event.preventDefault();
                        loadVideoIntoPlayer(this.href, item); // Pass 'item' as a parameter
                    });
                });
            });
        })
        .catch(error => {
            console.error('Error loading content:', error);
        });
}

// Modify the 'loadVideoIntoPlayer' function to accept the 'item' parameter
function loadVideoIntoPlayer(url, item) {
    const titleTextElement = document.getElementById('titleText');
    titleTextElement.textContent = item ? `Playing: ${item.title}` : 'No current show';
    const player = document.querySelector('video');
    player.src = url;
    player.play();
}
