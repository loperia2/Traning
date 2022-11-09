<template>
<v-sparkline
    :value="value"
  ></v-sparkline>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Alerts',
  components: {
  },
  setup () {
    const value = [0, 4, 2, 7, 6, 9, 4, 8, 0, 0, 2, 7, 3, 10, 5]
    return {
      value
    }
  }
})
</script>
<style lang="sass">
</style>
