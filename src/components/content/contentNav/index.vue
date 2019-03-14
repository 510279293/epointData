<template>
  <div class="nav">
    <div class="nav-wrap">
      <span class="nav-items" :class="{'active': itemIndex === currentIndex}" v-for="(item, itemIndex) in navList" :ref="'nav' + itemIndex" :key="itemIndex" @click="handleNavItems(itemIndex)">
        {{item.label}}<span v-if="item.count > -1">({{item.count | ten-thousand-count}})</span>
      </span>
      <span class="nav-bar" :style="{width: currentWidth + 'px', left: currentLeft + 'px'}"></span>
    </div>
    <slot name="warpR"></slot>
  </div>
</template>

<script>
import index from './index'
export default index
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '~assets/styles/variables';
.nav {
  position: relative;
}
.nav-wrap {
  position: relative;
  display: flex;
  width: 100%;
  height: 60px;
  padding-left: 20px;
  line-height: 60px;
  border-bottom: 1px solid @line-color;
  .border-box;
}

.nav-items {
  display: block;
  padding: 0 20px;
  font-size: 16px;
  transition: color 0.3s;
  cursor: pointer;
  .select-none;
  &:hover,
  &.active {
    color: @main-font-hover;
  }
}

.nav-bar {
  position: absolute;
  height: 3px;
  background-color: @main-font-hover;
  bottom: 0;
  transition: left 0.3s, width 0.3s;
}
</style>
