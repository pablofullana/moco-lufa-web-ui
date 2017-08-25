import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import VueClipboard from 'vue-clipboard2'

/* eslint-disable no-new */

Vue.use(VueClipboard)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
