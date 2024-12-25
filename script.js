document.querySelector('.menu-toggle').addEventListener('click', function () {
    const menuList = document.querySelector('.menu-list');
    menuList.classList.toggle('active');
});
function selectCard(selectedCard) {
    const cards = document.querySelectorAll('.card2');
    cards.forEach(card => {
        card.classList.remove('selected');
    });

    selectedCard.classList.add('selected');
}
$(document).ready(function () {
    const $carousel = $('.carousel');
    const $pager = $('.pager');

    $carousel.slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false
    });

    function updatePager() {
        const current = $carousel.slick('slickCurrentSlide') + 1;
        const total = $carousel.slick('getSlick').slideCount;
        $pager.text(`${current} / ${total}`);
    }

    updatePager();


    $carousel.on('afterChange', function () {
        updatePager();
    });

    $('.prev').on('click', function () {
        $carousel.slick('slickPrev');
    });

    $('.next').on('click', function () {
        $carousel.slick('slickNext');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.faq-item h3');

    items.forEach(item => {
        item.addEventListener('click', () => {
            const content = item.nextElementSibling;
            content.classList.toggle('visible');
        });
    });
});

document.getElementById('feedback-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch('https://formcarry.com/s/sHlef_x60u9', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                document.getElementById('response-message').innerText = 'Сообщение успешно отправлено!';
                this.reset();
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
            document.getElementById('response-message').innerText = 'Произошла ошибка. Пожалуйста, попробуйте еще раз.';
        });
});
