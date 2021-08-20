<template>
  <loading :active="isLoading"></loading>
  <div class="mt-3">
    <h3 class="mt-6 mb-4 mx-lg-6 mx-md-0 px-3 border-start border-5 border-chocolate">填寫資料</h3>
    <div class="row px-lg-6 px-md-0">
      <div class="col-md-7">
        <Form ref="form" v-slot="{ errors }" @submit="createOrder">
          <p class="">請輸入聯絡資訊：</p>
          <div class="mb-0">
            <label for="email" class="text-muted mb-0"
              >信箱<span class="text-danger"> *</span></label
            >
            <Field
              id="email"
              name="email"
              type="email"
              class="form-control fw-light"
              :class="{ 'is-invalid': errors['email'], 'is-valid': form.user.email }"
              placeholder="請輸入 Email"
              rules="email|required"
              v-model="form.user.email"
            ></Field>
            <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
          </div>
          <p class="mt-md-5 mt-4">請輸入寄送資訊：</p>
          <div class="mb-2">
            <label for="name" class="text-muted mb-0"
              >姓名<span class="text-danger"> *</span></label
            >
            <Field
              id="name"
              name="姓名"
              type="text"
              class="form-control fw-light"
              :class="{ 'is-invalid': errors['姓名'], 'is-valid': form.user.name }"
              placeholder="請輸入姓名"
              rules="required"
              v-model="form.user.name"
            ></Field>
            <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-2">
            <label for="tel" class="text-muted mb-0"
              >連絡電話<span class="text-danger"> *</span></label
            >
            <Field
              id="tel"
              name="電話"
              type="tel"
              class="form-control fw-light"
              :class="{ 'is-invalid': errors['電話'], 'is-valid': form.user.tel }"
              placeholder="請輸入電話"
              rules="required|min:8|max:10"
              v-model="form.user.tel"
            ></Field>
            <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-2">
            <label for="address" class="text-muted mb-0"
              >連絡地址<span class="text-danger"> *</span></label
            >
            <Field
              id="address"
              name="地址"
              type="text"
              class="form-control fw-light"
              :class="{ 'is-invalid': errors['地址'], 'is-valid': form.user.address }"
              placeholder="請輸入地址"
              rules="required"
              v-model="form.user.address"
            ></Field>
            <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-2">
            <label for="ContactMessage" class="text-muted mb-0">意見回覆</label>
            <textarea
              class="form-control fw-light"
              rows="6"
              id="ContactMessage"
              placeholder="message ... "
              v-model="form.message"
            ></textarea>
          </div>

          <div class="d-block d-md-none border p-4 mb-4 mt-md-0 mt-5">
            <h4 class=" mb-4">我的訂單</h4>
            <div class="d-flex mb-2" v-for="item in carts.carts" :key="item.id">
              <router-link :to="`/detail/${item.product.id}`"
                ><img
                  :src="item.product.imageUrl"
                  :alt="item.product.title"
                  class="me-2"
                  style="width: 48px; height: 48px; object-fit: cover"
              /></router-link>
              <div class="w-100">
                <div class="d-flex justify-content-between">
                  <router-link :to="`/detail/${item.product.id}`">
                    <p class="mb-0 fw-bold">{{ item.product.title }}</p>
                  </router-link>
                  <p class="mb-0">NT${{ $filter.currency(item.product.price) }}</p>
                </div>
                <p class="mb-0 fw-normal">x{{ item.qty + item.product.unit }}</p>
              </div>
            </div>
            <table class="table text-muted border-top border-bottom mt-4">
              <tbody>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">原價</th>
                  <td class="text-end border-0 px-0 pt-4">
                    NT${{ $filter.currency(carts.total) }}
                  </td>
                </tr>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">付款方式</th>
                  <td class="text-end border-0 px-0 pt-0 pb-4">ApplePay</td>
                </tr>
              </tbody>
            </table>
            <div class="d-flex justify-content-between mt-4">
              <p class="mb-0 h4 fw-bold">總計</p>
              <p class="mb-0 h4 fw-bold">NT${{ $filter.currency(carts.final_total) }}</p>
            </div>
          </div>
          <div class="d-flex mt-4 justify-content-between align-items-end">
            <a href="#/cart" class="text-dark mt-md-0 mt-3 align-self-center"
              ><font-awesome-icon
                icon="chevron-left"
                class="fas fa-chevron-left me-2"
              ></font-awesome-icon>
              回到上一步</a
            >
            <button
              type="submit"
              class="btn btn-chocolight py-2 px-5"
              :disabled="Object.keys(errors).length || !checkData"
            >
              送出訂單
            </button>
          </div>
        </Form>
      </div>
      <div class="d-none d-md-block col-md-5">
        <div class="border p-4 mb-4 mt-md-0 mt-5">
          <h4 class=" mb-4">我的訂單</h4>
          <div class="d-flex mb-2" v-for="item in carts.carts" :key="item.id">
            <router-link :to="`/detail/${item.product.id}`"
              ><img
                :src="item.product.imageUrl"
                :alt="item.product.title"
                class="me-2"
                style="width: 48px; height: 48px; object-fit: cover"
              />
            </router-link>
            <div class="w-100">
              <div class="d-flex flex-wrap justify-content-between">
                <router-link :to="`/detail/${item.product.id}`">
                  <p class="mb-0 fw-bold">{{ item.product.title }}</p>
                </router-link>
                <p class="mb-0">NT${{ $filter.currency(item.product.price) }}</p>
              </div>
              <p class="mb-0 fw-normal">x{{ item.qty + item.product.unit }}</p>
            </div>
          </div>
          <table class="table text-muted border-top border-bottom mt-4">
            <tbody>
              <tr>
                <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">原價</th>
                <td class="text-end border-0 px-0 pt-4">NT${{ $filter.currency(carts.total) }}</td>
              </tr>
              <tr>
                <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">付款方式</th>
                <td class="text-end border-0 px-0 pt-0 pb-4">ApplePay</td>
              </tr>
            </tbody>
          </table>
          <div class="d-flex justify-content-between mt-4">
            <p class="mb-0 h4 fw-bold">總計</p>
            <p class="mb-0 h4 fw-bold">NT${{ $filter.currency(carts.final_total) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from '@/components/Loading.vue';

export default {
  components: { Loading },
  data() {
    return {
      apiUrl: process.env.VUE_APP_API,
      apiPath: process.env.VUE_APP_PATH,
      carts: {},
      qty: 1,
      loadingStatus: '',
      isLoading: false,
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  methods: {
    createOrder() {
      this.isLoading = true;
      const url = `${this.apiUrl}/api/${this.apiPath}/order`;
      const order = this.form;
      this.axios
        .post(url, { data: order })
        .then((response) => {
          if (response.data.success) {
            this.emitter.emit('navGetCart');
            this.$httpToastMessage(response, '訂單送出');
            this.$router.push(`/cart/order/${response.data.orderId}`);
          } else {
            this.$httpToastMessage(response, response.data.message);
          }
          this.isLoading = false;
        })
        .catch((error) => {
          this.isLoading = false;
          this.$httpToastMessage(0, error);
        });
    },
  },
  created() {
    // 側邊欄與本頁傳遞資料用
    this.emitter.on('cartBus', (carts) => {
      if (carts) {
        this.carts = carts;
      }
    });
  },
  mounted() {
    this.emitter.emit('navSendData');
    this.emitter.emit('toProgress', 50);
  },
  ummounted() {
    this.emitter.off('cartBus');
  },
  computed: {
    checkData() {
      const attrs = ['name', 'email', 'tel', 'address'];
      return attrs.every((item) => this.form.user[item] !== '');
    },
  },
};
</script>
