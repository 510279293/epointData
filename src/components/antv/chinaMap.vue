<template>
  <div :id="'chinaMap' + dataStr">地图</div>
</template>

<script>
import axios from 'axios'
import DataSet from '@antv/data-set'

export default {
  props: {
    ringData: {
      type: Array,
      default: () => []
    },
    chartHeight: {
      type: Number,
      default: 380
    },
    innerRadius: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      dataStr: (new Date()).getTime() + ''
    }
  },
  methods: {
    initAntv () {
      let self = this
      axios.get('https://antvis.github.io/static/data/china.json').then(res => {
        if (res.status === 200) {
          let chinaMap = document.getElementById('chinaMap' + self.dataStr)
          if (chinaMap) {
            chinaMap.innerHTML = ''
          }
          let mapData = res.data
          var features = mapData.features
          var bgData = [] // 用于地图背景层的绘制
          for (var i = 0; i < features.length; i++) {
            var name = features[i].properties.name
            bgData.push({
              'name': name
            })
          }
          var userData = [] // 可视化数据
          // for(var i=0; i<features.length; i++) {
          //   var name = features[i].properties.name;
          //   userData.push({
          //     "name": name,
          //     "value": Math.round(Math.random()*1000)
          //   })
          // }
          for (let val of this.ringData) {
            userData.push({
              'name': val.princeName,
              'value': val.saleNum
            })
          }
          var chart = new this.G2.Chart({
            container: 'chinaMap' + self.dataStr,
            forceFit: true,
            height: 360,
            padding: { top: 0, right: 10, bottom: 10, left: 0 }
          })
          chart.tooltip({
            showTitle: false
          })
          // 同步度量
          chart.scale({
            longitude: {
              sync: true
            },
            latitude: {
              sync: true
            }
          })
          chart.axis(false)
          chart.legend('trend', {
            position: 'left'
          })

          // 绘制世界地图背景
          var ds = new DataSet()
          var worldMap = ds.createView('back').source(mapData, {
            type: 'GeoJSON'
          })
          var worldMapView = chart.view()
          worldMapView.source(worldMap)
          worldMapView.tooltip(false)
          worldMapView.polygon().position('longitude*latitude').style({
            fill: '#fff',
            stroke: '#ccc',
            lineWidth: 1
          })

          var userDv = ds.createView().source(userData).transform({
            geoDataView: worldMap,
            field: 'name',
            type: 'geo.region',
            as: ['longitude', 'latitude']
          }).transform({
            type: 'map',
            callback: function callback (obj) {
              obj.trend = obj.value
              return obj
            }
          })
          var userView = chart.view()
          userView.source(userDv, {
            'trend': {
              alias: '销售量'
            }
          })
          userView.polygon().position('longitude*latitude').color('trend', ['#F51D27', '#0A61D7']).opacity('value').tooltip('name*trend').animate({
            leave: {
              animation: 'fadeOut'
            }
          })
          chart.render()
        }
      })
    }
  },
  mounted () {
    this.initAntv()
  }
}
</script>
