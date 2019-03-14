/**
 * @file collect-api
 * @description api for collect 采集工具
 * @author author-zqs [zengqingsen@loonxi.com]
 */
import HttpUtil from '../HttpUtil'

export default {
  /**
   * 添加采集任务
   * @return {{Array}}
   */
  addRealMonitorTask (data) {
    let url = '/realMonitorData/addRealMonitorTask'
    return HttpUtil.post({ url, data })
  },
  /**
   * 获取采集数据
   * @return {{Array}}
   */
  getRealMonitorDataList (data) {
    let url = '/realMonitorData/getRealMonitorDataList'
    return HttpUtil.post({ url, data })
  }
}
