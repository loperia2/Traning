<template>
  <div>
    <v-carousel>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
    <div>computed value: {{items2}}</div>
  </div>
  </template>
<script lang="ts">
import { computed, defineComponent, ref } from '@vue/composition-api'
export default defineComponent({
  name: 'Carousel',
  components: {
  },
  setup () {
    const items = ref([
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
      }
    ])
    const items2 = computed(() => {
      return [...items.value, { src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg' }]
    })
    return {
      items,
      items2
    }
  }
})
</script>
