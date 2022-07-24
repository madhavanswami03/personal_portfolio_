console.log('connected');
window.onload = function () {
    const element = document.getElementById('slideshow_elemets');
    // console.log('element: ', element);
    var child;
    for (let i = 1; i <= 15; i++) {
        child =
            `<div class="Slideshow__content swiper-slide">
                <img src="../assets/cycling/${i}.jpg" alt="" class="Slideshow__img">
            </div>`;
        element.innerHTML += child;
    }
}