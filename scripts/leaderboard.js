document.addEventListener("DOMContentLoaded", function() {
    fetch('./json/basic_m3tv_data.json')
    .then(response => response.json())
    .then(data => {
        console.log("Fetched data:", data); // Debug: Log the fetched data
        const leaderboardData = extractLeaderboardData(data.network);
        console.log("Extracted leaderboard data:", leaderboardData); // Debug: Log the extracted leaderboard data
        leaderboardData.sort((a, b) => b.rating - a.rating);
        populateLeaderboard(leaderboardData);
    })
    .catch(error => {
        console.error('Error fetching JSON:', error);
        console.log("Fetch failed"); // Debug: Log fetch failure
    });
    
function extractLeaderboardData(networkData) {
    const leaderboardData = [];
    networkData.shows.forEach(show => {
        if (show.metadata && show.metadata.rating) {
            leaderboardData.push({
                title: show.title,
                rating: show.metadata.rating,
                url: show.metadata.url,
                description: show.metadata.description,
                thumbnail: show.metadata.thumbnail
            });
        }
    });
    console.log("Leaderboard data after extraction:", leaderboardData); // Debug: Log data after extraction
    return leaderboardData;
}

function populateLeaderboard(leaderboardData) {
    const leaderboardContainer = document.getElementById('leaderboard');
    console.log("Populating leaderboard..."); // Debug: Log start of leaderboard population
    leaderboardData.forEach(item => {
        const entry = document.createElement('div');
        entry.classList.add('leaderboard-entry');

        const rating = document.createElement('p');
        rating.textContent = `${item.rating}`;
        entry.appendChild(rating);

        // Create the star image element
        const starImage = document.createElement('img');
        starImage.src = 'images/star.png'; // Replace with the path to your star image
        starImage.classList.add('star-image'); // Add a class for styling
        entry.appendChild(starImage);

        const link = document.createElement('a');
        link.href = item.url; // Assuming 'url' is part of your item
        link.target = '_blank'; // Opens link in a new tab

        const thumbnail = document.createElement('img');
        thumbnail.src = item.thumbnail;
        thumbnail.alt = item.title;
        link.appendChild(thumbnail);
        entry.appendChild(link);

        const title = document.createElement('h3');
        title.textContent = item.title;
        entry.appendChild(title);

        const description = document.createElement('p');
        description.textContent = item.description;
        entry.appendChild(description);

        leaderboardContainer.appendChild(entry);
    });
}

});


