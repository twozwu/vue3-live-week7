<template>
  <div class="header bg-img p-5 mb-5">
    <div class="container">
      <h1 class="row text-white p-md-5 my-5 fw-bold">巧克力 | 精神時光屋</h1>
      <h3 class="row  justify-content-center text-white pb-5 fs-4 fs-md-3">
        疲勞了嗎?休息一下，伸個懶腰，來顆精氣神巧克力吧!!
      </h3>
      <div class=""></div>
    </div>
  </div>
  <div class="container bg-opcity">
    <h3 class="border-start border-5 px-3 border-chocolate">熱門商品</h3>
    <swiper-products class="text-center" :products="products" :column="3"></swiper-products>
  </div>
  <div class="bg-light mt-3 section-bg">
    <div class="container">
      <div class="row justify-content-center py-6">
        <div class="col-md-6 text-center text-light">
          <h3>巧克屋優質可可原料</h3>
          <p class="my-5">
            台灣在地優質可可原料 適合做烘焙.食品加工使用
            <br /><br />
            “可可樹所結的可可果實，可可果剖開後，會看到果莢內一顆顆白白的可可豆。可可豆帶有強烈的酸味，因此需要經過發酵、曝曬的工序來去除，緩和酸味的同時～也能誘發可可醇厚的香氣。”
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="container mt-5">
    <h3 class="border-start border-bottom border-5 px-3 border-chocolate fw-bold">黑巧克力系列</h3>
    <div class="row">
      <div class="col-7">
        <img
          class="w-100 fit"
          src="https://images.unsplash.com/photo-1542843137-8791a6904d14?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
        />
      </div>
      <div class="col-5 position-relative">
        <div class="position-absolute position-black hover-center">
          <h4 class="text-chocolate fw-bold">純黑巧克力</h4>
          <p>有多種口味</p>
          <ul>
            <li class="">純黑100%巧克力</li>
            <li class="">純黑80%巧克力</li>
            <li class="">純黑牛奶巧克力</li>
            <li class="">純黑微辣巧克力</li>
            <li class="">純黑果仁巧克力</li>
          </ul>
          <div class="row justify-content-end">
            <router-link
              :to="{ path: '/products', query: { category: 'dark' } }"
              class="btn btn-chocolight w-100 w-md-25"
              >前往購物</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <h3 class="border-start border-bottom border-5 px-3 mt-5 border-chocolate fw-bold">
      餅乾系列
    </h3>
    <div class="row flex-row-reverse">
      <div class="col-7">
        <img
          class="w-100 fit"
          src="https://images.pexels.com/photos/5847103/pexels-photo-5847103.jpeg?cs=srgb&dl=pexels-roman-odintsov-5847103.jpg&fm=jpg"
        />
      </div>
      <div class="col-5 position-relative">
        <div class="position-absolute position-black-r hover-center">
          <h4 class="text-chocolate fw-bold">餅乾系列</h4>
          <p>有多種口味</p>
          <ul>
            <li class="">卡布奇諾風味手指餅</li>
            <li class="">巧克力手工餅乾(白)</li>
            <li class="">巧克力手工餅乾(黑)</li>
            <li class="">巧克力夾心餅乾</li>
            <li class="">卡哇依愛心巧克力薄餅</li>
          </ul>
          <div class="row justify-content-end">
            <router-link
              :to="{ path: '/products', query: { category: 'cookie' } }"
              class="position-absolute btn btn-chocolight w-100 w-md-25"
              >前往購物</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <h3 class="border-start border-bottom border-5 px-3 mt-5 border-chocolate fw-bold">蛋糕系列</h3>
    <div class="row">
      <div class="col-7">
        <img
          class="w-100 fit"
          src="https://images.unsplash.com/photo-1620049302148-61b77ad1a1c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=932&q=80"
        />
      </div>
      <div class="col-5 position-relative">
        <div class="position-absolute position-black hover-center">
          <h4 class="text-chocolate fw-bold">蛋糕系列</h4>
          <p>有多種口味</p>
          <ul>
            <li class="">巧克力慕斯蛋糕</li>
            <li class="">香草巧克力蛋糕</li>
            <li class="">濃巧克力蛋糕</li>
            <li class="">巧克力磅蛋糕</li>
            <li class="">巧克力奶油捲</li>
          </ul>
          <div class="row justify-content-end">
            <router-link
              :to="{ path: '/products', query: { category: 'cake' } }"
              class="btn btn-chocolight w-100 w-md-25"
              >前往購物</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <h3 class="border-start border-bottom border-5 px-3 mt-5 border-chocolate fw-bold">
      飲料系列
    </h3>
    <div class="row flex-row-reverse">
      <div class="col-7">
        <img
          class="w-100 fit"
          src="https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
        />
      </div>
      <div class="col-5 position-relative">
        <div class="position-absolute position-black-r hover-center">
          <h4 class="text-chocolate fw-bold">飲料系列</h4>
          <p>有多種口味</p>
          <ul>
            <li class="">棉花糖可可</li>
            <li class="">濃情巧可力</li>
            <li class="">巧克力拿鐵</li>
            <li class="">可可冰沙</li>
            <li class="">熱可可( 冬季限定 )</li>
          </ul>
          <div class="row justify-content-end">
            <router-link
              :to="{ path: '/products', query: { category: 'drink' } }"
              class="btn btn-chocolight w-100 w-md-25"
              >前往購物</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.header.bg-img {
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)),
    url('https://images.unsplash.com/photo-1599599810769-bcde5a160d32?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80')
      no-repeat center / cover;
}
.bg-opcity {
  background: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2));
}
.section-bg {
  background-image: url('https://images.unsplash.com/photo-1573710661345-610f790e1218?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80');
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
}
.position-black {
  bottom: 0;
  left: -80px;
  padding: 20px 50px;
  margin: 30px;
  width: 100%;
  background: #fde2e2e1;
}
.position-black-r {
  bottom: 0;
  right: -80px;
  padding: 20px 50px;
  margin: 30px;
  width: 100%;
  background: #fde2e2e1;
}
@media (max-width: 576px) {
  .position-black {
    padding: 20px 10px;
    left: -50px;
  }
  .position-black-r {
    padding: 20px 10px;
    right: -50px;
  }
}
.fit {
  object-fit: cover;
  height: 400px;
}
.hover-center {
  h4 {
    transition: transform 0.5s;
  }
  &:hover {
    h4 {
      transform: translateX(40%);
    }
  }
}
</style>

<script>
import SwiperProducts from '../components/SwiperProducts.vue';

const shuffle = require('lodash.shuffle');

export default {
  components: { SwiperProducts },
  data() {
    return {
      apiUrl: process.env.VUE_APP_API,
      apiPath: process.env.VUE_APP_PATH,
      products: {},
    };
  },
  methods: {
    getData() {
      this.axios
        .get(`${this.apiUrl}/api/${this.apiPath}/products/all`)
        .then((response) => {
          if (response.data.success) {
            this.products = shuffle(response.data.products);
          } else {
            this.$httpToastMessage(response, response.data.message);
          }
        })
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
