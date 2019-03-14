import StoreDistribution from './components/storeDistribution.vue'
import HotTopStore from './components/hotTopStore.vue'
import StoreLevel from './components/storeLevel.vue'
export default {
  data () {
    return {
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
      value: ''
    }
  },
  props: {},
  components: {
    StoreDistribution,
    HotTopStore,
    StoreLevel
  },
  mounted () {},
  computed: {},
  watch: {},
  methods: {}
}
