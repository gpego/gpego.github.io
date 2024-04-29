window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".topnav");
    if (window.scrollY > 300) {
        navbar.style.top = "0"; // Show the menu
    } else {
        navbar.style.top = "-50px"; // Hide the menu
    }
});
