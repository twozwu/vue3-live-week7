<template>
  <div class="header bg-img p-5 mb-5">
    <div class="container">
      <h1 class="row text-white p-5 fw-bold">巧克力 | 精神時光屋</h1>
      <h3 class="row  justify-content-center text-white pb-5">
        疲勞了嗎?休息一下，伸個懶腰，來顆精氣神巧克力吧!!
      </h3>
      <div class=""></div>
    </div>
  </div>
  <div class="container bg-opcity">
    <h3 class="border-start border-5 px-3 border-chocolate">熱門商品</h3>
    <swiper-products class="text-center" :products="products"></swiper-products>
    <h3 class="border-bottom border-3 border-chocolate">巧克屋優質可可原料</h3>
    <p>
      台灣在地優質可可原料 適合做烘焙.食品加工使用
      <br /><br />
      可可樹所結的可可果實，可可果剖開後，會看到果莢內一顆顆白白的可可豆。可可豆帶有強烈的酸味，因此需要經過發酵、曝曬的工序來去除，緩和酸味的同時～也能誘發可可醇厚的香氣。
    </p>
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
</style>

<script>
import SwiperProducts from '../components/SwiperProducts.vue';

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
            // console.log(response.data.products);
            this.products = response.data.products;
          } else {
            alert(response.data.message);
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
