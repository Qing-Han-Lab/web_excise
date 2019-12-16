<style scoped lang='scss'>
.flashsale {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f7f7f7;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .flashsale-top {
    .flashsale-datanav {
      width: 375px;
      height: 83px;
      background-color: #fb2c68;
      overflow: auto;
      display: flex;
      justify-content: space-between;
      /deep/ .swiper-slide {
        width: auto;
        margin-right: 30px;
        text-align: center;
        &:last-child {
          margin-right: 0;
        }
      }
      .flashsale-datanav-box {
        color: rgba(255, 255, 255, 0.5);
        font-size: 14px;
        padding-top: 15px;
      }
      .flashsale-datanav-box-active {
        text-align: center;
        color: #fff;
        font-size: 14px;
      }
    }
  }

  .flashsale-commodity-box {
    width: 375px;
    min-height: 112px;
    overflow: auto;
    margin-top: -20px;
    .flashsale-commodity {
      position: relative;
      z-index: 100;
      width: 332px;
      height: 112px;
      background-color: #fff;
      box-shadow: 0px 10px 20px -16px rgba(0, 0, 0, 0.5);
      border-radius: 4px;
      margin: 10px auto;
      padding: 14px 14px 14px 9px;
      display: flex;
      justify-content: space-between;
      .flashsale-commodity-img {
        width: 105px;
        height: 105px;
        margin-right: 9px;
        img {
          width: 105px;
          height: 105px;
        }
      }
      .flashsale-commodity-describe {
        .flashsale-commodity-describe-name {
          width: 210px;
          height: 21px;
          color: #333333;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          overflow: hidden;
          line-height: 21px;
          font-family: "Helvetica";
          font-size: 14px;
        }
        .flashsale-commodity-describe-describe {
          width: 210px;
          height: 10px;
          color: rgba(251, 44, 104, 0.5);
          line-height: 10px;
          font-size: 12px;
          margin-top: 3px;
        }
        .flashsale-commodity-describe-schedule {
          width: 210px;
          height: 10px;
          display: flex;
          justify-content: space-between;
          font-size: 10px;
          color: #b1b1b1;
          line-height: 10px;
          margin-top: 14px;
          .flashsale-commodity-describe-schedule-strip {
            width: 130px;
            height: 10px;
            border: 1px dashed #f2f2f2;
            border-radius: 5px;
            background: rgba(213, 217, 223, 0.56);
            position: relative;
            overflow: hidden;
            span {
              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              border-radius: 5px;
              background: url("./images/icon-describe.png");
              background-size: 26px 10px;
            }
          }
        }
        .flashsale-commodity-describe-originalprice {
          width: 210px;
          height: 10px;
          color: #b1b1b1;
          font-size: 12px;
          line-height: 10px;
          text-decoration: line-through;
          margin-top: 15px;
          font-family: "DINAlternate-Bold";
        }
        .flashsale-commodity-describe-actuality {
          width: 225px;
          height: 21px;
          margin-top: 5px;
          display: flex;
          justify-content: space-between;
          .flashsale-commodity-describe-actuality-left {
            display: flex;
            .flashsale-commodity-describe-actuality-currentprice {
              display: flex;
              font-size: 8px;
              color: #fb2c68;
              line-height: 15px;
              align-items: flex-end;
              font-family: "DINAlternate-Bold";
              .flashsale-commodity-describe-actuality-currentprice-money {
                font-size: 20px;
                line-height: 20px;
              }
            }
            .flashsale-commodity-describe-actuality-ticket {
              font-size: 12px;
              height: 14px;
              line-height: 14px;
              margin: 4px 5px 0px;
              color: #ffffff;
              padding: 0px 5px;
              background-color: #fb2c68;
              border: 1px solid #fb2c68;
              font-family: "DINAlternate-Bold";
            }
            .flashsale-commodity-describe-actuality-award {
              padding: 0px 3px;
              height: 14px;
              font-size: 12px;
              margin: 4px 5px 0px;
              color: #fb2c68;
              line-height: 14px;
              border: 1px solid #f597b8;
              text-align: center;
              font-family: "DINAlternate-Bold";
            }
          }
          .flashsale-commodity-describe-actuality-right {
            .flashsale-commodity-describe-actuality-btn {
              width: 54px;
              height: 21px;
              background-color: #fb2c68;
              border-radius: 20px;
              color: #fff;
              font-size: 12px;
              text-align: center;
              line-height: 21px;
            }
          }
        }
      }
    }
    .flashsale-commodity-box-loding {
      width: 300px;
      height: 300px;
      margin: 50px auto 0px;

      .flashsale-commodity-box-loding-img {
        width: 280px;
        height: 280px;
        margin: 0px auto;
        img {
          width: 280px;
          height: 280px;
        }
      }
      .flashsale-commodity-box-loding-text {
        color: #b1b1b1;
        text-align: center;
      }
    }
    .notdata {
      color: #b1b1b1;
      text-align: center;
      padding-bottom: 10px;
      font-size: 14px;
    }
  }
  .flashsale-commodity-describe-schedule-text {
    font-family: "DINAlternate-Bold";
    font-size: 12px;
  }
  .swiper_width {
    width: 350px;
  }
}
</style>
<template>
  <div class="flashsale">
    <div class="flashsale-top">
      <div class="flashsale-datanav">
        <swiper
          :options="swiperOption"
          class="swiper_width"
          ref="swiperBox"
          @slideChangeTransitionEnd="move"
        >
          <swiper-slide v-for="(item,index) in navlist" :key="index">
            <div
              class="flashsale-datanav-box"
              :class="{'flashsale-datanav-box-active':item.active}"
              @click="switcher(index)"
            >
              <div class="flashsale-datanav-box-time">{{item.time}}</div>
              <div class="flashsale-datanav-box-name">{{item.name}}</div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div
      class="flashsale-commodity-box"
      v-infinite-scroll="loadMore"
      :infinite-scroll-disabled="loading"
      infinite-scroll-distance="300"
      infinite-scroll-immediate-check="false"
    >
      <div
        class="flashsale-commodity"
        v-for="(item,index) in commoditylist"
        :key="index"
        @click="toPage('product',{item:item})"
      >
        <div class="flashsale-commodity-img">
          <img v-lazy="checkUrl(item.itemPicUrl)" alt />
        </div>
        <div class="flashsale-commodity-describe">
          <div class="flashsale-commodity-describe-name">{{item.itemName}}</div>
          <div class="flashsale-commodity-describe-describe">{{item.shopName}}</div>
          <div class="flashsale-commodity-describe-schedule">
            <div class="flashsale-commodity-describe-schedule-strip">
              <span :style="`width:${item.math}%`"></span>
            </div>
            <div
              class="flashsale-commodity-describe-schedule-text"
            >已抢{{item.saledNumber > 10000? `${Number(item.saledNumber/10000).toFixed(1)}万`: item.saledNumber}}件</div>
          </div>
          <div
            class="flashsale-commodity-describe-originalprice"
            v-if="item.originPrice"
          >￥{{item.originPrice}}</div>
          <div class="flashsale-commodity-describe-actuality">
            <div class="flashsale-commodity-describe-actuality-left">
              <div class="flashsale-commodity-describe-actuality-currentprice">
                ￥
                <div
                  class="flashsale-commodity-describe-actuality-currentprice-money"
                >{{item.finalPrice.split('.')[0]}}</div>
                .{{item.finalPrice.split('.')[1]}}
              </div>
              <div
                class="flashsale-commodity-describe-actuality-ticket"
                v-if="item.couponAmount"
              >券:{{item.couponAmount}}元</div>
              <div
                class="flashsale-commodity-describe-actuality-award"
                v-if="item.commissionAmount && item.commissionAmount!=='0.00'"
              >奖:{{item.commissionAmount}}元</div>
            </div>
            <div class="flashsale-commodity-describe-actuality-right">
              <div class="flashsale-commodity-describe-actuality-btn">马上抢</div>
            </div>
          </div>
        </div>
      </div>
      <div class="flashsale-commodity-box-loding" v-if="notShow">
        <div class="flashsale-commodity-box-loding-img">
          <img src="../home/images/loading_home.gif" alt />
        </div>
        <div class="flashsale-commodity-box-loding-text">暂无商品可抢......</div>
      </div>
      <div class="notdata" v-if="notData">已经触底了...</div>
    </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data () {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 20,
        centeredSlides: true
      },
      commoditylist: [],
      navlist: [
        {
          time: '昨日 00:00',
          name: '',
          active: false,
          num: 1
        }, {
          time: '昨日 10:00',
          name: '',
          active: false,
          num: 2
        }, {
          time: '昨日 12:00',
          name: '',
          active: false,
          num: 3
        }, {
          time: '昨日 15:00',
          name: '',
          active: false,
          num: 4
        }, {
          time: '昨日 20:00',
          name: '',
          active: false,
          num: 5
        }, {
          time: '00:00',
          name: '',
          active: false,
          num: 6
        }, {
          time: '10:00',
          name: '',
          active: false,
          num: 7
        }, {
          time: '12:00',
          name: '',
          active: false,
          num: 8
        }, {
          time: '15:00',
          name: '',
          active: false,
          num: 9
        }, {
          time: '20:00',
          name: '',
          active: false,
          num: 10
        }, {
          time: '明日 00:00',
          name: '',
          active: false,
          num: 11
        }, {
          time: '明日 10:00',
          name: '',
          active: false,
          num: 12
        }, {
          time: '明日 12:00',
          name: '',
          active: false,
          num: 13
        }, {
          time: '明日 15:00',
          name: '',
          active: false,
          num: 14
        }, {
          time: '明日 20:00',
          name: '',
          active: false,
          num: 15
        }
      ],
      cabPage: 2,
      loading: false,
      notShow: false,
      notData: false,
      pageNum: 1,
      mathRandom: 0
    }
  },
  mounted () {
    this.getTime()
    this.getData()
  },
  methods: {
    move () {
      let index = this.$refs.swiperBox.swiper.activeIndex
      this.navlist = this.navlist.map((res, num) => {
        res.active = false
        if (num === index) {
          res.active = true
        }
        return res
      })
      this.allLoaded = false
      this.notData = false
      this.notShow = false
      this.commoditylist = []
      this.navlist = this.navlist.map(item => {
        item.active = false
        return item
      })
      this.pageNum = 1
      this.navlist[index].active = true
      this.getData()
      this.checkMenus(index)
    },
    checkMenus (index) {
      this.$refs.swiperBox.swiper.slideTo(index, 300, false)
    },
    getTime () {
      let now = new Date()
      let hour = now.getHours()
      this.navlist = this.navlist.map(item => {
        item.active = false
        return item
      })
      if (hour >= 0 && hour < 10) {
        this.navlist[5].active = true
        this.checkMenus(5)
      } else if (hour >= 10 && hour < 12) {
        this.navlist[6].active = true
        this.checkMenus(6)
      } else if (hour >= 12 && hour < 15) {
        this.navlist[7].active = true
        this.checkMenus(7)
      } else if (hour >= 15 && hour < 20) {
        this.navlist[8].active = true
        this.checkMenus(8)
      } else if (hour >= 20 && hour !== 0) {
        this.navlist[9].active = true
        this.checkMenus(9)
      }
      let numlist = this.navlist.filter((item) => {
        return item.active
      })
      for (let i = 0; i < this.navlist.length; i++) {
        if (this.navlist[i].num <= numlist[0].num) {
          this.navlist[i].name = '已开抢'
        } else {
          this.navlist[i].name = '即将开抢'
        }
      }
    },

    getData () {
      let numlist = this.navlist.filter((item) => {
        return item.active
      })
      this.$http('GET', this.api.flashsale, {
        hourType: numlist[0].num,
        page: this.pageNum
      }).then(res => {
        if (res.data.model.list && res.data.model.list.length !== 0) {
          this.commoditylist = res.data.model.list
          this.pageNum = res.data.model.pageNum
          for (let i = 0; i < this.commoditylist.length; i++) {
            this.commoditylist[i].math = Math.floor(Math.random() * 100 + 1)
          }
        } else {
          if (this.notShow === true) {
            this.notData = false
          } else if (this.notData === true) {
            this.notShow = false
          }
        }
      })
    },
    switcher (index) {
      this.allLoaded = false
      this.notData = false
      this.notShow = false
      this.commoditylist = []
      this.navlist = this.navlist.map(item => {
        item.active = false
        return item
      })
      this.pageNum = 1
      this.navlist[index].active = true
      this.getData()
      this.checkMenus(index)
    },
    loadMore () {
      // 加载更多
      if (this.allLoaded) {
        this.notData = true
        console.log('没有更多了')
        return
      }
      if (this.loading === true) {
        return
      } else {
        this.loading = true
      }
      // 加载更多
      let numlist = this.navlist.filter((item) => {
        return item.active
      })
      this.$http('GET', this.api.flashsale, {
        hourType: numlist[0].num,
        page: this.pageNum
      }).then(res => {
        if (res.data.success === true) {
          if (res.data.model.list != null && res.data.model.list.length > 0) {
            this.cabPage = this.cabPage + 1
            this.$nextTick(() => {
              this.commoditylist = this.commoditylist.concat(res.data.model.list)
              for (let i = 0; i < this.commoditylist.length; i++) {
                this.commoditylist[i].math = Math.floor(Math.random() * 100 + 1)
              }
            })
          } else {
            this.notData = true
            this.allLoaded = true
          }
        }
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>
