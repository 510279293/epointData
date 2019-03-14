<template>
  <epoint-card class="chargeInfo">
    <h3 class="charge-title">基本资料</h3>
    <div class="charge-box">
      <div class="charge-item">
        <dl>
          <dt class="item-icon"><i class="icon-e_timing">&#xe60b;</i></dt>
          <dd class="item-name">定时监控</dd>
          <dd class="item-desc">采集频次 1次/天</dd>
          <dd class="item-desc">最大抓取量 5000条/天</dd>
        </dl>
      </div>
      <div class="charge-item">
        <dl>
          <dt class="item-icon"><i class="icon-e_timing">&#xe60c;</i></dt>
          <dd class="item-name">定时监控</dd>
          <dd class="item-desc">采集频次 1次/天</dd>
          <dd class="item-desc">最大抓取量 5000条/天</dd>
        </dl>
      </div>
      <div class="charge-item">
        <dl>
          <dt class="item-icon"><i class="icon-e_timing">&#xe60d;</i></dt>
          <dd class="item-name">定时监控</dd>
          <dd class="item-desc">采集频次 1次/天</dd>
          <dd class="item-desc">最大抓取量 5000条/天</dd>
        </dl>
      </div>

    </div>
  </epoint-card>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {},
  components: {},
  mounted () { },
  computed: {},
  watch: {},
  methods: {}
}

</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '~assets/styles/variables';
.chargeInfo {
  box-sizing: border-box;
  padding: 20px;
  .charge-title {
    font-size: 20px;
    font-weight: 500;
    color: #5a5c5e;
  }
  .charge-box {
    display: flex;
    color: #5a5c5e;
    .charge-item {
      width: 33%;
      text-align: center;
      .item-name {
        font-size: 16px;
        padding-bottom: 10px;
        margin-top: 20px;
      }
      .item-desc {
        margin-top: 10px;
      }
      .item-icon {
        i {
          font-size: 50px;
          color: #6461a2;
        }
      }
    }
  }
}
</style>
