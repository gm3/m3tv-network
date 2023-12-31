document.addEventListener("DOMContentLoaded", function() {
    var leftSidebar = document.getElementById('left-sidebar');
    leftSidebar.innerHTML = `
    <!-- <button class="toggle-button toggle-left">X</button>-->
    <div class="dropdown">
  <button class="dropbtn">≡</button>
    <div class="dropdown-content">
         
        
        <!-- External links open in a new tab -->
        <a href="https://discord.gg/fawnD8R9QA" target="_blank">Discord</a>
        <a href="https://github.com/gm3/m3tv-network" target="_blank">Github</a>
        <a href="https://053btxrh5ud.typeform.com/to/lGzAVaNd" target="_blank">Sumbit</a>


        <!-- Internal links to load content in the broadcast window -->
        <a href="/">Connect</a>
    </div>
    </div>
    
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

        
        //const toggleRightButton = document.querySelector('.toggle-right');
        //const sidebarRight = document.querySelector('.sidebar-right');
        //toggleRightButton.addEventListener('click', function() {
        //sidebarRight.classList.toggle('collapsed');
        //});

        const timeline = document.getElementById('timeline');
let globalNetworkData;


function populateTimeline(schedule) {
    let currentDate = new Date().toISOString().split('T')[0]; // Get the current date in YYYY-MM-DD format

    schedule.forEach(item => {
        // Create a div element for each timeline item
        const timeSlot = document.createElement('div');
        timeSlot.classList.add('timeline-item'); // Add the 'timeline-item' class

        // Convert 12-hour time to 24-hour format and combine with the current date
        const timeString = convertTo24HourFormat(currentDate, item.displayTime);

        // Set the innerHTML of the div with the item's display time and title
        timeSlot.innerHTML = `<strong>${item.displayTime}</strong> - ${item.title}`;

        // Set the data-time attribute with the converted time string
        timeSlot.setAttribute('data-time', timeString);

        // Check if the item is the current show and add a class to highlight it
        if (isCurrentShow(item)) {
            timeSlot.classList.add('current-show');
        }

        // Add click event listener
        timeSlot.addEventListener('click', () => {
            // Remove active class from other items
            document.querySelectorAll('.timeline-item').forEach(item => {
                item.classList.remove('active');
            });

            // Add active class to the clicked item
            timeSlot.classList.add('active');

            // Display metadata or perform other actions
            displayMetadata(item.id, globalNetworkData);
        });

        // Append the timeSlot to the timeline
        timeline.appendChild(timeSlot);
    });
}

function convertTo24HourFormat(currentDate, displayTime) {
    // Conversion logic here. This function should take the 'displayTime' (in 12-hour format),
    // convert it to 24-hour format, and then return the full datetime string in a format
    // compatible with JavaScript's Date constructor.
    // For now, it's a placeholder and needs the actual implementation.

    return currentDate + 'T' + displayTime; // Placeholder: adjust this according to your conversion logic
}


// Function to check if an item is the current show
function isCurrentShow(item) {
    const now = new Date();
    const scheduleTime = new Date(item.schedule_time);
    return now >= scheduleTime && now < scheduleTime.getTime() + parseDuration(item.length);
}

  


// Extract relevant schedule information from various sections
function extractSchedule(networkData) {
  const schedule = [];

  // Extracting shows
  networkData.shows.forEach(show => {
    const showTime = new Date(show.schedule_time);
    schedule.push({ 
        id: show.id, // Make sure this line is correct
        time: showTime, 
        displayTime: showTime.toLocaleTimeString(), 
        title: show.title 
    });
});

  // Extracting commercials
  networkData.commercials.forEach(commercial => {
    const commercialTime = new Date(commercial.schedule_time);
    schedule.push({ 
      id: commercial.id, // Make sure this line is correct
      time: commercialTime, 
      displayTime: commercialTime.toLocaleTimeString(), 
      title: commercial.title 
    });
  });

  // Sort the schedule array by time
  schedule.sort((a, b) => a.time - b.time);

  return schedule;
}

// Fetch JSON file and populate the timeline
fetch('./json/basic_m3tv_data.json')
  .then(response => response.json())
  .then(data => {
    //console.log("Fetched Schedule Data:", data); // Debug: Log fetched data
    globalNetworkData = data.network;
    const schedule = extractSchedule(globalNetworkData);
    populateTimeline(schedule);
})
  .catch(error => {
    console.error('Error fetching JSON:', error);
  });


function displayMetadata(showId, networkData) {
  let found = false;
  ['shows', 'commercials'].forEach(category => {
      networkData[category].forEach(item => {
          if (item.id === showId) {
              found = true;
              const metadata = item.metadata;
              let metadataHtml = `<h3>${item.title}</h3><dl>`;
              for (const key in metadata) {
                  metadataHtml += `<dt>${key}:</dt><dd>${metadata[key]}</dd>`;
              }
              metadataHtml += `</dl>`;
              document.getElementById('metadata-container').innerHTML = metadataHtml;
          }
      });
  });

  if (!found) {
      document.getElementById('metadata-container').innerHTML = '<p>Metadata not found.</p>';
  }
}

});    

function updateCurrentTimeAndShows(schedule) {
    const currentTimeElement = document.getElementById('current-time');
    const currentShowElement = document.getElementById('current-show');
    const upcomingShowElement = document.getElementById('upcoming-show');

 

    // Get the current time
    const now = new Date();
    const currentTime = now.toLocaleTimeString();

    // Find the current and upcoming shows
    let currentShow = null;
    let upcomingShow = null;
    for (let i = 0; i < schedule.length; i++) {
        const item = schedule[i];
        const scheduleTime = new Date(item.schedule_time);

        // Check if the current time is between the start and end times of the item
        if (now >= scheduleTime && now < scheduleTime.getTime() + parseDuration(item.length)) {
            currentShow = item;
        } else if (now < scheduleTime) {
            upcomingShow = item;
            break; // Stop when we find the first upcoming show
        }
    }

    document.querySelectorAll('.timeline-item').forEach(item => {
        const itemTime = item.getAttribute('data-time');
        const itemTimeValue = new Date(itemTime).getTime(); // Timestamp of the item time

        //console.log("Current Show:", currentShow);
        //console.log("Upcoming Show:", upcomingShow);

        if (currentShow && currentShow.schedule_time) {
            const scheduleTimeValue = new Date(currentShow.schedule_time).getTime();
    
            if (itemTimeValue === scheduleTimeValue) {
                item.classList.add('current-show');
            } else {
                item.classList.remove('current-show');
            }
        }
        
        
    });
    

    // Update the display elements
    currentTimeElement.textContent = `Time: ${currentTime}`;
    if (currentShow) {
        currentShowElement.textContent = `Playing: ${currentShow.title}`;
        currentShowElement.style.color = 'red'; // Change the text color to red for the current show
        var titleText = document.getElementById('titleText');
        // Set the text content of the titleText element
        if (titleText) {
            titleText.textContent = "Now Playing: " + currentShow.title;
        }

    } else {
        currentShowElement.textContent = 'No current show';
    }
    if (upcomingShow) {
        upcomingShowElement.textContent = `Upcoming Show: ${upcomingShow.title}`;
    } else {
        upcomingShowElement.textContent = 'No upcoming show';
    }

    
}

document.addEventListener('DOMContentLoaded', (event) => {
    // When the user clicks on the button, toggle between hiding and showing the dropdown content
    function dropdownToggle() {
      document.querySelector(".dropdown-content").classList.toggle("show");
    }
  
    // Attach event listener to dropdown button
    document.querySelector(".dropbtn").addEventListener("click", dropdownToggle);
  
    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
  });
  
  

// Update the current time and shows every second
setInterval(() => {
    fetch('./json/basic_m3tv_data.json')
        .then(response => response.json())
        .then(data => {
            const schedule = extractSchedule(data.network);
            updateCurrentTimeAndShows(schedule);
        })
        .catch(error => console.error('Error fetching JSON:', error));
}, 1000); // 1000 milliseconds (1 second)


    
