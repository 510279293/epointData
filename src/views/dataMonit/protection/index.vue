<template>
  <div class="content-wrap">
    <content-nav :navList="navList" @changeNav="changeNav">
      <template slot="warpR" v-if="tableNav==1">
        <div class="warpR">
          <dropDown :config="dropDownConfig" @dropdownCommand="dropdownCommand"></dropDown>
        </div>
      </template>
    </content-nav>
    <lowPriceManage v-if="tableNav==0"></lowPriceManage>
    <stolenManage v-if="tableNav==1"></stolenManage>
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
    top: 20px;
    right: 20px;
  }
}
</style>
