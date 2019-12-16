<style lang="scss" scoped>
.all {
  // -webkit-overflow-scroll: touch;
  // flex: 1;
  // padding: 10px 0 0;
  width: 375px;
  background: #f7f7f7;
  // .all-video {
  //   padding: 0 10px 10px;
  //   display: flex;
  //   flex-direction: row;
  //   justify-content: space-between;
  //   flex-wrap: wrap;
  //   overflow: hidden;
  //   .all-video-item {
  //     position: relative;
  //     margin-top: 10px;
  //     width: 170px;
  //     height: 265px;
  //     background: #fff;
  //     border-radius: 10px;
  //     .all-video-price {
  //       position: absolute;
  //       top: 0;
  //       left: 0;
  //       width: 50px;
  //       height: 18px;
  //       line-height: 18px;
  //       background-image: linear-gradient(137deg, #ff005e 0%, #fe0635 100%);
  //       border-top-left-radius: 5px;
  //       border-bottom-right-radius: 5px;
  //       font-family: "DINAlternate-Bold";
  //       font-size: 12px;
  //       color: #ffffff;
  //       text-align: center;
  //       i {
  //         font-family: "PingFangSC-Medium";
  //         font-size: 10px;
  //         color: #ffffff;
  //         font-style: normal;
  //       }
  //       span {
  //         font-family: "PingFangSC-Medium";
  //         font-size: 8px;
  //         color: #ffffff;
  //       }
  //     }
  //     .all-video-item-video {
  //       position: relative;
  //       width: 170px;
  //       height: 170px;
  //       img {
  //         width: 170px;
  //         height: 170px;
  //       }
  //       .all-video-item-video-play {
  //         position: absolute;
  //         top: 50%;
  //         left: 50%;
  //         width: 30px;
  //         height: 30px;
  //         transform: translate3d(-50%, -50%, 0);
  //         background-image: url("./images2/icon_play.png");
  //         background-repeat: no-repeat;
  //         background-size: cover;
  //       }
  //       .all-video-item-video-playd {
  //         position: absolute;
  //         bottom: 6px;
  //         right: 2px;
  //         font-family: "PingFangSC-Medium";
  //         font-size: 8px;
  //         text-indent: 16px;
  //         color: #ffffff;
  //         background-color: rgba($color: #000000, $alpha: 0.4);
  //         padding: 4px 5px;
  //         border-radius: 10px;
  //         background-image: url("./images2/icon_playd.png");
  //         background-repeat: no-repeat;
  //         background-position: 6px center;
  //         background-size: 9px 12px;
  //       }
  //     }
  //     .all-video-item-title {
  //       font-family: "PingFangSC-Medium";
  //       font-size: 14px;
  //       color: #333333;
  //       padding: 3px 7px;
  //       line-height: 20px;
  //       text-overflow: -o-ellipsis-lastline;
  //       overflow: hidden;
  //       text-overflow: ellipsis;
  //       display: -webkit-box;
  //       -webkit-line-clamp: 2;
  //       line-clamp: 2;
  //       -webkit-box-orient: vertical;
  //     }
  //     .all-video-item-price {
  //       padding: 0 7px;
  //       display: flex;
  //       flex-direction: row;
  //       justify-content: space-between;
  //       align-items: center;
  //       .all-video-item-price-num {
  //         font-family: "DINAlternate-Bold";
  //         font-size: 16px;
  //         color: #fb2c68;
  //       }
  //       .all-video-item-price-cert {
  //         font-family: "DINAlternate-Bold";
  //         font-size: 8px;
  //         color: #9c6009;
  //         background-image: url("../images/certificate_orange.png");
  //         background-repeat: no-repeat;
  //         background-size: 100% 100%;
  //         padding: 3px 7px;
  //       }
  //     }
  //     .all-video-item-time {
  //       margin-top: 10px;
  //       margin-left: 7px;
  //       font-family: "PingFangSC-Medium";
  //       font-size: 10px;
  //       color: #999999;
  //       text-indent: 25px;
  //       height: 20px;
  //       line-height: 20px;
  //       background-repeat: no-repeat;
  //       background-size: 20px;
  //       background-position: left center;
  //       &.tmall {
  //         background-image: url("./images2/icon_tmall.png");
  //       }
  //       &.tb {
  //         background-image: url("./images2/icon_tb.png");
  //       }
  //       &.jd {
  //         background-image: url("./images2/icon_jd.png");
  //       }
  //       &.sn {
  //         background-image: url("./images2/icon_sn.png");
  //       }
  //       &.kl {
  //         background-image: url("./images2/icon_kl.png");
  //       }
  //       &.yp {
  //         background-image: url("./images2/icon_yp.png");
  //       }
  //       &.dd {
  //         background-image: url("./images2/icon_dd.png");
  //       }
  //     }
  //   }
  // }
}
.all-item {
  &:first-child{
    margin-top: 10px;
  }
}
.load {
  margin-top: 50px;
  text-align: center;
  img {
    width: 120px;
    height: 120px
  }
  .load-text {
    color: #666;
    font-size: 16px;
  }
}
</style>

