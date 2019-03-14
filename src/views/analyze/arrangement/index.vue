<template>
  <div class="home-wrap">
    <epoint-card class="file-title">
      <span style="margin-right:10px;">品牌</span>
      <el-select style="line-height: 36px;" v-model="contactOption" placeholder="品牌名称" @change="contactSelect">
        <el-option
          class="aco-option"
          v-for="(option,index) in accountTeamList"
          :label="option.name"
          :key="index"
          :value="option.name">
        </el-option>
      </el-select>
      <!-- 时间筛选 -->
      <div class="timeBlock">
        <span class="userHeadTitle">日期筛选：</span>
        <el-date-picker
          v-model="dateSelect"
          type="daterange"
          @change="selectTime"
          align="right"
          value-format="timestamp"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :clearable="true"
          :picker-options="pickerOptions">
        </el-date-picker>
        <i class="icon-font date-icon">&#xe61a;</i>
      </div>
      <ul class="time-list">
        <li v-for="(item,index) in timeList" :class="[{checked: curIndex === index}]" :key="index" @click="curIndex = index">{{item}}</li>
      </ul>
    </epoint-card>
    <wholeNet></wholeNet>
    <saleTrend :module-title="'省份销售趋势'"></saleTrend>
    <saleTrend :module-title="'城市销售趋势'"></saleTrend>
  </div>
</template>

<script>
import index from './index'
export default index
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import '~assets/styles/variables';
  @import '~assets/styles/qkwyq';
  .home-wrap{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    &>div{
      margin-bottom: 20px;
      .border-box;
    }
    .file-title{
      .w100;
      .hg(68px);
      padding: 0 20px;
      font-size: 14px;
      color: #5A5C5E;
      .moudles-card;
      .time-list{
        position: relative;
        top: 24px;
        right: 20px;
        li{
          .blf;
          width: 40px;
          .hg(20px);
          text-align: center;
          color: #9098B1;
          cursor: pointer;
          &.checked{
            color: #5AC489;
          }
          &:not(:last-child){
            border-right: 1px solid #9098B1;
          }
        }
      }
      .timeBlock, .time-list{
        .brt;
      }
    }
    .module-title{
      .hg(28px);
      width: 100%;
      font-size: 20px;
      color: #5A5C5E;
    }
  }
</style>

<style lang="less">
.home-wrap{
  .timeBlock{
    position: relative;
    .el-input__icon{ display: none; }
    .date-icon {
      position: absolute;
      top: 0;
      right: 10px;
      color: rgba(51,71,91,0.45);
      font-size: 18px;
    }
    .el-date-editor{
      width: 240px;
      .el-range-separator{
        line-height: 28px;
      }
    }
  }
}
</style>
