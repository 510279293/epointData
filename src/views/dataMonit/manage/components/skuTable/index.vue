<template>
  <div class="sku-table">
    <el-table
      ref="singleTable"
      :data="tableData"
      border
      highlight-current-row
      @current-change="handleCurrentChange"
      header-row-class-name="headerBg"
      style="width: 677px;">
      <el-table-column align="center" type="index" label="序号" width="50"></el-table-column>
      <el-table-column align="center" prop="keyWord" label="SKU规格" width="102"></el-table-column>
      <!-- <el-table-column align="center" prop="brand" label="平台" width="101"></el-table-column> -->
      <el-table-column align="center" prop="lowprice" label="非授权低价区间" width="214">
        <template slot-scope="scope">
          <div>{{scope.row.lowprice.min}} - {{scope.row.lowprice.max}}</div>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="midprice" label="授权店低价区间" width="214">
        <template slot-scope="scope">
          <div>{{scope.row.midprice.min}} - {{scope.row.midprice.max}}</div>
        </template>   
      </el-table-column>
      <el-table-column align="center" label="操作" width="96">
        <template slot-scope="scope">
          <div class="edit-line">
            <span @click="editRow(scope)">编辑</span>
            <span @click="delRow(scope.$index)">删除</span>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <div class="page-line">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="10"
        layout="total, prev, pager, next"
        :total="tableData.length">
      </el-pagination>
      <span class="all-del">全部删除</span>
    </div>
  </div>
</template>

<style rel="stylesheet/less" lang="less" scoped>
@import '~assets/styles/qkwyq';

.sku-table {
  margin: 0 0 20px 60px;
  width: 679px;
  .edit-line{
    color: #5CC48A;
    span{
      cursor: pointer;
    }
    span + span{
      margin-left: 16px;
    }
  }
}
</style>

<style lang="less">
.sku-table {
  .el-pagination{
    text-align: right;
    padding-right: 50px;
    font-weight: normal;
    .el-pagination__total{
      float: right;
    }
  }
  .headerBg{
    background: #000;
  }
  .el-table{
    margin-bottom: 18px;
    th{
      background: #F7F9FB;
      color: #9798AB;
    }
    .el-table__header-wrapper{
      background: #F7F9FB;
    }
  }
  .page-line{
    position: relative;
    // margin-bottom: 18px;
    .all-del{
      position: absolute;
      top: 9px;
      right: 0;
      font-size: 12px;
      color: #5CC48A;
    }
  }
}
</style>


<script type="text/babel">
import index from './index'
export default {
  ...index
}
</script>
