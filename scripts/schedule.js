const scheduleContainer = document.getElementById('schedule-container');
const timeline = document.getElementById('timeline');

// Function to populate the timeline
function populateTimeline(schedule) {
  // Clear existing timeline content
  timeline.innerHTML = "";

  schedule.forEach(item => {
    const timeSlot = document.createElement('div');
    timeSlot.innerHTML = `<strong>${item.time}</strong> - ${item.title}`;
    timeline.appendChild(timeSlot);
  });
}

// Extract relevant schedule information from various sections
function extractSchedule(networkData) {
  const schedule = [];
  
  // Extracting shows
  networkData.shows.forEach(show => {
    schedule.push({time: new Date(show.schedule_time).toLocaleTimeString(), title: show.title});
  });
  
  // Extracting commercials
  networkData.commercials.forEach(commercial => {
    schedule.push({time: new Date(commercial.schedule_time).toLocaleTimeString(), title: commercial.title});
  });
  
  // Extracting live_events
  networkData.live_events.forEach(live_event => {
    schedule.push({time: new Date(live_event.schedule_time).toLocaleTimeString(), title: live_event.title});
  });
  
  // Add more sections if needed
  
  return schedule;
}

// Fetch JSON file and populate the schedule and timeline
function updateSchedule() {
  fetch('./json/m3tvjson.json')  // Replace with the actual path to your JSON file
    .then(response => response.json())
    .then(data => {
      const schedule = extractSchedule(data.network);
      populateTimeline(schedule);
    })
    .catch(error => {
      console.error('Error fetching JSON:', error);
    });
}

// Call the updateSchedule function initially
updateSchedule();

// Add setInterval to periodically update the schedule
const updateInterval = 30000; // 30 seconds
setInterval(updateSchedule, updateInterval);


// Function to create a new show entry
function createShowEntry() {
    const showEntry = document.createElement('div');
    showEntry.classList.add('show-entry');
    showEntry.setAttribute('draggable', true);

    // Add fields for the show entry
    showEntry.innerHTML = `
        <label>Title: <input type="text" class="show-title"></label><br>
        <label>Description: <textarea class="show-description"></textarea></label><br>
        <label>Schedule Time: <input type="datetime-local" class="show-schedule-time"></label><br>
        <!-- Add more fields as needed -->
        <button onclick="saveShow(this)">Save</button>
        <button onclick="removeShow(this)">Remove Show</button>
    `;

    return showEntry;
}



// Function to save a new show entry
function saveShow(button) {
    const showEntry = button.parentElement;
    const titleInput = showEntry.querySelector('.show-title');
    const descriptionInput = showEntry.querySelector('.show-description');
    const scheduleTimeInput = showEntry.querySelector('.show-schedule-time');

    // Extract information from input fields
    const title = titleInput.value;
    const description = descriptionInput.value;
    const scheduleTime = scheduleTimeInput.value;

    // Create a new show object
    const newShow = {
        title: title,
        description: description,
        schedule_time: scheduleTime,
        // Add more properties as needed
    };

    // Make an HTTP request to a server-side script to update the schedule
    fetch('/saveShow', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newShow),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Schedule updated successfully!', data);
            // Update the schedule and timeline
            updateSchedule();
        })
        .catch(error => {
            console.error('Error updating schedule:', error);
        });

    // Clear input fields
    titleInput.value = '';
    descriptionInput.value = '';
    scheduleTimeInput.value = '';
}





function addNewShow() {
    const scheduleContainer = document.getElementById('schedule-container');
    const showEntry = createShowEntry();
    scheduleContainer.appendChild(showEntry);
    addDragListeners();
}

  
  function removeShow(button) {
    // Remove the corresponding show entry
    const showEntry = button.parentElement;
    showEntry.remove();
  }
  
  function addDragListeners() {
    const showEntries = document.querySelectorAll('.show-entry');
    showEntries.forEach(showEntry => {
      showEntry.addEventListener('dragstart', handleDragStart);
      showEntry.addEventListener('dragover', handleDragOver);
      showEntry.addEventListener('drop', handleDrop);
    });
  }
  
  function handleDragStart(e) {
    e.dataTransfer.setData('text/plain', ''); // Required for Firefox to initiate drag
    e.target.classList.add('dragging');
  }
  
  function handleDragOver(e) {
    e.preventDefault();
  }
  
  function handleDrop(e) {
    e.preventDefault();
  
    const draggedElement = document.querySelector('.dragging');
    const rect = scheduleContainer.getBoundingClientRect();
    const offset = e.clientX - rect.left;
  
    const timeBlock = document.createElement('div');
    timeBlock.classList.add('timeline-block');
    timeBlock.style.width = draggedElement.offsetWidth + 'px';
  
    // Calculate the position based on the offset
    const position = offset - timeBlock.offsetWidth / 2;
    timeBlock.style.marginLeft = Math.max(position, 0) + 'px';
  
    // Append the timeline block to the timeline
    const timeline = document.querySelector('.timeline');
    timeline.appendChild(timeBlock);
  
    // Reset the dragged element class
    draggedElement.classList.remove('dragging');
  }
  