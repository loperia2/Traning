export type TitleType = {
  text: string | undefined
  left: string | undefined
  top?: number | undefined
  textStyle?: { color: string }
}
export type tooltipType = {
trigger: string | undefined
axisPointer?: { type?:string | undefined } | undefined
}
export type labelLineType = {
  lineStyle: {color: string}
  smooth: number
  length: number
  length2: number
  }
export type visualMapType = {
  show?: boolean | undefined
  min?: number | undefined
  max?: number | undefined
  inRange?: { colorLightness :number[] | undefined }
  top?: number |undefined
  right?: number | undefined
  pieces?: { gt: number | undefined, lte: number | undefined, color: string | undefined }[]
  outOfRange?: { color:string | undefined }
}
export type seriesType = {
  name?: string | undefined
  type: string | undefined
  radius?: string | undefined
  center?: string [] | undefined
  data: number[] | { value: number, name?: string }[] | {yAxis: number}[] | undefined
  roseType?: string | undefined
  label?: {color?:string, show?: boolean} | undefined
  labelLine?: labelLineType | undefined
  itemStyle?: {color: string, shadowBlur: number, shadowColor: string} | undefined
  animationType?: string | undefined
  animationEasing?: string | undefined
  animationDelay?: (idx: number) => number | undefined
  stack?: string | undefined
  emphasis?: { focus: string | undefined } | undefined
  }
export type _seriesType = seriesType[]
export type gridType= {
  left?: string | undefined
  right?: string | undefined
  bottom?: string | undefined
  containLabel?: boolean | undefined
}
export type xAxisType= {
 type: string | undefined
 data?: string[] | number[] | undefined
}
export type yAxisType= {
  type: string | undefined
}
export type toolboxType= {
  right: number | undefined,
  feature: {
    dataZoom: {
      yAxisIndex: string | undefined
    },
    restore: object | undefined,
    saveAsImage: object | undefined
  }
}
export type dataZoomType = {
    type: string | undefined,
    show?: boolean | undefined,
    start?: number | undefined,
    end?: number | undefined,
    handleSize?: number | undefined,
    yAxisIndex?: number | undefined,
    filterMode?: string | undefined,
    width?: number | undefined,
    height?: string | undefined,
    showDataShadow?: boolean | undefined,
    left?: string | undefined
}[]
export type backgroundColorType = {
  backgroundColor: string | undefined
}
export type DataConfig = {
  backgroundColor?: backgroundColorType
  title?: TitleType
  tooltip: tooltipType
  visualMap: visualMapType
  series: seriesType[] | seriesType
  grid: gridType
  xAxis: xAxisType
  yAxis: yAxisType
  toolBox: toolboxType
}
export class Mother {
  title: TitleType
  tooltip: tooltipType
  series: seriesType | _seriesType | undefined
  dataZoom: dataZoomType
  xAxis: xAxisType
  yAxis: yAxisType
  toolBox: toolboxType
  constructor (data: string[]) {
    this.title = this.setTitle()
    this.tooltip = this.setToolTip()
    this.series = this.setSeries()
    this.dataZoom = this.setDataZoom()
    this.xAxis = this.setXAxis(data)
    this.yAxis = this.setYAxis()
    this.toolBox = this.setToolBox()
  }

  setDataZoom () : dataZoomType {
    return [
      {
        type: undefined,
        show: undefined,
        start: undefined,
        end: undefined,
        handleSize: undefined,
        yAxisIndex: undefined,
        filterMode: undefined,
        width: undefined,
        height: undefined,
        showDataShadow: undefined,
        left: undefined
      }
    ]
  }

  setXAxis (data: string[]): xAxisType {
    return {
      type: undefined,
      data: undefined
    }
  }

  setYAxis (): yAxisType {
    return {
      type: undefined
    }
  }

  setTitle () : TitleType {
    return {
      text: undefined,
      left: undefined,
      top: undefined,
      textStyle: { color: '#ccc' }
    }
  }

  setToolTip (): tooltipType {
    return {
      trigger: 'axis',
      axisPointer: undefined
    }
  }

  setSeries (): seriesType | _seriesType | undefined {
    return undefined
  }

  setToolBox () : toolboxType {
    return {
      right: undefined,
      feature: {
        dataZoom: {
          yAxisIndex: undefined
        },
        restore: undefined,
        saveAsImage: undefined
      }
    }
  }
}
export default Mother
