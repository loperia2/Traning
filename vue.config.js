// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pluginOptions: {
    i18n: {
      locale: 'tr',
      fallbackLocale: 'tr',
      localeDir: 'locales',
      enableInSFC: false
    }
  },
  configureWebpack: {
  },
  assetsDir: 'assets'
}
