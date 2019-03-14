<template>
  <div class="goodsListTable">
    <div class="content-table">
      <el-button class="download-btn" size="medium" type="info">下载</el-button>
      <epoint-table :data="data" :showIndex="true" :showItem="true" :config="ckBoxConfig" @sure="sureCkBox" :showSelection="false" :current-page="pagingConfig.page" :page-size="pagingConfig.size">
        <el-table-column min-width="150" label="商品主图" prop="content">
          <template slot-scope="scope">
            <p><img src="" alt=""></p>
          </template>
        </el-table-column>
        <el-table-column min-width="100" label="商品名称" prop="channelName">
          <template slot-scope="scope">
            <p>供电分局</p>
          </template>
        </el-table-column>
        <el-table-column min-width="136" label="平台" prop="totalSalesQty">
          <template slot-scope="scope">
            <p>淘宝</p>
          </template>
        </el-table-column>
        <el-table-column min-width="136" label="销售价" prop="salesQty">
          <template slot-scope="scope">
            <p class="colorBlue">1000</p>
          </template>
        </el-table-column>
        <el-table-column min-width="140" label="活动价" prop="daySalesQty">
          <template slot-scope="scope">
            <p class="colorBlue">2000</p>
          </template>
        </el-table-column>
        <el-table-column min-width="150" sortable label="近30天售出" prop="daySalesQty">
          <template slot-scope="scope">
            <p>123</p>
          </template>
        </el-table-column>
        <el-table-column min-width="136" sortable label="总销量" prop="daySalesQty">
          <template slot-scope="scope">
            <p>去设置</p>
          </template>
        </el-table-column>
        <el-table-column min-width="136" sortable label="总销售额" prop="daySalesQty">
          <template slot-scope="scope">
            <p>12345</p>
          </template>
        </el-table-column>
        <el-table-column min-width="136" label="活动" prop="daySalesQty">
          <template slot-scope="scope">
            <p>满100减20 满500减50赠代… 满1000减120</p>
          </template>
        </el-table-column>
        <el-table-column min-width="136" label="库存" prop="daySalesQty">
          <template slot-scope="scope">
            <p>123</p>
          </template>
        </el-table-column>
        <el-table-column min-width="136" label="收藏商品数" prop="daySalesQty">
          <template slot-scope="scope">
            <p>233</p>
          </template>
        </el-table-column>
        <el-table-column min-width="136" label="店铺名称" prop="daySalesQty">
          <template slot-scope="scope">
            <p>妍妍幸福店</p>
          </template>
        </el-table-column>
        <el-table-column min-width="136" label="旺旺号" prop="daySalesQty">
          <template slot-scope="scope">
            <p>青森森马店</p>
          </template>
        </el-table-column>
        <el-table-column min-width="136" label="所在省市" prop="daySalesQty">
          <template slot-scope="scope">
            <p>河南南阳</p>
          </template>
        </el-table-column>
        <el-table-column min-width="136" label="付款人数" prop="daySalesQty">
          <template slot-scope="scope">
            <p>123</p>
          </template>
        </el-table-column>
        <el-table-column min-width="136" label="所属类目" prop="daySalesQty">
          <template slot-scope="scope">
            <p>商品链接</p>
          </template>
        </el-table-column>
        <el-table-column min-width="136" label="品牌名称" prop="daySalesQty">
          <template slot-scope="scope">
            <p>好商品</p>
          </template>
        </el-table-column>
      </epoint-table>
      <epoint-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagingConfig.page" :page-size="pagingConfig.size" :total="pagingConfig.total">
      </epoint-pagination>
      <!-- <dia-ckbox :config="ckBoxConfig" @sure="sureCkBox"></dia-ckbox> -->
    </div>
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
  props: {},
  components: {
    diaCkbox
  },
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
    },
    showTableDialog () {
      console.log(56)
      this.ckBoxConfig.visible = true
    },
    sureCkBox (emitdata) {
      console.log(emitdata)
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
