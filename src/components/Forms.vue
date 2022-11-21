<template>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="3"
          >
            <v-text-field
              v-model="firstname"
              :rules="formInfo.nameRules"
              :counter="10"
              label="First name"
              required
            ></v-text-field>
            actual:{{firstname}}
            computed:{{computed_str}}
          </v-col>

          <v-col
            cols="12"
            md="3"
          >
            <v-select
          :items="items"
          return-object
          v-model="select"
          :hint="`${select.state}`"
          item-text="item_name"
          label="Standard"
        ></v-select>
        actual:{{select}}
        computed:{{obj_to_string}}
          </v-col>

          <v-col
            cols="12"
            md="3"
          >
            <v-checkbox
      v-model="checkbox"
      :rules="formInfo.checkboxRules"
      label="Do you agree?"
      required
    ></v-checkbox>
    actual:{{checkbox}}
    computed:{{reverse_bool}}
          </v-col>
          <v-col
          cols="12"
            md="3">
            <v-slider
              v-model="age"
              color="orange"
              label="Age"
              hint="Be honest"
              min="1"
              max="100"
              thumb-label
            ></v-slider>
            actual:{{age}}
            computedd:{{multiply_two}}

          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </template>
<script lang="ts">

import { ref, reactive, onUpdated, computed } from '@vue/composition-api'
import { multiply } from 'lodash'
export default {

  setup () {
    const valid = ref(false)
    const firstname = ref('')
    const age = ref(0)
    const items = reactive([
      {
        item_name: 'item1'
      },
      {
        item_name: 'item2'
      },
      {
        item_name: 'item3'
      },
      {
        item_name: 'item4'
      },

    ])
    const select = ref({
      item_name: 'item1'
    })
    const checkbox = ref(false)
    // computed values
    const computed_str = computed(() => firstname.value + firstname.value)
    const multiply_two = computed(() => age.value * 2)
    const reverse_bool = computed(() => !checkbox.value)
    const obj_to_string = computed(() => JSON.stringify(select))

    onUpdated(() => {
      console.log(obj_to_string)
    })
    //
    const formInfo = reactive({
      valid: valid,
      firstname: firstname,
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      checkbox: checkbox,
      checkboxRules: [v => !!v || 'You must agree to continue!']
    })
    return {
      formInfo,
      firstname,
      valid,
      checkbox,
      items,
      select,
      age,
      multiply_two,
      reverse_bool,
      computed_str,
      obj_to_string
    }
  }

}

</script>

<style>
