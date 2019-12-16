<style lang="scss" scoped>
.login {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
}
.login-close {
  width: 50px;
  height: 50px;
  background-image: url("./images/icon_close.png");
  background-size: 13px 13px;
  background-repeat: no-repeat;
  background-position: center center;
}
.login-head {
  margin-top: 13.4vh;
  text-align: center;
  .login-head-img {
    margin: 0 auto;
    width: 91px;
    height: 91px;
    border-radius: 91px;
    border: solid 1px #f71b69;
    img {
      outline: none;
      border: 0;
      width: 91px;
      height: 91px;
      border-radius: 91px;
    }
  }
  .login-head-subTitle {
    margin-top: 8px;
    font-family: "SourceHanSansSC-Medium";
    font-size: 18px;
    color: #333333;
  }
  .login-head-tip {
    margin-top: 5px;
    font-family: "SourceHanSansSC-Regular";
    font-size: 13px;
    color: #333333;
  }
}
.login-btn {
  margin: 25vh auto 0;
  width: 236px;
  height: 49px;
  line-height: 49px;
  text-align: center;
  background-image: linear-gradient(180deg, #ff5183 0%, #fb2c68 100%);
  border-radius: 4px;
  font-family: "SourceHanSansSC-Medium";
  font-size: 16px;
  color: #ffffff;
}
.login-phone {
  margin: 15px auto;
  height: 30px;
  line-height: 30px;
  font-family: "SourceHanSansSC-Regular";
  font-size: 14px;
  color: #333333;
  text-align: center;
  width: 180px;
}
</style>

<template>
  <div class="login">
    <div class="login-close" @click="closeWB"></div>
    <div class="login-head">
      <div class="login-head-img">
        <img src="../../assets/logo.png" alt>
      </div>
      <div class="login-head-subTitle">好价鼻子</div>
      <div class="login-head-tip">能赚钱 惠省钱</div>
    </div>
    <div class="login-btn" @click="checkLogin">微信登录</div>
    <div class="login-phone" @click="toPage('mobilelogin')">手机号登录</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      weixin: {}
    }
  },
  mounted () {
    this.$store.commit('saveState', {
      name: 'userInfo',
      data: { level: 'normalLevel' }
    })
  },
  methods: {
    checkToken () {
      this.$http('GET', this.api.checkToken, {
        token: this.$store.state.token
      }).then(res => {
        if (res.data.success === true) {
          this.$router.replace('home')
        } else {
          if (this.$store.state.refresh !== '') {
            this.$http('POST', this.api.refreshToken, {
              refreshToken: this.$store.state.refresh
            }).then(res2 => {
              if (res2.data.success === true) {
                this.$store.commit('saveState', {
                  name: 'token',
                  data: res2.data.model.accessToken
                })
                this.$store.commit('saveState', {
                  name: 'refresh',
                  data: res2.data.model.refreshToken
                })
                this.$store.commit('saveState', {
                  name: 'tokenTime',
                  data: new Date().getTime() + res2.data.model.expireIn * 1000
                })
                this.$store.commit('saveState', {
                  name: 'userToken',
                  data: res2.data.model.userToken
                })
                this.$router.replace('home')
              }
            })
          }
        }
      })
    },
    checkLogin () {
      if (window.plus) {
        this.wxLogin()
      } else {
        this.wxLogin('plusready')
        document.addEventListener('plusready', this.wxLogin, false)
      }
    },
    wxLogin () {
      window.plus.oauth.getServices((services) => {
        for (let i in services) {
          if (services[i].id === 'weixin') {
            this.weixin = services[i]
          }
        }
        console.log('----服务信息----')
        if (this.weixin) {
          this.weixin.login((e) => {
            // 成功
            let auth = e
            console.log(JSON.stringify(e.target))
            this.getUserInfo(this.weixin).then(res => {
              auth.target.userInfo = res
              this.loginCheck(auth.target)
            }).catch(() => {
              this.$toast('获取用户信息失败')
            })
          }, (e) => {
            // 失败
            window.plus.nativeUI.toast('登录失败')
          })
        }
      }, function (e) {
        window.plus.nativeUI.toast('获取登录认证失败')
      })
    },
    loginCheck (info) {
      console.log('登录检测')
      console.log(JSON.stringify(info))
      this.$http('POST', this.api.weixinUserLogin, {
        accessToken: info.authResult.access_token,
        clientCode: '889033',
        code: info.authResult.code ? info.authResult.code : 't',
        openId: info.authResult.openid,
        userInfo: info.userInfo ? encodeURIComponent(JSON.stringify(info.userInfo)) : ''
      }).then(res => {
        console.info(JSON.stringify(res))
        if (res.data.success === true) {
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
            data: new Date().getTime() + (res.data.model.accessTokenExpireIn ? res.data.model.accessTokenExpireIn : 1) * 1000
          })
          this.$store.commit('saveState', {
            name: 'userToken',
            data: res.data.model.userToken
          })
          window.plus.webview.create('/bottom.html?islogin=true').show('none')
          // this.toPage('layout', { islogin: true })
        } else {
          this.toPage('bindPhone', { userInfo: info.userInfo, authResult: info.authResult })
        }
      }, err => {
        console.log(err)
      })
    },
    getUserInfo (a) {
      return new Promise((resolve, reject) => {
        a.getUserInfo(function () {
          console.log(JSON.stringify(a.userInfo))
          resolve(a.userInfo)
        }, function (e) {
          reject(e)
        })
      })
    },
    goDetail () {
      window.BC_SDK.goDetail({
        itemId: '521376186545',
        params: {}
      })
    },
    closeWB () {
      if (window.plus) {
        var w = window.plus.webview.currentWebview()
        w.close()
      } else {
        document.addEventListener('plusready', () => {
          var w = window.plus.webview.currentWebview()
          w.close()
        }, false)
      }
    }
  }
}
</script>
