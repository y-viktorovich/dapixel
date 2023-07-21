
/* Slider Swiper https://swiperjs.com/get-started
=============================*/

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // Navigation arrows
    modules: [Navigation],
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    speed: 700,
});