<template>
  <div class="shopTable content-table">
    <epoint-table :data="data" :showIndex="true" :showItem="true" :config="ckBoxConfig" @sure="sureCkBox" :showSelection="true" :current-page="pagingConfig.page" :page-size="pagingConfig.size" @showTableDialog="showTableDialog">
      <el-table-column width="200" label="店铺名称" prop="content">
        <template slot-scope="scope">
          <p style="color: #5858F1;">{{scope.row.content}}</p>
        </template>
      </el-table-column>
      <el-table-column width="100" label="平台" prop="channelName"></el-table-column>
      <el-table-column width="136" sortable label="相关商品数" prop="totalSalesQty"></el-table-column>
      <el-table-column width="110" sortable label="昨日销量" prop="daySalesQty"></el-table-column>
      <el-table-column width="150" sortable label="昨日销售额" prop="daySalesQty"></el-table-column>
      <el-table-column width="136" sortable label="近30天销量" prop="daySalesQty"></el-table-column>
      <el-table-column width="110" sortable label="总销量" prop="daySalesQty"></el-table-column>
      <el-table-column width="136" sortable label="总销量额" prop="daySalesQty"></el-table-column>
      <el-table-column width="136" label="旺旺号" prop="daySalesQty"></el-table-column>
      <el-table-column width="110" sortable label="店铺等级" prop="daySalesQty"></el-table-column>
      <el-table-column width="136" label="所在省市" prop="daySalesQty"></el-table-column>
      <el-table-column width="110" label="30天售后率" prop="daySalesQty"></el-table-column>
      <el-table-column width="136" label="30天纠纷率" prop="daySalesQty"></el-table-column>
      <el-table-column width="146" label="30天售后速度(天)" prop="daySalesQty"></el-table-column>
      <el-table-column width="220" label="店铺评分" prop="content">
        <template slot-scope="scope">
          描述4.8<i class="el-icon-upload2" style="color: #FF4E50"></i>
          服务4.8<i class="el-icon-upload2" style="color: #FF4E50"></i>
          物流4.8<i class="el-icon-download" style="color: #4AC98D"></i>
        </template>
      </el-table-column>
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
    <epoint-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagingConfig.page" :page-size="pagingConfig.size" :total="pagingConfig.total">
    </epoint-pagination>
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
          { id: '3', name: '店铺等级' },
          { id: '4', name: '店铺评分' },
          { id: '5', name: '所在省市' },
          { id: '6', name: '30天售后率' },
          { id: '7', name: '30天纠纷率' },
          { id: '8', name: '30天售后速度' }
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
}
</style>
