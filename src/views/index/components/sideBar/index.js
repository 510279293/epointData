/**
 * @file sideBar
 * @author author-Lyn [liyinyufeng@loonxi.com]
 */
import LoginApi from '@/services'
import routesMenu from '@/routes/routes-menu.json'

export default {
  data () {
    return {
      menuList: [], // 菜单列表
      iconList: ['&#xe608;', '&#xe603;', '&#xe607;', '&#xe605;', '&#xe604;', '&#xe609;', '&#xe606;']
    }
  },
  props: {
    small: {
      type: Boolean,
      default: false
    }
  },
  components: {
  },
  created () {
  },
  mounted () {
    this.getMenuList()
  },
  computed: {
  },
  watch: {
  },
  methods: {
    // 获取用户菜单目录
    getMenuList () {
      LoginApi.getMenuList().then(res => {
        if (!res.code) {
          // if (!res.data.length) {
          //   this.$message.error('该账号没有权限')
          //   localStorage.clear()
          //   window.location.href = '//' + window.location.host
          // } else {
            // this.menuList = res.data
            this.menuList = routesMenu
          // }
        } else {
          this.$message.error('该账号没有权限')
          localStorage.clear()
          window.location.href = '//' + window.location.host
        }
      })
    }
  }
}
