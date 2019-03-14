<template>
  <div class="goodsListTable">
    <div class="content-table">
      <el-button class="download-btn" size="medium" type="info">下载</el-button>
      <epoint-table :data="data" :showIndex="true" :showItem="false" :showSelection="false" :current-page="pagingConfig.page" :page-size="pagingConfig.size">
        <el-table-column min-width="136" label="平台" prop="totalSalesQty">
          <template slot-scope="scope">
            <p>淘宝</p>
          </template>
        </el-table-column>
        <el-table-column min-width="100" label="商品名称" prop="channelName">
          <template slot-scope="scope">
            <p>供电分局</p>
          </template>
        </el-table-column>
        <el-table-column min-width="136" label="sku描述" prop="salesQty">
          <template slot-scope="scope">
            <p class="colorBlue">1000</p>
          </template>
        </el-table-column>
        <el-table-column min-width="140" label="sku单价" prop="daySalesQty">
          <template slot-scope="scope">
            <p class="colorBlue">2000</p>
          </template>
        </el-table-column>
        <el-table-column min-width="150" label="sku促销优惠价" prop="daySalesQty">
          <template slot-scope="scope">
            <p>123</p>
          </template>
        </el-table-column>
        <el-table-column min-width="136" label="sku主图优惠价" prop="daySalesQty">
          <template slot-scope="scope">
            <p>去设置</p>
          </template>
        </el-table-column>
        <el-table-column min-width="136" label="sku库存" prop="daySalesQty">
          <template slot-scope="scope">
            <p>满100减20 满500减50赠代… 满1000减120</p>
          </template>
        </el-table-column>
      </epoint-table>
      <epoint-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagingConfig.page" :page-size="pagingConfig.size" :total="pagingConfig.total">
      </epoint-pagination>
    </div>
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
  props: {},
  components: {},
  mounted () {
    this.getCommodityData()
  },
  computed: {},
  watch: {},
  methods: {
    // 获取商品管理列表
    getCommodityData () {
      this.data = mock
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
    }
  }
}

</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '~assets/styles/variables';
.content-table {
  padding: 20px;
  .download-btn {
    margin-bottom: 20px;
  }
}
</style>
