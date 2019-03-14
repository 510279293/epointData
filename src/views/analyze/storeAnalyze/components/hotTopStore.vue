<template>
  <div class="hot-top-store">
    <div class="title">
      <h3>TOP5热销店铺</h3>
      <div class="file-title">
        <!-- 时间筛选 -->
        <div class="time-block">
          <!-- <span class="userHeadTitle">日期筛选：</span> -->
          <el-date-picker v-model="dateSelect" type="daterange" @change="selectTime" align="right" value-format="timestamp" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :clearable="true" :picker-options="pickerOptions">
          </el-date-picker>
          <i class="icon-font date-icon">&#xe61a;</i>
        </div>
        <ul class="time-list">
          <li v-for="(item,index) in timeList" :class="[{checked: curIndex === index}]" :key="index" @click="curIndex = index">{{item}}</li>
        </ul>
      </div>
    </div>
    <div class="elm-body">
      <div class="tab-div">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column label="序号" width="99" type="index" align="center" class-name="hsborder">
          </el-table-column>
          <el-table-column prop="pprice" label="店铺名称" width="248" class-name="border50">
          </el-table-column>
          <el-table-column prop="saleNum" label="平台" width="248" class-name="border50">
          </el-table-column>
          <el-table-column prop="saleMoney" label="销售额" width="248" class-name="border50">
            <template scope="scope">
              <span>{{scope.row.saleMoney | fixed-num-finance}}</span>
            </template>
          </el-table-column>
          <el-table-column label="占比" class-name="border50">
            <template>
              <span class="updown">
                20%
              </span>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      curIndex: 0,
      dateSelect: [(new Date()).setDate((new Date()).getDate() - 6), (new Date()).getTime()],
      timeList: ['销售额', '销售量'],
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
      tableData: [
        {
          pprice: '100-200',
          saleNum: 12345,
          saleMoney: '45675273.00',
          saleGrowth: {
            type: 'up',
            num: 3.9
          }
        },
        {
          pprice: '100-200',
          saleNum: 12345,
          saleMoney: '45675273',
          saleGrowth: {
            type: 'down',
            num: 3.9
          }
        },
        {
          pprice: '100-200',
          saleNum: 12345,
          saleMoney: '45675273',
          saleGrowth: {
            type: 'up',
            num: 3.9
          }
        },
        {
          pprice: '100-200',
          saleNum: 12345,
          saleMoney: '45675273',
          saleGrowth: {
            type: 'down',
            num: 3.9
          }
        },
        {
          pprice: '100-200',
          saleNum: 12345,
          saleMoney: '45675273',
          saleGrowth: {
            type: 'up',
            num: 3.9
          }
        },
        {
          pprice: '100-200',
          saleNum: 12345,
          saleMoney: '45675273',
          saleGrowth: {
            type: 'down',
            num: 3.9
          }
        }
      ]
    }
  },
  props: {
  },
  components: {

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
.hot-top-store {
  background: #fff;
  .title {
    font-size: 20px;
    color: #5a5c5e;
    font-weight: 500;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0px 20px;
    border-bottom: 1px solid rgba(240, 240, 240, 1);
    h3 {
      font-weight: 500;
    }
    .module-title {
      .hg(28px);
      width: 100%;
      font-size: 20px;
      color: #5a5c5e;
    }
  }
  .file-title {
    // .w100;
    .hg(68px);
    padding: 0 20px;
    font-size: 14px;
    color: #5a5c5e;
    // .moudles-card;
    .time-list {
      position: relative;
      top: 24px;
      right: 20px;
      li {
        .blf;
        width: 60px;
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
    .timeBlock,
    .time-list {
      .brt;
    }
  }
  .elm-body {
    box-sizing: border-box;
    padding: 20px;
    .tab-div {
      border: 1px solid #e1e5ee;
    }
  }
}
</style>
<style lang="less" rel="stylesheet/less">
.hot-top-store {
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
  .el-table th {
    background: #f5f8fa;
  }
  .has-gutter {
    tr {
      th {
        background: #f5f8fa;
      }
    }
  }
  .hsborder {
    border-right: 1px solid #e1e5ee;
  }
  .border50 {
    padding-left: 50px;
  }
}
</style>
