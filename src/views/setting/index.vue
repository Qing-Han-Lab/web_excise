<style lang="scss" scoped>
  .setting {
    background: #f7f7f7;
    min-height: 100vh;
    overflow: auto;
    .setting-content {
      background-color: #fff;
      &.second {
        margin-top: 12px;
      }
      .setting-content-item {
        margin: 0 22px 0 16px;
        height: 50px;
        border-bottom: solid 1px rgba(51, 51, 51, 0.15);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        &:last-child {
          border: 0;
        }
        .setting-content-item-name {
          font-family: "SourceHanSansSC-Regular";
          font-size: 16px;
          line-height: 16px;
          letter-spacing: 1px;
          color: #333333;
          text-indent: 7px;
        }
        .setting-content-item-right {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          font-family: "SourceHanSansSC-Regular";
          font-size: 15px;
          line-height: 16px;
          letter-spacing: 1px;
          color: rgba(51, 51, 51, 0.6);
          .setting-content-item-right-img {
            width: 40px;
            height: 40px;
            border-radius: 40px;
            overflow: hidden;
            img {
              width: 40px;
              height: 40px;
            }
          }
          .setting-content-item-right-arrow {
            width: 23px;
            height: 50px;
            background-image: url("./images/arrow_right.png");
            background-repeat: no-repeat;
            background-size: 8px 13px;
            background-position: 12px center;
          }
        }
        .setting-content-item-switch {
          position: relative;
          margin-right: 4px;
          width: 32px;
          height: 17px;
          border-radius: 17px;
          background-color: #dcdfe6;
          z-index: 10;
          transition-duration: 500ms;
          .setting-content-item-switch-circle {
            position: absolute;
            top: 1px;
            left: 1px;
            width: 15px;
            height: 15px;
            border-radius: 15px;
            background-color: #fff;
            transition-duration: 500ms;
          }
          &.open {
            background-color: #fb2c68;
            transition-duration: 500ms;
          }
          &.open .setting-content-item-switch-circle {
            left: 100%;
            margin-left: -16px;
            transition-duration: 500ms;
          }
        }
      }
    }
    .setting-logout {
      margin: 15px auto 0;
      width: 251px;
      height: 44px;
      line-height: 44px;
      text-align: center;
      background-image: linear-gradient(180deg, #ff4e82 0%, #fc356f 100%);
      border-radius: 4px;
      font-family: "SourceHanSansSC-Medium";
      font-size: 17px;
      color: #ffffff;
    }
  }
  .setting::-webkit-scrollbar {
    display: none;
  }
</style>

<template>
  <div class="setting">
    <div class="setting-content">
      <div class="setting-content-item" @click="toPage('resetUserInfo')">
        <div class="setting-content-item-name">编辑个人资料</div>
        <div class="setting-content-item-right">
          <div class="setting-content-item-right-arrow"></div>
        </div>
      </div>
      <div class="setting-content-item">
        <div class="setting-content-item-name">佣金通知</div>
        <div
          class="setting-content-item-switch"
          :class="{'open':moneyNotice}"
          @click="checkStatus('moneyNotice')"
        >
          <div class="setting-content-item-switch-circle"></div>
        </div>
      </div>
      <div class="setting-content-item">
        <div class="setting-content-item-name">粉丝通知</div>
        <div
          class="setting-content-item-switch"
          :class="{'open':fansNotice}"
          @click="checkStatus('fansNotice')"
        >
          <div class="setting-content-item-switch-circle"></div>
        </div>
      </div>
      <div class="setting-content-item">
        <div class="setting-content-item-name">活动通知</div>
        <div
          class="setting-content-item-switch"
          :class="{'open':activityNotice}"
          @click="checkStatus('activityNotice')"
        >
          <div class="setting-content-item-switch-circle"></div>
        </div>
      </div>
    </div>
    <div class="setting-content second">
      <div class="setting-content-item">
        <div class="setting-content-item-name">天猫/淘宝快捷下单授权</div>
        <div class="setting-content-item-switch" :class="{'open':authorize}" @click="checkAuth">
          <div class="setting-content-item-switch-circle"></div>
        </div>
      </div>
      <div class="setting-content-item" @click="clearCache">
        <div class="setting-content-item-name">清除缓存</div>
        <div class="setting-content-item-right">
          {{cacheSize}}K
          <div class="setting-content-item-right-arrow"></div>
        </div>
      </div>
      <div class="setting-content-item" @click="toPage('feedback')">
        <div class="setting-content-item-name">意见反馈</div>
        <div class="setting-content-item-right">
          <div class="setting-content-item-right-arrow"></div>
        </div>
      </div>
      <div class="setting-content-item" @click="toPage('introduce')">
        <div class="setting-content-item-name">关于好价鼻子</div>
        <div class="setting-content-item-right">
          <div class="setting-content-item-right-arrow"></div>
        </div>
      </div>
      <div class="setting-content-item">
        <div class="setting-content-item-name">版本号</div>
        <div class="setting-content-item-right">{{appversion}}</div>
      </div>
    </div>
    <div class="setting-logout" @click="loginOut">退出登录</div>
    <Model title="确认清除缓存?" :confirmFun="cacheConfirm" ref="model"></Model>
  </div>
</template>
<script>
export default {
  data () {
    return {
      moneyNotice: false,
      fansNotice: false,
      activityNotice: false,
      cacheSize: Math.floor(Math.random() * 1000),
      authorize: false,
      appversion: '1.0.0',
      isLogin: false
    }
  },
  created () {
    this.getUserSetting()
    if (window.plus) {
      this.appversion = window.plus.runtime.version
    } else {
      document.addEventListener('plusready', () => {
        this.appversion = window.plus.runtime.version
      }, false)
    }
  },
  methods: {
    checkAuth () {
      if (this.authorize === true) {
        this.$toast('您已授权过了')
        return
      }
      this.toAuth()
    },
    checkStatus (name) {
      let type = ''
      switch (name) {
        case 'moneyNotice':
          type = 'YJ'
          break
        case 'fansNotice':
          type = 'FS'
          break
        case 'activityNotice':
          type = 'HD'
          break
        case 'taobaoAuth':
          type = 'TM'
          break
        default:
      }
      this.$http('GET', this.api.updateUserSetting, {
        status: !this[name],
        type: type
      }).then(res => {
        if (res.data.success === true) {
          this[name] = !this[name]
        } else {
          this.$toast('打开通知失败，请稍后重试')
        }
      })
    },
    clearCache () {
      this.$refs.model.show()
    },
    cacheConfirm () {
      // 确认清除缓存
      let localCache = '_downloads/'
      window.plus.io.resolveLocalFileSystemURL(localCache, (entry) => {
        entry.removeRecursively(() => {
          this.$toast('清除成功')
        }, (e) => {
          this.$toast(e)
        })
      })
      this.cacheSize = 0
      this.$refs.model.cancel()
    },
    loginOut () {
      // 退出登录
      this.$store.dispatch('initAll')
      if (window.plus) {
        window.plus.webview.create('/bottom.html?islogin=true').show('none')
      }
      // this.toPage('layout', { islogin: true })
    },
    getUserSetting () {
      this.$http('GET', this.api.getUserSetting).then(res => {
        if (res.data.success === true) {
          let data = res.data.model
          this.moneyNotice = data.commissionNotify
          this.fansNotice = data.fansNotify
          this.activityNotice = data.activityNotify
          this.authorize = data.taobaoAuth
        }
      })
    },
    callback (res) {
      console.info('======callback, res=' + JSON.stringify(res))
      this.isGoing = false
      if (typeof res === 'string') {
        res = JSON.parse(res)
      }
      if (!res.data.success) {
        let url = this.chainUrl
        if (res.data.msgCode && res.data.msgCode === 'USER_NOT_AUTH') {
          let redirect = 'https://m-zy-api.yisutech.com' + '/dg/#/register?state=' + this.hexString(this.$store.state.userToken)
          url = 'https://oauth.taobao.com/authorize?response_type=token&client_id=27598010' +
            '&view=wap&redirect_uri=' + encodeURIComponent(redirect)
        }
        window.third = window.plus.webview.create(url)
        window.third.show('pop-in')
      }
    }
  }
}
</script>
