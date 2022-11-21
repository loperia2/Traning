<template>
  <v-app>
    <div>
      <Selects
      @selection="checkState"
      />
      <Alerts
      v-if="selection==='Alerts'"
      ></Alerts>
      <Banner
      v-else-if="selection==='Banner'"
      ></Banner>
      <Avatar
      v-else-if="selection==='Avatar'"
      ></Avatar>
      <Breadcrumbs
      v-else-if="selection==='Bread Crumbs'"
      />
      <Treeview
      v-else-if="selection==='Treeview'"
      />
      <Timeline
      v-else-if="selection==='Timeline'"
      />
      <Buttons
      v-else-if="selection==='Buttons'"
      />
      <Steppers
      v-else-if="selection==='Steppers'"
      />
      <Sparklines
      v-else-if="selection==='Sparklines'"
      />
      <Snackbars
      v-else-if="selection==='Snackbars'"
      />
      <Ratings
      v-else-if="selection==='Ratings'"
      />
      <DatePicker
      v-else-if="selection==='Date Picker'"
      />
      <Pagination
      v-else-if="selection==='Pagination'"
       />
      <NavigationDrawers
      v-else-if="selection==='Navigation Drawers'"
       />
      <Menus
      v-else-if="selection==='Menus'"
      />
      <ExpansionPanels
      v-else-if="selection==='Expansion Panels'"
       />
      <Dialogs
      v-else-if="selection==='Dialogs'"
       />
      <Carousels
      v-else-if="selection==='Carousels'"
      />
      <Forms
      v-else-if="selection==='Forms'"
       />
      <BottomSheets
      v-else-if="selection==='Bottom Sheets'"
       />
      <Cards
      v-else
       />
      <h1>{{selection}}</h1>
    </div>

  </v-app>
</template>

<script lang="ts">
import Alerts from './components/Alerts.vue'
import Banner from './components/Banner.vue'
import Avatar from './components/Avatar.vue'
import Breadcrumbs from './components/Breadcrumbs.vue'
import Treeview from './components/Treeview.vue'
import Timeline from './components/Timeline.vue'
import Buttons from './components/Buttons.vue'
import Tabs from './components/Tabs.vue'
import Selects from './components/Selects.vue'
import Steppers from './components/Steppers.vue'
import Sparklines from './components/Sparklines.vue'
import Snackbars from './components/Snackbars.vue'
import Ratings from './components/Ratings.vue'
import DatePicker from './components/DatePicker.vue'
import Pagination from './components/Pagination.vue'
import NavigationDrawers from './components/NavigationDrawers.vue'
import Menus from './components/Menus.vue'
import ExpansionPanels from './components/ExpansionPanels.vue'
import Dialogs from './components/Dialogs.vue'
import Carousels from './components/Carousels.vue'
import Forms from './components/Forms.vue'
import BottomSheets from './components/BottomSheets.vue'
import Cards from './components/Cards.vue'
import { defineComponent, onBeforeMount, ref } from '@vue/composition-api'
export default defineComponent({
  name: 'App',
  components: {
    Alerts,
    Banner,
    Avatar,
    Breadcrumbs,
    Treeview,
    Timeline,
    Buttons,
    Selects,
    Steppers,
    Sparklines,
    Snackbars,
    Ratings,
    DatePicker,
    Pagination,
    NavigationDrawers,
    Menus,
    ExpansionPanels,
    Dialogs,
    Carousels,
    Forms,
    BottomSheets,
    Cards,
    Tabs
  },
  setup (_, { root }) {
    const selection = ref('Alerts')
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
