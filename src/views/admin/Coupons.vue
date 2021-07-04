<template>
  <div class="container text-center">
    <h1 class="m-5">This is an coupons page</h1>
    <div class="text-end mt-4">
      <button class="btn btn-primary" type="button" @click="openModal(true)">
        建立新的優惠券
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>名稱</th>
          <th>折扣百分比</th>
          <th>到期日</th>
          <th>是否啟用</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in coupons" :key="item.id">
          <td>{{ item.title }}</td>
          <td>{{ item.percent }}%</td>
          <td>{{ $filter.date(item.due_date) }}</td>
          <td>
            <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
            <span v-else class="text-muted">未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm" @click="openModal(false, item)">
                編輯
              </button>
              <button class="btn btn-outline-danger btn-sm" @click="openDelModal(item)">
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="!coupons.length">目前無優惠券</div>
  </div>
  <div class="d-flex justify-content-center" v-if="coupons.length">
    <pagination :pages="pagination" @emit-page="getCoupons"></pagination>
  </div>
  <coupon-modal
    :coupon="tempCoupon"
    :isNew="isNew"
    @updateCoupon="updateCoupon"
    ref="couponModal"
  ></coupon-modal>
  <del-item-modal ref="delModal" @delItem="delItem"></del-item-modal>
</template>

<script>
import couponModal from '@/components/admin/CouponModal.vue';
import delItemModal from '@/components/admin/DelItemModal.vue';
import pagination from '@/components/admin/Pagination.vue';

export default {
  components: {
    couponModal,
    delItemModal,
    pagination,
  },
  data() {
    return {
      apiUrl: process.env.VUE_APP_API,
      apiPath: process.env.VUE_APP_PATH,
      coupons: {},
      tempCoupon: {},
      isNew: false,
      title: '',
      isLoading: false,
      pagination: {},
    };
  },
  methods: {
    getCoupons(page = 1) {
      this.emitter.emit('isLoading', true);
      this.axios
        .get(`${this.apiUrl}/api/${this.apiPath}/admin/coupons?page=${page}`)
        .then((response) => {
          if (response.data.success) {
            this.coupons = response.data.coupons;
            this.pagination = response.data.pagination;
          } else {
            this.$httpToastMessage(response, response.data.message);
          }
          this.emitter.emit('isLoading', false);
        })
        .catch((error) => console.log(error));
    },
    openModal(isNew, item) {
      this.isNew = isNew;
      if (isNew) {
        this.tempCoupon = { due_date: Date.now() };
      } else {
        this.tempCoupon = { ...item };
      }
      this.$refs.couponModal.openModal();
    },
    openDelModal(item) {
      this.tempCoupon = item;
      this.$refs.delModal.openModal(item);
    },
    updateCoupon(tempCoupon) {
      this.emitter.emit('isLoading', true);
      if (this.isNew) {
        const url = `${this.apiUrl}/api/${this.apiPath}/admin/coupon`;
        this.$http
          .post(url, { data: tempCoupon })
          .then((response) => {
            if (response.data.success) {
              this.$httpToastMessage(response, '新增優惠券');
              this.getCoupons();
              this.$refs.couponModal.hideModal();
            } else {
              this.$httpToastMessage(response, '新增優惠券');
            }
            this.emitter.emit('isLoading', false);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        const url = `${this.apiUrl}/api/${this.apiPath}/admin/coupon/${this.tempCoupon.id}`;
        this.$http
          .put(url, { data: this.tempCoupon })
          .then((response) => {
            if (response.data.success) {
              this.$httpToastMessage(response, '更新優惠券');
              this.getCoupons();
              this.$refs.couponModal.hideModal();
            } else {
              this.$httpToastMessage(response, '更新優惠券');
            }
            this.emitter.emit('isLoading', false);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    delItem() {
      const url = `${this.apiUrl}/api/${this.apiPath}/admin/coupon/${this.tempCoupon.id}`;
      this.emitter.emit('isLoading', true);
      this.$http
        .delete(url)
        .then((response) => {
          if (response.data.success) {
            this.$httpToastMessage(response, '刪除優惠券');
            const delComponent = this.$refs.delModal;
            delComponent.hideModal();
            this.getCoupons();
          } else {
            this.$httpToastMessage(response, '刪除優惠券');
          }
          this.emitter.emit('isLoading', false);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getCoupons();
  },
};
</script>
