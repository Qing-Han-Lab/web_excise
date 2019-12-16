<style lang="scss" scoped>
.hot {
  width: 100%;
  height: 100%;
  display: flex;
  .content {
    height: calc(100vh - 55px);
    background: #f7f7f7;
    position: relative;
    z-index: 10;
    /deep/ .swiper-slide {
      overflow: hidden;
    }
    /deep/ .swiper-slide::-webkit-scrollbar {
      display: none;
    }
  }
}
.hot-box {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;
  background: linear-gradient(
    180deg,
    rgba(251, 44, 104, 1) 50%,
    rgba(247, 247, 247, 1) 50%
  );
}
.hot-box::-webkit-scrollbar {
  display: none;
}
.hot-top {
  height: 110px;
  width: 375px;
  background-color: rgba(251, 44, 104, 1);
  .hot-top-search {
    padding: 12px 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .hot-top-search-input {
      background: #fff;
      flex: 1;
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
  .hot-top-entry {
    margin: 10px auto -45px;
    width: 355px;
    height: 90px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    box-shadow: 0px 2px 10px -5px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    .hot-top-entry-item {
      width: 50px;
      .hot-top-entry-item-icon {
        width: 50px;
        height: 50px;
        img {
          width: 50px;
          height: 50px;
        }
      }
      .hot-top-entry-item-text {
        font-size: 12px;
        color: rgba(51, 51, 51, 1);
        line-height: 18px;
        text-align: center;
      }
    }
  }
}

.hot-top-menu {
  position: relative;
  padding: 12px 0 6px 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  background: #fff;
  transition-duration: 500ms;
  .hot-top-menu-boxs {
    width: 325px;
    /deep/ .swiper-slide {
      width: auto;
      margin-left: 15px;
      &:first-child {
        margin-left: 0;
      }
    }
    .hot-top-menu-boxs-item {
      font-size: 14px;
      color: #666660;
      display: block;
      float: left;
      line-height: 21px;
      height: 37px;
      line-height: 35px;
      position: relative;
      &:first-child {
        margin: 0;
      }
      &.active {
        color: #333333;
        font-weight: bold;
        .hot-top-menu-boxs-item-active {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translate3d(-50%, 0, 0);
          width: 18px;
          height: 3px;
          border-radius: 3px;
          overflow: hidden;
          background: rgba(251, 44, 104, 1);
        }
      }
    }
    &::-webkit-scrollbar {
      height: 0;
    }
    .hot-top-menu-boxs-wrap {
      width: 500px;
      height: 21px;
    }
  }
  .hot-top-menu-arrow {
    flex: 1;
    width: 20px;
    height: 37px;
    background-image: url("./images/arrow_down.png");
    background-repeat: no-repeat;
    background-size: 9px 5px;
    background-position: center center;
    transition-duration: 500ms;
    &.up {
      transform: rotate(-180deg);
    }
  }
  .hot-top-menu-all {
    position: absolute;
    z-index: 100;
    top: 55px;
    left: 0;
    background: #fff;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0 13px;
    height: auto;
    transition-duration: 500ms;
    overflow: hidden;
    &.hide {
      height: 0px;
    }
    .hot-top-menu-all-item {
      margin-bottom: 12px;
      width: 70px;
      height: 33px;
      line-height: 33px;
      background-color: #f7f7f7;
      font-size: 14px;
      color: #8b8b8b;
      text-align: center;
      &.active {
        color: #fb2c68;
      }
    }
  }
}
.checkAuth {
  position: fixed;
  bottom: 5px;
  z-index: 11;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
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
.hot-entry {
  background: #fff;
  padding-top: 52px;
  padding-bottom: 5px;
  .hot-entry-row {
    margin: 0 auto 5px;
    width: 355px;
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    &:last-child {
      margin: 0 auto;
    }
    .hot-entry-row-item {
      width: 175px;
      height: 80px;
      border-radius: 5px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      &.one {
        background: #fef5f3;
      }
      &.two {
        background: #f9f3fd;
      }
      &.three {
        background: #fffbe8;
      }
      &.four {
        background: #f1f8fe;
      }
      .hot-entry-row-item-left {
        margin-left: 9px;
        .hot-entry-row-item-left-top {
          font-weight: bold;
          text-indent: 17px;
          font-size: 16px;
          color: rgba(51, 51, 51, 1);
          line-height: 24px;
          background-repeat: no-repeat;
          background-position: left center;
          background-size: 15px 15px;
          &.knock {
            background-image: url("./images/hot_knock_icon.png");
          }
          &.hotnow {
            background-image: url("./images/hot_hot_icon.png");
          }
          &.nine {
            background-image: url("./images/hot_99_icon.png");
          }
          &.large {
            background-image: url("./images/hot_large_icon.png");
          }
        }
        .hot-entry-row-item-left-bottom {
          font-size: 10px;
          color: rgba(153, 153, 153, 1);
          line-height: 15px;
        }
      }
      .hot-entry-row-item-right {
        width: 60px;
        height: 60px;
        margin-right: 8px;
        img {
          width: 60px;
          height: 60px;
          border-radius: 60px;
          overflow: hidden;
        }
      }
    }
  }
}
.hot-middle {
  background: #f7f7f7;
  padding-top: 10px;
}
</style>

<template>
  <div class="hot">
    <!-- 顶部导航栏菜单等 -->
    <div class="hot-box" ref="hot">
      <div class="hot-box2" ref="hotbox">
        <div class="hot-top">
          <div class="hot-top-search">
            <div class="hot-top-search-input" @click="openSearch()">复制宝贝标题，搜全网优惠券再拿返利</div>
          </div>
          <div class="hot-top-entry">
            <div class="hot-top-entry-item" @click="toPage('taobaoentrance')">
              <div class="hot-top-entry-item-icon">
                <img src="./images/hot_tb.png" alt />
              </div>
              <div class="hot-top-entry-item-text">淘宝</div>
            </div>
            <div class="hot-top-entry-item" @click="toPage('plathome', {platform: 'jingdong'})">
              <div class="hot-top-entry-item-icon">
                <img src="./images/hot_jd.png" alt />
              </div>
              <div class="hot-top-entry-item-text">京东</div>
            </div>
            <div class="hot-top-entry-item" @click="toPage('plathome', {platform: 'pingduoduo'})">
              <div class="hot-top-entry-item-icon">
                <img src="./images/hot_pdd.png" alt />
              </div>
              <div class="hot-top-entry-item-text">拼多多</div>
            </div>
            <div class="hot-top-entry-item" @click="toMiniProgram">
              <div class="hot-top-entry-item-icon">
                <img src="./images/hot_hjbz.png" alt />
              </div>
              <div class="hot-top-entry-item-text">好价鼻子</div>
            </div>
          </div>
        </div>
        <div class="hot-entry">
          <div class="hot-entry-row">
            <div class="hot-entry-row-item one" @click="toPage('flashsale')">
              <div class="hot-entry-row-item-left">
                <div class="hot-entry-row-item-left-top knock">限时抢购</div>
                <div class="hot-entry-row-item-left-bottom">限时限量抢特惠</div>
              </div>
              <div class="hot-entry-row-item-right">
                <img v-lazy="XSQG" alt />
              </div>
            </div>
            <div class="hot-entry-row-item two" @click="toPage('todayhot')">
              <div class="hot-entry-row-item-left">
                <div class="hot-entry-row-item-left-top hotnow">今日爆款</div>
                <div class="hot-entry-row-item-left-bottom">热销商品爆款</div>
              </div>
              <div class="hot-entry-row-item-right">
                <img v-lazy="JRBK" alt />
              </div>
            </div>
          </div>
          <div class="hot-entry-row">
            <div class="hot-entry-row-item three" @click="toPage('ninemoney')">
              <div class="hot-entry-row-item-left">
                <div class="hot-entry-row-item-left-top nine">9.9包邮</div>
                <div class="hot-entry-row-item-left-bottom">全场封顶9.9包邮</div>
              </div>
              <div class="hot-entry-row-item-right">
                <img v-lazy="BY99" alt />
              </div>
            </div>
            <div class="hot-entry-row-item four" @click="toPage('largecoupon')">
              <div class="hot-entry-row-item-left">
                <div class="hot-entry-row-item-left-top large">大额券</div>
                <div class="hot-entry-row-item-left-bottom">领券最高省90%</div>
              </div>
              <div class="hot-entry-row-item-right">
                <img v-lazy="DEQ" alt />
              </div>
            </div>
          </div>
        </div>
        <div class="hot-middle">
          <div class="hot-top-menu hot-top-menunow" ref="hotMenu">
            <div class="hot-top-menu-boxs">
              <swiper :options="swiperOption" ref="menuSwiper">
                <swiper-slide v-for="(item,index) in menus" :key="index">
                  <div
                    class="hot-top-menu-boxs-item"
                    :class="{'active': item.active}"
                    @click="checkMenus(index,item)"
                  >
                    {{item.catName}}
                    <div class="hot-top-menu-boxs-item-active"></div>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
            <div class="hot-top-menu-arrow" :class="{'up':!hideMenu}" @click="showSlide"></div>
            <div class="hot-top-menu-all" :class="{'hide':hideMenu}">
              <div
                class="hot-top-menu-all-item"
                :class="{'active':item.active}"
                @click="checkMenus(index,item)"
                v-for="(item,index) in menus"
                :key="`menu-all-item${index}`"
              >{{item.catName}}</div>
            </div>
          </div>
        </div>
        <!-- 下部分 -->
        <swiper :options="swiperOption2" ref="contentSwiper" class="content">
          <swiper-slide v-for="(item,index) in menus" :key="`menu${index}`" :data-index="index">
            <component :is="menus[index].com" v-if="menus[index].isInit" :ref="`child${index}`"></component>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="checkAuth" v-if="!$store.state.token">
      <div class="checkAuth-text">完成登录后才能获得佣金奖励哦！</div>
      <div class="checkAuth-btn" @click="toPage('login')">去登录</div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import One from './components/one' // 精选模板
import Two from './components/two' // 猜你喜欢模板
import Three from './components/three' // 其余通用模板
export default {
  data () {
    return {
      menus: [
        {
          catName: '精选',
          active: false,
          isInit: true,
          com: 'One',
          top: 0
        },
        {
          catName: '猜你喜欢',
          active: false,
          isInit: false,
          com: 'Two',
          top: 0
        }
      ],
      threeMenus: [],
      swiperOption: {
        speed: 300,
        slidesPerView: 'auto',
        freeMode: true,
        freeModeSticky: true,
        freeModeMomentumRatio: 1.5
      },
      swiperOption2: {
        speed: 300,
        resistanceRatio: 0
      },
      islogin: true,
      hasMsg: false,
      nextIndex: 3,
      hideMenu: true,
      isSetRefresh: false,
      XSQG: '',
      JRBK: '',
      BY99: '',
      DEQ: ''
    }
  },
  created () {
    this.queryItemCats()
    this.queryBkImage()
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.hot.addEventListener('scroll', this.scrollListen, false)
      this.$refs.contentSwiper.swiper.on('slideChangeTransitionStart', () => {
        this.checkMenus(this.$refs.contentSwiper.swiper.activeIndex, this.menus[this.$refs.contentSwiper.swiper.activeIndex], true)
        if (this.$refs.hotbox.clientHeight - this.$refs.hot.scrollTop - window.screen.height < 10) {
          this.$refs.contentSwiper.swiper.slides[this.$refs.contentSwiper.swiper.activeIndex].style.overflow = 'auto'
        } else {
          this.$refs.contentSwiper.swiper.slides[this.$refs.contentSwiper.swiper.activeIndex].style.overflow = 'hidden'
        }
      })
    })
    if (window.plus) {
      this.setRefresh()
    } else {
      document.addEventListener('plusready', this.setRefresh, false)
    }
  },
  methods: {
    queryBkImage () {
      this.$http('GET', this.api.queryBkImage).then(res => {
        if (res.data.success) {
          let urls = res.data.model
          for (let i = 0; i < urls.length; i++) {
            switch (urls[i].type) {
              case 'XSQG':
                this.XSQG = this.checkUrl(urls[i].picUrl)
                break
              case 'JRBK':
                this.JRBK = this.checkUrl(urls[i].picUrl)
                break
              case '99BY':
                this.BY99 = this.checkUrl(urls[i].picUrl)
                break
              case 'DEQ':
                this.DEQ = this.checkUrl(urls[i].picUrl)
                break
            }
          }
        }
      })
    },
    setRefresh () {
      // 设置刷新
      const color = window.plus.os.name.toLocaleLowerCase() === 'ios' ? '#ffffff' : '$fb2c68'
      const style = window.plus.os.name.toLocaleLowerCase() === 'ios' ? 'default' : 'circle'
      window.plus.webview.currentWebview().setPullToRefresh({
        support: true,
        color: color,
        height: '50px',
        range: '50px',
        style: style
      }, () => {
        window.location.reload()
        window.plus.webview.currentWebview().endPullToRefresh()
      })
      this.isSetRefresh = true
      this.$store.dispatch('updateSerivces') // 获取分享服务 用于跳转小程序
    },
    scrollListen (e) {
      if (this.$refs.hotbox.clientHeight - e.target.scrollTop - window.screen.height < 10) {
        this.$refs.contentSwiper.swiper.slides[this.$refs.contentSwiper.swiper.activeIndex].style.overflow = 'auto'
      } else {
        this.$refs.contentSwiper.swiper.slides[this.$refs.contentSwiper.swiper.activeIndex].style.overflow = 'hidden'
      }
      if (e.target.scrollTop > 5) {
        if (window.plus) {
          if (this.isSetRefresh === true) {
            window.plus.webview.currentWebview().setPullToRefresh({
              support: false
            })
          }
        }
      } else {
        if (window.plus) {
          const color = window.plus.os.name.toLocaleLowerCase() === 'ios' ? '#ffffff' : '$fb2c68'
          const style = window.plus.os.name.toLocaleLowerCase() === 'ios' ? 'default' : 'circle'
          window.plus.webview.currentWebview().setPullToRefresh({
            support: true,
            color: color,
            height: '50px',
            range: '50px',
            style: style
          }, () => {
            window.location.reload()
            window.plus.webview.currentWebview().endPullToRefresh()
          })
          this.isSetRefresh = true
        }
      }
    },
    checkMenus (index, item, isThree) {
      this.menus = this.menus.map(item => {
        item.active = false
        return item
      })
      this.menus[index].active = true
      if (this.menus[index].isInit === false) {
        this.menus[index].isInit = true
      }
      this.hideMenu = true
      if (index > 1) {
        this.$store.commit('saveState', {
          name: 'catId',
          data: item.catId
        })
        this.$store.commit('saveState', {
          name: 'ddxId',
          data: item.ddxId
        })
      }
      this.$nextTick(() => {
        this.$refs.menuSwiper.swiper.slideTo(index, 300, false)
        if (!isThree) {
          this.$refs.contentSwiper.swiper.slideTo(index, 300, false)
        }
      })
      if (this.$refs.hotbox.clientHeight - this.$refs.hot.scrollTop - window.screen.height > 10) {
        for (let i = 0; i < this.$refs.contentSwiper.swiper.slides.length; i++) {
          this.$refs.contentSwiper.swiper.slides[i].scrollTop = 0
        }
      } else {
        this.$refs.contentSwiper.swiper.slides[index].style.overflow = 'auto'
      }
    },
    queryItemCats () {
      this.$http('GET', this.api.queryItemCats).then(res => {
        if (res.data.success === true) {
          let list = res.data.model
          for (let i = 0; i < list.length; i++) {
            list[i].active = false
            list[i].isInit = false
            list[i].com = 'Three'
            list[i].top = 0
          }
          this.threeMenus = list
          this.menus = [
            {
              catName: '精选',
              active: true,
              isInit: true,
              com: 'One',
              top: 0
            },
            {
              catName: '猜你喜欢',
              active: false,
              isInit: false,
              com: 'Two',
              top: 0
            }
          ].concat(list)
          this.$nextTick(() => {
            this.moveHandle()
          })
        }
      })
    },
    openSearch () {
      if (window.plus) {
        window.plus.webview.create('/index.html#search').show('fade-in')
      } else {
        this.toPage('search')
      }
    },
    showSlide () {
      // 展示所有slide
      this.hideMenu = !this.hideMenu
    },
    toMiniProgram () {
      // 跳转微信小程序
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
    },
    moveHandle () {
      let _self = this
      this.$refs.contentSwiper.swiper.slides.on('scroll', function (e) {
        if (this.children[0].clientHeight - e.target.clientHeight - e.target.scrollTop < 100) {
          _self.$refs[`child${this.dataset.index}`][0].loadMore()
        }
      })
    }
  },
  components: {
    swiper,
    swiperSlide,
    One,
    Two,
    Three
  }
}
</script>
