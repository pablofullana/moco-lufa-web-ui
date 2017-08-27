import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import VueClipboard from 'vue-clipboard2'
import VeeValidate from 'vee-validate'

/* eslint-disable no-new */

Vue.use(VueClipboard)
Vue.use(VeeValidate)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
