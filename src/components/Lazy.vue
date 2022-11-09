<template>
    <v-responsive class="overflow-y-auto" max-height="400">
        <div class="pa-6 text-center">
            Scroll down
        </div>
        <v-responsive height="200vh" class="text-center pa-2">
            <v-responsive min-height="50vh"></v-responsive>
            <div class="text-center text-body-2 mb-12">
                The card will appear below:
            </div>
            <v-lazy v-model="isActive" :options="{
                threshold: .5
            }" min-height="200" transition="fade-transition">
                <v-card class="mx-auto" max-width="336">
                    <v-card-title>Card title</v-card-title>
                    <v-card-text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus recusandae, amet earum fugiat
                        exercitationem, odio id architecto, ipsum vel eum consequuntur cupiditate odit enim aspernatur
                        cumque corrupti deserunt dicta nihil.
                    </v-card-text>
                </v-card>
            </v-lazy>
        </v-responsive>
        <div>computed value: {{isActive2}}</div>
    </v-responsive>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from '@vue/composition-api'
export default defineComponent({
  name: 'Lazy',
  components: {
  },
  setup () {
    const isActive = ref(true)
    const isActive2 = computed(() => {
      return !isActive.value
    })
    return {
      isActive,
      isActive2
    }
  }
})
</script>
