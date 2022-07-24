console.log('connected');
window.onload = function () {
    const element = document.getElementById('slideshow_elemets');
    // console.log('element: ', element);
    var child;
    for (let i = 0; i < 15; i++) {
        child =
            ```<div class="Slideshow__content swiper-slide">
                <img src="../assets/cycling/${i}" alt="" class="Slideshow__img">
            </div>```;
        element.insertAdjacentHTML('afterend', child);
    }
}