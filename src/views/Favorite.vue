<template>
  <loading :active="isLoading"></loading>
  <swiper-header class="mb-5"></swiper-header>
  <div class="container-xl">
    <div class="row" v-if="!favoriteItems.length">
      <p class="h3 text-center">我的最愛項目為空</p>
    </div>
    <div class="row" v-else>
      <div class="col-md-4 cardBorder pt-2" v-for="item in favoriteItems" :key="item.id">
        <div class="card border-0 mb-4 position-relative">
          <div class="position-relative">
            <a :href="`#/detail/${item.id}`" class="imgTop">
              <img :src="item.imageUrl" class="card-img-top rounded-0 max-height " :alt="item.title"
            /></a>
          </div>
          <a href="#" class=" text-dark" @click.prevent="addFavorite(item)">
            <i
              class="far fa-heart position-absolute"
              :class="{
                fas: myFavorite.includes(item.id),
                'text-danger': myFavorite.includes(item.id),
              }"
              style="right: 16px; top: 16px"
            ></i>
          </a>
          <div class="card-body p-0">
            <h5 class="mb-0 mt-3 fw-bold">
              <a :href="`#/detail/${item.id}`">{{ item.title }}</a>
            </h5>
            <p class="card-text mb-0">
              NT${{ $filter.currency(item.price) }}
              <span class="text-muted "
                ><del>NT${{ $filter.currency(item.origin_price) }}</del></span
              >
            </p>
            <p class="text-muted mt-3"></p>
            <div class="row g-1 justify-content-around">
              <router-link class="col-5 btn btn-outline-chocolate" :to="`/detail/${item.id}`"
                >詳細資料</router-link
              >
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
  a:not(:last-child) {
    border-right: 1px solid #fff;
  }
  li:not(:last-child) {
    border-right: 1px solid #fff;
  }
}
.max-height {
  max-height: 250px;
  height: 250px;
  object-fit: cover;
}

.cardBorder:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  background-color: #ffebe2;
  .card-body {
    background-color: #ffebe2;
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

.nav-link {
  color: white;
}
.category .nav-link:hover {
  background-color: #fff;
  color: #774a37;
}
.category .active {
  color: #774a37;
  background-color: #fff;
}
</style>

<script>
import detailComponent from './Product.vue';
import SwiperHeader from '../components/SwiperHeader.vue';
import Loading from '../components/Loading.vue';

export default {
  components: { detailComponent, SwiperHeader, Loading },
  data() {
    return {
      apiUrl: process.env.VUE_APP_API,
      apiPath: process.env.VUE_APP_PATH,
      products: {},
      tempProducts: {},
      loadingStatus: '',
      isActive: 'all',
      isLoading: false,
      myFavorite: [],
      favoriteItems: [],
    };
  },
  methods: {
    favoriteSet(favorite) {
      const favoriteString = JSON.stringify(favorite);
      localStorage.setItem('favorite', favoriteString);
    },
    favoriteGet() {
      this.myFavorite = JSON.parse(localStorage.getItem('favorite'));
    },
    getData() {
      this.isLoading = true;
      this.axios
        .get(`${this.apiUrl}/api/${this.apiPath}/products/all`)
        .then((response) => {
          if (response.data.success) {
            this.products = response.data.products;
            this.favoriteFilter();
          } else {
            this.$httpToastMessage(response, response.data.message);
          }
          this.isLoading = false;
        })
        .catch((error) => console.log(error));
    },
    addToCart(id, qty = 1) {
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
            this.$httpToastMessage(response, '加入購物車');
            this.emitter.emit('navGetCart'); // 呼叫cart的getCart方法
          } else {
            this.$httpToastMessage(response, response.data.message);
          }
          this.loadingStatus = '';
        })
        .catch((error) => console.log(error));
    },
    favoriteFilter() {
      for (let i = 0; i < this.myFavorite.length; i += 1) {
        for (let j = 0; j < this.products.length; j += 1) {
          if (this.myFavorite[i] === this.products[j].id) {
            this.favoriteItems.push(this.products[j]);
          }
        }
      }
    },
    addFavorite(item) {
      // 判斷是否重複
      if (this.myFavorite.includes(item.id)) {
        this.myFavorite.splice(this.myFavorite.indexOf(item.id), 1);
        this.$httpToastMessage(false, '移除我的最愛 成功');
        this.favoriteItems.splice(this.favoriteItems.indexOf(item), 1);
      } else {
        this.myFavorite.push(item.id);
        this.$httpToastMessage(true, '加入我的最愛 成功');
      }
      this.favoriteSet(this.myFavorite);
      this.emitter.emit('navFavoriteLength');
    },
  },
  created() {
    this.emitter.on('productsBus', (products) => {
      this.products = products;
    });
  },
  mounted() {
    this.getData();
    this.favoriteGet();
  },
};
</script>
