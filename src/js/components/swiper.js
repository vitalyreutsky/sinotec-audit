// Подключение свайпера
import Swiper, {
  Autoplay,
  EffectFade,
  EffectFlip,
  Keyboard,
  Navigation,
  Pagination,
} from "swiper";

Swiper.use([Navigation, Pagination, Autoplay, Keyboard]);

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 20,
  loop: true,
  speed: 1500,
  autoplay: {
    delay: 1500,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    550: {
      slidesPerView: 2,
    },

    768: {
      slidesPerView: 3,
    },
  },
});
