<template>
  <v-select
    :value="selected"
    :model="select"
    @change="getValue"
    :items="items"
    label="Standard"
    >
  </v-select>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  name: 'Selects',
  components: {
  },
  setup (props, { emit }) {
    const select = ''
    const selected = ''
    const items = [
      {
        text: 'Alerts',
        disabled: false,
      },
      {
        text: 'Avatars',
        disabled: false
      },
      {
        text: 'Badges',
        disabled: false
      },
      {
        text: 'Selects',
        disabled: false
      },
      {
        text: 'BottomNavigation',
        disabled: false
      },
      {
        text: 'BottomSheet',
        disabled: false
      },
      {
        text: 'BreadCrumbs',
        disabled: false
      },
      {
        text: 'Buttons',
        disabled: false
      },
      {
        text: 'Cards',
        disabled: false
      },
      {
        text: 'Carousel',
        disabled: false
      },
      {
        text: 'Dialog',
        disabled: false
      },
      {
        text: 'Divider',
        disabled: false
      },
      {
        text: 'ExpensionPanel',
        disabled: false
      },
      {
        text: 'FormInput',
        disabled: false
      },
      {
        text: 'Lazy',
        disabled: false
      },
      {
        text: 'Rating',
        disabled: false
      },
      {
        text: 'SnackBar',
        disabled: false
      },
      {
        text: 'SparkLine',
        disabled: false
      },
      {
        text: 'Stepper',
        disabled: false
      },
      {
        text: 'Tabs',
        disabled: false
      },
      {
        text: 'TreeView',
        disabled: false
      },
    ]
    const getValue = (a) => {
      emit('getValue', a)
    }
    return {
      items,
      getValue,
      select,
      selected
    }
  }
})
</script>
<style lang="sass">
</style>
