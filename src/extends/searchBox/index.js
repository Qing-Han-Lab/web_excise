import Vue from 'vue'
import SearchBox from './search.vue'

const Search = {}
let showSearch = false
let searchNode = null
const SearchConstructor = Vue.extend(SearchBox)

Search.install = function (Vue) {
  // 参数
  Vue.prototype.$search = function (tips, isHot, type) {
    if (type === 'hide') {
      searchNode.isShowSearch = showSearch = false
    } else {
      if (showSearch) {
        // 如果show还在，则不再执行
        return
      }
      searchNode = new SearchConstructor({
        data: {
          isShowSearch: showSearch,
          title: tips,
          isHot: isHot
        }
      })
      searchNode.$mount() // 挂在实例，为了获取下面的searchNode.$el
      document.body.appendChild(searchNode.$el)
      searchNode.isShowSearch = showSearch = true
    }
  };

  ['show', 'hide'].forEach((type) => {
    Vue.prototype.$search[type] = function (tips, isHot) {
      return Vue.prototype.$search(tips, isHot, type)
    }
  })
}

export default Search
