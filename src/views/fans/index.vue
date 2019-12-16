<style lang="scss" scoped>
.fans {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /deep/ .titleBar {
    background: #fb2c68;
    .title {
      color: #fff;
    }
    .back-btn {
      background: url("../message/images/back_btn_white.png") center no-repeat;
      background-size: 10px 16px;
      background-position: 15px center;
    }
  }
  .fans-menu {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 35px;
    line-height: 35px;
    background-color: #fff;
    border-top: solid 1px rgba(151, 151, 151, 0.3);
    .fans-menu-item {
      flex: 1;
      text-align: center;
      font-family: "SourceHanSansSC-Medium";
      font-size: 16px;
      color: #858585;
      &.active {
        color: #fb2c68;
      }
    }
    .fans-menu-active {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 20px;
      height: 2px;
      background-color: #fb2c68;
      transition-duration: 300ms;
      &.one {
        left: 37px;
      }
      &.two {
        left: 131px;
      }
      &.three {
        left: 225px;
      }
      &.four {
        left: 318px;
      }
    }
  }
  .swiper{
    flex: 1;
    width: 100%;
    /deep/ .swiper-slide{
      width: 100%;
      height: 100%;
    }
    .fans-people {
    width: 100%;
    height: 100%;
    margin-top: 8px;
    overflow: auto;
    .fans-people-item {
      padding: 19px 15px 15px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      background: #fff;
      border-bottom: solid 1px rgba(151, 151, 151, 0.3);
      .fans-people-item-head {
        width: 46px;
        height: 46px;
        border-radius: 46px;
        overflow: hidden;
        border: solid 1px #fb2c68;
        img {
          width: 46px;
          height: 46px;
        }
      }
      .fans-people-item-content {
        margin-left: 13px;
        flex: 1;
        font-family: "SourceHanSansSC-Regular";
        font-size: 14px;
        color: #333333;
        .fans-people-item-content-id {
          margin-top: 6px;
        }
      }
      .fans-people-item-time {
        font-family: "SourceHanSansSC-Medium";
        font-size: 14px;
        color: rgba(51, 51, 51, 0.6);
      }
    }
  }
  }
}
.fans-people::-webkit-scrollbar {
  display: none;
}
.fans-bg {
  width: 375px;
  height: 100px;
  background-image: url("./images/fans_bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  .fans-bg-title {
    padding-top: 20px;
    text-align: center;
    font-family: "PingFangSC-Medium";
    font-size: 14px;
    color: #ffffff;
  }
  .fans-bg-num {
    padding-top: 8px;
    text-align: center;
    font-family: "PingFang-SC-Bold";
    font-size: 22px;
    color: #ffffff;
  }
}
</style>

<template>
  <div class="fans">
    <div class="fans-bg">
      <div class="fans-bg-title">我的粉丝数</div>
      <div class="fans-bg-num">{{fansTotal}}</div>
    </div>
    <div class="fans-menu">
      <div
        class="fans-menu-item"
        :class="{'active':item.active}"
        v-for="(item,index) in menus"
        :key="index"
        @click="checkMenu(index, item)"
      >{{item.name}}</div>
      <div
        class="fans-menu-active"
        :class="{'one':menus[0].active,'two':menus[1].active,'three':menus[2].active,'four':menus[3].active}"
      ></div>
    </div>
    <!-- v-if="fanslist.length > 0" -->
    <swiper :options="swiperOption" ref="changebox" class="swiper" @slideChangeTransitionStart="changeSwiper">
      <swiper-slide v-for="(item,index) in menus.length" :key="index">
        <div
          class="fans-people"
          v-infinite-scroll="loadMore"
          :infinite-scroll-disabled="loading"
          infinite-scroll-distance="100"
          infinite-scroll-immediate-check="false"
        >
          <div class="fans-people-item" v-for="(item,index) in fanslist" :key="index">
            <div class="fans-people-item-head">
              <!--  <img src="../../assets/head.jpg" alt> -->
              <img :src="item.userHeadUrl || require('../../assets/userhead.png')" alt />
            </div>
            <div class="fans-people-item-content">
              <div class="fans-people-item-content-name">{{item.nickName}}</div>
              <div class="fans-people-item-content-id">{{item.mobile}}</div>
            </div>
            <div
              class="fans-people-item-time"
            >{{formatTime(item.inviteTime, 'YYYY-MM-DD HH:mm:ss')}}</div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data () {
    return {
      swiperOption: {
        speed: 500,
        virtualTranslate: true
      },
      menus: [
        {
          name: '全部',
          active: true,
          type: 0
        },
        {
          name: '直邀',
          active: false,
          type: 1
        },
        {
          name: '推荐',
          active: false,
          type: 2
        },
        {
          name: '潜在',
          active: false,
          type: 3
        }
      ],
      fanslist: [],
      nowpage: 2,
      allLoaded: false,
      fansTotal: 0,
      loading: false,
      beginX: 0,
      startX: 0,
      endX: 0,
      lastX: 0,
      beginY: 0,
      startY: 0,
      endY: 0,
      lastY: 0
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  mounted () {
    this.getFans()
  },
  methods: {
    changeSwiper () {
      let swiperDom = this.$refs.changebox
      if (swiperDom.swiper) {
        let index = swiperDom.swiper.realIndex
        this.checkMenu(index)
      }
    },
    getFans () {
      this.$http('GET', this.api.fans, {
        page: 1,
        pageSize: 10,
        type: this.typeAar[0].type
      }).then(res => {
        if (res.data.success === true) {
          if (res.data.model.list != null) {
            this.fanslist = res.data.model.list
          }
          this.fansTotal = res.data.model.total
        }
      })
    },
    checkMenu (index) {
      this.menus = this.menus.map(item => {
        item.active = false
        return item
      })
      this.menus[index].active = true
      this.allLoaded = false
      this.getFans()
      this.nowpage = 2
    },
    loadMore () {
      if (this.allLoaded) {
        return
      }
      if (this.loading === true) {
        return
      } else {
        this.loading = true
      }
      this.$http('GET', this.api.fans, {
        page: this.nowpage,
        pageSize: 10,
        type: this.typeAar[0].type
      })
        .then(res => {
          if (res.data.success === true) {
            if (res.data.model.list != null) {
              if (res.data.model.list.length > 0) {
                this.nowpage = this.nowpage + 1
                this.$nextTick(() => {
                  this.fanslist = this.fanslist.concat(res.data.model.list)
                })
              } else {
                this.allLoaded = true
              }
            }
          }
          this.loading = false
        })
        .catch(() => {
          this.loading = false
        })
    }
  },
  computed: {
    typeAar () {
      return this.menus.filter(item => {
        return item.active
      })
    }
  }
}
</script>
