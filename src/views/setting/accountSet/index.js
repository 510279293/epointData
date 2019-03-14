import contentNav from '@/components/content/contentNav/index.vue'
// import contentRange from '@/components/content/contentRange/index.vue'
import userManage from './components/userManage.vue'
import roleManage from './components/roleManage.vue'
import diaAddEdit from './components/diaAddEdit.vue'
export default {
  data () {
    return {
      // 导航栏菜单
      navList: [
        {
          label: '用户管理'
        },
        {
          label: '角色管理'
        }
      ],
      tableValue: 0,
      diaAddEditConfig: {
        visible: false,
        type: 'add'
      }
    }
  },
  props: {},
  components: {
    contentNav,
    userManage,
    roleManage,
    diaAddEdit
  },
  mounted () {},
  computed: {},
  watch: {},
  methods: {
    // nav 回调
    changeNav (value) {
      console.log(value, 'fromNavCallBack')
      this.tableValue = value
    },
    // range回调
    search (value) {
      console.log(value, 'fromCallBack')
    },
    diaAddEditClose () {
      this.diaAddEditConfig.visible = false
    },
    diaAddEditSure () {},
    diaAddEditShow (str) {
      console.log(str)
      this.diaAddEditConfig.visible = true
      this.diaAddEditConfig.type = str
    }
  }
}
