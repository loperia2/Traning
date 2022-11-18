import Mother, { xAxisType, _seriesType } from './base'
import data from './data.json'
export class Bar extends Mother {
  setXAxis (data: string[]): xAxisType {
    return {
      type: 'category',
      data: data
    }
  }

  setDataZoom () {
    return [
      {
        type: 'slider',
        show: true,
        start: 94,
        end: 100,
        handleSize: 8
      },
      {
        type: 'inside',
        start: 94,
        end: 100
      },
      {
        type: 'slider',
        show: true,
        yAxisIndex: 0,
        filterMode: 'empty',
        width: 12,
        height: '70%',
        handleSize: 8,
        showDataShadow: false,
        left: '93%'
      }
    ]
  }

  setSeries (): { type: string; data: number[] }[] {
    return [
      {
        type: 'bar',
        data: data.rows.m0
      },
    ]
  }

  setYAxis () {
    return {
      type: 'value',
    }
  }
}
export default Bar
