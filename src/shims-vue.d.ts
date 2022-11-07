import { Vue2Storage } from 'vue2-storage'
import VueI18n from 'vue-i18n'

declare module '*.vue' {
  import Vue from 'vue'
  export default typeof Vue
}

declare module 'vue/types/vue' {
  interface VueConstructor {
    $storage: Vue2Storage;
    $i18n: VueI18n;
  }
}

declare module 'vue-page-title'
