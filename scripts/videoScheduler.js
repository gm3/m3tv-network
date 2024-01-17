// videoScheduler.js
import { fetchScheduleData, parseDuration } from './dataService.js'; // Import fetchScheduleData and extractSchedule from dataService.js
// videoScheduler.js
import { loadCurrentVideo } from './videoLoader.js'; // Import the function

const now = new Date();
//console.log("Local Time:", now.toString());
//console.log("UTC Time:", now.toISOString());

export function findCurrentItem(schedule) {
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

// Function to fetch and update the schedule, and load the current video
function updateSchedule() {
    fetchScheduleData() // Use fetchScheduleData from dataService.js
        .then(schedule => {
            loadCurrentVideo(schedule);
        })
        .catch(error => {
            console.error('Error fetching and updating schedule:', error);
        });
}

// Initial load
updateSchedule();




