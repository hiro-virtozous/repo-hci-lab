document.addEventListener('DOMContentLoaded', function () {
    var barButton = document.querySelector('.bar');
    var navbarClick = document.querySelector('.navbar-click');

    barButton.addEventListener('click', function () {
        navbarClick.classList.toggle('active');
        var links = document.querySelectorAll('.navbar a');
        links.forEach(function (link) {
            link.style.display = link.style.display === 'none' ? 'block' : 'none';
        });
    });

    document.getElementById('chestBefore').addEventListener('click', function () {
        const chestBefore = document.getElementById('chestBefore');
        const chestAfter = document.getElementById('chestAfter');
        const envelopeContainer = document.getElementById('envelope')
        
        this.style.display = 'none';
        
        envelopeContainer.classList.add('animate-envelope');
        document.getElementById('chestAfter').style.display = 'block';
        document.getElementById('envelope').style.display = 'block';
        chestBefore.addEventListener('click', function () {
            chestBefore.style.opacity = '0';
            setTimeout(() => {
                chestBefore.style.display = 'none';
                chestAfter.style.display = 'block';
                envelopeContainer.style.display = 'block';
                setTimeout(() => {
                    chestAfter.style.opacity = '1';
                }, 10);
            }, 150);
        });
    });
    
    document.getElementById('envelope').addEventListener('click', function () {
        const envelopeContainer = document.getElementById('envelope');
        const map = document.getElementById('mapId');
        const x = document.getElementById('xId');
        envelopeContainer.style.display = 'none';
        map.style.display = 'block';
        x.style.display = 'block';
    });

    document.getElementById('xId').addEventListener('click', function () {
        const envelopeContainer = document.getElementById('envelope');
        const map = document.getElementById('mapId');
        const x = document.getElementById('xId');
        envelopeContainer.style.display = 'none';
        map.style.display = 'none';
        x.style.display = 'none';
    });
});



