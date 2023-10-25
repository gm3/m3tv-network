const toggleLeftButton = document.querySelector('.toggle-left');
const toggleRightButton = document.querySelector('.toggle-right');

const sidebarLeft = document.querySelector('.sidebar-left');
const sidebarRight = document.querySelector('.sidebar-right');

toggleLeftButton.addEventListener('click', function() {
  sidebarLeft.classList.toggle('collapsed');
});

toggleRightButton.addEventListener('click', function() {
  sidebarRight.classList.toggle('collapsed');
});
