<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-chocolate fs-5 fixed-top shadow-lg">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="navbarToggle"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <a href="#" @click.prevent="routerPush('/#')"
        ><img src="@/assets/chocologo-s.png" class="navbar-brand"
      /></a>
      <div class="collapse navbar-collapse" id="navbarNav" ref="navbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a
              class="nav-link"
              :class="{ active: $route.name == 'products' }"
              href="#"
              @click.prevent="routerPush('/products')"
              >產品列表</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              :class="{ active: $route.name === 'cart' }"
              href="#"
              @click.prevent="routerPush('/cart')"
              >購物車</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="openFindOrder">查詢訂單</a>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :class="{ active: $route.name == 'favorite' }"
              to="/favorite"
              @click.prevent="routerPush('/favorite')"
              >我的最愛({{ myFavoriteLength }})</router-link
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
              :class="{ active: $route.name == 'about' }"
              @click.prevent="routerPush('/about')"
              >關於我們</a
            >
          </li>
        </ul>
      </div>
      <i
        class=" position-relative"
        style="cursor: pointer;"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
        @click="canvasToggle"
      >
        <b-icon-cart2 class="cart-icon navbar-brand navbar-expand"></b-icon-cart2
        ><span
          class="bg-danger position-absolute top-20 start-60
            translate-middle fs-6 px-2 py-1 d-inline-block badge rounded-pill"
          v-if="carts.cartsLength != ''"
          >{{ carts.cartsLength }}</span
        >
      </i>
    </div>
  </nav>
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvasRight"
    ref="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header bg-chocolate text-light">
      <span id="offcanvasRightLabel h5">我的購物車</span>
      <button
        type="button"
        class="btn-close btn-close-white"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div class="row justify-content-center">
        <div class="col-md-12 bg-white" style="min-height: calc(100vh - 56px - 76px);">
          <div class="d-flex justify-content-between">
            <h2 class="">購物清單</h2>
          </div>
          <h5 class="my-3 text-center fw-lighter" v-if="!carts.cartsLength">
            購物車為空!
          </h5>
          <div class="d-flex mt-2 bg-light" v-for="(item, index) in carts.carts" :key="item.id">
            <div class="py-3">
              <router-link :to="`/detail/${item.product.id}`">
                <img
                  :src="item.product.imageUrl"
                  :alt="item.product.title"
                  style="width: 120px; height: 120px; object-fit: cover;"
                />
              </router-link>
            </div>
            <div class="w-100 p-3 position-relative">
              <a
                href="#"
                class="position-absolute text-chocolate"
                style="top: 16px; right: 16px;"
                @click.prevent="delItem(item.id)"
                ><font-awesome-icon icon="times" class="fas fa-times"></font-awesome-icon
              ></a>
              <p class="mb-0 fw-bold">{{ item.product.title }}</p>
              <p class="mb-1 text-muted" style="font-size: 14px;">{{ item.product.description }}</p>
              <div class="d-flex justify-content-between align-items-center w-100">
                <div class="input-group w-50 align-items-center">
                  <div class="input-group-prepend pe-1">
                    <button
                      class="btn btn-outline-chocolight border-0 py-2"
                      type="button"
                      id="button-addon1"
                      :disabled="loadingStatus == item.id || item.qty <= 1"
                      @click="updateCart(item, item.qty - 1)"
                    >
                      <font-awesome-icon icon="minus" class="fas fa-minus"></font-awesome-icon>
                    </button>
                  </div>
                  <input
                    type="number"
                    class="form-control border-0 text-center my-auto shadow-none bg-light px-0"
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                    v-model.number="item.qty"
                    :ref="`input${index}`"
                    :disabled="loadingStatus == item.id"
                    @change="updateCart(item)"
                  />
                  <div class="input-group-append ps-1">
                    <button
                      class="btn btn-outline-chocolight border-0 py-2"
                      type="button"
                      id="button-addon2"
                      :disabled="loadingStatus == item.id"
                      @click="updateCart(item, item.qty + 1)"
                    >
                      <font-awesome-icon icon="plus" class="fas fa-plus"></font-awesome-icon>
                    </button>
                  </div>
                </div>
                <p class="mb-0 ms-auto">NT${{ $filter.currency(item.product.price) }}</p>
              </div>
            </div>
          </div>
          <table class="table mt-4 text-muted">
            <tbody>
              <tr>
                <th
                  scope="row"
                  class="border-0 px-0 font-weight-normal"
                  :class="{ 'text-decoration-line-through': carts.total != carts.final_total }"
                >
                  總額：
                </th>
                <td
                  class="text-end border-0 px-0"
                  :class="{ 'text-decoration-line-through': carts.total != carts.final_total }"
                >
                  NT${{ $filter.currency(carts.total) }}
                </td>
              </tr>
              <tr class="text-success" v-if="carts.total != carts.final_total">
                <th scope="row" class="border-0 px-0 pt-0 font-weight-normal">折扣價：</th>
                <td class="text-end border-0 px-0 pt-0 ">
                  NT${{ $filter.currency(carts.final_total) }}
                </td>
              </tr>
            </tbody>
          </table>
          <div class="d-flex justify-content-between mt-4">
            <p class="mb-0 h4 fw-bold">最終金額：</p>
            <p class="mb-0 h4 fw-bold">NT${{ $filter.currency(carts.final_total) }}</p>
          </div>
          <router-link
            to="/cart"
            class="btn btn-chocolight mt-4 text-end py-3"
            @click="routerPush('/cart')"
            >前往結帳</router-link
          >
        </div>
      </div>
    </div>
  </div>
  <find-order-modal ref="findOrderModal"></find-order-modal>
