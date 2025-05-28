import { initializeContainer } from './infopanel.js'; // adjust the path as necessary

let broadcastWindowInitialized = false; // Flag to ensure one-time initialization

document.addEventListener("DOMContentLoaded", function() {
    if (broadcastWindowInitialized) {
        console.log("Broadcast window already initialized. Skipping innerHTML rewrite.");
        // Re-dispatch event in case listener was added late, though primary init should be guarded by flags in loadvods.js
        const event = new Event('broadcastWindowReady');
        document.dispatchEvent(event);
        return;
    }
    console.log("Initializing broadcast window: setting innerHTML and dispatching 'broadcastWindowReady'.");

    var broadcastwindow = document.getElementById('broadcast-window-wrapper');
    broadcastwindow.innerHTML = `
    
    <div class="broadcast-window" id="broadcast-window">
        <div class="broadcast-window-content">
            <div id="youtube-player-container" class="video-container">
                <iframe id="youtube-player-iframe" 
                        width="100%" 
                        height="100%" 
                        src="" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                </iframe>
            </div>
            <div class="container" id="container"></div>
        </div> 
       
    </div>`;
    initializeContainer();

    broadcastWindowInitialized = true; // Set the flag after initialization

    // Dispatch an event indicating that the broadcast window DOM is ready
    const event = new Event('broadcastWindowReady');
    document.dispatchEvent(event);
});
