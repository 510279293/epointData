<template>
  <div class="epoint-table">
    <div class="selection-operate" v-if="selection.length">
      <span>已选择{{selection.length}}个{{selectionLabel}}</span>
      <el-button class="selection-btn" @click="selectionCallback">{{selectionBtnLabel}}</el-button>
    </div>
    <div class="item-operate" v-if="showItem">
      <i class="icon-font" @click="showTableDialog">&#xe616;</i>
    </div>
    <el-table class="table-wrap" :data="data" :height="tableHeight" @selection-change="handleSelectionChange">
      <el-table-column fixed v-if="showSelection" type="selection" width="30">
      </el-table-column>
      <el-table-column fixed class-name="bor-r" class="table-index" v-if="showIndex" type="index" width="60" label="序号">
        <template slot-scope="scope">
          <span class="table-index" v-html="indexMethod(scope.$index)"></span>
        </template>
      </el-table-column>
      <slot></slot>
      <template slot="empty">
        <slot name="selfempty"></slot>
      </template>
      <!-- <el-table-column
        fixed="right"
        v-if="showItem"
        width="44">
      </el-table-column> -->
    </el-table>
    <dia-ckbox v-if="showItem" :config="config" @sure="sureCkBox"></dia-ckbox>
  </div>
</template>

<script>
import index from './index'
export default index
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '~assets/styles/variables';
.epoint-table {
  position: relative;
}
.selection-operate {
  position: absolute;
  top: 1px;
  left: 30px;
  width: calc(~'100% - 52px');
  height: 44px;
  padding-left: 20px;
  background-color: @table-th;
  line-height: 44px;
  z-index: 100;
  font-size: 14px;
  .selection-btn {
    margin-left: 40px;
    padding: 6px 13px;
  }
}
.item-operate {
  position: absolute;
  top: 1px;
  right: 1px;
  width: 44px;
  height: 44px;
  line-height: 44px;
  background-color: @table-th;
  z-index: 90;
  text-align: center;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: @ope-color;
  }
  .icon-font {
    font-size: 16px;
  }
}
.table-index {
  padding-left: 10px;
}
</style>
<style lang="less" rel="stylesheet/less">
@import '~assets/styles/variables';
.table-wrap.el-table {
  width: 100%;
  border: 1px solid #e1e5ee;
  transition: height 0.3s;
  .border-box;
  &::before {
    display: none;
  }
  th {
    background-color: @table-th;
    padding: 0;
    height: 44px;
    line-height: 44px;
    .border-box;
  }
  td {
    padding: 15px 0;
  }
  .el-table__fixed::before {
    display: none;
  }
  .el-table__fixed-body-wrapper {
    height: calc(100% - 47px) !important;
  }
}
</style>

<style lang="less">
.epoint-table {
  .el-table .cell {
    padding-right: 0;
  }
  .bor-r {
    border-right: 1px solid #e1e5ee;
  }
}
</style>
