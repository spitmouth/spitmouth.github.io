document.addEventListener("DOMContentLoaded", function() {
    let startX, currentScroll;
    const gallery = document.querySelector('.gallery');

    gallery.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX;
        currentScroll = gallery.scrollLeft;
    });

    gallery.addEventListener('touchmove', e => {
        const touchMoveX = e.touches[0].clientX;
        const diffX = startX - touchMoveX;
        gallery.scrollLeft = currentScroll + diffX;
    });
});
