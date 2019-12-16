<style lang="scss" scoped>
.withdraw {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.withdraw-scroll {
  flex: 1;
  overflow: auto;
}
.withdraw-scroll::-webkit-scrollbar {
  display: none;
}
.withdraw-top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  line-height: 40px;
  background-color: #fb2c68;
  .withdraw-top-title {
    font-family: "SourceHanSansSC-Medium";
    font-size: 18px;
    color: #ffffff;
    margin-left: 45px;
  }
  .withdraw-top-back {
    width: 40px;
    height: 40px;
    background-image: url("./images/back_white.png");
    background-repeat: no-repeat;
    background-size: 10px 16px;
    background-position: center center;
  }
  .withdraw-top-icon {
    height: 40px;
    background: url("./images/icon-rule.png") left no-repeat;
    background-size: 17px 15px;
    color: #fff;
    font-size: 14px;
    margin-right: 13px;
    text-indent: 23px;
  }
}
.withdraw-mid {
  background-color: #fb2c68;
  text-align: center;
  .withdraw-mid-tip {
    padding-top: 50px;
    font-family: "SourceHanSansSC-Medium";
    font-size: 14px;
    color: #ffffff;
  }
  .withdraw-mid-num {
    font-family: "DINAlternate-Bold";
    font-size: 40px;
    letter-spacing: 1px;
    color: #ffffff;
  }
  .withdraw-mid-box {
    margin: 70px auto 0;
    padding-bottom: 47px;
    width: 325px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .withdraw-mid-box-item {
      .withdraw-mid-box-item-money {
        font-family: "DINAlternate-Bold";
        font-size: 20px;
        color: #ffffff;
        span {
          font-family: "DINAlternate-Bold";
          font-size: 12px;
          color: #ffffff;
        }
      }
      .withdraw-mid-box-item-text {
        margin-top: 5px;
        font-family: "SourceHanSansSC-Regular";
        font-size: 12px;
        color: #ffffff;
      }
    }
  }
}
.withdraw-center {
  margin: -22px auto 0;
  width: 349px;
  height: 44px;
  background-color: #ffffff;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .withdraw-center-tip {
    margin-left: 15px;
    font-family: "SourceHanSansSC-Medium";
    font-size: 12px;
    color: #000000;
  }
  .withdraw-center-btn {
    margin-right: 15px;
    width: 67px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    background-color: #fb2c68;
    border-radius: 11px;
    font-family: "SourceHanSansSC-Medium";
    font-size: 11px;
    color: #ffffff;
  }
}

