<template>
  <epoint-card class="box-card top-module">
    <div class="elm-head clearfix">
      <span class="elm-head-title">TOP5热销宝贝</span>
      <SwitchTab style="float: right"></SwitchTab>
    </div>
    <div class="elm-body">
      <ul class="elm-table-head clearfix">
        <li v-for="(item, key) in headTxt" :key="key">{{item}}</li>
      </ul>
      <ul class="elm-table-body clearfix" v-for="(val, index) in bodyTxt" :key="index + 'b'">
        <li :style="{'color': serialNum[index]}">{{index + 1}}</li>
        <li>{{val.proName}}</li>
        <li>{{val.platform}}</li>
        <li>{{val.money}}</li>
      </ul>
    </div>
  </epoint-card>
</template>

<script>
import SwitchTab from '../../../components/home/switchTab.vue'

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
      headTxt: ['序号', '宝贝名称', '平台', '近30天预估销售额'],
      serialNum: ['#FB3363', '#FFC30A', '#3CB774', '#5A5C5E', '#5A5C5E'],
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
    SwitchTab
  }
}
</script>

<style lang="less" scoped>
  @import '~assets/styles/variables';
  @import '~assets/styles/qkwyq';
  .top-module{
    .w100;
    height: 397px;
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
      .elm-table-head{
        color: #9A9BAD;
        margin: 19px 0 21px;
        li{
          .hg(20px);
        }
      }
      .elm-table-body{
        color: #5A5C5E;
        li{
          .hg(45px);
        }
      }
      .elm-table-head, .elm-table-body{
        li{
          text-align: center;
          .blf;
          font-size: 14px;
          .wes;
        }
        li:nth-child(1){
          width: 10%;
        }
        li:nth-child(2){
          width: 50%;
        }
        li:nth-child(3){
          width: 20%;
        }
        li:nth-child(4){
          width: 20%;
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
