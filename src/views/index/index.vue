<template>
  <div class="index-wrap" :class="{'small-screen': small, 'home-wrap': isHomePage}">
    <sideBar :small="small"></sideBar>
    <topBar :small="small"></topBar>
    <div class="index-body">
      <div class="index-router">
        <transition name="router-fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
    <epoint-loading></epoint-loading>
  </div>
</template>

<script>
import index from './index'
export default index
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '~assets/styles/variables';
.index-wrap {
  position: relative;
  padding-left: 180px;
  padding-top: 48px;
  background-color: @bg-color;
  transition: .3s;
  &.small-screen {
    padding-left: 80px;
  }
  &.home-wrap {
    padding-top: 0;
    .index-body {
      height: 100vh;
    }
  }
}
.index-body {
  height: calc(~'100vh - 48px');
  background-color: @bg-color;
  overflow-y: auto;
  padding-top: 20px;
  transition: height .3s;
  .border-box;
}
.index-router {
  width: calc(~'100vw - 220px');
  min-width: @base-width;
  margin: 0 auto;
}
</style>
