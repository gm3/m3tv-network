
// Event listener for the DOMContentLoaded event
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");
    // Call the function to load VOD content once the DOM is fully loaded
    loadVodContent();
});

function loadVodContent() {
    //console.log("loadVodContent called");

    fetch('./json/basic_m3tv_data.json')
        .then(response => {
            //console.log("Received response from fetch");
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            //console.log("Data received and parsed:", data);

            const networkData = data.network;
            Object.keys(networkData).forEach(category => {
                if (category === 'commercials') {
                    return;
                }

                //console.log(`Processing category: ${category}`);

                networkData[category].forEach((item, index) => {
                    //console.log(`Processing item ${index} in category ${category}:`, item);

                    // Convert schedule time to a readable format
                    const readableScheduleTime = new Date(item.schedule_time).toLocaleString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit'
                    });

                    const vodItem = document.createElement('div');
                    vodItem.classList.add('vod-item');

                    vodItem.innerHTML = `
                    <div class="title"><a href="" id=
                    vodlink-title">${item.title} - ${readableScheduleTime}</a></div>    
                    <a href="" id=
                        vodlink">
                        <img src="${item.metadata.thumbnail}" alt="${item.title}"></a>

                        <!--<div class="description">${item.metadata.description}</div>-->
                        <!-- Add more details as needed -->
                    `;

                    document.getElementById('vod-list').appendChild(vodItem);
                });
            });
        })
        .catch(error => {
            console.error('Error loading content:', error);
        });
}












