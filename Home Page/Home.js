document.addEventListener('DOMContentLoaded', function() {
    var barButton = document.querySelector('.bar');
    var navbarClick = document.querySelector('.navbar-click');

    barButton.addEventListener('click', function() {
        navbarClick.classList.toggle('active');
        // Toggle the visibility of links in the navbar
        var links = document.querySelectorAll('.navbar a');
        links.forEach(function(link) {
            link.style.display = link.style.display === 'none' ? 'block' : 'none';
        });
    });
});