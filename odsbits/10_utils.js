var get_utils = function() {
  if (typeof XLSX !== 'undefined') return XLSX.utils
  if (typeof module !== 'undefined' && typeof require !== 'undefined')
    try {
      return require('./xlsx').utils
    } catch (e) {
      // 0.8.16: fix can't resolve '../xlsx'
      // 0.8.17: fix can't resolve 'xlsx'
      throw e
      //   try {
      //     return require('../xlsx').utils
      //   } catch (ee) {
      //     return require('xlsx').utils
      //   }
    }
  throw new Error('Cannot find XLSX utils')
}
