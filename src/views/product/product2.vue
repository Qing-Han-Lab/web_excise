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
      position: relative;
      .goknock {
        position: absolute;
        z-index: 5;
         width:56px;
         height:20px;
       /*  padding: 1px 15px; */
        background: rgba(251, 44, 104, 1);
        border-radius: 10px 0px 0px 10px;
        right: 0;
        bottom: 25px;
        font-size: 12px;
        font-family: "SourceHanSansSC";
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        text-align: center;
        line-height: 20px;
        background-image: url("./images/arrow_right.png");
        background-repeat: no-repeat;
        background-size: 20% 80%;
        background-position: 45px 2px;
      }
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
      line-height: 25px;
      color: #333333;
      font-family: "PingFangSC-Regular";
      .titleMeta {
        float: left;
        display: block;
        margin-top: 3px;
        height: 15px;
        line-height: 15px;
        font-family: "PingFang-SC-Bold";
        font-size: 10px;
        color: #fca60b;
        border-radius: 4px;
        border: solid 1px #fca60b;
        padding: 0 3px;
        margin-right: 5px;
      }
      &:after {
        content: "";
        width: 0;
        height: 0;
        display: block;
        overflow: hidden;
        clear: both;
      }
    }
    .product2-content-title-date {
      color: #999999;
      font-size: 14px;
      margin-bottom: 20px;
      margin-left: 12px;
    }
    .product2-content-price {
      padding-left: 13px;
      font-family: "DINAlternate-Bold";
      font-size: 14px;
      margin-bottom: 25px;
      color: #fb2c68;
    }
    .product2-content-price-span {
      font-size: 25px;
      margin-right: 10px;
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
      &.pdd {
        background-image: url("./images/detail_pdd.png");
      }
    }
    .product2-content-cert {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      width: 355px;
      margin: 0 auto;
      border-bottom: 2px solid #f2f2f2;
      .product2-content-cert-subtitle {
        font-family: "PingFangSC-Medium";
        font-size: 12px;
        color: #999999;
        line-height: 50px;
      }
      .product2-content-cert-item {
        margin-left: 15px;
        padding: 3px 10px;
        font-family: "PingFangSC-Medium";
        font-size: 12px;
        color: #ffffff;
        background-image: url("./images/icon_reduce.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
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
        font-family: "PingFangSC-Medium";
        font-size: 16px;
        color: #333333;
      }
    }
  }
  .product2-content::-webkit-scrollbar {
    display: none;
  }
  .product2-replyinput {
    width: 375px;
    height: 50px;
    display: flex;
    padding: 0px 13px;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    background: #fff;
    border-top: 1px solid #e7e7e7;
    input {
      width: 275px;
      padding-left: 15px;
      color: #666;
      font-size: 14px;
      height: 31px;
      background: rgba(247, 247, 247, 1);
      border: 0px;
      outline: none;
      border-radius: 4px;
    }
    .smell_logo {
      width: 26px;
      height: 26px;
      background-image: url("../comment/images/smellface.png");
      background-size: 100% 100%;
    }
    .sendcomment {
      width: 39px;
      height: 23px;
      background: rgba(255, 255, 255, 1);
      border-radius: 4px;
      border: 1px solid rgba(204, 204, 204, 1);
      font-size: 14px;
      color: #ccc;
      text-align: center;
      line-height: 23px;
      transition-duration: 500ms;
      &.canSend {
        color: #fff;
        background: #fb2c68;
      }
    }
  }
  .product2-replyinput input::-webkit-input-placeholder {
    color: #ccc;
  }
  .product2-bottom {
    width: 375px;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    font-family: "PingFangSC-Medium";
    font-size: 10px;
    color: #999999;
    border-top: 1px solid #e7e7e7;
    .product2-bottom-like {
      display: flex;
      flex-direction: column;
      align-items: center;
      .product2-bottom-like-img {
        width: 18px;
        height: 16px;
        background-image: url("../home/components/images2/icon_like.png");
        background-repeat: no-repeat;
        background-size: 18px 16px;
        &.liked {
          background-image: url("../home/components/images2/icon_like_on.png");
        }
      }
      .product2-bottom-like-text {
        margin-top: 6px;
      }
    }
    .product2-bottom-share {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      .product2-bottom-share-img {
        width: 16px;
        height: 16px;
        background-image: url("./images/icon_appshare.png");
        background-repeat: no-repeat;
        background-size: 16px 16px;
      }
      .product2-bottom-share-text {
        margin-top: 6px;
      }
      .product2-bottom-share-money {
        position: absolute;
        text-align: center;
        line-height: 15px;
        top: -18px;
        /*  padding: 2px 5px; */
        width: 50px;
        height: 20px;
        background-image: url("./images/icon_buy_price_small.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        font-family: "PingFangSC-Regular";
        font-size: 6px;
        color: #ffffff;
      }
    }
    .product2-bottom-reply {
      display: flex;
      flex-direction: column;
      align-items: center;
      .product2-bottom-reply-img {
        width: 19px;
        height: 19px;
        background-image: url("../home/components/images2/icon_reply.png");
        background-repeat: no-repeat;
        background-size: 19px;
      }
      .product2-bottom-reply-text {
        margin-top: 6px;
      }
    }
    .product2-bottom-buy {
      position: relative;
      width: 110px;
      height: 32px;
      line-height: 32px;
      background-image: linear-gradient(180deg, #fc2474 0%, #fe0635 100%);
      border-top-left-radius: 10px;
      border-bottom-right-radius: 10px;
      font-family: "PingFang-SC-Bold";
      font-size: 16px;
      color: #ffffff;
      text-align: center;
      .product2-bottom-buy-money {
        position: absolute;
        text-align: center;
        line-height: 18px;
        top: -25px;
        width: 125px;
        height: 25px;
        background-image: url("./images/icon_buy_price.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        font-family: "PingFangSC-Regular";
        font-size: 10px;
        color: #ffffff;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: top;
        span {
          height: 20px;
          text-indent: 16px;
          background-image: url("./images/icon_money.png");
          background-repeat: no-repeat;
          background-size: 12px 9px;
          background-position: left center;
        }
        i {
          height: 20px;
          font-style: normal;
          padding: 0 2px;
        }
        b {
          height: 20px;
          font-weight: normal;
        }
        em {
          height: 20px;
          line-height: 22px;
          font-style: normal;
          font-family: "DINCondensed-Bold";
          font-size: 14px;
          color: #ffffff;
        }
        a {
          margin-left: 2px;
          width: 20px;
          height: 20px;
          background-image: url("./images/icon_close.png");
          background-repeat: no-repeat;
          background-size: 7px;
          background-position: center;
        }
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
  .share-mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 25;
  }
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
      flex-wrap: wrap;
      .share-box-list-item {
        display: flex;
        flex-direction: column;
        align-items: center;
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
.saveBox{
  width: 0;
  height: 0;
  overflow: hidden;
}
</style>

<template>
  <div class="product2">
    <div class="product2-content" ref="scrollView">
      <div class="product2-content-swiper">
        <div
          class="goknock"
          @click="goKnock"
          v-if="$store.state.userInfo.level==='plusLevel'&&canKnock"
        >去爆料</div>
         <div v-if="canReset" class="goknock" @click="toPage('resetknock',{ first: 1, second: 1, id: $route.query.id,feedsType :productDetail.contentFeedsType })">编辑</div>
        <swiper :options="swiperOption" ref="imageSwiper">
          <swiper-slide v-for="(item,index) in images" :key="index">
            <img :src="item" />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="product2-content-title">
        <span class="titleMeta" v-if="productDetail.goodsTags">{{productDetail.goodsTags}}</span>
        <div class="product2-content-title-text">{{productDetail.itemName}}</div>
      </div>
      <div
        class="product2-content-title-date"
        v-if="productDetail.isForecast"
      >活动时间： {{formatTime(productDetail.actStartTime,'MM-DD hh:mm')}}-{{formatTime(productDetail.actEndTime,'MM-DD hh:mm')}}</div>
      <div class="product2-content-price">
        <span v-if="productDetail.isForecast===1">
          预￥
          <span class="product2-content-price-span">{{productDetail.forecastPrice}}</span>
          当前价:￥{{productDetail.finalPrice}}元{{(productDetail.couponInfo && productDetail.couponInfo.discount && productDetail.couponInfo.discount !=='0.00')?'（需用券）':''}}
        </span>
        <span v-else-if="productDetail.isForecast===0">
          <span
            class="product2-content-price-span"
          >￥{{productDetail.finalPrice}}元{{(productDetail.couponInfo && productDetail.couponInfo.discount && productDetail.couponInfo.discount !=='0.00')?'（需用券）':''}}</span>
        </span>
      </div>
      <div
        class="product2-content-time"
        :class="checkPlatformClass(productDetail.platform)"
      >{{checkPlatform(productDetail.platform)}} | {{productDetail.publicTime ? formatTime(productDetail.publicTime) : ''}}</div>
      <div class="h5"></div>
      <div
        class="product2-content-cert"
        v-if="productDetail.couponInfo && productDetail.couponInfo.discount && productDetail.couponInfo.discount !=='0.00'"
      >
        <div class="product2-content-cert-subtitle">领券</div>
        <div
          class="product2-content-cert-item"
          @click="toThird(productDetail)"
        >{{productDetail.couponInfo.quota|showQuotaFilter}}{{productDetail.couponInfo.discount}}</div>
      </div>
      <div class="product2-content-context">
        <div
          class="product2-content-context-p"
          v-html="productDetail.recomendReason ? productDetail.recomendReason : ''"
        ></div>
        <div
          class="product2-content-context-p"
          v-html="productDetail.goodsDetail ? productDetail.goodsDetail : ''"
        ></div>
        <div class="product2-content-context-tip">商品价格有较强的时效性，有需要的话尽快下手哦！</div>
      </div>
      <Reply :content="productDetail" ref="reply"></Reply>
      <div class="product2-content-hot">
        <div class="product2-content-hot-title">热门好价</div>
        <div
          class="all-item"
          v-for="(item,index) in hotList"
          :key="index"
          @click="toPage('product2', {id: item.contentId, feedsLinkSource: item.feedsLinkSource})"
        >
          <div class="all-item-hot"></div>
          <div class="all-item-left">
            <img :src="item.itemPicUrl" alt />
          </div>
          <div class="all-item-right">
            <div class="all-item-right-title">{{item.itemName}}</div>
            <div class="all-item-right-content">
              <div class="all-item-right-content-left">
                {{item.finalPrice}}元
                <span v-if="item.isFreeShip">包邮</span>
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
              >{{checkPlatform(item.platform)}} | {{item.publicTime ? formatTime(item.publicTime) : ''}}</div>
              <div class="all-item-right-widget-right">
                <div class="all-item-right-widget-like">{{item.favoriteTimes}}</div>
                <div class="all-item-right-widget-reply">{{item.commentTimes}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="saveBox">
        <MainShare
        :productDetail="productDetail"
        :images="images"
        :qrcode="qrcode"
        :headerImg="headerImg"
        ref="canvas"
      ></MainShare>
      </div>
    </div>
    <div class="product2-replyinput" v-show="$store.state.sendShow1">
      <input
        ref="input1"
        type="text"
        :placeholder="$store.state.replyUser.userId?`回复${$store.state.replyUser.nickName}:`:'是时候发表评论了'"
        v-model="commentmsg"
      />
      <div class="sendcomment" :class="{'canSend': commentmsg !== ''}" @click="sendComment">发送</div>
    </div>
    <div class="product2-bottom" v-show="!$store.state.sendShow1">
      <div class="product2-bottom-like" @click="toLike">
        <div class="product2-bottom-like-img" :class="{'liked': productDetail.favoriteFlg}"></div>
        <div class="product2-bottom-like-text">{{productDetail.favoriteTimes}}</div>
      </div>
      <div class="product2-bottom-share" @click="toShare">
        <div
          class="product2-bottom-share-money"
          v-if="$route.query.commissionAmount !== '0.00' && $route.query.commissionAmount"
        >奖￥{{$route.query.commissionAmount}}</div>
        <div class="product2-bottom-share-img"></div>
        <div class="product2-bottom-share-text">分享</div>
      </div>
      <div class="product2-bottom-reply" @click="toComment">
        <div class="product2-bottom-reply-img"></div>
        <div class="product2-bottom-reply-text">{{productDetail.commentTimes}}</div>
      </div>
      <div class="product2-bottom-buy" @click="toThird(productDetail)">
        <div
          class="product2-bottom-buy-money"
          v-if="showBuy && $route.query.commissionAmount && $route.query.commissionAmount !== '0.00'"
        >
          <span>购买</span>
          <i>奖</i>
          <b>￥</b>
          <em>{{$route.query.commissionAmount}}</em>
          <a @click="closeShare"></a>
        </div>立即购买
      </div>
    </div>
    <div class="share" v-if="showShare">
      <div class="share-mask" @click="showShare=false"></div>
      <div class="share-box">
        <div class="share-box-title">分享到</div>
        <div class="share-box-list">
          <div class="share-box-list-item" @click="checkAuth('friend')">
            <div class="share-box-list-item-img">
              <img src="../invite/images/icon_wechat.png" alt />
            </div>
            <div class="share-box-list-item-text">微信</div>
          </div>
          <div class="share-box-list-item" @click="checkAuth('circle')">
            <div class="share-box-list-item-img">
              <img src="../invite/images/icon_friend.png" alt />
            </div>
            <div class="share-box-list-item-text">朋友圈</div>
          </div>
          <!-- <div class="share-box-list-item" @click="shareWX('sina')" v-if="platformType()==='ios'">
            <div class="share-box-list-item-img">
              <img src="./images/icon_sina.png" alt />
            </div>
            <div class="share-box-list-item-text">新浪微博</div>
          </div> -->
          <div class="share-box-list-item" @click="shareWX('local')">
            <div class="share-box-list-item-img">
              <img src="../invite/images/icon_save.png" />
            </div>
            <div class="share-box-list-item-text">保存图片</div>
          </div>
          <div class="share-box-list-item" @click="shareWX('copy')">
            <div class="share-box-list-item-img">
              <img src="../invite/images/icon_copy2.png" />
            </div>
            <div class="share-box-list-item-text">复制链接</div>
          </div>
          <div class="share-box-list-item" @click="copyTkl" v-if="productDetail.platform==='taobao' || productDetail.platform==='tmall'">
            <div class="share-box-list-item-img">
              <img src="./images/icon_tkl.png" alt />
            </div>
            <div class="share-box-list-item-text">复制淘口令</div>
          </div>
        </div>
        <div class="share-box-cancel" @click="cancelShare">取消</div>
      </div>
    </div>
    <div class="product-landing" v-if="isGoing">
      <div class="product-landing-mask" @click="isGoing = false"></div>
      <div class="product-landing-box" @click="isGoing = false">
        <div class="product-landing-box-top">
          <div class="product-landing-box-top-title" v-if="productDetail.platform==='taobao'">正在跳转淘宝</div>
          <div class="product-landing-box-top-title" v-if="productDetail.platform==='tmall'">正在跳转天猫</div>
          <div
            class="product-landing-box-top-title"
            v-if="productDetail.platform==='pingduoduo'"
          >正在跳转拼多多</div>
          <div
            class="product-landing-box-top-title"
            v-if="productDetail.platform==='jingdong'"
          >正在跳转京东</div>
          <div class="product-landing-box-top-fromto">
            <div class="product-landing-box-top-fromto-left">
              <img src="./images/logo.png" alt />
            </div>
            <div class="product-landing-box-top-fromto-mid"></div>
            <div class="product-landing-box-top-fromto-right">
              <img src="../message/images/from_tb.png" v-if="productDetail.platform==='taobao'" alt />
              <img
                src="../home/images/icon_tmall_sq.png"
                v-if="productDetail.platform==='tmall'"
                alt
              />
              <img
                src="../message/images/from_jd.png"
                v-if="productDetail.platform==='jingdong'"
                alt
              />
              <img
                src="../message/images/from_pdd.png"
                v-if="productDetail.platform==='pingduoduo'"
                alt
              />
            </div>
          </div>
        </div>
        <div class="product-landing-box-bottom">
          <div
            class="product-landing-box-bottom-reward"
            v-if="$route.query.commissionAmount && ($store.state.token !== '' && $store.state.userInfo.level !== 'normalLevel')"
          >
            <div class="product-landing-box-bottom-reward-text">奖励</div>
            <div class="product-landing-box-bottom-reward-num">￥{{$route.query.commissionAmount}}</div>
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
import Reply from './components/reply'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import MainShare from './components/mainShare'
import html2canvas from 'html2canvas'
import Canvas2Image from '@/utils/canvas2image'
import axios from 'axios'
import config from '@/utils/config'
export default {
  data () {
    return {
      productDetail: {
        couponInfo: {},
        favoriteTimes: 0,
        commentTimes: 0
      },
      swiperOption: {
        speed: 300,
        pagination: {
          el: '.swiper-pagination'
        }
      },
      showBuy: true,
      showShare: false,
      images: [],
      type: '',
      shareImg: '',
      hotList: [],
      commentmsg: '',
      pictype: '',
      qrcode: '',
      timer: -1,
      isGoing: false,
      preDistance: 0,
      url: '',
      canKnock: false, // 爆料 先设置为false
      canReset: false, // 编辑 先设置为false
      ossImg: '', // 上传到OSS的小图片 预览图
      headerImg: '',
      saveImg: '' // 保存到本地的图片
    }
  },
  created () {
    this.isUseCoupon = this.$route.query.couponClickUrl
    this.getDetail()
    this.queryRandomHotFeedsList()
    if (this.$store.state.replyUser.userId) {
      this.$store.dispatch('clearReplyState')
    }
    if (window.plus) {
      this.$store.dispatch('updateSerivces')
    } else {
      document.addEventListener('plusready', () => {
        this.$store.dispatch('updateSerivces')
      }, false)
    }
    if (this.$store.state.userInfo.level === 'plusLevel') {
      this.$http('GET', this.api.findHaveKnock, {
        contentId: this.$route.query.id
      }).then((res) => {
        if (res.data.model === true) {
          this.canKnock = true
        } else {
          this.canKnock = false
        }
      }).catch((res) => {
        this.canKnock = true
      })
    }
    this.checkReset()
    if (window.plus) {
      this.downHead()
    } else {
      document.addEventListener('plusready', this.downHead, false)
    }
  },
  mounted () {
    this.$refs.scrollView.addEventListener('scroll', (e) => {
      if (this.timer > 0) {
        return
      }
      this.timer = setTimeout(this.scrollListen, 300, e)
    })
  },
  filters: {
    showQuotaFilter (quota) {
      if (quota === '0.00' ||
        quota === '0.0' ||
        quota === '0' ||
        quota === null ||
        quota === '') {
        return '￥'
      } else {
        return '满' + quota + '减'
      }
    }
  },
  methods: {
    downHead () {
      // 下载头像
      if (this.$store.state.userInfo.userHeadUrl) {
        let dtask2 = window.plus.downloader.createDownload(this.$store.state.userInfo.userHeadUrl, {}, (d, status) => {
          if (d.state === 4 && status === 200) {
          // 下载完成
            let fileReader = new window.plus.io.FileReader()
            fileReader.onloadend = (evt) => {
            // 数组改变监听兼容，不要修改
              this.headerImg = evt.target.result
            }
            fileReader.readAsDataURL(window.plus.io.convertLocalFileSystemURL(d.filename), 'utf-8')
            if (window.plus) {
              window.plus.nativeUI.closeWaiting()
            }
          }
        })
        dtask2.start()
      } else {
        this.headerImg = require('@/assets/userhead.png')
      }
    },
    checkReset () {
      this.$http('GET', this.api.queryDictionary, {
        code: 'revelat_recom',
        type: 'grant'
      }).then((res) => {
        if (res.data.success === true) {
          let userId = this.$store.state.userId
          if (userId) {
            let canResetList = Object.values(res.data.model)
            for (let i = 0; i < canResetList.length; i++) {
              canResetList[i] = Number.parseInt(canResetList[i])
            }
            if (canResetList.indexOf(userId) !== -1) { // 展示
              this.canReset = true
            }
          }
        }
      })
    },
    scrollListen () {
      this.timer = -1
      if (this.$store.state.sendShow1) {
        if (Math.abs(this.$refs.scrollView.scrollTop - this.preDistance) > 15) {
          console.log('滚动重置状态')
          this.$store.dispatch('clearReplyState')
        }
      }
      this.preDistance = this.$refs.scrollView.scrollTop
    },
    sendComment () {
      if (this.$store.state.token === '') {
        this.$toast('请先登录再评论')
        setTimeout(() => {
          this.toPage('login')
        }, 1500)
        return
      }
      if (this.commentmsg === '') {
        this.$toast('请先输入评论内容')
        return
      }
      this.$refs.reply.sendComment(this.commentmsg)
      this.commentmsg = ''
      this.productDetail.commentTimes += 1
    },
    toComment () {
      if (this.$store.state.token === '') {
        this.$toast('请登录再评论哦~')
        setTimeout(() => {
          this.toPage('login')
        }, 1500)
        return
      }
      this.$store.dispatch('recommentState')
      this.$nextTick(() => {
        this.$refs.input1.focus()
      })
    },
    toLike () {
      // 收藏点击
      if (this.$store.state.token === '') {
        this.$toast('请登录再喜欢哦~')
        setTimeout(() => {
          this.toPage('login')
        }, 1500)
        return
      }
      this.$http('POST', this.api.favorite, {
        contentId: this.$route.query.id,
        feedsLinkSource: this.$route.query.feedsLinkSource
      }).then(res => {
        if (res.data.success === true) {
          if (this.productDetail.favoriteFlg) {
            this.productDetail.favoriteFlg = !this.productDetail.favoriteFlg
            this.productDetail.favoriteTimes -= 1
          } else {
            this.productDetail.favoriteTimes += 1
            this.productDetail.favoriteFlg = !this.productDetail.favoriteFlg
          }
        }
      })
    },
    toShare () {
      if (this.$store.state.token === '') {
        this.$toast('请先登录再分享哦~')
        setTimeout(() => {
          this.toPage('login')
        }, 1500)
        return
      }
      this.showShare = true
    },
    cancelShare () {
      this.showShare = false
    },
    closeShare () {
      this.showBuy = false
    },
    queryRandomHotFeedsList () {
      this.$http('GET', this.api.queryRandomHotFeedsList, {
        exContentId: this.$route.query.id,
        randomConut: 3
      }).then(res => {
        if (res.data.success === true) {
          this.hotList = res.data.model
        }
      })
    },
    getDetail () {
      this.$http('GET', this.api.getContentDetail, {
        contentId: this.$route.query.id
      }).then((res) => {
        if (res.data.success === true) {
          this.pictype = res.data.model.type
          if (res.data.model.images != null) {
            this.images = [...res.data.model.images]
          }
          this.productDetail = res.data.model
          this.url = res.data.model.itemUrl
          if (window.plus) {
            this.getImgFromNet()
          } else {
            document.addEventListener('plusready', this.getImgFromNet, false)
          }
          if (this.$store.state.token !== '') {
            if (this.productDetail.platform === 'taobao' || this.productDetail.platform === 'tmall') {
              this.changeUrl(() => {
                this.getTaoCommand(this.saveInfo)
              }, true)
            } else {
              this.changeUrl(() => {
                this.saveInfo()
              })
            }
          }
        }
      })
      this.$http('GET', this.api.view, {
        contentId: this.$route.query.id
      })
    },
    getImgFromNet () {
      let imgUrl = this.images[0]
      if (imgUrl === '' || imgUrl == null) {
        return
      }
      let dtask = window.plus.downloader.createDownload(imgUrl, {}, (d, status) => {
        if (d.state === 4 && status === 200) {
          // 下载完成
          let fileReader = new window.plus.io.FileReader()
          fileReader.onloadend = (evt) => {
            // 数组改变监听兼容，不要修改
            let tempArr = this.images
            tempArr[0] = evt.target.result
            this.images = [...tempArr]
          }
          fileReader.readAsDataURL(window.plus.io.convertLocalFileSystemURL(d.filename), 'utf-8')
        }
      })
      dtask.start()
    },
    copyTkl () {
      if (this.$store.state.token === '') {
        this.$toast('请先登录再获取淘口令')
        setTimeout(() => {
          this.toPage('login')
        }, 1500)
        return
      }
      if (this.productDetail.tkl) {
        this.setClipbordText(this.productDetail.tkl)
        this.$toast('淘口令已复制到您的剪切板')
      } else {
        this.getTaoCommand(() => {
          this.setClipbordText(this.productDetail.tkl)
          this.$toast('淘口令已复制到您的剪切板')
        })
      }
    },
    getTaoCommand (callback) {
      // 获取淘口令
      this.$http('GET', this.api.genTaoCommand, {
        itemUrl: this.productDetail.jumpUrl,
        logoUrl: this.productDetail.images[0],
        text: this.productDetail.itemName
      }).then(res => {
        if (res.data.success === true) {
          this.productDetail.tkl = res.data.model
          callback()
        } else {
          this.$toast(res.data.msgInfo)
        }
      })
    },
    saveInfo (callback) {
      // 保存中间页信息
      this.$http('POST', this.api.saveShareGoodsInfo, {
        goodsInfo: JSON.stringify({
          detail: this.productDetail,
          userInfo: this.$store.state.userInfo,
          hotList: this.hotList
        }),
        itemId: this.productDetail.contentId,
        platform: this.productDetail.platform
      }).then(res => {
        if (res.data.success === true) {
          this.qrcode = `${config.domain}/#/product2?sign=${encodeURIComponent(
            res.data.model
          )}&itemId=${this.productDetail.contentId}&platform=${this.productDetail.platform}`
          if (callback) {
            callback()
          }
        }
      })
    },
    checkAuth (type) {
      if (this.$store.state.token === '') {
        this.$toast('请先登录再分享')
        setTimeout(() => {
          this.toPage('login')
        }, 1500)
        return
      }
      this.type = type
      if (this.productDetail.jumpUrl && this.productDetail.chainUrl) {
        this.shareWXText()
        return
      }
      this.changeUrl(this.shareWXText)
    },
    changeUrl (callback2, conti) {
      if (this.productDetail.platform === 'taobao' || this.productDetail.platform === 'tmall') {
        if (this.$store.state.token === '') {
          this.toPage('login')
          return
        }
        this.$http('POST', this.api.isAuthorize, {
          platform: 'taobao'
        }).then(res => {
          if (res.data.model === false) {
            if (conti) {
              return
            }
            this.toAuth()
          } else {
            this.$http('GET', this.api.changeChain, {
              platform: this.productDetail.platform,
              itemId: (this.productDetail.platform === 'taobao' || this.productDetail.platform === 'tmall') ? this.productDetail.itemId : this.productDetail.url,
              extendJson: JSON.stringify({
                couponUrl:
                  this.productDetail.couponInfo && this.productDetail.couponInfo.couponClickUrl
                    ? this.productDetail.couponInfo.couponClickUrl
                    : ''
              })
            }).then(res => {
              let chainUrl
              if (res.success || res.data.success) {
                if (this.productDetail.platform === 'taobao' || this.productDetail.platform === 'tmall') {
                  chainUrl = this.productDetail.couponAmount ? res.data.model.shortUrl : res.data.model.url
                } else {
                  chainUrl = res.data.model.shortUrl
                }
                this.productDetail.jumpUrl = chainUrl
                this.productDetail.chainUrl = chainUrl
                if (callback2) {
                  callback2()
                }
              } else {
                this.callback(res, chainUrl)
              }
            })
          }
        })
      } else {
        this.$http('GET', this.api.changeChain, {
          platform: this.productDetail.platform,
          itemId: (this.productDetail.platform === 'taobao' || this.productDetail.platform === 'tmall') ? this.productDetail.itemId : this.productDetail.url,
          extendJson: JSON.stringify({
            couponUrl:
              this.productDetail.couponInfo && this.productDetail.couponInfo.couponClickUrl
                ? this.productDetail.couponInfo.couponClickUrl
                : ''
          })
        }).then(res => {
          let chainUrl
          if (res.success || res.data.success) {
            if (this.productDetail.platform === 'taobao' || this.productDetail.platform === 'tmall') {
              chainUrl = this.productDetail.couponAmount ? res.data.model.shortUrl : res.data.model.url
            } else {
              chainUrl = res.data.model.shortUrl
            }
            this.productDetail.jumpUrl = chainUrl
            this.productDetail.chainUrl = chainUrl
            if (callback2) {
              callback2()
            }
          } else {
            this.callback(res, chainUrl)
          }
        })
      }
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
    },
    shareWXText () {
      if (this.$store.state.token === '') {
        this.$toast('请先登录再分享')
        setTimeout(() => {
          this.toPage('login')
        }, 1500)
        return
      }
      this.$http('GET', this.api.share, {
        contentId: this.$route.query.id
      })
      if (this.qrcode !== '' && this.productDetail.chainUrl && this.productDetail.jumpUrl) {
        this.shareText()
        return
      }
      if (this.productDetail.platform === 'taobao' || this.productDetail.platform === 'tmall') {
        this.getTaoCommand(() => {
          this.saveInfo(this.shareText)
        })
      } else {
        this.saveInfo(this.shareText)
      }
    },
    shareWX (type) {
      // 分享
      this.type = type
      if (this.$store.state.token === '') {
        this.$toast('请先登录再分享')
        setTimeout(() => {
          this.toPage('login')
        }, 1500)
        return
      }
      this.$http('GET', this.api.share, {
        contentId: this.$route.query.id
      })
      if (this.qrcode !== '') {
        if (type === 'copy') {
          this.setClipbordText(this.qrcode)
          this.$toast('链接已复制到您的剪切板')
          return
        }
        if (type === 'local' && this.saveImg !== '') {
          this.shareImage(this.saveImg, this.type)
          return
        }
      }
      if (this.productDetail.jumpUrl && this.productDetail.chainUrl && this.qrcode) {
        if (window.plus) {
          if (type === 'local') {
            window.plus.nativeUI.showWaiting('保存中')
          } else {
            window.plus.nativeUI.showWaiting('分享中')
          }
        }
        html2canvas(this.$refs.canvas.$el, {
          logging: false
        }).then(canvas => {
          canvas.toBlob((blob) => {
            this.upLoadOSS(blob)
          }, 'image/jpeg', 1)
        })
        return
      }
      this.changeUrl(() => {
        this.saveInfo(() => {
          this.$nextTick(() => {
            console.log('开始转换')
            if (window.plus) {
              if (type === 'local') {
                window.plus.nativeUI.showWaiting('保存中')
              } else {
                window.plus.nativeUI.showWaiting('分享中')
              }
            }
            let savePic = document.querySelector('#savePic')
            html2canvas(savePic, {
              logging: false
            }).then(canvas => {
              canvas.toBlob((blob) => {
                this.upLoadOSS(blob)
              }, 'image/jpeg', 1)
            })
          })
        })
      })
    },
    upLoadOSS (blob) {
      // 上传OSS
      this.$store.dispatch('getOssInfo', () => {
        const formData = new FormData()
        const time = new Date().getTime()
        const filename = `${time}${Math.round(Math.random() * 100000000)}.jpg`
        const key = `${this.$store.state.ossInfo.dir}${filename}`
        formData.append('key', key)
        formData.append('name', filename)
        formData.append('policy', this.$store.state.ossInfo.policy)
        formData.append('OSSAccessKeyId', this.$store.state.ossInfo.accessid)
        formData.append('success_action_status', '200')
        formData.append('callback', '')
        formData.append('signature', this.$store.state.ossInfo.signature)
        formData.append('file', blob)
        axios
          .create({
            withCredentials: true,
            headers: { 'Content-Type': 'multipart/form-data' }
          })
          .post(this.$store.state.ossInfo.host, formData)
          .then(res => {
            if (res.status === 200) {
              this.saveImg = this.$store.state.ossInfo.host + '/' + key
              console.log('上传完毕,开始分享')
              this.shareImage(this.saveImg, this.type)
            }
          })
      })
    },
    shareText () {
      if (this.ossImg !== '') {
        var msg = {
          type: 'web',
          thumbs: [this.ossImg],
          pictures: [this.ossImg],
          href: this.qrcode,
          title: this.removeTag(this.productDetail.itemName).substring(0, 30),
          content: this.removeTag(this.productDetail.recomendReason).substring(0, 45)
        }
        console.log(msg)
        if (this.type === 'friend') {
          this.share(this.$store.state.share.sweixin, msg, {
            title: '我的好友',
            extra: { scene: 'WXSceneSession' }
          })
        } else if (this.type === 'circle') {
          this.share(this.$store.state.share.sweixin, msg, {
            title: '我的朋友圈',
            extra: { scene: 'WXSceneTimeline' }
          })
        }
        return
      }
      let activeImg = document.querySelector('.swiper-slide-active img')
      html2canvas(activeImg, {
        logging: true
      }).then(canvas => {
        let context = canvas.getContext('2d')
        context.mozImageSmoothingEnabled = false
        context.webkitImageSmoothingEnabled = false
        context.msImageSmoothingEnabled = false
        context.imageSmoothingEnabled = false
        let img = Canvas2Image.convertToJPEG(
          canvas,
          100,
          100
        )
        const ImageURL = img.src
        const block = ImageURL.split(';')
        const contentType = block[0].split(':')[1]
        const realData = block[1].split(',')[1]
        let blob = this.b64toBlob(realData, contentType)
        this.$store.dispatch('getOssInfo', () => {
          const formData = new FormData()
          const time = new Date().getTime()
          const filename = `${time}${Math.round(Math.random() * 100000000)}.jpg`
          const key = `${this.$store.state.ossInfo.dir}${filename}`
          formData.append('key', key)
          formData.append('name', filename)
          formData.append('policy', this.$store.state.ossInfo.policy)
          formData.append('OSSAccessKeyId', this.$store.state.ossInfo.accessid)
          formData.append('success_action_status', '200')
          formData.append('callback', '')
          formData.append('signature', this.$store.state.ossInfo.signature)
          formData.append('file', blob)
          axios
            .create({
              withCredentials: true,
              headers: { 'Content-Type': 'multipart/form-data' }
            })
            .post(this.$store.state.ossInfo.host, formData)
            .then(res => {
              if (res.status === 200) {
                let shareImg = this.$store.state.ossInfo.host + '/' + key
                this.ossImg = this.$store.state.ossInfo.host + '/' + key
                var msg = {
                  type: 'web',
                  thumbs: [shareImg],
                  pictures: [shareImg],
                  href: this.qrcode,
                  title: this.removeTag(this.productDetail.itemName).substring(0, 30),
                  content: this.removeTag(this.productDetail.recomendReason).substring(0, 45)
                }
                console.log(msg)
                if (this.type === 'friend') {
                  this.share(this.$store.state.share.sweixin, msg, {
                    title: '我的好友',
                    extra: { scene: 'WXSceneSession' }
                  })
                } else if (this.type === 'circle') {
                  this.share(this.$store.state.share.sweixin, msg, {
                    title: '我的朋友圈',
                    extra: { scene: 'WXSceneTimeline' }
                  })
                }
              }
            })
        })
      })
    },
    toThird (detail) {
      this.isGoing = true
      this.toUrl(detail, () => {
        this.isGoing = false
      }, this.callback)
    },
    goKnock () {
      /* let url = this.url */
      let first = 1; let second = 1
      this.vuexSetUrl()
      this.$http('GET', this.api.findHaveKnock, {
        contentId: this.$route.query.id
      }).then((res) => {
        if (res.data.success === true) {
          this.toPage('sendknock1', { first: first, second: second, contentId: this.$route.query.id, feedsLinkSource: this.$route.query.feedsLinkSource, formpage: 'product2' })
        } else {
          this.$toast(res.data.msgInfo)
        }
      })
      /* this.toPage('knockgoodprice', { first: first, second: second, url: url }) */
    },
    vuexSetUrl () {
      this.$store.commit('setUrl')
    }
  },
  components: {
    swiper,
    swiperSlide,
    Reply,
    MainShare
  }
}
</script>
