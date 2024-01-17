

import { fetchScheduleData, parseDuration } from './dataService.js';

document.addEventListener("DOMContentLoaded", function() {
    var leftSidebar = document.getElementById('left-sidebar');
    leftSidebar.innerHTML = `
        <!-- <button class="toggle-button toggle-left">X</button>-->
        <h2>Schedule</h2>
        <div id="current-time">
            <!-- Display current time here -->
        </div>
        <h3><div id="current-show">
            <!-- Display current show here -->
        </div></h3>
        <div id="upcoming-show">
            <!-- Display upcoming show here -->
        </div>
        </br>
        <div id="timeline">
            <!-- Schedule items will be filled here -->
        </div>
    `;

    const timeline = document.getElementById('timeline');
    let currentShow = null; // Define currentShow here

    // Milliseconds Conversion
    function timeToMillis(time) {
        const [hours, minutes, seconds] = time.split(':').map(Number);
        return (hours * 3600000) + (minutes * 60000) + (seconds * 1000);
    }

    // Populating the timeline
    function populateTimeline(schedule) {
        const timeline = document.getElementById('timeline');
        timeline.innerHTML = ''; // Clear existing entries

        const uniqueShows = schedule
            .filter(item => item.type !== 'commercial')
            .sort((a, b) => {
                // Assuming schedule_time is in 'HH:mm:ss' format
                return timeToMillis(a.schedule_time) - timeToMillis(b.schedule_time);
            });

        uniqueShows.forEach(item => {
            const timeSlot = document.createElement('div');
            timeSlot.classList.add('timeline-item');
            timeSlot.innerHTML = `<strong>${item.schedule_time}</strong> - ${item.title}`;
            timeline.appendChild(timeSlot);
        });
    }

    function isCurrentShow(itemTime, duration, currentTime) {
        const itemStartTime = timeToMillis(itemTime);
        const itemEndTime = itemStartTime + duration;
        return currentTime >= itemStartTime && currentTime < itemEndTime;
    }

    // Update time and shows on the left bar
    function updateCurrentTimeAndShows(schedule) {
        

        const now = new Date();
        const currentTime = timeToMillis(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);

        let upcomingShow = null;

        schedule.forEach(item => {
            const duration = parseDuration(item.length);
            if (isCurrentShow(item.schedule_time, duration, currentTime)) {
                currentShow = item; // Update currentShow when a show is currently playing
            } else if (timeToMillis(item.schedule_time) > currentTime && !upcomingShow) {
                upcomingShow = item;
            }
        });

        // Highlight the timeline item corresponding to the current show's time
        document.querySelectorAll('.timeline-item').forEach(item => {
            const itemTime = item.querySelector('strong').textContent; // Get the schedule time from the item
            if (currentShow && currentShow.schedule_time === itemTime) {
                item.classList.add('highlight'); // Add a highlight class to the matching item
            } else {
                item.classList.remove('highlight'); // Remove the highlight class from other items
            }
        });
        
        const currentTimeElement = document.getElementById('current-time');
        currentTimeElement.textContent = `Time: ${now.toLocaleTimeString()}`;
        
        const currentShowElement = document.getElementById('current-show');
        currentShowElement.textContent = currentShow ? `Playing: ${currentShow.title}` : 'No current show';
        
        const upcomingShowElement = document.getElementById('upcoming-show');
        upcomingShowElement.textContent = upcomingShow ? `Upcoming Show: ${upcomingShow.title}` : 'No upcoming show';
        // Change Text on the Elements
        
        
        

        const titleTextElement = document.getElementById('titleText');
        titleTextElement.textContent = currentShow ? `Playing: ${currentShow.title}` : 'No current show';
        
    }

    // Function to fetch and update the schedule, and load the current video
    function fetchAndUpdateSchedule() {
        fetchScheduleData() // Use fetchScheduleData from dataService.js
            .then(schedule => {
                populateTimeline(schedule);
                updateCurrentTimeAndShows(schedule);
            })
            .catch(error => console.error('Error fetching JSON:', error));
    }

    parseDuration();

    setInterval(() => {
        fetchAndUpdateSchedule();
    }, 1000); // 1000 milliseconds (1 second)

    fetchAndUpdateSchedule();

    
});

