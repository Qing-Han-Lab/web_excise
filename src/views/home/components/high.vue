<style lang="scss" scoped>
.normal {
  flex: 1;
  -webkit-overflow-scroll: touch;
  background-color: #f7f7f7;
  padding-bottom: 10px;
  .normal-top {
    width: 375px;
    height: 158px;
    background-color: #fb2c68;
    .normal-top-box {
      padding-top: 27px;
      width: 338px;
      height: 56.5px;
      margin-left: 13px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .normal-top-left {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      .normal-top-left-head {
        img {
          border: 0;
          width: 56px;
          height: 56px;
          border-radius: 56px;
          overflow: hidden;
        }
      }
      .normal-top-left-name {
        margin-left: 5.5px;
        .normal-top-left-name-text {
          margin-top: 7px;
          font-family: "PingFangSC-Regular";
          font-size: 14px;
          color: #ffffff;
        }
        .normal-top-left-name-level {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: baseline;
          .normal-top-left-name-level-info {
            margin-top: 5px;
            font-family: "PingFangSC-Regular";
            font-size: 12px;
            color: rgba(254, 228, 179, 1);
            border: 1px solid rgba(254, 228, 179, 1);
            padding: 2px 5px;
            border-radius: 15px;
            text-indent: 19px;
            background-image: url("./images/icon_plus.png");
            background-repeat: no-repeat;
            background-size: 12px 10px;
            background-position: 5px center;
          }
          .normal-top-left-name-level-time {
            margin-left: 9.5px;
            font-family: "DINAlternate-Bold";
            font-size: 13px;
            color: rgba(255, 255, 255, 1);
            transition-duration: 500ms;
            span {
              font-family: "PingFangSC-Regular";
              font-size: 9px;
              color: rgba(255, 255, 255, 1);
            }
          }
        }
      }
    }
    .normal-top-right {
      margin-top: 20px;
      padding-right: 12px;
      height: 18.5px;
      line-height: 18.5px;
      text-indent: 25px;
      background-color: rgba(255, 255, 255, 1);
      border-radius: 9px;
      font-family: "PingFangSC-Regular";
      font-size: 9px;
      color: rgba(133, 133, 133, 1);
      background-image: url("./images/right_sign.png");
      background-repeat: no-repeat;
      background-size: 12.5px 12.5px;
      background-position: 12px center;
    }
  }
  .normal-bg {
    position: relative;
    margin: -58px auto 0;
    width: 349px;
    height: 170px;
    background-image: linear-gradient(157deg, #4b4b4b 0%, #232323 100%);
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
      overflow: hidden;
    }
    .normal-bg-rule {
      position: absolute;
      top: 12px;
      right: 11px;
      font-family: "PingFangSC-Regular";
      font-size: 10px;
      color: #ffffff;
      height: 14px;
      line-height: 14px;
      background-image: url('./images/icon_answer.png');
      background-repeat: no-repeat;
      background-position: left center;
      background-size: auto 100%;
      text-indent: 16px;
    }
  }
  .normal-raise {
    margin: 6px auto;
    width: 349px;
    padding-bottom: 24px;
    background-color: #fff;
    border-radius: 4px;
    .normal-raise-title {
      padding: 14px 25px 8px;
      font-family: "PingFangSC-Regular";
      font-size: 18px;
      color: #000000;
    }
    .normal-raise-tip {
      margin-left: 25px;
      width: 250px;
      line-height: 15px;
      font-family: "PingFangSC-Regular";
      font-size: 12px;
      color: rgba(51, 51, 51, 0.6);
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      .normal-raise-tip-left {
        width: 16px;
        height: 16px;
        margin-right: 9px;
        background-image: url("./images/icon_member.png");
        background-repeat: no-repeat;
        background-size: 16px 16px;
        background-position: center center;
      }
      .normal-raise-tip-right {
        flex: 1;
      }
    }
    .normal-raise-tip2 {
      margin-top: 4px;
      margin-left: 25px;
      font-family: "PingFangSC-Regular";
      font-size: 12px;
      line-height: 13px;
      color: rgba(51, 51, 51, 0.6);
    }
    .normal-raise-friends {
      margin: 13px 25px 0;
      padding: 7px 12px 9px 12px;
      display: inline-block;
      font-family: "PingFangSC-Regular";
      font-size: 11px;
      line-height: 10px;
      color: #ffffff;
      background-color: #fb2c68;
      border-radius: 13px;
    }
    .normal-raise-progress {
      margin-left: 25px;
      margin-top: 7px;
      font-family: "PingFangSC-Regular";
      font-size: 10px;
      color: #000000;
      .normal-raise-progress-item {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: baseline;
        &:last-child {
          margin-top: 5px;
        }
        .normal-raise-progress-item-left {
          width: 65px;
          font-size: 12px;
        }
        .normal-raise-progress-item-mid {
          margin: 0 9px 0 6px;
          width: 120px;
          height: 4px;
          background-color: #d5d9df;
          border-radius: 2px;
          position: relative;
          z-index: 10;
          .normal-raise-progress-item-mid-progress {
            position: absolute;
            top: 0;
            left: 0;
            width: 75%;
            height: 4px;
            z-index: 11;
            background-color: #7c36f8;
            border-radius: 2px;
            transition-duration: 1s;
            &.red {
              width: 66%;
              background-color: #fb2c68;
            }
          }
        }
        .normal-raise-progress-item-right {
          font-family: "Helvetica";
          font-size: 10px;
          color: rgba(0, 0, 0, 0.5);
        }
      }
    }
  }
  .normal-sale {
    .normal-sale-title {
      margin-top: 13px;
      margin-left: 14px;
      font-family: "DINAlternate-Bold";
      font-size: 15px;
      letter-spacing: 0px;
      color: #000000;
    }
    .normal-sale-item {
      margin: 5px auto;
      width: 350px;
      height: 115px;
      border-radius: 4px;
      background-color: #fff;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      .normal-sale-item-left {
        position: relative;
        width: 115px;
        height: 115px;
        img {
          width: 115px;
          height: 115px;
        }
        .normal-sale-item-left-saled {
          position: absolute;
          top: 50%;
          left: 33px;
          transform: translate3d(0, -50%, 0);
          width: 51px;
          height: 51px;
          background-image: url("./images/icon_soldout.png");
          background-repeat: no-repeat;
          background-size: 51px 51px;
          background-position: center center;
        }
      }
      .normal-sale-item-right {
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 11px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .normal-sale-item-right-title {
          width: 205px;
          font-family: "PingFangSC-Regular";
          font-size: 14px;
          height: 16px;
          line-height: 16px;
          color: #333333;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .normal-sale-item-right-tips {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          .normal-sale-item-right-tips-item {
            font-family: "PingFangSC-Regular";
            font-size: 11px;
            letter-spacing: 1px;
            color: rgba(51, 51, 51, 0.6);
            margin-left: 7px;
            &:first-child {
              margin: 0;
            }
          }
        }
        .normal-sale-item-right-certificate {
          span {
            padding: 4px 9px;
            font-family: "PingFangSC-Regular";
            font-size: 9px;
            color: #ffffff;
            background-image: linear-gradient(180deg, #fca910 0%, #fca80f 100%);
            border-radius: 15px;
          }
        }
        .normal-sale-item-right-money {
          font-family: "DINAlternate-Bold";
          font-size: 22px;
          letter-spacing: 1px;
          color: #fb2c68;
          span {
            font-family: "DINAlternate-Bold";
            font-size: 12px;
            letter-spacing: 0px;
            color: #fb2c68;
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="normal">
    <div class="normal-top">
      <div class="normal-top-box">
        <div class="normal-top-left">
          <div class="normal-top-left-head">
            <img :src="$store.state.userInfo.userHeadUrl || userhead" alt />
          </div>
          <div class="normal-top-left-name">
            <div class="normal-top-left-name-text">{{$store.state.userInfo.nickName}}</div>
            <div class="normal-top-left-name-level">
              <div class="normal-top-left-name-level-info">{{$store.state.userInfo.levelName}}</div>
              <div class="normal-top-left-name-level-time">
                {{$store.state.userInfo.expireTime || 0}}
                <span>天后到期</span>
              </div>
            </div>
          </div>
        </div>
        <div class="normal-top-right" @click="toSign">{{$store.state.userInfo.signIn?'已签到':'签到续期'}}</div>
      </div>
    </div>
    <div class="normal-bg">
      <div class="normal-bg-rule" @click="toPage('rule', {name:'high'})">规则说明</div>
      <img src="./images/high_bg.jpg" alt />
    </div>
    <div class="normal-raise">
      <div class="normal-raise-title">如何免费升级plus会员</div>
      <div class="normal-raise-tip">
        <div class="normal-raise-tip-left"></div>
        <div class="normal-raise-tip-right">邀请8个用户，且至少有3个有效用户，就可免费获赠30天plus会员特权</div>
      </div>
      <div class="normal-raise-tip2">(有效用户的定义为近30天好价鼻子分享或购买过至少一单)</div>
      <div class="normal-raise-progress">
        <div class="normal-raise-progress-item">
          <div class="normal-raise-progress-item-left">已邀请用户</div>
          <div class="normal-raise-progress-item-mid">
            <div class="normal-raise-progress-item-mid-progress" :style="`width:${inviteProgress}`"></div>
          </div>
          <div class="normal-raise-progress-item-right">{{$store.state.userInfo.invitedPersons}}/8</div>
        </div>
        <div class="normal-raise-progress-item">
          <div class="normal-raise-progress-item-left">有效用户</div>
          <div class="normal-raise-progress-item-mid">
            <div
              class="normal-raise-progress-item-mid-progress red"
              :style="`width:${validInvigateProgress}`"
            ></div>
          </div>
          <div class="normal-raise-progress-item-right">{{$store.state.userInfo.validInvitedPersons}}/3</div>
        </div>
      </div>
      <div class="normal-raise-friends" @click="toPage('invite')">邀请好友加入我的团队</div>
    </div>
    <div class="normal-sale">
      <div class="normal-sale-title">plus会员年卡礼包</div>
      <div class="normal-sale-item">
        <div class="normal-sale-item-left">
          <img src="../../../assets/cooker.jpg" alt />
          <div class="normal-sale-item-left-saled"></div>
        </div>
        <div class="normal-sale-item-right">
          <div class="normal-sale-item-right-title">九阳电炖锅陶瓷煲汤锅家用熬九阳电炖锅陶瓷煲汤锅家用熬</div>
          <div class="normal-sale-item-right-tips">
            <div class="normal-sale-item-right-tips-item">一锅四胆</div>
            <div class="normal-sale-item-right-tips-item">优质青瓷</div>
            <div class="normal-sale-item-right-tips-item">双燕窝程序</div>
          </div>
          <div class="normal-sale-item-right-certificate">
            <span>送365天plus会员权益</span>
          </div>
          <div class="normal-sale-item-right-money">
            <span>￥</span>365.00
          </div>
        </div>
      </div>
    </div>
    <div class="normal-sale">
      <div class="normal-sale-title">plus会员月卡礼包</div>
      <div class="normal-sale-item">
        <div class="normal-sale-item-left">
          <img src="../../../assets/washing.jpg" alt />
          <div class="normal-sale-item-left-saled"></div>
        </div>
        <div class="normal-sale-item-right">
          <div class="normal-sale-item-right-title">汰渍洗衣液全效360洁雅百合汰渍洗衣液全效360洁雅百合</div>
          <div class="normal-sale-item-right-tips">
            <div class="normal-sale-item-right-tips-item">去污渍无残留</div>
            <div class="normal-sale-item-right-tips-item">护色洁净</div>
            <div class="normal-sale-item-right-tips-item">自热香气</div>
          </div>
          <div class="normal-sale-item-right-certificate">
            <span>送30天plus会员权益</span>
          </div>
          <div class="normal-sale-item-right-money">
            <span>￥</span>68.00
          </div>
        </div>
      </div>
    </div>
    <SignBox :text="day" ref="sign" tip="已为您续期一天"></SignBox>
  </div>
</template>
<script>
import SignBox from './sign'
export default {
  data () {
    return {
      userhead: require('@/assets/userhead.png'),
      day: []
    }
  },
  methods: {
    toSign () {
      if (this.$store.state.userInfo.signIn) {
        this.$toast('您已经签到啦，明天再来吧')
        return
      }
      this.$http('GET', this.api.userSignIn).then(res => {
        if (res.data.success === true) {
          this.day = res.data.model
          this.$refs.sign.showBox()
        } else {
          this.$toast(res.data.msgInfo)
        }
      })
    }
  },
  computed: {
    inviteProgress () {
      return (this.$store.state.userInfo.invitedPersons / 8).toFixed(2) * 100 + '%'
    },
    validInvigateProgress () {
      return (this.$store.state.userInfo.validInvitedPersons / 3).toFixed(2) * 100 + '%'
    }
  },
  components: {
    SignBox
  }
}
</script>
