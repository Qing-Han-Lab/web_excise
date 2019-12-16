<style lang="scss" scoped>
.product2 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .product2-content {
    flex: 1;
    overflow: auto;
    .product2-content-swiper {
      width: 375px;
      height: 200px;
      overflow: hidden;
      img {
        margin: 0 auto;
        width: auto;
        height: 200px;
        display: block;
      }
      /deep/ .swiper-pagination-bullet-active {
        background: #fb2c68;
      }
    }
    .product2-content-title {
      padding: 13px;
      font-size: 18px;
      font-family: "SourceHanSansSC";
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      line-height: 27px;
    }
    .product2-content-active {
      padding: 0px 13px 5px;
      font-size: 16px;
      font-family: "SourceHanSansSC";
      font-weight: 400;
      color: rgba(251, 44, 104, 1);
      line-height: 25px;
    }
    .product2-content-time {
      margin-top: 5px;
      margin-left: 13px;
      font-family: "PingFangSC-Medium";
      font-size: 12px;
      color: #999999;
      text-indent: 30px;
      height: 20px;
      line-height: 20px;
      background-repeat: no-repeat;
      background-size: 20px;
      background-position: left center;
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
    .product2-content-context {
      padding: 14px 10px 15px;
      border-bottom: 5px solid rgba($color: #f7f7f7, $alpha: 0.7);
      .product2-content-context-p {
        padding-bottom: 20px;
        font-family: "PingFangSC-Regular";
        font-size: 14px;
        line-height: 24px;
        color: #000000;
      }
      .product2-content-context-tip {
        font-family: "PingFangSC-Medium";
        font-size: 12px;
        color: #999999;
      }
    }
    .product2-content-hot {
      background-color: #f7f7f7;
      padding-bottom: 10px;
      .product2-content-hot-title {
        padding-top: 14px;
        padding-left: 10px;
        padding-bottom: 8px;
        font-size: 14px;
        font-family: "SourceHanSansSC";
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        line-height: 20px;
      }
    }
  }
}
.h5 {
  margin-top: 17px;
  width: 375px;
  height: 5px;
  background-color: #f7f7f7;
  opacity: 0.7;
}
.share {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 25;
  transition-duration: 500ms;
  .share-box {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 375px;
    height: 221px;
    background-color: #f9f9f9;
    z-index: 26;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    animation: toBottom 400ms ease-in-out;
    .share-box-title {
      margin-top: 25px;
      font-family: "SourceHanSansSC-Medium";
      font-size: 16px;
      letter-spacing: 1px;
      color: #8440fa;
      text-align: center;
    }
    .share-box-list {
      padding: 0 30px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      .share-box-list-item {
        .share-box-list-item-img {
          width: 44px;
          height: 44px;
          img {
            width: 44px;
            height: 44px;
          }
        }
        .share-box-list-item-text {
          margin-top: 3px;
          text-align: center;
          font-family: "SourceHanSansSC-Regular";
          font-size: 11px;
          letter-spacing: 1px;
          color: rgba(51, 51, 51, 0.6);
        }
      }
    }
    .share-box-cancel {
      width: 375px;
      height: 57px;
      line-height: 57px;
      font-family: "SourceHanSansSC-Regular";
      font-size: 16px;
      letter-spacing: 1px;
      color: rgba(51, 51, 51, 0.6);
      text-align: center;
      border-top: solid 1px rgba(151, 151, 151, 0.4);
      background: #fff;
    }
  }
}
@keyframes toBottom {
  0% {
    bottom: -225px;
  }
  100% {
    bottom: 0;
  }
}
</style>

<template>
  <div class="product2">
    <div class="product2-content">
      <div class="product2-content-swiper">
        <swiper :options="swiperOption" ref="imageSwiper">
          <swiper-slide v-for="(item,index) in images" :key="index">
            <img v-lazy="item" />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="product2-content-title">{{productDetail.itemName}}</div>
      <div class="product2-content-active">{{productDetail.goodsTags}}</div>
      <div
        class="product2-content-time"
        :class="checkPlatformClass(productDetail.platform)"
      >{{checkPlatform(productDetail.platform)}} | {{productDetail.gmtModifyTime ? formatTime(productDetail.publicTime) : ''}}</div>
      <div class="h5"></div>
      <div class="product2-content-context">
        <div class="product2-content-context-p" v-html="productDetail.recomendReason ? productDetail.recomendReason : ''"></div>
        <div class="product2-content-context-p" v-html="productDetail.goodsDetail ? productDetail.goodsDetail : ''"></div>
        <div class="product2-content-context-tip">商品价格有较强的时效性，有需要的话尽快下手哦！</div>
      </div>
      <Reply :content="productDetail"></Reply>
      <div class="product2-content-hot">
        <div class="product2-content-hot-title" v-if="productDetail.actSubContentVoList">好价单品</div>
        <div
          class="home-content-knock-item"
          v-for="(item,index) in productDetail.actSubContentVoList"
          :key="index"
          @click="toThird(productDetail)"
        >
          <div class="home-content-knock-item-left">
            <img v-lazy="checkUrl(item.itemPicUrl)" />
          </div>
          <div class="home-content-knock-item-right">
            <div
              class="home-content-knock-item-right-title"
              :class="{'tb':productDetail.platform==='taobao','jd':productDetail.platform==='jingdong','pdd': productDetail.platform==='pingduoduo','tm': productDetail.tmall}"
            >{{item.itemName}}</div>
            <div class="home-content-knock-item-right-marks" v-if="item.itemFeature">
              <div
                class="home-content-knock-item-right-marks-item"
                v-for="(item,index) in item.itemFeature"
                :key="index"
              >{{item}}</div>
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
              <div class="home-content-knock-item-right-buy-knock" v-if="item.saledNumber">
                 <span>已抢：{{item.saledNumber > 10000? `${Number(item.saledNumber/10000).toFixed(1)}万`: item.saledNumber}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="product2-content-hot">
        <div class="product2-content-hot-title">为您推荐</div>
        <div class="all-item" v-for="(item,index) in hotFeeds" :key="`B${index}`" @click="toPage('product2' ,{id: item.contentId, feedsLinkSource: item.feedsLinkSource})">
          <div class="all-item-top" v-if="item.contentFeedsType==='top'"></div>
          <div class="all-item-hot" v-if="item.contentFeedsType === 'hot'"></div>
          <div class="all-item-smart" v-if="item.contentFeedsType === 'chosen'"></div>
          <div class="all-item-left">
            <img v-lazy="item.itemPicUrl" alt />
          </div>
          <div class="all-item-right">
            <div
              class="all-item-right-title"
            >{{item.itemName}}</div>
            <div class="all-item-right-content">
              <div class="all-item-right-content-left">
                {{item.finalPrice}}
                <span>元包邮</span>
              </div>
              <div class="all-item-right-content-right" v-if="item.commissionAmount">
                <span>￥</span>{{item.commissionAmount}}
              </div>
            </div>
            <div class="all-item-right-widget">
              <div class="all-item-right-widget-time" :class="`${checkPlatformClass(item.platform)}`">{{checkPlatform(item.platform)}} | {{formatTime(item.publicTime)}}</div>
              <div class="all-item-right-widget-right">
                <div class="all-item-right-widget-like">{{item.intrestTimes}}</div>
                <div class="all-item-right-widget-reply">{{item.commentTimes}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="product-landing" v-if="isGoing">
      <div class="product-landing-mask" @click="isGoing = false"></div>
      <div class="product-landing-box" @click="isGoing = false">
        <div class="product-landing-box-top">
          <div class="product-landing-box-top-title" v-if="productDetail.platform==='taobao'">正在跳转淘宝</div>
          <div class="product-landing-box-top-title" v-if="productDetail.platform==='tmall'">正在跳转天猫</div>
          <div class="product-landing-box-top-title" v-if="productDetail.platform==='pingduoduo'">正在跳转拼多多</div>
          <div class="product-landing-box-top-title" v-if="productDetail.platform==='jingdong'">正在跳转京东</div>
          <div class="product-landing-box-top-fromto">
            <div class="product-landing-box-top-fromto-left">
              <img src="./images/logo.png" alt />
            </div>
            <div class="product-landing-box-top-fromto-mid"></div>
            <div class="product-landing-box-top-fromto-right">
              <img src="../message/images/from_tb.png" v-if="productDetail.platform==='taobao'" alt />
              <img src="../home/images/icon_tmall_sq.png" v-if="productDetail.platform==='tmall'" alt />
              <img src="../message/images/from_jd.png" v-if="productDetail.platform==='jingdong'" alt />
              <img src="../message/images/from_pdd.png" v-if="productDetail.platform==='pingduoduo'" alt />
            </div>
          </div>
        </div>
        <div class="product-landing-box-bottom">
          <div class="product-landing-box-bottom-reward" v-if="productDetail.commissionAmount">
            <div class="product-landing-box-bottom-reward-text">奖励</div>
            <div class="product-landing-box-bottom-reward-num">￥{{productDetail.commissionAmount}}</div>
          </div>
          <div class="product-landing-box-bottom-bonus" v-if="productDetail.couponAmount">
            <div class="product-landing-box-bottom-bonus-text">领券</div>
            <div class="product-landing-box-bottom-bonus-num">￥{{productDetail.couponAmount}}</div>
          </div>
          <div class="product-landing-box-bottom-getprice">到手价 ￥{{productDetail.finalPrice}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Reply from '../product/components/reply'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data () {
    return {
      saleitem: {},
      swiperOption: {
        speed: 300,
        pagination: {
          el: '.swiper-pagination'
        }
      },
      productDetail: {
        actSubContentVoList: []
      },
      images: [],
      oneFeeds: [],
      hotFeeds: [],
      allLoaded: false,
      hotPage: 2,
      loading: false,
      isGoing: false
    }
  },
  created () {
    this.getAdDetail()
    this.queryHotFeedsList()
  },
  methods: {
    getAdDetail () {
      this.$http('GET', this.api.getContentDetail, {
        contentId: this.$route.query.id,
        feedsLinkSource: this.$route.query.feedsLinkSource
      }).then((res) => {
        if (res.data.success === true) {
          this.pictype = res.data.model.type
          if (res.data.model.images != null) {
            this.images = res.data.model.images
          }
          this.productDetail = res.data.model
        }
      })
    },
    queryHotFeedsList () {
      this.$http('GET', this.api.queryHotFeedsList, {
        page: 1,
        pageSize: 3,
        exContentId: ''
      }).then(res => {
        if (res.data.success === true) {
          this.hotFeeds = res.data.model.list
        }
      })
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
      this.$http('GET', this.api.queryHotFeedsList, {
        page: 1,
        pageSize: 10,
        exContentId: ''
      }).then(res => {
        if (res.data.success === true) {
          if (res.data.model.list != null) {
            if (res.data.model.list.length > 0) {
              this.hotFeeds = this.hotFeeds.concat(res.data.model.list)
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
    },
    toThird (detail) {
      this.isGoing = true
      this.toUrl(detail, () => {
        this.isGoing = false
      }, this.callback)
    },
    callback (res, chainUrl) {
      this.isGoing = false
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
    }
  },
  components: {
    swiper,
    swiperSlide,
    Reply
  }
}
</script>
