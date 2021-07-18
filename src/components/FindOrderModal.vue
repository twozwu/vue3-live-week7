<template>
  <div
    class="modal fade"
    ref="modal"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="modal"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-chocolate text-light">
          <p class="modal-title h5">訂單查詢</p>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="resetData"
          ></button>
        </div>
        <div class="modal-body">
          <div class="input-group">
            <input
              type="text"
              class="form-control border-chocolight"
              placeholder="請輸入訂單序號"
              ref="orderID"
              v-model.trim="orderID"
            />
            <button
              class="btn btn-chocolate"
              :disabled="!orderID"
              type="button"
              @click="searchOrder"
            >
              查詢
            </button>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-chocolight"
            :disabled="!orderID"
            @click="resetData"
          >
            Reset
          </button>
          <button
            type="button"
            class="btn btn-chocolight"
            data-bs-dismiss="modal"
            @click="resetData"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/methods/modalMixin';

export default {
  data() {
    return {
      orderID: '',
    };
  },
  mixins: [modalMixin],
  methods: {
    searchOrder() {
      this.$router.push(`/cart/order/${this.orderID}`);
      this.hideModal();
    },
    resetData() {
      this.orderID = '';
    },
    // openModal() {
    //   this.openModal();
    //   this.$refs.orderId.focus();
    // },
  },
  created() {
    this.resetData();
  },
  mounted() {
    this.$refs.orderID.focus();
  },
};
</script>
