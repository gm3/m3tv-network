const timeline = document.getElementById('timeline');

// Function to populate the timeline
function populateTimeline(schedule) {
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

// Fetch JSON file and populate the timeline
fetch('./json/m3tvjson.json')  // Replace with the actual path to your JSON file
  .then(response => response.json())
  .then(data => {
    const schedule = extractSchedule(data.network);
    populateTimeline(schedule);
  })
  .catch(error => {
    console.error('Error fetching JSON:', error);
  });
