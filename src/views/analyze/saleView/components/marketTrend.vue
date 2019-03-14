<template>
  <div class="market-trendsl">
    <epoint-card class="box-card">
      <div class="elm-head clearfix">
        <span class="elm-head-title">市场趋势</span>
        <LegendLi :legendTxt="legendTxt" class="midBlock"></LegendLi>
        <SwitchTab style="float: right"></SwitchTab>
        <span class="downLoadBtn brt">下载</span>
      </div>
      <div class="elm-body">
        <LineChart :lineData="lineData"></LineChart>
      </div>
    </epoint-card>
  </div>
</template>

<script>
import LineChart from '../../../../components/antv/lineChart.vue'
import SwitchTab from '../../../../components/home/switchTab.vue'
import LegendLi from '../../../../components/home/legendLi.vue'

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
      lineData: [{
        month: '08/16',
        shop: '全网',
        value: 3313
      }, {
        month: '08/17',
        shop: '全网',
        value: 3294
      }, {
        month: '08/18',
        shop: '全网',
        value: 3115
      }, {
        month: '08/19',
        shop: '全网',
        value: 3007
      }, {
        month: '08/20',
        shop: '全网',
        value: 3107
      }, {
        month: '08/21',
        shop: '全网',
        value: 3200
      }, {
        month: '08/22',
        shop: '全网',
        value: 3947
      }, {
        month: '08/16',
        shop: '授权店',
        value: 1313
      }, {
        month: '08/17',
        shop: '授权店',
        value: 1294
      }, {
        month: '08/18',
        shop: '授权店',
        value: 1115
      }, {
        month: '08/19',
        shop: '授权店',
        value: 1007
      }, {
        month: '08/20',
        shop: '授权店',
        value: 1107
      }, {
        month: '08/21',
        shop: '授权店',
        value: 1200
      }, {
        month: '08/22',
        shop: '授权店',
        value: 1947
      }, {
        month: '08/16',
        shop: '自营店',
        value: 2313
      }, {
        month: '08/17',
        shop: '自营店',
        value: 2294
      }, {
        month: '08/18',
        shop: '自营店',
        value: 2115
      }, {
        month: '08/19',
        shop: '自营店',
        value: 2007
      }, {
        month: '08/20',
        shop: '自营店',
        value: 2107
      }, {
        month: '08/21',
        shop: '自营店',
        value: 2200
      }, {
        month: '08/22',
        shop: '自营店',
        value: 2947
      }]
    }
  },
  components: {
    LegendLi,
    SwitchTab,
    LineChart
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
  @import '~assets/styles/variables';
  @import '~assets/styles/qkwyq';
  .market-trendsl{
    .w100;
    height: 413px;
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
.market-trendsl{
  .epoint-card{
    height: 100%;
    padding: 20px;
  }
}
</style>
