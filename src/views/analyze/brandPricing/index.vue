<template>
  <div class="brand-pricing">
    <epoint-card class="brand-opera">
      <p class="ali-cen"><span class="mar-10">品牌</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </p>
      <p>
        <el-button type="primary" size="medium" @click="showPrangeDialog">价格区间设置</el-button>
      </p>
    </epoint-card>

    <epoint-card>
      <price-ratio :ratioData="ratioData.data"></price-ratio>
    </epoint-card>
    <epoint-card>
      <price-trend :trendData="trendData"></price-trend>
    </epoint-card>
    <epoint-card>
      <price-compare :compareData="compareData"></price-compare>
    </epoint-card>
    <epoint-card>
      <table-compare></table-compare>
    </epoint-card>
    <price-range :rangeData="rangeData" @closePrangeDialog="closePrangeDialog" @prangeSubmit="prangeSubmit"></price-range>
  </div>
</template>

<script>
import index from './index'
export default index
</script>

<style lang="less" rel="stylesheet/less" >
@import '~assets/styles/variables';
.brand-pricing {
  width: 100%;
  .brand-opera {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 16px 20px;
    background: #fff;
    border-radius: 3px;
    .ali-cen {
      display: flex;
      align-items: center;
      color: #5a5c5e;
      .mar-10 {
        margin-right: 10px;
        font-size: 14px;
      }
    }
  }
  .mar-top30 {
    margin-top: 30px;
  }
  .el-select {
    .widthPercent(150);
  }
}
</style>
