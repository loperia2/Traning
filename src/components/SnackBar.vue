<template>
    <div class="text-center ma-2">
      <v-btn
        dark
        @click="snackbar = !snackbar"
      >
        Open Snackbar
      </v-btn>
      <v-snackbar
        v-model="snackbar"
      >
        {{ text }}
        <template v-slot:action="{ attrs }">
          <v-btn
            color="pink"
            text
            v-bind="attrs"
            @click="snackbar = false"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
      <div>original value: {{snackbar}}</div>
      <div>computed value: {{snackbar2}}</div>
    </div>
  </template>
<script lang="ts">
import { computed, defineComponent, ref } from '@vue/composition-api'
export default defineComponent({
  name: 'SnackBar',
  components: {
  },
  setup () {
    const snackbar = ref(false)
    const text = ref('this is a snackbar text')
    const a = false
    const snackbar2 = computed(() => {
      return !snackbar.value
    })
    return {
      snackbar,
      text,
      snackbar2
    }
  }
})
</script>
