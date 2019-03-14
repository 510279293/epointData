import LoginApi from './modules/login-api' // 登录注册
import channelApi from './modules/channel-api' // 渠道管控
import collectApi from './modules/collect-api' // 采集工具

export default {
  ...LoginApi,
  ...channelApi,
  ...collectApi
}
