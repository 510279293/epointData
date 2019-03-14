<template>
  <div class="shopTable content-table">
    <epoint-table :data="data" :showIndex="true" :showItem="true" :config="ckBoxConfig" @sure="sureCkBox" :showSelection="true" :current-page="pagingConfig.page" :page-size="pagingConfig.size" @showTableDialog="showTableDialog">
      <el-table-column width="200" label="商品主图" prop="content">
        <template slot-scope="scope">
          <img src="" alt="">
        </template>
      </el-table-column>
      <el-table-column width="200" label="商品名称" prop="content">
        <template slot-scope="scope">
          <p style="color: #5858F1;">{{scope.row.content}}</p>
        </template>
      </el-table-column>
      <el-table-column width="100" label="平台" prop="channelName"></el-table-column>
      <el-table-column width="136" label="销售价" prop="totalSalesQty"></el-table-column>
      <el-table-column width="110" sortable label="活动价" prop="daySalesQty"></el-table-column>
      <el-table-column width="150" sortable label="昨日销量" prop="daySalesQty"></el-table-column>
      <el-table-column width="136" sortable label="昨日销售额" prop="daySalesQty"></el-table-column>
      <el-table-column width="110" sortable label="近30天销量" prop="daySalesQty"></el-table-column>
      <el-table-column width="110" sortable label="总销量" prop="daySalesQty"></el-table-column>
      <el-table-column width="110" sortable label="总销售额" prop="daySalesQty"></el-table-column>
      <el-table-column width="150" sortable label="活动" prop="daySalesQty"></el-table-column>
      <el-table-column width="136" sortable label="库存" prop="daySalesQty"></el-table-column>
      <el-table-column width="110" sortable label="收藏商品数" prop="daySalesQty"></el-table-column>
      <el-table-column width="110" sortable label="店铺名称" prop="daySalesQty"></el-table-column>
      <el-table-column width="136" sortable label="旺旺号" prop="daySalesQty"></el-table-column>
      <el-table-column width="110" sortable label="所在省市" prop="daySalesQty"></el-table-column>
      <el-table-column width="110" sortable label="付款人数" prop="daySalesQty"></el-table-column>
      <el-table-column width="220" label="所属类目" prop="content">
        <template slot-scope="scope">
          123
        </template>
      </el-table-column>
      <el-table-column width="110" sortable label="品牌名称" prop="daySalesQty"></el-table-column>
      <el-table-column width="40" fixed="right">
        <template slot-scope="scope">
          <el-dropdown trigger="click" @command="handleCommand">
            <i class="el-icon-more more-rotate"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="a">统计分析</el-dropdown-item>
              <el-dropdown-item command="b">查看SKU</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>
    </epoint-table>
    <div class="foot-page">
      <p>剩余可关注<span class="red">3</span>个店铺</p>
      <epoint-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagingConfig.page" :page-size="pagingConfig.size" :total="pagingConfig.total">
      </epoint-pagination>
    </div>
    <!-- <dia-ckbox :config="ckBoxConfig" @sure="sureCkBox"></dia-ckbox> -->
  </div>
</template>

<script>
import diaCkbox from '@/components/dialogs/diaCkbox.vue'
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
      },
      ckBoxConfig: {
        list: [
          { id: '1', name: '总销售额' },
          { id: '2', name: '近30天销量' },
          { id: '3', name: '品牌名称' },
          { id: '4', name: '商品类目' },
          { id: '5', name: '店铺名称' },
          { id: '6', name: '收藏商品数' },
          { id: '7', name: '旺旺号' },
          { id: '8', name: '所在省市' },
          { id: '9', name: '付款人数' },
          { id: '10', name: '库存' }
        ],
        title: '店铺监控显示字段设置',
        tip: 'ghdfjgfdkg',
        visible: false,
        emitdata: {
          key: 'popd',
          value: ['2', '4']
        }
      }
    }
  },
  props: {
  },
  components: {
    diaCkbox
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
    },
    showTableDialog () {
      this.ckBoxConfig.visible = true
    },
    sureCkBox (emitdata) {
      console.log(emitdata)
    },
    handleCommand (command) {
      if (command === 'a') {
        this.$router.push('/channel/commodity/statisticalDetail')
      }
      if (command === 'b') {
        this.$router.push('/channel/commodity/skuDetail')
      }
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '~assets/styles/variables';
.content-table {
  padding: 20px;
  .more-rotate {
    transform: rotateZ(90deg);
  }
  .foot-page {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    .red {
      color: #fc3c6a;
    }
  }
}
</style>
