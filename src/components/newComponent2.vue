<template>
    <div>
<component :is="comp2">
  <template v-slot:propSlot="p">
    <div></div>
    {{p.propName}}
    <div></div>
    {{p.propAge}}
  </template>
</component>
<component :is="comp1">
  <template v-slot:namedSlot>
  </template>

</component>
</div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  name: 'newComponent2',
  components: {
    component1: () => import('@/components/component1.vue'),
    newComponent3: () => import('@/components/newComponent3.vue'),
  },
  setup () {
    const comp1 = 'newComponent3'
    const comp2 = 'component1'
    return {
      comp1,
      comp2
    }
  }
})
</script>
