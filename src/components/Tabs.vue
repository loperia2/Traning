<template>
    <div>
    <v-card>
        <v-tabs v-model="tab" background-color="yellow" color="basil" grow>
            <v-tab v-for="item in items" :key="item">
                {{ item }}
            </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
            <v-tab-item v-for="item in items" :key="item">
                <v-card>
                    <v-card-text>{{ text }}</v-card-text>
                </v-card>
            </v-tab-item>
        </v-tabs-items>
    </v-card>
    <div>computed tab value : {{tab2}}</div>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'Tabs',
  components: {
  },
  setup () {
    const tab = ref(null)
    const tab2 = computed(() => {
      return `${tab.value}${tab.value}`
    })
    const items = ref([
      'Appetizers', 'Entrees', 'Deserts', 'Cocktails',
    ])
    const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    return {
      tab,
      items,
      text,
      tab2
    }
  }
})
</script>
