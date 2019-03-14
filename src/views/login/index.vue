<template>
  <transition name="el-fade-in-linear">
    <div class="loginBox">
      <div class="qdLogo"></div>
      <el-form :model="loginForm" :rules="loginRules" ref="loginForm" class="container" v-show="isLogin">
        <!-- <h1 class="project_name">奇点数据</h1> -->
        <img class="project_name" src="~assets/images/login/e_login.png">
        <div class="contentWrap">
          <div class="formTitle">新奇点&nbsp;&nbsp;新起点</div>
          <div class="content out">
            <p class="title">用户登录</p>
            <el-form-item prop="phone">
              <el-input type="text" v-model="loginForm.phone" auto-complete="off" placeholder="请输入登录您的账号"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="请输入您的账号密码"></el-input>
            </el-form-item>
            <el-form-item prop="code">
              <el-row :gutter="20">
                <el-col :span="16">
                  <el-input type="text" v-model="loginForm.code" auto-complete="off" @keyup.enter.native="loginIn" placeholder="请输入验证码"></el-input>
                </el-col>
                <el-col :span="8">
                  <div class="img_verify">
                    <img :src="imgVerifyData.imgData" @click="getVerifyCode">
                  </div>
                </el-col>
              </el-row>
            </el-form-item>
            <el-form-item style="margin-bottom: 10px" class="loginBtn">
              <el-button type="primary" style="width: 100%" @click="loginIn">登录</el-button>
            </el-form-item>
            <el-form-item class="register_tip">
              <span>没有账号，<el-button type="text" @click="isLogin = false">立即注册</el-button></span>
            </el-form-item>
          </div>
        </div>
      </el-form>
      <el-form :model="registerForm" :rules="registerRules" ref="registerForm" class="container" v-show="!isLogin">
        <img class="project_name" src="~assets/images/login/e_login.png">
        <div class="contentWrap">
          <div class="formTitle">新奇点&nbsp;&nbsp;新起点</div>
          <div class="content out">
            <p class="title">用户注册</p>
            <el-form-item prop="companyName">
              <el-input type="text" v-model="registerForm.companyName" auto-complete="off" placeholder="公司名称"></el-input>
            </el-form-item>
            <el-form-item porp="phone">
              <el-row :gutter="20">
                <el-col :span="16">
                  <el-input type="text" v-model="registerForm.phone" auto-complete="off" placeholder="输入手机号"></el-input>
                </el-col>
                <el-col :span="8">
                  <el-button style="width: 100%" type="primary" :disabled="isSendCode" @click="sendCode">
                    {{ isSendCode ? (timeout + 's') : '获取验证码' }}
                  </el-button>
                </el-col>
              </el-row>
            </el-form-item>
            <el-form-item prop="code">
              <el-input type="text" v-model="registerForm.code" auto-complete="off" placeholder="输入验证码"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password" v-model="registerForm.password" auto-complete="off" placeholder="输入密码"></el-input>
            </el-form-item>
            <el-form-item style="margin-bottom: 10px">
              <el-button type="primary" style="width: 100%" @click="toSignUpUser">
                注册
              </el-button>
            </el-form-item>
            <el-form-item class="register_tip">
              <span>已有账号，<el-button type="text" @click="isLogin = true">立即登录</el-button></span>
            </el-form-item>
          </div>
        </div>
      </el-form>
      <!-- <p class="provider">©2013-2018 EPOINTDATA.COM 版权所有 杭州龙席网络科技股份有限公司 浙ICP备13021125号-7</p> -->
    </div>
  </transition>
</template>
<style rel="stylesheet/less" lang="less" scoped>
@import '~assets/styles/variables';
@import '~assets/styles/qkwyq';
.loginBox {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: url(~assets/images/login/e_backgroud.png) 50% 50% no-repeat;
  background-size: cover;
  min-width: 1200px;
  .qdLogo {
    position: absolute;
    top: 20px;
    left: 50%;
    width: 1200px;
    height: 22px;
    transform: translate(-50%, 0);
    background: url(~assets/images/login/e_loginlogo.png) left bottom no-repeat;
    background-size: 106px 22px;
  }
  .provider {
    position: absolute;
    left: 0;
    bottom: 0;
    font-size: 14px;
    font-family: '微软雅黑';
    color: rgba(254, 254, 254, 0.5);
    margin: 5px 0;
    padding-top: 6px;
    text-align: center;
    width: 100%;
    border-top: 1px solid rgba(0, 0, 0, 0.35);
  }
}

.container {
  position: absolute;
  width: 1154px;
  height: 628px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  .contentWrap {
    width: 430px;
    height: 500px;
    position: relative;
    .formTitle {
      text-align: center;
      font-size: 40px;
      color: #5a5c5e;
      margin-bottom: 40px;
      height: 56px;
      line-height: 56px;
    }
  }
  .content {
    width: 100%;
    height: 100%;
    background: #fff;
    padding: 0 40px;
    box-sizing: border-box;
    border-radius: 5px;
    background-clip: padding-box;
    box-shadow: 0px 2px 8px rgba(224, 221, 238, 0.5);
  }
  .project_name {
    display: block;
    width: 598px;
    height: 628px;
  }
  .title {
    height: 40px;
    line-height: 40px;
    color: @theme-color;
    margin: 40px 0 54px;
    font-size: 28px;
    text-align: center;
  }
  .register_tip {
    text-align: right;
  }
  .img_verify {
    width: 100%;
    height: 100%;
    vertical-align: middle;
    text-align: center;
    display: table-cell;
    img {
      width: 100%;
      vertical-align: middle;
      cursor: pointer;
    }
  }
}
</style>

<style lang="less">
.loginBox {
  .el-form-item {
    .el-input__inner {
      border: 0;
      border-bottom: 1px solid #cfd8e2;
      padding: 0;
      border-radius: 0;
    }
  }
  .loginBtn {
    line-height: 48px;
    .el-button {
      padding: 16px 20px;
      font-size: 20px;
      color: #fff;
      font-weight: 400;
    }
  }
}
</style>

<script type="text/babel">
import login from './index'
export default {
  ...login
}
</script>
