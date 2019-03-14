import Vue from 'vue'

/**
 * 统计数量以万为单位返回
 * @param {{number}} value
 * @return {{string}}
 */
Vue.filter('ten-thousand-count', value => {
  if (typeof value !== 'number') return
  return value >= 10000 ? (value / 10000).toFixed(1) + '万' : value + ''
})

Vue.filter('fixed-num-finance', value => {
  if (!value) {
    return '0.00'
  } else {
    let lowerValue = value + ''
    return lowerValue.replace(/(?!^)(?=(\d{3})+$)/g, ',')
  }
})

/**
 * 时间格式化
 * @param {{number}} 1
 * @return {{string}} 01:00
 */
Vue.filter('time-form', value => {
  if (value < 10) {
    return '0' + value + ':00'
  } else {
    return value + ':00'
  }
})
