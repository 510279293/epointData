<template>
  <div class="planList">
    <content-range :rowList="rowList" @callBack="search"></content-range>
    <epoint-btn :width="'116px'" style="margin: 20px 20px 0;">新建监控计划</epoint-btn>
    <div class="content-table">
      <epoint-table :data="data" :showIndex="true" :showItem="false" :showSelection="false" :current-page="pagingConfig.page" :page-size="pagingConfig.size">
        <el-table-column min-width="150" label="计划名称" prop="content">
          <template slot-scope="scope">
            <p @click="diaMonitPlanShow" style="color: #5858F1;">计划名称A</p>
          </template>
        </el-table-column>
        <el-table-column min-width="100" label="监控周期" prop="channelName">
          <template slot-scope="scope">
            <p>每周一 12:30</p>
          </template>
        </el-table-column>
        <el-table-column min-width="136" label="监控类型" prop="totalSalesQty">
          <template slot-scope="scope">
            <p>商品链接</p>
          </template>
        </el-table-column>
        <el-table-column min-width="136" label="创建人" prop="salesQty">
          <template slot-scope="scope">
            <p>张三</p>
          </template>
        </el-table-column>
        <el-table-column min-width="140" label="创建时间" prop="daySalesQty">
          <template slot-scope="scope">
            <p>2018/08/09 12:30:30</p>
          </template>
        </el-table-column>
        <el-table-column min-width="150" label="计划状态" prop="daySalesQty">
          <template slot-scope="scope">
            <p>监控中</p>
          </template>
        </el-table-column>
        <el-table-column width="40" fixed="right">
          <template slot-scope="scope">
            <el-dropdown trigger="click" @command="handleCommand">
              <i class="el-icon-more more-rotate"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a">查看结果</el-dropdown-item>
                <el-dropdown-item command="b">暂停</el-dropdown-item>
                <el-dropdown-item command="c">删除</el-dropdown-item>

              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column>
      </epoint-table>
      <epoint-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagingConfig.page" :page-size="pagingConfig.size" :total="pagingConfig.total">
      </epoint-pagination>
      <diaMonitPlan :config="monitPlanConfig" @sure="sureMonitPlan"></diaMonitPlan>
    </div>
  </div>
</template>

<script>
import contentRange from '@/components/content/contentRange/index.vue'
import diaMonitPlan from '@/components/dialogs/diaMonitPlan.vue'
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
            type: 'select',
            label: '计划状态',
            options: [],
            model: 'channel',
            optionsLabel: 'name',
            optionsValue: 'id'
          }
        ]
      ],
      monitPlanConfig: {
        list: [
          { id: '1', name: '上海' },
          { id: '2', name: '北京' },
          { id: '3', name: '广州' },
          { id: '4', name: '深圳' }
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
    diaMonitPlan
  },
  mounted () {
    this.getCommodityData()
    this.init()
  },
  computed: {},
  watch: {},
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
    // range回调
    search (value) {
      console.log(value, 'fromCallBack')
    },
    handleCommand (command) {
      if (command === 'a') {
        this.$emit('planSeeResult', 'planSeeResult')
      }
      if (command === 'b') {
        // this.$router.push('/channel/commodity/skuDetail')
      }
    },
    diaMonitPlanShow () {
      console.log(this.monitPlanConfig)
      // this.ckBoxConfig.visible = true
      this.monitPlanConfig.visible = true
    },
    sureMonitPlan () { }
  }
}

</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '~assets/styles/variables';
.planList {
  .content-table {
    padding: 20px;
  }
  .more-rotate {
    transform: rotateZ(90deg);
  }
}
</style>
