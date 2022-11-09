<template>
  <div>
  <div>computed value :{{value2}}</div>
  <v-bottom-navigation v-model="value" fixed>
    <v-btn value="recent">
      <span>Recent</span>

      <v-icon>mdi-history</v-icon>
    </v-btn>

    <v-btn value="favorites">
      <span>Favorites</span>

      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn value="nearby">
      <span>Nearby</span>

      <v-icon>mdi-map-marker</v-icon>
    </v-btn>
  </v-bottom-navigation>
</div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'Alerts',
  components: {
  },
  setup () {
    const value = ref('recent')
    const value2 = computed(() => {
      return `${value.value}${value.value}`
    })
    console.log(value2.value)
    return {
      value,
      value2
    }
  }
})
</script>
<style lang="sass">
</style>
