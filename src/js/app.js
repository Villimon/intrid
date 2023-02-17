import Swiper from 'swiper';

//Не получилось реализовать свайпер, какая-то часть методов не работает
const swiper = new Swiper('.swiper', {
    slidesPerView: 1.3,
    spaceBetween: 30
});




document.addEventListener('click', onClick);

//Я повесил обработчик на все пункты меню, но оставил одно выпадающее меню
function onClick(e) {
    const targetElement = e.target
    const activeItem = document.querySelector('.item-active')
    const activeBodyHeader = document.querySelector('.active-body-header')
    //Находим наши ссылки и навешиваем классы
    if (targetElement.closest('.header__item')) {
        const bodyHeader = document.querySelector('.body-header')
        if (bodyHeader) {
            //удаляем классы, если выбрали другое меню
            if (activeItem && activeItem !== targetElement) {
                activeItem.classList.remove('item-active')
                activeBodyHeader.classList.remove('active-body-header')
            }
            targetElement.classList.toggle('item-active')
            bodyHeader.classList.toggle('active-body-header')
        }
        e.preventDefault()
    }
    //Закрываем выпадающий список, если клик был не ссылка или не само меню 
    if (!targetElement.closest('.header__item,.body-header')) {
        if (activeItem && activeItem !== targetElement) {
            activeItem.classList.remove('item-active')
            activeBodyHeader.classList.remove('active-body-header')
        }
    }

    //Открытие первого и второго выпадающего меню
    if (targetElement.closest('.banner__arrow')) {
        const subMenuId = targetElement.dataset.btn
        const bannerSubmenu = document.querySelector(`[data-menu='${subMenuId}']`)

        if (bannerSubmenu) {
            bannerSubmenu.classList.toggle('banner__submenu-open')

        }
    }
    const activeBannerSubmenu = document.querySelector('.banner__submenu-open')
    if (!targetElement.closest('.banner__arrow,.banner__submenu')) {
        if (activeBannerSubmenu && activeBannerSubmenu !== targetElement) {
            activeBannerSubmenu.classList.remove('banner__submenu-open')
        }
    }

    //Открытие блока с инпута для ввода цены
    if (targetElement.closest('.banner__input-number')) {
        const bodyForm = document.querySelector('.banner__body')
        if (bodyForm) {
            bodyForm.classList.add('banner__body-open')
        }
    }
    const activeBodyForm = document.querySelector('.banner__body-open')

    if (!targetElement.closest('.banner__input-number,.banner__body')) {

        if (activeBodyForm && activeBodyForm !== targetElement) {
            console.log('qwe');
            activeBodyForm.classList.remove('banner__body-open')
        }
    }

    // результат поиска
    // это больше для верстке сделано, если будет реальный запрос на сервер, то конечно код будет дополняться 
    if (targetElement.closest('.banner__search')) {
        const searchList = document.querySelector('.search-banner')
        const inputValue = document.querySelector('.banner__input-text')
        //если строка пустая, поиск не делаем
        if (inputValue.value.length !== 0 && searchList) {
            searchList.classList.add('search-banner-open')
            inputValue.value = ''
        }


        e.preventDefault()
    }
    const activeSearchList = document.querySelector('.search-banner-open')
    if (!targetElement.closest('.banner__search')) {
        if (activeSearchList && activeSearchList !== targetElement) {
            activeSearchList.classList.remove('search-banner-open')
        }
    }


}




//Тут получаем value с каждой формы
//Делал такое первый раз на нативном JS, не знаю на сколько это хороший способ
const form = document.querySelectorAll('.banner__body')

form.forEach(onChange)

function onChange(item) {
    item.oninput = function () {
        let a = document.querySelector(".banner__price");
        let b = document.querySelector(".banner__price-2");
        document.getElementById("result").innerHTML = `${a.value} - ${b.value}`;
    }
}














