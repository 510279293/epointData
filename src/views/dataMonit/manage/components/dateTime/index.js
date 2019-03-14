export default {
  name: 'dateTime',
  props: {
    dates: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      radio: '1',
      weeks: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      checkDate: [],
      checkWeek: []
    }
  },
  methods: {
    changeCheck (arr, key) {
      let index = arr.indexOf(key)
      if (index > -1) { 
        arr.splice(index, 1)
      } else {
        arr.push(key)
      }
    }
  }
}
