<template>
  <loading :active="isLoading"></loading>
  <div class="container">
    <table class="table mt-4">
      <thead>
        <tr>
          <th>購買時間</th>
          <th>Email</th>
          <th>購買款項</th>
          <th>應付金額</th>
          <th>是否付款</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item, key) in orderList" :key="key">
          <tr v-if="orderList.length" :class="{ 'text-secondary': !item.is_paid }">
            <td>{{ $filter.date(item.create_at) }}</td>
            <td><span v-text="item.user.email" v-if="item.user"></span></td>
            <td>
              <ul class="list-unstyled">
                <li v-for="(product, i) in item.products" :key="i">
                  {{ product.product.title }} 數量：{{ product.qty }}
                  {{ product.product.unit }}
                </li>
              </ul>
            </td>
            <td class="text-right">{{ item.total }}</td>
            <td>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  :id="`paidSwitch${item.id}`"
                  v-model="item.is_paid"
                  change="updatePaid(item)"
                />
                <label class="form-check-label" :for="`paidSwitch${item.id}`">
                  <span v-if="item.is_paid">已付款</span>
                  <span v-else>未付款</span>
                </label>
              </div>
            </td>
            <td>
              <div class="btn-group">
                <button
                  class="btn btn-outline-primary btn-sm"
                  type="button"
                  @click="openModal(item)"
                >
                  檢視
                </button>
                <button
                  class="btn btn-outline-danger btn-sm"
                  type="button"
                  @click="openDelModal(item)"
                >
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <div v-if="!orderList.length" class="text-center">目前無訂單</div>
  </div>
  <div class="d-flex justify-content-center" v-if="orderList.length">
    <pagination :pages="pagination" @emit-page="getList"></pagination>
  </div>
  <!--Model-->
  <order-modal :order="tempOrder" @update-paid="updateOrder" ref="orderModal"></order-modal>
  <del-item-modal @delItem="delItem" ref="delModal"></del-item-modal>
</template>

<script>
import loading from '@/components/Loading.vue';
import OrderModal from '../../components/admin/OrderModal.vue';
import DelItemModal from '../../components/admin/DelItemModal.vue';
import Pagination from '../../components/admin/Pagination.vue';

export default {
  components: {
    loading,
    OrderModal,
    DelItemModal,
    Pagination,
  },
  data() {
    return {
      apiUrl: process.env.VUE_APP_API,
      apiPath: process.env.VUE_APP_PATH,
      orderList: {},
      tempOrder: {},
      pagination: {},
      isLoading: false,
    };
  },
  methods: {
    getList(page = 1) {
      this.currentPage = page;
      this.isLoading = true;
      this.axios
        .get(`${this.apiUrl}/api/${this.apiPath}/admin/orders?page=${page}`)
        .then((res) => {
          if (res.data.success) {
            this.orderList = res.data.orders;
            this.pagination = res.data.pagination;
            this.isLoading = false;
          } else {
            // alert(res.data.message);
            console.log(res.data);
          }
        })
        .catch((error) => console.log(error));
    },
    openModal(item) {
      this.tempOrder = { ...item };
      this.$refs.orderModal.openModal();
    },
    openDelModal(item) {
      this.tempOrder = { ...item };
      this.$refs.delModal.openModal(item, true);
    },
    delItem() {
      const url = `${this.apiUrl}/api/${this.apiPath}/admin/order/${this.tempOrder.id}`;
      this.isLoading = true;
      this.$http
        .delete(url)
        .then((response) => {
          this.getList(this.currentPage);
          this.$refs.delModal.hideModal();
          this.isLoading = false;
          this.$httpToastMessage(response, '刪除訂單');
        })
        .catch((error) => console.log(error));
    },
    updateOrder(item) {
      this.isLoading = true;
      const api = `${this.apiUrl}/api/${this.apiPath}/admin/order/${item.id}`;
      const paid = {
        is_paid: item.is_paid,
      };
      this.$http.put(api, { data: paid }).then((response) => {
        this.getList(this.currentPage);
        this.isLoading = false;
        this.$refs.orderModal.hideModal();
        this.$httpToastMessage(response, '更新付款狀態');
      });
    },
  },
  mounted() {
    this.getList();
  },
};
</script>
