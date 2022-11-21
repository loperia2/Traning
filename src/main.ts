import Vue from 'vue'
import '@/plugins/composition-api'
import App from './App.vue'
import '@/plugins/flag'
import '@/plugins/vue-dompurify'
import '@/plugins/editor'
import vuetify from '@/plugins/vuetify'
import { VueMaskDirective } from 'v-mask'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'
import '@/plugins/page-title'

Vue.config.productionTip = false

Vue.directive('mask', VueMaskDirective)

const app = new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

export default app
