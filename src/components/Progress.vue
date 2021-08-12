<template>
  <!--定位條-->
  <div class="position-relative mx-5">
    <div class="progress my-6" style="height: 1px;">
      <div
        class="progress-bar bg-chocolight"
        role="progressbar"
        :style="`width: ${percent}%;`"
        aria-valuenow="50"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
    <router-link
      to="/cart"
      type="button"
      class="position-absolute top-0 start-0 translate-middle
        btn btn-sm btn-chocolate rounded-pill"
      style="width: 2rem; height:2rem;"
    >
      1
    </router-link>
    <span
      class="rounded-pill text-dark
          position-absolute start-0 translate-middle"
      style="bottom:-60px;"
      >確認商品</span
    >
    <router-link
      to="/cart/profile"
      type="button"
      class="position-absolute top-0 start-50 translate-middle
        btn btn-sm btn-secondary rounded-pill"
      :class="{ 'btn-chocolate': percent >= 50, disabled: percent < 50 }"
      style="width: 2rem; height:2rem;"
    >
      2
    </router-link>
    <span
      class="rounded-pill text-dark
          position-absolute start-50 translate-middle"
      style="bottom:-60px;"
      >填寫資料</span
    >
    <router-link
      to="/cart/order"
      type="button"
      class="position-absolute top-0 start-100 translate-middle
        btn btn-sm btn-secondary rounded-pill"
      :class="{ 'btn-chocolate': percent == 100, disabled: percent < 100 }"
      style="width: 2rem; height:2rem;"
    >
      3
    </router-link>
    <span
      class="rounded-pill text-dark
          position-absolute start-100 translate-middle"
      style="bottom:-60px;width:64px;"
      >完成訂單</span
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      percent: 0,
    };
  },
  created() {
    this.emitter.on('toProgress', (data) => {
      this.percent = data;
    });
  },
  unmouned() {
    this.emitter.off('toProgress');
  },
};
</script>
