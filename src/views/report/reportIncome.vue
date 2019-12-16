<style lang="scss" scoped>
.report-income {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #f7f7f7;
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
  .report-income-top {
    background: #fb2c68;
    color: #fff;
    text-align: center;
    .income-top-summation {
      padding: 22px 0 24px;
      font-family: "SourceHanSansSC-Medium";
      font-size: 12px;
      .summation-num {
        font-family: "PingFang-SC-Bold";
        font-size: 15px;
        height: 38px;
        margin-top: 10px;
        line-height: 38px;
        span {
          font-family: "DINAlternate-Bold";
          font-size: 33px;
        }
      }
    }
    .income-top-menu {
      padding: 0 21px;
      overflow-x: scroll;
      /deep/ .swiper-wrapper {
        justify-content: space-between;
      }
      /deep/ .swiper-slide {
        width: auto;
      }
      .income-top-menu-boxs-item {
        color: #fff;
        text-align: center;
        padding: 7px 0;
        &.active {
          border-bottom: 2px solid #fff;
        }
      }
    }
  }
  .report-income-content {
    flex: 1;
    overflow: auto;
    padding: 12px;
    .income-content-preview {
      background: #fff;
      border-radius: 4px;
      height: 83px;
      display: flex;
      align-items: center;
      margin-bottom: 17px;
      .preview-item {
        flex: 1;
        text-align: center;
        color: #333;
        .preview-item-title {
          font-family: "SourceHanSansSC-Medium";
          font-size: 15px;
          line-height: 23px;
          margin-bottom: 11px;
          display: flex;
          align-items: center;
          justify-content: center;
          span {
            display: block;
            width: 17px;
            height: 17px;
            &.preview-item-title-income {
              background: url("./images/icon_income.png") center no-repeat;
              background-size: 13px 15px;
            }
            &.preview-item-title-order {
              background: url("./images/icon_order.png") center no-repeat;
              background-size: 17px 17px;
            }
          }
        }
        .preview-item-num {
          font-family: "DINAlternate-Bold";
          font-size: 27px;
          span {
            font-family: "PingFang-SC-Bold";
            font-size: 11px;
          }
        }
      }
    }
    .income-content-detail {
      .detail-item {
        margin-bottom: 17px;
        background: #fff;
        border-radius: 4px;
        padding: 12px;
        .detail-item-title {
          display: flex;
          span {
            width: 16px;
            height: 16px;
            display: inline-block;
            &.my-order{
              background: url("./images/icon_order_mine.png") center no-repeat;
              background-size: 14px 16px;
            }
            &.fan-order{
              background: url("./images/icon_order_fan.png") center no-repeat;
              background-size: 16px;
            }
          }
        }
        .detail-item-income {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 17px 0 22px;
          .detail-item-income-box {
            display: flex;
            align-items: center;
            font-family: "SourceHanSansSC-Regular";
            font-size: 11px;
            line-height: 12px;
            color: rgba(51, 51, 51, 0.6);
            img {
              width: 26px;
              height: 26px;
              display: block;
              margin-right: 7px;
            }
            span {
              display: block;
              font-family: "DINAlternate-Bold";
              font-size: 12px;
            }
          }
        }
        .detail-item-order {
          font-family: "SourceHanSansSC-Regular";
          font-size: 11px;
          line-height: 12px;
          color: #333;
          .detail-item-order-box {
            display: flex;
            align-items: center;
            padding-bottom: 18px;
            .order-box-title {
              width: 60px;
            }
            .order-box-progress {
              width: 163px;
              height: 5px;
              border-radius: 3px;
              background: rgba(213, 217, 223, 0.56);
              margin: 0 3px;
              position: relative;
              span {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                border-radius: 3px;
                &.progress-pdd {
                  background: #f40109;
                }
                &.progress-tb {
                  background: #fb7a08;
                }
                &.progress-jd {
                  background: #fb3c14;
                }
              }
            }
          }
        }
      }
    }
  }
  .report-income-content::-webkit-scrollbar {
    display: none;
  }
}
</style>
<template>
  <div class="report-income" @touchstart='scrollBegin($event)' @touchmove="scrollMove($event)" @touchend='scrollEnd($event)'>
    <div class="report-income-top">
      <div class="income-top-summation">
        我通过好价鼻子赚了
        <div class="summation-num">
          <span>{{total.incomeAmount}}</span>
          元
        </div>
      </div>
      <div class="income-top-menu">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item,index) in menus" :key="index">
            <div
              class="income-top-menu-boxs-item"
              :class="{'active': item.active}"
              @click="checkMenus(index)"
            >{{item.name}}</div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="report-income-content">
      <div class="income-content-preview">
        <div class="preview-item">
          <div class="preview-item-title">
            <span class="preview-item-title-income"></span>收益
          </div>
          <div class="preview-item-num">
            {{total.income}}
            <span>元</span>
          </div>
        </div>
        <div class="preview-item">
          <div class="preview-item-title">
            <span class="preview-item-title-order"></span>订单数
          </div>
          <div class="preview-item-num">
            {{total.orders}}
            <span>笔</span>
          </div>
        </div>
      </div>
      <div class="income-content-detail">
        <div class="detail-item" v-for="(item,index) in detailList" :key="index">
          <div class="detail-item-title">
            <span :class="item.class"></span>
            {{item.name}}
          </div>
          <div class="detail-item-income">
            <div class="detail-item-income-box" v-for="(income,index) in item.income" :key="index">
              <img :src="income.icon" alt>
              <div class="income-box-num">
                预估收入
                <span>{{income.num}}</span>
              </div>
            </div>
          </div>
          <div class="detail-item-order">
            <div
              class="detail-item-order-box"
              v-for="(progress,index) in item.progress"
              :key="index"
            >
              <div class="order-box-title">{{progress.name}}订单</div>
              <div class="order-box-progress">
                <span :class="`progress-${progress.class}`" :style="`width:${progress.percent}`"></span>
              </div>
              <div class="order-box-num">{{progress.num}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'reportIncome',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      menus: [
        {
          name: '今日',
          active: true,
          orderCycle: 'today'
        },
        {
          name: '昨日',
          active: false,
          orderCycle: 'lastToday'
        },
        {
          name: '本月',
          active: false,
          orderCycle: 'cumonth'
        },
        {
          name: '上月',
          active: false,
          orderCycle: 'ltmonth'
        }
      ],
      swiperOption: {
        speed: 300,
        slidesPerView: 'auto'
      },
      detailList: [
        {
          name: '我的订单',
          class: 'my-order',
          income: [
            {
              name: '拼多多',
              icon: require('./images/icon_pdd.png'),
              num: '0.00'
            },
            {
              name: '淘宝',
              icon: require('./images/icon_tb.png'),
              num: '0.00'
            },
            {
              name: '京东',
              icon: require('./images/icon_jd.png'),
              num: '0.00'
            }
          ],
          progress: [
            { name: '拼多多', class: 'pdd', percent: '0%', num: '0' },
            { name: '淘宝', class: 'tb', percent: '0%', num: '0' },
            { name: '京东', class: 'jd', percent: '0%', num: '0' }
          ]
        },
        {
          name: '粉丝订单',
          class: 'fan-order',
          income: [
            {
              name: '拼多多',
              icon: require('./images/icon_pdd.png'),
              num: '0.00'
            },
            {
              name: '淘宝',
              icon: require('./images/icon_tb.png'),
              num: '0.00'
            },
            {
              name: '京东',
              icon: require('./images/icon_jd.png'),
              num: '0.00'
            }
          ],
          progress: [
            { name: '拼多多', class: 'pdd', percent: '0%', num: '0' },
            { name: '淘宝', class: 'tb', percent: '0%', num: '0' },
            { name: '京东', class: 'jd', percent: '0%', num: '0' }
          ]
        }
      ],
      total: {
        incomeAmount: '0.00',
        orders: '0',
        income: '0.00'
      },
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
  created () {
    this.checkMenus(this.$route.query.index ? this.$route.query.index : 0)
  },
  methods: {

    scrollBegin (e) {
      let x = e.touches[0].clientX
      let y = e.touches[0].clientY
      this.beginX = this.startX = x
      this.beginY = this.startY = y
    },

    scrollMove (e) {
      let x = e.touches[0].clientX
      let y = e.touches[0].clientY
      this.endX = x
      this.endY = y
    },

    scrollEnd (e) {
      // 获取当前定位
      let index
      for (let i = 0; i < this.menus.length; i++) {
        if (this.menus[i].active) {
          index = i
          break
        }
      }
      let movex = this.endX - this.beginX
      let movey = this.endY - this.beginY
      if (this.endX !== this.lastX) {
        if (movex >= 0) { // 往右滑动  上一项
          if (movex > 100 && Math.abs(movey) < 50) {
            if (index !== 0) {
              this.checkMenus(--index)
            }
          }
        } else { // 往坐滑动  下一项
          if (movex < -100 && Math.abs(movey) < 50) {
            if (index !== 3) {
              this.checkMenus(++index)
            }
          }
        }
        this.lastX = this.endX
      }
    },

    checkMenus (index) {
      this.menus = this.menus.map(item => {
        item.active = false
        return item
      })
      this.menus[index].active = true
      this.$nextTick(() => {
        this.getUserIncomeDetail()
      })
    },
    getUserIncomeDetail () {
      this.$http('GET', this.api.getUserIncomeDetail, {
        orderCycle: this.orderCycle[0].orderCycle
      }).then(res => {
        if (res.data.success === true) {
          this.total = res.data.model
          // 我的订单
          this.detailList[0].income[0].num = this.total.myOrder.pddIncome || '0.00'
          this.detailList[0].income[1].num = this.total.myOrder.taobaoIncome || '0.00'
          this.detailList[0].income[2].num = this.total.myOrder.jdIncome || '0.00'
          this.detailList[0].progress[0].num = this.total.myOrder.pddOrders || '0'
          this.detailList[0].progress[1].num = this.total.myOrder.taobaoOrders || '0'
          this.detailList[0].progress[2].num = this.total.myOrder.jdOrders || '0'
          let myorderTotal = Number(this.total.myOrder.pddOrders) + Number(this.total.myOrder.taobaoOrders) + Number(this.total.myOrder.jdOrders)
          this.detailList[0].progress[0].percent = ((this.total.myOrder.pddOrders / myorderTotal) || 0).toFixed(2) * 100 + '%'
          this.detailList[0].progress[1].percent = ((this.total.myOrder.taobaoOrders / myorderTotal) || 0).toFixed(2) * 100 + '%'
          this.detailList[0].progress[2].percent = ((this.total.myOrder.jdOrders / myorderTotal) || 0).toFixed(2) * 100 + '%'
          // 粉丝订单
          this.detailList[1].income[0].num = this.total.fansOrder.pddIncome || '0.00'
          this.detailList[1].income[1].num = this.total.fansOrder.taobaoIncome || '0.00'
          this.detailList[1].income[2].num = this.total.fansOrder.jdIncome || '0.00'
          this.detailList[1].progress[0].num = this.total.fansOrder.pddOrders || '0'
          this.detailList[1].progress[1].num = this.total.fansOrder.taobaoOrders || '0'
          this.detailList[1].progress[2].num = this.total.fansOrder.jdOrders || '0'
          let fansOrderTotal = Number(this.total.fansOrder.pddOrders) + Number(this.total.fansOrder.taobaoOrders) + Number(this.total.fansOrder.jdOrders)
          if (fansOrderTotal === 0) {
            this.detailList[1].progress[0].percent = '0%'
            this.detailList[1].progress[1].percent = '0%'
            this.detailList[1].progress[2].percent = '0%'
          } else {
            this.detailList[1].progress[0].percent = ((this.total.fansOrder.pddOrders / fansOrderTotal) || 0).toFixed(2) * 100 + '%'
            this.detailList[1].progress[1].percent = ((this.total.fansOrder.taobaoOrders / fansOrderTotal) || 0).toFixed(2) * 100 + '%'
            this.detailList[1].progress[2].percent = ((this.total.fansOrder.jdOrders / fansOrderTotal) || 0).toFixed(2) * 100 + '%'
          }
        }
      })
    }
  },
  computed: {
    orderCycle () {
      return this.menus.filter((item) => {
        return item.active
      })
    }
  }
}
</script>
