document.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementById('container');
    container.innerHTML = `
    
    <div class="profile">
    <!-- <img src="/images/m3tvlogo.png" alt="Profile Picture">-->
    <!-- <h1>M3TVOrg</h1>-->
       
        
        <div class="vod-container">
          <div id="vod-list" class="vod-list">
          </div>
        </div>
        
        <div id="metadata-container">
        <!-- Metadata content here -->
        </div>


    `;
});
