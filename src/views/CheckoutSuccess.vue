<template>
  <div class="position-relative d-flex">
    <div class="container d-flex flex-column height">
      <div class="row my-auto pb-7">
        <div class="col-md-4 d-flex flex-column">
          <div class="my-auto">
            <h2>購買成功</h2>
            <p>感謝您的購買，歡迎再度光臨!</p>
            <a href="#" class="btn btn-chocolight mt-4 px-5">回到首頁</a>
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-md-50 w-100 position-absolute opacity-50 opacity-md-100 height"
      style="z-index: -1; right: 0; background-image: url(https://images.unsplash.com/photo-1573710661345-610f790e1218?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80);
      background-position: center center;"
    ></div>
  </div>
</template>

<style lang="scss">
.height {
  height: calc(100vh - 72px);
}
</style>
