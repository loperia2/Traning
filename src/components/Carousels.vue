<template>
    <v-carousel v-model="carousel.model">
      <v-carousel-item
        v-for="(color, i) in carousel.colors"
        :key="color"
      >
        <v-sheet
          :color="color"
          height="100%"
          tile
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="text-h2">
              Slide {{ i + 1 }}
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </template>

<script lang="ts">
import { reactive } from '@vue/composition-api'
export default {
  setup () {
    const carousel = reactive({
      model: 0,
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],
    })
    return {
      carousel
    }
  }
}

</script>

<style>
