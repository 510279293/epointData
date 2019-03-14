<template>
  <epoint-card class="box-card whole-net">
    <div class="elm-head clearfix">
      <span class="elm-head-title">近30天全网对比</span>
      <SwitchTab style="float: right"></SwitchTab>
    </div>
    <div class="elm-body">
      <NetItem :netItemData="item" v-for="(item, index) in netItemData" :index="index" :key="index"></NetItem>
      <nomoreBrand v-if="netItemData.length < 13"></nomoreBrand>
    </div>
  </epoint-card>
</template>

<script>
import SwitchTab from '../../../components/home/switchTab.vue'
import NetItem from './wholenet/netItem.vue'
import nomoreBrand from './wholenet/nomoreBrand.vue'

export default {
  props: {
    dataSource: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      netItemData: [{
        brand: '美的',
        money: 200,
        up: true,
        persent: '2.11%'
      }, {
        brand: '美的',
        money: 200,
        up: true,
        persent: '2.11%'
      }, {
        brand: '美的',
        money: 200,
        up: false,
        persent: '2.11%'
      }, {
        brand: '美的',
        money: 200,
        up: true,
        persent: '3.91%'
      }]
    }
  },
  components: {
    SwitchTab,
    NetItem,
    nomoreBrand
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
      border-bottom: 1px solid #F0F0F0;
      .elm-head-title{
        .midBlock;
        font-size: 20px;
        margin-right: 30px;
      }
    }
    .elm-body{
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      padding-bottom: 40px;
      .netItem{
        margin-left: 20px;
      }
    }
  }
</style>

<style lang="less">
.whole-net{
  .epoint-card{
    height: 100%;
  }
}
</style>
