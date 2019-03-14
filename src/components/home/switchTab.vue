<template>
  <div class="switchTab">
    <ul>
      <li v-for="(item, index) in text" :key="index" :class="[{'check': index === checkNum}]" @click="changeCheck(index)">{{item}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  props: {
    propCheckNum: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      checkNum: this.propCheckNum,
      text: ['销售额', '销售量']
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
  .switchTab{
    width: 136px;
    height: 32px;
    ul{
      width: 136px;
      height: 32px;
      display: flex;
      justify-content: space-between;
      border-radius: 4px;
      overflow: hidden;
      li{
        width: 68px;
        .hg(32px);
        text-align: center;
        color: @secondary-font;
        background: #E1E5EE;
        font-size: 14px;
        cursor: pointer;
        &.check{
          color: #fff;
          background: #5AC489;
        }
      }
    }
  }
</style>
