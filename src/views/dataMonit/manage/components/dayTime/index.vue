<template>
  <div class="day-time">
    <div class="month clearfix">
      <span :class="[{'checked': checkDate.includes(index)}]" v-for="(val,index) in 24" :key="index" @click="changeCheck(checkDate, index)">{{val | time-form}}</span>
    </div>
  </div>
</template>

<style rel="stylesheet/less" lang="less" scoped>
@import '~assets/styles/qkwyq';

.day-time {
  .month{
    height: 136px;
    box-sizing: border-box;
    padding: 18px 26px 0;
    width: 588px;
    border: 1px solid #E1E5EE;
    .oh;
    span{
      .blf;
      width: 44px;
      .hg(24px);
      font-size: 14px;
      color: #5A5C5E;
      border-radius: 4px;
      text-align: center;
      margin: 0 26px 16px 0;
      cursor: pointer;
      &.checked{
        background: #3CB975;
        color: #fff;
      }
      &:nth-child(8n){
        margin-right: 0;
      }
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
