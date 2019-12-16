<style lang="scss" scoped>
  .mobile {
    width: 100vw;
    overflow: hidden;
  }

  .phoneInput {
    margin: 44px 46px;
    width: 271px;
    height: 37px;
    border-bottom: solid 1px rgba(151, 151, 151, 0.25);
    display: flex;
    flex-direction: row;
    align-items: center;
    input {
      margin: 0;
      padding: 0;
      outline: none;
      border: 0;
      font-family: "PingFangSC-Regular";
      font-size: 18px;
      color: #333333;
      flex: 1;
    }
  }

  .codeInput {
    margin: 44px 46px;
    width: 271px;
    height: 37px;
    border-bottom: solid 1px rgba(151, 151, 151, 0.25);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    input {
      outline: none;
      border: 0;
      margin: 0;
      padding: 0;
      font-family: "PingFangSC-Regular";
      font-size: 18px;
      color: #333333;
      width: 150px;
    }
    .codeInput-code {
      padding: 5px 12px;
      font-family: "PingFangSC-Regular";
      font-size: 12px;
      color: rgba(51, 51, 51, 0.6);
      border: 1px solid rgba(51, 51, 51, 0.6);
      border-radius: 18px;
      &.isGet {
        padding: 5px 32px;
        background-color: #e0e0e0;
        border-radius: 12px;
        font-family: "PingFangSC-Regular";
        font-size: 12px;
        color: #ffffff;
        border: 0;
      }
    }
  }

  .mobile-title {
    margin: 30px 46px 0;
    font-family: "SourceHanSansSC-Medium";
    font-size: 25px;
    color: #333333;
  }

  .mobile-subtitle {
    margin: 2px 46px;
    font-family: "SourceHanSansSC-Medium";
    font-size: 14px;
    color: #333333;
  }

  .login-now {
    margin: 0 auto;
    width: 233px;
    height: 39px;
    line-height: 39px;
    background-image: linear-gradient(180deg, #ff5183 0%, #fb2c68 100%);
    border-radius: 19px;
    font-family: "SourceHanSansSC-Medium";
    font-size: 16px;
    color: #ffffff;
    text-align: center;
  }

  .phone-protocool {
    margin-top: 215px;
    text-align: center;
    font-family: "SourceHanSansSC-Regular";
    font-size: 12px;
    color: #a0a0a0;
    span {
      color: #389dff;
    }
  }
</style>

<template>
  <div class="mobile">
    <div class="mobile-title">手机登录</div>
    <div class="mobile-subtitle">欢迎来到好价鼻子</div>
    <div class="phoneInput">
      <input type="tel" maxlength="11" v-model="mobile" placeholder="请输入手机号">
    </div>
    <div class="codeInput">
      <input type="number" maxlength="6" v-model="code" placeholder="请输入验证码">
      <div class="codeInput-code" :class="{'isGet':isGet}" @click="toGetCode">{{codeText}}</div>
    </div>
    <div @click="login" class="login-now">立即登录</div>
    <div class="phone-protocool">
      登录即代表同意好价鼻子
      <span @click="toPage('useProtocool')">用户协议</span>和
      <span @click="toPage('protocol')">隐私政策</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mobile: '',
      code: '',
      isGet: false,
      minutes: 60,
      timer: 0,
      codeText: '获取验证码'
    }
  },
  methods: {
    toGetCode () {
      if (this.isGet) {
        this.$toast('60秒内只能请求一次验证码')
        return
      }

      this.$http('GET', this.api.sendIdentifyCode, {
        smsInfo: JSON.stringify({
          mobile: this.mobile,
          clientId: 'dg_app',
          module: 'login'
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
    },
    login () {
      if (!/1[^0,^1,^2]\d{9}$/.test(this.mobile)) {
        this.$toast('手机号输入错误')
        return
      }
      if (!this.code) {
        this.$toast('手机验证码为空')
        return
      }
      this.$http('GET', this.api.mobileLogin, {
        clientCode: '889033',
        mobile: this.mobile,
        identifyCode: this.code,
        module: 'login'
      }).then(res => {
        if (res.data.success === true) {
          this.$store.commit('saveUserId', res.data.model.userId)
          this.$store.commit('saveState', {
            name: 'token',
            data: res.data.model.accessToken
          })
          this.$store.commit('saveState', {
            name: 'refresh',
            data: res.data.model.refreshToken
          })
          this.$store.commit('saveState', {
            name: 'tokenTime',
            data: new Date().getTime() + res.data.model.expireIn * 1000
          })
          this.$store.commit('saveState', {
            name: 'userToken',
            data: res.data.model.userToken
          })
          if (window.plus) {
            if (res.data.model.newUser === true) {
              window.plus.webview.create('/index.html#/loginInvite').show()
            } else {
              window.plus.webview.create('/bottom.html?islogin=true').show('none')
              // this.toPage('layout', { islogin: true })
            }
          } else {
            if (res.data.model.newUser === true) {
              this.toPage('loginInvite')
            } else {
              window.plus.webview.create('/bottom.html?islogin=true').show('none')
              // this.toPage('layout', { islogin: true })
            }
          }
        } else {
          this.$toast(res.data.msgInfo)
        }
      })
    }
  }
}
</script>
