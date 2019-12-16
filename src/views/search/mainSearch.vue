<style scoped lang="scss">
.search {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  .search-history {
    background-color: #fff;
    width: 375px;
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .search-history-box {
      width: 375px;
      padding: 15px 0px;
      margin: 0px auto;
    }
    .search-history-title {
      height: 21px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .search-history-title-titletext {
        margin-left: 14px;
        height: 10px;
        line-height: 10px;
        font-size: 14px;
        font-weight: bold;
        text-indent: 5px;
        color: #333;
        border-left: 2px solid #fe043f;
      }
      .search-history-title-delbox {
        width: 13px;
        height: 13px;
        margin-right: 24px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .search-history-historybox {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      .search-history-historybox-historyitem {
        max-width: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 0px 15px;
        height: 20px;
        background-color: #f8f8f8;
        border-radius: 10px;
        margin-top: 15px;
        margin-left: 15px;
        color: #666;
        font-size: 12px;
        text-align: center;
        line-height: 20px;
      }
    }
    .search-history-hotbox {
      width: 347px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      margin: 0px auto;
      .search-history-hotbox-item {
        padding: 4px 13px;
        color: #a272f7;
        border: solid 1px #a272f7;
        font-size: 12px;
        margin-top: 15px;
        margin-right: 10px;
        border-radius: 10px;
        max-width: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .search-result {
    // flex: 1;
    width: 375px;
    min-height: calc(100vh - 45px);
    // overflow: auto;
    background: #f7f7f7;
    .search-result-box {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }
  }
}
.search::-webkit-scrollbar {
  display: none;
}
.all-item {
  position: relative;
  margin: 0 auto 10px;
  width: 355px;
  height: 120px;
  background-color: #ffffff;
  border-radius: 13px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  .all-item-left {
    img {
      padding: 10px 5px;
      width: 100px;
      height: 100px;
      background-color: #ffffff;
      border-radius: 5px;
    }
  }
  .all-item-right {
    height: 120px;
    padding-right: 9px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .all-item-right-title {
      padding-top: 11px;
      font-size: 14px;
      font-family: "Helvetica";
      line-height: 20px;
      color: #333333;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
      span {
        font-family: "PingFang-SC-Bold";
        font-size: 10px;
        color: #fca60b;
        border-radius: 3px;
        border: solid 1px #fca60b;
        padding: 0 3px;
        margin-right: 5px;
      }
    }
    .all-item-right-content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .all-item-right-content-left {
        font-family: "DINAlternate-Bold";
        font-size: 20px;
        color: #fb2c68;
        span {
          font-family: "PingFangSC-Medium";
          font-size: 14px;
          color: #fb2c68;
        }
      }
      .all-item-right-content-right {
        text-indent: 18px;
        background-image: url("../home/components/images2/icon_price.png");
        background-repeat: no-repeat;
        background-size: 16px;
        background-position: left top;
        font-family: "DINAlternate-Bold";
        font-size: 11px;
        color: #fc5968;
        line-height: 20px;
        span {
          font-family: "PingFangSC-Medium";
          font-size: 10px;
          color: #fc5968;
        }
      }
    }
    .all-item-right-widget {
      padding-bottom: 10px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      font-family: "PingFangSC-Medium";
      font-size: 10px;
      color: #999999;
      .all-item-right-widget-time {
        text-indent: 30px;
        height: 20px;
        line-height: 20px;
        background-repeat: no-repeat;
        background-size: 20px;
        background-position: left center;
        font-family: "DINAlternate-Bold";
        &.tmall {
          background-image: url("../home/components/images2/icon_tmall.png");
        }
        &.tb {
          background-image: url("../home/components/images2/icon_tb.png");
        }
        &.jd {
          background-image: url("../home/components/images2/icon_jd.png");
        }
        &.sn {
          background-image: url("../home/components/images2/icon_sn.png");
        }
        &.kl {
          background-image: url("../home/components/images2/icon_kl.png");
        }
        &.yp {
          background-image: url("../home/components/images2/icon_yp.png");
        }
        &.dd {
          background-image: url("../home/components/images2/icon_dd.png");
        }
      }
      .all-item-right-widget-right {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-family: "PingFangSC-Medium";
        font-size: 10px;
        color: #999999;
        .all-item-right-widget-like {
          margin-right: 21px;
          height: 16px;
          line-height: 16px;
          text-indent: 18px;
          background-image: url("../home/components/images2/icon_like.png");
          background-repeat: no-repeat;
          background-size: 16px;
          background-position: left center;
          font-family: "DINAlternate-Bold";
          &.liked {
            background-image: url("../home/components/images2/icon_like_on.png");
          }
        }
        .all-item-right-widget-reply {
          font-family: "DINAlternate-Bold";
          height: 16px;
          line-height: 16px;
          text-indent: 18px;
          background-image: url("../home/components/images2/icon_reply.png");
          background-repeat: no-repeat;
          background-size: 14px;
          background-position: left center;
        }
      }
    }
  }
  .all-item-top {
    position: absolute;
    top: -2px;
    left: -2px;
    width: 30px;
    height: 30px;
    background-image: url("../home/components/images2/icon_top.png");
    background-position: left top;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .all-item-hot {
    position: absolute;
    top: -2px;
    left: -2px;
    width: 30px;
    height: 30px;
    background-image: url("../home/components/images2/icon_hot.png");
    background-position: left top;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .all-item-smart {
    position: absolute;
    top: -2px;
    left: -2px;
    width: 30px;
    height: 30px;
    background-image: url("../home/components/images2/icon_smart.png");
    background-position: left top;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
.search-top {
  width: 375px;
  height: 44px;
  border-bottom: 1px solid #f2f2f2;
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transition-duration: 500ms;
  .search-top-back {
    width: 44px;
    height: 44px;
    background-image: url("./images/back_btn.png");
    background-repeat: no-repeat;
    background-size: 9px 16px;
    background-position: center center;
  }
  .search-top-btn {
    padding: 0 10px;
    height: 29px;
    color: #666;
    text-align: center;
    line-height: 30px;
    font-size: 14px;
  }
  .search-top-inputbox {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 29px;
    background-color: #f1f1f1;
    border-radius: 15px;
    .search-top-searchlogo {
      margin-left: 12px;
      width: 19px;
      height: 18px;
      background-image: url(./images/home_search.png);
      background-size: 100% 100%;
    }
    input {
      flex: 1;
      padding: 0 10px;
      height: 29px;
      border: 0px;
      outline: none;
      color: #333;
      font-size: 12px;
      border-radius: 15px;
      background: #f1f1f1;
    }
    .search-top-cleartext {
      width: 18px;
      height: 18px;
      transform: rotate(45deg);
      font-size: 25px;
      text-align: center;
      line-height: 18px;
      margin-right: 10px;
      color: #999;
    }
  }
}
.search-hide {
  position: fixed;
  top: -44px;
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
    <div class="search-top search-hide" :class="{'hideHead':showHead}">
      <div class="search-top-back" @click="goBack"></div>
      <div class="search-top-inputbox">
        <div class="search-top-searchlogo"></div>
        <input
          @keypress="searchPress($event)"
          type="text"
          placeholder="大家都在搜：双十一"
          v-model="searchKey"
        />
        <div class="search-top-cleartext" v-show="searchKey.length > 0" @click="cleartext">+</div>
      </div>
      <div class="search-top-btn" @click="searchButton">搜索</div>
    </div>
    <div
      class="search"
      v-infinite-scroll="getMoreSearch"
      :infinite-scroll-disabled="loading"
      infinite-scroll-distance="100"
      infinite-scroll-immediate-check="false"
      autoFill
      ref="scrollView"
    >
      <div class="search-top" ref="searchHead">
        <div class="search-top-back" @click="goBack"></div>
        <div class="search-top-inputbox">
          <div class="search-top-searchlogo"></div>
          <input
            @keypress="searchPress($event)"
            type="text"
            placeholder="大家都在搜“双十一”"
            v-model="searchKey"
          />
          <div class="search-top-cleartext" v-show="searchKey.length > 0" @click="cleartext">+</div>
        </div>
        <div class="search-top-btn" @click="searchButton">搜索</div>
      </div>
      <div class="search-history" v-if="!isSearched">
        <div class="search-history-box" v-if="historylist.length > 0">
          <div class="search-history-title">
            <div class="search-history-title-titletext">搜索历史</div>
            <div class="search-history-title-delbox" @click="toDelete">
              <img src="./images/icon_delete.png" alt />
            </div>
          </div>
          <div class="search-history-historybox">
            <div
              class="search-history-historybox-historyitem"
              v-for="(item,index) in historylist"
              :key="index"
              @click="toSearch(item)"
            >{{item}}</div>
          </div>
        </div>
        <div class="search-history-box">
          <div class="search-history-title">
            <div class="search-history-title-titletext">热门搜索</div>
          </div>
          <div class="search-history-hotbox">
            <div
              class="search-history-hotbox-item"
              v-for="(item,index) in hotlist"
              :key="index"
              @click="toSearch(item)"
            >{{item}}</div>
          </div>
        </div>
        <Model title="确认清空历史搜索记录？" :confirmFun="deleteHistory" ref="model"></Model>
      </div>
      <div class="search-result" v-if="isSearched">
        <!-- <div class="search-result-box">
          <div
            class="all-item"
            v-for="(item,index) in searchList"
            :key="index"
            @click="toProductDetail(item.contentId, item.feedsLinkSource,item.type, item.commissionAmount)"
          >
            <div class="all-item-top" v-if="item.contentFeedsType==='top'"></div>
            <div class="all-item-hot" v-if="item.contentFeedsType === 'hot'"></div>
            <div class="all-item-smart" v-if="item.contentFeedsType === 'chosen'"></div>
            <div class="all-item-left">
              <img v-lazy="item.itemPicUrl" alt />
            </div>
            <div class="all-item-right">
              <div class="all-item-right-title">
                <span class="all-item-right-title-left" v-if="item.goodsTags !=='' && item.goodsTags!==null">{{item.goodsTags}}</span>
                {{item.itemName}}
              </div>
              <div class="all-item-right-content">
                <div class="all-item-right-content-left">
                  {{item.finalPrice}}
                  <span>元包邮</span>
                </div>
                <div class="all-item-right-content-right" v-if="item.commissionAmount">
                  <span>￥</span>
                  {{item.commissionAmount}}
                </div>
              </div>
              <div class="all-item-right-widget">
                <div
                  class="all-item-right-widget-time"
                  :class="`${checkPlatformClass(item.platform)}`"
                >{{checkPlatform(item.platform)}} | {{formatTime(item.publicTime)}}</div>
                <div class="all-item-right-widget-right">
                  <div class="all-item-right-widget-like">{{item.intrestTimes}}</div>
                  <div class="all-item-right-widget-reply">{{item.commentTimes}}</div>
                </div>
              </div>
            </div>
          </div>
        </div> -->
        <SearchResult :keywords="searchKey" :isSearch="isSearched" ref="result"></SearchResult>
      </div>
    </div>
  </div>
</template>

<script>
import SearchResult from './components/searchResult'
export default {
  data () {
    return {
      searchKey: '',
      historylist: [],
      hotlist: [],
      searchList: [],
      isSearched: false,
      searchPage: 2,
      AllLoaded: false,
      timer: -1,
      preDistance: 0,
      showHead: false,
      loading: false,
      pageNum: 1
    }
  },
  components: {
    SearchResult
  },
  watch: {
    searchKey (newdata, olddata) {
      if (newdata === '') {
        this.isSearched = false
      }
    }
  },
  created () {
    this.getHistoryAndHot()
  },
  mounted () {
    this.$refs.scrollView.addEventListener('scroll', (e) => {
      if (this.timer > 0) {
        return
      }
      // 函数去抖，防止过多触发阻碍JS运行，性能降低，200ms触发一次
      this.timer = setTimeout(this.scrollListen, 300, e)
    }, false)
  },
  methods: {
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
    cleartext () {
      this.searchKey = ''
      this.isSearched = false
    },

    searchPress (e) {
      // 搜索按钮点击
      if (e.keyCode === 13 && this.searchKey !== '') {
        this.toSearch(this.searchKey)
      }
    },
    searchButton () {
      // this.$refs.result.getData()
      this.isSearched = false
      this.$nextTick(() => {
        this.toSearch(this.searchKey)
      })
    },
    toSearch (keyword) {
      // 搜索
      this.searchKey = keyword
      this.isSearched = true
      this.$nextTick(() => {
        this.$refs.result.getData()
      })
      // this.isSearched = true
      // this.AllLoaded = false
      // this.searchPage = 2
      // this.searchKey = keyword
      // this.$http('POST', this.api.queryList, {
      //   keyword: keyword,
      //   page: (this.pageNum++),
      //   pageSize: 10
      // }).then(res => {
      //   if (res.data.success === true) {
      //     this.$refs.scrollView.scrollTop = 0
      //     this.$nextTick(() => {
      //       this.searchList = this.searchList.concat(res.data.model.list)
      //       this.$refs.scrollView.addEventListener('scroll', (e) => {
      //         if (this.timer > 0) {
      //           return
      //         }
      //         // 函数去抖，防止过多触发阻碍JS运行，性能降低，200ms触发一次
      //         this.timer = setTimeout(this.scrollListen, 300, e)
      //       }, false)
      //     })
      //   }
      // })
    },
    getHistoryAndHot () {
      this.$http('GET', this.api.getMySearchHistory, {}).then(res => {
        // 历史记录
        this.historylist = res.data.model
      })
      this.$http('GET', this.api.getHotSearchKeywords, {}).then(res => {
        // 热门搜索
        this.hotlist = res.data.model
      })
    },
    deleteHistory () {
      // 清空历史记录确认
      this.$refs.model.cancel()
      this.$http('GET', this.api.delMyHisSearchKeywords, {}).then(res => {
        console.info(res)
        if (res.data.success === true) {
          this.historylist = []
        }
      })
    },
    toDelete () {
      // 删除搜索历史
      this.$refs.model.show()
    },
    getMoreSearch () {
    //   if (this.AllLoaded) {
    //     return
    //   }
    //   if (this.loading === true) {
    //     return
    //   } else {
    //     this.loading = true
    //   }
      this.$refs.result.getData()
      // this.$http('POST', this.api.queryList, {
      //   keyword: this.searchKey,
      //   page: this.searchPage,
      //   pageSize: 10
      // }).then(res => {
      //   if (res.data.success === true) {
      //     if (res.data.model.list != null) {
      //       if (res.data.model.list.length > 0) {
      //         this.searchPage = this.searchPage + 1
      //         this.$nextTick(() => {
      //           this.searchList = this.searchList.concat(res.data.model.list)
      //         })
      //       } else {
      //         this.AllLoaded = true
      //       }
      //     } else {
      //       this.AllLoaded = true
      //     }
      //   }
      //   this.loading = false
      // }).catch(() => {
      //   this.loading = false
      // })
    },
    toProductDetail (itemId, itemSource, type, commissionAmount) {
      if (type === '01' || type === '02') {
        this.toPage('product2', { id: itemId, feedsLinkSource: itemSource, commissionAmount: commissionAmount })
      } else if (type === '03') {
        this.toPage('advPage', { id: itemId, feedsLinkSource: itemSource, commissionAmount: commissionAmount })
      }
    }
  },
  filters: {
    goodsTagsDescFilter (goodsTags) {
      if (goodsTags !== null) {
        let arr = goodsTags.split(',')
        let str = arr[0]
        if (str === 'hkeep') {
          return '高留存'
        } else if (str === 'hcash') {
          return '高变现'
        } else if (str === 'cabprice') {
          return '白菜价'
        } else if (str === 'hislow') {
          return '历史低价'
        } else {
          return '最热好价'
        }
      } else {
        return ''
      }
    }
  }
}
</script>
