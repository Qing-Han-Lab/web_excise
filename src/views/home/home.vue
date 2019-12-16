<style lang="scss" scoped>
.home {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    rgba(251, 44, 104, 1) 50%,
    rgba(247, 247, 247, 1) 50%
  );
  /deep/ .swiper-slide {
    height: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
  /deep/ .swiper-slide::-webkit-scrollbar {
    display: none;
  }
}
.home-top {
  width: 375px;
  background-color: rgba(251, 44, 104, 1);
  .home-top-search {
    padding: 12px 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .home-top-search-input {
      background: #fff;
      width: 355px;
      height: 29px;
      line-height: 29px;
      border-radius: 29px;
      text-indent: 36px;
      font-size: 12px;
      color: #666666;
      background-image: url("./images/home_search.png");
      background-repeat: no-repeat;
      background-size: 19px 19px;
      background-position: 12px center;
    }
  }
  .home-top-menu {
    position: relative;
    padding-bottom: 6px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .home-top-menu-99 {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 80px;
      height: 31px;
      background-image: url("./images/icon_99.png");
      background-size: 80px 31px;
      background-repeat: no-repeat;
    }
    .home-top-menu-992 {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 86px;
      height: 35px;
      background-image: url("./images/icon_99_2.png");
      background-size: 86px 35px;
      background-repeat: no-repeat;
    }
    .home-top-menu-boxs {
      width: 375px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      .home-top-menu-boxs-item {
        position: relative;
        font-family: "PingFangSC-Regular";
        font-size: 14px;
        height: 25px;
        color: #fff;
        width: 100px;
        text-align: center;
        line-height: 21px;
        .home-top-menu-boxs-item-line {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translate3d(-50%, 0, 0);
          width: 25px;
          height: 2px;
          background: #fff;
        }
        &:first-child {
          margin: 0;
        }
      }
    }
  }
}
.home-container {
  width: 375px;
  height: calc(100vh - 83px);
  -webkit-overflow-scroll: touch;
  background: #f7f7f7;
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
</style>

<template>
  <div class="home">
    <div class="home-top">
      <div class="home-top-search">
        <div
          class="home-top-search-input"
          @click="toPage('mainSearch',{},'fade-in')"
        >大家都在搜“双十二”</div>
      </div>
      <div class="home-top-menu">
        <div class="home-top-menu-boxs">
          <div
            v-for="(item,index) in menus"
            :key="index"
            class="home-top-menu-boxs-item"
            @click="checkMenus(index)"
          >
            {{item.catName}}
            <div class="home-top-menu-boxs-item-line" v-if="item.active"></div>
          </div>
        </div>
      </div>
    </div>
      <swiper :options="swiperOption" ref="swiper" class="home-container">
        <swiper-slide v-for="(item,index) in menus" :key="`A${index}`" :data-index="index">
          <component :is="menus[index].com" ref="childCom" v-if="menus[index].isInit"></component>
        </swiper-slide>
      </swiper>
    <div class="checkAuth" v-if="!$store.state.token">
      <div class="checkAuth-text">完成登录后才能获得佣金奖励哦！</div>
      <div class="checkAuth-btn" @click="toPage('login')">去登录</div>
    </div>
  </div>
</template>

<script>
import All from './components/all'
import Doublenicechoice from './components/doublenicechoice'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data () {
    return {
      menus: [
        {
          catName: '全部',
          active: true,
          isInit: true,
          com: 'All'
        },
        {
          catName: '精选',
          active: false,
          isInit: false,
          com: 'Doublenicechoice'
        }
      ],
      swiperOption: {
        speed: 300,
        resistanceRatio: 0,
        passiveListeners: false
      },
      isSetRefresh: false
    }
  },
  created () {
    // this.$searchProduct.show()
    if (window.plus) {
      this.checkClipbord()
    } else {
      document.addEventListener('plusready', this.checkClipbord, false)
    }
    if (this.$store.state.token) {
      this.$store.dispatch('getUserAccountInfo')
    }
    this.$store.dispatch('getPDDredpacketUrl')
    window.getPDDredpacketUrl = () => {
      this.$store.dispatch('getPDDredpacketUrl')
    }
  },
  mounted () {
    this.$nextTick(() => {
      const _self = this
      this.$refs.swiper.swiper.slides.on('scroll', function (e) {
        let scrollTop = e.target.scrollTop
        // 执行加载更多判断
        if (_self.$refs.childCom[this.dataset.index].$el.clientHeight - scrollTop - _self.$refs.swiper.$el.clientHeight < 100) {
          _self.$refs.childCom[this.dataset.index].loadMore()
        }
        if (scrollTop < 10) {
          if (window.plus) {
            if (_self.isSetRefresh === true) {
              return
            }
            const color = window.plus.os.name.toLocaleLowerCase() === 'ios' ? '#ffffff' : '$fb2c68'
            const style = window.plus.os.name.toLocaleLowerCase() === 'ios' ? 'default' : 'circle'
            const refresh = _self.$refs.childCom[this.dataset.index].loadTop
            window.plus.webview.currentWebview().setPullToRefresh({
              support: true,
              color: color,
              height: '50px',
              range: '50px',
              style: style
            }, refresh)
            _self.isSetRefresh = true
          }
        } else {
          if (window.plus) {
            if (_self.isSetRefresh === false) {
              return
            }
            window.plus.webview.currentWebview().setPullToRefresh({
              support: false
            })
            _self.isSetRefresh = false
          }
        }
      }, true)
      this.setRefresh(0)
      this.$refs.swiper.swiper.on('slideChangeTransitionStart', () => {
        this.checkMenus(this.$refs.swiper.swiper.activeIndex)
      })
      let islogin = this.parseJSON(this.$route.query.islogin)
      if (islogin !== true) {
        this.checkUpdate()
      }
    })
  },
  methods: {
    setRefresh (index) {
      if (window.plus) {
        const color = window.plus.os.name.toLocaleLowerCase() === 'ios' ? '#ffffff' : '$fb2c68'
        const style = window.plus.os.name.toLocaleLowerCase() === 'ios' ? 'default' : 'circle'
        const refresh = this.$refs.childCom[index].loadTop
        window.plus.webview.currentWebview().setPullToRefresh({
          support: true,
          color: color,
          height: '50px',
          range: '50px',
          style: style
        }, refresh)
        this.isSetRefresh = true
      } else {
        document.addEventListener('plusready', () => {
          const color = window.plus.os.name.toLocaleLowerCase() === 'ios' ? '#ffffff' : '$fb2c68'
          const style = window.plus.os.name.toLocaleLowerCase() === 'ios' ? 'default' : 'circle'
          const refresh = this.$refs.childCom[index].loadTop
          window.plus.webview.currentWebview().setPullToRefresh({
            support: true,
            color: color,
            height: '50px',
            range: '50px',
            style: style
          }, refresh)
          this.isSetRefresh = true
        }, false)
      }
    },
    checkMenus (index) {
      // 菜单切换
      this.menus = this.menus.map((item) => {
        item.active = false
        return item
      })
      this.menus[index].active = true
      if (this.menus[index].isInit === false) {
        this.menus[index].isInit = true
      }
      this.$refs.swiper.swiper.slideTo(index, 300, false)
      this.$nextTick(() => {
        if (this.$refs.childCom[index].scrollTop < 10) {
          this.setRefresh(index)
        }
      })
    },
    checkClipbord () {
      // 设置状态栏颜色
      let clipbordtext = this.getClipbordText()
      if (clipbordtext) {
        this.$http('GET', this.api.popLayer, {
          content: clipbordtext,
          extParams: {}
        }).then(res => {
          if (res.data.success) {
            let data = res.data.model
            if (data.isPop) {
              if (data.popType === 'SCH') {
                this.$search.show(data.content, false)
              } else {
                this.$search.show(data.content, true)
              }
              this.setClipbordText('')
            }
          }
        })
      }
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
                  if (isAndroid) {
                    if (res.data.model.force === true) {
                      location.href = 'https://a.app.qq.com/o/simple.jsp?pkgname=biz.prices&fromcase=40003'
                    } else {
                      this.createWB('https://a.app.qq.com/o/simple.jsp?pkgname=biz.prices&fromcase=40003', 'download', '下载')
                    }
                  } else {
                    window.plus.webview.create('https://a.app.qq.com/o/simple.jsp?pkgname=biz.prices&fromcase=40003')
                  }
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
                    if (isAndroid) {
                      if (res.data.model.force === true) {
                        location.href = 'https://a.app.qq.com/o/simple.jsp?pkgname=biz.prices&fromcase=40003'
                      } else {
                        this.createWB('https://a.app.qq.com/o/simple.jsp?pkgname=biz.prices&fromcase=40003', 'download', '下载')
                      }
                    } else {
                      window.plus.webview.create('https://a.app.qq.com/o/simple.jsp?pkgname=biz.prices&fromcase=40003')
                    }
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
    }
  },
  components: {
    All,
    // Nicechoice
    Doublenicechoice,
    swiper,
    swiperSlide
  }
}
</script>
