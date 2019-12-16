<style lang="scss" scoped>
.product {
  -webkit-overflow-scroll: touch;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .product-wrapper {
    flex: 1;
    overflow-y: auto;
    .product-inner {
      background: #f7f7f7;
      .product-description {
        background: #fff;
        padding-bottom: 20px;
        .product-image {
          min-height: 375px;
          position: relative;
          .goknock {
            position: absolute;
            z-index: 5;
            // width:56px;
            // height:20px;
            padding: 1px 15px;
            background: rgba(251, 44, 104, 1);
            border-radius: 10px 0px 0px 10px;
            right: 0;
            bottom: 100px;
            font-size: 12px;
            font-family: "SourceHanSansSC";
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            text-align: center;
            line-height: 20px;
            background-image: url("./images/arrow_right.png");
            background-repeat: no-repeat;
            background-size: 20% 80%;
            background-position: 50px 2px;
          }
          img {
            width: 375px;
            height: 375px;
          }
          .product-pagination {
            position: absolute;
            font-family: "DINAlternate-Bold";
            background: rgba(128, 128, 128, 0.4);
            right: 0;
            bottom: 20px;
            z-index: 2;
            color: #fff;
            height: 24px;
            line-height: 24px;
            padding: 0 10px;
            border-bottom-left-radius: 24px;
            border-top-left-radius: 24px;
            span {
              font-size: 18px;
            }
          }
        }
        .product-info {
          padding: 0 13px;
          .product-info-title {
            min-height: 60px;
            font-family: "PingFangSC-Regular";
            font-size: 18px;
            line-height: 28px;
            color: #333;
            &.tb {
              background-image: url("./images/detail_tb.png");
              background-repeat: no-repeat;
              background-size: 20px 20px;
              background-position: left 4px;
              text-indent: 24px;
            }
            &.jd {
              background-image: url("./images/detail_jd.png");
              background-repeat: no-repeat;
              background-size: 20px 20px;
              background-position: left 4px;
              text-indent: 24px;
            }
            &.pdd {
              background-image: url("./images/detail_pdd.png");
              background-repeat: no-repeat;
              background-size: 20px 20px;
              background-position: left 4px;
              text-indent: 24px;
            }
            &.tm {
              background-image: url("./images/detail_tm.png");
              background-repeat: no-repeat;
              background-size: 20px 20px;
              background-position: left 4px;
              text-indent: 24px;
            }
          }
          .product-info-preferential {
            padding: 4px 0;
            display: flex;
            height: 23px;
            line-height: 23px;
            font-family: "PingFangSC-Regular";
            font-size: 10px;
            text-align: center;
            .preferential-bonus {
              width: 65px;
              color: #fff;
              background-image: linear-gradient(
                180deg,
                #fe5082 0%,
                #f23069 100%
              );
              border-radius: 11px;
              span {
                font-family: "DINAlternate-Bold";
                font-size: 14px;
              }
            }
            .preferential-member {
              padding: 0 5px;
              background-image: linear-gradient(
                180deg,
                #4b4b4b 0%,
                #232323 100%
              );
              font-size: 13px;
              color: #fee4b3;
              border-radius: 11px;
              margin-left: 10px;
              span {
                display: inline-block;
                width: 11px;
                height: 13px;
                background: url("./images/icon_member.png") center no-repeat;
                background-size: 100%;
              }
            }
            .plusinform {
              background: linear-gradient(
                180deg,
                rgba(75, 75, 75, 1) 0%,
                rgba(35, 35, 35, 1) 100%
              );
              border-radius: 11px;
              font-size: 12px;
              font-family: "SourceHanSansSC";
              font-weight: 400;
              color: rgba(254, 228, 179, 1);
              padding: 3px 13px;
              line-height: 16px;
              margin: 0px auto;
            }
          }
          .product-info-price {
            padding: 5px 4px 0;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: baseline;
            .product-info-price-box {
              display: flex;
              flex-direction: row;
              justify-content: flex-start;
              align-items: baseline;
              .product-info-price-now {
                font-family: "DINAlternate-Bold";
                span {
                  font-size: 13px;
                }
                color: #fb2c68;
                font-size: 26px;
                font-weight: bold;
              }
              .product-info-price-old {
                font-family: "DINAlternate-Bold";
                font-size: 18px;
                color: #c2c2c2;
                text-decoration: line-through;
                margin-left: 3px;
              }
            }
            .product-info-price-sale {
              font-family: "DINAlternate-Bold";
              font-size: 16px;
              font-weight: bold;
              color: rgba(51, 51, 51, 0.6);
              span {
                font-weight: normal;
                font-size: 14px;
              }
            }
          }
        }
        .product-coupon {
          width: 340px;
          height: 98px;
          background: url("./images/coupon_bg.png") center no-repeat;
          background-size: 100%;
          margin: 9px auto 0;
          display: flex;
          align-items: center;
          font-family: "PingFangSC-Regular";
          color: #fff;
          .coupon-detail {
            width: 207px;
            padding: 0 23px 0 19px;
            .coupon-detail-value {
              font-size: 16px;
              span {
                font-family: "DINAlternate-Bold";
                font-size: 26px;
                &.value-num {
                  font-family: "SFNSDisplay";
                  font-size: 45px;
                }
              }
            }
            .coupon-detail-vaild {
              font-size: 11px;
            }
          }
          .grab-btn {
            width: 67px;
            padding: 0 12px;
            font-size: 20px;
            line-height: 23px;
            color: #fb5f1e;
            text-align: center;
          }
        }
      }
      .recommend-list {
        margin-top: 5px;
        height: 186px;
        .recommend-item {
          border-radius: 5px;
          overflow: hidden;
          margin-left: 5px;
          background-color: #fff;
          width: 124px;
          height: 186px;
        }
        &:first-child {
          margin-left: 9px;
        }
        .recommend-item-top {
          position: relative;
          img {
            width: 124px;
            height: 124px;
          }
          .recommend-item-preferential {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 47px;
            height: 18px;
            line-height: 18px;
            text-align: center;
            font-family: "DINAlternate-Bold";
            font-size: 10px;
            color: #fff;
            background-image: url("./images/icon_commend.png");
            background-repeat: no-repeat;
            background-size: 47px 18px;
            background-position: center center;
          }
        }
        .recommend-item-info {
          .recommend-item-info-title {
            padding: 0 4px;
            font-family: "PingFangSC-Regular";
            font-size: 12px;
            line-height: 19px;
            color: rgba(51, 51, 51, 1);
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .recommend-item-info-certificate {
            width: 38px;
            height: 14px;
            line-height: 14px;
            background-image: url("./images/certificate_orange.png");
            background-repeat: no-repeat;
            background-size: 38px 14px;
            font-family: "PingFangSC-Regular";
            font-size: 8px;
            color: #fff;
            text-align: center;
          }
          .recommend-item-info-price {
            padding: 5px 4px 0;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: baseline;
            .recommend-item-info-price-box {
              display: flex;
              flex-direction: row;
              justify-content: flex-start;
              align-items: baseline;
              .recommend-item-info-price-now {
                font-family: "DINAlternate-Bold";
                span {
                  font-size: 8px;
                }
                color: #fb2c68;
                font-size: 16px;
                font-weight: bold;
              }
              .recommend-item-info-price-old {
                font-family: "DINAlternate-Bold";
                font-size: 7.7px;
                color: #c2c2c2;
                text-decoration: line-through;
              }
            }
            .recommend-item-info-price-sale {
              font-family: "DINAlternate-Bold";
              font-size: 11px;
              font-weight: bold;
              color: rgba(51, 51, 51, 0.6);
              span {
                font-weight: normal;
                font-size: 9px;
              }
            }
          }
        }
      }
      .product-detail {
        .product-detail-title {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          font-family: "PingFangSC-Medium";
          font-size: 16px;
          height: 50px;
          line-height: 50px;
          color: #fb2c68;
          .product-detail-title-text {
            position: relative;
            &::before {
              content: "";
              display: block;
              width: 24px;
              height: 8px;
              background: url("./images/icon_detail.png") no-repeat center
                center;
              background-size: 100%;
              position: absolute;
              top: 50%;
              left: -30px;
              transform: translate3d(0, -50%, 0);
            }
            &::after {
              content: "";
              display: block;
              width: 24px;
              height: 8px;
              background: url("./images/icon_detail.png") no-repeat center
                center;
              background-size: 100%;
              position: absolute;
              top: 50%;
              right: -30px;
              transform: translate3d(0, -50%, 0);
            }
          }
        }
        .product-detail-content {
          width: 375px;
          .product-detail-content-text {
            padding: 0 10px 10px 10px;
          }
          img {
            width: 100%;
            border: 0;
          }
        }
      }
    }
  }
  .product-tool {
    position: relative;
    width: 375px;
    height: 52px;
    line-height: 52px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
    font-family: "PingFangSC-Regular";
    color: #fff;
    font-size: 14px;
    .tool-item {
      flex: 1;
      background-image: linear-gradient(143deg, #781ffa 0%, #9501dd 100%);
      &.tool-buy {
        background-image: linear-gradient(47deg, #fc4c8c 0%, #fb2c68 100%);
      }
    }
    .product-tool-icon {
      position: absolute;
      left: 68px;
      top: -64px;
      width: 56px;
      height: 64px;
      background-image: url("./images/icon_share1.png");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      z-index: 11;
      animation: 2s circle infinite ease-in-out;
    }
  }
}
.checkAuth {
  margin: 5px auto 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 350px;
  height: 44px;
  background-color: #ffffff;
  box-shadow: 0px 1px 19px -10px rgba(0, 0, 0, 0.3);
  border-radius: 25px;
  .checkAuth-text {
    margin-left: 14px;
    font-family: "PingFangSC-Medium";
    font-size: 13px;
    color: #666666;
    text-indent: 17px;
    background-image: url("./images/icon_auth.png");
    background-repeat: no-repeat;
    background-size: 15px 18px;
    background-position: left center;
  }
  .checkAuth-btn {
    margin-right: 11px;
    width: 70px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    background-image: linear-gradient(138deg, #f73089 0%, #fb2c68 100%);
    border-radius: 13px;
    font-family: "PingFangSC-Medium";
    font-size: 14px;
    color: #ffffff;
  }
}
@keyframes circle {
  0% {
    top: -80px;
  }
  50% {
    top: -64px;
  }
  100% {
    top: -80px;
  }
}
.back {
  position: fixed;
  top: 10px;
  left: 10px;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 50;
  background-image: url("./images/arrow_left.png");
  background-repeat: no-repeat;
  background-size: 18px 21px;
  background-position: center center;
  transform: translateZ(0);
}
.intro {
  background: rgba(251, 44, 104, 0.1);
  color: #fb2c68;
  text-align: center;
  line-height: 30px;
  font-size: 15px;
}
.product-recommend-title {
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .product-recommend-title-text {
    position: relative;
    font-family: "PingFangSC-Medium";
    font-size: 16px;
    color: #faa111;
    &::before {
      content: "";
      width: 18px;
      height: 9px;
      display: block;
      position: absolute;
      top: 50%;
      left: -30px;
      transform: translate3d(0, -50%, 0);
      background: url("./images/icon_guess.png") no-repeat center center;
      background-size: 100% 100%;
    }
    &::after {
      content: "";
      width: 18px;
      height: 9px;
      display: block;
      position: absolute;
      top: 50%;
      right: -30px;
      transform: translate3d(0, -50%, 0);
      background: url("./images/icon_guess.png") no-repeat center center;
      background-size: 100% 100%;
    }
  }
  .product-recommend-title-more {
    font-family: "PingFangSC-Medium";
    font-size: 12px;
    color: rgba(51, 51, 51, 0.6);
    padding: 0 14px;
  }
}
.product-shop {
  margin-top: 13px;
  padding: 15px;
  width: 345px;
  height: 67px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .product-shop-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .product-shop-top-left {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      .product-shop-top-left-head {
        width: 35px;
        height: 35px;
        background-color: #d8d8d8;
        border-radius: 4px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .product-shop-top-left-text {
        margin-left: 10px;
        font-family: "PingFangSC-Medium";
        font-size: 18px;
        letter-spacing: 1px;
        color: #333333;
      }
    }
    .product-shop-top-right {
      width: 75px;
      height: 22px;
      background-image: linear-gradient(37deg, #9668d6 0%, #fc4b7e 100%);
      border-radius: 11px;
      font-family: "PingFang-SC-Bold";
      font-size: 12px;
      color: #ffffff;
      line-height: 22px;
      text-align: center;
    }
  }
  .product-shop-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .product-shop-bottom-item {
      position: relative;
      font-family: "PingFangSC-Medium";
      font-size: 10px;
      line-height: 15px;
      color: rgba(51, 51, 51, 0.6);
      padding-right: 25px;
      &.high {
        &::after {
          position: absolute;
          top: 0;
          right: 0;
          content: "高";
          display: block;
          width: 15px;
          height: 15px;
          line-height: 15px;
          text-align: center;
          background-color: #fb2c68;
          border-radius: 8px;
          color: #fff;
        }
      }
      &.mid {
        &::after {
          position: absolute;
          top: 0;
          right: 0;
          content: "中";
          display: block;
          width: 15px;
          height: 15px;
          line-height: 15px;
          text-align: center;
          background-color: #fdb81c;
          border-radius: 8px;
          color: #fff;
        }
      }
      &.low {
        &::after {
          position: absolute;
          top: 0;
          right: 0;
          content: "低";
          display: block;
          width: 15px;
          height: 15px;
          line-height: 15px;
          text-align: center;
          background-color: #cccccc;
          border-radius: 8px;
          color: #fff;
        }
      }
    }
  }
}
</style>
<template>
  <div class="product">
    <!-- <div class="back" @click="goBack"></div> -->
    <div class="product-wrapper">
      <div class="product-inner">
        <div class="product-description">
          <div class="product-image">
            <div
              class="goknock"
              @click="goKnock"
              v-if="$store.state.userInfo.level==='plusLevel'&&canKnock"
            >去爆料</div>
            <!-- <div class="goknock" @click="toPage('resetknock',{first : 1,second:1,id:url})">编辑</div> -->
            <swiper :options="swiperOption" ref="imageSwiper">
              <swiper-slide v-for="(item,index) in detail.images" :key="index">
                <img v-lazy="checkUrl(item)" />
              </swiper-slide>
            </swiper>
            <div class="product-pagination">
              <span>{{num}}</span>
              /{{detail.images?detail.images.length:0}}
            </div>
          </div>
          <div class="product-info">
            <div
              class="product-info-title"
              :class="{'tb':ticket.platform === 'taobao','jd':ticket.platform === 'jingdong','pdd':ticket.platform === 'pingduoduo', 'tm':ticket.platform === 'tmall'}"
            >{{detail.itemName}}</div>
            <div class="product-info-preferential">
              <div class="preferential-bonus" v-if="ticket.discountPrice">
                奖￥
                <span>{{detail.discountPrice}}</span>
              </div>
              <div
                class="preferential-member"
                v-if="ticket.plusCommissionAmount!=='0.00' && userInfo.level!=='plusLevel'"
                @click="toPage('rule',{name:lev})"
              >
                升级{{checkUpLevel(userInfo.level)}}会员最高可奖{{checkCommission(userInfo.level)}}元
                <span></span>
              </div>
              <div
                class="preferential-member"
                v-if="userInfo.level === 'plusLevel'"
              >尊贵的plus会员，邀请好友成为粉丝可获赠更多会员时长</div>
            </div>
            <div class="product-info-price">
              <div class="product-info-price-box">
                <div class="product-info-price-now">
                  <span>￥</span>
                  {{ticket.finalPrice}}
                </div>
                <div class="product-info-price-old" v-if="detail.originPrice">
                  <span>￥</span>
                  {{detail.originPrice}}
                </div>
              </div>
              <div class="product-info-price-sale">
                <span>已抢:</span>
                {{ticket.saledNumber>10000?`${Number(ticket.saledNumber/10000).toFixed(1)}万`:ticket.saledNumber}}
              </div>
            </div>
          </div>
          <div class="product-coupon" v-if="ticket.couponAmount">
            <div class="coupon-detail">
              <div class="coupon-detail-value">
                <span>¥</span>
                <span class="value-num">{{ticket.couponAmount}}</span>
                优惠券
              </div>
              <div
                class="coupon-detail-vaild"
                v-if="ticket.couponInfo"
              >使用期限：{{formatTime(ticket.couponInfo.useStartTime, 'YYYY-MM-DD')}}-{{formatTime(ticket.couponInfo.useEndTime, 'YYYY-MM-DD')}}</div>
            </div>
            <div class="grab-btn" @click="toThird(ticket)">
              <div>点击</div>
              <div>领取</div>
            </div>
          </div>
        </div>
        <div class="product-recommend" v-if="recommends">
          <div class="product-recommend-title">
            <div class="product-recommend-title-more" style="visibility:hidden">查看更多 ></div>
            <div class="product-recommend-title-text">猜/你/喜/欢</div>
            <div class="product-recommend-title-more" @click="toPage('guess')">查看更多 ></div>
          </div>
          <div class="recommend-list">
            <swiper :options="swiperOption2">
              <swiper-slide v-for="(item,index) in recommends" :key="index">
                <div class="recommend-item" @click="toPage('product',{item:item})">
                  <div class="recommend-item-top">
                    <img v-lazy="checkUrl(item.itemPicUrl)" />
                    <div
                      class="recommend-item-preferential"
                      v-if="item.commissionAmount !== '0.00'"
                    >奖￥{{item.commissionAmount}}</div>
                  </div>
                  <div class="recommend-item-info">
                    <div class="recommend-item-info-title">{{item.itemName}}</div>
                    <div class="recommend-item-info-certificate">{{item.couponAmount}}元券</div>
                    <div class="recommend-item-info-price">
                      <div class="recommend-item-info-price-box">
                        <div class="recommend-item-info-price-now">
                          <span>￥</span>
                          {{item.finalPrice}}
                        </div>
                        <div class="recommend-item-info-price-old" v-if="item.originPrice">
                          <span>￥</span>
                          {{item.originPrice}}
                        </div>
                      </div>
                      <div class="recommend-item-info-price-sale">
                        <span>已抢:</span>
                        {{item.saledNumber>10000?`${Number(item.saledNumber/10000).toFixed(1)}万`:item.saledNumber}}
                      </div>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <!-- <div class="product-shop" v-if="false">
          <div class="product-shop-top">
            <div class="product-shop-top-left">
              <div class="product-shop-top-left-head">
                <img src="../../assets/userhead.png" alt />
              </div>
              <div class="product-shop-top-left-text">兀胜旗舰店</div>
            </div>
            <div class="product-shop-top-right">进店逛逛 ></div>
          </div>
          <div class="product-shop-bottom">
            <div class="product-shop-bottom-item high">宝贝描述：4.8</div>
            <div class="product-shop-bottom-item mid">宝贝描述：4.8</div>
            <div class="product-shop-bottom-item low">宝贝描述：4.8</div>
          </div>
        </div>-->
        <div class="product-detail">
          <div class="product-detail-title">
            <div class="product-detail-title-text">商品详情</div>
          </div>
          <div class="product-detail-content">
            <img
              v-for="(item,index) in detail.platform === 'jingdong' ? detail.goodsDetailImages : detail.images"
              :key="index"
              v-lazy="item"
              alt
            />
          </div>
        </div>
      </div>
    </div>
    <div class="checkAuth" v-if="!$store.state.token">
      <div class="checkAuth-text">完成登录后才能获得佣金奖励哦！</div>
      <div class="checkAuth-btn" @click="toPage('login')">去登录</div>
    </div>
    <div class="product-tool">
      <div class="product-tool-icon" v-if="userInfo.level !== 'normalLevel' && $store.state.token"></div>
      <div
        class="tool-item tool-share"
        @click="toShare('shareCreate',ticket.url,{item: ticket, detail: detail})"
        v-if="userInfo.level !== 'normalLevel' && $store.state.token"
      >{{ticket.commissionAmount && ticket.commissionAmount > 0?`分享赚${ticket.commissionAmount}元`:'去分享'}}</div>
      <div
        class="tool-item tool-share"
        @click="toRight"
        v-if="userInfo.level === 'normalLevel' && $store.state.token"
      >去升级</div>
      <div
        class="tool-item tool-share"
        @click="toShare('shareCreate',ticket.url,{item: ticket, detial: detail})"
        v-if="!$store.state.token"
      >去分享</div>
      <div
        class="tool-item tool-buy"
        @click="toThird(ticket)"
      >{{ticket.discountAmount && ticket.discountAmount>0?`购买省${ticket.discountAmount}元`:'去购买'}}</div>
    </div>
    <div class="product-landing" v-if="isGoing">
      <div class="product-landing-mask" @click="isGoing=false"></div>
      <div class="product-landing-box">
        <div class="product-landing-box-top">
          <div class="product-landing-box-top-title" v-if="ticket.platform==='taobao'">正在跳转淘宝</div>
          <div class="product-landing-box-top-title" v-if="ticket.platform==='tmall'">正在跳转天猫</div>
          <div class="product-landing-box-top-title" v-if="ticket.platform==='pingduoduo'">正在跳转拼多多</div>
          <div class="product-landing-box-top-title" v-if="ticket.platform==='jingdong'">正在跳转京东</div>
          <div class="product-landing-box-top-fromto">
            <div class="product-landing-box-top-fromto-left">
              <img src="./images/logo.png" alt />
            </div>
            <div class="product-landing-box-top-fromto-mid"></div>
            <div class="product-landing-box-top-fromto-right">
              <img src="../message/images/from_tb.png" v-if="ticket.platform==='taobao'" alt />
              <img src="../home/images/icon_tmall_sq.png" v-if="ticket.platform==='tmall'" alt />
              <img src="../message/images/from_jd.png" v-if="ticket.platform==='jingdong'" alt />
              <img src="../message/images/from_pdd.png" v-if="ticket.platform==='pingduoduo'" alt />
            </div>
          </div>
        </div>
        <div class="product-landing-box-bottom">
          <div
            class="product-landing-box-bottom-reward"
            v-if="ticket.commissionAmount && ($store.state.token !== '' && $store.state.userInfo.level !== 'normalLevel')"
          >
            <div class="product-landing-box-bottom-reward-text">奖励</div>
            <div class="product-landing-box-bottom-reward-num">￥{{ticket.commissionAmount}}</div>
          </div>
          <div class="product-landing-box-bottom-bonus" v-if="ticket.couponAmount">
            <div class="product-landing-box-bottom-bonus-text">领券</div>
            <div class="product-landing-box-bottom-bonus-num">￥{{ticket.couponAmount}}</div>
          </div>
          <div class="product-landing-box-bottom-getprice">到手价 ￥{{ticket.finalPrice}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'product',
  data () {
    return {
      num: 1, // 当前展示图片index
      recommends: [],
      swiperOption: {
        speed: 300,
        loop: true
      },
      swiperOption2: {
        speed: 300,
        slidesPerView: 2.8,
        freeMode: true,
        freeModeMomentumRatio: 1.5
      },
      detail: {},
      detailImages: [],
      ticket: {},
      userInfo: {},
      chainUrl: '',
      isGoing: false,
      isAuthor: false,
      url: '',
      canKnock: false, // 先设置为false,
      lev: ''
    }
  },
  mounted () {
    // 判断是什么会员
    if (this.$store.state.userInfo.level === 'superLevel') {
      this.lev = 'high'
    } else if (this.$store.state.userInfo.level === 'normalLevel') {
      this.lev = 'normal'
    }

    this.ticket = this.parseJSON(this.$route.query.item)
    this.getDetail(this.ticket)
    this.searchFavoriteProducts(this.ticket)
    if (this.$store.state.userInfo.level === 'plusLevel') {
      this.$http('GET', this.api.findHaveKnock, {
        contentId: this.ticket.itemId
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
    var _this = this
    this.$nextTick(() => {
      _this.swiper.on('slideChangeTransitionEnd', () => {
        _this.num = _this.swiper.activeIndex + 1
      })
    })
    if (this.$store.state.token !== '') {
      this.userInfo = this.$store.state.userInfo
    } else {
      if (this.ticket.plusCommissionAmount !== '0.00') {
        this.$http('GET', this.api.getUserInfo).then(res => {
          if (res.data.success === true) {
            this.$store.commit('saveState', {
              name: 'userInfo',
              data: res.data.model
            })
            this.userInfo = res.data.model
          }
        })
      }
    }
  },
  methods: {
    goKnock () {
      let url = this.url
      this.toPage('knockgoodprice', { first: 1, second: 1, url: url })
    },
    toShare (name, url, params) {
      if (
        this.ticket.platform === 'taobao' ||
        this.ticket.platform === 'tmall'
      ) {
        if (this.$store.state.token === '') {
          this.toPage('login')
          return
        }
        this.$http('POST', this.api.isAuthorize, {
          platform: 'taobao'
        }).then(res => {
          if (res.data.model === false) {
            this.toAuth()
          } else {
            this.$http('GET', this.api.changeChain, {
              platform: this.ticket.platform,
              itemId:
                (this.ticket.platform === 'taobao' || this.ticket.platform === 'tmall') ? this.ticket.itemId : url,
              extendJson: JSON.stringify({
                couponUrl:
                  this.ticket.couponInfo &&
                    this.ticket.couponInfo.couponClickUrl
                    ? this.ticket.couponInfo.couponClickUrl
                    : ''
              })
            }).then(res => {
              if (res.success || res.data.success) {
                let chainUrl
                if (this.ticket.platform === 'taobao' || this.ticket.platform === 'tmall') {
                  chainUrl = this.ticket.couponAmount
                    ? res.data.model.shortUrl
                    : res.data.model.url
                } else {
                  chainUrl = res.data.model.shortUrl
                }
                this.ticket.jumpUrl = chainUrl
                this.toPage(name, params)
              } else {
                this.callback(res)
              }
            })
          }
        })
      } else {
        this.$http('GET', this.api.changeChain, {
          platform: this.ticket.platform,
          itemId: (this.ticket.platform === 'taobao' || this.ticket.platform === 'tmall') ? this.ticket.itemId : url,
          extendJson: JSON.stringify({
            couponUrl:
              this.ticket.couponInfo && this.ticket.couponInfo.couponClickUrl
                ? this.ticket.couponInfo.couponClickUrl
                : ''
          })
        }).then(res => {
          if (res.success || res.data.success) {
            let chainUrl
            if (this.ticket.platform === 'taobao' || this.ticket.platform === 'tmall') {
              chainUrl = this.ticket.couponAmount
                ? res.data.model.shortUrl
                : res.data.model.url
            } else {
              chainUrl = res.data.model.shortUrl
            }
            this.ticket.jumpUrl = chainUrl
            this.toPage(name, params)
          } else {
            this.callback(res)
          }
        })
      }
    },
    getDetail (data) {
      this.$http('GET', this.api.getProductDetail, {
        itemId: data.itemId,
        platform: data.platform
      }).then(res => {
        if (res.data.success === true) {
          if (data.platform === 'jingdong') {
            this.url = data.url
          } else if (data.platform === 'pingduoduo') {
            this.url = data.url
          } else {
            this.url = res.data.model.itemUrl
          }
          this.detail = res.data.model
          this.detail.originPrice = data.originPrice
          this.detail.finalPrice = data.finalPrice
          this.detail.url = data.url
          this.detail.itemId = data.itemId
          this.detail.couponAmount = data.couponAmount
          this.detail.saledNumber = data.saledNumber
          this.detail.goodsDetail = this.removeTag(res.data.model.goodsDetail)
        }
      })
    },
    searchFavoriteProducts (data) {
      this.$http('GET', this.api.searchFavoriteProducts, {
        itemId: data.itemId,
        page: 1,
        pageSize: 10
      }).then(res => {
        if (res.data.success === true) {
          this.recommends = res.data.model.list
        }
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
    },
    checkUpLevel (type) {
      switch (type) {
        case 'normalLevel':
          return '高级'
        case 'superLevel':
          return 'plus'
      }
    },
    checkCommission (type) {
      switch (type) {
        case 'normalLevel':
          return this.ticket.superCommissionAmount
        case 'superLevel':
          return this.ticket.plusCommissionAmount
      }
    },
    toRight () {
      if (window.plus) {
        let all = window.plus.webview.all()
        let bottom = all[0]
        bottom.evalJS('checkMenu(2)')
        for (let i = 0; i < all.length; i++) {
          switch (all[i].id) {
            case 'ninemoney':
            case 'todayhot':
            case 'largecoupon':
            case 'flashsale':
            case 'plathome':
            case 'taobaoentrance':
              all[i].close()
          }
        }
        window.plus.webview.currentWebview().close()
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    swiper () {
      return this.$refs.imageSwiper.swiper
    }
  }
}
</script>
