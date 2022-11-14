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
  left: string
  right: string
  bottom: string
  containLabel: boolean
}
export type xAxisType= {
 type: string
 data?: (item: string[]) => string[]
}
export type yAxisType= {
  type: string
  data: string []
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
  startValue: string
  type: string
}
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
  visualMap: visualMapType
  series: seriesType | _seriesType | undefined
  backgroundColor: backgroundColorType
  constructor () {
    this.title = this.setTitle()
    this.tooltip = this.setToolTip()
    this.visualMap = this.setViusalMap()
    this.series = this.setSeries()
    this.backgroundColor = this.setBackgroundColor()
  }

  setBackgroundColor () : backgroundColorType {
    return {
      backgroundColor: undefined
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

  setViusalMap (): visualMapType {
    return {
      inRange: { colorLightness: undefined },
      max: undefined,
      min: undefined,
      show: undefined,
      top: undefined,
      pieces: [{ gt: undefined, lte: undefined, color: undefined }],
      outOfRange: undefined

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
