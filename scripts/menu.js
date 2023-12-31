let leaderboardData = []; // Global variable to store the leaderboard data

document.addEventListener("DOMContentLoaded", function() {
    var menu = document.getElementById('menutop');

    menu.innerHTML = `
    <header class="menu-header">
    <div class="dropdown">
    <button class="dropbtn">≡</button>
        <div class="dropdown-content">
            
        
        <!-- External links open in a new tab -->
        <a href="https://discord.gg/fawnD8R9QA" target="_blank">Discord</a>
        <a href="https://github.com/gm3/m3tv-network" target="_blank">Github</a>
        <a href="leaderboard.html" target="_blank">Leaderboard</a>
        </div>
    </div>

        <div class="logo">
            <a href="/"><img src="images/m3tvlogo.png" alt="Logo"></a>
        </div>
        <div class="menu" id="menu">
        <!-- <a href="https://discord.gg/fawnD8R9QA" target="_blank">Discord</a>-->
        <!--  <a href="https://github.com/gm3/m3tv-network" target="_blank">Github</a>-->
        <!--  <a href="leaderboard.html" target="_blank">Leaderboard</a>-->
        </div>
        <form id="searchForm">
            <input type="text" id="searchInput" placeholder="Search...">
            <button type="submit" class="search-icon">&#128269;</button>
            <div id="autocompleteList" class="autocomplete-items"></div>
        </form>
    </header>
    `;

    // Fetch the JSON data and process it
    fetch('./json/basic_m3tv_data.json')
    .then(response => response.json())
    .then(data => {
        // Process the data
        leaderboardData = extractLeaderboardData(data.network);
        // Initialize autocomplete with the processed data
        autocomplete(document.getElementById("searchInput"), leaderboardData);
    })
    .catch(error => {
        console.error('Error fetching JSON:', error);
    });

    // Function to extract leaderboard data from the fetched JSON
    function extractLeaderboardData(networkData) {
        return networkData.shows.map(show => ({
            title: show.title,
            rating: show.metadata.rating,
            url: show.metadata.url,
            description: show.metadata.description,
            thumbnail: show.metadata.thumbnail
        }));
    }

    // Autocomplete function
    function autocomplete(inp, arr) {
        var currentFocus;
        inp.addEventListener("input", function(e) {
            var a, b, i, val = this.value;
            closeAllLists();
            if (!val) { return false; }
            currentFocus = -1;
            a = document.createElement("DIV");
            a.setAttribute("id", this.id + "autocomplete-list");
            a.setAttribute("class", "autocomplete-items");
            this.parentNode.appendChild(a);
            for (i = 0; i < arr.length; i++) {
                if (arr[i].title.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                    b = document.createElement("DIV");
                    b.innerHTML = "<strong>" + arr[i].title.substr(0, val.length) + "</strong>";
                    b.innerHTML += arr[i].title.substr(val.length);
                    b.innerHTML += "<input type='hidden' value='" + arr[i].title + "'>";
                    b.addEventListener("click", function(e) {
                        inp.value = this.getElementsByTagName("input")[0].value;
                        closeAllLists();
                    });
                    a.appendChild(b);
                }
            }
        });
        inp.addEventListener("keydown", function(e) {
            var x = document.getElementById(this.id + "autocomplete-list");
            if (x) x = x.getElementsByTagName("div");
            if (e.keyCode == 40) {
                currentFocus++;
                addActive(x);
            } else if (e.keyCode == 38) {
                currentFocus--;
                addActive(x);
            } else if (e.keyCode == 13) {
                e.preventDefault();
                if (currentFocus > -1) {
                    if (x) x[currentFocus].click();
                }
            }
        });
        function addActive(x) {
            if (!x) return false;
            removeActive(x);
            if (currentFocus >= x.length) currentFocus = 0;
            if (currentFocus < 0) currentFocus = (x.length - 1);
            x[currentFocus].classList.add("autocomplete-active");
        }
        function removeActive(x) {
            for (var i = 0; i < x.length; i++) {
                x[i].classList.remove("autocomplete-active");
            }
        }
        function closeAllLists(elmnt) {
            var x = document.getElementsByClassName("autocomplete-items");
            for (var i = 0; i < x.length; i++) {
                if (elmnt != x[i] && elmnt != inp) {
                    x[i].parentNode.removeChild(x[i]);
                }
            }
        }
        document.addEventListener("click", function (e) {
            closeAllLists(e.target);
        });
    }

    // Add click event listener to each menu item that has a 'data-url'
    document.querySelectorAll('.menu a[data-url]').forEach(menuItem => {
        menuItem.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior
            const url = this.getAttribute('data-url'); // Get the URL from the 'data-url' attribute

            // Fetch the content and display it
            fetchAndDisplayContent(url);
        });
    });

    function fetchAndDisplayContent(url) {
        fetch(url)
            .then(response => response.text())
            .then(html => {
                console.log("Fetched HTML:", html); // Debug: Log fetched HTML
                document.getElementById('broadcast-window').innerHTML = html;
            })
            .catch(error => console.error('Error fetching content:', error));
    }

   

      
      


});

