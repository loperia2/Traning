<template>
    <div class="text-center">
      <v-btn
        color="blue"
        dark
        @click="bottom_sheets.sheet = !bottom_sheets.sheet"
      >
        Open v-model
      </v-btn>
      <v-bottom-sheet v-model="bottom_sheets.sheet">
        <v-sheet
          class="text-center"
          height="200px"
        >
          <v-btn
            class="mt-6"
            text
            color="red"
            @click="bottom_sheets.sheet = !bottom_sheets.sheet"
          >
            close
          </v-btn>
          <div class="py-3">
            This is a bottom sheet using the controlled by v-model instead of activator
          </div>
        </v-sheet>
      </v-bottom-sheet>
    </div>
  </template>

<script lang="ts">
import { reactive, defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup () {
    const bottom_sheets = reactive({
      sheet: false,
      tiles: [
        { img: 'keep.png', title: 'Keep' },
        { img: 'inbox.png', title: 'Inbox' },
        { img: 'hangouts.png', title: 'Hangouts' },
        { img: 'messenger.png', title: 'Messenger' },
        { img: 'google.png', title: 'Google+' },
      ],
    })
    return {
      bottom_sheets
    }
  }
})

</script>

<style>
