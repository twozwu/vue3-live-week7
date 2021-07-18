<template>
  <div
    class="modal fade"
    id="couponModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            <span v-if="isNew">新增優惠卷</span>
            <span v-else>編輯優惠卷</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <Form ref="form" v-slot="{ errors }" @submit="onSubmit">
          <div class="modal-body">
            <div class="mb-3">
              <label for="title">標題</label>
              <Field
                type="text"
                class="form-control"
                id="title"
                v-model="tempCoupon.title"
                name="標題"
                :class="{ 'is-invalid': errors['標題'], 'is-valid': tempCoupon.title }"
                rules="required"
                placeholder="請輸入標題"
              />
              <ErrorMessage name="標題" class="invalid-feedback"></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="coupon_code">優惠碼</label>
              <Field
                type="text"
                class="form-control"
                id="coupon_code"
                name="酷碰券"
                :class="{ 'is-invalid': errors['酷碰券'], 'is-valid': tempCoupon.code }"
                rules="required"
                v-model="tempCoupon.code"
                placeholder="請輸入優惠碼"
              />
              <ErrorMessage name="酷碰券" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="mb-3">
              <label for="due_date">到期日</label>
              <Field
                type="date"
                class="form-control"
                id="due_date"
                v-model="due_date"
                name="到期日"
                :class="{ 'is-invalid': errors['到期日'], 'is-valid': tempCoupon.due_date }"
                rules="required"
              />
              <ErrorMessage name="到期日" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="mb-3">
              <label for="price">折扣百分比</label>
              <Field
                type="number"
                class="form-control"
                id="price"
                name="折扣"
                :class="{ 'is-invalid': errors['折扣'], 'is-valid': tempCoupon.percent }"
                :rules="{ required: true, min_value: 0 }"
                min="0"
                v-model.number="tempCoupon.percent"
                placeholder="請輸入折扣百分比"
              />
              <ErrorMessage name="折扣" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="mb-3">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  :true-value="1"
                  :false-value="0"
                  v-model="tempCoupon.is_enabled"
                  id="is_enabled"
                />
                <label class="form-check-label" for="is_enabled">
                  是否啟用
                </label>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary">
              更新優惠券
            </button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>
<script>
import modalMixin from '@/methods/modalMixin';

export default {
  props: {
    coupon: {
      type: Object,
      default() {
        return {};
      },
    },
    isNew: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      tempCoupon: {},
      due_date: '',
    };
  },
  methods: {
    onSubmit() {
      this.$emit('update-coupon', this.tempCoupon);
    },
  },
  emits: ['update-coupon'],
  watch: {
    coupon() {
      if (this.isNew) {
        this.tempCoupon = {
          title: '',
          code: '',
          percent: '',
          is_enabled: 0,
        };
        [this.due_date] = new Date().toISOString().split('T');
      } else {
        this.tempCoupon = this.coupon;
        // 將時間格式改為 YYYY-MM-DD
        const dateAndTime = new Date(this.tempCoupon.due_date * 1000).toISOString().split('T');
        // 解構賦值，從陣列中取出值，預設會取第一個["2021-06-22", "08:28:58.891Z"]
        [this.due_date] = dateAndTime;
      }
    },
    due_date() {
      // 建立優惠券轉換日期格式用
      this.tempCoupon.due_date = Math.floor(new Date(this.due_date) / 1000);
    },
  },
  mixins: [modalMixin],
};
</script>
