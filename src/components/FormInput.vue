<template>
  <div class="text-center">
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field v-model="firstname" :counter="0" label="First name" required></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field v-model="lastname" :counter="0" label="Last name" required></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <v-checkbox v-model="checkbox" :label="`Checkbox 1: ${checkbox.toString() }`+`Computed Checkbox Value: ${checkbox2.toString() }`"></v-checkbox>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-combobox :items="items" label="Combobox" outlined dense></v-combobox>
        </v-col>
      </v-row>
    </v-container>
    <v-file-input accept="image/*" label="This is a File input"></v-file-input>
    <v-container fluid>
      <v-row>
        <v-col cols="9">
          <div class="ma-auto" style="max-width: 500px">
            <v-otp-input v-model="otp" :length="11"></v-otp-input>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid>
    <v-textarea
      label="Text"
      value="This is a textarea."
      height="15px"
    ></v-textarea>
  </v-container>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from '@vue/composition-api'
export default defineComponent({
  name: 'Selects',
  components: {},
  setup () {
    const checkbox = ref(true)
    const checkbox2 = computed(() => {
      return !checkbox.value
    })
    const items = ref([
      'Programming',
      'Design',
      'Vue',
      'Vuetify',
    ])
    const select = ref(['Vuetify', 'Programming'])
    const valid = ref(false)
    const firstname = ref('')
    const lastname = ref('')
    const email = ref('')
    const emailRules = [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ]
    const otp = ref('')
    const length = ref(7)
    return {
      checkbox,
      checkbox2,
      items,
      select,
      valid,
      firstname,
      lastname,
      email,
      emailRules,
      otp,
      length
    }
  }
})
</script>
<style lang="sass">
</style>