.withdraw-limit {
  width: 327px;
  height: 97px;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  margin: 9px auto 14px;
  padding: 15px 10px 16px 12px;
  .withdraw-limit-text {
    font-size: 14px;
    font-family: "SourceHanSansSC-Regular";
    font-weight: 500;
  }
  .withdraw-limit-input {
    height: 49px;
    font-size: 24px;
    font-family: "SourceHanSansSC-Regular";
    font-weight: 500;
    color: #333333;
    margin-top: 6px;
    border-bottom: 1px solid #979797;
    input {
      width: 290px;
      height: 36px;
      font-size: 16px;
      font-weight: 400;
      border: 0;
      outline: none;
    }
  }
  .withdraw-limit-hint {
    display: flex;
    justify-content: space-between;
    margin-top: 13px;
    font-size: 14px;
    .withdraw-limit-hint-money {
      color: #999;
    }
    .withdraw-limit-hint-all {
      color: #fca50d;
    }
  }
}
.withdraw-bottom {
  width: 349px;
  background-color: #fff;
  border-radius: 4px;
  margin: 14px auto 0px;
  padding-bottom: 90px;
  overflow: hidden;
  .withdraw-bottom-hini {
    color: #333333;
    font-size: 12px;
    font-weight: 500;
    border-left: 2px solid #f5a623;
    text-indent: 5px;
    margin-left: 12px;
    margin-top: 15px;
    border-radius: 1px;
  }
  .withdraw-bottom-box {
    width: 269px;
    height: 67px;
    background-color: #f6f6f6;
    border-radius: 4px;
    border: 1px solid rgba(238, 226, 203, 1);
    margin: 25px auto 0px;

    .withdraw-bottom-box-text {
      color: #d2b47b;
      font-size: 14px;
      text-align: center;
      font-family: "SourceHanSansSC-Regular";
      line-height: 67px;
      background: url("./images/icon-add.png") left no-repeat;
      background-size: 18px;
      background-position-x: 75px;
    }
    .withdraw-bottom-box-id {
      width: 230px;
      height: 35px;
      margin: 16px auto;
      font-size: 14px;
      color: #000000;
      display: flex;
      font-family: "SourceHanSansSC-Regular";
      background: url("./images/icon-right.png") right no-repeat;
      background-size: 7px 12px;
      content: "";
      img {
        width: 32px;
        height: 32px;
        margin-right: 10px;
      }
    }
  }
  .withdraw-btn {
    width: 269px;
    height: 35px;
    background: rgba(206, 207, 211, 1);
    border-radius: 18px;
    margin: 58px auto 0px;
    font-size: 16px;
    color: #fff;
    text-align: center;
    line-height: 35px;
    &.canSub {
      background: #fca50d;
    }
  }
  .withdraw-hint {
    padding-top: 10px;
    width: 264px;
    height: 30px;
    color: #999;
    font-size: 10px;
    font-family: "SourceHanSansSC-Regular";
    line-height: 15px;
    margin: 4px auto 0px;
  }
  .withdraw-bottom-box-phone{
    width: 150px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
}
</style>

<template>
  <div class="withdraw">
    <div class="withdraw-top">
      <div class="withdraw-top-back" @click="goBack"></div>
      <div class="withdraw-top-title">提现</div>
      <div class="withdraw-top-icon" @click="todetails">详细规则</div>
    </div>
    <div class="withdraw-scroll">
      <div class="withdraw-mid">
        <div class="withdraw-mid-tip">可提现额度（元）</div>
        <div class="withdraw-mid-num">{{total.withdrawMoney}}</div>
        <div class="withdraw-mid-box">
          <div class="withdraw-mid-box-item">
            <div class="withdraw-mid-box-item-money">
              <span>￥</span>
              {{total.lastMonthMoney}}
            </div>
            <div class="withdraw-mid-box-item-text">上月已结算</div>
          </div>
          <div class="withdraw-mid-box-item">
            <div class="withdraw-mid-box-item-money">
              <span>￥</span>
              {{total.currentMonthMoney}}
            </div>
            <div class="withdraw-mid-box-item-text">本月已结算</div>
          </div>
          <div class="withdraw-mid-box-item">
            <div class="withdraw-mid-box-item-money">
              <span>￥</span>
              {{total.totalPreMoney}}
            </div>
            <div class="withdraw-mid-box-item-text">待结算</div>
          </div>
        </div>
      </div>
      <div class="withdraw-center">
        <div class="withdraw-center-tip">每个月25号后可提现上月已结算佣金！</div>
        <!-- <div class="withdraw-center-btn">查看详情</div> -->
      </div>
      <div class="withdraw-limit">
        <div class="withdraw-limit-text">提现金额</div>
        <div class="withdraw-limit-input">
          ￥
          <input type="text" v-model="money" placeholder="请输入金额" />
        </div>
        <div class="withdraw-limit-hint">
          <div class="withdraw-limit-hint-money">可提现金额: {{total.withdrawMoney}}</div>
          <div class="withdraw-limit-hint-all" @click="takeAll">全部提现</div>
        </div>
      </div>
      <div class="withdraw-bottom">
        <div class="withdraw-bottom-hini">提现到支付宝</div>
        <div class="withdraw-bottom-box">
          <div class="withdraw-bottom-box-text" v-if="!aliPayAccount.realName" @click="toBinding">绑定支付宝</div>
          <div class="withdraw-bottom-box-id" v-if="aliPayAccount.realName" @click="toBinding">
            <img src="./images/icon-Alipay.png" alt />
            <div>
              <div class="withdraw-bottom-box-name">{{aliPayAccount.realName}}</div>
              <div class="withdraw-bottom-box-phone">{{aliPayAccount.alipayAccount}}</div>
            </div>
          </div>
        </div>
        <div
          class="withdraw-btn"
          :class="{'canSub': aliPayAccount.realName}"
          @click="applyMoney"
        >申请提现</div>
        <div class="withdraw-hint">*现在申请提现，预计2个小时内到账，实际到账时间以落地行处理结果为准</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      total: {
        lastMonthMoney: 0,
        totalPreMoney: 0,
        currentMonthMoney: 0,
        withdrawMoney: 0
      },
      accountNo: '',
      accountName: '',
      money: '',
      code: '',
      isGet: false,
      minutes: 60,
      timer: -1,
      codeText: '获取验证码',
      aliPayAccount: {}
    }
  },
  created () {
    this.$http('GET', this.api.getUserAccountInfo).then(res => {
      if (res.data.success === true) {
        this.total = res.data.model
      }
    })
    this.getCurrentPayAccount()
  },
  methods: {
    getCurrentPayAccount () {
      // 获取用户支付信息
      this.$http('GET', this.api.getCurrentPayAccount).then(res => {
        if (res.data.success === true) {
          this.aliPayAccount = res.data.model[0]
        }
      })
    },
    todetails () {
      this.toPage('minuterule')
    },
    toBinding () {
      if (window.plus) {
        let w = window.plus.webview.create('/index.html#binding', 'binding', {
          'titleNView': {
            backgroundColor: '#ffffff', // 导航栏背景色
            titleText: '绑定支付宝', // 导航栏标题
            titleColor: '#000000', // 文字颜色
            type: 'default', // 透明渐变样式
            autoBackButton: true // 自动绘制返回箭头
          }
        })
        w.addEventListener('close', () => {
          this.getCurrentPayAccount()
        })
        w.show('pop-in')
      }
    },
    takeAll () {
      // 全部提取
      if (parseFloat(this.total.withdrawMoney) <= 0) {
        this.$toast('没有可提现金额')
      } else {
        this.money = this.total.withdrawMoney
      }
    },
    checkMoney () {
      // eslint-disable-next-line no-useless-escape
      this.money = this.money.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3')
    },
    applyMoney () {
      if (!this.aliPayAccount.realName) {
        this.$toast('请先绑定支付宝账户')
        return
      }
      // if (this.accountNo === '') {
      //   this.$toast('请输入支付宝帐号')
      //   return
      // }

      // if (this.accountName === '') {
      //   this.$toast('请输入真实姓名')
      //   return
      // }

      // eslint-disable-next-line eqeqeq
      if (this.money === '') {
        this.$toast('请填写提现金额')
        return
      }
      let moneyReg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/
      if (!moneyReg.test(this.money)) {
        this.$toast('请输入正确的金额')
        return
      }
      if (parseFloat(this.money) <= 0) {
        this.$toast('提现金额需大于0')
        return
      }

      if (this.money > this.total.withdrawMoney) {
        this.$toast('可提现金额不足')
        return
      }

      // if (this.code === '') {
      //   this.$toast('请输入验证码')
      //   return
      // }
      // 提现申请
      this.$http('POST', this.api.applyMoney, {
        alipay: this.aliPayAccount.alipayAccount,
        realName: this.aliPayAccount.realName,
        money: this.money * 100
      }).then(res => {
        if (res.data.success === true) {
          this.accountNo = ''
          this.accountName = ''
          this.money = ''
          this.code = ''
          this.total.withdrawMoney = res.data.model.withdrawMoney
          this.$toast(`您已成功提现${res.data.model.money},请到支付宝查看`)
        } else {
          this.$toast(res.data.msgInfo)
        }
      })
    },
    toGetCode () {
      if (this.isGet) {
        this.$toast('60秒内只能请求一次验证码')
        return
      }
      this.$http('GET', this.api.sendUserIdentifyCode, {
        smsInfo: JSON.stringify({
          module: 'check'
        })
      }).then(res => {
        if (res.data.success === true) {
          this.$toast('验证码已发送到您的手机,请注意查收！')
          this.timer = setInterval(() => {
            this.minutes--
            this.codeText = `${this.minutes}s`
            this.isGet = true
            if (this.minutes < 0) {
              clearInterval(this.timer)
              this.codeText = '获取验证码'
              this.minutes = 60
              this.isGet = false
            }
          }, 1000)
        } else {
          this.$toast(res.data.msgInfo)
        }
      })
    }
  }
}
</script>
