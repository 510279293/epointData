import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

import login from './modules/login' // 登录
import home from './modules/home' // 主页
import channel from './modules/channel' // 渠道管控
import dataMonit from './modules/dataMonit' // 同行监控
import peerMonit from './modules/peerMonit' // 同行监控
import analyze from './modules/analyze' // 数据分析
import collect from './modules/collect' // 采集工具
import dataContrast from './modules/dataContrast' // 数据对比
import setting from './modules/setting' // 设置

Vue.use(Router)

const router = new Router({
  routes: [
    ...login,
    ...home,
    ...channel,
    ...analyze,
    ...collect,
    ...peerMonit,
    ...dataMonit,
    ...dataContrast,
    ...setting
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    if (to.fullPath === '/') {
      next('/login')
    }
    if (to.fullPath === '/home') {
      store.commit('SET_HOME', true)
      next()
    } else {
      store.commit('SET_HOME', false)
      next()
    }
  }
})

export default router
