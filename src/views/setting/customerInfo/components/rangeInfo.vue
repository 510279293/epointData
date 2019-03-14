<template>
  <epoint-card class="rangeInfo">
    <div class="rangeInfo-item">
      <h3 class="info-title">品牌监控范围</h3>
      <el-table :data="data" showIndex="true" class="qd-table">
        <el-table-column width="120" label="品牌名称">
          <template scope="scope">
            <span>百丽</span>
          </template>
        </el-table-column>
        <el-table-column width="200" label="监控平台">
          <template scope="scope">
            <span>淘宝、天猫、京东</span>
          </template>
        </el-table-column>
        <el-table-column width="200" label="关键词">
          <template scope="scope">
            <span>10个</span>
          </template>
        </el-table-column>
        <el-table-column width="200" label="类目">
          <template scope="scope">
            <span>5个</span>
          </template>
        </el-table-column>
        <el-table-column label="价格区间">
          <template scope="scope">
            <span>¥100～200</span>
          </template>
        </el-table-column>
        <el-table-column label="一链多款">
          <template scope="scope">
            <span>是</span>
          </template>
        </el-table-column>
        <el-table-column label="监控类型">
          <template scope="scope">
            <span>自有品牌</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template scope="scope">
            <p class="colorBlue" @click="diaMonitPlanShow"><span>查看</span></p>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="rangeInfo-item">
      <h3 class="info-title">关键词监控范围</h3>
      <el-table :data="data" showIndex="true" class="qd-table">
        <el-table-column width="120" label="品牌名称">
          <template scope="scope">
            <span>百丽</span>
          </template>
        </el-table-column>
        <el-table-column width="200" label="监控平台">
          <template scope="scope">
            <span>淘宝、天猫、京东</span>
          </template>
        </el-table-column>
        <el-table-column width="200" label="关键词">
          <template scope="scope">
            <span>10个</span>
          </template>
        </el-table-column>
        <el-table-column width="200" label="类目">
          <template scope="scope">
            <span>5个</span>
          </template>
        </el-table-column>
        <el-table-column label="价格区间">
          <template scope="scope">
            <span>¥100～200</span>
          </template>
        </el-table-column>
        <el-table-column label="一链多款">
          <template scope="scope">
            <span>是</span>
          </template>
        </el-table-column>
        <el-table-column label="监控类型">
          <template scope="scope">
            <span>自有品牌</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template scope="scope">
            <p class="colorBlue" @click="diaMonitPlanShow"><span>查看</span></p>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="rangeInfo-item">
      <h3 class="info-title">监控计划范围</h3>
      <div class="plan-box">
        <dl class="plan-item">
          <dt class="plan-logo"><img src="" /></dt>
          <dd class="plan-name">淘宝</dd>
        </dl>
        <dl class="plan-item">
          <dt class="plan-logo"><img src="" /></dt>
          <dd class="plan-name">淘宝</dd>
        </dl>
        <dl class="plan-item">
          <dt class="plan-logo"><img src="" /></dt>
          <dd class="plan-name">淘宝</dd>
        </dl>
      </div>
    </div>

    <div class="rangeInfo-item">
      <h3 class="info-title">实时采集范围</h3>
      <div class="plan-box">
        <dl class="plan-item">
          <dt class="plan-logo"><img src="" /></dt>
          <dd class="plan-name">淘宝</dd>
        </dl>
        <dl class="plan-item">
          <dt class="plan-logo"><img src="" /></dt>
          <dd class="plan-name">淘宝</dd>
        </dl>
        <dl class="plan-item">
          <dt class="plan-logo"><img src="" /></dt>
          <dd class="plan-name">淘宝</dd>
        </dl>
      </div>
    </div>
    <diaMonitPlan :config="monitPlanConfig" @sure="sureMonitPlan"></diaMonitPlan>
  </epoint-card>
</template>

<script>
import diaMonitPlan from '@/components/dialogs/diaMonitPlan.vue'
export default {
  data () {
    return {
      data: [
        {},
        {}
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
    diaMonitPlan
  },
  mounted () { },
  computed: {},
  watch: {},
  methods: {
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
.rangeInfo {
  box-sizing: border-box;
  padding: 20px;
  .rangeInfo-item {
    margin-bottom: 40px;
    .info-title {
      font-size: 20px;
      font-weight: 500;
      color: #5a5c5e;
      margin-bottom: 20px;
    }
    .plan-box {
      display: flex;
      .plan-item {
        margin: 0 20px;
        img {
          width: 44px;
          height: 44px;
        }
        .plan-name {
          margin-top: 10px;
          font-size: 16px;
          color: #5a5c5e;
          text-align: center;
        }
      }
    }
  }
  .colorBlue {
    color: #7474f4;
  }
}
</style>
<style lang="less">
.rangeInfo {
  .qd-table {
    border: 1px solid #ebeef5;
    th {
      background-color: #f5f8fa;
    }
  }
}
</style>
