<template>
  <div class="platform">
    <epoint-card class="box-card">
      <div class="elm-head clearfix">
        <span class="elm-head-title">平台分析</span>
        <LegendLi :legendTxt="legendTxt" class="midBlock"></LegendLi>
        <SwitchTab style="float: right"></SwitchTab>
      </div>
      <div class="elm-body">
        <div class="lf-whole-sale">
          <p class="module-title">平台销售量占比</p>
          <RingChart :ringData="ringData" :innerRadius="'35%'"></RingChart>
        </div>
        <div class="rt-whole-sale">
          <p class="module-title">平台销售趋势</p>
          <LineChart :lineData="lineData" style="width: 100%"></LineChart>
        </div>
      </div>
    </epoint-card>
  </div>
</template>

<script>
import SwitchTab from '../../../components/home/switchTab.vue'
import LineChart from '../../../components/antv/lineChart.vue'
import RingChart from '../../../components/antv/ringChart.vue'
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
      legendTxt: [{
        color: '#FB3363',
        txt: '淘宝'
      }, {
        color: '#7777F9',
        txt: '天猫'
      }],
      ringData: [{
        name: '淘宝',
        value: 40,
        percent: 0.4
      }, {
        name: '天猫',
        value: 21,
        percent: 0.21
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
    SwitchTab,
    LineChart,
    RingChart,
    LegendLi
  }
}
</script>

<style lang="less" scoped>
  @import '~assets/styles/variables';
  @import '~assets/styles/qkwyq';
  .platform{
    .w100;
    min-height: 279px;
    .elm-head{
      color: @main-font;
      padding: 20px;
      border-bottom: 1px solid #F0F0F0;
      .elm-head-title{
        .midBlock;
        font-size: 20px;
        margin-right: 30px;
      }
    }
    .elm-body{
      display: flex;
      justify-content: space-between;
      // flex-wrap: wrap;
      padding: 20px 20px 0;
      &>div{
        height: 400px;
      }
      .module-title{
        color: #5A5C5E;
        font-size: 16px;
        font-weight: 500;
        .hg(22px);
      }
      .lf-whole-sale{
        width: 420px;
      }
      .rt-whole-sale{
        width: calc(~'100% - 460px');
      }
    }
  }
</style>

<style lang="less">
.platform{
  .epoint-card{
    height: 100%;
  }
}
</style>
