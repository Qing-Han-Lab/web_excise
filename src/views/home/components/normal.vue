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
          }
          .normal-top-left-name-level-time {
            margin-left: 9.5px;
            font-family: "DINAlternate-Bold";
            font-size: 13px;
            color: rgba(255, 255, 255, 1);
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
      padding: 0 10px 0 0;
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
      background-image: url("./images/icon_answer.png");
      background-repeat: no-repeat;
      background-position: left center;
      background-size: auto 100%;
      text-indent: 16px;
    }
  }
  .normal-raise {
    margin: 10px auto;
    width: 349px;
    height: 110.5px;
    background-color: #fff;
    border-radius: 5px;
    .normal-raise-title {
      padding-top: 13.5px;
      margin-left: 27.5px;
      font-family: "PingFangSC-Regular";
      font-size: 18px;
      color: #333;
    }
    .normal-raise-tip {
      padding-top: 5px;
      margin-left: 27.5px;
      font-family: "PingFangSC-Regular";
      font-size: 12px;
      color: rgba(51, 51, 51, 0.6);
    }
    .normal-raise-invite {
      margin-left: 27.5px;
      margin-top: 15px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      .normal-raise-invite-input {
        padding-left: 10px;
        outline: none;
        border: 1px solid rgba(251, 44, 104, 1);
        width: 97.5px;
        height: 21.5px;
        line-height: 21.5px;
        border-radius: 10.5px;
        font-family: "PingFangSC-Regular";
        font-size: 12px;
        letter-spacing: 0.1px;
      }
      .normal-raise-invite-submit {
        margin-left: 15px;
        width: 63px;
        height: 21.5px;
        line-height: 21.5px;
        text-align: center;
        background-color: rgba(251, 44, 104, 1);
        border-radius: 12.6px;
        font-family: "PingFangSC-Regular";
        font-size: 12px;
        color: rgba(255, 255, 255, 1);
      }
    }
  }
  .normal-sale {
    padding-top: 5px;
    .normal-sale-title {
      margin-left: 14px;
      font-family: "PingFangSC-Regular";
      font-size: 15px;
      letter-spacing: 0.2px;
      color: rgba(0, 0, 0, 1);
    }
    .normal-sale-item {
      width: 356px;
      height: 113.5px;
      margin: 5px auto 0;
      border-radius: 5px;
      background-color: #fff;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      .normal-sale-item-left {
        width: 113.5px;
        height: 113.5px;
        img {
          width: 113.5px;
          height: 113.5px;
        }
      }
      .normal-sale-item-right {
        margin-top: 8px;
        margin-left: 10px;
        height: 93.5px;
        width: 215px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .normal-sale-item-right-title {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          font-family: "PingFangSC-Regular";
          height: 20px;
          line-height: 20px;
          font-size: 14px;
          color: rgba(51, 51, 51, 1);
          &.tb {
            background-image: url("../images/icon_tb.png");
            background-repeat: no-repeat;
            background-position: left center;
            background-size: 18px 18px;
            text-indent: 22px;
          }
          &.jd {
            background-image: url("../images/icon_jd.png");
            background-repeat: no-repeat;
            background-position: left center;
            background-size: 18px 18px;
            text-indent: 22px;
          }
          &.pdd {
            background-image: url("../images/icon_pdd.png");
            background-repeat: no-repeat;
            background-position: left center;
            background-size: 18px 18px;
            text-indent: 22px;
          }
          &.tm {
            background-image: url("../images/icon_tmall.png");
            background-repeat: no-repeat;
            background-position: left center;
            background-size: 18px 18px;
            text-indent: 22px;
          }
        }
        .normal-sale-item-right-tips {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          .normal-sale-item-right-tips-item {
            font-family: "PingFangSC-Regular";
            font-size: 11px;
            letter-spacing: 0.5px;
            color: rgba(51, 51, 51, 0.6);
            margin-left: 7px;
            &:first-child {
              margin: 0;
            }
          }
        }
        .normal-sale-item-right-price {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: baseline;
          .normal-sale-item-right-price-now {
            font-family: "DINAlternate-Bold";
            font-size: 22px;
            letter-spacing: 0.3px;
            color: rgba(251, 44, 104, 1);
            span {
              font-family: "DINAlternate-Bold";
              font-size: 9.6px;
              letter-spacing: 0.3px;
              color: rgba(251, 44, 104, 1);
            }
          }
          .normal-sale-item-right-price-old {
            margin-left: 5px;
            font-family: "Helvetica";
            font-size: 11px;
            letter-spacing: 0.2px;
            color: rgba(194, 194, 194, 1);
          }
        }
        .normal-sale-item-right-buy {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          .normal-sale-item-right-buy-now {
            width: 64.5px;
            height: 18.5px;
            line-height: 18.5px;
            border-radius: 18.5px;
            background-color: rgba(251, 44, 104, 1);
            font-family: "PingFangSC-Regular";
            font-size: 10px;
            letter-spacing: 0.3px;
            color: rgba(255, 255, 255, 1);
            text-align: center;
          }
          .normal-sale-item-right-buy-knock {
            font-family: "PingFangSC-Regular";
            font-size: 10.3px;
            letter-spacing: 0.4px;
            color: rgba(51, 51, 51, 0.6);
            span {
              font-family: "DINAlternate-Bold";
              font-size: 11px;
              letter-spacing: 0.4px;
              color: rgba(51, 51, 51, 0.6);
            }
          }
        }
      }
    }
  }
}
.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba($color: #000000, $alpha: 0.5);
  z-index: 15;
  .mask-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    z-index: 16;
    margin: 0 auto;
    width: 266px;
    height: 194px;
    background-color: #ffffff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    .mask-box-title {
      margin: 16px;
      font-family: "SourceHanSansSC-Medium";
      font-size: 16px;
      letter-spacing: 1px;
      color: #333333;
    }
    .mask-box-head {
      margin-top: 4px;
      width: 60px;
      height: 60px;
      border-radius: 60px;
      border: solid 1px rgba(252, 56, 113, 0.6);
      overflow: hidden;
      img {
        width: 60px;
        height: 60px;
      }
    }
    .mask-box-name {
      margin-top: 2px;
      font-family: "SourceHanSansSC-Regular";
      font-size: 12px;
      color: rgba(51, 51, 51, 0.6);
    }
    .mask-box-btn {
      margin-top: 18px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 172px;
      line-height: 29px;
      text-align: center;
      .mask-box-btn-cancel {
        width: 68px;
        height: 29px;
        border-radius: 14px;
        border: solid 1px rgba(51, 51, 51, 0.6);
        font-family: "SourceHanSansSC-Medium";
        font-size: 15px;
        letter-spacing: 1px;
        color: rgba(51, 51, 51, 0.6);
      }
      .mask-box-btn-enter {
        width: 68px;
        height: 29px;
        background-color: #fb2c68;
        border-radius: 14px;
        font-family: "SourceHanSansSC-Medium";
        font-size: 15px;
        letter-spacing: 1px;
        color: #ffffff;
      }
    }
  }
}
</style>