</template>

<script>
import Collapse from 'bootstrap/js/dist/collapse';
import Offcanvas from 'bootstrap/js/dist/offcanvas';
import FindOrderModal from './FindOrderModal.vue';

export default {
  components: { FindOrderModal },
  provide() {
    return {
      products: this.products,
    };
  },
  data() {
    return {
      apiUrl: process.env.VUE_APP_API,
      apiPath: process.env.VUE_APP_PATH,
      carts: {
        cartsLength: 0,
      },
      myFavoriteLength: '',
      loadingStatus: '',
      isLoading: false,
      navbar: null,
      canvas: null,
    };
  },
  methods: {
    getCart() {
      this.axios
        .get(`${this.apiUrl}/api/${this.apiPath}/cart`)
        .then((response) => {
          if (response.data.success) {
            this.carts = response.data.data;
            this.carts.cartsLength = this.carts.carts.length;
            this.sendData();
          } else {
            this.$httpToastMessage(response, response.data.message);
          }
        })
        .catch((error) => {
          this.$httpToastMessage(0, error);
        });
    },
    updateCart(data, num = data.qty) {
      if (num < 1) {
        this.$swal('商品數量最少為一件!');
        this.getCart();
        return;
      }
      if (num > 99) {
        this.$swal('商品數量最多為99！');
        this.getCart();
        return;
      }
      this.emitter.emit('isLoading', true);
      const cart = {
        product_id: data.product_id,
        qty: num,
      };
      const url = `${this.apiUrl}/api/${this.apiPath}/cart/${data.id}`;
      this.axios
        .put(url, { data: cart })
        .then((response) => {
          if (response.data.success) {
            this.$httpToastMessage(response, response.data.message);
            this.getCart();
          } else {
            this.$httpToastMessage(response.data.message);
          }
          this.emitter.emit('isLoading', false);
        })
        .catch((error) => {
          this.emitter.emit('isLoading', false);
          this.$httpToastMessage(0, error);
        });
    },
    delItem(id) {
      this.emitter.emit('isLoading', true);
      const url = `${this.apiUrl}/api/${this.apiPath}/cart/${id}`;
      this.axios
        .delete(url)
        .then((response) => {
          if (response.data.success) {
            this.$httpToastMessage(response, response.data.message);
            this.getCart();
          } else {
            this.$httpToastMessage(response, response.data.message);
          }
          this.emitter.emit('isLoading', false);
        })
        .catch((error) => {
          this.emitter.emit('isLoading', false);
          this.$httpToastMessage(0, error);
        });
    },
    sendData() {
      this.emitter.emit('cartBus', this.carts);
    },
    openFindOrder() {
      this.$refs.findOrderModal.openModal();
    },
    favoriteGet() {
      const favorite = localStorage.getItem('favorite');
      if (favorite) {
        this.myFavoriteLength = JSON.parse(favorite).length;
      } else {
        this.myFavoriteLength = 0;
      }
    },
    routerPush(to) {
      this.navbar.hide();
      this.canvas.hide();
      this.$router.push(to);
    },
    navbarToggle() {
      this.navbar.toggle();
    },
    canvasToggle() {
      this.canvas.toggle();
    },
  },
  created() {
    this.emitter.on('navGetCart', () => this.getCart());
    this.emitter.on('navSendData', () => this.sendData());
    this.emitter.on('navFavoriteLength', () => this.favoriteGet());
    this.emitter.on('navPush', (to) => this.routerPush(to));
  },
  mounted() {
    this.getCart();
    this.favoriteGet();
    this.navbar = new Collapse('#navbarNav', { toggle: false });
    this.canvas = new Offcanvas('#offcanvasRight');
  },
  unmouned() {
    this.emitter.off('navGetCart');
    this.emitter.off('navSendData');
    this.emitter.off('navFavoriteLength');
    this.emitter.off('navPush');
  },
};
</script>

<style lang="scss" scoped>
.cart-icon {
  font-size: 43px;
}
.rem2 {
  width: 1.5rem;
}

.top-20 {
  top: 20%;
}

.fs-7 {
  font-size: 0.5rem;
}
</style>
