document.addEventListener("DOMContentLoaded", function() {
    var rightSidebar = document.getElementById('right-sidebar');

    // Default content with a prompt, login and skip buttons
    var defaultContent = `
    <div id="default-overlay">
    <video src="media/video.mp4" width="100%" height="auto" autoplay muted loop>
    Your browser does not support the video tag.
</video>

    <p>Sign Up / Login to Chat</p>
    <button id="signup-button">Sign Up</button>
    <button id="login-button">Login</button>
    <button id="skip-button">Skip</button>
    <div>
        <input type="checkbox" id="tos-agree" name="tos-agree">
        <label for="tos-agree">I agree to the <a href="link-to-tos" target="_blank" >Terms of Service</a></label>
    </div>

    </div>
    <div id="chat-window" class="hidden">
        <!-- Chat messages will appear here -->
    </div>
    <div id="chat-input-area" class="hidden">
        <textarea id="chat-input" placeholder="Chat..."></textarea>
        <button id="send-button">></button>
    </div>

    `;

    rightSidebar.innerHTML = defaultContent;

    var chatInput = document.getElementById('chat-input');
    var sendButton = document.getElementById('send-button');
    var chatWindow = document.getElementById('chat-window');

  // Function to hide overlay and show chat
function showChat() {
    var tosCheckbox = document.getElementById('tos-agree');
    if (tosCheckbox.checked) {
        document.getElementById('default-overlay').style.display = 'none';
        document.querySelectorAll('.hidden').forEach(el => el.classList.remove('hidden'));
    } else {
        alert("You must agree to the Terms of Service to use the chat.");
    }
}

    // Event listeners for buttons
    document.getElementById('signup-button').addEventListener('click', showChat);
    document.getElementById('login-button').addEventListener('click', showChat);
    document.getElementById('skip-button').addEventListener('click', showChat);

    // Send message function
    function sendMessage() {
        var message = chatInput.value.trim();
        if (message) {
            chatWindow.innerHTML += '<p>' + message + '</p>'; // Display the message
            chatInput.value = ''; // Clear the input field
            chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to the bottom
        }
    }

    // Event listener for the Send button
    sendButton.addEventListener('click', sendMessage);

    // Event listener for Enter key in chat input
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault(); // Prevent the default action (new line)
            sendMessage();
        }
    });
});
