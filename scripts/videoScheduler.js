// videoScheduler.js

const now = new Date();
console.log("Local Time:", now.toString());
console.log("UTC Time:", now.toISOString());
let lastLoadedItemId = null; // Track the last loaded item

function parseDuration(durationStr) {
    const duration = {
        h: 3600000,  // 1 hour in milliseconds
        m: 60000,    // 1 minute in milliseconds
        s: 1000      // 1 second in milliseconds
    };

    const regex = /(\d+)(h|m|s)/g;
    let result = 0;
    let match;

    //console.log("Parsing duration for:", durationStr);

    // Iterate over all the matches for hours, minutes, and seconds
    while ((match = regex.exec(durationStr)) !== null) {
        const value = parseInt(match[1], 10);
        const unit = match[2];
        const millis = value * (duration[unit] || 0);
        result += millis;

        //console.log(`Found match: ${match[0]}, Value: ${value}, Unit: ${unit}, Milliseconds: ${millis}`);
    }

    //console.log("Total duration in milliseconds:", result);
    return result;
}


function findCurrentItem(schedule) {
    const now = new Date();
    const nowTimeInMillis = now.getHours() * 3600000 + now.getMinutes() * 60000 + now.getSeconds() * 1000;

    return schedule.find(item => {
        const [hours, minutes, seconds] = item.schedule_time.split(':').map(Number);
        const itemTimeInMillis = hours * 3600000 + minutes * 60000 + seconds * 1000;
        const durationInMillis = parseDuration(item.length);
        const endTimeInMillis = itemTimeInMillis + durationInMillis;

        // Adjust for items that may span into the next day
        if (itemTimeInMillis > endTimeInMillis) {
            if (nowTimeInMillis >= itemTimeInMillis || nowTimeInMillis < endTimeInMillis) {
                return true;
            }
        } else {
            if (nowTimeInMillis >= itemTimeInMillis && nowTimeInMillis < endTimeInMillis) {
                return true;
            }
        }
    });
}

function loadCurrentVideo(schedule) {
    const currentItem = findCurrentItem(schedule);

    if (!currentItem || !currentItem.metadata || !currentItem.metadata.file) {
        console.log("No current show to load.");
        return;
    }

    console.log("Current item to load:", currentItem);
    const videoPlayer = document.querySelector('video');
    
    // Set video source and load
    videoPlayer.src = currentItem.metadata.file;
    videoPlayer.muted = true;
    videoPlayer.load();

    // Calculate and set the current time of the video
    const now = new Date();
    const [hours, minutes, seconds] = currentItem.schedule_time.split(':').map(Number);
    const scheduleTimeInMillis = hours * 3600000 + minutes * 60000 + seconds * 1000;
    const nowTimeInMillis = now.getHours() * 3600000 + now.getMinutes() * 60000 + now.getSeconds() * 1000;
    let offsetInSeconds = (nowTimeInMillis - scheduleTimeInMillis) / 1000;

    if (offsetInSeconds < 0 || offsetInSeconds > parseDuration(currentItem.length) / 1000) {
        offsetInSeconds = 0; // If current time is before the schedule time or past the duration
    }

    videoPlayer.currentTime = offsetInSeconds;
        /// When the video ends, load the next video
        videoPlayer.addEventListener('ended', function() {
            console.log("Video ended. Loading next item.");
            lastLoadedItemId = null; // Reset last loaded item
            updateSchedule();
        });
        
        // Play the video when the user interacts with it
        videoPlayer.addEventListener('play', function () {
            // Video playback started successfully
            console.log("Video playback started");
        });

        // Handle errors during playback
        videoPlayer.addEventListener('error', function (error) {
            // An error occurred during playback
            console.error("Error playing video:", error);
        });

        lastLoadedItemId = currentItem.id; // Update last loaded item
    
}


// Function to fetch and update the schedule, and load the current video
function updateSchedule() {
    fetch('./json/basic_m3tv_data.json')
        .then(response => response.json())
        .then(data => {
            //console.log("Fetched data:", data);
            const schedule = extractSchedule(data.network);
            loadCurrentVideo(schedule);
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
}


function extractSchedule(networkData) {
    let schedule = [];
    ['shows', 'commercials', 'others'].forEach(category => {
        networkData[category].forEach(item => {
            const extractedItem = {
                ...item,
                schedule_time: item.schedule_time,
                end_time: new Date(new Date(item.schedule_time).getTime() + parseDuration(item.length))
            };
            //console.log("Extracted item:", extractedItem);
            schedule.push(extractedItem);
        });
    });
    schedule.sort((a, b) => new Date(a.schedule_time) - new Date(b.schedule_time));
    //console.log("Complete extracted schedule:", schedule);
    return schedule;
}



// Initial load
updateSchedule();
