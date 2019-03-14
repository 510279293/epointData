<template>
  <epoint-card class="box-card brand-compare">
    <div class="elm-head clearfix">
      <span class="elm-head-title">品牌对比</span>
      <LegendLi :legendTxt="legendTxt" class="midBlock"></LegendLi>
      <SwitchTab style="float: right"></SwitchTab>
    </div>
    <div class="elm-body">
      <Histogram :HistogramData="HistogramData"></Histogram>
    </div>
  </epoint-card>
</template>

<script>
import Histogram from '../../../components/antv/histogram.vue'
import SwitchTab from '../../../components/home/switchTab.vue'
import LegendLi from '../../../components/home/legendLi.vue'

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
      dataV: [{
        month: '1991',
        city: 'Tokyo',
        value: 1313
      }, {
        month: '1992',
        city: 'Tokyo',
        value: 1294
      }, {
        month: '1993',
        city: 'Tokyo',
        value: 1115
      }, {
        month: '1994',
        city: 'Tokyo',
        value: 1007
      }, {
        month: '1995',
        city: 'Tokyo',
        value: 1107
      }, {
        month: '1996',
        city: 'Tokyo',
        value: 1200
      }, {
        month: '1997',
        city: 'Tokyo',
        value: 1947
      }, {
        month: '1991',
        city: 'London',
        value: 2313
      }, {
        month: '1992',
        city: 'London',
        value: 2294
      }, {
        month: '1993',
        city: 'London',
        value: 2115
      }, {
        month: '1994',
        city: 'London',
        value: 2007
      }, {
        month: '1995',
        city: 'London',
        value: 2107
      }, {
        month: '1996',
        city: 'London',
        value: 2200
      }, {
        month: '1997',
        city: 'London',
        value: 2947
      }],
      HistogramData: [{
        name: '美的',
        month: '08/20',
        value: 18.9
      }, {
        name: '美的',
        month: '08/21',
        value: 28.8
      }, {
        name: '美的',
        month: '08/22',
        value: 39.3
      }, {
        name: '美的',
        month: '08/23',
        value: 81.4
      }, {
        name: '美的',
        month: '08/24',
        value: 47
      }, {
        name: '美的',
        month: '08/25',
        value: 20.3
      }, {
        name: '美的',
        month: '08/26',
        value: 24
      }, {
        name: '美的',
        month: '08/27',
        value: 35.6
      }, {
        name: '老板',
        month: '08/20',
        value: 18.9
      }, {
        name: '老板',
        month: '08/21',
        value: 28.8
      }, {
        name: '老板',
        month: '08/22',
        value: 39.3
      }, {
        name: '老板',
        month: '08/23',
        value: 81.4
      }, {
        name: '老板',
        month: '08/24',
        value: 47
      }, {
        name: '老板',
        month: '08/25',
        value: 20.3
      }, {
        name: '老板',
        month: '08/26',
        value: 24
      }, {
        name: '老板',
        month: '08/27',
        value: 35.6
      }, {
        name: '格力',
        month: '08/20',
        value: 12.4
      }, {
        name: '格力',
        month: '08/21',
        value: 23.2
      }, {
        name: '格力',
        month: '08/22',
        value: 34.5
      }, {
        name: '格力',
        month: '08/23',
        value: 99.7
      }, {
        name: '格力',
        month: '08/24',
        value: 52.6
      }, {
        name: '格力',
        month: '08/25',
        value: 35.5
      }, {
        name: '格力',
        month: '08/26',
        value: 37.4
      }, {
        name: '格力',
        month: '08/27',
        value: 42.4
      }]
    }
  },
  components: {
    Histogram,
    SwitchTab,
    LegendLi
  }
}
</script>

<style lang="less" scoped>
  @import '~assets/styles/variables';
  @import '~assets/styles/qkwyq';
  .brand-compare{
    .w100;
    height: 427px;
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
.brand-compare{
  .epoint-card{
    height: 100%;
    padding: 20px 20px 0;
  }
}
</style>
