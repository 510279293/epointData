/**
 * @file login
 * @author author-Lyn [liyinyufeng@loonxi.com]
 */
import LoginApi from '@/services'

import { mapActions } from 'vuex'

export default {
  data () {
    return {
      isLogin: true, // 是否为login页面
      loginForm: {
        phone: '',
        password: '',
        code: ''
      },
      registerForm: {
        code: '', // 验证码
        companyName: '', // 公司名
        // corpName:"", //公司名
        password: '', // 密码
        phone: '' // 手机号
      },
      timeout: 60,
      isSendCode: false,
      timer: null,
      imgVerifyData: {}, // 图形验证码
      loginRules: {
        phone: [{
          required: true,
          message: '请输入登录账号',
          trigger: 'blur'
        }],
        password: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        }],
        code: [{
          required: true,
          message: '请输入验证码',
          trigger: 'blur'
        }]
      },
      registerRules: {
        companyName: [{
          required: true,
          message: '请输入公司名称',
          trigger: 'blur'
        }],
        phone: [{
          required: true,
          message: '请输入手机号',
          trigger: 'blur'
        }],
        code: [{
          required: true,
          message: '请输入验证码',
          trigger: 'blur'
        }],
        password: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        }]
      }
    }
  },
  mounted () {
    this.getVerifyCode()
  },
  computed: {
  },
  methods: {
    ...mapActions([
      'setAccount'
    ]),
    // 获取图片验证码
    getVerifyCode () {
      LoginApi.getVerifyCode().then(res => {
        this.imgVerifyData = res.data
      })
    },
    // 获取短信验证码
    sendCode () {
      if (this.registerForm.phone !== '' && this.registerForm.phone.length === 11) {
        let params = {
          phone: this.registerForm.phone,
          corpName: this.registerForm.companyName
        }
        LoginApi.getSMSVerifyCode(params).then((result) => {
          this.$message.success('验证码发送成功！')
          this.isSendCode = true
          if (this.timer) {
            clearInterval(this.timer)
            this.timer = null
          }
          this.timer = setInterval(() => {
            this.timeout--
            if (this.timeout <= 0) {
              clearInterval(this.timer)
              this.timer = null
              this.timeout = 60
              this.isSendCode = false
            }
          }, 1000)
        })
      } else {
        this.$message.warning('请输入正确的手机号！')
      }
    },
    // 注册
    toSignUpUser () {
      this.$refs.registerForm.validate((valid) => {
        if (valid) {
          LoginApi.toSignUpUser(this.registerForm).then(res => {
            this.$message({
              message: res.message,
              type: 'success'
            })
            this.isLogin = true
          })
        } else {
          return false
        }
      })
    },
    // 登录
    loginIn () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          if (this.loginForm.code !== this.imgVerifyData.code) {
            this.$message.error('图形验证码错误')
            this.loginForm.code = ''
            this.getVerifyCode()
            return
          }
          LoginApi.loginIn(this.loginForm).then(res => {
            if (!res.code) {
              sessionStorage.clear()
              localStorage.setItem('isLogin', 1)
              this.$router.push('/home')
            } else {
              this.loginForm.code = ''
              this.getVerifyCode()
            }
          }).catch(() => {
            this.loginForm.code = ''
            this.getVerifyCode()
          })
        } else {
          return false
        }
      })
    }
  }
}
