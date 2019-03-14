<template>
  <div class="date-time">
    <div class="radio-line">
      <el-radio v-model="radio" label="1">按月选择</el-radio>
      <el-radio v-model="radio" label="2">按周选择</el-radio>
    </div>
    <div class="switch-box">
      <div class="month clearfix" v-if="radio === '1'">
        <span :class="[{'checked': checkDate.includes(index)}]" v-for="(val,index) in 31" :key="index" @click="changeCheck(checkDate, index)">{{val}}</span>
      </div>
      <div class="times clearfix" v-else>
        <span :class="[{'checked': checkWeek.includes(key)}]" v-for="(item, key) in weeks" :key="key+'w'" @click="changeCheck(checkWeek, key)">{{item}}</span>
      </div>
    </div>
  </div>
</template>

<style rel="stylesheet/less" lang="less" scoped>
@import '~assets/styles/qkwyq';

.date-time {
  .switch-box{
    width: 312px;
    border: 1px solid #E1E5EE;
    span.checked{
      background: #3CB975;
      color: #fff;
    }
    .month{
      height: 184px;
      box-sizing: border-box;
      padding: 15px 20px; 
      span{
        .blf;
        width: 24px;
        .hg(24px);
        border-radius: 50%;
        text-align: center;
        margin: 0 15px 8px 0;
        cursor: pointer;
        &:nth-child(7n){
          margin-right: 0;
        }
      }
    }
    .times{
      padding: 15px 25px 3px;
      span{
        .blf;
        width: 40px;
        .hg(24px);
        text-align: center;
        margin: 0 34px 13px 0;
        cursor: pointer;
        border-radius: 4px;
        &:nth-child(4n){
          margin-right: 0;
        }
      }
    }
  }
}
</style>

<script type="text/babel">
import index from "./index";
export default {
  ...index
};
</script>
