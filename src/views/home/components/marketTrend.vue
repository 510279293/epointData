<template>
  <epoint-card class="box-card market-trend-home">
    <div class="elm-head clearfix">
      <span class="elm-head-title">市场趋势</span>
      <LegendLi :legendTxt="legendTxt" class="midBlock"></LegendLi>
      <SwitchTab style="float: right"></SwitchTab>
    </div>
    <div class="elm-body">
      <div id="marketTrendAntv"></div>
    </div>
  </epoint-card>
</template>

<script>
import G2 from '@antv/g2'
import SwitchTab from '../../../components/home/switchTab.vue'
import LegendLi from '../../../components/home/legendLi.vue'
G2.Global.colors = ['#FB3363', '#7777F9', '#3CB774']

export default {
  props: {
    dataSource: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      ponitCol: ['#FB3363', '#7777F9', '#3CB774'],
      legendTxt: [{
        color: '#FB3363',
        txt: '全网'
      }, {
        color: '#7777F9',
        txt: '自营店'
      }, {
        color: '#3CB774',
        txt: '授权店'
      }],
      data: [{
        month: '08/16',
        city: '全网',
        value: 3313
      }, {
        month: '08/17',
        city: '全网',
        value: 3294
      }, {
        month: '08/18',
        city: '全网',
        value: 3115
      }, {
        month: '08/19',
        city: '全网',
        value: 3007
      }, {
        month: '08/20',
        city: '全网',
        value: 3107
      }, {
        month: '08/21',
        city: '全网',
        value: 3200
      }, {
        month: '08/22',
        city: '全网',
        value: 3947
      }, {
        month: '08/16',
        city: '授权店',
        value: 1313
      }, {
        month: '08/17',
        city: '授权店',
        value: 1294
      }, {
        month: '08/18',
        city: '授权店',
        value: 1115
      }, {
        month: '08/19',
        city: '授权店',
        value: 1007
      }, {
        month: '08/20',
        city: '授权店',
        value: 1107
      }, {
        month: '08/21',
        city: '授权店',
        value: 1200
      }, {
        month: '08/22',
        city: '授权店',
        value: 1947
      }, {
        month: '08/16',
        city: '自营店',
        value: 2313
      }, {
        month: '08/17',
        city: '自营店',
        value: 2294
      }, {
        month: '08/18',
        city: '自营店',
        value: 2115
      }, {
        month: '08/19',
        city: '自营店',
        value: 2007
      }, {
        month: '08/20',
        city: '自营店',
        value: 2107
      }, {
        month: '08/21',
        city: '自营店',
        value: 2200
      }, {
        month: '08/22',
        city: '自营店',
        value: 2947
      }]
    }
  },
  components: {
    LegendLi,
    SwitchTab
  },
  methods: {
    initAntv () {
      let self = this
      let marketTrendAntv = document.getElementById('marketTrendAntv')
      if (marketTrendAntv) {
        marketTrendAntv.innerHTML = ''
      } else {
        return
      }
      var chart = new G2.Chart({
        container: 'marketTrendAntv',
        forceFit: true,
        padding: { top: 20, right: 30, bottom: 70, left: 40 },
        height: 380
      })
      chart.legend(false)
      chart.source(self.data)
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
      chart.line().position('month*value').color('city')
      chart.point().position('month*value').color('city').size(4).shape('circle').style({
        stroke: '#fff',
        lineWidth: 1
      })
      chart.render()
    }
  },
  mounted () {
    this.initAntv()
  }
}
</script>

<style lang="less" scoped>
  @import '~assets/styles/variables';
  @import '~assets/styles/qkwyq';
  .market-trend-home{
    .w100;
    height: 413px;
    padding: 20px;
    .elm-head{
      color: @main-font;
      .elm-head-title{
        .midBlock;
        font-size: 20px;
        margin-right: 30px;
      }
    }
  }
</style>

<style lang="less">
.market-trend-home{
  .epoint-card{
    height: 100%;
    padding: 20px;
  }
}
</style>
