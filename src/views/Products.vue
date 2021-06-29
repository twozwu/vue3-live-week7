<template>
  <loading :active="isLoading"></loading>
  <swiper-header class="mb-5"></swiper-header>
  <div class="category container text-center">
    <!-- 商品頁籤 -->
    <ul
      class="nav justify-content-around fs-5 mb-3 border border-chocolate border-center
      rounded-3 bg-chocolate text-white row"
    >
      <li class="nav-item col p-0">
        <a
          class="nav-link"
          :class="{ active: isActive === 'all' }"
          aria-current="page"
          href="#"
          @click.prevent="filter('all')"
          >全部產品</a
        >
      </li>
      <li class="nav-item col p-0">
        <a
          class="nav-link"
          :class="{ active: isActive === 'dark' }"
          aria-current="page"
          href="#"
          @click.prevent="filter('dark')"
          >黑巧克力</a
        >
      </li>
      <li class="nav-item col p-0">
        <a
          class="nav-link"
          href="#"
          :class="{ active: isActive === 'cookie' }"
          @click.prevent="filter('cookie')"
          >餅乾</a
        >
      </li>
      <li class="nav-item col p-0">
        <a
          class="nav-link"
          href="#"
          :class="{ active: isActive === 'cake' }"
          @click.prevent="filter('cake')"
          >蛋糕</a
        >
      </li>
      <li class="nav-item col p-0">
        <a
          class="nav-link"
          href="#"
          :class="{ active: isActive === 'drink' }"
          @click.prevent="filter('drink')"
          >飲料</a
        >
      </li>
    </ul>
  </div>
  <div class="container-xl">
    <div class="row">
      <div class="col-md-4" v-for="item in tempProducts" :key="item.id">
        <div class="card border-0 mb-4 position-relative position-relative">
          <img :src="item.imageUrl" class="card-img-top rounded-0 max-height" alt="..." />
          <a href="#" class="text-dark">
            <i class="far fa-heart position-absolute" style="right: 16px; top: 16px"></i>
          </a>
          <div class="card-body p-0">
            <h5 class="mb-0 mt-3">
              <a href="./detail.html">{{ item.title }}</a>
            </h5>
            <p class="card-text mb-0">
              NT${{ $filter.currency(item.price) }}
              <span class="text-muted "
                ><del>NT${{ $filter.currency(item.origin_price) }}</del></span
              >
            </p>
            <p class="text-muted mt-3"></p>
            <div class="row g-1 justify-content-around">
              <button class="col-5 btn btn-outline-chocolate">詳細資料</button>
              <button class="col-5 btn btn-chocolight" @click="addToCart(item.id)">
                <font-awesome-icon
                  icon="spinner"
                  pulse
                  class="fas fa-spinner fa-pulse"
                  v-if="loadingStatus == item.id"
                ></font-awesome-icon
                >加入購物車
              </button>
            </div>
          </div>
        </div>
      </div>
      <detailComponent ref="detail" :product="tempProducts"></detailComponent>
    </div>
  </div>
</template>
//#774a37
<style lang="scss">
.border-center {
  li:not(:last-child) {
    border-right: 1px solid #fff;
  }
}
.max-height {
  max-height: 250px;
  height: 250px;
  object-fit: cover;
}

.nav-link {
  color: white;
}
.category .nav-link:hover {
  background-color: #fff;
  color: #000;
}
.category .active {
  color: black;
  background-color: #fff;
}
</style>

<script>
import detailComponent from './Product.vue';
import SwiperHeader from '../components/SwiperHeader.vue';

export default {
  data() {
    return {
      apiUrl: process.env.VUE_APP_API,
      apiPath: process.env.VUE_APP_PATH,
      products: {},
      tempProducts: {},
      loadingStatus: '',
      isActive: 'all',
      isLoading: false,
    };
  },
  methods: {
    getData() {
      this.isLoading = true;
      this.axios
        .get(`${this.apiUrl}/api/${this.apiPath}/products/all`)
        .then((response) => {
          if (response.data.success) {
            // console.log(response.data.products);
            this.products = response.data.products;
            this.tempProducts = response.data.products;
          } else {
            alert(response.data.message);
          }
          this.isLoading = false;
        })
        .catch((error) => console.log(error));
    },
    addToCart(id, qty = 1) {
      // console.log(id);
      this.loadingStatus = id;
      const cart = {
        product_id: id,
        qty,
      };
      const url = `${this.apiUrl}/api/${this.apiPath}/cart`;
      this.axios
        .post(url, { data: cart })
        .then((response) => {
          if (response.data.success) {
            alert(response.data.message);
            this.loadingStatus = '';
            this.emitter.emit('navGetCart'); // 呼叫cart的getCart方法
          } else {
            alert(response.data.message);
            this.loadingStatus = '';
          }
        })
        .catch((error) => console.log(error));
    },
    openModal(action, item) {
      if (action === 'detail') {
        this.tempProducts = { ...item };
        this.$refs.detail.openModal();
      }
    },
    filter(category) {
      this.isLoading = true;
      this.isActive = category;
      if (category === 'all') {
        this.tempProducts = this.products;
      } else {
        this.tempProducts = this.products.filter((item) => item.category === category);
      }
      this.isLoading = false;
    },
  },
  mounted() {
    this.getData();
  },
  components: { detailComponent, SwiperHeader },
};
</script>
