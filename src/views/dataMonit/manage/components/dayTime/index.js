export default {
  name: 'dayTime',
  props: {
    dates: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
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
