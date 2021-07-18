<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-chocolate fs-5 fixed-top shadow-lg">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
        <!-- data-bs-dismiss="collapse" -->
      </button>
      <a href="#"><img src="@/assets/chocologo-s.png" class="navbar-brand"/></a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/products">產品列表</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/cart">購物車</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="openFindOrder">查詢訂單</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="$router.push('favorite')"
              >我的最愛({{ myFavoriteLength }})</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="$router.push('about')">關於我們</a>
          </li>
        </ul>
      </div>
      <i
        class=" position-relative"
        style="cursor: pointer;"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <b-icon-cart2 class="navbar-brand fs-1 navbar-expand"></b-icon-cart2
        ><span
          class="bg-danger position-absolute top-20 start-50
            translate-middle fs-7 d-inline-block badge rounded-pill"
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
            <img
              :src="item.product.imageUrl"
              :alt="item.product.title"
              style="width: 120px; height: 120px; object-fit: cover;"
            />
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
                    type="text"
                    class="form-control border-0 text-center my-auto shadow-none bg-light px-0"
                    placeholder=""
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
          <a href="#/cart" class="btn btn-chocolight mt-4 text-end py-3" @click.prevent="goCheckout"
            >前往結帳</a
          >
        </div>
      </div>
    </div>
  </div>
  <find-order-modal ref="findOrderModal"></find-order-modal>
</template>

<style lang="scss">
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

<script>
import FindOrderModal from './FindOrderModal.vue';
// import { Offcanvas } from 'bootstrap/dist/js/bootstrap.esm.min';

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
      products: {},
      loadingStatus: '',
      isLoading: false,
      offcanvas: {},
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
            console.log(response.data.message);
            this.$httpToastMessage(response, response.data.message);
          }
        })
        .catch((error) => console.log(error));
    },
    updateCart(data, num = data.qty) {
      if (num < 1) {
        // this.$httpToastMessage(true, '商品數量最少為一件!');
        alert('商品數量最少為一件!');
        // this.$router.go(0);
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
            console.log(response.data.message);
          }
          this.emitter.emit('isLoading', false);
        })
        .catch((error) => console.log(error));
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
        .catch((error) => console.log(error));
    },
    goCheckout() {
      // const offcanvasRight = document.getElementById('offcanvasRight');
      // this.offcanvas.offcanvasRight = new Offcanvas(offcanvasRight);
      // this.$refs.offcanvasRight.hide();
      this.$router.push('cart');
      // console.log(this.$refs);
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
  },
  created() {
    this.emitter.on('navGetCart', () => this.getCart());
    this.emitter.on('navSendData', () => this.sendData());
    this.emitter.on('navFavoriteLength', () => this.favoriteGet());
  },
  mounted() {
    this.getCart();
    this.favoriteGet();
  },
};
</script>
