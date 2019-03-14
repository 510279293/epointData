<template>
  <div class="store-analyze">
    <epoint-card class="brand-opera">
      <p class="ali-cen"><span>品牌</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </p>
      <div class="lis">
        <ul>
          <li>
            <p class="lis-num">3000</p>
            <p class="lis-name">自营店</p>
          </li>
          <li>
            <p class="lis-num">3000</p>
            <p class="lis-name">自营店</p>
          </li>
          <li>
            <p class="lis-num">3000</p>
            <p class="lis-name">自营店</p>
          </li>
          <li>
            <p class="lis-num">3000</p>
            <p class="lis-name">自营店</p>
          </li>
          <li>
            <p class="lis-num">3000</p>
            <p class="lis-name">自营店</p>
          </li>
          <li>
            <p class="lis-num red">30%</p>
            <p class="lis-name">店铺侵权比</p>
          </li>
        </ul>
      </div>
    </epoint-card>
    <epoint-card class="store-distribution">
      <store-distribution></store-distribution>
    </epoint-card>
    <epoint-card class="hot-top">
      <hot-top-store></hot-top-store>
    </epoint-card>
    <epoint-card class="store-level">
      <store-level></store-level>
    </epoint-card>
  </div>
</template>
<script>
import index from './index'
export default index
</script>
<style lang="less" scoped>
@import '~assets/styles/variables';
.store-analyze {
  .red {
    color: #fb3363 !important;
  }
  .el-select {
    .widthPercent(150);
  }
  .brand-opera {
    box-sizing: border-box;
    padding: 16px 20px;
    background: #fff;
    border-radius: 3px;
    .ali-cen {
      display: flex;
      align-items: center;
    }
    p {
      span {
        margin-right: 10px;
        font-size: 14px;
        color: #5a5c5e;
      }
    }
  }
  .lis {
    margin-top: 16px;
    ul {
      display: flex;
      position: relative;
      padding-top: 50px;
      padding-bottom: 50px;
      // border-top: 1px solid rgba(240, 240, 240, 1);
      li {
        // width: 180px;
        .widthPercent(180);
        text-align: center;
        border-right: 2px solid rgba(240, 240, 240, 1);
        .lis-num {
          font-size: 30px;
          color: #33475b;
        }
        .lis-name {
          font-size: 14px;
          font-weight: 400;
          color: #9798ab;
          margin-top: 10px;
        }
      }
      li:nth-last-of-type(1) {
        border-right: none;
      }
    }
    ul:before {
      content: '';
      position: absolute;
      left: -20px;
      right: -20px;
      top: 0px;
      height: 1px;
      border-top: 1px solid rgba(240, 240, 240, 1);
    }
  }
}
</style>
