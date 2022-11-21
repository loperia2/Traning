<template>
<v-select
          v-model="select"
          :items="components"
          item-text="state"
          item-value="abbr"
          label="Select"
          persistent-hint
          return-object
          single-line
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
      state: 'Alerts'
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
        state: 'Bottom Sheets'
      },
      {
        state: 'Bread Crumbs'
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
        state: 'Date Picker'
      },
      {
        state: 'Dialogs'
      },
      {
        state: 'Expansion Panels'
      },
      {
        state: 'Forms'
      },
      {
        state: 'Menus'
      },
      {
        state: 'Navigation Drawers'
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
