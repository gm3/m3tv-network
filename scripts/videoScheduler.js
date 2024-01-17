// videoScheduler.js

const now = new Date();
console.log("Local Time:", now.toString());
console.log("UTC Time:", now.toISOString());

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
    // Convert current time to milliseconds since start of the day
    const currentTimeInMillis = (now.getUTCHours() * 3600000) + (now.getUTCMinutes() * 60000) + (now.getUTCSeconds() * 1000);

    return schedule.find(item => {
        const scheduleTime = new Date(item.schedule_time);
        // Convert schedule time to milliseconds since start of the day
        const scheduleTimeInMillis = (scheduleTime.getUTCHours() * 3600000) + (scheduleTime.getUTCMinutes() * 60000) + (scheduleTime.getUTCSeconds() * 1000);
        const durationInMillis = parseDuration(item.length);
        const endTimeInMillis = scheduleTimeInMillis + durationInMillis;

        return currentTimeInMillis >= scheduleTimeInMillis && currentTimeInMillis < endTimeInMillis;
    });
}



function loadCurrentVideo(schedule) {
    const currentItem = findCurrentItem(schedule);
    console.log("Current item to load:", currentItem);

    if (currentItem && currentItem.metadata && currentItem.metadata.file) {
        const videoPlayer = document.querySelector('video');

        // Set muted attribute
        videoPlayer.muted = true;

        // Set the video source and load it
        videoPlayer.src = currentItem.metadata.file;
        videoPlayer.load();

        const now = new Date();
        const scheduleTime = new Date(currentItem.schedule_time);
        const offsetInSeconds = (now - scheduleTime) / 1000;

        // Set the currentTime of the video
        if (offsetInSeconds > 0) {
            videoPlayer.currentTime = offsetInSeconds;
        } else {
            videoPlayer.currentTime = 0;
        }

        console.log("Loading video. Current time:", now.toISOString(), "Offset in seconds:", offsetInSeconds);


        // When the video ends, load the next video
        videoPlayer.addEventListener('ended', function() {
            console.log("Video ended. Loading next item.");
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
    }
}


// Function to fetch and update the schedule, and load the current video
function updateSchedule() {
    fetch('./json/basic_m3tv_data.json')
        .then(response => response.json())
        .then(data => {
            //console.log("Fetched data:", data);
            const schedule = extractSchedule(data.network);
            //loadCurrentVideo(schedule);
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
