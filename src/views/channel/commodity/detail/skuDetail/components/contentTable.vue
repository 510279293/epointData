<template>
  <div class="content-table skuDetail-table">
    <epoint-table :data="data" :showIndex="true" :showItem="false" :showSelection="false" :current-page="pagingConfig.page" :page-size="pagingConfig.size">
      <el-table-column width="240" label="SKU规格">
        <template scope="scope">
          <span>鞋码:S（35 38）;颜色分类:蓝黑色;</span>
        </template>
      </el-table-column>
      <el-table-column width="240" label="SKU销售价">
        <template scope="scope">
          <span>￥300.00</span>
        </template>
      </el-table-column>

      <el-table-column width="240" label="SKU促销优惠价">
        <template scope="scope">
          <span>￥300.00</span>
        </template>
      </el-table-column>
      <el-table-column width="240" label="SKU主图优惠价">
        <template scope="scope">
          <span>￥300.00</span>
        </template>
      </el-table-column>
      <el-table-column label="SKU库存">
        <template scope="scope">
          <span>300</span>
        </template>
      </el-table-column>
    </epoint-table>
    <epoint-pagination v-if="pagingConfig.total>pagingConfig.size" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagingConfig.page" :page-size="pagingConfig.size" :total="pagingConfig.total">
    </epoint-pagination>
  </div>
</template>

<script>
import mock from '@/mock/qudao.json'
export default {
  data () {
    return {
      // 表格数据
      data: [],
      // 分页数据
      pagingConfig: {
        page: 1,
        size: 10,
        total: 30
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
      this.data = mock.data.records
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '~assets/styles/variables';
.skuDetail-table {
}
</style>
