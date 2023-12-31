// videoScheduler.js

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
    // Correctly obtaining the current UTC time
    const now = new Date();
    const currentTimeUTC = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 
                                             now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds()));

    console.log("Correct Current UTC Time:", currentTimeUTC.toISOString());

    return schedule.find(item => {
        const scheduleTimeUTC = new Date(item.schedule_time); // Assuming this is in UTC
        const endTimeUTC = new Date(scheduleTimeUTC.getTime() + parseDuration(item.length));
        //console.log("Checking item:", item.title, 
                    //"Schedule Time UTC:", scheduleTimeUTC.toISOString(), 
                    //"End Time UTC:", endTimeUTC.toISOString());

        return currentTimeUTC >= scheduleTimeUTC && currentTimeUTC < endTimeUTC;
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


// Initialize and periodically update the video based on the current schedule
setInterval(updateSchedule, 3600000); // Update every minute // this is a bug and needs to be changed to track to update when a video ends


// Initial load
updateSchedule();
