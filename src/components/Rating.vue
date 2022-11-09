<template>
    <div class="text-center">
      <v-rating
        v-model="rating"
        background-color="purple lighten-3"
        color="purple"
        large
        length="10"
      ></v-rating>
      <div>original value: {{rating}}</div>
      <div>computed value: {{rating2}}</div>
    </div>
  </template>
<script lang="ts">
import { computed, defineComponent, ref } from '@vue/composition-api'
export default defineComponent({
  name: 'Rating',
  components: {
  },
  setup () {
    const rating = ref(4)
    const rating2 = computed(() => {
      return rating.value * 2
    })
    return {
      rating,
      rating2
    }
  }
})
</script>
