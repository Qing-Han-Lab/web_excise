<template>
  <div class="bottom">
    <div class="bottom-top" ref="top"></div>
    <div class="bottom-bottom" ref="bottom">
    <div
      :class="`${item.class}${item.active?' on':''}`"
      v-for="(item,index) in menus"
      :key="index"
      @click="checkMenu(index)"
    >
      <img :src="item.active?item.activeIcon:item.icon" alt />
      <div class="bottom-text">{{item.name}}</div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menus: [
        {
          name: '首页',
          active: true,
          class: 'home',
          icon: require('./images/tab_index.png'),
          activeIcon: require('./images/tab_index_on.png'),
          url: '/index.html#/home',
          sub: null
        },
        {
          name: '爆款',
          active: false,
          class: 'hot',
          icon: require('./images/tab_hot.png'),
          activeIcon: require('./images/tab_hot_on.png'),
          url: '/index.html#/hot',
          sub: null
        },
        {
          name: '权益',
          active: false,
          class: 'right',
          icon: require('./images/tab_right.png'),
          activeIcon: require('./images/tab_right_on.png'),
          url: '/index.html#/right',
          sub: null
        },
        {
          name: '我的',
          active: false,
          class: 'mine',
          icon: require('./images/tab_mine.png'),
          activeIcon: require('./images/tab_mine_on.png'),
          url: '/index.html#/mine',
          sub: null
        }
      ],
      currentWB: {}
    }
  },
  mounted () {
    if (window.plus) {
      this.createWebView()
    } else {
      document.addEventListener('plusready', this.createWebView, false)
    }
  },
  methods: {
    createWebView () {
      let bottom = this.$refs.bottom.clientHeight
      // 关闭其余webview
      let all = window.plus.webview.all()
      this.currentWB = window.plus.webview.currentWebview()
      let safeBottom = this.currentWB.getSafeAreaInsets().deviceBottom
      if (all.length > 1) {
        for (let i = 0; i < all.length; i++) {
          if (all[i] !== this.currentWB) {
            all[i].close('none')
          }
        }
      }
      // 创建home页面webview
      this.menus[0].sub = window.plus.webview.create(this.menus[0].url, this.menus[0].class, {
        top: '0',
        bottom: `${bottom + safeBottom}px`,
        backgroundColorTop: '#fb2c68',
        bounce: 'vertical'
      })
      this.menus[0].sub.setPullToRefresh({
        support: true
      })
      this.currentWB.append(this.menus[0].sub)
      window.plus.navigator.setStatusBarBackground('#fb2c68')
      window.plus.navigator.setStatusBarStyle('light')
      let islogin = this.parseJSON(this.$route.query.islogin)
      if (islogin !== true) {
        this.checkUpdate()
      }
      document.addEventListener('resume', this.awakenApp, false)
    },
    checkMenu (index) {
      let bottom = this.$refs.bottom.clientHeight
      let safeBottom = this.currentWB.getSafeAreaInsets().deviceBottom
      // 当前webview切换到当前webview不进行逻辑变更
      if (this.menus[index].sub === this.activeMenu[0].sub) {
        return
      }
      // 检测webview是否已创建，动态按需创建webview
      if (this.menus[index].sub) {
        window.plus.webview.hide(this.activeMenu[0].sub)
        window.plus.webview.show(this.menus[index].sub)
        if (this.menus[index].class === 'mine' || this.menus[index].class === 'right') {
          this.menus[index].sub.evalJS('update()')
        }
      } else {
        window.plus.webview.hide(this.activeMenu[0].sub)
        this.menus[index].sub = window.plus.webview.create(this.menus[index].url, this.menus[index].class, {
          top: '0px',
          bottom: `${bottom + safeBottom}px`,
          backgroundColorTop: '#fb2c68',
          bounce: 'vertical'
        })
        this.menus[index].sub.setPullToRefresh({
          support: true
        })
        this.currentWB.append(this.menus[index].sub)
      }
      this.menus = this.menus.map(item => {
        item.active = false
        return item
      })
      this.menus[index].active = true
    },
    checkUpdate () {
      let u = navigator.userAgent
      let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
      // 检测是否需要升级
      this.$http('GET', this.api.appVersion, {
        platform: isAndroid ? 'android' : 'ios'
      }).then(res => {
        if (res.data.success === true) {
          let appVersion = res.data.model.version
          if (window.plus) {
            if (this.checkVersion(window.plus.runtime.version, appVersion)) {
              window.plus.nativeUI.confirm('发现新版本，是否升级', e => {
                if (e.index === 0) {
                  // if (isAndroid) {
                  if (res.data.model.force === true) {
                    location.href = 'https://a.app.qq.com/o/simple.jsp?pkgname=biz.prices&fromcase=40003'
                  } else {
                    this.createWB('https://a.app.qq.com/o/simple.jsp?pkgname=biz.prices&fromcase=40003', 'download', '下载')
                  }
                  // } else {
                  //   window.plus.runtime.openURL(res.data.model.downloadUrl)
                  // }
                } else {
                  if (res.data.model.force === true) {
                    window.plus.runtime.quiet()
                  }
                }
              })
            }
          } else {
            document.addEventListener('plusready', () => {
              if (this.checkVersion(window.plus.runtime.version, appVersion)) {
                window.plus.nativeUI.confirm('发现新版本，是否升级', e => {
                  if (e.index === 0) {
                    // if (isAndroid) {
                    if (res.data.model.force === true) {
                      location.href = 'https://a.app.qq.com/o/simple.jsp?pkgname=biz.prices&fromcase=40003'
                    } else {
                      this.createWB('https://a.app.qq.com/o/simple.jsp?pkgname=biz.prices&fromcase=40003', 'download', '下载')
                    }
                    // } else {
                    //   window.plus.runtime.openURL(res.data.model.downloadUrl)
                    // }
                  } else {
                    if (res.data.model.force === true) {
                      window.plus.runtime.quiet()
                    }
                  }
                })
              }
            })
          }
        }
      })
    },
    checkVersion (oldVersion, newVersion) {
      // 判断版本号，是否更新
      let arr1 = oldVersion.split('.')
      let arr2 = newVersion.split('.')
      let result = false
      for (let i = 0; i < arr1.length; i++) {
        if (Number(arr1[i]) < Number(arr2[i])) {
          if (i > 1) {
            if (Number(arr1[i - 1]) > Number(arr2[i - 1])) {
              result = false
            } else {
              result = true
              break
            }
          } else {
            result = true
            break
          }
        }
      }
      return result
    },
    awakenApp (flag) {
      // 唤起App
      let all = window.plus.webview.all()
      if (all.length - this.createdMenu.length === 1) {
        this.activeMenu[0].sub.evalJS('showSearch()')
      } else {
        all[all.length - 1].evalJS('showSearch()')
      }
    }
  },
  computed: {
    activeMenu () {
      return this.menus.filter((item) => {
        return item.active
      })
    },
    createdMenu () {
      return this.menus.filter((item) => {
        return item.sub !== null
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.bottom {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.bottom-top {
  flex: 1;
}
.bottom-bottom {
  height: 50px;
  width: 375px;
  box-sizing: border-box;
  border-top: solid 1px rgba(231, 231, 231, 1);
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  .bottom-text {
    font-family: "PingFangSC-Regular";
    font-size: 9px;
    line-height: 12px;
    color: rgba(153, 153, 153, 1);
  }
  div {
    flex: 1;
  }
  .home {
    img {
      margin-top: 9px;
      width: 21px;
      height: 21px;
    }
    &.on {
      .bottom-text {
        color: rgba(251, 44, 104, 1);
      }
      img {
        animation: checkMenu 300ms ease-in-out;
      }
    }
  }
  .hot {
    img {
      margin-top: 9px;
      width: 21px;
      height: 20px;
    }
    &.on {
      .bottom-text {
        color: rgba(251, 44, 104, 1);
      }
      img {
        animation: checkMenu 300ms ease-in-out;
      }
    }
  }
  .right {
    img {
      margin-top: 9px;
      width: 21px;
      height: 21px;
    }
    &.on {
      .bottom-text {
        color: rgba(251, 44, 104, 1);
      }
      img {
        animation: checkMenu 300ms ease-in-out;
      }
    }
  }
  .mine {
    img {
      margin-top: 9px;
      width: 28px;
      height: 19px;
    }
    &.on {
      .bottom-text {
        color: rgba(251, 44, 104, 1);
      }
      img {
        animation: checkMenu 300ms ease-in-out;
      }
    }
  }
}
@keyframes checkMenu {
  0% {
    transform: scale(0.8) rotate(0);
  }
  33% {
    transform: scale(1.2) rotate(-10deg);
  }
  50% {
    transform: scale(1.4) rotate(0);
  }
  66% {
    transform: scale(1.2) rotate(10deg);
  }
  100% {
    transform: scale(1) rotate(0);
  }
}
</style>
