(() =>{
  // header menu
  const burger = document.querySelector('.burger');
  const navMenu = document.querySelector('.header__nav-menu');
  burger.addEventListener('click', () => {
    burger.classList.toggle('burger--active');
    navMenu.classList.toggle('header__nav-menu--active')
    document.body.classList.toggle('stop-scroll')
  })

  document.querySelectorAll('.nav__link').forEach(navLink => {
    navLink.addEventListener('click', (event) => {
      burger.classList.remove('burger--active');
      navMenu.classList.remove('header__nav-menu--active')
      document.body.classList.remove('stop-scroll')
    })
  })

  const searchBox = document.querySelector('.search__box');
  const searchActive = document.querySelector('.search__active-button');
  const searchClose = document.querySelector('.search__close-button');

  searchActive.addEventListener('click', () => {
    searchBox.classList.toggle('search__box--active')
  })

  searchClose.addEventListener('click', () => {
    searchBox.classList.toggle('search__box--active')
  })

  // autoclouser for close element if click targetClass !this element

  function autoClouser(targetClass, activeClass) {

    document.body.addEventListener('click', function (event) {
      if (
        event.isClick
      ) return
      document.querySelectorAll(`.${activeClass}`).forEach(itemActive => {
        itemActive.classList.remove(activeClass);
      });
    })

    const targetClassList = document.querySelectorAll(`.${targetClass}`);
    targetClassList.forEach(item => {
      item.addEventListener('click', (event) => {
        event.isClick = true;
      })
      const button = item.querySelector('button');
      button.addEventListener('click', function (event) {
        targetClassList.forEach(item => {
          if (item !== this.parentElement) item.classList.remove(activeClass)
        });
        item.classList.toggle(`${activeClass}`);
      });
    });
  };

  // scroll-simplebar

  Array.prototype.forEach.call(
    document.querySelectorAll('.scroll'),
    (el) => new SimpleBar(el), {}
  );

  Array.from(document.querySelectorAll('.simplebar-content-wrapper')).forEach(el => {
    el.tabIndex = -1;
  })

  // subNav

  autoClouser('subnav__item', 'subnav__item--active')

  // gallery
  const selcectGallery = document.querySelector('.select');
  //  Select
  const choices = new Choices(selcectGallery, {
    searchEnabled: false,
    itemSelectText: '',
  });

  // slider

  const swiperGallery = new Swiper('.gallery__slider', {
    speed: 400,
    spaceBetween: 100,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
        slidesPerGroup: 2,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 40,
        slidesPerGroup: 3,
      },
      1920: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
      }
    },
  });

  // modal

  const sliderArr = Array.from(document.querySelectorAll('.slider__link'));

  sliderArr.forEach(function (sliderLink) {
    const ID = sliderLink.href.split('#')[1];
    const imgSrc = sliderLink.dataset.srcModal;
    const modalWindow = document.getElementById(`${ID}`);
    const modallouseBtn = modalWindow.querySelector('.modal__close');
    const bigImg = modalWindow.querySelector('.modal__img');

    sliderLink.addEventListener('click', (event) => {
      event.preventDefault();
      modalWindow.showModal();
      bigImg.src = `${imgSrc}`
      modallouseBtn.addEventListener('click', () => modalWindow.close());
    });

    modalWindow.addEventListener('click', (e) => {
      if (e.target === modalWindow) modalWindow.close();
    });
  });

  // catalog

  new Accordion('.accordion-container', {
    openOnInit: [0],
  });

  //artist

  const artistLinkArr = document.querySelectorAll('.descr__link');
  const artistItemArr = Array.from(document.querySelectorAll('.artist__item'));
  const artistIsNotDefined = document.getElementById('artist-is-not-defiend')

  artistLinkArr.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const ID = this.href.split('#')[1] || artistIsNotDefined.id;

      const artist = artistItemArr.find(item => item.id == ID);

      artistItemArr.forEach(item => item.classList.remove('artist__item--active'))

      if (artist) {
        artist.classList.add('artist__item--active');
      } else {
        artistIsNotDefined.classList.add('artist__item--active');
      }
      if (window.innerWidth < 1024) artist.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
    })
  })

  // event

  const swiperEvent = new Swiper('.event__swiper', {
    speed: 400,
    spaceBetween: 100,
    pagination: {
      el: '.event__pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.event__button-next',
      prevEl: '.event__button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 27,
        slidesPerGroup: 3,
      },
      1920: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
      },
    },
  });


  //tooltip



  const tooltipArr = document.querySelectorAll('.tooltip')
  tooltipArr.forEach(el => {
    new Tooltip(el, 'tooltip')
  });

  autoClouser('tooltip', 'tooltip--open');

  // partners

  const swiperPartners = new Swiper('.partners__swapper', {
    speed: 400,
    spaceBetween: 100,
    navigation: {
      nextEl: '.partner__button-next',
      prevEl: '.partner__button-prev',
    },
    breakpoints: {
      500: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 33,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 33,
      },
      1024: {
        slidesPerView: 2,
        slidesPerGroup: 3,
        spaceBetween: 50,
      },
      1800: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      }
    },
  });

  // form
  const heroButton = document.querySelector('.hero__button');

  heroButton.addEventListener('click', () => {
    const subscrForm = document.getElementById('subscribe')
    subscrForm.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
    document.getElementById('user-name').focus();
  });


  const userPhone = document.getElementById('user-tel');
  const telMask = new Inputmask('+7 (999)-999-99-99');
  telMask.mask(userPhone);


  new window.JustValidate('.contacts__form', {
    colorWrong: '#D11616',
    messages: {
      name: {
        required: 'Вы не ввели имя',
        minLength: 'Слишком короткое имя',
        maxLength: 'Слишком длинное имя'
      },
      phone: {
        function: 'Некорректный телефон',
        required: 'Вы не ввели телефон'
      }
    },
    rules: {
      phone: {
        required: true,
        function: () => {
          const phone = userPhone.inputmask.unmaskedvalue();
          console.log(phone)
          return Number(phone) && phone.length === 10;
        }
      },
      name: {
        required: true,
        minLength: 5,
        maxLength: 20,
      },
    },
  })


  ymaps.ready(init);
  function init() {
    const mapContainer = document.querySelector('.contacts__map');
    const body = document.querySelector('.body');

    var myMap = new ymaps.Map("map", {
      center: [55.760236, 37.614877],
      zoom: 14,
      controls: []},
      {
        suppressMapOpenBlock: true
      });

    const mapResize = () => {
      if (body.offsetWidth > 1750) {
        myMap.controls.add('zoomControl', {
          float: 'none',
          size: 'small',
          position: {
            right: 10,
            bottom: `${mapContainer.offsetHeight / 2 + 5}px`
          },
        });

        myMap.controls.add('geolocationControl', {
          float: 'none',
          position: {
            right: 11,
            bottom: `${mapContainer.offsetHeight / 2 - 35}px`
          },
        });
      };
    };

    mapResize();

    window.addEventListener('resize', () => {
      mapResize();
    });

    var placemark = new ymaps.Placemark([55.760236, 37.614877], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/map-mark.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [0, 0],
    });

    myMap.geoObjects.add(placemark);
  };
})();
//адоптив для листов (С 1400 по 1499 гг).
const get_li_list_two = document.querySelectorAll(".ac .ac-panel .change_list_two");
const get_li_list_three = document.querySelectorAll(".ac .ac-panel .change_list_three");
const get_normal_li = document.querySelectorAll("ul.two .descr__item");
const get_ul_one = document.querySelector(".descr__list ul.one");
const get_ul_two = document.querySelector(".descr__list ul.two");
const get_ul_three = document.querySelector(".descr__list ul.three");
function handleResize() {
  let screenWidth = window.innerWidth;
  console.log(screenWidth);
  if (screenWidth <= 1286){
    get_li_list_two.forEach( (item) => {
      get_ul_one.appendChild(item);
    });
    get_li_list_three.forEach( (item) => {
      get_ul_two.appendChild(item);
    });
  }
  else {
    get_li_list_three.forEach( (item) => {
      get_ul_three.appendChild(item);
    });
    get_li_list_two.forEach( (item) => {
      get_ul_two.appendChild(item);
    });
    get_normal_li.forEach( (item) => {
      get_ul_two.appendChild(item);
    });
  }
  if (screenWidth <= 1024){
    get_li_list_three.forEach( (item) => {
      get_ul_three.appendChild(item);
    });
    get_li_list_two.forEach( (item) => {
      get_ul_two.appendChild(item);
    });
    get_normal_li.forEach( (item) => {
      get_ul_two.appendChild(item);
    });
  }
}
window.addEventListener('resize', handleResize);
handleResize();

//пустой блок
function none_information(item){
  console.log(item);
}

// // Обнаружение открытия инструментов разработчика
// window.addEventListener('keydown', function(event) {
//   if (event.keyCode === 123) { // Код клавиши F12
//     event.preventDefault(); // Отменить стандартное действие (открытие инструментов разработчика)
//     for(let i = 0; i < 100; i++){
//       alert('Перезагрузитестраницу! Открытие инструментов разработчика запрещено.');
//     }
//   }
// });
// // Предотвращение появления контекстного меню
// document.addEventListener('contextmenu', function(event) {
//   event.preventDefault();
//   alert('Открытие инструментов разработчика запрещено.');
// });

// // Обработка события нажатия на правую кнопку мыши
// document.addEventListener('mousedown', function(event) {
//   if (event.button === 2) { // Код для правой кнопки мыши
//     event.preventDefault();
//   }
// });