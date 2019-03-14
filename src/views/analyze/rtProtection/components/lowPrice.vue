<template>
  <div class="low-price">
    <epoint-card class="box-card">
      <div class="elm-head clearfix">
        <span class="elm-head-title">昨日低价和盗图分析</span>
      </div>
      <div class="elm-body">
        <div class="topWrap">
          <div class="lf-low-price">
            <RingChart :ringData="compareData" :innerRadius="'0%'" :chartHeight="330" :padSet="padSet"></RingChart>
          </div>
          <div class="rt-low-price">
            <ul>
              <li v-for="(item, index) in compareData" :key="index">
                <p class="line1">
                  <s :style="{'background': item.color}"></s>
                  <span class="line1-tlt">昨{{item.tltType}}数</span>
                  <span class="total-num">{{item.value}}</span>
                </p>
                <p class="line2">
                  <span>昨日{{item.tltType}}率<i class="el-icon-warning"></i>40%</span>
                </p>
                <p class="line3">
                  较上1日<span :style="{color: item.isUp ? '#FF4E50' : '#44C789'}">
                    <i class="el-icon-upload2" v-if="item.isUp"></i>
                    <i class="el-icon-download" v-else></i>3.09%</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="table-wrap">
          <p class="table-title">平台分布状况</p>
          <TableModule></TableModule>
        </div>
      </div>
    </epoint-card>
  </div>
</template>

<script>
import RingChart from '../../../../components/antv/ringChart.vue'
import TableModule from './tableModule.vue'

export default {
  props: {
    dataSource: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      padSet: { top: 20, right: 30, bottom: 30, left: 10 },
      compareData: [{
        value: 1111,
        percent: 0.19,
        color: '#8C8CFA',
        tltType: '低价',
        name: '低价率',
        isUp: true
      }, {
        value: 222,
        percent: 0.59,
        color: '#55D4D4',
        tlt: '昨日低价数',
        tltType: '盗图',
        name: '盗图率',
        isUp: false
      }]
    }
  },
  components: {
    RingChart,
    TableModule
  }
}
</script>

<style lang="less" scoped>
  @import '~assets/styles/variables';
  @import '~assets/styles/qkwyq';
  .low-price{
    .w100;
    min-height: 279px;
    .elm-head{
      color: @main-font;
      padding: 20px;
      .elm-head-title{
        .midBlock;
        font-size: 20px;
        margin-right: 30px;
      }
    }
    .elm-body{
      padding: 0 20px 0;
      .topWrap{
        height: 330px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }
      .lf-low-price{
        width: 520px;
      }
      .rt-low-price{
        width: calc(~'100% - 600px');
        position: relative;
        ul{
          display: flex;
          justify-content: space-around;
          width: 100%;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          li{
            max-width: 350px;
            .oh;
            p{
              .wes;
              color: #5A5C5E;
              font-size: 16px;
              &:not(:first-child){
                padding-left: 16px;
              }
            }
            .line1{
              s{
                display: inline-block;
                width: 12px;
                height: 12px;
                border-radius: 50%;
              }
              .total-num{
                font-size: 30px;
              }
              .line1-tlt{
                margin: 0 20px 0 5px;
              }
            }
            .line2{
              margin: 12px 0;
              .hg(22px);
              i{
                color: #CCCCD9;
                font-size: 12px;
                margin: 0 5px 0 3px;
              }
            }
          }
        }
      }
      .table-wrap{
        padding-bottom: 41px;
        .table-title{
          color: #5A5C5E;
          .hg(22px);
          font-size: 16px;
          margin-bottom: 20px;
        }
      }
    }
  }
</style>

<style lang="less">
.low-price{
  .epoint-card{
    height: 100%;
    padding: 0;
  }
}
</style>
