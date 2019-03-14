<template>
  <div class="table-compare">
    <div class="table-box">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="序号" width="99" type="index" align="center" class-name="hsborder">
        </el-table-column>
        <el-table-column prop="pprice" label="价格区间" width="248" class-name="border50">
        </el-table-column>
        <el-table-column prop="saleNum" label="近30天销量" width="248" class-name="border50">
        </el-table-column>
        <el-table-column prop="saleMoney" label="近30天销售额" width="248" class-name="border50">
          <template scope="scope">
            <span>{{scope.row.saleMoney | fixed-num-finance}}</span>
          </template>
        </el-table-column>
        <el-table-column label="近30天销售增幅" class-name="border50">
          <template scope="scope">
            <span class="updown">
              <i class="el-icon-caret-top up" v-if="scope.row.saleGrowth.type=='up'"></i>
              <i class="el-icon-caret-bottom down" v-if="scope.row.saleGrowth.type=='down'"></i>
              <span :class="[scope.row.saleGrowth.type=='up'?'red':'green']">{{scope.row.saleGrowth.num}}</span>
            </span>
          </template>
        </el-table-column>
        <el-table-column label=" " fixed="right" width="44">
          <template>
            <span class="table-more">
              <i class="el-icon-more"></i>
            </span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
// const arr = ['100-200', '200-300', '300-400', '400-500', '500-600', '600-700', '700-800', '800-900', '900-1000']
export default {
  data () {
    return {
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
  }
}
</script>
<style lang="less" scoped>
.table-compare {
  background: #fff;
  box-sizing: border-box;
  padding: 20px;
  .updown {
    display: flex;
    align-items: center;
    i {
      position: relative;
      top: -6px;
      margin-right: 5px;
    }
    .red {
      color: #ff4e50;
    }
    .green {
      color: #44c789;
    }
  }
  .up,
  .down {
    position: relative;
  }
  .up {
    color: #ff4e50;
  }
  .down {
    color: #44c789;
  }
  .up:after {
    content: '';
    position: absolute;
    height: 10px;
    width: 2px;
    background: #ff4e50;
    left: 6px;
    top: 8px;
  }
  .down:before {
    top: 10px;
    position: relative;
  }
  .down:after {
    content: '';
    position: absolute;
    height: 10px;
    width: 2px;
    background: #44c789;
    left: 6px;
    top: 5px;
  }
}
</style>
<style lang="less">
.table-compare {
  .table-box {
    border: 1px solid #e1e5ee;
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
  .table-more {
    i {
      transform: rotatez(90deg);
      color: #aab0bc;
    }
  }
}
</style>
