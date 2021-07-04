<template>
  <loading :active="isLoading"></loading>
  <div class="container">
    <div class="row align-items-center mt-5 pt-3">
      <div class="col-md-7">
        <img :src="product.imageUrl" class="d-block w-100 img-size" alt="..." />
      </div>
      <div class="col-md-5">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-white px-0 mb-0 py-3">
            <li class="breadcrumb-item"><a class="text-muted" href="#">首頁</a></li>
            <li class="breadcrumb-item"><a class="text-muted" href="#/products">產品列表</a></li>
            <li class="breadcrumb-item active" aria-current="page">詳細資料</li>
          </ol>
        </nav>
        <h2 class="fw-bold h1 mb-1">{{ product.title }}</h2>
        <p class="mb-0 text-muted text-end">
          <del>NT${{ $filter.currency(product.origin_price) }}</del>
        </p>
        <p class="h4 fw-bold text-end">NT${{ $filter.currency(product.price) }}</p>
        <div class="row align-items-center">
          <div class="col-6">
            <div class="input-group my-3 bg-light rounded  border border-chocolight">
              <div class="input-group-prepend">
                <button
                  class="btn btn-outline-chocolight border-0 py-2"
                  type="button"
                  id="button-addon1"
                  :disabled="qty <= 1"
                  @click="qty -= 1"
                >
                  <font-awesome-icon icon="minus" class="fas fa-minus"></font-awesome-icon>
                </button>
              </div>
              <input
                type="text"
                class="form-control border-0 text-center my-auto shadow-none"
                ref="qty"
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
                :disabled="loadingStatus != ''"
                v-model.number="qty"
              />
              <div class="input-group-append">
                <button
                  class="btn btn-outline-chocolight border-0 py-2"
                  type="button"
                  id="button-addon2"
                  :disabled="loadingStatus != ''"
                  @click="qty += 1"
                >
                  <font-awesome-icon icon="plus" class="fas fa-plus"></font-awesome-icon>
                </button>
              </div>
            </div>
          </div>
          <div class="col-6">
            <button
              href="#"
              class="text-nowrap btn btn-chocolight w-100 py-2"
              @click.prevent="addCart"
              :disabled="loadingStatus == 'add'"
            >
              <font-awesome-icon
                icon="spinner"
                pulse
                class="fas fa-spinner fa-pulse"
                v-if="loadingStatus == 'add'"
              ></font-awesome-icon
              >加入購物車
            </button>
          </div>
        </div>
        <span class="text-danger" v-if="checkNum">數量不能小於0唷</span>
      </div>
    </div>
    <div class="row mt-3 mb-5">
      <div class="col-md-4">
        <p class="h5">
          {{ product.content }}
        </p>
      </div>
      <div class="col-md-3">
        <p class="text-muted">{{ product.description }}</p>
      </div>
    </div>
    <h3 class="fw-bold">您可能也會有興趣 :</h3>
    <swiper-products :products="products" :column="4"></swiper-products>
  </div>
</template>

<style lang="scss" scoped>
.img-size {
  max-height: 500px;
  height: 100%;
  object-fit: cover;
}
</style>

<script>
import swiperProducts from '@/components/SwiperProducts.vue';
import Loading from '@/components/Loading.vue';

const shuffle = require('lodash.shuffle');

export default {
  components: { swiperProducts, Loading },
  data() {
    return {
      apiUrl: process.env.VUE_APP_API,
      apiPath: process.env.VUE_APP_PATH,
      product: {},
      products: {},
      qty: 1,
      loadingStatus: '',
      isLoading: false,
      checkNum: false,
    };
  },
  methods: {
    getProduct() {
      const apiUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${this.$route.params.id}`;
      this.isLoading = true;
      this.axios
        .get(apiUrl)
        .then((res) => {
          if (res.data.success) {
            this.product = res.data.product;
          } else {
            this.$httpToastMessage(res, '取得商品');
          }
          this.isLoading = false;
        })
        .catch(() => {
          this.$refs.toast.showToast('無法取得產品資料喔!', 'error');
        });
    },
    addCart() {
      this.loadingStatus = 'add';
      const cart = {
        product_id: this.$route.params.id,
        qty: this.qty,
      };
      const url = `${this.apiUrl}/api/${this.apiPath}/cart`;
      this.axios
        .post(url, { data: cart })
        .then((response) => {
          if (response.data.success) {
            this.emitter.emit('navGetCart');
            this.$httpToastMessage(response, '加入購物車');
          } else {
            this.$httpToastMessage(response, response.data.message);
          }
          this.loadingStatus = '';
        })
        .catch((error) => console.log(error));
    },
    getData() {
      this.isLoading = true;
      this.axios
        .get(`${this.apiUrl}/api/${this.apiPath}/products/all`)
        .then((response) => {
          if (response.data.success) {
            this.products = shuffle(response.data.products);
          } else {
            this.$httpToastMessage(response, response.data.message);
          }
          this.isLoading = false;
        })
        .catch((error) => console.log(error));
    },
  },
  created() {
    this.emitter.on('cartBus', (carts) => {
      if (carts) {
        this.carts = carts;
      }
    });
  },
  watch: {
    qty() {
      if (this.qty < 1) {
        this.qty = 1;
        this.checkNum = true;
      }
    },
    $route(to) {
      if (this.product.id === to.params.id || to.params.id === 'products') {
        return;
      }
      this.getProduct();
    },
  },
  mounted() {
    this.getProduct();
    this.getData();
  },
};
</script>
