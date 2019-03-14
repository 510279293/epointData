import PriceRatio from './components/priceRatio.vue'
import PriceTrend from './components/priceTrend.vue'
import PriceCompare from './components/priceCompare.vue'
import TableCompare from './components/tableCompare.vue'
import PriceRange from './components/priceRange.vue'
import mock from './mock.js'
const gcolor = [
  'rgba(140,140,250,1)',
  'rgba(101,204,204,1)',
  'rgba(136,220,173,1)',
  'rgba(243,217,116,1)',
  'rgba(235,109,139,1)',
  'rgba(173,124,242,1)',
  'rgba(96,98,226,1)',
  'rgba(82,96,147,1)',
  'rgba(20,126,186,1)',
  'rgba(48,103,135,1)'
]
const opaColor = [
  'rgba(140,140,250,.1)',
  'rgba(101,204,204,.1)',
  'rgba(136,220,173,.1)',
  'rgba(243,217,116,.1)',
  'rgba(235,109,139,.1)',
  'rgba(173,124,242,.1)',
  'rgba(96,98,226,.1)',
  'rgba(82,96,147,.1)',
  'rgba(20,126,186,.1)',
  'rgba(48,103,135,.1)'
]
export default {
  data () {
    return {
      gcolor: gcolor,
      opaColor: opaColor,
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: '',
      ratioData: {},
      trendData: {},
      compareData: [],
      rangeData: {
        visible: false
      }
    }
  },
  props: {},
  components: {
    PriceRatio,
    PriceTrend,
    PriceCompare,
    TableCompare,
    PriceRange
  },
  mounted () {
    // console.log(mock)
    this.ratioData.data = this.initRatioData(mock.sourceData)
    this.ratioData.gcolor = gcolor

    this.trendData.arr = this.ratioData.data
    console.log(this.trendData.arr)
    this.trendData.opaColor = opaColor
    this.trendData.gcolor = gcolor
    this.trendData.data = mock.trendData

    this.compareData = mock.compareData
    // console.log(mock.sourceData)
  },
  computed: {},
  watch: {},
  methods: {
    initRatioData (data) {
      data.sort((obj1, obj2) => {
        let val1 = obj1.count * 1
        let val2 = obj2.count * 1
        if (val1 > val2) {
          return -1
        } else if (val1 < val2) {
          return 1
        } else {
          return 0
        }
      })
      this.gcolor.forEach((item, key) => {
        if (data[key]) {
          data[key].color = item
        }
      })
      return data
    },
    showPrangeDialog () {
      this.rangeData.visible = true
    },
    closePrangeDialog () {
      this.rangeData.visible = false
    },
    prangeSubmit (data) {
      console.log(data)
    }
  }
}
