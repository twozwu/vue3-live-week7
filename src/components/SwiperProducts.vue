<template>
  <swiper
    :slidesPerView="3"
    :spaceBetween="30"
    :centeredSlides="false"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
    class="mySwiper"
  >
    <swiper-slide v-for="item in products" :key="item.id"
      ><div class="card border-0 mb-4 position-relative position-relative">
        <img :src="item.imageUrl" class="card-img-top rounded-0 mh-500" :alt="item.title" />
        <a href="#" class="text-dark"> </a>
        <div class="card-body p-0">
          <h4 class="mb-0 mt-3">
            <a href="#">{{ item.title }}</a>
          </h4>
          <p class="card-text mb-0">
            NT${{ $filter.currency(item.price) }}
            <span class="text-muted "
              ><del>NT${{ $filter.currency(item.origin_price) }}</del></span
            >
          </p>
          <p class="text-muted mt-3"></p>
        </div></div
    ></swiper-slide>
  </swiper>
</template>
<style scoped lang="scss">
.mh-500 {
  max-height: 250px;
  height: 250px;
  object-fit: cover;
}
</style>
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
  props: ['products'],
  data() {
    return {};
  },
  methods: {},
};
</script>
