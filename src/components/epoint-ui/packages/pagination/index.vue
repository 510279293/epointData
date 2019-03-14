<template>
  <el-pagination small class="epoint-pagination" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 50, 100]" :page-size="pageSize" :total="total" layout="prev, pager, next, total, sizes, jumper">
  </el-pagination>
</template>

<script>
import index from './index'
export default index
</script>

<style lang="less" rel="stylesheet/less">
@import '~assets/styles/variables';
.epoint-pagination.el-pagination--small {
  text-align: right;
  padding: 15px 30px;
  .btn-prev,
  .btn-next,
  .el-pager li,
  .el-pager li.btn-quicknext,
  .el-pager li.btn-quickprev,
  .el-pager li:last-child,
  span:not([class*='suffix']),
  button,
  .el-pagination__editor,
  .el-pagination__editor.el-input .el-input__inner {
    line-height: 28px;
    height: 28px;
    min-width: 28px;
  }
  .el-pagination__jump {
    margin-left: 0;
  }
  .el-pagination__total {
    color: @secondary-font;
    margin-left: 10px;
  }
}
</style>
