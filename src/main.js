import { createApp } from 'vue';
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';
import 'bootstrap';
import axios from 'axios';
import VueAxios from 'vue-axios';
// 匯入 vee-validate 主套件
import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';
// 匯入 vee-validate 相關規則
import AllRules from '@vee-validate/rules';
// 匯入多國語系的功能
import { localize, setLocale } from '@vee-validate/i18n';
// 匯入繁體中文語系檔案
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSpinner,
  faMinus,
  faPlus,
  faTimes,
  faPaperPlane,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import $httpToastMessage from '@/methods/toastMessage';

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import mitt from './methods/mitt';
import { date, currency } from './methods/functions';

import App from './App.vue';
import router from './router';

const sweetAlertOptions = {
  icon: 'error',
  title: 'Oops...',
};

// 匯入全部規則
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});
// 設定 vee-validate 全域規則
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});
// 設定預設語系
setLocale('zh_TW');

// fontAwesome
library.add(faSpinner, faMinus, faPlus, faTimes, faPaperPlane, faChevronLeft);

const app = createApp(App);
app.use(router);
app.use(BootstrapIconsPlugin);
app.use(VueAxios, axios);
app.use(VueSweetalert2, sweetAlertOptions);
app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);

app.config.globalProperties.emitter = mitt;
app.config.globalProperties.$filter = { date, currency };
app.config.globalProperties.$httpToastMessage = $httpToastMessage;

app.component('font-awesome-icon', FontAwesomeIcon);
app.config.productionTip = true;

app.component('Loading', Loading);

app.mount('#app');
