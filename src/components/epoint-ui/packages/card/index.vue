<template>
  <div class="epoint-card">
    <slot></slot>
  </div>
</template>

<script>
import index from './index'
export default index
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '~assets/styles/variables';
.epoint-card {
  margin-bottom: 20px;
  overflow: hidden;
  .moudles-card;
}
</style>
