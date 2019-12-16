<style lang="scss" scoped>
.rule {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  .rule-top {
    width: 375px;
    height: 44px;
    line-height: 44px;
    background-color: #fb2c68;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .rule-top-back {
      width: 44px;
      height: 44px;
      background-image: url("./images/icon_back.png");
      background-repeat: no-repeat;
      background-position: 17px center;
      background-size: 10px 16px;
    }
    .rule-top-title {
      font-family: "PingFangSC-Medium";
      font-size: 18px;
      color: #ffffff;
    }
  }
  .rule-box {
    flex: 1;
    overflow: auto;
    background: #f7f7f7;
    .rule-box-normal {
      padding-top: 18px;
      height: 155px;
      width: 375px;
      border-bottom: 5px solid #f7f7f7;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      background-color: #fff;
      .rule-box-normal-title {
        position: relative;
        font-family: "PingFang-SC-Bold";
        font-size: 18px;
        color: #000000;
        &::before {
          position: absolute;
          left: -21px;
          top: 50%;
          content: "";
          width: 12px;
          height: 12px;
          transform: translate3d(0, -50%, 0);
          display: block;
          background-image: url("./images/icon_downArrow.png");
          background-repeat: no-repeat;
          background-size: 12px 12px;
        }
        &::after {
          position: absolute;
          right: -21px;
          top: 50%;
          width: 12px;
          height: 12px;
          transform: translate3d(0, -50%, 0);
          content: "";
          display: block;
          background-image: url("./images/icon_downArrow.png");
          background-repeat: no-repeat;
          background-size: 12px 12px;
        }
      }
      .rule-box-normal-items {
        margin: 8px auto 0;
        width: 285px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        .rule-box-normal-items-item {
          width: 100px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          .rule-box-normal-items-item-img {
            width: 45px;
            height: 45px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .rule-box-normal-items-item-title {
            margin: 6px 0 3px;
            font-family: "PingFang-SC-Bold";
            font-size: 10px;
            color: #333333;
          }
          .rule-box-normal-items-item-tip {
            font-family: "PingFangSC-Medium";
            font-size: 10px;
            color: #666666;
            line-height: 13px;
          }
        }
      }
    }
    .rule-box-high {
      height: 168px;
      width: 375px;
      padding-top: 17px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      border-bottom: 5px solid #f7f7f7;
      background-color: #fff;
      .rule-box-high-title {
        position: relative;
        font-family: "PingFang-SC-Bold";
        font-size: 18px;
        color: #000000;
        &.plus {
          &::before {
            position: absolute;
            left: -22px;
            top: 50%;
            content: "";
            width: 12px;
            height: 12px;
            transform: translate3d(0, -50%, 0);
            display: block;
            background-image: url("./images/icon_plus.png");
            background-repeat: no-repeat;
            background-size: 12px 11px;
          }
          &::after {
            position: absolute;
            right: -22px;
            top: 50%;
            width: 12px;
            height: 12px;
            transform: translate3d(0, -50%, 0);
            content: "";
            display: block;
            background-image: url("./images/icon_plus.png");
            background-repeat: no-repeat;
            background-size: 12px 11px;
          }
        }
        &::before {
          position: absolute;
          left: -25px;
          top: 50%;
          content: "";
          width: 16px;
          height: 12px;
          transform: translate3d(0, -50%, 0);
          display: block;
          background-image: url("./images/icon_highMember.png");
          background-repeat: no-repeat;
          background-size: 16px 9px;
        }
        &::after {
          position: absolute;
          right: -25px;
          top: 50%;
          width: 16px;
          height: 12px;
          transform: translate3d(0, -50%, 0);
          content: "";
          display: block;
          background-image: url("./images/icon_highMember.png");
          background-repeat: no-repeat;
          background-size: 16px 9px;
        }
      }
      .rule-box-high-items {
        width: 315px;
        margin: 17px auto 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        .rule-box-high-items-item {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          .rule-box-high-items-item-img {
            width: 45px;
            height: 45px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .rule-box-high-items-item-title {
            margin: 6px 0 0;
            font-family: "PingFang-SC-Bold";
            font-size: 10px;
            color: #333333;
          }
          .rule-box-high-items-item-tip {
            font-family: "PingFangSC-Medium";
            font-size: 10px;
            color: #666666;
            line-height: 13px;
          }
        }
      }
    }
    .rule-box-profit {
      margin: 19px auto 0;
      width: 344px;
      height: 328px;
      background-image: url("./images/bg1.png");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      .rule-box-profit-title {
        font-family: "PingFang-SC-Bold";
        font-size: 20px;
        color: #ffffff;
        padding-top: 22px;
        text-align: center;
      }
      .rule-box-profit-subtitle {
        margin: 55px auto 0;
        width: 233px;
        height: 26px;
        line-height: 26px;
        background-image: linear-gradient(180deg, #fee4b3 0%, #fbd684 100%);
        border-radius: 13px;
        text-align: center;
        font-family: "PingFangSC-Medium";
        font-size: 12px;
        color: #2d2d2d;
      }
      .rule-box-profit-bg {
        margin: 20px auto;
        width: 279px;
        height: 94px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .rule-box-profit-member {
        margin: 0 auto;
        width: 315px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        .rule-box-profit-member-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          .rule-box-profit-member-item-title {
            margin-bottom: 5px;
            font-family: "PingFang-SC-Bold";
            font-size: 14px;
            color: #000000;
          }
          .rule-box-profit-member-item-tip {
            font-family: "PingFangSC-Medium";
            font-size: 10px;
            color: #000000;
            line-height: 13px;
            span {
              color: #ff0067;
            }
          }
        }
        .rule-box-profit-member-vs {
          margin-top: 5px;
          width: 28px;
          height: 28px;
          background-image: url("./images/icon_vs.png");
          background-repeat: no-repeat;
          background-size: 28px 28px;
        }
      }
    }
    .rule-box-bg2 {
      margin: 6px auto;
      width: 344px;
      height: 231px;
      background-color: #ffffff;
      border-radius: 4px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .rule-box-normalMember {
      margin: 0 auto;
      width: 344px;
      background-color: #fff;
      .rule-box-normalMember-title {
        padding-top: 15px;
        text-align: center;
        font-family: "PingFang-SC-Bold";
        font-size: 18px;
        color: #000000;
      }
      .rule-box-normalMember-bg {
        margin: 12px auto 0;
        width: 150px;
        height: 110px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .rule-box-normalMember-tip {
        margin-top: 10px;
        font-family: "PingFangSC-Medium";
        font-size: 13px;
        color: #333333;
        text-align: center;
      }
      .rule-box-normalMember-tipbox {
        margin: 10px auto 0;
        padding-top: 10px;
        width: 333px;
        height: 42px;
        background-color: #f2f2f2;
        border-radius: 4px;
        .rule-box-normalMember-tipbox-text {
          font-family: "PingFangSC-Medium";
          font-size: 12px;
          line-height: 15px;
          color: #888888;
          text-align: center;
        }
      }
      .rule-box-normalMember-input {
        margin: 0 auto;
        padding: 23px 0 37px;
        width: 215px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        input {
          width: 118px;
          height: 22px;
          border: 1px solid #f91e69;
          text-indent: 10px;
          border-radius: 22px;
          font-family: "PingFangSC-Medium";
          font-size: 10px;
          color: #999999;
        }
        button {
          outline: none;
          border: 0;
          width: 66px;
          height: 22px;
          background-image: linear-gradient(90deg, #ff6692 0%, #fb2c68 100%);
          border-radius: 12px;
          font-family: "PingFangSC-Medium";
          font-size: 10px;
          color: #ffffff;
        }
      }
      .rule-box-normalMember-progress {
        margin: 11px auto 0;
        width: 333px;
        height: 76px;
        background-image: linear-gradient(180deg, #7f7d7d 0%, #424242 100%);
        box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.5),
          inset 0px 2px 1px 0px rgba(255, 255, 255, 0.5);
        border-radius: 4px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .rule-box-normalMember-progress-left {
          position: relative;
          margin-left: 15px;
          width: 100px;
          height: 50px;
          canvas {
            width: 100%;
          }
          .rule-box-normalMember-progress-left-text {
            position: absolute;
            top: 18px;
            left: 0;
            font-family: "PingFangSC-Medium";
            font-size: 14px;
            color: #ffffff;
            width: 50px;
            text-align: center;
          }
        }
        .rule-box-normalMember-progress-right {
          margin-right: 13px;
          width: 192px;
          .rule-box-normalMember-progress-right-title {
            padding-top: 7px;
            text-indent: 27px;
            font-family: "PingFangSC-Medium";
            font-size: 14px;
            color: #ffffff;
            background-image: url("./images/icon_plus1.png");
            background-repeat: no-repeat;
            background-size: 19px 17px;
            background-position: left 7px;
          }
          .rule-box-normalMember-progress-right-tip {
            padding-top: 2px;
            text-indent: 27px;
            font-family: "PingFangSC-Medium";
            font-size: 12px;
            color: #ffe19d;
          }
          .rule-box-normalMember-progress-right-complete {
            float: right;
            margin-top: 7px;
            width: 60px;
            height: 18px;
            line-height: 16px;
            text-align: center;
            background-image: linear-gradient(90deg, #ff6692 0%, #fb2c68 100%);
            border-radius: 16px;
            font-family: "PingFangSC-Medium";
            font-size: 12px;
            color: #ffffff;
          }
        }
      }
      .rule-box-normalMember-plus {
        margin: 13px auto 0;
        width: 333px;
        height: 118px;
        background-image: linear-gradient(180deg, #6f6f6f 0%, #424242 100%);
        border-radius: 4px;
        .rule-box-normalMember-plus-item {
          margin: 0 auto;
          width: 293px;
          height: 57px;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          border-bottom: 1px dotted rgba(255, 255, 255, 0.3);
          .rule-box-normalMember-plus-item-left {
            width: 40px;
            height: 29px;
            background-image: url("./images/icon_plus1.png");
            background-repeat: no-repeat;
            background-size: 33px 29px;
            background-position: 5px center;
            &.left2 {
              width: 40px;
              height: 30px;
              background-image: url("./images/icon_plus2.png");
              background-size: 37px 30px;
              background-position: center;
            }
          }
          .rule-box-normalMember-plus-item-right {
            margin-left: 15px;
            line-height: 18px;
            .rule-box-normalMember-plus-item-right-text {
              font-family: "PingFangSC-Medium";
              font-size: 12px;
              color: #ffffff;
            }
            .rule-box-normalMember-plus-item-right-text2 {
              font-family: "PingFangSC-Medium";
              font-size: 12px;
              color: #ffe19d;
            }
          }
        }
        .rule-box-normalMember-plus-continue {
          margin: 20px auto 32px;
          width: 154px;
          height: 31px;
          line-height: 31px;
          background-image: linear-gradient(90deg, #ff6692 0%, #fb2c68 100%);
          border-radius: 16px;
          font-family: "PingFangSC-Medium";
          font-size: 16px;
          text-align: center;
          color: #ffffff;
        }
      }
    }
  }
}
</style>

<template>
  <div class="rule">
    <div class="rule-top">
      <div class="rule-top-back" @click="goBack"></div>
      <div class="rule-top-title">权益与规则</div>
      <div class="rule-top-back" style="visibility:hidden"></div>
    </div>
    <div class="rule-box">
      <div class="rule-box-normal">
        <div class="rule-box-normal-title">普通会员权益</div>
        <div class="rule-box-normal-items">
          <div class="rule-box-normal-items-item">
            <div class="rule-box-normal-items-item-img">
              <img src="./images/icon_intro.png" alt />
            </div>
            <div class="rule-box-normal-items-item-title">全网爆款商品推荐</div>
            <div class="rule-box-normal-items-item-tip">小编精选全网爆款商品</div>
            <div class="rule-box-normal-items-item-tip">每2个小时滚动更新</div>
          </div>
          <div class="rule-box-normal-items-item">
            <div class="rule-box-normal-items-item-img">
              <img src="./images/icon_gift.png" alt />
            </div>
            <div class="rule-box-normal-items-item-title">内部隐藏优惠券</div>
            <div class="rule-box-normal-items-item-tip">商品内部隐藏优惠券</div>
            <div class="rule-box-normal-items-item-tip">帮您购物最多省90%</div>
          </div>
        </div>
      </div>
      <div class="rule-box-high">
        <div class="rule-box-high-title">高级会员权益</div>
        <div class="rule-box-high-items">
          <div class="rule-box-high-items-item">
            <div class="rule-box-high-items-item-img">
              <img src="./images/icon_return.png" alt />
            </div>
            <div class="rule-box-high-items-item-title">自购50%返佣</div>
            <div class="rule-box-high-items-item-tip">自购商品返</div>
            <div class="rule-box-high-items-item-tip">佣高达50%</div>
          </div>
          <div class="rule-box-high-items-item">
            <div class="rule-box-high-items-item-img">
              <img src="./images/icon_fansreturn.png" alt />
            </div>
            <div class="rule-box-high-items-item-title">粉丝购买20%返佣</div>
            <div class="rule-box-high-items-item-tip">直属粉丝每次购买</div>
            <div class="rule-box-high-items-item-tip">商品您可获得佣金</div>
          </div>
          <div class="rule-box-high-items-item">
            <div class="rule-box-high-items-item-img">
              <img src='./images/icon_sharereturn.png' alt />
            </div>
            <div class="rule-box-high-items-item-title">分享赚50%返佣</div>
            <div class="rule-box-high-items-item-tip">分享商品给好友购</div>
            <div class="rule-box-high-items-item-tip">买可获得佣金</div>
          </div>
        </div>
      </div>
      <div class="rule-box-high">
        <div class="rule-box-high-title plus">Plus会员权益</div>
        <div class="rule-box-high-items">
          <div class="rule-box-high-items-item">
            <div class="rule-box-high-items-item-img">
              <img src="./images/icon_return.png" alt />
            </div>
            <div class="rule-box-high-items-item-title">自购80%返佣</div>
            <div class="rule-box-high-items-item-tip">自购商品返</div>
            <div class="rule-box-high-items-item-tip">佣高达80%</div>
          </div>
          <div class="rule-box-high-items-item">
            <div class="rule-box-high-items-item-img">
              <img src="./images/icon_fansreturn.png" alt />
            </div>
            <div class="rule-box-high-items-item-title">粉丝购买40%返佣</div>
            <div class="rule-box-high-items-item-tip">直属粉丝每次购买</div>
            <div class="rule-box-high-items-item-tip">商品您可获得佣金</div>
          </div>
          <div class="rule-box-high-items-item">
            <div class="rule-box-high-items-item-img">
              <img src="./images/icon_sharereturn.png" alt />
            </div>
            <div class="rule-box-high-items-item-title">分享赚80%返佣</div>
            <div class="rule-box-high-items-item-tip">分享商品给好友购</div>
            <div class="rule-box-high-items-item-tip">买可获得佣金</div>
          </div>
        </div>
      </div>
      <div class="rule-box-profit">
        <div class="rule-box-profit-title">收益对比举例</div>
        <div class="rule-box-profit-subtitle">不同等级鼻友购买面膜的收益</div>
        <div class="rule-box-profit-bg">
          <img src="./images/bg3.jpg" />
        </div>
        <div class="rule-box-profit-member">
          <div class="rule-box-profit-member-item">
            <div class="rule-box-profit-member-item-title">普通会员</div>
            <div class="rule-box-profit-member-item-tip">领券省80元</div>
          </div>
          <div class="rule-box-profit-member-vs"></div>
          <div class="rule-box-profit-member-item">
            <div class="rule-box-profit-member-item-title">高级会员</div>
            <div class="rule-box-profit-member-item-tip">领券省80元</div>
            <div class="rule-box-profit-member-item-tip">
              购买
              <span>再奖6.65元</span>
            </div>
          </div>
          <div class="rule-box-profit-member-vs"></div>
          <div class="rule-box-profit-member-item">
            <div class="rule-box-profit-member-item-title">Plus会员</div>
            <div class="rule-box-profit-member-item-tip">领券省80元</div>
            <div class="rule-box-profit-member-item-tip">
              购买
              <span>再奖10.65元</span>
            </div>
          </div>
        </div>
      </div>
      <div class="rule-box-bg2">
        <img src="./images/bg2.jpg" alt />
      </div>
      <div class="rule-box-normalMember" v-if="$route.query.name==='normal'">
        <div class="rule-box-normalMember-title">如何免费升级高级会员</div>
        <div class="rule-box-normalMember-bg">
          <img src="./images/member_normal.png" alt />
        </div>
        <div class="rule-box-normalMember-tip">请先绑定邀请码，升级成为高级会员吧！</div>
        <div class="rule-box-normalMember-tipbox">
          <div class="rule-box-normalMember-tipbox-text">tips：如果您不是好友推荐下载</div>
          <div class="rule-box-normalMember-tipbox-text">不妨百度搜一下好价鼻子邀请码试试看哦</div>
        </div>
        <div class="rule-box-normalMember-input">
          <input type="text" placeholder="请输入邀请码" disabled />
          <button>确认绑定</button>
        </div>
      </div>
      <div class="rule-box-normalMember" v-if="$route.query.name==='high'">
        <div class="rule-box-normalMember-title">如何免费升级Plus会员</div>
        <div class="rule-box-normalMember-bg">
          <img src="./images/member_high.png" alt />
        </div>
        <div class="rule-box-normalMember-tip">完成以下任务，可免费获赠30天Plus会员时长</div>
        <div class="rule-box-normalMember-progress">
          <div class="rule-box-normalMember-progress-left">
            <canvas ref="canvas1"></canvas>
            <div class="rule-box-normalMember-progress-left-text">{{Number(userInfo.invitedPersons/8 * 100).toFixed(0)}}%</div>
          </div>
          <div class="rule-box-normalMember-progress-right">
            <div class="rule-box-normalMember-progress-right-title">邀请8位好友成为你的粉丝</div>
            <div class="rule-box-normalMember-progress-right-tip">已邀请: {{userInfo.invitedPersons}}</div>
            <div class="rule-box-normalMember-progress-right-complete" v-if="userInfo.invitedPersons < 8" @click="toPage('invite')">去完成</div>
            <div class="rule-box-normalMember-progress-right-complete" v-if="userInfo.invitedPersons >= 8">已完成</div>
          </div>
        </div>
        <div class="rule-box-normalMember-progress">
          <div class="rule-box-normalMember-progress-left">
            <canvas ref="canvas2"></canvas>
            <div class="rule-box-normalMember-progress-left-text">{{Number(userInfo.validInvitedPersons/3 * 100).toFixed(0)}}%</div>
          </div>
          <div class="rule-box-normalMember-progress-right">
            <div class="rule-box-normalMember-progress-right-title">辅导3位好友完成首单购买</div>
            <div class="rule-box-normalMember-progress-right-tip">已完成: {{userInfo.validInvitedPersons}}</div>
            <div class="rule-box-normalMember-progress-right-complete" v-if="userInfo.validInvitedPersons>=3">已完成</div>
            <div class="rule-box-normalMember-progress-right-complete" v-if="userInfo.validInvitedPersons<3" @click="toPage('invite')">去完成</div>
          </div>
        </div>
      </div>
      <div class="rule-box-normalMember" v-if="$route.query.name==='plus'">
        <div class="rule-box-normalMember-title">如何免费续期Plus会员</div>
        <div class="rule-box-normalMember-bg">
          <img src="./images/member_plus.png" alt />
        </div>
        <div class="rule-box-normalMember-tip">你已是Plus会员，继续推广可获赠更多免费会员时长哦！</div>
        <div class="rule-box-normalMember-plus">
          <div class="rule-box-normalMember-plus-item">
            <div class="rule-box-normalMember-plus-item-left"></div>
            <div class="rule-box-normalMember-plus-item-right">
              <div class="rule-box-normalMember-plus-item-right-text">已邀请{{userInfo.invitedPersons}}位粉丝加入好价鼻子</div>
              <div class="rule-box-normalMember-plus-item-right-text2">系统已额外赠送您{{userInfo.invitedPersons*3}}天Plus会员</div>
            </div>
          </div>
          <div class="rule-box-normalMember-plus-item">
            <div class="rule-box-normalMember-plus-item-left left2"></div>
            <div class="rule-box-normalMember-plus-item-right">
              <div class="rule-box-normalMember-plus-item-right-text">已辅导{{userInfo.validInvitedPersons}}位粉丝完成首单购买</div>
              <div class="rule-box-normalMember-plus-item-right-text2">系统已额外赠送您{{userInfo.validInvitedPersons*4}}天Plus会员</div>
            </div>
          </div>
          <div class="rule-box-normalMember-plus-continue" @click="toPage('invite')">继续分享</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {}
    }
  },
  mounted () {
    if (this.$store.state.token) {
      this.userInfo = this.$store.state.userInfo
    }
    this.$nextTick(() => {
      if (this.$route.query.name === 'high') {
        // 第一个圆
        let ctx = this.$refs.canvas1.getContext('2d')
        let num1 = Number(this.userInfo.invitedPersons / 8)
        if (num1 > 1) {
          ctx.strokeStyle = '#6dd0b1'
        } else {
          ctx.strokeStyle = '#fb2c68'
        }
        let finalDeg = Math.PI
        if (num1 === 0) {
          finalDeg = Math.PI
        } else {
          finalDeg = (2 * num1 - 1) * Math.PI
        }
        ctx.beginPath()
        ctx.lineWidth = '15'
        ctx.arc(
          75,
          this.$refs.canvas1.height / 2,
          65,
          Math.PI,
          finalDeg,
          false
        )
        ctx.stroke()
        ctx.closePath()

        ctx.beginPath()
        ctx.arc(
          75,
          this.$refs.canvas1.height / 2,
          65,
          finalDeg,
          -Math.PI
        )
        ctx.strokeStyle = '#cccccc'
        ctx.stroke()
        ctx.closePath()

        // 第二个圆
        let num2 = Number(this.userInfo.validInvitedPersons / 3)
        let ctx2 = this.$refs.canvas2.getContext('2d')
        let finalDeg2 = Math.PI
        if (num2 === 0) {
          finalDeg2 = Math.PI
        } else {
          finalDeg2 = (2 * num2 - 1) * Math.PI
        }
        ctx2.beginPath()
        ctx2.arc(
          75,
          this.$refs.canvas2.height / 2,
          65,
          Math.PI,
          finalDeg2,
          false
        )
        if (num2 > 1) {
          ctx2.strokeStyle = '#6dd0b1'
        } else {
          ctx2.strokeStyle = '#fb2c68'
        }
        ctx2.lineWidth = '15'
        ctx2.stroke()
        ctx2.closePath()

        ctx2.beginPath()
        ctx2.arc(
          75,
          this.$refs.canvas2.height / 2,
          65,
          finalDeg2,
          -Math.PI
        )
        ctx2.strokeStyle = '#cccccc'
        ctx2.stroke()
        ctx2.closePath()
      }
    })
  }
}
</script>
