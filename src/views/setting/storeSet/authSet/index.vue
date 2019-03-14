<template>
  <div class="auth-set">
    <content-range :rowList="rowList" @callBack="search"></content-range>
    <div class="store-btns">
      <el-button type="primary" size="medium" @click="showAddDialog">新建店铺</el-button>
      <el-button type="primary" size="medium">批量导入</el-button>
    </div>
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
            <el-dropdown trigger="click" @command="handleCommand">
              <i class="el-icon-more more-rotate"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a">编辑</el-dropdown-item>
                <el-dropdown-item command="b">取消授权</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column>
      </epoint-table>
      <epoint-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagingConfig.page" :page-size="pagingConfig.size" :total="pagingConfig.total">
      </epoint-pagination>
    </div>
    <diaAddShop :config="addConfig" @sureAdd="sureAdd" @close="addDialogClose"></diaAddShop>
  </div>
</template>

<script>
import contentRange from '@/components/content/contentRange/index.vue'
import diaAddShop from '@/components/dialogs/diaAddShop.vue'
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
            label: '店铺类型',
            options: [],
            model: 'storeType',
            optionsLabel: 'name',
            optionsValue: 'id'
          }
        ]
      ],
      addConfig: {
        title: '新建店铺',
        visible: false
      }
    }
  },
  props: {
  },
  components: {
    contentRange,
    diaAddShop
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
      console.log('kkk')
      // this.$emit('toSKU')
      this.$router.push('/channel/commodity/skuDetail')
    },
    showAddDialog () {
      this.addConfig.visible = true
    },
    sureAdd (formdata) {
      console.log(formdata)
    },
    addDialogClose () {
      this.addConfig.visible = false
    },
    handleCommand (str) {
      str === 'a' ? this.addConfig.visible = true : this.addConfig.visible = false
      if (str === 'b') {
        this.$alert('AAA店铺为自营店，取消授权后，部分数据分析将受影响 确认是否取消授权？', '取消授权提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${action}`
            })
          }
        })
      }
    }
  }
}

</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '~assets/styles/variables';
.auth-set {
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
