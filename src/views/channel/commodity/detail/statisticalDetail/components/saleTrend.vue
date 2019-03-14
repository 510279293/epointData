<template>
  <div class="saleTrend-wrap">
    <div class="file-title">
      <span class="trend-title">销售趋势</span>
      <p class="label">
        <span v-for="item in arr" v-bind:key="item.name" class="label-item">
          <i :style="{background:item.color}"></i><b>{{item.name}}</b>
        </span>
      </p>
      <!-- 时间筛选 -->
      <div class="time-block">
        <span class="userHeadTitle">日期筛选：</span>
        <el-date-picker v-model="dateSelect" type="daterange" @change="selectTime" align="right" value-format="timestamp" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :clearable="true" :picker-options="pickerOptions">
        </el-date-picker>
        <i class="icon-font date-icon">&#xe61a;</i>
      </div>
      <ul class="time-list">
        <li v-for="(item,index) in timeList" :class="[{checked: curIndex === index}]" :key="index" @click="curIndex = index">{{item}}</li>
      </ul>
    </div>

    <div class="line-warp">
      <LineChart :lineData="lineData" style="width: 100%"></LineChart>
    </div>
  </div>
</template>

<script>
import LineChart from '@/components/antv/lineChart.vue'
const arr = [
  {
    name: '日销量',
    color: 'rgba(251, 51, 99, 1)'
  },
  {
    name: '预估日销售额',
    color: 'rgba(119, 119, 249, 1)'
  }
]
export default {
  data () {
    return {
      arr: arr,
      curIndex: 0,
      dateSelect: [(new Date()).setDate((new Date()).getDate() - 6), (new Date()).getTime()],
      timeList: ['本周', '本月', '本年'],
      pickerOptions: {
        shortcuts: [{
          text: '最近7天',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 6)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近30天',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 29)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      lineData: [{
        month: '08/16',
        shop: '日销量',
        value: 3313
      }, {
        month: '08/17',
        shop: '日销量',
        value: 3294
      }, {
        month: '08/18',
        shop: '日销量',
        value: 3115
      }, {
        month: '08/19',
        shop: '日销量',
        value: 3007
      }, {
        month: '08/20',
        shop: '日销量',
        value: 3107
      }, {
        month: '08/21',
        shop: '日销量',
        value: 3200
      }, {
        month: '08/22',
        shop: '日销量',
        value: 3947
      }, {
        month: '08/16',
        shop: '预估日销售额',
        value: 1313
      }, {
        month: '08/17',
        shop: '预估日销售额',
        value: 1294
      }, {
        month: '08/18',
        shop: '预估日销售额',
        value: 1115
      }, {
        month: '08/19',
        shop: '预估日销售额',
        value: 1007
      }, {
        month: '08/20',
        shop: '预估日销售额',
        value: 1107
      }, {
        month: '08/21',
        shop: '预估日销售额',
        value: 1200
      }, {
        month: '08/22',
        shop: '预估日销售额',
        value: 1947
      }]
    }
  },
  props: {
  },
  components: {
    LineChart
  },
  mounted () {
  },
  computed: {
  },
  watch: {
  },
  methods: {
    selectTime () { }
  }
}

</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '~assets/styles/variables';
@import '~assets/styles/qkwyq';
.saleTrend-wrap {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 0 20px;
  & > div {
    margin-bottom: 20px;
    .border-box;
  }
  .file-title {
    .w100;
    .hg(68px);
    font-size: 14px;
    color: #5a5c5e;
    position: relative;
    .i-color {
      color: #ccc;
    }
    // .moudles-card;
    .trend-title {
      font-size: 20px;
      font-weight: 500;
      margin-right: 5px;
    }
    .time-list {
      position: relative;
      top: 24px;
      right: 20px;
      li {
        .blf;
        width: 40px;
        .hg(20px);
        text-align: center;
        color: #9098b1;
        cursor: pointer;
        &.checked {
          color: #5ac489;
        }
        &:not(:last-child) {
          border-right: 1px solid #9098b1;
        }
      }
    }
    .time-block,
    .time-list {
      .brt;
    }
  }
  .module-title {
    .hg(28px);
    width: 100%;
    font-size: 20px;
    color: #5a5c5e;
  }
  .line-warp {
    width: 100%;
  }
  .label {
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    left: 110px;
    top: -15px;
    .label-item {
      display: flex;
      align-items: center;
      margin-right: 15px;
      margin-top: 15px;
      b {
        font-weight: 300;
        color: #9798ab;
        font-size: 12px;
      }
      i {
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin-right: 5px;
        box-shadow: 0px 2px 4px 0px rgba(204, 204, 204, 0.5);
      }
    }
  }
}
</style>

<style lang="less">
.saleTrend-wrap {
  .time-block {
    position: relative;
    .el-input__icon {
      display: none;
    }
    .date-icon {
      position: absolute;
      top: 0;
      right: 10px;
      color: rgba(51, 71, 91, 0.45);
      font-size: 18px;
    }
    .el-date-editor {
      width: 240px;
      .el-range-separator {
        line-height: 28px;
      }
    }
  }
}
</style>
