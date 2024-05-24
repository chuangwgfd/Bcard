import Vue from 'vue'
import App from './App.vue'
import { RouterLink as router } from 'vue-router'
import 'normalize.css/normalize.css'
import './assets/styles/global.sass'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
