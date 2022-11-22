let data= [
    {
      yAxis: 50
    },
    {
      yAxis: 100
    },
    {
      yAxis: 150
    },
    {
      yAxis: 200
    },
    {
      yAxis: 300
    }
  ]
type title={
    text:string
    left:string
    top?:number
    textStyle?: { color: string}
}|undefined

type legend={

}|undefined

type backgroundColor={
    backgroundColor?:string | undefined
}|undefined

type tooltip = {
    trigger:string,
    axisPointer?: {type:string} | undefined
}

type grid={
    left:string | undefined,
    right:string | undefined,
    bottom:string | undefined,
    containLabel?: boolean | undefined
}|undefined

type xAxis={
    type?: string | undefined,
    data?: number[] | {yAxis:number}[] | undefined   ///???
}|undefined

type yAxis={
    type?:string | undefined,
    data? : string[] | undefined
}|undefined

type visualMap={
    show? : boolean | undefined,
    min?: number | undefined,
    max?: number | undefined,
    inRange?: {colorLightness:number[]| undefined} | undefined
    
    top?: number | undefined,
    right?: number| undefined,
    pieces?:{gt:number, lte?:number|undefined, color:string} []
    outOfRange?: {color:string} | undefined 
} | undefined

type series={
    name?: string | undefined,
    type: string | undefined,
    radius?: string| undefined,
    center?:string[]|undefined,
    stack?:string | undefined,
    label?: {
        show?:boolean|undefined,
        color?:string|undefined
    },
    emphasis?: {
        focus:string
    }, 
    data : number[] | {value:number, name:string}[] | {yAxis:number}[] | {yAxis:number} |undefined,
    labelLine?: {
        lineStyle:{
            color:string
        },
        smooth:number,
        length:number,
        length2:number
    } | undefined,
    markLine?:{
        silent:boolean,
        lineStyle:{color:string}
        
    }
    roseType?:string | undefined,
    itemStyle?: {
        color:string,
        shadowBlur:number,
        shadowColor:string,
    } | undefined,
    animationType?:string | undefined,
    animationEasing?: string | undefined,
    animationDelay?: (idx:number)=> number | undefined,


} |undefined
type series_arr=series[]|undefined
type dataZoom={}[] | undefined

type labelLine={
    lineStyle?:{color:string}|undefined,
    smooth?: number|undefined,
    length?:number|undefined,
    length2?: number|undefined,
}| undefined
type toolbox={
    right:number|undefined,
    feature: {
        dataZoom:{
            yAxisIndex:string 
        },
        restore:{} | undefined,
    saveAsImage:{} |undefined,
    },
    
}|undefined

class Chart{
    title:title
    tooltip:tooltip
    series: series | series_arr
    backgroundColor?:backgroundColor
    grid:grid
    dataZoom:dataZoom
    labelLine:labelLine
    toolbox:toolbox
    visualMap:visualMap
    xAxis:xAxis
    yAxis:yAxis
    legend:legend

    constructor () {
        this.backgroundColor=this.setBackgroundColor()
        this.title = this.setTitle()
        this.tooltip = this.setToolTip()
        this.legend=this.setLegend()
        this.grid=this.setGrid()
        this.xAxis=this.setxAxis()
        this.yAxis=this.setyAxis()
         /////?????  
        
        this.labelLine=this.setLabelLine()
        this.toolbox=this.setToolBox()
        this.dataZoom=this.setDataZoom()
        this.visualMap=this.setVisualMap()
        this.series=this.setSeries()
        
        
      }

      setToolTip(): tooltip{
        return {
            trigger:'axis',
        }
      }
      setSeries():series|series_arr{
        return undefined;
      }
      
      setTitle () : title {
        return undefined;
      }
      setBackgroundColor():backgroundColor{
        return undefined;
      }
      setGrid():grid{
        return undefined;
      }
      setDataZoom():dataZoom{
        return undefined;
      }
      setLabelLine():labelLine{
        return undefined;
      }
      setToolBox():toolbox{
        return undefined;
      }
      setVisualMap():visualMap{
        return undefined;
      }
      setxAxis():xAxis{
        return undefined;
      }
      setyAxis():yAxis{
        return undefined;
      }
      setLegend():legend{
        return undefined;
      }

}

