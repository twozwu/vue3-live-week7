<template>
  <div class="bg-light section-bg">
    <div class="container">
      <div class="row justify-content-center py-6">
        <div class="col-md-6 text-center text-light">
          <h2>《關於我們》</h2>
          <p class="my-5">
            台灣在地優質可可原料 適合做烘焙.食品加工使用
            <br /><br />
            “可可樹所結的可可果實，可可果剖開後，會看到果莢內一顆顆白白的可可豆。可可豆帶有強烈的酸味，因此需要經過發酵、曝曬的工序來去除，緩和酸味的同時～也能誘發可可醇厚的香氣。”
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="container my-6">
    <div class="row">
      <div class="col-md-6">
        <img
          src="https://shoplineimg.com/58fef51759d524172c0003a4/60b0d8b25cbc84002ca44861/600x.webp?source_format=jpg"
          alt=""
          class="img-fluid"
        />
      </div>
      <div class="col-md-4 m-auto text-center">
        <h4 class="mt-4">《連結幸福 分享愛》</h4>
        <p class="text-muted">
          巧克屋創辦人Honter吳柏勳，是台灣首位獲得英國倫敦IICCT國際巧克力品鑑機構認證的巧克力品鑑師。
          擁有料理背景的Honter，對於巧克力的熱忱始於對大地、風土、食材的熱愛，以及對於土地與人文的關懷。
        </p>
      </div>
    </div>
    <div class="row flex-row-reverse justify-content-between mt-4">
      <div class="col-md-6">
        <img
          src="https://shoplineimg.com/58fef51759d524172c0003a4/60b0d93563358c003e9e5f62/600x.webp?source_format=jpg"
          alt=""
          class="img-fluid"
        />
      </div>
      <div class="col-md-4 m-auto text-center">
        <h4 class="mt-4">《出發》</h4>
        <p class="text-muted">
          從可可樹的田間管理為起始點、並將可可果進行集中發酵、乾燥熟成、烘烤研磨至調溫成形成為巧克力，需耗費約一個月的時間，若再加上可可豆的低溫熟成則需時六個月以上。
        </p>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-md-6">
        <img
          src="https://shoplineimg.com/58fef51759d524172c0003a4/60b0d8edc767f3001de77cfd/600x.webp?source_format=jpg"
          alt=""
          class="img-fluid"
        />
      </div>
      <div class="col-md-4 m-auto text-center">
        <h4 class="mt-4">《獨創巧克力工藝》</h4>
        <p class="text-muted">
          巧克屋巧克力採用Tree-To-Bar巧克力製作概念，將可可果進行集中發酵、乾燥熟成、烘烤研磨至調溫成形成為巧克力，
          需耗費約一個月的時間，若再加上可可豆的低溫熟成則需時六個月以上。<br /><br />由於工序冗長、繁複、精細，因此世界上僅有少數巧克力製造商依此方式製作。
        </p>
      </div>
    </div>
    <div class="row flex-row-reverse justify-content-between mt-4">
      <div class="col-md-6">
        <img
          src="https://images.unsplash.com/photo-1493925410384-84f842e616fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80"
          alt=""
          class="img-fluid"
        />
      </div>
      <div class="col-md-5 m-auto awards">
        <h4 class="mt-4 text-center">《巧克力的獎項肯定》</h4>
        <ul class="text-muted">
          <li>
            2020-21ICA世界巧克力大賽全球總決選，五金七銀一銅六特別獎，連續二年全球最多獎巧克力品牌
          </li>
          <li>2020ICA世界巧克力大賽亞太區， 七金九銀四銅八特別獎，連續四年亞洲最佳黑巧克力</li>
          <li>2019ICA世界巧克力大賽全球總決選，五金十九銀四銅，全球最多獎，全球最佳黑巧克力</li>
          <li class="text-start">2018ICA世界巧克力大賽全球總決選， 二金五銀二銅</li>
          <li>2018ICA世界巧克力大賽亞太區， 五金六銀五銅， 最高評價主席團特別獎</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.section-bg {
  background-image: url('https://images.unsplash.com/photo-1545015451-f05567aa6bcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80');
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
}
.awards li {
  margin-top: 50px;
}
@media (max-width: 768px) {
  .awards li {
    margin-top: 30px;
  }
}
</style>
