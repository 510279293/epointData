<template>
  <div class="epoint-btn" :style="{'width': width, 'background': bgcolor}">
    <slot></slot>
  </div>
</template>

<script>
import index from './index'
export default index
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '~assets/styles/variables';
.epoint-btn {
  color: #fff;
  font-size: 14px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  border-radius:4px;
  display: inline-block;
  cursor: pointer;
}
</style>
