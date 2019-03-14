<template>
  <div class="home-wrap">
    <lowPrice></lowPrice>
    <div class="down-module">
      <MarketTrend></MarketTrend>
    </div>
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
      .w100;
      .border-box;
    }
    .file-title{
      .hg(68px);
      padding: 20px;
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
