document.addEventListener("DOMContentLoaded", function() {
    var broadcastwindow = document.getElementById('broadcast-window-wrapper');
    broadcastwindow.innerHTML = `
    
    <div class="broadcast-window" id="broadcast-window">

              <div class="broadcast-window-content">
                        
                  
                        <video width="100%" height="auto" controls autoplay muted>
                        Your browser does not support the video tag.
                        </video>
                  
                        <div class="title-container">
                        <div class="titleText" id="titleText">M3TV Demo Day: 2023 Recap</div>
                        <div class="action-buttons" id="action-buttons">
                        <button class="button follow-button">Follow</button>
                            <button class="button">Action 1</button>
                            <button class="button">Action 2</button>
                            <button class="button">Action 3</button>
                            <button class="button">Action 4</button>
                            <button class="button">Action 5</button>
                
                            <!-- Add more action buttons as needed -->
                    </div>
                      </div>
                        

                    


                  <div class="container" id="container"></div>

                </div> 
            </div>

            
    `;
    
   
});
