import Mother from './mother'
class Line extends Mother {
  setTitle () {
    return {
      text: 'Beijing AQI',
      left: '1%'
    }
  }

  setToolTip () {
    return {
      trigger: 'axis'
    }
  }

  setGrid () {
    return {
      left: '5%',
      right: '15%',
      bottom: '10%'
    }
  }

  setXAxis () {
    return {
      data: function (item: string[]) {
        return item[0]
      }
    }
  }

  setToolBox (): { right: number; feature: { dataZoom: { yAxisIndex: string }; restore: {}; saveAsImage: {} } } {
    return {
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

  setViusalMap (): { top: number; right: number; pieces: { gt: number; lte: number | undefined; color: string }[], outOfRange: { color: string } } {
    return {
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
          lte: undefined,
          color: '#AC3B2A'
        }
      ],
      outOfRange: {
        color: '#999'
      }
    }
  }

  setSeries (): { name: string; type: string; data: any; markLine: { silent: boolean; lineStyle: { color: string }; data: { yAxis: number }[] } } {
    return {
      name: 'Beijing AQI',
      type: 'line',
      data: function (item: number[]) {
        return item[1]
      },
      markLine: {
        silent: true,
        lineStyle: {
          color: '#333'
        },
        data: [
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
      }
    }
  }
}
export default Line
