<template>
  <div
    class="local-loading"
    :class="{'loading-show': localLoading}"
  >
    <span v-loading="localLoading"></span>
    <span class="loading-text">加载中...</span>
  </div>
</template>

<script>
import index from './index'
export default index
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '~assets/styles/variables';
.local-loading {
  opacity: 0;
  top: -50px;
  left: 50%;
  margin-left: -80px;
  z-index: 1999;
  display: flex;
  width: 160px;
  padding: 14px 26px 14px 20px;
  border-radius: 4px;
  box-sizing: border-box;
  border: 1px solid #ebeef5;
  position: fixed;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  transition: opacity .3s,top .4s;
  overflow: hidden;
  &.loading-show{
    top: 40px;
    opacity: 1;
  }
  .loading-text{
    display: inline-block;
    margin-left: 30px;
  }
  .el-loading-parent--relative{
    transform: scale(.5);
  }
}
</style>
