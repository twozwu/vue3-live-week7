<template>
  <swiper
    :slidesPerView="1"
    :spaceBetween="30"
    :centeredSlides="false"
    :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
    }"
    class="mySwiper"
  >
    <swiper-slide>
      <img
        src="https://bi.im-g.pl/im/a5/71/17/z24584101AMP,Kakao.jpg"
        class="card-img-top rounded-0 mh-500"
        alt="..."
      />
    </swiper-slide>
    <swiper-slide>
      <img
        src="https://nutrativa.com.br/wp-content/uploads/2020/03/0319202001-polifen%C3%B3is-banner.jpg"
        class="card-img-top rounded-0 mh-500"
        alt="..."
      />
    </swiper-slide>
    <swiper-slide>
      <img
        src="https://cdn1.matadornetwork.com/blogs/2/2020/01/Chocolate-mexicano-historia-1200x853.jpg"
        class="card-img-top rounded-0 mh-500"
        alt="..."
      />
    </swiper-slide>
    <swiper-slide>
      <img
        src="https://i.pinimg.com/originals/ce/16/75/ce16757f71272ee9a7bab2434a99350c.jpg"
        class="card-img-top rounded-0 mh-500"
        style="object-position: center 35%;"
        alt="..."
      />
    </swiper-slide>
  </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/swiper.scss';

// import Swiper core and required modules
import SwiperCore, { Autoplay } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Autoplay]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>
<style scoped lang="scss">
.mh-500 {
  max-height: auto;
  height: 400px;
  object-fit: cover;
}
</style>
