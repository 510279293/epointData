import * as types from './types'

export const actions = {
  // 动态设置表格高度
  getTableHeight: ({ commit }, collapse) => {
    commit(types.SET_TABLE_HEIGHT, collapse)
  },
  // 设置全局Loading
  setLoading: ({ commit }, value) => {
    commit(types.SET_LOADING, value)
  }
}
