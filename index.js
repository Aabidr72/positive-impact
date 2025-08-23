let isNavOpen = false

document.body.addEventListener('click', function (event) {
    // Closes the side navigation menu if user clicks anywhere
    // outside of the side navigation element.
    if (!document.getElementById("sidenav").contains(event.target) && 
        !document.getElementById("menu-button").contains(event.target) &&
        isNavOpen) {
        closeNav();
    }
});

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("sidenav").style.width = "250px";
  document.getElementById("overlay").style.display = "block";
  isNavOpen = true;
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("sidenav").style.width = "0";
  document.getElementById("overlay").style.display = "none";
  isNavOpen = false;
}