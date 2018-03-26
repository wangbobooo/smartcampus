import Vue from 'vue'
import VueRouter from 'vue-router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'
import routerConfig from './router.config'
import './assets/css/animate.css'
import './assets/styles/myui.scss'; //核心，多了这一行用上边的样式覆盖默认的primary颜色
import store from './store'
Vue.use(MintUI)
Vue.use(VueRouter);
const router = new VueRouter(routerConfig);
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
