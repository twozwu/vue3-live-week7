<template>
  <div class="mt-3" v-if="carts.total != 0">
    <h3 class="mt-6 mb-4 px-3 border-start border-5 border-chocolate">商品列表</h3>
    <div class="row">
      <div class="col-md table-responsive">
        <table class="table">
          <thead>
            <tr class="text-light bg-chocolate">
              <th scope="col" class="tableBorder-s">品項</th>
              <th scope="col" class="border-0">數量</th>
              <th scope="col" class="border-0">價格</th>
              <th scope="col" class="tableBorder-e"></th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="border-bottom border-top"
              v-for="(item, index) in carts.carts"
              :key="item.id"
            >
              <th scope="row" class="border-0 px-2 font-weight-normal py-4 w-title" style="">
                <img
                  :src="item.product.imageUrl"
                  :alt="item.product.title"
                  style="width: 72px; height: 72px; object-fit: cover;"
                />
                <p class="mb-0 fw-bold ms-md-3 d-md-inline-block d-sm-block">
                  {{ item.product.title }}
                </p>
              </th>
              <td class="border-0 align-middle w-qty px-0" style="max-width: 100px;">
                <div class="input-group pe-md-5 mx-auto">
                  <div class="input-group-prepend mx-auto">
                    <font-awesome-icon
                      icon="spinner"
                      pulse
                      class="fas fa-spinner fa-pulse"
                      v-if="loadingStatus == item.id"
                    ></font-awesome-icon>
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
                    class="form-control border-0 text-center my-auto shadow-none"
                    placeholder=""
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                    v-model.number="item.qty"
                    :ref="`input${index}`"
                    :disabled="loadingStatus == item.id"
                    @change="updateCart(item)"
                  />
                  <div class="input-group-append mx-auto">
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
              </td>
              <td class="border-0 align-middle w-price">
                <p class="mb-0 ms-auto">NT ${{ $filter.currency(item.product.price) }}</p>
              </td>
              <td class="border-0 align-middle">
                <a
                  href="#"
                  id="tooltip"
                  class="cart-tooltip p-2"
                  @click.prevent="delItem(item.id)"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="刪除商品"
                  ><font-awesome-icon icon="times" class="fas fa-times"></font-awesome-icon
                ></a>
              </td>
            </tr>
            <tr class="bg-custom">
              <th scope="row" class="row g-0 border-0 font-weight-normal py-4">
                <div class="col-10">
                  <input
                    type="text"
                    class="form-control rounded-0 border-bottom border-top-0
                      border-start-0 border-end-0 bg-custom"
                    placeholder="Coupon Code"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                    v-model="couponCode"
                  />
                </div>
                <div class="col-1 input-group-append">
                  <button
                    class="btn btn-outline-dark border-bottom border-top-0
                border-start-0 border-end-0 rounded-0"
                    type="button"
                    id="button-addon2"
                    @click="couponOn"
                  >
                    <font-awesome-icon
                      icon="paper-plane"
                      class="fas fa-paper-plane"
                    ></font-awesome-icon>
                  </button>
                </div>
              </th>
              <td class="border-0 align-middle text-end fw-bold px-0" style="max-width: 160px;">
                <span :class="{ 'text-decoration-line-through': carts.total != carts.final_total }"
                  >總額：</span
                >
              </td>
              <td class="border-0 align-middle">
                <span :class="{ 'text-decoration-line-through': carts.total != carts.final_total }"
                  >NT ${{ $filter.currency(carts.total) }}</span
                >
              </td>
              <td class="border-0 align-middle">
                <font-awesome-icon
                  icon="spinner"
                  pulse
                  class="fas fa-spinner fa-pulse"
                  v-if="loadingStatus == 'clear'"
                ></font-awesome-icon>
                <a
                  href="#"
                  id="tooltip"
                  class="cart-tooltip position-relative p-2"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="清空購物車"
                  @click.prevent="clearCart"
                >
                  <font-awesome-icon
                    icon="times"
                    class="fas fa-times text-chocolate"
                    v-if="carts.cartsLength"
                  ></font-awesome-icon>
                </a>
              </td>
            </tr>
            <tr class="bg-custom text-success" v-if="carts.total != carts.final_total">
              <th></th>
              <td class="align-middle text-end fw-bold" style="max-width: 160px;">
                <span class="">折扣價：</span>
              </td>
              <td>NT ${{ $filter.currency(carts.final_total) }}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div class="row justify-content-end">
          <router-link
            to="/cart/profile"
            class="col-1 mx-5 btn btn-chocolight"
            :class="{ disabled: carts.total == 0 }"
            style="min-width:120px"
          >
            下一步
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <div
    class="d-flex flex-column justify-content-center align-items-center mt-7"
    v-if="carts.total == 0"
  >
    <img
      src="http://pic.616pic.com/ys_b_img/00/09/39/Ls8lTFMQiU.jpg"
      alt=""
      class="img-fluid rounded-circle"
    />
    <p class="fs-3 my-5">
      購物車為空，請再逛逛或參考下方推薦商品唷~
    </p>
  </div>
  <div class="container mt-5">
    <h3 class="mb-4 px-3 border-start border-5 border-chocolate">熱銷商品</h3>
    <Swiper-products :products="products" :column="4"></Swiper-products>
  </div>
