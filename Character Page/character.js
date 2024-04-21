document.addEventListener('DOMContentLoaded', function () {
    var barButton = document.querySelector('.bar');
    var navbarClick = document.querySelector('.navbar-click');
    var pageDownButton = document.querySelector('.page-down button');

    barButton.addEventListener('click', function () {
        navbarClick.classList.toggle('active');
        var links = document.querySelectorAll('.navbar a');
        links.forEach(function (link) {
            link.style.display = link.style.display === 'none' ? 'block' : 'none';
        });
    });

    function hideAllDetails() {
        document.querySelector('.archer-detail').style.display = 'none';
        document.querySelector('.assasin-detail').style.display = 'none';
        document.querySelector('.barbarian-detail').style.display = 'none';
        document.querySelector('.warrior-detail').style.display = 'none';
    }

    document.querySelector('.character-list .archer').addEventListener('click', function () {
        hideAllDetails();
        document.querySelector('.archer-detail').style.display = 'flex';
    });

    document.querySelector('.assasin').addEventListener('click', function () {
        hideAllDetails();
        document.querySelector('.assasin-detail').style.display = 'flex';
    });

    document.querySelector('.barbarian').addEventListener('click', function () {
        hideAllDetails();
        document.querySelector('.barbarian-detail').style.display = 'flex';
    });

    document.querySelector('.warrior').addEventListener('click', function () {
        hideAllDetails();
        document.querySelector('.warrior-detail').style.display = 'flex';
    });

    const backArcher = document.querySelector('.archer-detail .back-archer');
    const backAssasin = document.querySelector('.assasin-detail .back-assasin');
    const backBarbarian = document.querySelector('.barbarian-detail .back-barbarian');
    const backWarrior = document.querySelector('.warrior-detail .back-warrior');
    backArcher.addEventListener('click', function () {
        document.querySelector('.archer-detail').style.display = 'none';
    });

    backAssasin.addEventListener('click', function () {
        document.querySelector('.assasin-detail').style.display = 'none';
    });

    backBarbarian.addEventListener('click', function () {
        document.querySelector('.barbarian-detail').style.display = 'none';
    });

    backWarrior.addEventListener('click', function () {
        document.querySelector('.warrior-detail').style.display = 'none';
    });
});


