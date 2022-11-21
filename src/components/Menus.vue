<template>
    <div class="text-center">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
          >
            Dropdown
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </template>

<script lang="ts">
import { ref } from '@vue/composition-api'
export default {
  setup () {
    /* eslint-disable */
    const items = ref([{ title: 'Click Me 1' },
      { title: 'Click Me 2' },
      { title: 'Click Me 3' },
      { title: 'Click Me 4' },])
    return {
      items
    }
  }
}

</script>

<style>
