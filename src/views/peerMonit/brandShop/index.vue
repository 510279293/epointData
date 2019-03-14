<template>
  <div class="content-wrap">
    <content-nav :navList="navList" @changeNav="changeNav">
      <template slot="warpR">
        <div class="warpR">
          <selectBand class="selectBandWrap"></selectBand>
        </div>
      </template>
    </content-nav>
    <content-range :rowList="rowList" @callBack="search"></content-range>
    <content-table></content-table>
    <!-- <dia-ckbox :config="ckBoxConfig" @sure="sureCkBox"></dia-ckbox> -->
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
  .warpR {
    position: absolute;
    right: 20px;
    top: 21px;
    .selectBandWrap {
      position: absolute;
      top: -8px;
      right: 0px;
      color: #5858f1;
      z-index: 200;
      // margin-right: 20px;
    }
  }
}
</style>
