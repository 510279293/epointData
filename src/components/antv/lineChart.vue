<template>
  <div :id="'saleTrendAntv' + dataStr" class="clearModuleMark"></div>
</template>

<script>

export default {
  props: {
    lineData: {
      type: Array,
      default: () => []
    },
    chartHeight: {
      type: Number,
      default: 380
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
  methods: {
    initAntv () {
      let self = this
      if (self.lineData.length === 0) {
        return
      }
      let saleTrendAntv = document.getElementById('saleTrendAntv' + this.dataStr)
      if (saleTrendAntv) {
        saleTrendAntv.innerHTML = ''
      }
      var chart = new this.G2.Chart({
        container: 'saleTrendAntv' + this.dataStr,
        forceFit: true,
        padding: this.padSet,
        height: self.chartHeight
      })
      chart.legend(false)
      chart.source(self.lineData)
      chart.scale('value', {
        min: 0
      })
      chart.scale('month', {
        range: [0, 1]
      })
      chart.tooltip({
        crosshairs: {
          type: 'line'
        }
      })
      chart.line().position('month*value').color('shop')
      chart.point().position('month*value').color('shop').size(4).shape('circle').style({
        stroke: '#fff',
        lineWidth: 1
      })
      chart.render()
    }
  },
  mounted () {
    this.G2.Global.colors = ['#FB3363', '#7777F9', '#3CB774']
    this.initAntv()
  }
}
</script>
