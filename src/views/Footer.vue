<template>
  <div class="bg-mail py-4 mt-6">
    <div class="container">
      <div
        class="d-flex flex-column flex-md-row justify-content-between
        align-items-md-center align-items-start"
      >
        <p class="mb-0 fw-light">請立即訂閱我們，以確保獲得最新優惠活動！</p>
        <div class="input-group w-md-50 mt-md-0 mt-3">
          <input
            type="text"
            class="form-control rounded-0 border-chocolight"
            placeholder="請輸入電子信箱"
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-chocolight rounded-0"
              type="button"
              id="search"
              @click="toastMessage"
            >
              送出
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-chocolate py-5">
    <div class="container">
      <div class="d-flex align-items-center justify-content-between text-white mb-md-2 mb-4">
        <a class="text-white h4" href="#"
          ><img src="@/assets/chocologo-s.png" class="navbar-brand"
        /></a>
        <ul class="d-flex list-unstyled mb-0 h4">
          <li>
            <a href="#" class="text-white mx-3"><i class="fab fa-facebook"></i></a>
          </li>
          <li>
            <a href="#" class="text-white mx-3"><i class="fab fa-instagram"></i></a>
          </li>
          <li>
            <a href="#" class="text-white ms-3"><i class="fab fa-line"></i></a>
          </li>
        </ul>
      </div>
      <div class="d-flex align-items-center justify-content-between text-white mb-md-4 mb-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d911.5220305327193!2d120.97437302926683!3d23.957323824596582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3468d9903ecdfebf%3A0x91484f4852917691!2zNTQ15Y2X5oqV57ij5Z-U6YeM6Y6u5Y2X5a6J6LevMjLomZ8!5e0!3m2!1szh-TW!2stw!4v1626628106013!5m2!1szh-TW!2stw"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div
        class="d-flex flex-column flex-md-row justify-content-between
         align-items-md-end align-items-start text-white"
      >
        <div class="mb-md-0 mb-4">
          <p class="mb-0">服務專線：02-3456-7890</p>
          <p class="mb-0">行動電話：0908-0898-0838</p>
          <p class="mb-0">電子郵件：service@mail.com</p>
          <p class="mb-0">通訊地址：雲林縣古坑鄉咖啡山神奇的小巷弄888號</p>
        </div>
        <div>
          <a
            href="https://github.com/twozwu/vue3-live-week7"
            target="_blank"
            class="mb-2 h4 table align-middle"
            ><i class="fab fa-github"></i></a
          ><router-link class="btn btn-chocolate" to="/admin/products">進入後台</router-link>
          <p class="mb-2">圖片僅為練習使用，無商業用途。</p>
          <p class="mb-0">© 2021 LOGO All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.bg-mail {
  background: #e9d7c8;
}
</style>

<script>
export default {
  methods: {
    toastMessage() {
      this.$httpToastMessage(true, '感謝您的訂閱，未來將不定時寄送優惠通知');
    },
  },
};
</script>
