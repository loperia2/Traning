<template>
    <div class="text-center ma-2">
      <v-btn
        dark
        @click="obj.snackbar = true"
      >
        Open Snackbar
      </v-btn>
      <v-snackbar
        v-model="obj.snackbar"
      >
        {{ obj.text }}

        <template v-slot:action="{ attrs }">
          <v-btn
            color="pink"
            text
            v-bind="attrs"
            @click="obj.snackbar = false"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </template>

<script lang="ts">
import { reactive } from '@vue/composition-api'
export default {
  setup () {
    const obj = reactive({
      snackbar: false,
      text: 'Hello, I\'m a snackbar',
    })
    return {
      obj

    }
  }
//   data: () => ({
//     snackbar: false,
//     text: 'Hello, I\'m a snackbar',
//   }),
}
</script>

<style>
