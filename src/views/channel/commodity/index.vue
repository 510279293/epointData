<template>
  <div class="content-wrap">
    <!-- <selectBand class="selectBandWrap"></selectBand> -->
    <content-nav :navList="navList" @changeNav="changeNav">
      <template slot="warpR">
        <div class="warpR">
          <selectBand class="selectBandWrap"></selectBand>
          <dropDown :config="dropDownConfig" @dropdownCommand="dropdownCommand"></dropDown>
          <!-- <el-button type="info" size="medium" @click="showAddMonitDia">新增监控</el-button> -->
        </div>
      </template>
    </content-nav>
    <content-range :rowList="rowList" @callBack="search"></content-range>
    <content-table></content-table>
    <!-- <dia-ckbox :config="ckBoxConfig" @sure="sureCkBox"></dia-ckbox> -->
    <diaSingleAdd :config="addConfig" @surepop="sureAdd"></diaSingleAdd>
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
  .selectBandWrap {
    // position: relative;
    // top: -14px;
    color: #5858f1;
    z-index: 200;
    margin-right: 20px;
  }
  .warpR {
    position: absolute;
    right: 20px;
    top: 0px;
    display: flex;
    align-items: center;
    height: 100%;
  }
}
</style>
