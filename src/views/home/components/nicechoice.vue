<style scoped lang="scss">
.selected {
  padding-top: 10px;
  -webkit-overflow-scroll: touch;
  flex: 1;
  font-style: "PingFangSC-Medium";
}
</style>

<template>
  <div class="selected">
    <mt-loadmore
      :top-method="loadTop"
      :bottom-all-loaded="allLoaded"
      @top-status-change="topStatusChange"
      ref="loadmore"
      v-infinite-scroll="loadMore"
      :infinite-scroll-disabled="loading"
      infinite-scroll-distance="100"
      infinite-scroll-immediate-check="false"
    >
      <div class="content" v-for="(item,index) in saleitemlist" :key="index">
        <div
          v-if="item.isWider===0"
          class="all-item"
          :key="index"
          @click="toDetail(item.contentId, item.feedsLinkSource, item.type, item.commissionAmount)"
        >
          <div class="all-item-top" v-if="item.contentFeedsType==='top'"></div>
          <div class="all-item-hot" v-if="item.contentFeedsType === 'hot'"></div>
          <div class="all-item-smart" v-if="item.contentFeedsType === 'chosen'"></div>
          <div class="all-item-left">
            <img v-lazy="item.itemPicUrl" alt />
          </div>
          <div class="all-item-right">
            <div class="all-item-right-title">
              <span class="all-item-right-title-left" v-if="item.goodsTags!=='' && item.goodsTags!==null">{{item.goodsTags}}</span>
              {{item.itemName}}
            </div>
            <div class="all-item-right-content">
              <div class="all-item-right-content-left">
                {{item.finalPrice}}
                <span v-if="item.isFreeShip === 0">元包邮</span>
              </div>
              <div
                class="all-item-right-content-right"
                v-if="item.commissionAmount && item.commissionAmount !=='0.00'"
              >
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
                <div class="all-item-right-widget-like">{{item.favoriteTimes}}</div>
                <div class="all-item-right-widget-reply">{{item.commentTimes}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="all-adver" v-if="item.isWider===1">
          <div class="all-adver-top">
            <div class="all-adver-top-head">
              <img v-lazy="item.creatorHeadUrl" alt />
            </div>
            <div class="all-adver-top-name">{{item.creator}}</div>
          </div>
          <div class="all-adver-banner">
            <img v-lazy="item.itemPicUrl" alt />
          </div>
          <div class="all-adver-title">{{item.discountActName}}</div>
          <div class="all-adver-widget">
            <div class="all-adver-widget-left">{{item.concessionalDegree}}</div>
            <div class="all-adver-widget-right">
              <div class="all-adver-widget-right-like">{{item.favoriteTimes}}</div>
              <div class="all-adver-widget-right-reply">{{item.commentTimes}}</div>
            </div>
          </div>
        </div>
      </div>
      <div slot="top" class="mint-loadmore-top">
        <span v-if="topStatus === 'pull'">下拉刷新↓</span>
        <span v-if="topStatus === 'drop'">释放更新</span>
        <span class="loading" v-if="topStatus === 'loading'">
          <img src="../images/loading.gif" alt />
        </span>
      </div>
    </mt-loadmore>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loadPage: 2,
      saleitemlist: [],
      topStatus: '',
      allLoaded: false,
      loading: false
    }
  },
  created () {
    this.queryFeedsList()
  },
  methods: {
    toDetail (itemId, itemSource, type, commissionAmount) {
      if (type === '01' || type === '02') {
        this.toPage('product2', { id: itemId, feedsLinkSource: itemSource, commissionAmount: commissionAmount })
      } else if (type === '03') {
        this.toPage('advPage', { id: itemId, feedsLinkSource: itemSource, commissionAmount: commissionAmount })
      }
    },
    queryFeedsList () {
      this.$http('GET', this.api.queryChosenFeedsList, {
        page: 1,
        pageSize: 10
      }).then(res => {
        this.saleitemlist = res.data.model.list
        console.log(res.data.model.list)
      })
    },
    loadTop () {
      // 顶部刷新
      this.loadPage = 2
      this.allLoaded = false
      this.$nextTick(() => {
        this.queryFeedsList()
        setTimeout(() => {
          this.$refs.loadmore.onTopLoaded()
        }, 1000)
      })
    },
    topStatusChange (status) {
      // 上拉状态改变
      this.topStatus = status
    },
    loadMore () {
      if (this.allLoaded) {
        console.log('没有更多了')
        return
      }
      if (this.loading === true) {
        return
      } else {
        this.loading = true
      }
      // 底部加载更多
      if (this.$route.name === 'home') {
        this.$http('GET', this.api.queryChosenFeedsList, {
          page: this.loadPage,
          pageSize: 10
        }).then(res => {
          if (res.data.success === true) {
            if (res.data.model.list != null) {
              if (res.data.model.list.length > 0) {
                this.loadPage++
                this.$nextTick(() => {
                  this.saleitemlist = this.saleitemlist.concat(
                    res.data.model.list
                  )
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
    }
  },
  filters: {
    goodsTagsDescFilter (goodsTags) {
      if (goodsTags !== null) {
        let arr = goodsTags.split(',')
        let str = arr[0]
        if (str === 'hkeep') {
          return 'bug价'
        } else if (str === 'hcash') {
          return '预告价'
        } else if (str === 'cabprice') {
          return '白菜价'
        } else if (str === 'hislow') {
          return '历史低价'
        } else if (str === 'notice') {
          return '预告价'
        } else {
          return ''
        }
      } else {
        return ''
      }
    }
  }
}
</script>
