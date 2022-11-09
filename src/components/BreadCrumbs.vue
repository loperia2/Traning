<template>
  <div>
    <v-breadcrumbs
      :items="items"
      divider="-"
    ></v-breadcrumbs>

    <v-breadcrumbs
      :items="items"
      divider="."
    ></v-breadcrumbs>
    <div>computed value: {{items2}}</div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'BreadCrumbs',
  components: {
  },
  setup () {
    const items = ref([
      {
        text: 'Dashboard',
        disabled: false
      },
      {
        text: 'Link 1',
        disabled: false
      },
      {
        text: 'Link 2',
        disabled: false
      },
    ])
    const items2 = computed(() => {
      return [...items.value, { text: 'newLink', disabled: false }]
    })
    return {
      items,
      items2
    }
  }
})
</script>
<style lang="sass">
</style>
