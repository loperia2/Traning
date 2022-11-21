<template>

<v-tabs class="tab">
    <v-tab>Alerts</v-tab>
    <v-tab>Banner</v-tab>
    <v-tab>Avatar</v-tab>
  </v-tabs>

</template>

<script lang="ts">

export default {

  setup (props) {
    console.log(props.title)
    return {

    }
  }

}

</script>

<style>
.tab{
  display: flex;
  width: 100vw;
  justify-content: center;
  margin-bottom: 50px;
}
</style>
