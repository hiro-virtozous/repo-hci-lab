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
});

// Hide all details and show the specific detail when a button is clicked
function showDetail(detailId) {
    // Hide all detail sections
    document.querySelectorAll('.detail-container div').forEach(function(div) {
        div.style.display = 'none';
    });

    // Show the specific detail section
    document.getElementById(detailId).style.display = 'block';
    
    // Show the detail container
    document.querySelector('.detail-container').style.display = 'flex';
}

// Attach event listeners to buttons
document.querySelector('.archer').addEventListener('click', function() {
    showDetail('archerDetail');
});
document.querySelector('.assasin').addEventListener('click', function() {
    showDetail('assasinDetail');
});
document.querySelector('.barbarian').addEventListener('click', function() {
    showDetail('barbarianDetail');
});
document.querySelector('.warrior').addEventListener('click', function() {
    showDetail('warriorDetail');
});
