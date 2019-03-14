import * as types from './types'

export const mutations = {
  [types.SET_HOME] (state, value) {
    state.isHomePage = value
  },
  [types.SET_INDEX] (state, value) {
    state.indexRouter = value
  }
}
