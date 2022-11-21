<template>
<v-select
          v-model="select"
          :items="components"
          item-text="state"
          full-width
          label="Select"
          persistent-hint
          return-object
          single-line
          class="text-center"
        ></v-select>
</template>

<script lang="ts">
import { ref, reactive, onUpdated } from '@vue/composition-api'
export default {

  setup (props, ctx) {
    onUpdated(() => {
      ctx.emit('selection', select.value.state)
      console.log(select.value.state)
    })
    const select = ref({
      state: ''
    })
    const components = reactive([
      {
        state: 'Alerts'
      },
      {
        state: 'Avatar'
      },
      {
        state: 'Banner'
      },
      {
        state: 'BottomSheets'
      },
      {
        state: 'Breadcrumbs'
      },
      {
        state: 'Buttons'
      },
      {
        state: 'Cards'
      },
      {
        state: 'Carousels'
      },
      {
        state: 'DatePicker'
      },
      {
        state: 'Dialogs'
      },
      {
        state: 'ExpansionPanels'
      },
      {
        state: 'Forms'
      },
      {
        state: 'Menus'
      },
      {
        state: 'NavigationDrawers'
      },
      {
        state: 'Pagination'
      },
      {
        state: 'Ratings'
      },
      {
        state: 'Snackbars'
      },
      {
        state: 'Sparklines'
      },
      {
        state: 'Steppers'
      },
      {
        state: 'Timeline'
      },
      {
        state: 'Treeview'
      },

    ])
    return {
      components,
      select
    }
  }
}

</script>

<style>
*{
  text-align: center;
}
</style>
