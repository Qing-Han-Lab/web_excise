import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/style/normalize.css' // reset.css
import '@/components/components' // 公共组件
import common from '@/utils/common' // 公共方法
import api from './utils/api' // api接口地址
import http from './utils/http' // ajax封装
import VueLazyLoad from 'vue-lazyload' // 图片懒加载
import { Toast, InfiniteScroll } from 'mint-ui' // 吐司 下拉 上拉
import Search from '@/extends/searchBox' // 全局搜索框注入
import Product from '@/extends/productBox' // 全局商品定位注入
import '@/style/style.scss' // 全局样式
import 'swiper/dist/css/swiper.css' // swiper的css
import '@/utils/polyfill' // polyfill 兼容低端安卓机
Vue.use(Search)
Vue.use(Product)

Vue.prototype.api = api
Vue.prototype.$http = http

// mintUI组件注册
Vue.prototype.$toast = Toast // 吐司
Vue.use(InfiniteScroll) // 上拉无线加载

Vue.use(common)
Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  error: require('./assets/default.png'),
  loading: require('./assets/default.png'),
  attempt: 1
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
