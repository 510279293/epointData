<template>
  <div class="skuDetail content-wrap">
    <div>
      <qdDetailCard></qdDetailCard>
    </div>
    <div class="table-warp">
      <contentTable></contentTable>
    </div>
  </div>
</template>
<script>
import index from './index'
export default index
</script>
<style lang="less" scoped>
.skuDetail {
  background: #fff;
  .table-warp {
    box-sizing: border-box;
    padding: 20px;
  }
}
</style>
