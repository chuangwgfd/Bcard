import Vue from 'vue'
import App from './App.vue'
import { RouterLink as router } from 'vue-router'
import 'normalize.css/normalize.css'
import './assets/styles/global.sass'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
