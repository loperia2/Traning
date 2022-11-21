<template>
    <v-row justify="center">
      <v-date-picker v-model="picker"></v-date-picker>
    </v-row>
  </template>

<script lang="ts">

import { ref } from '@vue/composition-api'
export default {

  setup () {
    const picker = ref((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10))
    return {
      picker
    }
  }
}

</script>

<style>
