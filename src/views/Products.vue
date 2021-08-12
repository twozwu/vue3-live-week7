<template>
  <loading :active="isLoading"></loading>
  <swiper-header class="mb-5"></swiper-header>
  <div class="category container text-center">
    <!-- <nav
      class="nav flex-column flex-sm-row fs-5 fs-sm-6 mb-3 border border-chocolate border-center
      rounded-3 bg-chocolate text-white"
    >
      <a
        class="flex-sm-fill text-sm-center nav-link"
        aria-current="page"
        href="#"
        :class="{ active: isActive === 'all' }"
        @click.prevent="filter('all')"
        >全部產品</a
      >
      <a
        class="flex-sm-fill text-center nav-link"
        href="#"
        :class="{ active: isActive === 'dark' }"
        aria-current="page"
        @click.prevent="filter('dark')"
        >黑巧克力</a
      >
      <a
        class="flex-sm-fill text-sm-center nav-link"
        href="#"
        :class="{ active: isActive === 'cookie' }"
        @click.prevent="filter('cookie')"
        >餅乾</a
      >
      <a
        class="flex-sm-fill text-sm-center nav-link"
        href="#"
        tabindex="-1"
        aria-disabled="true"
        :class="{ active: isActive === 'cake' }"
        @click.prevent="filter('cake')"
        >蛋糕</a
      >
      <a
        class="flex-sm-fill text-sm-center nav-link"
        href="#"
        tabindex="-1"
        aria-disabled="true"
        :class="{ active: isActive === 'drink' }"
        @click.prevent="filter('drink')"
        >飲料</a
      >
    </nav>-->
    <!-- 商品頁籤 -->
    <ul
      class="menu nav justify-content-around
      fs-5 fs-sm-6 mb-3 border border-chocolate border-center
      rounded-3 bg-chocolate text-white"
    >
      <li class="nav-item col nav-link p-0">
        <a
          class="nav-link flex-sm-fill"
          :class="{ active: isActive === 'all' }"
          aria-current="page h-100"
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
      <li class="nav-item col p-0 d-flex d-md-block align-items-center">
        <a
          class="nav-link"
          href="#"
          :class="{ active: isActive === 'cookie' }"
          @click.prevent="filter('cookie')"
          >餅乾</a
        >
      </li>
      <li class="nav-item col p-0 d-flex d-md-block align-items-center">
        <a
          class="nav-link"
          href="#"
          :class="{ active: isActive === 'cake' }"
          @click.prevent="filter('cake')"
          >蛋糕</a
        >
      </li>
      <li class="nav-item col p-0 d-flex d-md-block align-items-center">
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
      <div class="col-md-4 cardBorder pt-2" v-for="item in tempProducts" :key="item.id">
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
            <h5 class="mb-0 mt-3 fw-bold text-truncate">
              <a :href="`#/detail/${item.id}`">{{ item.title }}</a>
            </h5>
            <p class="card-text mb-0">
              NT${{ $filter.currency(item.price) }}
              <span class="text-muted "
                ><del>NT${{ $filter.currency(item.origin_price) }}</del></span
              >
            </p>
            <p class="text-muted mt-3"></p>
            <div class="row g-2 justify-content-around">
              <router-link class="col-5 btn btn-outline-chocolate" :to="`/detail/${item.id}`"
                >詳細資料</router-link
              >
              <button class="col-5 px-md-1 btn btn-chocolight" @click="addToCart(item.id)">
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
    </div>
  </div>
</template>

<script>
import SwiperHeader from '../components/SwiperHeader.vue';
import Loading from '../components/Loading.vue';

const favoriteMethods = {
  save(favorite) {
    const favoriteString = JSON.stringify(favorite);
    localStorage.setItem('favorite', favoriteString);
  },
  get() {
    return JSON.parse(localStorage.getItem('favorite'));
  },
};

export default {
  components: { SwiperHeader, Loading },
  data() {
    return {
      apiUrl: process.env.VUE_APP_API,
      apiPath: process.env.VUE_APP_PATH,
      products: {},
      tempProducts: {},
      loadingStatus: '',
      isActive: 'all',
      isLoading: false,
      myFavorite: favoriteMethods.get() || [],
    };
  },
  methods: {
    getData() {
      this.isLoading = true;
      this.axios
        .get(`${this.apiUrl}/api/${this.apiPath}/products/all`)
        .then((response) => {
          if (response.data.success) {
            this.products = response.data.products;
            this.tempProducts = response.data.products;
            this.filter(this.$route.query.category);
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
        .catch((error) => {
          this.loadingStatus = '';
          this.$httpToastMessage(false, error);
        });
    },
    filter(category = 'all') {
      this.isLoading = true;
      this.isActive = category;
      if (category === 'all') {
        this.tempProducts = this.products;
      } else {
        this.tempProducts = this.products.filter((item) => item.category === category);
      }
      this.isLoading = false;
    },
    addFavorite(item) {
      // 判斷是否重複
      if (this.myFavorite.includes(item.id)) {
        this.myFavorite.splice(this.myFavorite.indexOf(item.id), 1);
        this.$httpToastMessage(false, '移除我的最愛 成功');
      } else {
        this.myFavorite.push(item.id);
        this.$httpToastMessage(true, '加入我的最愛 成功');
      }
      favoriteMethods.save(this.myFavorite);
      this.emitter.emit('navFavoriteLength');
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

//#774a37
<style lang="scss" scoped>
.menu {
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
