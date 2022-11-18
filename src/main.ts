import Vue from 'vue'
import '@/plugins/composition-api'
import App from './App.vue'
import '@/plugins/flag'
import '@/plugins/vue-dompurify'
import '@/plugins/editor'
import vuetify from '@/plugins/vuetify'
import { VueMaskDirective } from 'v-mask'
import '@mdi/font/css/materialdesignicons.css'
import '@/plugins/page-title'
import router from './router'
import VueRouter, { RouteConfig } from 'vue-router'
import { useRoute } from 'vue-router/composables'

Vue.config.productionTip = false
Vue.directive('mask', VueMaskDirective)
Vue.use(VueRouter)
const app = new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

export default app
