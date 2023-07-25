
/* Slider Swiper https://swiperjs.com/get-started
=============================*/

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';


const swiper = new Swiper('.swiper', {
    modules: [Navigation, Autoplay],

    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
      delay: 4000,
    },
    
    speed: 700,
});