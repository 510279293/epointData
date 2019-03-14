<template>
  <div :id="'ringAntv' + dataStr" style="height: 100%;"></div>
</template>

<script>
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/pie'
// 提示框
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
/**
 * 饼图
 * param
 * ringData   数据源
 * 
 */

export default {
  props: {
    ringData: {
      type: Array,
      default: () => []
    },
    chartHeight: {
      type: Number,
      default: 380
    },
    innerRadius: {
      type: String,
      default: '0%'
    },
    padSet: {
      type: Object,
      default: () => {
        return { top: 20, right: 30, bottom: 70, left: 40 }
      }
    }
  },
  data () {
    return {
      dataStr: (new Date()).getTime() + ''
    }
  },
  computed: {
    option () {
      return {
        tooltip: {
          trigger: 'item',
          formatter: '{b}: {c}<br/>({d}%)',
          extraCssText: 'background:rgba(255,255,255, .9);box-shadow: 0 2px 12px 0 rgba(0,0,0,.1)',
          textStyle: {
            color: '#5A5C5E',
            fontSize: 12
          }
        },
        series: [{
          name: '访问来源',
          type: 'pie',
          radius: [this.innerRadius, '65%'],
          startAngle: 180,
          minAngle: 6,
          label: {
            normal: {
              formatter: '{b}',
              // show: false,
              rich: {
                b: {
                  fontSize: 16,
                  lineHeight: 33
                }
              }
            }
          },
          data: this.ringData,
          itemStyle: {
            normal: {
              borderWidth: this.ringData.length > 1 ? 2 : 0,
              borderColor: '#fff'
            }
          }
        }],
        color: ['#FB3363', '#7777F9', '#3CB774']
      }
    }
  },
  methods: {
    drawChart () {
      let self = this
      if (self.ringData.length === 0) {
        return
      }
      let pieChart = document.getElementById('ringAntv' + self.dataStr)
      if (pieChart) {
        pieChart.innerHTML = ''
        var myChart = echarts.init(pieChart)
      } else {
        return
      }
      myChart.setOption(this.option)
    }
  },
  mounted () {
    this.$nextTick(_ => {
      this.drawChart()
    })
  }
}
</script>
