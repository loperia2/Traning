<template>
    <v-breadcrumbs
  divider="/"
  large
  :items="items"
></v-breadcrumbs>

</template>

<script lang="ts">
import { ref } from '@vue/composition-api'
export default {

  setup () {
    const items = ref([{
      text: 'Dashboard',
      disabled: false,
      href: '/'

    },
    {
      text: 'Link 1',
      disabled: false,
      href: '/',
    },
    {
      text: 'Link 2',
      disabled: true,
      href: '/',
    },

    ])

    return {
      items,
    }
  }
}

</script>

<style>
