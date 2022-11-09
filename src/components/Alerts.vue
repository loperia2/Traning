<template>
  <v-alert  dense
      outlined
      type="error" >
  this is an alert !
  </v-alert>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Alerts',
  components: {
  },
  setup () {
    return {
    }
  }
})
</script>
<style lang="sass">
</style>
