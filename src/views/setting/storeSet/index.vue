<template>
  <div class="store-set content-wrap">
    <content-nav :navList="navList" @changeNav="changeNav"></content-nav>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import index from './index'
export default index
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '~assets/styles/variables';
.store-set {
  position: relative;
  background: #fff;
  .store-btns {
    box-sizing: border-box;
    padding: 20px;
    padding-bottom: 0px;
  }
}
</style>
