<template>
  <div class="account-set">
    <div class="nav-ban">
      <content-nav :navList="navList" @changeNav="changeNav"></content-nav>
    </div>
    <!-- <div> -->
    <userManage v-if="tableValue==0" @diaAddEditShow="diaAddEditShow"></userManage>
    <roleManage v-if="tableValue==1"></roleManage>
    <!-- </div> -->
    <diaAddEdit :config="diaAddEditConfig" @close="diaAddEditClose" @surepop="diaAddEditSure"></diaAddEdit>
  </div>
</template>

<script>
import index from './index'
export default index
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '~assets/styles/variables';
.account-set {
  // background: #fff;
  position: relative;
  .nav-ban {
    background: #fff;
  }
}
</style>
