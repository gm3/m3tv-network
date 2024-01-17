document.addEventListener("DOMContentLoaded", function() {

        // When the user clicks on the button, toggle between hiding and showing the dropdown content
        function dropdownToggle() {
            document.querySelector(".dropdown-content").classList.toggle("show");
          }

        // Attach event listener to dropdown button
        document.querySelector(".dropbtn").addEventListener("click", dropdownToggle);

        // Close the dropdown if the user clicks outside of it
        window.onclick = function(event) {
          if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            for (var i = 0; i < dropdowns.length; i++) {
              var openDropdown = dropdowns[i];
              if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
              }
            }
          }
        }
      });
