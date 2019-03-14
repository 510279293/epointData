import * as types from './types'

export const mutations = {
  [types.SET_TABLE_HEIGHT] (state, collapse) {
    setTimeout(() => {
      console.log(state)
      let windowHeight = window.innerHeight
      let table = document.querySelector('.epoint-table')
      // let collapseHeight = collapse ? -60 : 60
      // let tableTop = table.offsetTop + (collapse == null ? 0 : collapseHeight)

      let epointPagination = document.querySelector('.epoint-pagination')
      // console.log(epointPagination)
      let epointPaginationHeight = epointPagination
        ? epointPagination.offsetHeight
        : 0
      let tableTop = table ? table.offsetTop : 0
      // state.tableHeight = windowHeight - tableTop - epointPaginationHeight
      state.tableHeight = windowHeight - tableTop - 88 - epointPaginationHeight
    }, 500)
  },
  [types.SET_LOADING] (state, value) {
    state.localLoading = value
  }
}
