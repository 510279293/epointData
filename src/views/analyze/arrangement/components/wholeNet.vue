<template>
  <div class="whole-net">
    <epoint-card class="box-card">
      <div class="elm-head clearfix">
        <span class="elm-head-title">各地区销售展示</span>
        <SwitchTab style="float: right"></SwitchTab>
      </div>
      <div class="elm-body">
        <div class="lfModule">
          <chinaMap :ringData="collaData" :innerRadius="0.6"></chinaMap>
        </div>
        <div class="rtModule">
          <CollapseWrap :collaData="collaData"></CollapseWrap>
        </div>
      </div>
    </epoint-card>
  </div>
</template>

<script>
import SwitchTab from '../../../../components/home/switchTab.vue'
import chinaMap from '../../../../components/antv/chinaMap.vue'
import CollapseWrap from './collapse.vue'

export default {
  props: {
    dataSource: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      collaData: [{
        princeName: '黑龙江',
        totalMoney: '123.30',
        saleNum: 1234,
        salePersent: '20%',
        productionNum: 22,
        presaleMoney: '12313.33',
        saleProductionNum: 21
      }, {
        princeName: '福建',
        totalMoney: '123.30',
        saleNum: 1234,
        salePersent: '20%',
        productionNum: 22,
        presaleMoney: '12313.33',
        saleProductionNum: 21
      }, {
        princeName: '河南',
        totalMoney: '123.30',
        saleNum: 1234,
        salePersent: '20%',
        productionNum: 22,
        presaleMoney: '12313.33',
        saleProductionNum: 21
      }, {
        princeName: '江苏',
        totalMoney: '123.30',
        saleNum: 1234,
        salePersent: '20%',
        productionNum: 22,
        presaleMoney: '12313.33',
        saleProductionNum: 21
      }, {
        princeName: '山西',
        totalMoney: '123.30',
        saleNum: 1234,
        salePersent: '20%',
        productionNum: 22,
        presaleMoney: '12313.33',
        saleProductionNum: 21
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
    CollapseWrap,
    chinaMap
  }
}
</script>

<style lang="less" scoped>
  @import '~assets/styles/variables';
  @import '~assets/styles/qkwyq';
  .whole-net{
    .w100;
    min-height: 279px;
    .elm-head{
      color: @main-font;
      padding: 20px;
      .elm-head-title{
        .midBlock;
        font-size: 20px;
        margin-right: 30px;
      }
    }
    .elm-body{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 20px 20px 0;
      &>div{
        height: 390px;
      }
      .lfModule{
        width: 520px;
      }
      .rtModule{
        width: calc(~'100% - 560px');
      }
    }
  }
</style>

<style lang="less">
.whole-net{
  .epoint-card{
    height: 100%;
    padding: 0;
  }
}
</style>
