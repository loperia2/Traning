<template>
    <v-sparkline
      :value="obj.value"
      :gradient="obj.gradient"
      :smooth="obj.radius || false"
      :padding="obj.padding"
      :line-width="obj.width"
      :stroke-linecap="obj.lineCap"
      :gradient-direction="obj.gradientDirection"
      :fill="obj.fill"
      :type="obj.type"
      :auto-line-width="obj.autoLineWidth"
      auto-draw
    ></v-sparkline>
  </template>

<script lang="ts">
import { reactive } from '@vue/composition-api'
export default {

  setup () {
    const gradients = [
      ['#222'],
      ['#42b3f4'],
      ['red', 'orange', 'yellow'],
      ['purple', 'violet'],
      ['#00c6ff', '#F0F', '#FF0'],
      ['#f72047', '#ffd200', '#1feaea']
    ]
    const obj = reactive({
      width: 2,
      radius: 10,
      padding: 8,
      lineCap: 'round',
      gradient: gradients[5],
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      gradientDirection: 'top',
      gradients,
      fill: false,
      type: 'trend',
      autoLineWidth: false,
    })
    return {
      obj
    }
  }

}

</script>

<style>
