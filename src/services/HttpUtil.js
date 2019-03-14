/**
 * @file HttpUtil
 * @description HttpUtil for axios api request
 * @author author-Lyn [liyinyufeng@loonxi.com]
 */
import axios from 'axios'
import Vue from 'vue'
import store from '@/store'

let httpNumbers = 0

// 添加请求拦截器
axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

const Utils = {
  get ({ url, data = {}, loading = false }) {
    return new Promise((resolve, reject) => {
      if (loading) {
        httpNumbers++
        store.commit('SET_LOADING', true)
      }
      axios
        .get('/api' + url, {
          params: data,
          withCredentials: true
        })
        .then(function (response) {
          if (response.data.code !== 0) {
            new Vue().$message({
              message: response.data.message,
              type: 'error'
            })
          }
          if (response.data.code === 1010) {
            localStorage.removeItem('isLogin')
            window.location.href = '//' + window.location.host
          }
          resolve(response.data)
          if (loading) {
            httpNumbers--
            if (httpNumbers <= 0) {
              store.commit('SET_LOADING', false)
            }
          }
        })
        .catch(function (error) {
          if (loading) {
            httpNumbers--
            if (httpNumbers <= 0) {
              store.commit('SET_LOADING', false)
            }
          }
          reject(new Error(error))
        })
    })
  },
  post ({ url, data = {}, loading = false }) {
    return new Promise((resolve, reject) => {
      if (loading) {
        httpNumbers++
        store.commit('SET_LOADING', true)
      }
      axios
        .post('/api' + url, data, {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json; charset=UTF-8'
          }
        })
        .then(function (response) {
          console.log('接口返回状态码：' + response.data.code)
          if (response.data.code !== 0) {
            new Vue().$message({
              message: response.data.message,
              type: 'error'
            })
          }
          if (response.data.code === 1010) {
            console.log('没有权限')
            window.location.href = '//' + window.location.host
          }
          if (loading) {
            httpNumbers--
            if (httpNumbers <= 0) {
              store.commit('SET_LOADING', false)
            }
          }
          resolve(response.data)
        })
        .catch(function (error) {
          console.log(error)
          if (loading) {
            httpNumbers--
            if (httpNumbers <= 0) {
              store.commit('SET_LOADING', false)
            }
          }
          reject(new Error(error))
        })
    })
  }
}

export default Utils
