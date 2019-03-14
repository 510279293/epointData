<template>
  <div class="netItem out" :style="{'background': colorList[index].bg}">
    <div class="bdLine" :style="{'background': colorList[index].bar}"></div>
    <div class="content">
      <div class="brand" v-text="netItemData.brand || ''"></div>
      <dl>
        <dt>
          <span>{{netItemData.money}}</span>
          <span style="font-size: 14px;">元</span>
        </dt>
        <dd :style="{color: netItemData.up ? '#FF4E50' : '#44C789'}">
          <span style="color: #9A9BAD">较上一个30天</span>
          <i class="el-icon-upload2"  v-if="netItemData.up"></i>
          <i class="el-icon-download" v-else></i>
          <span>{{netItemData.persent}}</span>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    netItemData: {
      type: Object,
      default: () => {}
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      colorList: [{
        bar: '#FB3363',
        bg: 'rgba(251,51,99,0.05)'
      }, {
        bar: '#7777F9',
        bg: 'rgba(119,119,249,0.05)'
      }, {
        bar: '#3CB774',
        bg: 'rgba(60,183,116,0.05)'
      }, {
        bar: '#FFC30A',
        bg: 'rgba(255,195,10,0.05)'
      }, {
        bar: '#C900FC',
        bg: 'rgba(201,0,252,0.05)'
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
  .netItem{
    width: 366px;
    height: 150px;
    position: relative;
    margin-top: 20px;
    .bdLine{
      position: absolute;
      left: 0;
      top: 0;
      width: 4px;
      height: 100%;
    }
    .content{
      .brand{
        margin: 20px 0 0 24px;
        color: #5A5C5E;
        font-size: 16px;
        font-weight: 500;
      }
      dl{
        margin: 8px auto 0;
        text-align: center;
        dt{
          .hg(42px);
          color: #5A5C5E;
          font-size: 30px;
          margin-bottom: 3px;
        }
        dd{
          .hg(20px);
          font-size: 14px;
          color: #9A9BAD;
        }
      }
    }
  }
</style>
