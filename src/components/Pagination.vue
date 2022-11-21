<template>
    <div class="text-center">
      <v-pagination
        v-model="page"
        :length="6"
      ></v-pagination>
    </div>
  </template>

<script lang="ts">
import { ref } from '@vue/composition-api'
export default {
  setup () {
    const page = ref(1)
    return {
      page
    }
  }
}

</script>

<style>
