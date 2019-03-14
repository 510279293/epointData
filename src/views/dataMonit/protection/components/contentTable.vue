<template>
  <div class="content-table">
    <epoint-table :data="data" :showIndex="true" :showItem="true" :showSelection="false" :current-page="pagingConfig.page" :page-size="pagingConfig.size">
      <el-table-column min-width="100" label="平台" prop="channelName"></el-table-column>
      <el-table-column width="200" label="商品名称" prop="content">
        <template slot-scope="scope">
          <p style="color: #5858F1;">{{scope.row.content}}</p>
        </template>
      </el-table-column>
      <el-table-column min-width="136" label="销售价" prop="totalSalesQty"></el-table-column>
      <el-table-column min-width="136" label="主图优惠价" prop="salesQty"></el-table-column>
      <el-table-column min-width="110" sortable label="低价区间" prop="daySalesQty"></el-table-column>
      <el-table-column min-width="150" sortable label="截图" prop="daySalesQty"></el-table-column>
      <el-table-column min-width="136" sortable label="抓取时间" prop="daySalesQty"></el-table-column>
      <el-table-column min-width="110" sortable label="计划名称" prop="daySalesQty"></el-table-column>
    </epoint-table>
    <epoint-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagingConfig.page" :page-size="pagingConfig.size" :total="pagingConfig.total">
    </epoint-pagination>
  </div>
</template>

<script>
import mock from '@/mock/mock-for-table1'
export default {
  data () {
    return {
      // 表格数据
      data: [],
      // 分页数据
      pagingConfig: {
        page: 1,
        size: 10,
        total: 100
      }
    }
  },
  props: {
  },
  components: {
  },
  mounted () {
    this.getCommodityData()
    this.init()
  },
  computed: {
  },
  watch: {
  },
  methods: {
    // 初始化数据
    init () {
      this.pagingConfig.page = 1
      this.getCommodityData()
    },
    // 显示数量切换
    handleSizeChange (val) {
      this.pagingConfig.size = val
      this.getCommodityData()
    },
    // 页码切换
    handleCurrentChange (val) {
      this.pagingConfig.page = val
      this.getCommodityData()
    },
    // 获取商品管理列表
    getCommodityData () {
      this.data = mock
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '~assets/styles/variables';
.content-table {
  padding: 20px;
}
</style>
