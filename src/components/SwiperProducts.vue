<template>
  <div class="overflow-hidden h300">
    <swiper
      :slidesPerView="thisColumn"
      :spaceBetween="30"
      :centeredSlides="false"
      :direction="direction"
      :height="300"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
      class="mySwiper"
    >
      <swiper-slide v-for="item in products" :key="item.id"
        ><div class="card border-0 mb-4 cardBorder">
          <div class="position-relative">
            <a :href="`#/detail/${item.id}`" class="imgTop"
              ><img :src="item.imageUrl" class="card-img-top rounded-0 mh-500" :alt="item.title"
            /></a>
          </div>
          <a href="#" class="text-dark"> </a>
          <div class="card-body p-0">
            <h4 class="mb-0 mt-3 text-chocolight" :class="{ h5: column == 4 }">
              <router-link :to="`/detail/${item.id}`">{{ item.title }}</router-link>
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
  </div>
</template>
<style scoped lang="scss">
.mh-500 {
  max-height: 250px;
  height: 250px;
  object-fit: cover;
}
.h300 {
  max-height: 90vh;
}
.cardBorder:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  background-color: #ffebe2;
  h4,
  p {
    padding-left: 5px;
  }
  .imgTop::before {
    content: '';
    display: inline-block;
    position: absolute;
    width: 95%;
    height: 95%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #fff;
  }
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
  props: ['products', 'column'],
  data() {
    return {
      thisColumn: 3,
      bodyWidth: 0,
      direction: 'horizontal',
    };
  },
  mounted() {
    this.thisColumn = this.column;
    this.bodyWidth = window.innerWidth;
    if (this.bodyWidth <= 768) {
      this.thisColumn = 1;
      this.direction = 'vertical';
    } else if (this.bodyWidth <= 992) {
      this.thisColumn = 3;
      this.direction = 'horizontal';
    } else {
      this.thisColumn = this.column;
      this.direction = 'horizontal';
    }
    // 偵測視窗大小
    window.onresize = () => {
      this.bodyWidth = window.innerWidth;
      if (this.bodyWidth <= 768) {
        this.thisColumn = 1;
        this.direction = 'vertical';
      } else if (this.bodyWidth <= 992) {
        this.thisColumn = 3;
        this.direction = 'horizontal';
      } else {
        this.thisColumn = this.column;
        this.direction = 'horizontal';
      }
    };
  },
};
</script>
