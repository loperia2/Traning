<template>
  <v-app>
    <div>
    <Selects @getValue="getValue"></Selects>
    </div>
    <div>
    <Alerts v-if="isThatComponent('Alerts')">
    </Alerts>
    <Avatars v-if="isThatComponent('Avatars')">
    </Avatars>
    <Badges v-if="isThatComponent('Badges')">
    </Badges>
    <BottomNavigation v-if="isThatComponent('BottomNavigation')">
    </BottomNavigation>
    <BottomSheet v-if="isThatComponent('BottomSheet')">
    </BottomSheet>
    <BreadCrumbs v-if="isThatComponent('BreadCrumbs')">
    </BreadCrumbs>
    <Buttons v-if="isThatComponent('Buttons')">
    </Buttons>
    <SparkLine v-if="isThatComponent('SparkLine')">
    </SparkLine>
    <FormInput v-if="isThatComponent('FormInput')">
    </FormInput>
    <Dialog v-if="isThatComponent('Dialog')"></Dialog>
    <Divider v-if="isThatComponent('Divider')"></Divider>
    <Cards v-if="isThatComponent('Cards')">
    </Cards>
    <Carousel v-if="isThatComponent('Carousel')"></Carousel>
    <ExpensionPanel v-if="isThatComponent('ExpensionPanel')"></ExpensionPanel>
    <Lazy v-if="isThatComponent('Lazy')"></Lazy>
    <Rating v-if="isThatComponent('Rating')"></Rating>
    <SnackBar v-if="isThatComponent('SnackBar')"></SnackBar>
    <Stepper v-if="isThatComponent('Stepper')"></Stepper>
    <Tabs v-if="isThatComponent('Tabs')"></Tabs>
    <TreeView v-if="isThatComponent('TreeView')"></TreeView>
  </div>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from '@vue/composition-api'
import Alerts from './components/Alerts.vue'
import Avatars from './components/Avatars.vue'
import Badges from './components/Badges.vue'
import Selects from './components/Selects.vue'
import BottomNavigation from './components/BottomNavigation.vue'
import BottomSheet from './components/BottomSheet.vue'
import BreadCrumbs from './components/BreadCrumbs.vue'
import Buttons from './components/Buttons.vue'
import SparkLine from './components/SparkLine.vue'
import FormInput from './components/FormInput.vue'
import Dialog from './components/Dialog.vue'
import Cards from './components/Cards.vue'
import Carousel from './components/Carousel.vue'
import Divider from './components/Divider.vue'
import ExpensionPanel from './components/ExpensionPanel.vue'
import Lazy from './components/Lazy.vue'
import Rating from './components/Rating.vue'
import SnackBar from './components/SnackBar.vue'
import Stepper from './components/Stepper.vue'
import Tabs from './components/Tabs.vue'
import TreeView from './components/TreeView.vue'
export default defineComponent({
  name: 'App',
  components: {
    Alerts,
    Avatars,
    Badges,
    Selects,
    BottomNavigation,
    BottomSheet,
    BreadCrumbs,
    Buttons,
    SparkLine,
    FormInput,
    Dialog,
    Cards,
    Carousel,
    Divider,
    ExpensionPanel,
    Lazy,
    Rating,
    SnackBar,
    Stepper,
    Tabs,
    TreeView
  },
  setup () {
    const selectedComponent = ref('') as Ref<string>
    const isThatComponent = (tagName: string) => {
      return selectedComponent.value === tagName
    }
    const getValue = (a) => {
      selectedComponent.value = a
    }
    return {
      getValue,
      isThatComponent
    }
  }
})
</script>
<style lang="sass">
</style>
