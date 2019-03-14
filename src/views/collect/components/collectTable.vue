<template>
  <div class="collect-table">
    <epoint-table :data="data" :showIndex="true" :showItem="true" :showSelection="false" :current-page="pagingConfig.page" :page-size="pagingConfig.size" @showTableDialog="showTableDialog">
      <el-table-column width="168" label="商品主图">
        <template slot-scope="scope">
          <img src="" alt="">
        </template>
      </el-table-column>
      <el-table-column width="168" label="商品名称">
        <template slot-scope="scope">
          <p class="color-blue"><a target="_blank" :href="scope.row.url">{{scope.row.title}}</a></p>
        </template>
      </el-table-column>
      <el-table-column width="108" label="平台" prop="channelName"></el-table-column>
      <el-table-column width="116" label="销售价" prop="price"></el-table-column>
      <el-table-column width="116" label="活动价" prop="price"></el-table-column>
      <el-table-column width="116" label="近30天售出" prop="salesQty"></el-table-column>
      <el-table-column width="116" label="总销量" prop="totalSalesQty"></el-table-column>
      <el-table-column width="116" label="总销售额" prop="totalSalesQty"></el-table-column>
      <el-table-column label="活动" prop="activityCoupon"></el-table-column>

      <el-table-column width="116" label="库存" prop="payCount"></el-table-column>
      <el-table-column width="116" label="收藏商品数" prop="salesQty"></el-table-column>
      <el-table-column width="116" label="店铺名称" prop="payCount"></el-table-column>
      <el-table-column width="116" label="旺旺号" prop="salesQty"></el-table-column>
      <el-table-column width="116" label="发货地" prop="salesQty"></el-table-column>
      <el-table-column width="116" label="付款人数" prop="payCount"></el-table-column>
      <el-table-column width="116" label="所属类目" prop="salesQty"></el-table-column>
      <el-table-column width="116" label="品牌名称" prop="salesQty"></el-table-column>
      <template slot="selfempty">
        <div class="nodataTip">
          <img src="~assets/images/common/noData.png" alt="" />
          <p class="nodata-text">未开始采集，请先进行<span>实时采集</span></p>
        </div>
      </template>
    </epoint-table>
    <epoint-pagination v-if="pagingConfig.total>pagingConfig.size" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagingConfig.page" :page-size="pagingConfig.size" :total="pagingConfig.total">
    </epoint-pagination>
  </div>
</template>

<script>
// import epointTable from '@/components/epoint-ui/epointTable/index.vue'
// import epointPagination from '@/components/epoint-ui/epointPagination/index.vue'
// import mock from '@/mock/mock-for-table'
export default {
  props: {
    tableData: {
      type: Array
    },
    pageConfig: {
      type: Object
    }
  },
  data () {
    return {
      // 表格数据
      data: this.tableData || [],
      // 分页数据
      pagingConfig: Object.assign({
        page: 1,
        size: 10,
        total: 100
      }, this.pageConfig)
    }
  },
  components: {
    // epointTable,
    // epointPagination
  },
  mounted () {
    this.getCommodityData()
    this.init()
  },
  computed: {
  },
  watch: {
    'tableData' () {
      console.log(this.tableData)
      console.log(this.pagingConfig)
      // this.pagingConfig.total = 132
      this.pagingConfig = this.pageConfig
      this.getCommodityData()
    },
    'pagingConfig.total' () {
      console.log(this.pagingConfig)
      this.pagingConfig = this.pageConfig
    }
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
      this.$emit('handleSizeChange', this.pagingConfig)
      // this.getCommodityData()
    },
    // 页码切换
    handleCurrentChange (val) {
      this.pagingConfig.page = val
      this.$emit('handleCurrentChange', this.pagingConfig)
      // this.getCommodityData()
    },
    // 获取商品管理列表
    getCommodityData () {
      this.data = this.tableData
    },
    showTableDialog () {
      console.log('showTableDialog')
      this.$emit('showTableDialog')
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '~assets/styles/variables';
.collect-table {
  padding: 15px 0px 0px;
}
</style>
<style lang="less" rel="stylesheet/less">
.collect-table {
  .el-table__fixed {
    border-right: 1px solid #e1e5ee;
    width: 66px;
  }
  .color-blue {
    color: #5858f1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .nodataTip {
    .nodata-text {
      position: absolute;
      width: 100%;
      bottom: 100px;
      span {
        color: #5858f1;
        cursor: pointer;
      }
    }
  }
}
</style>
