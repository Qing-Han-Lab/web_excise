<style lang="scss" scoped>
.order {
  background: #f7f7f7;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
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
  .order-menu {
    position: relative;
    background: #fff;
    color: #858585;
    margin-bottom: 7px;
    width: 100%;
    .order-menu-source {
      display: flex;
      align-items: center;
      justify-content: space-between;
      text-align: center;
      border-bottom: 1px solid #f2f7fb;
      padding: 0 49px;
      .order-menu-source-item {
        height: 24px;
        line-height: 24px;
        padding: 5px 0;
        font-family: "SourceHanSansSC-Medium";
        font-size: 16px;
        &.active-source {
          color: #fb2c68;
        }
      }
      .order-menu-source-active {
        position: absolute;
        bottom: 0;
        width: 20px;
        height: 2px;
        background-color: #fb2c68;
        transition-duration: 300ms;
        &.one {
          top: 30px;
          left: 55px;
        }
        &.two {
          top: 30px;
          left: 170px;
        }
        &.three {
          top: 30px;
          left: 293px;
        }
      }
    }
    .order-menu-state {
      display: flex;
      font-family: "SourceHanSansSC-Regular";
      font-size: 12px;
      padding: 7px 20px 12px;
      align-items: center;
      justify-content: space-between;
      .order-menu-state-item {
        &.active-state {
          color: #fb2c68;
        }
      }
    }
  }
  .swiper {
    width: 357px;
    flex: 1;
    /deep/ .swiper-slide {
      width: 100%;
      height: 100%;
      .order-box {
        width: 100%;
        height: 100%;
        overflow-y: auto;
        padding: 5px 9px;
        .order-box-item {
          background: #fff;
          border-radius: 4px;
          padding: 12px 15px;
          margin-bottom: 7px;
          .order-box-item-top {
            display: flex;
            font-family: "SourceHanSansSC-Regular";
            font-size: 13px;
            margin-bottom: 15px;
            color: rgba(51, 51, 51, 0.8);
            .item-top-state {
              margin-left: auto;
              color: rgba(51, 51, 51, 0.6);
            }
          }
          .order-box-item-content {
            display: flex;
            align-items: flex-start;
            .item-content-product {
              margin-right: 3px;
              img {
                width: 85px;
                height: 85px;
                display: block;
              }
            }
            .item-content-info {
              margin-left: 8px;
              font-family: "SourceHanSansSC-Regular";
              max-width: 181px;
              .item-content-info-title {
                font-family: "SourceHanSansSC-Regular";
                font-size: 12px;
                letter-spacing: 1px;
                color: rgba(51, 51, 51, 0.8);
                text-overflow: -o-ellipsis-lastline;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                line-clamp: 2;
                -webkit-box-orient: vertical;
              }
              .item-content-info-id {
                font-size: 11px;
                line-height: 16px;
                color: rgba(51, 51, 51, 0.9);
                padding: 3px 0;
                white-space: nowrap;
              }
              .item-content-info-copy {
                width: 43px;
                height: 18px;
                color: #9462ff;
                height: 18px;
                line-height: 18px;
                border-radius: 9px;
                font-size: 11px;
                text-align: center;
                border: 1px solid #9462ff;
              }
              .item-content-info-copybean {
                width: 43px;
                height: 18px;
                color: #9462ff;
                height: 18px;
                line-height: 18px;
                border-radius: 9px;
                font-size: 11px;
                text-align: center;
                border: 1px solid #9462ff;
                margin: 10px 0px;
              }
              .item-content-info-mark {
                font-size: 10px;
                line-height: 16px;
                background: #fef0ed;
                border-radius: 2px;
                color: #fb2c68;
                display: inline;
                padding: 0 5px;
              }
            }
            .item-content-income {
              text-align: center;
              color: #fe0440;
              font-size: 9px;
              margin-left: auto;
              margin-top: 23px;
              span {
                display: block;
                font-family: "PingFang-SC-Bold";
                font-size: 16px;
              }
            }
            .item-content-incomebean {
              text-align: center;
              color: #fe0440;
              font-size: 9px;
              margin-left: auto;
              span {
                display: block;
                font-family: "PingFang-SC-Bold";
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }
  .order-box::-webkit-scrollbar {
    display: none;
  }
}
</style>
<template>
  <div
    class="order"
  >
    <div class="order-menu">
      <div class="order-menu-source">
        <div
          class="order-menu-source-item"
          v-for="(item,index) in sourceList"
          :key="index"
          :class="{'active-source':item.active}"
          @click="checkMenu1(index)"
        >{{item.name}}</div>
        <div
          class="order-menu-source-active"
          :class="{'one':sourceList[0].active,'two':sourceList[1].active,'three':sourceList[2].active}"
        ></div>
      </div>
      <div class="order-menu-state">
        <div
          class="order-menu-state-item"
          v-for="(item,index) in stateList"
          :key="index"
          :class="{'active-state':item.active}"
          @click="checkMenu2(index,item)"
        >{{item.name}}</div>
      </div>
    </div>
    <swiper ref="swiperbox" :options="swiperOption" class="swiper" @slideChangeTransitionStart="changePlatform" >
      <swiper-slide v-for="(item,index) in 3" :key="index">
        <div
      class="order-box"
      v-infinite-scroll="getindent"
      :infinite-scroll-disabled="loading"
      infinite-scroll-distance="100"
      infinite-scroll-immediate-check="false"
      v-if="orderList.length"
    >
      <div class="order-box-item" v-for="(item,index) in orderList" :key="index">
        <div class="order-box-item-top">
          <div class="item-top-date">{{formatTime(item.orderTime, 'YYYY.MM.DD')}}</div>
          <div class="item-top-state" v-if="item.status === 'finish'">已结算</div>
          <div class="item-top-state" v-if="item.status === 'payed'">已付款</div>
          <div class="item-top-state" v-if="item.status === 'inValid'">已失效</div>
        </div>
        <div class="order-box-item-content">
          <div class="item-content-product">
            <img :src="item.isMyOrder?item.orderPicUrl:img" alt />
          </div>
          <div class="item-content-info">
            <div class="item-content-info-title" v-if="item.isMyOrder">{{item.title}}</div>
            <div class="item-content-info-id">订单编号：{{item.orderId}}</div>
            <div
              class="item-content-info-copy"
              :class="{'item-content-info-copybean':item.isMyOrder}"
              @click="copyOrder(item.orderId)"
            >复制</div>
            <div class="item-content-info-mark">{{item.isMyOrder ? '自己出单' : '粉丝出单'}}</div>
          </div>
          <div class="item-content-income" :class="item-content-incomebean">
            预计收益
            <span>＋{{item.commissionAmount}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="nothing" v-else>
      <div class="nothing-text">没有查询到任何订单</div>
    </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'order',
  data () {
    return {
      swiperOption: {
        speed: 500,
        virtualTranslate: true
      },
      img: require('../../assets/default.png'),
      sourceList: [
        { name: '淘宝', active: true, platform: 'taobao' },
        { name: '京东', active: false, platform: 'jingdong' },
        { name: '拼多多', active: false, platform: 'pingduoduo' }
      ],
      stateList: [
        { name: '全部', active: true, status: 'all' },
        { name: '已付款', active: false, status: 'payed' },
        { name: '已结算', active: false, status: 'finish' },
        { name: '已失效', active: false, status: 'inValid' }
      ],
      orderList: [],
      nowpage: 2,
      allLoaded: false,
      loading: false
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  mounted () {
    this.getOrder()
  },
  methods: {
    changePlatform () {
      let swiperDom = this.$refs.swiperbox
      if (swiperDom.swiper) {
        let index = swiperDom.swiper.realIndex
        this.checkMenu1(index)
      }
    },
    getOrder () {
      this.$http('GET', this.api.getindent, {
        page: 1,
        pageSize: 10,
        status: this.getstate[0].status,
        platform: this.getPlatform[0].platform
      }).then(res => {
        if (res.data.success === true) {
          this.orderList = []
          this.$nextTick(() => {
            this.orderList = res.data.model.list
          })
        } else {
          this.$toast(res.data.msgInfo)
        }
      })
    },
    getindent () {
      if (this.allLoaded) {
        return
      }
      if (this.loading === true) {
        return
      } else {
        this.loading = true
      }
      this.$http('GET', this.api.getindent, {
        page: this.nowpage,
        pageSize: 10,
        status: this.getstate[0].status,
        platform: this.getPlatform[0].platform
      })
        .then(res => {
          if (res.data.success === true) {
            if (res.data.model.list != null) {
              if (res.data.model.list.length > 0) {
                this.nowpage += 1
                this.$nextTick(() => {
                  this.orderList = this.orderList.concat(res.data.model.list)
                })
              } else {
                this.allLoaded = true
              }
            } else {
              this.allLoaded = true
            }
          }
          this.loading = false
        })
        .catch(() => {
          this.loading = false
        })
    },
    checkMenu1 (index) {
      this.sourceList.map(item => {
        item.active = false
        this.platform = item.name
        return item
      })
      this.sourceList[index].active = true
      this.nowpage = 2
      this.allLoaded = false
      this.$nextTick(() => {
        this.getOrder()
      })
    },
    checkMenu2 (index) {
      this.stateList.map(item => {
        item.active = false
        return item
      })
      this.nowpage = 2
      this.allLoaded = false
      this.stateList[index].active = true
      this.$nextTick(() => {
        this.getOrder()
      })
    },
    copyOrder (text) {
      this.setClipbordText(text)
      this.$toast('订单号已复制到您的剪切板')
    }
  },
  computed: {
    getstate () {
      return this.stateList.filter(item => {
        return item.active
      })
    },
    getPlatform () {
      return this.sourceList.filter(item => {
        return item.active
      })
    }
  }
}
</script>
