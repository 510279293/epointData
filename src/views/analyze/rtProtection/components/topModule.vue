<template>
  <epoint-card class="top-module">
    <div class="top-module-head clearfix">
      <span class="top-module-head-title">{{type}}</span>
    </div>
    <div class="top-module-body">
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

export default {
  props: {
    dataSource: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      ponitCol: ['#FB3363', '#7777F9', '#3CB774'],
      headTxt: ['序号', '宝贝名称', '低价盗图数', '疑似盗图数'],
      serialNum: ['#FB3363', '#FFC30A', '#3CB774', '#5A5C5E', '#5A5C5E'],
      bodyTxt: [{
        proName: '宝贝名称宝贝名称宝贝名称宝贝名称宝贝名称宝贝名称宝贝名称宝贝名称宝贝名称',
        platform: '300',
        money: 200
      }, {
        proName: '宝贝名称宝贝名贝名称宝贝名称',
        platform: '567',
        money: 1200
      }, {
        proName: '宝贝名称宝贝名称宝贝名称宝贝名称宝贝名称宝贝名称宝贝名称宝贝名称宝贝名称',
        platform: '300',
        money: 200
      }, {
        proName: '宝贝名称宝贝名称宝贝名称宝贝名称宝贝名称宝贝名称宝贝名称宝贝名称宝贝名称',
        platform: '2524',
        money: 500
      }, {
        proName: '宝贝名称宝贝名称宝贝名称宝贝名称宝贝名称宝贝名称',
        platform: '300',
        money: 200
      }]
    }
  },
  components: {
  }
}
</script>

<style lang="less" scoped>
  @import '~assets/styles/variables';
  @import '~assets/styles/qkwyq';
  .top-module{
    .w100;
    height: 397px;
    .top-module-head{
      color: @main-font;
      padding: 20px;
      border-bottom: 1px solid #F0F0F0;
      .top-module-head-title{
        .midBlock;
        font-size: 20px;
        margin-right: 30px;
      }
    }
    .top-module-body{
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
          width: 7%;
        }
        li:nth-child(2){
          width: 50%;
        }
        li:nth-child(3){
          width: 22%;
        }
        li:nth-child(4){
          width: 21%;
        }
      }
    }
  }
</style>

<style lang="less">
.top-module{
  .epoint-card{
    height: 100%;
    padding: 0;
  }
}
</style>
