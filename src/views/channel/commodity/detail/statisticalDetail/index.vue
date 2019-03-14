<template>
  <div class="statisticalDetail">
    <epoint-card>
      <qdDetailCard></qdDetailCard>
      <priceTrend></priceTrend>
    </epoint-card>
    <epoint-card>
      <saleTrend></saleTrend>
    </epoint-card>
    <epoint-card class="table-warp">
      <contentTable></contentTable>
    </epoint-card>
  </div>
</template>
<script>
import index from './index'
export default index
</script>
<style lang="less" scoped>
.statisticalDetail {
  .table-warp {
    box-sizing: border-box;
    padding: 0px 20px;
  }
}
</style>
