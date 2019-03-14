<template>
  <div :id="'histogramAntv' + dataStr"></div>
</template>

<script>

export default {
  props: {
    HistogramData: {
      type: Array,
      default: () => {},
      requre: true
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
      let histogramAntv = document.getElementById('histogramAntv' + self.dataStr)
      if (histogramAntv) {
        histogramAntv.innerHTML = ''
      } else {
        return
      }
      var chart = new this.G2.Chart({
        container: 'histogramAntv' + self.dataStr,
        forceFit: true,
        padding: { top: 20, right: 30, bottom: 70, left: 40 },
        height: 380
      })
      chart.legend(false)
      chart.source(self.HistogramData)
      chart.interval().position('month*value').color('name').adjust([{
        type: 'dodge',
        marginRatio: 1 / 2
      }])
      chart.render()
    }
  },
  mounted () {
    this.G2.Global.colors = ['#FB3363', '#7777F9', '#3CB774']
    this.G2.Global.widthRatio = {
      column: 1 / 3
    }
    this.initAntv()
  }
}
</script>
