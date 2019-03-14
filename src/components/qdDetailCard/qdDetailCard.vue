<template>
  <div class="detail">
    <div class="img-warp">
      <img src="http://g.search.alicdn.com/img/bao/uploaded/i4/i1/1666015448/TB1KHmznhtnkeRjSZSgXXXAuXXa_!!0-item_pic.jpg_60x60.jpg">
    </div>
    <div class="detail-right">
      <h3 class="r-name">这是你买到的最好的商品，绝对不会让你后悔的超级nice哦</h3>
      <p>
        <span class="r-channel">天猫</span>
        <span>店铺：隔壁老王家的店</span>
        <span></span>
        <el-tag class="r-auth" type="success" size="mini">已授权</el-tag>
      </p>
      <p class="mar-t12">
        <span class="ma-r30">销售价：￥300.00~￥320.00</span>
        <span>活动价：￥300.00~￥320.00</span>
      </p>
    </div>
  </div>
</template>
<script>

export default {
  name: 'qdDetailCard',
  data () {
    return {}
  },
  props: {},
  components: {

  },
  mounted () {

  },
  computed: {},
  watch: {},
  methods: {
  }
}

</script>
<style lang="less" scoped>
.detail {
  .mar-t12 {
    margin-top: 12px;
  }
  .ma-r30 {
    margin-right: 30px;
  }
  display: flex;
  box-sizing: border-box;
  padding: 20px;
  border-bottom: 1px solid #f0f0f0;
  .img-warp {
    width: 98px;
    height: 98px;
    margin-right: 10px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .detail-right {
    .r-name {
      padding-top: 6px;
      font-size: 16px;
      font-weight: 600;
      color: #5a5c5e;
      margin-bottom: 18px;
    }
    .r-channel {
      border-radius: 2px;
      background: #5858f1;
      padding: 6px 12px;
      color: #fff;
      font-size: 14px;
      margin-right: 10px;
    }
    .r-auth {
      margin-left: 15px;
    }
  }
}
</style>
