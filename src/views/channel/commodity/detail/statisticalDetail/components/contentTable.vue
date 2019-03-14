<template>
  <div class="reason-trans">
    <div class="file-title">
      <span class="reason-title">原因透视</span>
    </div>
    <div class="table">
      <el-table :data="data" :showIndex="false" :showItem="false" :showSelection="false" :current-page="pagingConfig.page" :page-size="pagingConfig.size">
        <el-table-column width="120" label="日期">
          <template scope="scope">
            <span>2018/08/01</span>
          </template>
        </el-table-column>
        <el-table-column width="240" label="销售额">
          <template scope="scope">
            <span>￥300.00</span>
          </template>
        </el-table-column>
        <el-table-column width="70" label="销售量">
          <template scope="scope">
            <span>2000</span>
          </template>
        </el-table-column>
        <el-table-column width="100" label="活动改动">
          <template scope="scope">
            <span>有</span>
          </template>
        </el-table-column>
        <el-table-column width="100" label="价格改动">
          <template scope="scope">
            <span>无</span>
          </template>
        </el-table-column>
        <el-table-column width="120" label="标题改动">
          <template scope="scope">
            <span>有</span>
          </template>
        </el-table-column>
        <el-table-column label="主图改动">
          <template scope="scope">
            <span>无</span>
          </template>
        </el-table-column>

        <el-table-column width="40" fixed="right">
          <template scope="scope">
            <el-dropdown trigger="click" @command="handleCommand">
              <i class="el-icon-more more-rotate"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item :command="scope.row">查看原因</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <epoint-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagingConfig.page" :page-size="pagingConfig.size" :total="pagingConfig.total">
    </epoint-pagination>
    <diaSeeReason :config="diaConfig" @close="diaClose"></diaSeeReason>
  </div>
</template>

<script>
import diaSeeReason from './diaSeeReason.vue'
import mock from '@/mock/qudao.json'
import { mapActions } from 'vuex'
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
      diaConfig: {
        visible: false
      }
    }
  },
  props: {
  },
  components: {
    diaSeeReason
  },
  mounted () {
    this.getCommodityData()
    this.init()
    setTimeout(() => {
      this.getTableHeight()
    }, 500)
  },
  computed: {
  },
  watch: {
  },
  methods: {
    ...mapActions(['getTableHeight']),
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
    handleCommand (scope) {
      console.log(scope)
      this.diaConfig.visible = true
    },
    diaClose () {
      this.diaConfig.visible = false
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '~assets/styles/variables';
@import '~assets/styles/qkwyq';
.reason-trans {
  .file-title {
    .w100;
    .hg(68px);
    font-size: 14px;
    color: #5a5c5e;
    position: relative;
    .reason-title {
      font-size: 20px;
      font-weight: 500;
    }
  }
  .table {
    border: 1px solid #ebeef5;
  }
  .more-rotate {
    transform: rotateZ(90deg);
  }
}
</style>
<style lang="less">
.reason-trans {
  .table {
    th {
      background-color: #f5f8fa;
    }
  }
}
</style>
