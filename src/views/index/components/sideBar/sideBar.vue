<template>
  <div class="side-bar" :class="{'small-screen': small}">
    <div class="logo">
      <span class="logo-span"></span>
    </div>
    <el-menu :default-active="$route.path" :collapse="small" v-if="menuList.length" class="side-menu" router :unique-opened="true">
      <el-menu-item index="/home">
        <i class="icon-font">&#xe601;</i>
        <template slot="title">
          <span>{{menuList[0].name}}</span>
        </template>
      </el-menu-item>
      <el-submenu v-if="index" v-for="(menu, index) in menuList" :key="index" :index="menu.id">
        <template slot="title">
          <i class="icon-font" v-html="menu.icon"></i>
          <span>{{menu.name}}</span>
        </template>
        <el-menu-item v-for="(item, itemIndex) in menu.childMenus" :key="itemIndex" :index="item.funcName">
          <span class="el-menu-item-span">{{item.name}}</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import index from './index'
export default index
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '~assets/styles/variables';
.side-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 180px;
  height: 100vh;
  padding-top: 90px;
  padding-bottom: 100px;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: @theme-color;
  z-index: 1001;
  transition: width 0.3s;
  box-shadow: 2px 0 6px rgba(0,21,41,.35);
  .border-box;
  &.small-screen {
    width: 80px;
    .logo {
      width: 80px;
      padding-left: 25px;
    }
    .logo-span {
      width: 30px;
      background-image: url('~assets/images/common/e_logo_icon.png');
    }
  }
}
.logo {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 180px;
  height: 42px;
  padding: 20px;
  background-color: #343268;
  transition: width 0.3s;
  &:after {
    content: '';
    position: absolute;
    left: 0px;
    bottom: -20px;
    display: block;
    width: 100%;
    height: 20px;
    background: linear-gradient(rgba(52, 50, 104, 1), rgba(0, 0, 0, 0));
  }
  .border-box;
}
.logo-span {
  display: block;
  width: 106px;
  height: 22px;
  background-image: url('~assets/images/common/e_logo.png');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
<style lang="less" rel="stylesheet/less">
@import '~assets/styles/variables';
.side-bar.small-screen .side-menu.el-menu {
  .el-menu-item,
  .el-submenu__title {
    margin-left: 13px;
    .icon-font {
      color: #8683CB;
      font-size: 14px;
    }
    &:hover {
      background-color: inherit;
      .icon-font {
        color: #fff;
      }
    }
    &.is-active {
      background-color: inherit;
      .icon-font { color: #fff; }
    }
  }
  .el-submenu.is-active .el-submenu__title {
    .icon-font { color: #fff; }
  }
}
.side-menu.el-menu {
  background: none;
  border: none;
  .el-menu-item {
    color: #8683CB;
    height: 40px;
    line-height: 40px;
    &:hover,
    &:focus,
    &.is-active {
      color: #fff;
      background-color: @theme-hover;
      .icon-font { color: #fff; }
    }
    .icon-font {
      color: #8683CB;
      margin-right: 16px;
    }
  }
  .el-submenu {
    .el-submenu__title {
      color: #8683CB;
      height: 46px;
      line-height: 46px;
      &:hover {
        color: #fff;
        background-color: @theme-hover;
        .icon-font { color: #fff; }
      }
      .icon-font {
        color: #8683CB;
        transition: color .2s;
        margin-right: 16px;
      }
    }
    &.is-active {
      .el-submenu__title,
      .el-submenu__title .icon-font { color: #fff; }
    }
  }
  .el-menu {
    background: none;
    .el-menu-item-span {
      padding-left: 8px;
    }
  }
}
.el-menu--popup-right-start {
  margin-left: 21px;
  padding: 0px;
  background-color: @theme-color;
  border-radius: 3px;
  &.el-menu--popup { min-width: 160px; }
  .el-menu-item {
    padding: 0 16px;
    height: 48px;
    line-height: 48px;
    color: #8683CB;
    .border-box;
    &:hover,
    &:focus,
    &.is-active {
      color: #fff;
      background-color: inherit;
    }
  }
}
</style>
