/**
 * @file channel-api
 * @description api for channel 渠道管控
 * @author author-Lyn [liyinyufeng@loonxi.com]
 */
import HttpUtil from '../HttpUtil'

export default {
  /**
   * 获取商品管理平台
   * @return {{Array}}
  */
  getChannelList () {
    let url = '/channel/search'
    return HttpUtil.get({ url, loading: true })
  }
}
