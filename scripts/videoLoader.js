// videoLoader.js
import { parseDuration } from './dataService.js'; // If needed
import { findCurrentItem } from './videoScheduler.js'; // If needed

let lastLoadedItemId = null; // Track the last loaded item


export function loadCurrentVideo(schedule) {
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