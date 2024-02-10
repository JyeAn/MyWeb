import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import jQuery from 'jquery'
import 'popper.js'
import 'bootstrap'
import './assets/app.scss'
window.$ = window.jQuery = jQuery

Vue.config.productionTip = false
// Vue.component('MyNavbar', require('./components/MyNavbar.vue').default)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
