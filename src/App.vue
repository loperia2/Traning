<template>
  <v-app>
    <div>
      <Selects
      @selection="checkState"
      ></Selects>
      <component :is="selection"></component>
      <!-- <h1>{{selection}}</h1> -->
    </div>

  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref, } from '@vue/composition-api'
export default defineComponent({
  name: 'App',
  components: {
    Alerts: () => import('./components/Alerts.vue'),
    Banner: () => import('./components/Banner.vue'),
    Avatar: () => import('./components/Avatar.vue'),
    Breadcrumbs: () => import('./components/Breadcrumbs.vue'),
    BottomSheets: () => import('./components/BottomSheets.vue'),
    Treeview: () => import('./components/Treeview.vue'),
    Timeline: () => import('./components/Timeline.vue'),
    Buttons: () => import('./components/Buttons.vue'),
    Selects: () => import('./components/Selects.vue'),
    Steppers: () => import('./components/Steppers.vue'),
    Sparklines: () => import('./components/Sparklines.vue'),
    Snackbars: () => import('./components/Snackbars.vue'),
    Ratings: () => import('./components/Ratings.vue'),
    DatePicker: () => import('./components/DatePicker.vue'),
    Pagination: () => import('./components/Pagination.vue'),
    NavigationDrawers: () => import('./components/NavigationDrawers.vue'),
    Menus: () => import('./components/Menus.vue'),
    ExpansionPanels: () => import('./components/ExpansionPanels.vue'),
    Dialogs: () => import('./components/Dialogs.vue'),
    Carousels: () => import('./components/Carousels.vue'),
    Forms: () => import('./components/Forms.vue'),
    Cards: () => import('./components/Cards.vue'),
    Tabs: () => import('./components/Tabs.vue'),
  },
  setup (_, { root }) {
    const selection = ref('')
    const checkState = (state) => {
      selection.value = state
    }
    return {
      selection,
      checkState,

    }
  }
})
</script>
<style lang="sass">
.v-subheader
  font-weight: 700!important

</style>
