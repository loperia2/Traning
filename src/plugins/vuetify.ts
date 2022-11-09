import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/lib/util/colors'
import en from 'vuetify/src/locale/en'
import tr from 'vuetify/src/locale/tr'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

export default new Vuetify({
  options: {
    customProperties: true
  },
  lang: {
    locales: {
      en,
      tr
    },
    current: 'en',
  },
  theme: {
    options: {},
    themes: {
      light: {
        primary: '#3a3abc',
        secondary: '#3f51b5',
        accent: '#009688',
        error: '#f44336',
        warning: '#ff9800',
        info: '#2196f3',
        success: '#4caf50',
        tertiary: colors.grey.lighten4,
        dashletBorderColor: colors.grey.lighten2,
        dashletBackgroundColor: '#ffffff',
        pageBackground: colors.grey.lighten4,
        canvasBackground: '#FFFFFF',
        floatingCanvasBackground: '#FFFFFF00',
      }
    }
  }
})
