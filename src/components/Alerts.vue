<template>
    <div>
        <v-alert
    dense
    prominent
    type="success">
        Alert Usage
    </v-alert>
    <!-- Slot Component  -->
    <SlotComponent>
        <template #items="{id, header,content}">

          <v-card
    class="mx-auto"
    max-width="344"
    outlined
    :key="id"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5 mb-1">
          {{header}}
        </v-list-item-title>
        <v-list-item-subtitle>{{content}}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
        Button
      </v-btn>
    </v-card-actions>
  </v-card>

        </template>

    </SlotComponent>
    <!-- Slot Component -->

    </div>

</template>

<script lang="ts">
import { ref, defineComponent, onMounted, reactive } from '@vue/composition-api'
import SlotComponent from './SlotComponent.vue'

export default defineComponent({
  components: {
    SlotComponent
  },
  setup () {
    const pokemons = ref([])
    const api = 'https://pokeapi.co/api/v2/pokemon/ditto'

    // async-await
    async function f1 () {
      try {
        const response = await fetch(api)
        pokemons.value = await response.json()
        console.log(pokemons)
      } catch (error) {
        alert('An error occured.. 1' + error)
      }
    }
    // try-catch
    async function f2 () {
      try {
        const response = await fetch(api)
        pokemons.value = await response.json()
        console.log(pokemons)
      } catch (error) {
        alert('An error occured.. 2' + error)
      }
    }
    // then-catch
    function f3 () {
      fetch(api)
        .then((response) => response.json())
        .then((data) => {
          pokemons.value = data
          console.log(pokemons)
        })
        .catch((error) => {
          alert('An error occured.. 3' + error)
        })
    }
    onMounted(() => {
      f1()
    })
    return {
      pokemons
    }
  }
})
</script>

<style>

</style>
