import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App'
import router from './router'
import YmHeader from './components/YmHeader'
import YmFooter from './components/YmFooter'
import YmLoading from './components/YmLoading'

Vue.component('ym-header',YmHeader)
Vue.component('ym-footer',YmFooter)
Vue.component('ym-loading',YmLoading)

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')