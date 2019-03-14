<template>
  <div class="content-wrap brandCompare">
    <div class="compare-range">
      <div class="range-item">
        <span class="item_name">时间</span>
        <el-date-picker v-model="value7" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions2">
        </el-date-picker>
      </div>
      <div class="range-item">
        <span class="item_name">品牌</span>
        <el-select v-model="value6" size="" multiple placeholder="请选择2～4个要进行对比的品牌" class="wid420" popper-class="brandCompare-select">
          <el-option v-for="item in cities" :key="item.value" :label="item.label" :value="item.value" :disabled="value6.length>3">
            <span>{{item.label}}</span>
          </el-option>
          <div class="disabled-tip">以下品牌在对比时间内不具备可比性，不可选择</div>
          <el-option v-for="item in disabledCity" :key="item.value" :label="item.label" :value="item.value" disabled>
            <span>{{item.label}}</span>
          </el-option>
        </el-select>
      </div>
      <el-popover placement="top-start" width="444" offset="222" trigger="hover" content="最多支持4个品牌同时进行对比，品牌右侧的时间为初始监控时间； 数据不具备可比性是由于品牌的第一次采集时间发生在对比开始时 间之后，使得品牌在对比时间内有部分时间没有数据">
        <i slot="reference" class="el-icon-warning i-tip"></i>
      </el-popover>
      <el-button type="primary" size="medium" class="range-btn">对比</el-button>
    </div>
    <div class="content">
      <table-tree></table-tree>
    </div>

  </div>
</template>

<script>
import index from './index'
export default index
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '~assets/styles/variables';
.content-wrap {
  min-height: calc(100vh - 88px);
  height: auto;
}
.brandCompare {
  .compare-range {
    box-sizing: border-box;
    padding: 20px;
    display: flex;
    align-items: center;
    .el-form-item {
      display: inline-block;
      margin-bottom: 16px;
    }
    .i-tip {
      color: #ccccd9;
      margin: 0px 20px 0px 5px;
      position: relative;
    }
    .range-btn {
      // position: absolute;
    }
    .wid420 {
      width: 420px;
      input {
        height: 36px !important;
      }
    }
  }
  .content {
    border-top: 1px solid #f0f0f0;
    box-sizing: border-box;
    padding: 20px;
  }
  .range-item {
    display: flex;
    align-items: center;
    margin-right: 20px;
    .item_name {
      margin-right: 10px;
    }
  }
}
.brandCompare-select {
  .disabled-tip {
    color: #c0cad3;
    font-size: 12px;
    box-sizing: border-box;
    padding: 9px 11px;
    position: relative;
    padding-left: 60px;
  }
  .disabled-tip:before {
    position: absolute;
    width: 44px;
    content: '';
    top: 15px;
    left: 9px;
    border-top: 1px solid #aab0bc;
  }
  .disabled-tip:after {
    position: absolute;
    width: 44px;
    content: '';
    top: 15px;
    border-top: 1px solid #aab0bc;
    margin-left: 6px;
  }
}
</style>
