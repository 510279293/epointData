/**
 * @file login-api
 * @description api for login
 * @author author-Lyn [liyinyufeng@loonxi.com]
 */
import HttpUtil from '../HttpUtil'

export default {
  /**
   * 获取验证码
   * @return {{Object}}
  */
  getVerifyCode () {
    let url = '/getVerify'
    return HttpUtil.get({ url })
  },
  /**
   * 登录
   * @param {{string}} phone 手机号
   * @param {{string}} password 密码
   * @param {{string}} code 验证码
  */
  loginIn (data) {
    let url = '/loginIn'
    return HttpUtil.post({ url, data })
  },
  /**
   * 获取短信验证码
   * @param {{string}} phone 手机号
   * @param {{string}} corpName 公司名称
  */
  getSMSVerifyCode (data) {
    let url = '/loginSignUp/generateCode'
    return HttpUtil.get({ url, data })
  },
  /**
   * 注册用户
   * @param {{string}} phone 手机号
   * @param {{string}} password 密码
   * @param {{string}} code 验证码
   * @param {{string}} companyName 公司名
  */
  toSignUpUser (data) {
    let url = '/loginSignUp'
    return HttpUtil.post({ url, data })
  },
  /**
   * 获取用户菜单目录
   * @return {{Array}}
  */
  getMenuList () {
    let url = '/menu/search'
    return HttpUtil.get({ url })
  }
}
