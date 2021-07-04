<template>
  <div class="mt-3">
    <h3 class="my-5 my-md-6 text-center">
      感謝您的訂購，歡迎再度光臨！
    </h3>
    <div class="row px-md-6">
      <div class="col-md-7">
        <table class="table table-hover">
          <thead class="table-chocolate">
            <tr>
              <th scope="col" colspan="2" class="text-center fw-light">
                以下是您的訂購資訊， 請確認後進行付款。
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th class="text-muted">訂購時間</th>
              <td>{{ new Date().toLocaleString(order.create_at) }}</td>
            </tr>
            <tr>
              <th class="text-muted">訂購 ID</th>
              <td>
                <input ref="orderID" type="text" :value="order.id" class="form-control mb-2" />
                <input
                  type="button"
                  value="點我複製以便查詢"
                  @click.prevent="copyOrderID"
                  class="btn btn-outline-chocolight"
                />
              </td>
            </tr>
            <tr>
              <th class="text-muted">訂購人</th>
              <td>{{ order.user.name }}</td>
            </tr>
            <tr>
              <th class="text-muted">聯絡信箱</th>
              <td>{{ order.user.email }}</td>
            </tr>
            <tr>
              <th class="text-muted">聯絡電話</th>
              <td>{{ order.user.tel }}</td>
            </tr>
            <tr>
              <th class="text-muted">地址</th>
              <td>{{ order.user.address }}</td>
            </tr>
            <tr>
              <th class="text-muted">您的備註</th>
              <td>{{ order.message }}</td>
            </tr>
            <tr>
              <th class="text-muted">付款狀態</th>
              <td>{{ order.is_paid ? '已付款' : '尚未付款' }}</td>
            </tr>
          </tbody>
        </table>
        <div class="d-flex mt-4 justify-content-between align-items-end">
          <a href="#/products" class="text-dark mt-md-0 mt-3 align-self-center"
            ><font-awesome-icon
              icon="chevron-left"
              class="fas fa-chevron-left me-2"
            ></font-awesome-icon>
            繼續購物</a
          >
        </div>
      </div>
      <div class="col-md-5">
        <div class="border p-4 mb-4">
          <h4 class=" mb-4">我的訂單</h4>
          <div class="d-flex mb-2" v-for="item in order.products" :key="item.product.id">
            <img
              :src="item.product.imageUrl"
              :alt="item.product.title"
              class="me-2"
              style="width: 48px; height: 48px; object-fit: cover"
            />
            <div class="w-100">
              <div class="d-flex justify-content-between">
                <p class="mb-0 fw-bold">{{ item.product.title }}</p>
                <p class="mb-0">NT${{ $filter.currency(item.product.price) }}</p>
              </div>
              <p class="mb-0 fw-normal">x{{ item.qty + item.product.unit }}</p>
            </div>
          </div>
          <table class="table text-muted border-top border-bottom mt-4">
            <tbody>
              <tr>
                <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">原價</th>
                <td class="text-end border-0 px-0 pt-4">NT${{ $filter.currency(order.total) }}</td>
              </tr>
              <tr>
                <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">付款方式</th>
                <td class="text-end border-0 px-0 pt-0 pb-4">ApplePay</td>
              </tr>
            </tbody>
          </table>
          <div class="d-flex justify-content-between mt-4">
            <p class="mb-0 h4 fw-bold">總計</p>
            <p class="mb-0 h4 fw-bold">NT${{ $filter.currency(order.total) }}</p>
          </div>
          <a href="#/products" class="btn btn-chocolight w-100 mt-4" @click.prevent="checkout"
            >由此付款</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

<script>
export default {
  components: {},
  data() {
    return {
      apiUrl: process.env.VUE_APP_API,
      apiPath: process.env.VUE_APP_PATH,
      order: {
        user: {},
      },
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
    getOrder() {
      const apiUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${this.$route.params.id}`;
      this.emitter.emit('isLoading', true);
      this.axios
        .get(apiUrl)
        .then((res) => {
          if (res.data.success) {
            this.order = res.data.order;
            console.log(this.order);
          } else {
            this.$httpToastMessage(res, res.data.message);
          }
          this.emitter.emit('isLoading', false);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    checkout() {
      const apiUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/pay/${this.$route.params.id}`;
      this.emitter.emit('isLoading', true);
      this.axios
        .post(apiUrl)
        .then((res) => {
          if (res.data.success) {
            this.$httpToastMessage(res, res.data.message);
            this.$router.push('/success');
          } else {
            this.$httpToastMessage(res, res.data.message);
          }
          this.emitter.emit('isLoading', false);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    copyOrderID() {
      document.execCommand('Copy', false, this.$refs.orderID.select());
    },
  },
  mounted() {
    this.getOrder();
    this.emitter.emit('toProgress', 100);
  },
};
</script>
