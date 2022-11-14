<template>
    <div class="card">
        <div>
          this is component1
            <slot name="propSlot" :propName="name" :propAge="age"></slot>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  name: 'newComponent',
  components: {
  },
  setup () {
    const name = 'merve'
    const age = 23
    const text = [
      {
        name: 'merve',
        age: 15
      },
      {
        name: 'seyma',
        age: 52
      },
      {
        name: 'ali',
        age: 41
      }
    ]
    return {
      text,
      name,
      age
    }
  }
})
</script>
<style>
.card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    padding: 50px;
    width:500px;
}
</style>
