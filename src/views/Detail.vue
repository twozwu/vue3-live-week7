<template>
  <loading :active="isLoading"></loading>
  <div class="container">
    <div class="row align-items-center mt-md-4 mt-3 pt-3">
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

        <div class="row m-4">
          <div class="col-12">
            <p class="h5">{{ product.content }}</p>
          </div>
          <div class="col-12">
            <p class="text-muted">{{ product.description }}</p>
          </div>
        </div>
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
                type="number"
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
        <span class="text-danger" v-if="checkNum.bool">{{ checkNum.msg }}</span>
      </div>
    </div>
  </div>
  <div class="product-info mt-md-5 mt-3 bg-mail">
    <div class="container row mx-auto p-3 pe-md-0 py-md-0">
      <div class="col-md-6 p-3 px-md-0 py-md-5 lh-lg">
        <h2 class="fs-4">注意事項：</h2>
        <p class="mb-4">
          巧克屋
          所有商品皆為天然食材，絕不添加任何防腐劑，商品請放置於低溫處(建議於18℃以下)，並於7日內食用完畢為最佳。
        </p>
        <ul class="list-unstyled fa-ul m-0 mt-3 ps-4">
          <li>
            <span class="fa-li">
              <i class="fas fa fa-cookie cookie"></i>
            </span>
            請將產品置於陰涼處並請勿置放超過2-3小時
          </li>
          <li>
            <span class="fa-li">
              <i class="fas fa fa-cookie-bite cookie"></i>
            </span>
            巧克力：保存溫度約在攝氏12～18度，濕度則不能超過65%
          </li>
          <li>
            <span class="fa-li">
              <i class="fas fa fa-cookie-bite cookie"></i>
            </span>
            蛋糕類：冷藏保存2日、冷凍保存5日。
          </li>

          <li>
            <span class="fa-li">
              <i class="fas fa fa-cookie-bite cookie"></i>
            </span>
            餅乾類：常溫保存1週、冷藏保存2週、冷凍保存1個月。
          </li>
        </ul>
      </div>
      <div class="col-6 d-none d-md-block info-img">
        <img
          class="img-fluid"
          src="https://img.ltn.com.tw/Upload/food/page/2017/08/27/170827-6684-2-G0FVm.jpg"
          style="height:100%;object-fit: cover;"
        />
      </div>
    </div>
  </div>
  <div class="container">
    <h3 class="fw-bold mt-5">您可能也會有興趣 :</h3>
    <Swiper-Products :products="products" :column="4"></Swiper-Products>
  </div>
</template>

<script>
import SwiperProducts from '../components/SwiperProducts.vue';
import Loading from '../components/Loading.vue';

const shuffle = require('lodash.shuffle');

export default {
  components: { SwiperProducts, Loading },
  data() {
    return {
      apiUrl: process.env.VUE_APP_API,
      apiPath: process.env.VUE_APP_PATH,
      product: {},
      products: {},
      qty: 1,
      loadingStatus: '',
      isLoading: false,
      checkNum: {
        bool: false,
        msg: '',
      },
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
        .catch((error) => {
          this.isLoading = false;
          this.$httpToastMessage(false, error);
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
        .catch((error) => {
          this.loadingStatus = '';
          this.$httpToastMessage(false, error);
        });
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
        .catch((error) => {
          this.isLoading = false;
          this.$httpToastMessage(false, error);
        });
    },
  },
  created() {
    this.emitter.on('cartBus', (carts) => {
      if (carts) {
        this.carts = carts;
      }
    });
  },
  unmounted() {
    this.emitter.off('cartBus', (carts) => {
      if (carts) {
        this.carts = carts;
      }
    });
  },
  watch: {
    qty() {
      if (this.qty < 1) {
        this.qty = 1;
        this.checkNum.bool = true;
        this.checkNum.msg = '數量不能小於0唷';
      }
      if (this.qty > 99) {
        this.qty = 99;
        this.checkNum.bool = true;
        this.checkNum.msg = '數量不能大於99唷';
      }
    },
    $route(to) {
      if (this.product.id === to.params.id || to.params.id === undefined) {
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

<style lang="scss" scoped>
.img-size {
  max-height: 500px;
  height: 100%;
  object-fit: cover;
}

@media (min-width: 768px) {
  .info-img {
    max-height: 450px;
  }
}
@media (min-width: 992px) {
  .info-img {
    max-height: 350px;
  }
}
</style>
