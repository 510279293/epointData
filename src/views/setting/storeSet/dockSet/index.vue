<template>
  <div class="dock-set">
    <content-range :rowList="rowList" @callBack="search"></content-range>
    <div class="storeSet-table">
      <epoint-table :data="data" :showIndex="true" :showItem="false" :showSelection="false" :current-page="pagingConfig.page" :page-size="pagingConfig.size">
        <el-table-column width="90" label="平台">
          <template scope="scope">
            <span>某宝</span>
          </template>
        </el-table-column>
        <el-table-column width="240" label="店铺名称">
          <template scope="scope">
            <span>隔壁老王家的店</span>
          </template>
        </el-table-column>
        <el-table-column label="旺旺号">
          <template scope="scope">
            <span>隔壁老王家的店</span>
          </template>
        </el-table-column>
        <el-table-column width="100" label="店铺类型">
          <template scope="scope">
            <span>授权店</span>
          </template>
        </el-table-column>
        <el-table-column label="创建人">
          <template scope="scope">
            <span>隔壁老王家</span>
          </template>
        </el-table-column>
        <el-table-column label="创建时间">
          <template scope="scope">
            <span>2018/08/09 12:30:30</span>
          </template>
        </el-table-column>
        <el-table-column width="40" fixed="right">
          <template scope="scope">
            <el-dropdown trigger="click">
              <i class="el-icon-more more-rotate"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>对接</el-dropdown-item>
                <el-dropdown-item @click="toSKU">取消对接</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column>
      </epoint-table>
      <epoint-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagingConfig.page" :page-size="pagingConfig.size" :total="pagingConfig.total">
      </epoint-pagination>
    </div>
  </div>
</template>

<script>
import contentRange from '@/components/content/contentRange/index.vue'
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
        total: 100
      },
      rowList: [
        [
          {
            type: 'select',
            label: '平台',
            options: [],
            model: 'channel',
            optionsLabel: 'name',
            optionsValue: 'id'
          },
          {
            type: 'input',
            label: '商品名称/旺旺号',
            model: 'commodityName'
          },
          {
            type: 'select',
            label: '对接状态',
            options: [],
            model: 'storeType',
            optionsLabel: 'name',
            optionsValue: 'id'
          }
        ]
      ]
    }
  },
  props: {
  },
  components: {
    contentRange
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
      this.data = mock.data.records
    },
    toSKU () {
      // this.$emit('toSKU')
      this.$router.push('/channel/commodity/skuDetail')
    }
  }
}

</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '~assets/styles/variables';
.dock-set {
  .storeSet-table {
    padding: 20px;
    .more-rotate {
      transform: rotateZ(90deg);
    }
  }
  .store-btns {
    box-sizing: border-box;
    padding: 20px;
    padding-bottom: 0px;
  }
}
</style>
