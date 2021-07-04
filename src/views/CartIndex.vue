<template>
  <div class="mt-3">
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
              <th scope="row" class="border-0 px-2 font-weight-normal py-4 w-sm-title" style="">
                <img
                  :src="item.product.imageUrl"
                  :alt="item.product.title"
                  style="width: 72px; height: 72px; object-fit: cover;"
                />
                <p class="mb-0 fw-bold ms-md-3 d-md-inline-block d-sm-block">
                  {{ item.product.title }}
                </p>
              </th>
              <td class="border-0 align-middle w-sm-qty" style="max-width: 100px;">
                <div class="input-group pe-md-5 pe-4">
                  <div class="input-group-prepend">
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
                    type="text"
                    class="form-control border-0 text-center my-auto shadow-none"
                    placeholder=""
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                    v-model.number="item.qty"
                    :ref="`input${index}`"
                    :disabled="loadingStatus == item.id"
                    @change="updateCart(item)"
                  />
                  <div class="input-group-append">
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
              <td class="border-0 align-middle">
                <p class="mb-0 ms-auto">NT ${{ $filter.currency(item.product.price) }}</p>
              </td>
              <td class="border-0 align-middle">
                <a href="#" @click.prevent="delItem(item.id)"
                  ><font-awesome-icon icon="times" class="fas fa-times"></font-awesome-icon
                ></a>
              </td>
            </tr>
            <tr v-if="carts.total == 0" class="text-center">
              <td colspan="4">
                <p>購物車為空，請下單完再送出唷~</p>
              </td>
            </tr>
            <tr class="bg-custom">
              <th scope="row" class="row g-0 border-0 font-weight-normal py-4">
                <div class="col-11">
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
              <td class="border-0 align-middle text-end fw-bold" style="max-width: 160px;">
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
                  class="cart-tooltip position-relative"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="清空購物車"
                  ><div class="toolbox">清空購物車</div>
                  <font-awesome-icon
                    icon="times"
                    class="fas fa-times text-chocolate"
                    @click.prevent="clearCart"
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
            tag="button"
            style="min-width:120px"
            >下一步</router-link
          >
        </div>
      </div>
    </div>
  </div>
  <div class="container mt-5">
    <h3 class="mb-4 px-3 border-start border-5 border-chocolate">熱銷商品</h3>
    <swiper-products :products="products" :column="4"></swiper-products>
  </div>
</template>

<style lang="scss" scoped>
.tableBorder-s {
  border-left: 1px solid inherit;
  border-top: 1px solid inherit;
  border-radius: 15px 0 0 0;
}
.tableBorder-e {
  border-right: 1px solid inherit;
  border-top: 1px solid inherit;
  border-radius: 0 15px 0 0;
}
.bg-custom {
  background-color: #fffaf8;
}

.cart-tooltip:hover {
  .toolbox {
    display: block;
  }
}
$triangle: 10px; //三角形尺寸
$boxColor: #000;
.toolbox {
  width: 100px;
  padding: 1px;
  text-align: center;
  background-color: $boxColor;
  border-radius: 5px;
  border-color: $boxColor;
  color: white;
  position: absolute;
  left: 0;
  top: 0;
  transform: translate(-50%, -120%);
  display: none;
}
.toolbox:before {
  position: absolute;
  content: '';
  bottom: $triangle * -2;
  left: 55%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-width: $triangle;
  border-style: solid;
  border-top-color: $boxColor;
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-left-color: transparent;
}
@media (max-width: 576px) {
  .w-sm-title {
    width: 200px;
  }
  .w-sm-qty {
    width: 20px;
  }
}
</style>

<script>
// import toolTips from '@/methods/toolTips';
import swiperProducts from '@/components/SwiperProducts.vue';

const shuffle = require('lodash.shuffle');

export default {
  // mixins: [toolTips],
  components: { swiperProducts },
  data() {
    return {
      apiUrl: process.env.VUE_APP_API,
      apiPath: process.env.VUE_APP_PATH,
      carts: {},
      products: {},
      loadingStatus: '',
      isLoading: false,
      couponCode: '',
      couponData: {},
    };
  },
  methods: {
    getCart() {
      this.emitter.emit('navGetCart');
    },
    updateCart(data, num = data.qty) {
      if (num < 1) {
        // this.$httpToastMessage(true, '商品數量最少為一件!');
        alert('商品數量最少為一件!');
        // this.$router.go(0);
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
            this.loadingStatus = '';
            this.getCart();
          } else {
            console.log(response.data.message);
            this.loadingStatus = '';
          }
        })
        .catch((error) => console.log(error));
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
            this.loadingStatus = '';
          } else {
            console.log(response.data.message);
            this.$httpToastMessage(response, response.data.message);
            this.loadingStatus = '';
          }
        })
        .catch((error) => console.log(error));
    },
    delItem(id) {
      this.loadingStatus = id;
      const url = `${this.apiUrl}/api/${this.apiPath}/cart/${id}`;
      this.axios
        .delete(url)
        .then((response) => {
          if (response.data.success) {
            this.$httpToastMessage(response, response.data.message);
            this.loadingStatus = '';
            this.getCart();
          } else {
            this.$httpToastMessage(response, response.data.message);
            this.loadingStatus = '';
          }
        })
        .catch((error) => console.log(error));
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
        .catch((error) => console.log(error));
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
  mounted() {
    this.getCart();
    this.getData();
  },
};
</script>
