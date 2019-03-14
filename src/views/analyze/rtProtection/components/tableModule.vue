<template>
  <div class="table-module">
    <el-table
      :data="tableData3" style="width: 100%;">
      <el-table-column
        prop="platform"
        label="平台"
        min-width="160"
        align="center">
      </el-table-column>
      <el-table-column label="授权店铺" align="center">
        <el-table-column
          prop="authLowPrice"
          label="低价数"
          min-width="244"
          align="center">
        </el-table-column>
        <el-table-column
          prop="authImg"
          label="盗图数"
          min-width="244" align="center">
        </el-table-column>
      </el-table-column>
      <el-table-column label="非授权店铺" align="center">
        <el-table-column
          prop="noAuthLowPrice"
          label="低价数"
          min-width="244" align="center">
        </el-table-column>
        <el-table-column
          prop="noAuthImg"
          label="盗图数"
          min-width="244" align="center">
        </el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData3: [{
        platform: '淘宝',
        name: '王小虎',
        noAuthLowPrice: '上海',
        noAuthImg: '普陀区',
        authLowPrice: '31312',
        authImg: 200333
      }, {
        platform: '天猫',
        name: '王小虎',
        noAuthLowPrice: '上海',
        noAuthImg: '普陀区',
        authLowPrice: '2523',
        authImg: 200333
      }, {
        platform: '京东',
        name: '王小虎',
        noAuthLowPrice: '上海',
        noAuthImg: '普陀区',
        authLowPrice: '9976',
        authImg: 200333
      }]
    }
  }
}
</script>

<style lang="less">
</style>
