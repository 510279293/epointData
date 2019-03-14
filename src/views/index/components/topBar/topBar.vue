<template>
  <div class="top-bar" :class="{'home-bar': isHomePage, 'small-screen': small}">
    <el-breadcrumb class="router-item" separator="|">
      <el-breadcrumb-item v-for="(item, index) in routeList" :key="index" :to="item.path">
        {{item.name}}
      </el-breadcrumb-item>
    </el-breadcrumb>
    <div class="user-Info">
      <el-popover placement="top-start" width="176" trigger="hover" popper-class="user-mass-poper">
        <div class="user-messageBox">
          <p class="mess-title">如对系统有任何疑问，请咨询 奇点客户经理：</p>
          <p><i class="icon-e_timing i-tel">&#xe614;</i>15669367078</p>
          <p><i class="icon-e_timing i-qq">&#xe611;</i>751027319</p>
        </div>
        <span slot="reference" class="icon-e_timing i-message" style="display:inline-block;">&#xe612;</span>
      </el-popover>
      <el-popover placement="top-start" width="128" trigger="hover" popper-class="user-info-poper" :visible-arrow="false">
        <div class="user-infoBox">
          <p class="opa-item">修改密码</p>
          <p class="opa-item">退出登录</p>
        </div>
        <span class=" user-span" slot="reference">
          <img class="user-logo" src="http://g.search2.alicdn.com/img/bao/uploaded/i4/i3/77261795/TB24nxIkBDH8KJjSspnXXbNAVXa_!!77261795.jpg_60x60.jpg" alt="">
          <span class="user-name">Angella</span><i class="el-icon-caret-bottom"></i>
        </span>
      </el-popover>
    </div>
  </div>
</template>

<script>
import index from './index'
export default index
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '~assets/styles/variables';
.top-bar {
  position: absolute;
  top: 0;
  right: 0;
  width: calc(~'100% - 180px');
  height: 48px;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(224, 221, 238, 0.5);
  z-index: 1000;
  transition: top 0.3s, width 0.3s;
  &.home-bar {
    top: -48px;
  }
  &.small-screen {
    width: calc(~'100% - 80px');
  }
  .user-Info {
    position: absolute;
    display: flex;
    align-items: center;
    height: 100%;
    right: 20px;
    top: 0;
    color: #ccccd9;
    span {
      display: inline-block;
    }
    .i-message {
      color: #ccccd9;
      font-size: 16px;
      margin-right: 20px;
    }
    .user-span {
      display: flex;
      align-items: center;
      .user-logo {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-right: 10px;
      }
      .user-name {
        font-size: 14px;
        color: #9c9bb4;
        margin-right: 6px;
      }
      .el-icon-caret-bottom {
        color: #9c9bb4;
      }
    }
  }
}
.user-mass-poper {
  .user-messageBox {
    .mess-title {
      font-size: 12px;
    }
    .i-tel {
      color: #fb3363;
      font-size: 16px;
      margin-right: 6px;
    }
    .i-qq {
      color: #7777f9;
      font-size: 16px;
      margin-right: 6px;
    }
  }
}
.router-item {
  font-size: 14px;
  line-height: 48px;
  padding-left: 20px;
}
</style>

<style lang="less" rel="stylesheet/less">
@import '~assets/styles/variables';
.router-item {
  .el-breadcrumb__inner.is-link,
  .el-breadcrumb__inner a {
    font-weight: normal;
    color: @secondary-font;
    &:hover { color: @theme-hover; }
  }
  .el-breadcrumb__item:nth-last-child(1) .el-breadcrumb__inner {
    color: @main-font;
    &:hover { color: @main-font}
  }
}
.user-info-poper {
  padding: 6px 0px ;
  .user-infoBox {
    font-size: 14px;
    .opa-item {
      height: 36px;
      line-height: 36px;
      box-sizing:border-box;
      padding-left:13px;
      cursor: pointer;
    }
    .opa-item:hover{
      background: #f6f9f9;
    }
  }
}
</style>