<template>
  <div class="all" ref="all">
    <div
      v-for="(item,index) in topList"
      :key="index"
      @click="toDetail(item)"
    >
      <div class="all-item" v-if="item.isWider===0">
        <div class="all-item-top" v-if="item.contentFeedsType==='top'"></div>
        <div class="all-item-hot" v-if="item.contentFeedsType === 'hot'"></div>
        <div class="all-item-smart" v-if="item.contentFeedsType === 'chosen'"></div>
        <div class="all-item-left">
          <img v-lazy="item.itemPicUrl" alt />
        </div>
        <div class="all-item-right">
          <div class="all-item-right-title">
            <span
              class="all-item-right-title-left"
              v-if="item.goodsTags!=='' && item.goodsTags!==null"
            >{{item.goodsTags}}</span>
            {{item.itemName}}
          </div>
          <div class="all-item-right-content">
            <div class="all-item-right-content-left">
              {{item.finalPrice}}
              <span v-if="item.isFreeShip === 0">元包邮</span>
            </div>
            <div
              class="all-item-right-content-right"
              v-if="item.commissionAmount && item.commissionAmount!=='0.00'"
            >
              <span>￥</span>
              {{item.commissionAmount}}
            </div>
          </div>
          <div class="all-item-right-widget">
            <div
              class="all-item-right-widget-time"
              :class="checkPlatformClass(item.platform)"
            >{{checkPlatform(item.platform)}} | {{formatTime(item.publicTime)}}</div>
            <div class="all-item-right-widget-right">
              <div class="all-item-right-widget-like">{{item.favoriteTimes}}</div>
              <div class="all-item-right-widget-reply">{{item.commentTimes}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="all-adver" v-if="item.isWider === 1">
        <div class="all-adver-top">
          <div class="all-adver-top-head">
            <img v-lazy="item.creatorHeadUrl" alt />
          </div>
          <div class="all-adver-top-name">{{item.creator || '好价鼻子'}}</div>
        </div>
        <div class="all-adver-banner">
          <img :src="item.itemPicUrl" alt />
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
    <div
      v-for="(item,index) in productList"
      :key="`B${index}`"
      @click="toDetail(item)"
    >
      <div class="all-item">
        <div class="all-item-top" v-if="item.contentFeedsType==='top'"></div>
        <div class="all-item-hot" v-if="item.contentFeedsType === 'hot'"></div>
        <div class="all-item-smart" v-if="item.contentFeedsType === 'chosen'"></div>
        <div class="all-item-left">
          <img v-lazy="item.itemPicUrl" alt />
        </div>
        <div class="all-item-right">
          <div class="all-item-right-title">
            <span
              class="all-item-right-title-left"
              v-if="item.goodsTags!=='' && item.goodsTags!==null"
            >{{item.goodsTags}}</span>
            {{item.itemName}}
          </div>
          <div class="all-item-right-content">
            <div class="all-item-right-content-left">
              {{item.finalPrice}}
              <span v-if="item.isFreeShip === 0">元包邮</span>
            </div>
            <div
              class="all-item-right-content-right"
              v-if="item.commissionAmount && item.commissionAmount!=='0.00'"
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
          <img :src="item.itemPicUrl" alt />
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
    <div class="load" v-if="topList.length === 0 && productList.length === 0">
      <img src="../images/loading_home.gif" alt="">
      <div class="load-text">加载中...</div>
    </div>
    <!-- <div class="all-video">
      <div class="all-video-item" v-for="(item,index) in 2" :key="`C${index}`" @click="toPage('product2')">
        <div class="all-video-price">
          <i>奖</i>
          <span>￥</span>3.00
        </div>
        <div class="all-video-item-video">
          <div class="all-video-item-video-play"></div>
          <div class="all-video-item-video-playd">9999</div>
          <img src="../../../assets/demo.jpg" alt />
        </div>
        <div class="all-video-item-title">正品珍珠粉面膜粉天然补水滋润肌肤</div>
        <div class="all-video-item-price">
          <div class="all-video-item-price-num">37.9元</div>
          <div class="all-video-item-price-cert">5元券</div>
        </div>
        <div class="all-video-item-time tb">当当 | 06-21 6:30</div>
      </div>
    </div>-->
  </div>
</template>

<script>
export default {
  data () {
    return {
      topList: [],
      productList: [],
      allLoaded: false,
      loadPage: 2,
      loading: false,
      canRefresh: true
    }
  },
  created () {
    this.queryList()
    this.queryTopFeedsList()
  },
  mounted () {},
  methods: {
    toDetail (item) {
      if (item.type === '01') {
        this.toPage('product2', { id: item.contentId, feedsLinkSource: item.feedsLinkSource, commissionAmount: item.commissionAmount })
      } else if (item.type === '02') {
        this.toPage('video', { id: item.contentId, feedsLinkSource: item.feedsLinkSource, commissionAmount: item.commissionAmount })
      } else if (item.type === '03') {
        // couponClickUrl
        // this.toPage('advPage', { id: item.contentId, feedsLinkSource: item.feedsLinkSource, commissionAmount: item.commissionAmount })
        this.goThirdPlatform(item.platform, item.couponClickUrl, (res) => {
          console.info('======callback, res=' + JSON.stringify(res))
          if (typeof res === 'string') {
            res = this.parseJSON(res)
          }
          if (!res.success) {
            if (res.data) {
              if (res.data.msgInfo === '1100') {
                return
              }
            }
            this.$toast(res.data.msgInfo)
          }
        })
      }
    },
    queryList () {
      // 获取全部的信息
      this.loading = true
      this.$http('GET', this.api.queryList, {
        page: 1,
        pageSize: 15
      }).then(res => {
        if (res.data.success === true) {
          this.productList = res.data.model.list
        }
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
    },
    queryTopFeedsList () {
      this.$http('GET', this.api.queryTopFeedsList, {
        page: 1,
        pageSize: 2
      }).then(res => {
        if (res.data.success === true) {
          this.topList = res.data.model.list
        }
      })
    },
    loadTop () {
      // 顶部刷新
      this.queryList()
      this.queryTopFeedsList()
      this.loadPage = 2
      this.allLoaded = false
      this.loading = false
      window.plus.webview.currentWebview().endPullToRefresh()
      // this.$nextTick(() => {
      //   setTimeout(() => {
      //     // this.$refs.loadmore.onTopLoaded()
      //   }, 1000)
      // })
    },
    loadMore () {
      // 底部加载更多
      if (this.loading === true) {
        return
      } else {
        this.loading = true
      }
      this.$http('GET', this.api.queryList, {
        page: this.loadPage,
        pageSize: 15
      }).then(res => {
        if (res.data.success === true) {
          if (res.data.model.list != null) {
            if (res.data.model.list.length > 0) {
              this.loadPage += 1
              this.$nextTick(() => {
                this.productList = this.productList.concat(res.data.model.list)
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
}
</script>