class Bar extends Chart{
    setToolTip():tooltip{
        return{
            trigger:'axis',
            axisPointer: {
                type: 'shadow'
              }
        }
    }
    setLegend():legend{
        return{

        }
    }
    setGrid():grid{
        return{
            left:'3%',
            right:'4%',
            bottom:'3%',
            containLabel:true
        }
          
        
    }
    setxAxis():xAxis{
        return{
            type:'value'
        }
    }
    setyAxis():yAxis{
        return{
            type:'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        }
    }
    setSeries():series_arr{
        return[
            {
                name: 'Direct',
                type: 'bar',
                stack: 'total',
                label: {
                  show: true
                },
                emphasis: {
                  focus: 'series'
                },
                data: [320, 302, 301, 334, 390, 330, 320]
              },
              {
                name: 'Mail Ad',
                type: 'bar',
                stack: 'total',
                label: {
                  show: true
                },
                emphasis: {
                  focus: 'series'
                },
                data: [120, 132, 101, 134, 90, 230, 210]
              },
              {
                name: 'Affiliate Ad',
                type: 'bar',
                stack: 'total',
                label: {
                  show: true
                },
                emphasis: {
                  focus: 'series'
                },
                data: [220, 182, 191, 234, 290, 330, 310]
              },
              {
                name: 'Video Ad',
                type: 'bar',
                stack: 'total',
                label: {
                  show: true
                },
                emphasis: {
                  focus: 'series'
                },
                data: [150, 212, 201, 154, 190, 330, 410]
              },
              {
                name: 'Search Engine',
                type: 'bar',
                stack: 'total',
                label: {
                  show: true
                },
                emphasis: {
                  focus: 'series'
                },
                data: [820, 832, 901, 934, 1290, 1330, 1320]
              }

        ]

        
            
        
            
        

    }

}

class Pie extends Chart{
    setBackgroundColor():backgroundColor{
        return {
            backgroundColor:'#2c343c'
        };
    }
    setTitle():title{
        return{
            text: 'Customized Pie',
            left: 'center',
            top: 20,
            textStyle: {
            color: '#ccc'
    }
        }
    }
    setToolTip():tooltip{
        return{
            trigger:'item'
        }
    }
    setVisualMap():visualMap{
        return{
            show: false,
            min: 80,
            max: 600,
            inRange: {
            colorLightness: [0, 1]
                    }           

        }
    }
    setSeries():series_arr{
        return[
            {
                name: 'Access From',
                type: 'pie',
                radius: '55%',
                center: ['50%', '50%'],
                data: [
                  { value: 335, name: 'Direct' },
                  { value: 310, name: 'Email' },
                  { value: 274, name: 'Union Ads' },
                  { value: 235, name: 'Video Ads' },
                  { value: 400, name: 'Search Engine' }
                ].sort(function (a, b) {
                  return a.value - b.value;
                }),
                roseType: 'radius',
                label: {
                  color: 'rgba(255, 255, 255, 0.3)'
                },
                labelLine: {
                  lineStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                  },
                  smooth: 0.2,
                  length: 10,
                  length2: 20
                },
                itemStyle: {
                  color: '#c23531',
                  shadowBlur: 200,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
          
                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function () {
                  return Math.random() * 200;
                }
              }
        ]
    }
}


class Line extends Chart{
    setTitle():title{
        return{
            text: 'Beijing AQI',
            left: '1%'
        }
    }
    setToolTip():tooltip{
        return{
            trigger:'axis'
        }
    }
    setGrid():grid{
        return{
            left: '5%',
            right: '15%',
            bottom: '10%'
        }
    }
    setxAxis():xAxis{
        return{
            data:data 
        }
    }
    setyAxis():yAxis{
        return{
            
        }
    }
    setToolBox():toolbox{
        return{
            right: 10,
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              restore: {},
              saveAsImage: {}
            }
        }
    }
    setDataZoom():dataZoom{
        return[
            {startValue: '2014-06-01'},
            {type:'inside'}]
    }
    setVisualMap():visualMap{
        return{
            top: 50,
        right: 10,
        pieces: [
          {
            gt: 0,
            lte: 50,
            color: '#93CE07'
          },
          {
            gt: 50,
            lte: 100,
            color: '#FBDB0F'
          },
          {
            gt: 100,
            lte: 150,
            color: '#FC7D02'
          },
          {
            gt: 150,
            lte: 200,
            color: '#FD0100'
          },
          {
            gt: 200,
            lte: 300,
            color: '#AA069F'
          },
          {
            gt: 300,
            color: '#AC3B2A'
          }
        ],
        outOfRange: {
          color: '#999'
        }
        }
    }
    
    setSeries():series{
        
        return{
        name: 'Beijing AQI',
        type: 'line',
        data:data,
        markLine: {
        silent: true,
        lineStyle: {
            color: '#333'
          },
          
        },
    }

}
}
console.log('********************************');
let myBar=new Bar()

let k: keyof typeof myBar
            for(k in myBar){

                    if(myBar[k]){

                    }else{
                       
                        delete myBar[k]
                    }
                    
         
            }
            console.log(myBar);

console.log('********************************');
let myPie=new Pie()
let p:keyof typeof myPie
for(p in myPie){

    if(myPie[p]){

    }else{
       
        delete myPie[p]
    }
}

console.log(myPie);

console.log('********************************');
let myLine=new Line()
let l:keyof typeof myLine
for(l in myLine){

    if(myLine[l]){

    }else{
       
        delete myLine[l]
    }
}
console.log(myLine);
