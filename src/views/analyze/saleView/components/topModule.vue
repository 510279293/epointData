<template>
  <div class="top-module">
    <epoint-card class="box-card">
      <div class="elm-head clearfix">
        <span class="elm-head-title">{{moduleTitle}}</span>
        <SwitchTab style="float: right"></SwitchTab>
      </div>
      <div class="elm-body">
        <div class="elm-table-wrap">
          <ul class="elm-table-head clearfix">
            <li v-for="(item, key) in headTxt" :key="key">{{item}}</li>
          </ul>
          <ul class="elm-table-body clearfix" v-for="(val, index) in bodyTxt" :key="index + 'b'">
            <li :style="{'color': serialNum[index]}">{{index + 1}}</li>
            <li>
              <img src="http://p8dyokgbm.bkt.clouddn.com/react_logo.jpg" alt="">
            </li>
            <li>
              <a href="#">商品名称商品名称商品名称</a>
            </li>
            <li>{{val.money}}</li>
            <li>
              <a href="#">店铺名称店铺名称店铺名称</a>
              <span class="liTag green" v-if="index === 0">授权店</span>
              <span class="liTag red" v-else-if="index === 1">自营店</span>
              <span class="liTag gray" v-else>其它</span>
            </li>
            <li>{{val.platform}}</li>
            <li>
              {{val.money}}
              <el-dropdown class="threePonit">
                <span class="el-dropdown-link">
                  ~~~
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>查看详情</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </li>
          </ul>
        </div>
        <LegendLi :legendTxt="legendTxt" style="margin-bottom: 5px;"></LegendLi>
        <LineChart :lineData="lineData"></LineChart>
      </div>
    </epoint-card>
  </div>
</template>

<script>
import SwitchTab from '../../../../components/home/switchTab.vue'
import LegendLi from '../../../../components/home/legendLi.vue'
import LineChart from '../../../../components/antv/lineChart.vue'

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
      headTxt: ['序号', '商品主图', '商品名称', '平台', '店铺名称', '销售量', '销售额'],
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
        month: '08/23',
        shop: '全网',
        value: 3947
      }, {
        month: '08/24',
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
        month: '08/23',
        shop: '授权店',
        value: 1947
      }, {
        month: '08/24',
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
      }, {
        month: '08/23',
        shop: '自营店',
        value: 2947
      }, {
        month: '08/24',
        shop: '自营店',
        value: 2947
      }]
    }
  },
  components: {
    SwitchTab,
    LineChart,
    LegendLi
  }
}
</script>

<style lang="less" scoped>
  @import '~assets/styles/variables';
  @import '~assets/styles/qkwyq';
  .top-module{
    .w100;
    height: 1014px;
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
      padding: 18px 20px 0;
      .elm-table-wrap{
        margin-bottom: 52px;
      }
      .elm-table-head{
        color: #9A9BAD;
        background: #F5F8FA;
        li{
          .hg(44px);
        }
      }
      .elm-table-body{
        color: #5A5C5E;
        &:last-child{
          border-bottom: 1px solid #E1E5EE;
        }
        li{
          .hg(88px);
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
          box-sizing: border-box;
          &:not(:first-child){
            padding-right: 20px;
          }
          a{
            position: absolute;
            top: 50%;
            left: 0;
            transform: translate(0, -50%);
            max-height: 40px;
            line-height: 20px;
            .wes-more(2);
          }
        }
        li:nth-child(1){
          width: 8%;
          border-left: 1px solid #E1E5EE;
          text-align: center;
        }
        li:nth-child(2){
          width: 7%;
          border-left: 1px solid #E1E5EE;
          padding-left: 6px;
          img{
            width: 56px;
            height: 56px;
            display: inline-block;
            vertical-align: middle;
          }
        }
        li:nth-child(3){
          width: 22%;
          a{
            width: 284px;
          }
        }
        li:nth-child(4){
          width: 7%;
        }
        li:nth-child(5){
          width: 26%;
          a{
            width: 200px;
          }
          .liTag{
            position: absolute;
            right: 18px;
            top: 50%;
            transform: translate(0, -50%);
            width: 58px;
            .hg(22px);
            text-align: center;
            &.green{
              background: #E7F5E5;
              color: #5AC489;
            }
            &.red{
              background: #FAE6EC;
              color: #FB3363;
            }
            &.gray{
              background: #E1E5EE;
              color: #9098B1;
            }
          }
        }
        li:nth-child(6){
          width: 12%;
        }
        li:nth-child(7){
          width: 18%;
          padding-right: 44px;
          position: relative;
          .threePonit{
            line-height: 20px;
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translate(0, -50%);
            cursor: pointer;
            outline: none;
          }
        }
      }
    }
  }
</style>

<style lang="less">
.top-module{
  .epoint-card{
    height: 100%;
  }
}
</style>
