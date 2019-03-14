Array.includes =
  Array.includes ||
  function (str) {
    let len = this.length
    for (let i = 0; i < len; i++) {
      if (this[i] === str) {
        return true
      }
    }
    return false
  }
