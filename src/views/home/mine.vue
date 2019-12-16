<style lang="scss" scoped>
.mine {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
  background: linear-gradient(
    180deg,
    rgba(251, 44, 104, 1) 50%,
    rgba(247, 247, 247, 1) 50%
  );
  .mine-box {
    flex: 1;
    background-color: #f7f7f7;
  }
}
.mine::-webkit-scrollbar {
  display: none;
}
.mine-top {
  width: 375px;
  height: 215px;
  background-color: rgba(251, 44, 104, 1);
  .mine-top-user {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .mine-top-left {
      padding-top: 27px;
      flex: 1;
      height: 57.5px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      .mine-top-left-head {
        margin-left: 13px;
        width: 56px;
        height: 56px;
        img {
          width: 56px;
          height: 56px;
          border-radius: 56px;
          overflow: hidden;
        }
      }
      .mine-top-left-info {
        margin-left: 5.5px;
        flex: 1;
        .mine-top-left-info-name {
          margin-top: 7px;
          font-family: "PingFangSC-Regular";
          font-size: 14px;
          letter-spacing: 0.2px;
          color: rgba(255, 255, 255, 1);
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          .mine-top-left-info-name-leavel {
            margin-left: 11px;
            width: 73.5px;
            height: 18.5px;
            line-height: 18.5px;
            background-image: url("./images/mine_superMember.png");
            background-repeat: no-repeat;
            background-size: 73.5px 18.5px;
            background-position: center center;
            font-family: "SourceHanSansSC-Regular";
            font-size: 11px;
            color: #fee4b3;
            text-indent: 20px;
          }
          .mine-top-left-info-name-text {
            font-family: "PingFangSC-Regular";
            font-size: 14px;
            color: #ffffff;
            max-width: 100px;
          }
        }
        .mine-top-left-info-code {
          margin-top: 5px;
          font-family: "PingFangSC-Regular";
          font-size: 14px;
          letter-spacing: 0.2px;
          color: rgba(255, 255, 255, 1);
          span {
            font-family: "DINAlternate-Bold";
            font-size: 14px;
            letter-spacing: 0.2px;
            color: rgba(255, 255, 255, 1);
          }
          span.copy {
            color: #fff;
            font-size: 12px;
            letter-spacing: 0.5px;
            font-family: "DINAlternate-Bold";
            border: 1px solid #fff;
            border-radius: 10px;
            padding: 2px 8px;
            margin-left: 10px;
          }
        }
      }
    }
    .mine-top-right {
      .mine-top-right-box {
        margin-right: 22.5px;
        margin-top: 10px;
        width: 61px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .mine-top-right-box-msg {
          position: relative;
          width: 20.5px;
          height: 20.5px;
          background-image: url("./images/mine_message.png");
          background-repeat: no-repeat;
          background-size: 20.5px 20.5px;
          background-position: center center;
          .mine-top-right-box-msg-point {
            position: absolute;
            top: -5px;
            right: -5px;
            width: 10px;
            height: 10px;
            border-radius: 10px;
            background-color: white;
          }
        }
        .mine-top-right-box-setting {
          width: 21.5px;
          height: 20.5px;
          background-image: url("./images/mine_setting.png");
          background-repeat: no-repeat;
          background-size: 21.5px 20.5px;
          background-position: center center;
        }
      }
    }
  }
  .mine-top-money {
    margin: 15px auto 0;
    width: 349px;
    height: 85px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 4px;
    background-image: url("./images/mine_money_bg.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
    .mine-top-money-title {
      padding: 6px 12.5px;
      font-family: "PingFangSC-Regular";
      font-size: 13px;
      letter-spacing: 0.2px;
      color: rgba(51, 51, 51, 1);
    }
    .mine-top-money-num {
      padding: 9px 27.5px 0 12px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .mine-top-money-num-text {
        font-family: "DINAlternate-Bold";
        font-size: 35px;
        letter-spacing: 0.5px;
        color: rgba(251, 44, 104, 1);
        span {
          font-family: "DINAlternate-Bold";
          font-size: 17px;
          letter-spacing: 0.2px;
          color: rgba(251, 44, 104, 1);
        }
      }
      .mine-top-money-num-get {
        width: 77px;
        height: 23.5px;
        line-height: 23.5px;
        background-image: linear-gradient(
          180deg,
          rgba(252, 165, 13, 1) 0%,
          rgba(252, 165, 13, 1) 100%
        );
        border-radius: 11.4px;
        font-family: "PingFangSC-Regular";
        font-size: 11.6px;
        letter-spacing: 0.2px;
        color: rgba(255, 255, 255, 1);
        text-align: center;
      }
    }
  }
}
.mine-mid {
  margin: -15px auto 0;
  width: 349px;
  height: 177px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 4px;
  .mine-mid-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 6px 12.5px;
    font-family: "PingFangSC-Regular";
    font-size: 13px;
    letter-spacing: 0.2px;
    color: rgba(0, 0, 0, 1);
    .mine-mid-title-right {
      font-family: "SourceHanSansSC-Medium";
      font-size: 11px;
      color: rgba(51, 51, 51, 0.6);
    }
  }
  .mine-mid-box {
    margin: 0 9px 0 13px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding-bottom: 20px;
    border-bottom: 0.5px solid rgba(51, 51, 51, 0.12);
    .mine-mid-box-item {
      margin-top: 17px;
      .mine-mid-box-item-num {
        font-family: "DINAlternate-Bold";
        font-size: 18px;
        letter-spacing: 0.2px;
        color: rgba(51, 51, 51, 1);
      }
      .mine-mid-box-item-tip {
        margin-top: 5px;
        font-family: "PingFangSC-Regular";
        font-size: 10px;
        letter-spacing: 0.1px;
        color: rgba(51, 51, 51, 0.8);
      }
    }
  }
  .mine-mid-fun {
    margin: 20px auto 0;
    width: 278px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .mine-mid-fun-item {
      .mine-mid-fun-item-text {
        margin-top: 5px;
        font-family: "PingFangSC-Regular";
        font-size: 10px;
        text-align: center;
        letter-spacing: 0.1px;
        color: rgba(51, 51, 51, 0.8);
      }
      .mine-mid-fun-item-fans {
        width: 27.5px;
        height: 24px;
        background-image: url("./images/mine_fans.png");
        background-repeat: no-repeat;
        background-size: 27.5px 24px;
      }
      .mine-mid-fun-item-invite {
        width: 25px;
        height: 21.5px;
        background-image: url("./images/mine_invite.png");
        background-repeat: no-repeat;
        background-size: 25px 21.5px;
      }
      .mine-mid-fun-item-order {
        width: 22.5px;
        height: 22.5px;
        background-image: url("./images/mine_order.png");
        background-repeat: no-repeat;
        background-size: 22.5px 22.5px;
      }
    }
  }
}
.mine-banner {
  text-align: center;
  width: 375px;
  height: 110px;
  img {
    width: 340px;
    height: 85px;
  }
  /deep/ .swiper-pagination {
    position: static;
    .swiper-pagination-bullet {
      margin: 0 2px;
    }
    .swiper-pagination-bullet-active {
      background: #fb2c68;
    }
  }
}
.mine-bottom {
  margin: 0 auto 15px;
  width: 349px;
  background: #fff;
  border-radius: 5px;
  .mine-bottom-item {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .mine-bottom-item-img {
      margin-left: 15px;
      margin-right: 10.5px;
      img {
        width: 13px;
      }
    }
    .mine-bottom-item-text {
      flex: 1;
      height: 46px;
      line-height: 46px;
      font-family: "PingFangSC-Regular";
      font-size: 12px;
      letter-spacing: 0.2px;
      color: rgba(51, 51, 51, 0.6);
      border-bottom: solid 0.4px rgba(151, 151, 151, 0.3);
      background-image: url("./images/mine_right_arrow.png");
      background-repeat: no-repeat;
      background-size: 6.5px 10px;
      background-position: 294px center;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding-right: 17px;
      &.last {
        border: 0;
      }
      &.none {
        background: none;
      }
      .mine-bottom-item-text-switch {
        position: relative;
        width: 32px;
        height: 17px;
        border-radius: 17px;
        background-color: #dcdfe6;
        z-index: 10;
        transition-duration: 500ms;
        .mine-bottom-item-text-switch-circle {
          position: absolute;
          top: 1px;
          left: 1px;
          width: 15px;
          height: 15px;
          border-radius: 15px;
          background-color: #fff;
          z-index: 11;
          transition-duration: 500ms;
        }
        &.open {
          background-color: #fb2c68;
          transition-duration: 500ms;
          .mine-bottom-item-text-switch-circle {
            position: absolute;
            top: 1px;
            left: 100%;
            margin-left: -16px;
            width: 15px;
            height: 15px;
            border-radius: 15px;
            background-color: #fff;
            z-index: 11;
            transition-duration: 500ms;
          }
        }
      }
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
}
.boxshadow {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 3;
}
.boxshadow .wechatbox {
  width: 260px;
  height: 260px;
  background-color: #ffffff;
  border-radius: 4px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -130px;
  margin-left: -130px;
  overflow: hidden;
  background-image: url(./images/wechatback.png);
  background-size: 100% 100%;
}
.wechatbox .wechattext {
  width: 100%;
  font-family: "PingFangSC-Medium";
  color: #666666;
  margin-top: 92px;
  text-align: center;
}
.wechatbox .wechatcode {
  width: 100%;
  margin-top: 12px;
  font-family: "PingFang-SC-Bold";
  font-size: 18px;
  color: #333333;
  text-align: center;
}
.wechatbox .autocopy {
  width: 100%;
  margin-top: 3px;
  font-family: "PingFangSC-Medium";
  font-size: 12px;
  color: #666666;
  text-align: center;
}
.wechatbox .gowechatbtn {
  width: 140px;
  height: 30px;
  background-image: linear-gradient(135deg, #f93579 0%, #fa1f6b 100%);
  border-radius: 15px;
  margin: 40px auto 0px;
  font-size: 14px;
  text-align: center;
  line-height: 30px;
  color: #fff;
}
</style>

<template>
  <div class="mine" ref="mine">
    <div class="mine-box">
      <div class="mine-top">
        <div class="mine-top-user">
          <div class="mine-top-left">
            <div class="mine-top-left-head">
              <img :src="$store.state.userInfo.userHeadUrl || userhead" alt />
            </div>
            <div class="mine-top-left-info">
              <div class="mine-top-left-info-name">
                <div
                  class="mine-top-left-info-name-text"
                  v-if="$store.state.token"
                >{{$store.state.userInfo.nickName}}</div>
                <div
                  class="mine-top-left-info-name-text"
                  v-if="!$store.state.token"
                  @click="toPage('login')"
                >登录/注册</div>
                <div
                  class="mine-top-left-info-name-leavel"
                  v-if="$store.state.token"
                >{{$store.state.userInfo.levelName}}</div>
              </div>
              <div class="mine-top-left-info-code" v-if="$store.state.token">
                邀请码:
                <span>{{$store.state.userInfo.inviteCode ? $store.state.userInfo.inviteCode : '无'}}</span>
                <span
                  class="copy"
                  v-if="$store.state.userInfo.inviteCode"
                  @click="copyCode($store.state.userInfo.inviteCode)"
                >复制</span>
              </div>
            </div>
          </div>
          <div class="mine-top-right">
            <div class="mine-top-right-box">
              <div class="mine-top-right-box-msg" @click="toNextPage('message')">
                <div class="mine-top-right-box-msg-point" v-if="$store.state.hasMsg"></div>
              </div>
              <div class="mine-top-right-box-setting" @click="toNextPage('setting')"></div>
            </div>
          </div>
        </div>
        <div class="mine-top-money">
          <div class="mine-top-money-title">我的余额</div>
          <div class="mine-top-money-num">
            <div class="mine-top-money-num-text">
              <span>￥</span>
              {{$store.state.account.money}}
            </div>
            <div class="mine-top-money-num-get" @click="toNextPage('withdraw')">立即提现</div>
          </div>
        </div>
      </div>
      <div class="mine-mid">
        <div class="mine-mid-title">
          <div class="mine-mid-title-left">我的收入</div>
          <div class="mine-mid-title-right" @click="toNextPage('reportIncome')">收入报表 ></div>
        </div>
        <div class="mine-mid-box">
          <div class="mine-mid-box-item" @click="toNextPage('reportIncome',{index:0})">
            <div class="mine-mid-box-item-num">{{$store.state.account.todayPreMoney}}</div>
            <div class="mine-mid-box-item-tip">今日预估(元)</div>
          </div>
          <div class="mine-mid-box-item" @click="toNextPage('reportIncome',{index:1})">
            <div class="mine-mid-box-item-num">{{$store.state.account.yesterdayPreMoney}}</div>
            <div class="mine-mid-box-item-tip">昨日预估(元)</div>
          </div>
          <div class="mine-mid-box-item" @click="toNextPage('reportIncome',{index:2})">
            <div class="mine-mid-box-item-num">{{$store.state.account.currentMonthPreMoney}}</div>
            <div class="mine-mid-box-item-tip">本月预估(元)</div>
          </div>
          <div class="mine-mid-box-item" @click="toNextPage('reportIncome',{index:3})">
            <div class="mine-mid-box-item-num">{{$store.state.account.totalMoney}}</div>
            <div class="mine-mid-box-item-tip">上月收入(元)</div>
          </div>
        </div>
        <div class="mine-mid-fun">
          <div class="mine-mid-fun-item" @click="toNextPage('fans')">
            <div class="mine-mid-fun-item-fans"></div>
            <div class="mine-mid-fun-item-text">粉丝</div>
          </div>
          <div class="mine-mid-fun-item" @click="toNextPage('invite')">
            <div class="mine-mid-fun-item-invite"></div>
            <div class="mine-mid-fun-item-text">邀请</div>
          </div>
          <div class="mine-mid-fun-item" @click="toNextPage('order')">
            <div class="mine-mid-fun-item-order"></div>
            <div class="mine-mid-fun-item-text">订单</div>
          </div>
        </div>
      </div>
      <div class="mine-banner">
        <swiper :options="swiperOption">
          <swiper-slide>
            <img :src="$store.state.redPacketUrl.position_1.pic_url || require('../../assets/banner1.png')" @click="toUrl($store.state.redPacketUrl.position_1.click_url || 1)" alt />
          </swiper-slide>
          <swiper-slide>
            <img :src="$store.state.redPacketUrl.position_2.pic_url || require('../../assets/banner2.png')" @click="toUrl($store.state.redPacketUrl.position_2.click_url || 2)" alt />
          </swiper-slide>
          <swiper-slide>
            <img src="../../assets/banner3.png" @click="toUrl(3)" alt />
          </swiper-slide>
        </swiper>
        <div class="swiper-pagination" slot="pagination"></div>
      </div>
      <div class="mine-bottom">
        <div class="mine-bottom-item" @click="toUrl(3)">
          <div class="mine-bottom-item-img">
            <img src="./images/mine_logo.png" alt />
          </div>
          <div class="mine-bottom-item-text">小程序</div>
        </div>
        <div class="mine-bottom-item" @click="toPage('problem1')">
          <div class="mine-bottom-item-img">
            <img src="./images/mine_question.png" alt />
          </div>
          <div class="mine-bottom-item-text">常见问题</div>
        </div>
        <div class="mine-bottom-item" @click="toPage('course')">
          <div class="mine-bottom-item-img">
            <img src="./images/mine_book.png" alt />
          </div>
          <div class="mine-bottom-item-text">进阶教程</div>
        </div>
        <div class="mine-bottom-item" @click="shadowflag=true">
          <div class="mine-bottom-item-img">
            <img src="./images/mine_contant.png" alt />
          </div>
          <div class="mine-bottom-item-text">联系我们</div>
        </div>
        <!--
        <div class="mine-bottom-item">
          <div class="mine-bottom-item-img">
            <img src="./images/mine_reply.png" alt />
          </div>
          <div class="mine-bottom-item-text" @click="toAppStore()">亲，给个好评吧</div>
        </div>
        -->
        <div
          class="mine-bottom-item"
          v-if="$store.state.userInfo.level === 'plusLevel'"
          @click="toPage('haveknock')"
        >
          <div class="mine-bottom-item-img">
            <img src="./images/mine_bl.png" alt />
          </div>
          <div class="mine-bottom-item-text">我的爆料</div>
        </div>
        <div
          class="mine-bottom-item"
          v-if="$store.state.userInfo.level === 'plusLevel'"
          @click="toPage('makeknock')"
        >
          <div class="mine-bottom-item-img">
            <img src="./images/mine_wybl.png" alt />
          </div>
          <div class="mine-bottom-item-text">我要爆料</div>
        </div>
        <!--  <div class="mine-bottom-item" @click="toPage('haveknock')">
          <div class="mine-bottom-item-img">
            <img src="./images/mine_question.png" alt />
          </div>
          <div class="mine-bottom-item-text">我的爆料</div>
        </div>
        <div class="mine-bottom-item" @click="toPage('makeknock')">
          <div class="mine-bottom-item-img">
            <img src="./images/mine_mylike.png" alt />
          </div>
          <div class="mine-bottom-item-text">我要爆料</div>
        </div>-->
        <div class="mine-bottom-item" @click="toPage('mylike')">
          <div class="mine-bottom-item-img">
            <img src="./images/mine_like.png" alt />
          </div>
          <div class="mine-bottom-item-text last">我的喜欢</div>
        </div>
      </div>
    </div>
    <div class="boxshadow" v-if="shadowflag" @click="closeShadowBox">
      <div class="wechatbox">
        <div class="wechattext">您的客服微信号</div>
        <div class="wechatcode">{{wechatcode}}</div>
        <div class="gowechatbtn" @click="toCopyWechat(wechatcode)">复制微信号</div>
      </div>
    </div>
    <Model title="是否升级高级会员" :confirmFun="goPage" ref="model" />
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Model from '../../components/model/model'
export default {
  data () {
    return {
      shadowflag: false,
      wechatcode: 'bizikefu',
      authorize: false,
      userhead: require('@/assets/userhead.png'),
      swiperOption: {
        speed: 300,
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 2000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        }
      },
      canRefresh: true,
      redpacket: []
    }
  },
  created () {
    window.update = () => {
      if (this.$store.state.token) {
        this.$store.dispatch('isNewMessages')
        this.$store.dispatch('getUserAccountInfo')
        this.$store.dispatch('getUserIncome')
        this.updateRedpacket()
      }
    }
    if (this.$store.state.token) {
      this.$store.dispatch('isNewMessages')
      this.$store.dispatch('getUserAccountInfo')
      this.$store.dispatch('getUserIncome')
    }
    this.updateRedpacket()
    if (window.plus) {
      this.setRefresh()
    } else {
      document.addEventListener('plusready', this.setRefresh, false)
    }
  },
  mounted () {
    this.$refs.mine.addEventListener('scroll', this.scrollListen, false)
  },
  methods: {
    goPage () {
      if (window.plus) {
        let bottom = window.plus.webview.all()[0]
        console.log(JSON.stringify(bottom))
        bottom.evalJS('checkMenu(2)')
        this.$refs.model.cancel()
      } else {
        this.toPage('right')
      }
    },
    scrollListen () {
      if (this.$refs.mine.scrollTop < 10) {
        if (window.plus) {
          const color = window.plus.os.name.toLocaleLowerCase() === 'ios' ? '#ffffff' : '$fb2c68'
          const style = window.plus.os.name.toLocaleLowerCase() === 'ios' ? 'default' : 'circle'
          window.plus.webview.currentWebview().setPullToRefresh({
            support: true,
            color: color,
            height: '50px',
            range: '50px',
            style: style
          }, this.refreshMine)
          this.canRefresh = true
        }
      } else {
        if (window.plus) {
          window.plus.webview.currentWebview().setPullToRefresh({
            support: false
          })
          this.canRefresh = false
        }
      }
    },
    setRefresh () {
      // 设置刷新
      if (this.$store.state.token) {
        const color = window.plus.os.name.toLocaleLowerCase() === 'ios' ? '#ffffff' : '$fb2c68'
        const style = window.plus.os.name.toLocaleLowerCase() === 'ios' ? 'default' : 'circle'
        window.plus.webview.currentWebview().setPullToRefresh({
          support: true,
          color: color,
          height: '50px',
          range: '50px',
          style: style
        }, this.refreshMine)
        this.canRefresh = true
      } else {
        window.plus.webview.currentWebview().setPullToRefresh({
          support: false
        })
        this.canRefresh = false
      }
      this.$store.dispatch('updateSerivces') // 获取分享服务 用于跳转小程序
    },
    refreshMine () {
      // 刷新我的页面
      if (this.$store.state.token) {
        this.$store.dispatch('isNewMessages')
        this.$store.dispatch('getUserAccountInfo')
        this.$store.dispatch('getUserIncome')
      }
      window.plus.webview.currentWebview().endPullToRefresh()
    },
    copyCode (inviteCode) {
      this.setClipbordText(inviteCode)
      this.$toast('邀请码已复制到您的剪切板')
    },
    toCopyWechat (wechatcode) {
      this.setClipbordText(wechatcode)
      this.$toast('微信号已复制到您的剪切板')
    },
    closeShadowBox () {
      this.shadowflag = false
    },
    toAppStore () {
      let u = navigator.userAgent
      let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
      if (isAndroid) {
        this.createWB('https://a.app.qq.com/o/simple.jsp?pkgname=biz.prices&fromcase=40003', 'comment', '应用评价')
      } else {
        this.createWB('http://itunes.apple.com/WebObjects/MZStore.woa/wa/viewContentsUserReviews?id=1463273183&pageNumber=0&sortOrdering=2&type=Purple+Software&mt=8', 'comment', '应用评价')
      }
    },
    toNextPage (pageName, params) {
      if (pageName === 'invite' && this.$store.state.userInfo.level === 'normalLevel') {
        this.$refs.model.show()
      } else {
        if (this.$store.state.token) {
          this.toPage(pageName, params)
        } else {
          this.toPage('login')
        }
      }
    },
    toUrl (type) {
      if (type === 1) {
        this.createWB('https://p.pinduoduo.com/Ft5rFAot', 'price1', '天天拆红包')
      } else if (type === 2) {
        this.createWB('https://p.pinduoduo.com/lCdr1r3L', 'price2', '转盘抽免单')
      } else if (type === 3) {
        if (window.plus) {
          if (this.$store.state.share.sweixin) {
            this.$store.state.share.sweixin.launchMiniProgram({
              id: 'gh_d7843d1812d7'
            })
          }
        } else {
          document.addEventListener('plusready', () => {
            if (this.$store.state.share.sweixin) {
              this.$store.state.share.sweixin.launchMiniProgram({
                id: 'gh_d7843d1812d7'
              })
            }
          }, false)
        }
      } else {
        this.createWB(type, 'price', '抽奖')
      }
    },
    updateRedpacket () {
      this.$store.dispatch('getPDDredpacketUrl')
    }
  },
  components: {
    swiper,
    swiperSlide,
    Model
  }
}
</script>
