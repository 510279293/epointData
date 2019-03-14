import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store'
// import Viser from 'viser-vue'
import './utils/element-ui'
import './utils/epoint-ui'
import './utils/filters'
import './utils/common'
import G2 from '@antv/g2'

// Vue.use(Viser)

Vue.config.productionTip = false
Vue.prototype.G2 = G2

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// var wroWin = window.open(
//   'http://www.baidu.com',
//   'newwin',
//   'height=400,width=400,top=10,left=10,resizable=yes'
// )
// console.log(wroWin)
// if (wroWin == null) {
//   alert('hhhhh')
// }
// window.print()

// console.log(document.implementation.createHTMLDocument('new Doc'))
