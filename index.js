
    document.addEventListener("DOMContentLoaded", function () {
        let carrossel = new bootstrap.Carousel(document.querySelector('#carouselExampleIndicators'));

        document.getElementById("item-1").addEventListener("mouseover", function () {
            carrossel.to(0);
        });

        document.getElementById("item-2").addEventListener("mouseover", function () {
            carrossel.to(1);
        });

        document.getElementById("item-3").addEventListener("mouseover", function () {
            carrossel.to(2);
        });
    });
