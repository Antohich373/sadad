let openNavigation = document.querySelector('.header__toggle');
let navigation = document.querySelector('.header__wrap-navigation');

let closeNavigation = document.querySelector('.header__navigation-close');

openNavigation.addEventListener('click', function() {
    navigation.classList.add('header__wrap-navigation-active')
    document.querySelector('.shadov__navigation').classList.add('shadov__navigation-active')
});

closeNavigation.addEventListener('click', function() {
    navigation.classList.remove('header__wrap-navigation-active')
    document.querySelector('.shadov__navigation').classList.remove('shadov__navigation-active')
});

let link = document.querySelectorAll('.header__link')

for(let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', function() {
        navigation.classList.remove('header__wrap-navigation-active')
        document.querySelector('.shadov__navigation').classList.remove('shadov__navigation-active')
    })
}

// let itemCity = document.querySelectorAll('.city-network__city-item')
// for(let i = 0; i < itemCity.length; i++) {
//     itemCity[i].addEventListener('click', function() {
//         let target = event.target;
//         let plet = target.dataset.networkcity
//         document.querySelector('.header__desctop-nav__info__city__button').innerHTML = plet
//         document.querySelector('.city-network__city-list').classList.remove('city-network__city-list-active')
//     })
// };

$("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
  });

jQuery(document).ready(function($) {
    $('.catalog__link').magnificPopup({
        type: 'inline'
    });
});

let openColor = document.querySelectorAll('.catalog__card__color')
let item = document.querySelectorAll('.catalog__card__item-color')
for(let j = 0; j < item.length; j++) {
    item[j].addEventListener('click', function() {
       let wraper = this.closest('.catalog__card')
       let dataImage = this.dataset.color
        let images = wraper.querySelectorAll('[class*="catalog__card__img"]')
        for(let i = 0; i < images.length; i++) {
            images[i].src = dataImage
        }
    })
}

for(let i = 0; i < openColor.length; i++) {
    openColor[i].addEventListener('click', function() {
        document.querySelector('.catalog__card__list-color').classList.toggle('catalog__card__list-color-active')

    })    
}


/*ОТКРЫТЬ ЗАКАЗАТЬ ЗВОНОК*/

let openCall = document.querySelector('.subtitle__button')

openCall.addEventListener('click', function() {
    document.querySelector('.popup-wrap').classList.add('popup-wrap-active')
})

/*ЗАКРЫТЬ ЗАКАЗАТЬ ЗВОНОК*/

let closeCall = document.querySelector('.clsoe-popup')

closeCall.addEventListener('click', function() {
    document.querySelector('.popup-wrap').classList.remove('popup-wrap-active')
})