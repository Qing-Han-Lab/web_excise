import Vue from 'vue'
import SearchProductBox from './searchProduct.vue'

const SearchProduct = {}
let showSearch = false
let searchNode = null
const SearchConstructor = Vue.extend(SearchProductBox)

SearchProduct.install = function (Vue) {
  // 参数
  Vue.prototype.$searchProduct = function (type) {
    if (type === 'hide') {
      searchNode.isShowSearch = showSearch = false
    } else {
      if (showSearch) {
        // 如果show还在，则不再执行
        return
      }
      searchNode = new SearchConstructor({
        data: {
          isShowSearch: showSearch
        }
      })
      searchNode.$mount() // 挂在实例，为了获取下面的searchNode.$el
      document.body.appendChild(searchNode.$el)
      searchNode.isShowSearch = showSearch = true
    }
  };

  ['show', 'hide'].forEach((type) => {
    Vue.prototype.$searchProduct[type] = function () {
      return Vue.prototype.$searchProduct(type)
    }
  })
}

export default SearchProduct
