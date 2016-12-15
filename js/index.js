$(function () {
    function resize(originSize, type) {
        var type = type || "x";
        if (type == "x") {
            var clientw = document.documentElement.clientWidth;
            var scale = clientw / originSize * 100;
        } else if (type == "y") {
            var clienth = document.documentElement.clientHeight;
            var scale = clienth / originSize * 100;
        }
        var html = document.querySelector("html");
        html.style.fontSize = scale + "px";
    }

    resize(750);
    try {
        var swiper = new Swiper(".swiper-container", {
            pagination: ".swiper-pagination",
            autoplay: 2000
        })
    }catch (e){}
})