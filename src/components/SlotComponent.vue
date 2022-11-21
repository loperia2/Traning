<template>
    <div>
        <Tabs></Tabs>
    <div v-for="item in items" :key="item">
    <slot name="items" v-bind="item"></slot>
  </div>

    </div>

</template>

<script lang="ts">
import { reactive } from '@vue/composition-api'
import Tabs from './Tabs.vue'
export default {
  components: {
    Tabs
  },
  setup () {
    const items = reactive([
      {
        id: 1,
        header: 'Header1',
        content: 'Content1'

      },
      {
        id: 2,
        header: 'Header2',
        content: 'Content2'

      },
      {
        id: 3,
        header: 'Header3',
        content: 'Content3'

      },
      {
        id: 4,
        header: 'Header4',
        content: 'Content4'

      },
      {
        id: 5,
        header: 'Header5',
        content: 'Content5'

      },
    ])
    return {
      items
    }
  }
}
</script>

<style>

</style>
