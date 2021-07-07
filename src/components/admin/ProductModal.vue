<template>
  <div
    id="productModal"
    ref="productModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span>{{ title }}</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="form-group">
                <label for="imageUrl">主要圖片</label>
                <input
                  id="imageUrl"
                  v-model="product.imageUrl"
                  type="text"
                  class="form-control"
                  placeholder="請輸入圖片連結"
                />
                <input
                  type="file"
                  class="form-control"
                  placeholder="請輸入圖片連結"
                  ref="file"
                  v-if="!product.imageUrl"
                  @change="tempImg"
                />
                <img class="img-fluid" :src="product.imageUrl" />
              </div>
              <div class="mb-1">多圖新增</div>
              <div v-if="product.imageUrl">
                <div class="mb-1" v-for="(img, key) in product.imagesUrl" :key="key">
                  <div class="form-group">
                    <label for="imagesUrl">輸入圖片網址</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="請輸入圖片連結"
                      v-model="product.imagesUrl[key]"
                    />
                    <input
                      type="file"
                      class="form-control"
                      ref="file"
                      v-if="!product.imagesUrl[key]"
                      @change="tempImg"
                    />
                    <!-- (2). 依序綁定(1)開出來的資料欄位 -->
                    <img class="img-fluid" :src="img" alt="" />
                  </div>
                </div>
                <div v-if="!product.imagesUrl || product.imagesUrl[product.imagesUrl.length - 1]">
                  <!--
                      1. !tempproduct.imagesUrl.length：長度為0是false的話讓他變成true
                      2. tempproduct.imagesUrl[tempproduct.imagesUrl.length - 1]：
                      抓陣列最後一個值，有值為true，沒值為false

                    -->
                  <button
                    type="button"
                    class="btn btn-outline-primary btn-sm d-block w-100"
                    @click="addImg"
                  >
                    <!-- (1). push：本來沒有欄位，push一個空字串產生欄位 -->
                    新增圖片(in多圖)
                  </button>
                </div>
                <div v-else>
                  <button
                    type="button"
                    class="btn btn-outline-primary btn-sm d-block w-100"
                    @click="uploadImg"
                    :disabled="loadingStatus == 'loading'"
                  >
                    <font-awesome-icon
                      icon="spinner"
                      pulse
                      class="fas fa-spinner fa-pulse"
                      v-if="loadingStatus == 'loading'"
                    ></font-awesome-icon
                    >上傳圖片(in多圖)
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-primary btn-sm d-block w-100"
                    @click="multiple"
                  >
                    自動產生圖片(in多圖)
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm d-block w-100"
                    @click="product.imagesUrl.pop()"
                  >
                    刪除圖片
                  </button>
                </div>
              </div>
              <div v-else>
                <button
                  type="button"
                  class="btn btn-outline-primary btn-sm d-block w-100"
                  @click="uploadImg('main')"
                  :disabled="loadingStatus == 'loading'"
                >
                  <font-awesome-icon
                    icon="spinner"
                    pulse
                    class="fas fa-spinner fa-pulse"
                    v-if="loadingStatus == 'loading'"
                  ></font-awesome-icon
                  >上傳圖片(in主要圖片)
                </button>
                <button
                  type="button"
                  class="btn btn-outline-primary btn-sm d-block w-100"
                  @click="autoImg"
                >
                  自動產生圖片(in主要圖片)
                </button>
                <button
                  type="button"
                  class="btn btn-outline-primary btn-sm d-block w-100"
                  @click="addImg"
                >
                  新增圖片(in主要圖片)
                </button>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="form-group">
                <label for="title">標題</label>
                <input
                  id="title"
                  type="text"
                  class="form-control"
                  placeholder="請輸入標題"
                  v-model="product.title"
                />
              </div>

              <div class="row">
                <div class="form-group col-md-6">
                  <label for="category">分類</label>
                  <input
                    id="category"
                    type="text"
                    class="form-control"
                    placeholder="請輸入分類"
                    v-model="product.category"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="unit">單位</label>
                  <input
                    id="unit"
                    type="text"
                    class="form-control"
                    placeholder="請輸入單位"
                    v-model="product.unit"
                  />
                </div>
              </div>

              <div class="row">
                <div class="form-group col-md-6">
                  <label for="origin_price">原價</label>
                  <input
                    id="origin_price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入原價"
                    v-model.number="product.origin_price"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="price">售價</label>
                  <input
                    id="price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入售價"
                    v-model.number="product.price"
                  />
                </div>
              </div>
              <hr />

              <div class="form-group">
                <label for="description">產品描述</label>
                <textarea
                  id="description"
                  type="text"
                  class="form-control"
                  placeholder="請輸入產品描述"
                  v-model="product.description"
                >
                </textarea>
              </div>
              <div class="form-group">
                <label for="content">說明內容</label>
                <textarea
                  id="content"
                  type="text"
                  class="form-control"
                  placeholder="請輸入說明內容"
                  v-model="product.content"
                >
                </textarea>
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input
                    id="is_enabled"
                    class="form-check-input"
                    type="checkbox"
                    :true-value="1"
                    :false-value="0"
                    v-model="product.is_enabled"
                  />
                  <label class="form-check-label" for="is_enabled">是否啟用</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="addItem"
            :disabled="loadingStatus == 'add'"
          >
            <font-awesome-icon
              icon="spinner"
              pulse
              class="fas fa-spinner fa-pulse"
              v-if="loadingStatus == 'add'"
            ></font-awesome-icon
            >確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
  props: ['pagination'],
  data() {
    return {
      apiUrl: process.env.VUE_APP_API,
      apiPath: process.env.VUE_APP_PATH,
      file: {},
      modal: '',
      product: {
        imageUrl: '',
        imagesUrl: [],
        uploadImg: [],
      },
      title: '',
      isNew: false,
      loadingStatus: '',
    };
  },
  methods: {
    addItem() {
      this.loadingStatus = 'add';
      let api = `${this.apiUrl}/api/${this.apiPath}/admin/product`;
      let http = 'post';

      if (!this.isNew) {
        api = `${this.apiUrl}/api/${this.apiPath}/admin/product/${this.product.id}`;
        http = 'put';
      }

      this.axios[http](api, { data: this.product })
        .then((res) => {
          // console.log(res);
          if (res.data.success) {
            this.$$httpToastMessage(res, res.data.message);
            this.$emit('update', this.pagination.current_page);
            this.hideModal();
          } else {
            console.log(res.data.message);
            this.$$httpToastMessage(res, res.data.message);
          }
          this.loadingStatus = '';
        })
        .catch((error) => {
          console.log(error);
          this.loadingStatus = '';
        });
    },
    addImg() {
      if (!this.product.imagesUrl) {
        this.product.imagesUrl = [''];
      } else {
        this.product.imagesUrl.push('');
      }
    },
    autoImg() {
      this.product.imageUrl = 'https://picsum.photos/400';
      this.product.imagesUrl.push('');
      // console.log(this.product.imagesUrl.length);
    },
    multiple() {
      const key = this.product.imagesUrl.length - 1;
      //   console.log(key);
      if (this.product.imagesUrl[key] === '') {
        this.product.imagesUrl[key] = `https://picsum.photos/40${this.product.imagesUrl.length}`;
        this.product.imagesUrl.push('');
      } else {
        this.product.imagesUrl.push(`https://picsum.photos/40${this.product.imagesUrl.length}`);
      }
    },
    tempImg(e) {
      // 上傳前
      const temp = e.target.files[0];
      this.file = temp;
    },
    clearFile() {
      this.$refs.file.value = null;
    },
    uploadImg(key) {
      if (!this.file.size) {
        this.$httpToastMessage(false, '上傳檔案為空');
        return;
      }
      this.loadingStatus = 'loading';
      const formData = new FormData();
      formData.append('file-to-upload', this.file);
      this.axios
        .post(`${this.apiUrl}/api/${this.apiPath}/admin/upload`, formData)
        .then((res) => {
          if (res.data.success) {
            if (key === 'main') {
              console.log(res);
              this.product.imageUrl = res.data.imageUrl;
              this.product.imagesUrl.push('');
            } else {
              const key2 = this.product.imagesUrl.length - 1;
              this.product.imagesUrl[key2] = res.data.imageUrl;
              this.product.imagesUrl.push('');
            }
            this.$httpToastMessage(res, '圖片上傳');
            this.temp = {};
          } else {
            this.$httpToastMessage(res, res.data.message);
          }
          this.loadingStatus = '';
        })
        .catch((error) => {
          this.$httpToastMessage(false, error);
          this.loadingStatus = '';
        });
    },
    openModal(product, title) {
      if (product === 'newItem') {
        this.product = { imagesUrl: [] };
        this.title = title;
        this.isNew = true;
      } else {
        this.product = { ...product };
        this.title = title;
        this.isNew = false;
      }
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.productModal);
  },
};
</script>
