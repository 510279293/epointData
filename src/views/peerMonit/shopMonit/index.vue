<template>
  <div class="content-wrap">
    <content-range :rowList="rowList" @callBack="search"></content-range>
    <div class="addshop">
      <el-button type="primary" size="medium" @click="showAddShopDia">新增店铺</el-button>
    </div>
    <content-table></content-table>
    <diaSingleAdd :config="addConfig"></diaSingleAdd>
  </div>
</template>

<script>
import index from './index'
export default index
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '~assets/styles/variables';
.content-wrap {
  position: relative;
  .addshop {
    box-sizing: border-box;
    padding: 20px 0px 0px 20px;
  }
}
</style>
