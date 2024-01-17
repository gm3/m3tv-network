

document.addEventListener("DOMContentLoaded", function() {
    var broadcastwindow = document.getElementById('broadcast-window-wrapper');
    broadcastwindow.innerHTML = `
    
    <div class="broadcast-window" id="broadcast-window">
        <div class="broadcast-window-content">
            <div class="title-container">
            <button class="info-button">&#x2139;</button> <!-- Unicode INFO symbol -->
                <div class="live-indicator">
                    <span class="live-unicode-marker">&#x1F534;</span> <!-- Red Circle Unicode -->
                    <span class="live-text">VOD</span>
                </div>
                <div class="titleText" id="titleText">M3TV Demo Day: 2023 Recap</div>

                

                <div class="action-buttons" id="action-buttons">

                <div id="claimCountdown" class="countdown"><span id="claimTime">00:00:00</span></div>
            
                    <div class="button-tooltip-container">
                        <button class="button">🎟️</button>
                        <span class="tooltip-text">Claim</span>
                    </div>   

                    <div id="mintCountdown" class="countdown"><span id="mintTime">00:00:00</span></div>

                    <div class="button-tooltip-container">
                        <button class="button">🟩</button>
                        <span class="tooltip-text">Mint</span>
                    </div>
                    <div class="button-tooltip-container">
                        <button class="button">🕸</button>
                        <span class="tooltip-text">World</span>
                    </div>
                    <div class="button-tooltip-container">
                        <button class="button">🌎</button>
                        <span class="tooltip-text">Share</span>
                    </div>
                    <div class="button-tooltip-container">
                        <button class="button">🔗Connect</button>
                        <span class="tooltip-text">Connect</span>
                    </div>
                </div>
            
            </div>       
            <div id="videoContainer" class="video-container">
                <video id="myVideo" width="100%" height="auto" autoplay muted>
                    Your browser does not support the video tag.
                </video>
                <div id="videoControls" class="video-controls">
                    <div class="left-controls">
                        <button id="playPause" class="playPause"></button>
                        <div class="time-and-volume">
                            <button id="muteToggle" class="icon-volume"></button>
                            <div id="volumeControls" class="volume-controls hide">
                                <input type="range" id="volumeSlider" min="0" max="1" step="0.1">
                            </div>         
                            <div id="currentTime" class="time-display">00:00:00</div>
                        </div>
                        
                    </div>
                    <div class="right-controls">
                        
                        <button id="fullScreenToggle" class="icon-fullscreen" aria-label="Toggle Fullscreen"></button>
                    </div>
                </div>
                <div id="progressBarContainer" class="progress-bar-container">
                    <div id="progressBar" class="progress-bar"></div>
                </div>
            </div>
            <div class="container" id="container"></div>
        </div> 
       
    </div>`;
    //fetch();
   // titleTextElement.textContent = currentShow.title; 

});