</template>

<script>
import SwiperProducts from '@/components/SwiperProducts.vue';

const shuffle = require('lodash.shuffle');

export default {
  components: { SwiperProducts },
  data() {
    return {
      apiUrl: process.env.VUE_APP_API,
      apiPath: process.env.VUE_APP_PATH,
      carts: {},
      products: {},
      loadingStatus: '',
      isLoading: false,
      couponCode: '',
      tooltipList: null,
    };
  },
  methods: {
    getCart() {
      this.emitter.emit('navGetCart');
    },
    updateCart(data, num = data.qty) {
      if (num < 1) {
        this.$swal('商品數量最少為一件!');
        this.getCart();
        return;
      }

      this.loadingStatus = data.id;
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
          this.loadingStatus = '';
        })
        .catch((error) => {
          this.loadingStatus = '';
          this.$httpToastMessage(0, error);
        });
    },
    clearCart() {
      this.loadingStatus = 'clear';
      const url = `${this.apiUrl}/api/${this.apiPath}/carts`;
      this.axios
        .delete(url)
        .then((response) => {
          if (response.data.success) {
            this.$httpToastMessage(response, response.data.message);
            this.getCart();
          } else {
            console.log(response.data.message);
            this.$httpToastMessage(response, response.data.message);
          }
          this.loadingStatus = '';
        })
        .catch((error) => {
          this.loadingStatus = '';
          this.$httpToastMessage(0, error);
        });
    },
    delItem(id) {
      this.loadingStatus = id;
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
          this.loadingStatus = '';
        })
        .catch((error) => {
          this.loadingStatus = '';
          this.$httpToastMessage(0, error);
        });
    },
    getData() {
      this.emitter.emit('isLoading', true);
      this.axios
        .get(`${this.apiUrl}/api/${this.apiPath}/products/all`)
        .then((response) => {
          if (response.data.success) {
            this.products = shuffle(response.data.products);
            this.tempProducts = response.data.products;
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
    couponOn() {
      this.emitter.emit('isLoading', true);
      const coupon = {
        code: this.couponCode,
      };
      this.axios
        .post(`${this.apiUrl}/api/${this.apiPath}/coupon`, { data: coupon })
        .then((response) => {
          if (response.data.success) {
            this.couponData = response.data.final_total;
            this.$httpToastMessage(response, response.data.message);
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
  },
  created() {
    this.emitter.on('cartBus', (carts) => {
      if (carts) {
        this.carts = carts;
      }
    });
  },
  unmounted() {
    this.emitter.off('cartBus');
  },
  mounted() {
    this.getCart();
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
.tableBorder-s {
  border-left: 1px solid inherit;
  border-top: 1px solid inherit;
  border-radius: 10px 0 0 0;
}
.tableBorder-e {
  border-right: 1px solid inherit;
  border-top: 1px solid inherit;
  border-radius: 0 10px 0 0;
}
.bg-custom {
  background-color: #fffaf8;
}

.cart-tooltip:hover {
  .toolbox {
    display: block;
  }
}

@media (max-width: 576px) {
  .w-title {
    width: 190px;
  }
  .w-qty {
    width: 60px;
  }
}

@media (max-width: 770px) {
  .w-title {
    width: 350px;
  }
  .w-price {
    width: 120px;
  }
}
</style>
