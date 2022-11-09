<template>
  <div class="text-center">
    <v-btn
      dark
      @click="toggle"
    >
      Open BottomSheet
    </v-btn>
    <v-bottom-sheet v-model="sheet">
      <v-sheet
        class="text-center"
        height="200px"
        fullscreen
      >
        <v-btn
          class="mt-6"
          text
          color="red"
          @click="toggle"
        >
          close
        </v-btn>
        <div class="py-3">
          This is a bottom sheet
        </div>
      </v-sheet>
    </v-bottom-sheet>
    <div>computed value: {{sheet2}}</div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'Alerts',
  components: {
  },
  setup () {
    const sheet = ref(true)
    const toggle = () => {
      sheet.value = !sheet.value
    }
    const sheet2 = computed(() => {
      return !sheet.value
    })
    return {
      sheet,
      toggle,
      sheet2
    }
  }
})
</script>
<style lang="sass">
</style>
