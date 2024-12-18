
const btn = document.querySelector('.main__button_show-more');
const expand = btn.querySelector('.expand');
const hidden = document.querySelectorAll('.hidden');
const hiddenLarge = document.querySelectorAll('.hidden-large');


//чтобы свайпер был только на мобильном устройстве

let swiper = 0;
function initSwiper() {
    if (window.innerWidth <= 767 && !swiper) {
        swiper = new Swiper('.swiper', {
            direction: 'horizontal',
            loop: true,
            slidesPerView: 'auto',
            spaceBetween: 16,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    } else if (window.innerWidth > 767 && swiper) {
        swiper.destroy();
        swiper = 0;
    }
}
initSwiper()
window.addEventListener('resize', initSwiper);

//показать все - скрыть

btn.addEventListener('click', function clickButtonShowMore() {

    if (window.innerWidth >= 768 && window.innerWidth < 1120) {

        if (expand.style.transform === 'rotate(180deg)') {
            expand.style.transform = 'rotate(0deg)';
            btn.textContent = 'Показать все';
            btn.prepend(expand);
            hidden.forEach(function(element) {
                element.style.display = 'none';
            });
        } else {
            expand.style.transform = 'rotate(180deg)';
            btn.textContent = 'Скрыть';
            btn.prepend(expand);
            hidden.forEach(function(element) {
                element.style.display = 'flex';
            });
        }

    } else if (window.innerWidth >= 1120) {

        if ( expand.style.transform === 'rotate(180deg)') {
            expand.style.transform = 'rotate(0deg)';
            btn.textContent = 'Показать все';
            btn.prepend(expand);
            hiddenLarge.forEach(function(element) {
                element.style.display = 'none';
            });
        } else {
            expand.style.transform = 'rotate(180deg)';
            btn.textContent = 'Скрыть';
            btn.prepend(expand);
            hiddenLarge.forEach(function(element) {
                element.style.display = 'flex';
            });
        }
    }
})

