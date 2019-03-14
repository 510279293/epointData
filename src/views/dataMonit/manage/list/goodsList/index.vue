<template>
  <div class="goodsList">
    <content-nav :navList="navList" @changeNav="changeNav">
      <template slot="warpR">
        <div class="warpR">
          <el-button @click="diaMonitPlanShow" class="warp-btn" size="medium" type="info">计划设置查询</el-button>
        </div>
      </template>
    </content-nav>
    <content-range :rowList="rowList" @callBack="search"></content-range>
    <goodsListTable v-if="tableNav===0"></goodsListTable>
    <skuListTable v-if="tableNav===1"></skuListTable>
    <diaMonitPlan :config="monitPlanConfig" @sure="sureMonitPlan"></diaMonitPlan>
  </div>
</template>

<script>
import index from './index'
export default index
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '~assets/styles/variables';
.goodsList {
  .content-table {
    padding: 20px;
    .download-btn {
      margin-bottom: 20px;
    }
  }
  .warpR {
    position: absolute;
    right: 20px;
    top: 14px;
    .warp-btn {
      position: relative;
      top: -2px;
    }
  }
}
</style>
