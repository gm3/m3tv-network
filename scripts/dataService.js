// Parse a duration string (e.g., '2h 30m') into milliseconds
export function parseDuration(durationStr) {
    const duration = {
        h: 3600000, // 1 hour in milliseconds
        m: 60000,   // 1 minute in milliseconds
        s: 1000     // 1 second in milliseconds
    };

    const regex = /(\d+)(h|m|s)/g;
    let result = 0;
    let match;

    // Iterate over all the matches for hours, minutes, and seconds
    while ((match = regex.exec(durationStr)) !== null) {
        const value = parseInt(match[1], 10);
        const unit = match[2];
        const millis = value * (duration[unit] || 0);
        result += millis;
    }

    return result;
}

// Fetch schedule data from a JSON file and extract the schedule
export async function fetchScheduleData() {
    try {
        const response = await fetch('./json/basic_m3tv_data.json');
        const data = await response.json();

        if (data && data.network) {
            return extractSchedule(data.network);
        } else {
            console.error('Invalid JSON data:', data);
            return [];
        }
    } catch (error) {
        console.error('Error fetching JSON:', error);
        return [];
    }
}

// Extract and sort the schedule from network data
export function extractSchedule(networkData) {
    let schedule = [];
    ['shows', 'commercials', 'others'].forEach(category => {
        networkData[category].forEach(item => {
            const extractedItem = {
                ...item,
                schedule_time: item.schedule_time,
                end_time: new Date(new Date(item.schedule_time).getTime() + parseDuration(item.length))
            };
            schedule.push(extractedItem);
        });
    });
    schedule.sort((a, b) => new Date(a.schedule_time) - new Date(b.schedule_time));
    return schedule;
}
