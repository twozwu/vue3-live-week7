<template>
  <!--定位條-->
  <div class="position-relative mx-6">
    <div class="progress my-6" style="height: 1px;">
      <div
        class="progress-bar"
        role="progressbar"
        style="width: 0%;"
        aria-valuenow="50"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
    <button
      type="button"
      class="position-absolute top-0 start-0 translate-middle
        btn btn-sm btn-chocolate rounded-pill"
      style="width: 2rem; height:2rem;"
    >
      1
    </button>
    <span
      class="rounded-pill text-dark
          position-absolute start-0 translate-middle"
      style="bottom:-60px;"
      >確認商品</span
    >
    <button
      type="button"
      class="position-absolute top-0 start-50 translate-middle
        btn btn-sm btn-secondary rounded-pill"
      style="width: 2rem; height:2rem;"
    >
      2
    </button>
    <span
      class="rounded-pill text-dark
          position-absolute start-50 translate-middle"
      style="bottom:-60px;"
      >填寫資料</span
    >
    <button
      type="button"
      class="position-absolute top-0 start-100 translate-middle
        btn btn-sm btn-secondary rounded-pill"
      style="width: 2rem; height:2rem;"
    >
      3
    </button>
    <span
      class="rounded-pill text-dark
          position-absolute start-100 translate-middle w-25"
      style="bottom:-60px;max-width:64px;"
      >送出訂單</span
    >
  </div>
</template>
