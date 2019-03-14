<template>
  <div class="lowPriceManage">
    <content-range :rowList="rowList" @callBack="search"></content-range>
    <div class="content-table">
      <el-button class="download-btn" size="medium" type="info">下载</el-button>
      <epoint-table :data="data" :showIndex="true" :showItem="true" :config="ckBoxConfig" @sure="sureCkBox" :showSelection="false" :current-page="pagingConfig.page" :page-size="pagingConfig.size" @showTableDialog="showTableDialog">
        <el-table-column min-width="100" label="平台" prop="channelName"></el-table-column>
        <el-table-column width="200" label="商品名称" prop="content">
          <template slot-scope="scope">
            <p style="color: #5858F1;">{{scope.row.content}}</p>
          </template>
        </el-table-column>
        <el-table-column min-width="136" label="销售价" prop="totalSalesQty"></el-table-column>
        <el-table-column min-width="136" label="主图优惠价" prop="salesQty"></el-table-column>
        <el-table-column min-width="110" label="低价区间" prop="daySalesQty"></el-table-column>
        <el-table-column min-width="150" label="截图" prop="daySalesQty"></el-table-column>
        <el-table-column min-width="136" sortable label="抓取时间" prop="daySalesQty"></el-table-column>
        <el-table-column min-width="110" label="计划名称" prop="daySalesQty"></el-table-column>
        <el-table-column min-width="110" label="店铺名称" prop="daySalesQty"></el-table-column>
        <el-table-column min-width="150" label="旺旺号" prop="daySalesQty"></el-table-column>
        <el-table-column min-width="136" sortable label="所在省市" prop="daySalesQty"></el-table-column>
        <el-table-column min-width="110" label="店铺等级" prop="daySalesQty"></el-table-column>
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
  </div>
</template>

<script>
import contentRange from '@/components/content/contentRange/index.vue'
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
      rowList: [
        [
          {
            type: 'input',
            label: '计划名称',
            model: 'commodityName'
          },
          {
            type: 'date',
            label: '抓取时间',
            model: 'channel',
            optionsLabel: 'name',
            optionsValue: 'id'
          }
        ],
        [
          {
            type: 'input',
            label: '商品名称',
            model: 'shopName',
            placeholder: '请输入商品名称'
          },
          {
            type: 'select',
            label: '平台',
            model: 'activity',
            options: [
              {
                label: '全部',
                value: 0
              },
              {
                label: '有',
                value: 1
              },
              {
                label: '无',
                value: 2
              }
            ]
          }
        ]
      ],
      ckBoxConfig: {
        list: [
          { id: '1', name: '计划名称' },
          { id: '2', name: '店铺名称' },
          { id: '3', name: '旺旺号' },
          { id: '4', name: '所在省市' },
          { id: '5', name: '店铺等级' }
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
    contentRange,
    diaCkbox
  },
  mounted () {
    this.getCommodityData()
    this.init()
  },
  computed: {},
  watch: {},
  methods: {
    // range回调
    search (value) {
      console.log(value, 'fromCallBack')
    },
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
.lowPriceManage {
  .more-rotate {
    transform: rotateZ(90deg);
  }
  .content-table {
    padding: 20px;
    .download-btn {
      margin-bottom: 20px;
    }
  }
}
</style>
