<style lang="scss" scoped>
.search {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  .search-banner {
    width: 375px;
    height: 130px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.search::-webkit-scrollbar {
  display: none;
}
.searchBox {
  flex: 1;
}
.search-top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  line-height: 50px;
  width: 375px;
  .search-top-back {
    width: 40px;
    height: 50px;
    background-image: url("./images/back_btn.png");
    background-repeat: no-repeat;
    background-size: 9px 16px;
    background-position: center center;
  }
  form {
    flex: 1;
    margin-right: 7px;
    position: relative;
    input {
      font-family: "SourceHanSansSC-Regular";
      font-size: 12px;
      color: #333;
      height: 29px;
      box-sizing: border-box;
      line-height: 29px;
      border: 0;
      outline: 0;
      text-indent: 12px;
      flex: 1;
      background: transparent;
    }
    .search-top-input {
      background-color: rgba(241, 241, 241, 0.5);
      width: 100%;
      height: 29px;
      border-radius: 29px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .search-top-cleartext {
      margin-right: 5px;
      width: 18px;
      font-size: 25px;
      color: #999;
      transform: rotate(45deg);
    }
  }
  .search-top-cancel {
    margin-right: 13px;
    font-family: "SourceHanSansSC-Medium";
    font-size: 14px;
    color: #666666;
  }
}
.search-menu {
  position: relative;
  margin: 0 38px;
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .search-menu-item {
    padding: 5px 0;
    font-family: "SourceHanSansSC-Medium";
    font-size: 16px;
    color: #858585;
    height: 20px;
    &.active {
      color: #fb2c68;
    }
  }
  .search-menu-item-active {
    position: absolute;
    width: 20px;
    height: 2px;
    background-color: #fb2c68;
    left: 0;
    bottom: 0;
    transition-duration: 300ms;
    &.one {
      left: 10px;
    }
    &.two {
      left: 92px;
    }
    &.three {
      left: 172px;
    }
    &.four {
      left: 259px;
    }
  }
}
.search-intro {
  width: 375px;
  height: 30px;
  background-color: rgba(241, 241, 241, 0.5);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  .search-intro-text {
    padding-right: 15px;
    font-family: "SourceHanSansSC-Regular";
    font-size: 12px;
    color: rgba(0, 0, 0, 0.38);
    &:first-child {
      margin-left: 28px;
    }
  }
}
.search-history {
  .search-history-top {
    padding: 15px 25px 0 28px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .search-history-top-title {
      font-family: "SourceHanSansSC-Medium";
      font-size: 14px;
      color: #858585;
    }
    .search-history-top-del {
      width: 25px;
      height: 25px;
      background-image: url("./images/icon_delete.png");
      background-repeat: no-repeat;
      background-size: 13px 13px;
      background-position: center center;
    }
  }
  .search-history-mid {
    padding: 0 28px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    .search-history-mid-item {
      max-width: 100px;
      overflow: hidden;
      text-overflow: ellipsis;
      /*禁止换行显示*/
      white-space: nowrap;
      padding: 4px 13px;
      margin-bottom: 15px;
      border-radius: 10px;
      border: solid 1px #858585;
      font-family: "SourceHanSansSC-Regular";
      font-size: 11px;
      color: #858585;
      margin-right: 12px;
      &:first-child {
        margin-bottom: 15px;
      }
    }
  }
  &.search-all {
    .search-history-top {
      margin-top: 30px;
      padding-bottom: 7px;
    }
    .search-history-mid-item {
      color: #a272f7;
      border: solid 1px #a272f7;
    }
  }
}
.product {
  background-color: #f7f7f7;
  padding-bottom: 6px;
  flex: 1;
  overflow: auto;
  width: 375px;
}
.product-menu {
  padding: 0 48px 0 39px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 29px;
  line-height: 29px;
  border-top: 1px solid #f2f7fb;
  background-color: #fff;
  .product-menu-item {
    font-family: "SourceHanSansSC-Regular";
    font-size: 12px;
    color: #858585;
    &.active {
      color: #fb2c68;
    }
  }
}
.search-hide {
  position: fixed;
  top: -120px;
  background: #fff;
  z-index: 100;
  transition-duration: 300ms;
  &.hideHead {
    top: 0;
  }
}
</style>

<template>
  <div class="wrap">
    <div class="search-head search-hide" :class="{'hideHead':showHead}">
      <div class="search-top">
        <div class="search-top-back" @click="goBack"></div>
        <form action="javascript:;">
          <div class="search-top-input">
            <input
              type="text"
              v-model="searchKey"
              @keypress="searchPress($event)"
              placeholder="复制宝贝标题，搜全网优惠券再拿返利"
            />
            <div class="search-top-cleartext" v-show="searchKey.length > 0" @click="cleartext">+</div>
          </div>
        </form>
        <div class="search-top-cancel" @click="toSearch(searchKey, true)">搜索</div>
      </div>
      <div class="search-menu">
        <div
          class="search-menu-item"
          :class="{'active':item.active}"
          v-for="(item,index) in menus"
          :key="index"
          @click="checkMenu(index)"
        >{{item.name}}</div>
        <div
          class="search-menu-item-active"
          :class="{'one':menus[0].active,'two':menus[1].active,'three':menus[2].active, 'four':menus[3].active}"
        ></div>
      </div>
      <div class="product-menu" v-show="isSearched">
        <div
          class="product-menu-item"
          :class="{'active': item.active}"
          v-for="(item,index) in productMenus"
          :key="index"
          @click="toCheckProduct(index)"
        >{{item.name}}</div>
      </div>
    </div>
    <div
      class="search"
      v-infinite-scroll="loadMore"
      :infinite-scroll-disabled="loading"
      infinite-scroll-distance="100"
      infinite-scroll-immediate-check="false"
      ref="scrollView"
    >
      <div class="search-head" ref="searchHead">
        <div class="search-top">
          <div class="search-top-back" @click="goBack"></div>
          <form action="javascript:;">
            <div class="search-top-input">
              <input
                type="text"
                v-model="searchKey"
                @keypress="searchPress($event)"
                :placeholder="placeHolder"
              />
              <div class="search-top-cleartext" v-show="searchKey.length > 0" @click="cleartext">+</div>
            </div>
          </form>
          <div class="search-top-cancel" @click="toSearch(searchKey, true)">搜索</div>
        </div>
        <div class="search-menu">
          <div
            class="search-menu-item"
            :class="{'active':item.active}"
            v-for="(item,index) in menus"
            :key="index"
            @click="checkMenu(index)"
          >{{item.name}}</div>
          <div
            class="search-menu-item-active"
            :class="{'one':menus[0].active,'two':menus[1].active,'three':menus[2].active,'four':menus[3].active}"
          ></div>
        </div>
        <div class="product-menu" v-show="isSearched">
          <div
            class="product-menu-item"
            :class="{'active': item.active}"
            v-for="(item,index) in productMenus"
            :key="index"
            @click="toCheckProduct(index)"
          >{{item.name}}</div>
        </div>
      </div>
      <div class="searchBox" v-show="!isSearched">
        <div class="search-banner">
          <img src="./images/search_bg.jpg" alt />
        </div>
        <div class="search-intro">
          <div class="search-intro-text">1.复制商品标题</div>
          <div class="search-intro-text">2.搜索领优惠券</div>
        </div>
        <div class="search-history" v-if="historyKeys.length > 0">
          <div class="search-history-top">
            <div class="search-history-top-title">搜索历史</div>
            <div class="search-history-top-del" @click="toDelete"></div>
          </div>
          <div class="search-history-mid">
            <div
              class="search-history-mid-item"
              @click="toSearch(item)"
              v-for="(item,index) in historyKeys"
              :key="index"
            >{{item}}</div>
          </div>
        </div>
        <div class="search-history search-all">
          <div class="search-history-top">
            <div class="search-history-top-title">大家都在搜</div>
            <div></div>
          </div>
          <div class="search-history-mid">
            <div
              class="search-history-mid-item"
              v-for="(item,index) in allSearchKeys"
              :key="index"
              @click="toSearch(item)"
            >{{item}}</div>
          </div>
        </div>
        <Model title="确认清空历史搜索记录？" :confirmFun="deleteHistory" ref="model"></Model>
      </div>
      <div class="product" v-if="isSearched && productlist.length > 0">
        <div
          class="home-content-knock-item"
          v-for="(item,index) in productlist"
          :key="index"
          @click="toPage('product',{item:item})"
        >
          <div class="home-content-knock-item-left">
            <img v-lazy="item.itemPicUrl" />
          </div>
          <div class="home-content-knock-item-right">
            <div
              class="home-content-knock-item-right-title"
              :class="{'tb':item.platform==='taobao','jd':item.platform==='jingdong','pdd': item.platform==='pingduoduo', 'tm': item.platform === 'tmall'}"
            >{{item.itemName}}</div>
            <div class="home-content-knock-item-right-marks" v-if="item.shopName">
              <div class="home-content-knock-item-right-marks-item">{{item.shopName}}</div>
            </div>
            <div class="home-content-knock-item-right-price">
              <div class="home-content-knock-item-right-price-now">
                <span>￥</span>
                {{item.finalPrice}}
              </div>
              <div
                class="home-content-knock-item-right-price-old"
                v-if="item.originPrice"
              >￥{{item.originPrice}}</div>
              <div
                class="home-content-knock-item-right-price-certificate"
                v-if="item.couponAmount"
              >{{item.couponAmount}}元券</div>
            </div>
            <div class="home-content-knock-item-right-buy">
              <div
                class="home-content-knock-item-right-buy-price"
                v-if="item.commissionAmount!=='0.00'"
              >
                <div class="home-content-knock-item-right-buy-price-text">
                  <span>奖￥{{item.commissionAmount}}</span>
                  {{item.discountPrice}}
                </div>
                <div class="home-content-knock-item-right-buy-price-text">立即抢购</div>
              </div>
              <div
                class="home-content-knock-item-right-buy-price2"
                v-if="item.commissionAmount==='0.00'"
              >
                <div class="home-content-knock-item-right-buy-price-text">立即抢购</div>
              </div>
              <div class="home-content-knock-item-right-buy-knock">
                已抢：
                <span>{{item.saledNumber>10000?`${Number(item.saledNumber/10000).toFixed(1)}万`:item.saledNumber}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="nothing" v-if="isSearched && productlist.length === 0">
        <div class="nothing-text">没有搜索到任何商品</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menus: [
        {
          name: '淘宝',
          active: true,
          platform: 'taobao'
        },
        {
          name: '京东',
          active: false,
          platform: 'jingdong'
        },
        {
          name: '天猫',
          active: false,
          platform: 'tmall'
        },
        {
          name: '拼多多',
          active: false,
          platform: 'pingduoduo'
        }
      ],
      productMenus: [
        {
          name: '综合',
          active: true,
          up: true,
          key: 'ZH'
        },
        {
          name: '销量',
          active: false,
          up: true,
          key: 'XL'
        },
        {
          name: '价格',
          active: false,
          up: true,
          key: 'JG'
        },
        {
          name: '佣金',
          active: false,
          up: true,
          key: 'YJ'
        }
      ],
      isSearched: false,
      allSearchKeys: [],
      searchKey: '',
      productlist: [],
      lastCheckIndex: 0,
      historyKeys: [],
      searchPage: 2,
      timer: -1,
      showHead: false,
      allLoaded: false,
      loading: false,
      placeHolder: '复制宝贝标题，搜淘宝隐藏优惠券'
    }
  },
  created () {
    if (this.$route.query.searchKey) {
      let type = this.$route.query.type
      switch (type) {
        case 'taobao':
          this.checkMenu(0)
          break
        case 'jingdong':
          this.checkMenu(1)
          break
        case 'pingduoduo':
          this.checkMenu(3)
          break
      }
      this.searchKey = this.$route.query.searchKey
      this.$nextTick(() => {
        if (this.searchKey) {
          this.toCheckProduct(1)
        }
      })
    }
    if (this.$route.query.form) {
      let form = this.$route.query.form
      if (form === 'jingdong') {
        this.checkMenu(1)
      } else if (form === 'pingduoduo') {
        this.checkMenu(3)
      }
    }
    this.getHotSearchKeywords()
    this.getMySearchHistory()
  },
  methods: {
    cleartext () {
      this.searchKey = ''
      this.isSearched = false
    },
    scrollListen (e) {
      // 监听滚动
      this.timer = -1
      if (this.isSearched) {
        if (this.preDistance >= this.$refs.scrollView.scrollTop) {
          // 往下滑动，显示头部
          if (this.$refs.scrollView.scrollTop - this.$refs.searchHead.clientHeight > 100) {
            this.showHead = true
          } else {
            this.showHead = false
          }
        } else {
          this.showHead = false
        }
      }
      this.preDistance = this.$refs.scrollView.scrollTop
    },
    checkMenu (index) {
      this.menus = this.menus.map(item => {
        item.active = false
        return item
      })
      this.menus[index].active = true
      if (this.isSearched) {
        this.toSearch(this.searchKey)
        this.searchPage = 2
        this.allLoaded = false
      }
      if (index === 0) {
        this.placeHolder = '复制宝贝标题，搜淘宝隐藏优惠券'
      } else if (index === 1) {
        this.placeHolder = '复制宝贝标题，搜京东隐藏优惠券'
      } else if (index === 2) {
        this.placeHolder = '复制宝贝标题，搜天猫隐藏优惠券'
      } else if (index === 3) {
        this.placeHolder = '复制拼多多标题，搜拼多多隐藏优惠券'
      }
    },
    toCheckProduct (index) {
      // 切换商品搜索条件
      this.productMenus = this.productMenus.map(item => {
        item.active = false
        return item
      })
      this.productMenus[index].active = true
      if (this.lastCheckIndex === index) {
        this.productMenus[index].up = !this.productMenus[index].up
      }
      this.lastCheckIndex = index
      this.searchPage = 2
      this.allLoaded = false
      this.toSearch(this.searchKey)
    },
    deleteHistory () {
      // 清空历史记录确认
      this.$refs.model.cancel()
      this.$http('GET', this.api.delMyHisSearchKeywords, {
      }).then(res => {
        console.info(res)
        if (res.data.success === true) {
          this.historyKeys = []
        }
      })
    },
    toDelete () {
      // 删除搜索历史
      this.$refs.model.show()
    },
    toSearch (keyword, flag) {
      if (flag) {
        this.$route.query.searchKey = ''
      }
      this.searchKey = keyword
      this.searchPage = 2
      this.allLoaded = false
      // 搜索
      let orderBy = this.sequence[0].up
        ? `${this.sequence[0].key}_DES`
        : `${this.sequence[0].key}_AES`
      this.$http('GET', this.api.searchitem, {
        keyword: this.$route.query.searchKey ? `clipboard;${this.searchKey}` : this.searchKey,
        orderBy: orderBy,
        page: 1,
        pageSize: 20,
        platform: this.terrace[0].platform
      }).then(res => {
        if (res.data.success === true) {
          this.productlist = []
          this.isSearched = true
          this.$refs.scrollView.scrollTop = 0
          this.$nextTick(() => {
            this.productlist = res.data.model.list
            this.$refs.scrollView.addEventListener('scroll', (e) => {
              if (this.timer > 0) {
                return
              }
              // 函数去抖，防止过多触发阻碍JS运行，性能降低，200ms触发一次
              this.timer = setTimeout(this.scrollListen, 300, e)
            }, false)
          })
        }
      })
    },
    getHotSearchKeywords () {
      // 获取热门搜索词
      this.$http('GET', this.api.getHotSearchKeywords).then(res => {
        if (res.data.success === true) {
          this.allSearchKeys = []
          this.$nextTick(() => {
            this.allSearchKeys = res.data.model
          })
        }
      })
    },
    searchPress (e) {
      // 搜索按钮点击
      if (e.keyCode === 13) {
        this.toSearch(this.searchKey)
      }
    },
    getMySearchHistory () {
      // 历史搜索词
      this.$http('GET', this.api.getMySearchHistory).then(res => {
        if (res.data.success === true) {
          this.historyKeys = []
          this.$nextTick(() => {
            this.historyKeys = res.data.model
          })
        }
      })
    },
    loadMore () {
      // 加载更多
      if (this.allLoaded) {
        console.log('没有更多了')
        return
      }
      if (this.loading === true) {
        return
      } else {
        this.loading = true
      }
      let orderBy = this.sequence[0].up
        ? `${this.sequence[0].key}_DES`
        : `${this.sequence[0].key}_AES`
      this.$http('GET', this.api.searchitem, {
        keyword: this.$route.query.searchKey ? `clipboard;${this.searchKey}` : this.searchKey,
        orderBy: orderBy,
        page: this.searchPage,
        pageSize: 20,
        platform: this.terrace[0].platform
      }).then(res => {
        if (res.data.success === true) {
          if (res.data.model.list != null) {
            if (res.data.model.list.length > 0) {
              this.searchPage = this.searchPage + 1
              this.$nextTick(() => {
                this.productlist = this.productlist.concat(res.data.model.list)
              })
            } else {
              this.allLoaded = true
            }
          } else {
            this.allLoaded = true
          }
        }
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
    }
  },
  computed: {
    terrace () {
      return this.menus.filter(item => {
        return item.active
      })
    },
    sequence () {
      return this.productMenus.filter(item => {
        return item.active
      })
    }
  },
  watch: {
    searchKey (newdata, olddata) {
      if (newdata === '') {
        this.isSearched = false
      }
    }
  }
}
</script>
