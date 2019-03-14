<template>
  <div class="brand-compare">
    <epoint-card class="box-card">
      <div class="elm-head clearfix">
        <span class="elm-head-title">{{moduleTitle}}</span>
        <LegendLi :legendTxt="legendTxt" class="midBlock"></LegendLi>
        <SwitchTab style="float: right"></SwitchTab>
      </div>
      <div class="elm-body">
        <Histogram :HistogramData="HistogramData"></Histogram>
        <div class="elm-table-wrap">
          <ul class="elm-table-head clearfix">
            <li v-for="(item, key) in headTxt" :key="key">{{item}}</li>
          </ul>
          <ul class="elm-table-body clearfix" v-for="(val, index) in bodyTxt" :key="index + 'b'">
            <li :style="{'color': serialNum[index]}">{{index + 1}}</li>
            <li>
              fafarfra
            </li>
            <li>
              商品名称商品名称商品名称
            </li>
            <li>{{val.money}}</li>
            <li>
              sfsfsfsf
            </li>
            <li>{{val.platform}}</li>
          </ul>
        </div>
      </div>
    </epoint-card>
  </div>
</template>

<script>
import Histogram from '../../../../components/antv/histogram.vue'
import SwitchTab from '../../../../components/home/switchTab.vue'
import LegendLi from '../../../../components/home/legendLi.vue'

export default {
  props: {
    dataSource: {
      type: Array,
      default: () => []
    },
    moduleTitle: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      ponitCol: ['#FB3363', '#7777F9', '#3CB774'],
      headTxt: ['序号', '省份', '金冠店铺数', '皇冠店铺数', '钻石店铺数', '钻石店铺数'],
      serialNum: ['#FB3363', '#FFC30A', '#3CB774', '#5A5C5E', '#5A5C5E'],
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
      }],
      bodyTxt: [{
        proName: '宝贝名称宝贝名称宝贝名称宝贝名称宝贝名称宝贝名称宝贝名称宝贝名称宝贝名称',
        platform: '淘宝',
        money: 200
      }, {
        proName: '宝贝名称宝贝名贝名称宝贝名称',
        platform: '聚宝盆',
        money: 1200
      }, {
        proName: '宝贝名称宝贝名称宝贝名称宝贝名称宝贝名称宝贝名称宝贝名称宝贝名称宝贝名称',
        platform: '淘宝',
        money: 200
      }, {
        proName: '宝贝名称宝贝名称宝贝名称宝贝名称宝贝名称宝贝名称宝贝名称宝贝名称宝贝名称',
        platform: '拼多多',
        money: 500
      }, {
        proName: '宝贝名称宝贝名称宝贝名称宝贝名称宝贝名称宝贝名称',
        platform: '淘宝',
        money: 200
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
    // height: 427px;
    .elm-head{
      color: @main-font;
      .elm-head-title{
        .midBlock;
        font-size: 20px;
        margin-right: 30px;
      }
    }
    .elm-body{
      .elm-table-wrap{
        margin-bottom: 52px;
      }
      .elm-table-head{
        color: #9A9BAD;
        background: #F5F8FA;
      }
      .elm-table-body{
        color: #5A5C5E;
        &:last-child{
          border-bottom: 1px solid #E1E5EE;
        }
      }
      .elm-table-head, .elm-table-body{
        border-right: 1px solid #E1E5EE;
        li{
          .blf;
          font-size: 14px;
          .wes;
          border-top: 1px solid #E1E5EE;
          position: relative;
          .hg(44px);
          box-sizing: border-box;
          &:not(:first-child){
            width: calc((~'100% - 99px')/5);
            padding-left: 50px;
          }
        }
        li:nth-child(1){
          width: 99px;
          border-left: 1px solid #E1E5EE;
          text-align: center;
        }
        li:nth-child(2){
          border-left: 1px solid #E1E5EE;
        }
        // li:nth-child(6){
        //   width: 198px;
        // }
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
