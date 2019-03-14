<template>
  <div class="legendLi">
    <ul v-if="legendTxt.length > 0" class="clearfix">
      <li v-for="(item, index) in legendTxt" :key="index">
        <i :style="{'background': item.color}" class="point"></i>
        <span class="txt">{{item.txt}}</span>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  props: {
    legendTxt: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
@import '~assets/styles/variables';
@import '~assets/styles/qkwyq';
.legendLi {
  display: inline-block;
  li {
    .blf;
    .point,
    .txt {
      .midBlock;
    }
    .point {
      width: 8px;
      height: 8px;
      border: 4px solid #ececec;
      border-radius: 50%;
      margin-right: 5px;
    }
    .txt {
      font-size: 12px;
      color: @secondary-font;
      .hg(16px);
    }
  }
  li + li {
    margin-left: 42px;
  }
}
</style>
