<template>
    <v-stepper v-model="e1">
        <v-stepper-header>
            <v-stepper-step :complete="e1 > 1" step="1">
                step 1
            </v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="e1 > 2" step="2">
                step 2
            </v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="e1 > 3" step="3">
                step 3
            </v-stepper-step>
            <v-stepper-step :complete="e1 > 4" step="4">
                step 4
            </v-stepper-step>
            <v-stepper-step step="5">
                step 5
            </v-stepper-step>
        </v-stepper-header>
        <v-stepper-items>
            <v-stepper-content step="1">
                <v-btn color="primary" @click="e1 = 2">
                    Continue
                </v-btn>
            </v-stepper-content>
            <v-stepper-content step="2">
                <v-btn color="primary" @click="e1 = 3">
                    Continue
                </v-btn>
            </v-stepper-content>
            <v-stepper-content step="3">
                <v-btn color="primary" @click="e1 = 4">
                    Continue
                </v-btn>
            </v-stepper-content>
            <v-stepper-content step="4">
                <v-btn color="primary" @click="e1 = 5">
                    Continue
                </v-btn>
            </v-stepper-content>
            <v-stepper-content step="5">
                <v-btn color="primary" @click="e1 = 1">
                    Continue
                </v-btn>
            </v-stepper-content>
        </v-stepper-items>
    </v-stepper>
</template>
<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'Stepper',
  components: {
  },
  setup () {
    const e1 = ref(1)
    return {
      e1
    }
  }
})
</script>
