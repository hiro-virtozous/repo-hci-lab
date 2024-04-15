document.addEventListener('DOMContentLoaded', function() {
    var barButton = document.querySelector('.bar');
    var navbarClick = document.querySelector('.navbar-click');
    var pageDownButton = document.querySelector('.page-down button');

    barButton.addEventListener('click', function() {
        navbarClick.classList.toggle('active');
        var links = document.querySelectorAll('.navbar a');
        links.forEach(function(link) {
            link.style.display = link.style.display === 'none' ? 'block' : 'none';
        });
    });

    pageDownButton.addEventListener('click', function() {
        var facilityContainer = document.querySelector('.facility-container');

        if (facilityContainer) {
            window.scrollTo({
                top: facilityContainer.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
