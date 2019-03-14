<template>
  <div class="content-table skuDetail-table">
    <epoint-table :data="data" :showIndex="true" :showItem="true" :config="ckBoxConfig" @sure="sureCkBox" :showSelection="true" :current-page="pagingConfig.page" :page-size="pagingConfig.size">
      <el-table-column width="90" label="商品主图">
        <template scope="scope">
          <img :src="scope.row.pic_url" />
        </template>
      </el-table-column>
      <el-table-column width="240" label="商品名称">
        <template scope="scope">
          <span class="g-name">{{scope.row.title}}</span>
        </template>
      </el-table-column>
      <el-table-column width="70" label="平台">
        <template scope="scope">
          <span>{{scope.row.channel}}</span>
        </template>
      </el-table-column>
      <el-table-column width="100" label="销售价">
        <template scope="scope">
          <span>{{scope.row.price}}</span>
        </template>
      </el-table-column>
      <el-table-column width="100" label="活动价" :render-header="renderHeader">
        <template scope="scope">
          <span>{{scope.row.price}}</span>
        </template>
      </el-table-column>
      <el-table-column width="120" label="昨日销量" sortable :render-header="renderHeader">
        <template scope="scope">
          <span>{{scope.row.daySalesQty}}</span>
        </template>
      </el-table-column>
      <el-table-column width="180" label="昨日销售额" sortable :render-header="renderHeader">
        <template scope="scope">
          <span>{{scope.row.daySalesQty}}</span>
        </template>
      </el-table-column>
      <el-table-column width="130" label="近30天销量" sortable>
        <template scope="scope">
          <span>{{scope.row.sales_qty}}</span>
        </template>
      </el-table-column>
      <el-table-column width="100" label="总销量" sortable :render-header="renderHeader">
        <template scope="scope">
          <span>{{scope.row.totalSalesQty}}</span>
        </template>
      </el-table-column>
      <el-table-column width="160" label="总销售额" sortable :render-header="renderHeader">
        <template scope="scope">
          <span>{{scope.row.salesAmount}}</span>
        </template>
      </el-table-column>
      <el-table-column width="200" label="活动">
        <template scope="scope">
          <span>{{scope.row.promotion}}</span>
        </template>
      </el-table-column>
      <el-table-column width="100" label="库存">
        <template scope="scope">
          <span>{{scope.row.inventory}}</span>
        </template>
      </el-table-column>
      <el-table-column width="100" label="收藏商品数">
        <template scope="scope">
          <span>{{scope.row.favorite_count}}</span>
        </template>
      </el-table-column>
      <el-table-column width="200" label="店铺名称">
        <template scope="scope">
          <span>
            {{scope.row.shopName}}
            <el-tag :type="scope.row.auth_flag?'success':'info'" size="mini">{{scope.row.auth_flag?'取消授权':'点击授权'}}</el-tag>
          </span>
        </template>
      </el-table-column>
      <el-table-column width="100" label="旺旺号">
        <template scope="scope">
          <span>{{scope.row.favorite_count}}</span>
        </template>
      </el-table-column>
      <el-table-column width="120" label="所在省市">
        <template scope="scope">
          <span>{{scope.row.state}}{{scope.row.city}}</span>
        </template>
      </el-table-column>
      <el-table-column width="100" label="付款人数">
        <template scope="scope">
          <span>11</span>
        </template>
      </el-table-column>
      <el-table-column width="100" label="所属类目">
        <template scope="scope">
          <span>11</span>
        </template>
      </el-table-column>
      <el-table-column width="120" label="品牌名称">
        <template scope="scope">
          <span>{{scope.row.channelBrand}}</span>
        </template>
      </el-table-column>
    </epoint-table>
    <epoint-pagination v-if="pagingConfig.total>pagingConfig.size" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagingConfig.page" :page-size="pagingConfig.size" :total="pagingConfig.total">
    </epoint-pagination>
    <!-- <dia-ckbox :config="ckBoxConfig" @sure="sureCkBox"></dia-ckbox> -->
  </div>
</template>

<script>
import diaCkbox from '@/components/dialogs/diaCkbox.vue'
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
        total: 3
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
    renderHeader (h, { column, $index }) {
      console.log(column)
      return (
        <span>
          <span>{column.label}</span>
          <el-popover
            placement="top-start"
            title="标题"
            width="200"
            trigger="hover"
            offset="100"
            content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
            <i class="el-icon-warning i-header" slot="reference"></i>
          </el-popover>
        </span>
      )
    },
    // 获取商品管理列表
    getCommodityData () {
      this.data = mock.data.records
    },
    // showTableDialog () {
    //   console.log(56)
    //   this.ckBoxConfig.visible = true
    // },
    sureCkBox (emitdata) {
      console.log(emitdata)
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" >
@import '~assets/styles/variables';
.skuDetail-table {
  .i-header {
    color: #ccccd9;
    margin-left: 5px;
  }
  .g-name {
    color: #5858f1;
  }
}
</style>
