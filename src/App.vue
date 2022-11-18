<template>
  <v-app>
    <v-row>
      <v-col cols="4">
        <v-col>
          <v-autocomplete :items="varcharArr" attach chips deletable-chips label="Select Filter" @input="getFilterValue"
            @change="selected = []"></v-autocomplete>
        </v-col>
        <v-col v-if="filterValue !== null">
          <v-autocomplete :items="items" :searchable="true" attach chips deletable-chips label="Categories" multiple
            ref="selectedEl" v-model="selectedInfoValue"></v-autocomplete>
        </v-col>
      <v-col>
        <div>
          <v-btn style="margin-left: 200px;" @click="changeCategories">
            Apply
          </v-btn>
      </div>
        </v-col>
        <v-col>
          <v-card flat color="transparent">
            <v-subheader>Backers</v-subheader>
            <v-range-slider v-model="intArr" :max="intArr[1]" :min="0" hide-details class="align-center">
              <template v-slot:prepend>
                <v-text-field :value="intArr[0]" class="mt-0 pt-0" hide-details single-line type="number"
                  style="width: 60px" @change="$set(intArr, 0, $event)"></v-text-field>
              </template>
              <template v-slot:append>
                <v-text-field :value="intArr[1]" class="mt-0 pt-0" hide-details single-line type="number"
                  style="width: 60px" @change="$set(intArr, 1, $event)"></v-text-field>
              </template>
            </v-range-slider>
          </v-card>
        </v-col>
      </v-col>
      <v-col>
        <div id="chart" ref="myCharts" style="width: 1000px;height:700px;" ></div>
      </v-col>
    </v-row>
  </v-app>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, ref, watch } from '@vue/composition-api'
import * as echarts from 'echarts'
import filters from './filters.json'
import data from './data.json'
import VueRouter from 'vue-router'
import { VApp, VRow, VCol, VSelect, VBtn, VCard, VSubheader, VRangeSlider, VTextField } from 'vuetify/lib'
import Bar from './bar'
import router from './router'
export default defineComponent({
  name: 'App',
  components: {
  },
  setup () {
    const varcharArr: Object[] = []
    const filter = ref()
    const values = ref([''])
    const intArr: any[] = reactive([])
    const infoArr = ref([])
    const categories = ref(data.rows.category)
    const filterValue = ref(null)
    const items: any = ref([])
    const chartDom = ref()
    const chart = ref()
    const option = ref(new Bar(categories.value))
    const selectedInfoValue = ref([])
    const getFilterValue = (selectFilter) => {
      infoArr.value = []
      filterValue.value = selectFilter
      filters.forEach(function (value) {
        if (value.alias === filterValue.value) {
          items.value = value.info.values
        }
      })
      return filterValue
    }
    const changeCategories = () => {
      categories.value = selectedInfoValue.value
      option.value = new Bar(categories.value)
      router.replace({ path: '/', query: { filter: filterValue.value, values: selectedInfoValue.value } })
      // values.value = router.currentRoute.query.selectedInfoValue
      option.value && chart.value.setOption(option.value, {
        replaceMerge: ['xAxis']
      })
      return categories
    }
    const routerValue = ref(router.currentRoute.query.filter)
    filters.forEach(function (value) {
      if (value.input_type === 'multiple_select') {
        varcharArr.push(value.alias)
      } else if (value.data_type === 'integer') {
        intArr.push(value.info.min)
        intArr.push(value.info.max)
      }
    })
    watch(routerValue, (newFilter, oldFilter) => console.log(oldFilter, newFilter))
    onMounted(function () {
      chartDom.value = document.getElementById('chart')!
      chart.value = echarts.init(chartDom.value)
      option.value && chart.value.setOption(option.value)
    })
    return {
      varcharArr,
      categories,
      filterValue,
      infoArr,
      getFilterValue,
      changeCategories,
      intArr,
      items,
      selectedInfoValue,
      filter,
      values
    }
  },
})
</script>
<style lang="sass">
.v-subheader
  font-weight: 700!important
</style>
