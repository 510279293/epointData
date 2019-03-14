<template>
  <div class="nomoreBrand netItem out">
    <div class="bdLine"></div>
    <div class="content">
      <div class="brand">
        更多品牌… <br>付费后显示
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      colorList: [{
        bar: '#FB3363',
        bg: 'rgba(251,51,99,0.05)'
      }]
    }
  },
  methods: {
    changeCheck (idx) {
      this.checkNum = idx
    }
  }
}
</script>

<style lang="less" scoped>
  @import '~assets/styles/variables';
  @import '~assets/styles/qkwyq';
  .nomoreBrand{
    width: 366px;
    height: 150px;
    position: relative;
    margin-top: 20px;
    background: rgba(211,210,217,0.08) url('../../../../assets/images/home/moreBrand.png') no-repeat center center;
    background-size: 102px 87px;
    .bdLine{
      position: absolute;
      left: 0;
      top: 0;
      width: 4px;
      height: 100%;
      background: #D3D2D9;
    }
    .content{
      .brand{
        margin: 20px 0 0 24px;
        color: #9A9BAD;
        font-size: 16px;
        height: 44px;
        line-height: 22px;
      }
    }
  }
</style>
