document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById('myVideo');
    var playPauseButton = document.getElementById('playPause');
    var currentTimeDisplay = document.getElementById('currentTime');
    var progressBarContainer = document.getElementById('progressBarContainer');
    var progressBar = document.getElementById('progressBar');
    var progressIndicator = document.getElementById('progressIndicator');
    var muteToggleButton = document.getElementById('muteToggle');
    var volumeSlider = document.getElementById('volumeSlider');
    var fullScreenToggleButton = document.getElementById('fullScreenToggle');
    var videoControls = document.getElementById('videoControls');

    // init
    // Set initial class for playPause button
    playPauseButton.classList.add('play');


    function formatTime(seconds) {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = Math.floor(seconds % 60);
        return [
            h, // hours
            m > 9 ? m : '0' + m, // minutes
            s > 9 ? s : '0' + s, // seconds
        ].join(':');
    }

    video.addEventListener('timeupdate', function() {
        if (currentTimeDisplay) { // Check if the element exists
            currentTimeDisplay.textContent = formatTime(video.currentTime);
        }
        updateProgressBar();
    });
    
    

    // Show controls on hover
    var videoContainer = document.getElementById('videoContainer');
    videoContainer.addEventListener('mouseover', function() {
        videoControls.style.display = 'block';
    });
    videoContainer.addEventListener('mouseout', function() {
        videoControls.style.display = 'none';
    });

    // Play/Pause toggle
    playPauseButton.addEventListener('click', function() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });

    // Update the play button text and current time


    function updatePlayButton() {
        if (video.paused) {
            playPauseButton.classList.remove('pause');
            playPauseButton.classList.add('play');
        } else {
            playPauseButton.classList.remove('play');
            playPauseButton.classList.add('pause');
        }
    }
    
    

    let isPlaying = false; // Flag to keep track of play state



    playPauseButton.addEventListener('click', function() {
        // If the video is already playing, pause it.
        if (isPlaying) {
            video.pause();
            isPlaying = false;
        } else {
            // Attempt to play the video and handle the promise
            let playPromise = video.play();
            
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    // The play was successful
                    isPlaying = true;
                }).catch(error => {
                    // The play was prevented
                    console.error('Play was prevented:', error);
                    isPlaying = false;
                });
            }
        }
    });
    
    // Update the playPauseButton state when the video plays or pauses
    video.addEventListener('play', function() {
        console.log('Video playing');

        playPauseButton.classList.remove('play');
        playPauseButton.classList.add('pause');
        isPlaying = true;
    });
    
    video.addEventListener('pause', function() {
        console.log('Video paused');
        playPauseButton.classList.remove('pause');
        playPauseButton.classList.add('play');
        isPlaying = false;
    });
    

    
    
    
    
    video.addEventListener('play', updatePlayButton);
    video.addEventListener('pause', updatePlayButton);



    function updateProgressBar() {
        var percentage = (video.currentTime / video.duration) * 100;
        progressBar.style.width = `${percentage}%`;
    }
    

    // Click on progress bar to seek
    progressBarContainer.addEventListener('click', function(e) {
        var rect = progressBarContainer.getBoundingClientRect();
        var position = (e.clientX - rect.left) / rect.width;
        video.currentTime = position * video.duration;
    });

    // Mute toggle
    muteToggleButton.addEventListener('click', function() {
        video.muted = !video.muted;
    });

    // Volume slider
    volumeSlider.addEventListener('input', function() {
        video.volume = this.value;
    });

    // Toggle volume controls when the mute button is clicked
muteToggleButton.addEventListener('click', function() {
    video.muted = !video.muted;
    volumeControls.classList.toggle('hide');
});

// Hide volume controls when clicked outside
document.addEventListener('click', function(event) {
    if (!muteToggleButton.contains(event.target) && !volumeControls.contains(event.target)) {
        volumeControls.classList.add('hide');
    }
});

    // Full screen toggle
    fullScreenToggleButton.addEventListener('click', function() {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) { /* Safari */
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) { /* IE11 */
            video.msRequestFullscreen();
        }
    });

    // Additional event listeners as needed
});
