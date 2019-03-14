<template>
  <div class="home-wrap">
    <div class="module-title">渠道概况</div>
    <Sales :ptlt="'近30天销售额'" :dataSource="dataMock.data"></Sales>
    <Sales :ptlt="'近30天销售量'" :dataSource="dataMock.data"></Sales>
    <MarketTrend :dataSource="dataMock.data"></MarketTrend>
    <TopModule></TopModule>
    <platform></platform>
    <div class="module-title">竞品概况</div>
    <wholeNet></wholeNet>
    <brandCompare></brandCompare>
  </div>
</template>

<script>
import index from './index'
export default index
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import '~assets/styles/variables';
  @import '~assets/styles/qkwyq';
  .home-wrap{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .module-title{
      .hg(28px);
      width: 100%;
      font-size: 20px;
      color: #5A5C5E;
      margin: 30px 0 25px;
    }
    .epoint-card{
      margin-bottom: 30px;
    }
  }
</style>
