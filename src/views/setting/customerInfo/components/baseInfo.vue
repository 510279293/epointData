<template>
  <epoint-card class="baseInfo">
    <h3 class="base-title">基本资料</h3>
    <div class="base-box">
      <div class="base-item">
        <p class="item-key">公司名称</p>
        <p class="item-value">仙仙集服饰有限公司</p>
      </div>
      <div class="base-item">
        <p class="item-key">所属省份</p>
        <p class="item-value">浙江省</p>
      </div>
      <div class="base-item">
        <p class="item-key">所属城市</p>
        <p class="item-value">杭州</p>
      </div>
      <div class="base-item">
        <p class="item-key">联系人</p>
        <p class="item-value">张姗姗</p>
      </div>
      <div class="base-item">
        <p class="item-key">联系电话</p>
        <p class="item-value">18646373333</p>
      </div>
      <div class="base-item">
        <p class="item-key">销售员</p>
        <p class="item-value">李诗诗</p>
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
.baseInfo {
  box-sizing: border-box;
  padding: 20px;
  .base-title {
    font-size: 20px;
    font-weight: 500;
    color: #5a5c5e;
  }
  .base-box {
    display: flex;
    margin-top: 20px;
    .base-item {
      border-left: 1px solid #9798ab;
      padding-left: 17px;
      .widthPercent(194);
      .item-key {
        font-size: 14px;
        color: #9798ab;
      }
      .item-value {
        font-size: 16px;
        color: #5a5c5e;
        margin-top: 10px;
      }
    }
    .base-item:nth-of-type(1) {
      border: none;
      padding-left: 0;
    }
  }
}
</style>
