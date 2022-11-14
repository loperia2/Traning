<template>
  <v-app>
    <div>
    <Selects @getValue="getValue"></Selects>
    </div>
    <div>
    <component :is="selectedComponent" v-if="isThatComponent('Alerts')">
    </component>
    <component :is="selectedComponent" v-if="isThatComponent('Avatars')">
    </component>
    <component :is="selectedComponent" v-if="isThatComponent('Badges')">
    </component>
    <component :is="selectedComponent" v-if="isThatComponent('BottomNavigation')">
    </component>
    <component :is="selectedComponent" v-if="isThatComponent('BottomSheet')">
    </component>
    <component :is="selectedComponent" v-if="isThatComponent('BreadCrumbs')">
    </component>
    <component :is="selectedComponent" v-if="isThatComponent('Buttons')">
    </component>
    <component :is="selectedComponent" v-if="isThatComponent('SparkLine')">
    </component>
    <component :is="selectedComponent" v-if="isThatComponent('FormInput')">
    </component>
    <component :is="selectedComponent" v-if="isThatComponent('Dialog')"></component>
    <component :is="selectedComponent" v-if="isThatComponent('Divider')"></component>
    <component :is="selectedComponent" v-if="isThatComponent('Cards')">
    </component>
    <component :is="selectedComponent" v-if="isThatComponent('Carousel')"></component>
    <component :is="selectedComponent" v-if="isThatComponent('ExpensionPanel')"></component>
    <component :is="selectedComponent" v-if="isThatComponent('Lazy')"></component>
    <component :is="selectedComponent" v-if="isThatComponent('Rating')"></component>
    <component :is="selectedComponent" v-if="isThatComponent('SnackBar')"></component>
    <component :is="selectedComponent" v-if="isThatComponent('Stepper')"></component>
    <component :is="selectedComponent" v-if="isThatComponent('Tabs')"></component>
    <component :is="selectedComponent" v-if="isThatComponent('TreeView')"></component>
    <component :is="newComponent2"></component>
  </div>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from '@vue/composition-api'
import Bar from './bar'
import Pie from './pie'
import Line from './line'
export default defineComponent({
  name: 'App',
  components: {
    Alerts: () => import('./components/Alerts.vue'),
    Avatars: () => import('./components/Avatars.vue'),
    Badges: () => import('./components/Badges.vue'),
    Selects: () => import('./components/Selects.vue'),
    BottomNavigation: () => import('./components/BottomNavigation.vue'),
    BottomSheet: () => import('./components/BottomSheet.vue'),
    BreadCrumbs: () => import('./components/BreadCrumbs.vue'),
    Buttons: () => import('./components/Buttons.vue'),
    SparkLine: () => import('./components/SparkLine.vue'),
    FormInput: () => import('./components/FormInput.vue'),
    Dialog: () => import('./components/Dialog.vue'),
    Cards: () => import('./components/Cards.vue'),
    Carousel: () => import('./components/Carousel.vue'),
    Divider: () => import('./components/Divider.vue'),
    ExpensionPanel: () => import('./components/ExpensionPanel.vue'),
    Lazy: () => import('./components/Lazy.vue'),
    Rating: () => import('./components/Rating.vue'),
    SnackBar: () => import('./components/SnackBar.vue'),
    Stepper: () => import('./components/Stepper.vue'),
    Tabs: () => import('./components/Tabs.vue'),
    TreeView: () => import('./components/TreeView.vue'),
    newComponent2: () => import('./components/newComponent2.vue'),
    component1: () => import('./components/component1.vue')
  },
  setup () {
    const newComponent2 = 'newComponent2'
    const selectedComponent = ref('') as Ref<string>
    const isThatComponent = (tagName: string) => {
      return selectedComponent.value === tagName
    }
    const getValue = (a) => {
      selectedComponent.value = a
    }
    const p = new Pie()
    const b = new Bar()
    const l = new Line()
    console.log(p)
    console.log(b)
    console.log(l)
    return {
      getValue,
      isThatComponent,
      selectedComponent,
      newComponent2
    }
  }
})
</script>
<style lang="sass">
</style>
