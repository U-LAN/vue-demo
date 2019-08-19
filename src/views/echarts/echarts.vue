<template>
  <div class="mycharts">
    <div ref="chart" class="chart"></div>
  </div>
</template>
<script>
import echarts from 'echarts'
import mockData from './data/data.json'
export default {
  data () {
    return {
      myChart: null
    }
  },
  mounted () {
    this.responsiveChart()
    this.myChart = echarts.init(this.$refs['chart'])
    this.myChart.setOption(this.getOption(mockData))
  },
  methods: {
    getOption (data) {
      var color = [
        '#e6f7ff',
        '#bae7ff',
        '#91d5ff',
        '#69c0ff',
        '#40a9ff',
        '#1890ff',
        '#096dd9',
        '#0050b3',
        '#003a8c',
        '#002766'
      ]
      var option = {
        tooltip: {
          show: true,
          trigger: 'axis',
          axisPointer: {
            type: 'line',
            z: 101
          },
          position: function (pos, params, el, elRect, size) {
            var obj = { top: 10 }
            obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 30
            return obj
          }
        },
        axisPointer: {
          link: { xAxisIndex: 'all' },
          label: {
            backgroundColor: '#777'
          }
        },
        title: {
          text: '权重图',
          textStyle: {
            fontSize: '14',
            color: '#333',
            fontWeight: '100'
          }
        },
        grid: [],
        xAxis: [],
        yAxis: [],
        series: []
      }
      for (let i = 0; i < data.length; i++) {
        option.grid.push({
          bottom: (() => {
            var interval = 1
            interval = 35 / data.length
            return 10 + i * interval + '%'
          })(),
          height: '50%'
          // width:'80%',
          // left:5+i/2+'%'
        })
        option.series.push({
          data: data[i].yAxis,
          z: 100 - i,
          type: 'line',
          xAxisIndex: i,
          yAxisIndex: i,
          itemStyle: {
            color: color[i]
          },
          lineStyle: {
            width: 1,
            color: '#fff'
          },
          showSymbol: false,
          areaStyle: {
            opacity: 1,
            color: color[i]
          }
        })
        option.xAxis.push({
          gridIndex: i,
          type: 'category',
          name: i,
          boundaryGap: true,
          axisLine: {
            lineStyle: {
              color: '#999',
              width: 1
            }
          },
          axisLabel: {
            fontSize: 9,
            color: '#999',
            fontWeight: 100,
            show: (() => {
              return i === 0
            })()
          },
          axisTick: {
            show: (() => {
              return i === 0
            })()
          },
          data: data[i].xAxis
        })
        option.yAxis.push({
          gridIndex: i,
          type: 'value',
          show: false,
          max: this.maxVal,
          min: this.minVal
        })
      }

      return option
    },
    responsiveChart () {
      // 响应式图表
      window.addEventListener(
        'resize',
        this.throttle(() => {
          this.myChart && this.myChart.resize()
        }, 3)
      )
    },
    throttle (fn, delay) {
      // 节流函数
      let timer
      return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
          fn.apply(this, args)
        }, delay)
      }
    }
  }
}
</script>
<style scoped>
.mycharts {
  width: 500px;
  height: 500px;
}
.chart {
  width: 100%;
  height: 100%;
}
</style>
