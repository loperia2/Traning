<template>
  <v-row>
    <v-col cols="12" sm="8" offset-sm="3">
      <v-card>
        <template v-for="(item, index) in items.slice(0, 6)">
          <v-divider v-if="item.divider" :key="index"></v-divider>
          <v-list-item v-else :key="item.content">
            <v-list-item-content>
              <v-list-item-subtitle v-html="item.content"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-card>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'Buttons',
  components: {
  },
  setup () {
    const items = ref([
      { content: '<span class="font-weight-bold">Ali Connors</span> &mdash; Ill be in your neighborhood doing errands this weekend. Do you want to hang out?' },
      { divider: true, inset: true },
      { content: '<span class="font-weight-bold">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but Im out of town this weekend.' },
      { divider: true, inset: true },
      { content: '<span class="font-weight-bold">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?' },
    ])
    const items2 = computed(() => {
      items.value.push({ content: '<span class="font-weight-bold">Ali Connors</span> &mdash; Ill be in your neighborhood doing errands this weekend. Do you want to hang out?' },
        { divider: true, inset: true },)
    })
    return {
      items,
      items2
    }
  }
})
</script>