<template>
  <div
    class="normal"
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="100"
    infinite-scroll-immediate-check="false"
  >
    <div class="normal-top">
      <div class="normal-top-box">
        <div class="normal-top-left">
          <div class="normal-top-left-head">
            <img :src="$store.state.userInfo.userHeadUrl || userhead" alt />
          </div>
          <div class="normal-top-left-name">
            <div
              class="normal-top-left-name-text"
              v-if="$store.state.userInfo.nickName"
            >{{$store.state.userInfo.nickName}}</div>
            <div
              class="normal-top-left-name-text"
              @click="toPage('login')"
              v-if="!$store.state.userInfo.nickName"
            >登录/注册</div>
            <div class="normal-top-left-name-level">
              <div class="normal-top-left-name-level-info">普通会员</div>
              <div class="normal-top-left-name-level-time"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="normal-bg">
      <div class="normal-bg-rule" @click="toPage('rule',{name:'normal'})">规则说明</div>
      <img src="./images/normal_bg.jpg" alt />
    </div>
    <div class="normal-raise">
      <div class="normal-raise-title">升级高级会员</div>
      <div class="normal-raise-tip">找到邀请你的用户绑定邀请码即可立即成为高级会员<br/>
       或到百度搜索"好价鼻子邀请码"获取
      </div>
      <div class="normal-raise-invite">
        <input
          class="normal-raise-invite-input"
          v-model="inviteCode"
          type="text"
          placeholder="请输入邀请码"
        />
        <div class="normal-raise-invite-submit" @click="checkUser">确认绑定</div>
      </div>
    </div>
    <div class="normal-sale">
      <div class="normal-sale-title">新人专区</div>
      <div
        class="normal-sale-item"
        v-for="(item,index) in newProducts"
        :key="index"
        @click="toPage('product',{item:item})"
      >
        <div class="normal-sale-item-left">
          <img v-lazy="checkUrl(item.itemPicUrl)" />
        </div>
        <div class="normal-sale-item-right">
          <div
            class="normal-sale-item-right-title"
            :class="{'tb':item.platform==='taobao','jd':item.platform==='jingdong','pdd': item.platform==='pingduoduo', 'tm': item.tmall}"
          >{{item.itemName}}</div>
          <div class="normal-sale-item-right-tips">
            <div
              class="normal-sale-item-right-tips-item"
              v-for="(item2,index2) in item.itemFeature"
              :key="index2"
            >{{item2}}</div>
          </div>
          <div class="normal-sale-item-right-price">
            <div class="normal-sale-item-right-price-now">
              <span>￥</span>
              {{item.finalPrice}}
            </div>
            <div
              class="normal-sale-item-right-price-old"
              v-if="item.originPrice"
            >￥{{item.originPrice}}</div>
          </div>
          <div class="normal-sale-item-right-buy">
            <div class="normal-sale-item-right-buy-now">立即抢购</div>
            <div class="normal-sale-item-right-buy-knock">
              <span>已抢:{{item.saledNumber>10000?`${Number(item.saledNumber/10000).toFixed(1)}万`:item.saledNumber}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mask" v-if="showInvite">
      <div class="mask-box">
        <div class="mask-box-title">邀请人信息</div>
        <div class="mask-box-head">
          <img v-lazy="checkUrl(inviteUser.headUrl)" />
        </div>
        <div class="mask-box-name">{{inviteUser.nickName}}</div>
        <div class="mask-box-btn">
          <div class="mask-box-btn-cancel" @click="showInvite=false">取消</div>
          <div class="mask-box-btn-enter" @click="toBind">确认</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      inviteCode: '',
      showInvite: false,
      newProducts: [],
      inviteUser: {
        nickName: '',
        headUrl: ''
      },
      userhead: require('@/assets/userhead.png'),
      islogin: false,
      allLoaded: false,
      nowPage: 2
    }
  },
  created () {
    this.searchNewsProducts()
  },
  methods: {
    toSign () {
      if (this.$store.state.userInfo.signIn) {
        this.$toast('您已经签到啦，明天再来吧')
        return
      }
      this.$http('GET', this.api.userSignIn).then(res => {
        if (res.data.success === true) {
          this.$toast('签到成功')
          this.$store.dispatch('getUserAccountInfo')
        }
      })
    },
    checkUser () {
      // 检查用户
      if (this.inviteCode !== '') {
        if (this.$store.state.token === '') {
          this.$toast('请先登录再绑定邀请码')
          setTimeout(() => {
            this.toPage('login')
          }, 1500)
          return
        }
        this.$http('GET', this.api.getUser, {
          inviteCode: this.inviteCode,
          mobile: this.inviteCode
        }).then(res => {
          console.log(res)
          if (res.data.success) {
            this.inviteUser.headUrl = res.data.model.userHeadUrl
            this.inviteUser.nickName = res.data.model.nickName
            this.inviteCode = res.data.model.inviteCode
            this.showInvite = true
          } else {
            this.$toast('邀请码或手机号不正确')
          }
        })
      } else {
        this.$toast('请先输入邀请码或手机号')
      }
    },
    toBind () {
      // 绑定
      this.$http('GET', this.api.bindInviteCode, {
        userJson: JSON.stringify({
          inviteCode: this.inviteCode
        })
      }).then(res => {
        if (res.data.success === true) {
          // 绑定成功
          this.showInvite = false
          this.refresh()
        } else {
          this.$toast(res.data.msgInfo)
          this.showInvite = false
        }
      })
    },
    searchNewsProducts () {
      // 新人专区
      this.$http('GET', this.api.searchNewsProducts, {
        page: 1,
        pageSize: 10
      }).then(res => {
        if (res.data.success === true) {
          this.newProducts = res.data.model.list
        }
      })
    },
    loadMore () {
      if (this.allLoaded) {
        return
      }
      this.$http('GET', this.api.searchNewsProducts, {
        page: this.nowPage,
        pageSize: 10
      }).then(res => {
        if (res.data.success === true) {
          if (res.data.model.list != null) {
            if (res.data.model.list.length > 0) {
              this.nowPage++
              this.$nextTick(() => {
                this.newProducts = this.newProducts.concat(res.data.model.list)
              })
            } else {
              this.allLoaded = true
            }
          } else {
            this.allLoaded = true
          }
        }
      })
    }
  }
}
</script>
