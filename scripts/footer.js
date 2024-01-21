    export function initializeFooter() {
        var footer = document.getElementById('site-footer');
    
        footer.innerHTML = `
        <p>&copy; 2023 M3TV Network. All rights reserved. |
        <a href="/">About</a> |
        <a href="/">Contact</a> |
        <a href="/">Privacy Policy</a> |
        <!-- External links open in a new tab -->
        <a href="https://discord.gg/fawnD8R9QA" target="_blank">Discord</a> |
        <a href="https://github.com/gm3/m3tv-network" target="_blank">Github</a> |
        <a href="https://github.com/M3-org/charter" target="_blank">Charter</a> |
        <a href="https://gm3.github.io/bounty-board/" target="_blank">Bounties</a> |
        <a href="/" target="_blank">Terms Of Service</a>
        </p>
        
        `;
      }