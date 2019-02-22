import Vue from 'vue'
import App from './App.vue'
import { importLibs } from './utils'
import store from './store'
import { createRouter } from './router'
import Viewer from 'v-viewer'

Vue.config.productionTip = false
Vue.use(Viewer)

importLibs()
const router = createRouter()
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
