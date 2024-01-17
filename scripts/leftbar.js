

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

    function timeToMillis(time) {
        const [hours, minutes, seconds] = time.split(':').map(Number);
        return (hours * 3600000) + (minutes * 60000) + (seconds * 1000);
    }

    function populateTimeline(schedule) {
        const timeline = document.getElementById('timeline');
        timeline.innerHTML = ''; // Clear existing entries
    
        // Filter out commercials and sort by schedule_time
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
    
    function updateCurrentTimeAndShows(schedule) {
        const currentTimeElement = document.getElementById('current-time');
        const currentShowElement = document.getElementById('current-show');
        const upcomingShowElement = document.getElementById('upcoming-show');
        var titleTextElement = document.getElementById('titleText'); // Get the title text element

    
        const now = new Date();
        const currentTime = timeToMillis(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
    
        let currentShow = null;
        let upcomingShow = null;
    
        schedule.forEach(item => {
            const duration = parseDuration(item.length);
            if (isCurrentShow(item.schedule_time, duration, currentTime)) {
                currentShow = item;
            } else if (timeToMillis(item.schedule_time) > currentTime && !upcomingShow) {
                upcomingShow = item;
            }
        });

       
        // Highlight the current show in the timeline
        document.querySelectorAll('.timeline-item').forEach(item => {
            if (item.textContent.includes(currentShow.title)) {
                item.classList.add('highlight'); // Add a highlight class or modify as needed
            } else {
                item.classList.remove('highlight'); // Remove the highlight class from other items
            }
        });
    
    
        currentTimeElement.textContent = `Time: ${now.toLocaleTimeString()}`;
        currentShowElement.textContent = currentShow ? `Playing: ${currentShow.title}` : 'No current show';
        upcomingShowElement.textContent = upcomingShow ? `Upcoming Show: ${upcomingShow.title}` : 'No upcoming show';
        titleTextElement.textContent = currentShow.title;    }

    function fetchAndUpdateSchedule() {
        fetch('./json/basic_m3tv_data.json')
        .then(response => response.json())
        .then(data => {
            const schedule = data.network.shows.concat(data.network.commercials);
            populateTimeline(schedule);
            updateCurrentTimeAndShows(schedule);
        })
        .catch(error => console.error('Error fetching JSON:', error));
    }

    function updateCurrentTimeAndShows(schedule) {
        const currentTimeElement = document.getElementById('current-time');
        const currentShowElement = document.getElementById('current-show');
        const upcomingShowElement = document.getElementById('upcoming-show');

        const now = new Date();
        const nowTime = timeToMillis(now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds());

        let currentShow = null;
        let upcomingShow = null;

        for (let i = 0; i < schedule.length; i++) {
            const item = schedule[i];
            const itemTime = timeToMillis(item.schedule_time);
            const durationInMillis = parseDuration(item.length);
            const endTime = itemTime + durationInMillis;

            if (nowTime >= itemTime && nowTime < endTime) {
                currentShow = item;
                upcomingShow = schedule[i + 1] || null;
                break;
            } else if (nowTime < itemTime && !upcomingShow) {
                upcomingShow = item;
            }
        }

        currentTimeElement.textContent = `Time: ${now.toLocaleTimeString()}`;
        currentShowElement.textContent = currentShow ? `Playing: ${currentShow.title}` : 'No current show';
        upcomingShowElement.textContent = upcomingShow ? `Upcoming Show: ${upcomingShow.title}` : 'No upcoming show';
    }

    
    setInterval(() => {
        fetch('./json/basic_m3tv_data.json')
            .then(response => response.json())
            .then(data => {
                const schedule = data.network.shows.concat(data.network.commercials);
                populateTimeline(schedule);
                updateCurrentTimeAndShows(schedule);
            })
            .catch(error => console.error('Error fetching JSON:', error));
    }, 1000); // 1000 milliseconds (1 second)
});    

    
