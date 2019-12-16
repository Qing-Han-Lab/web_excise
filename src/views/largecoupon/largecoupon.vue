<style scoped lang='scss'>
.largecoupon {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f7f7f7;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .largecoupon-title {
    width: 375px;
    height: 83.98px;

    .largecoupon-nav {
      width: 375px;
      height: 40px;
      background-color: #fb2c68;
      display: flex;
      justify-content: space-around;
      color: #fff;
      .largecoupon-nav-text {
        line-height: 30px;
        font-size: 14px;
      }
      .largecoupon-nav-text-active {
        line-height: 30px;
        font-size: 16px;
        background: url("./images/icon-xian.png") bottom no-repeat;
        background-size: 18px 3px;
        background-position-y: 30px;
      }
    }
  }

  .largecoupon-box-auto {
    overflow: auto;

    .largecoupon-box {
      width: 355px;
      height: 120px;
      justify-content: space-between;
      background: url("./images/icon_box.png") no-repeat;
      background-size: 355px 120px;
      margin: 7px auto;
      display: flex;
      justify-content: space-between;
      border-radius: 4px;

      .largecoupon-box-center {
        margin-top: 10px;
        display: flex;
        .largecoupon-box-img {
          width: 98px;
          height: 98px;
          margin: 0px 10px;
          img {
            width: 98px;
            height: 98px;
          }
        }

        .largecoupon-box-describe {
          width: 160px;
          height: 100px;
          .largecoupon-box-describe-name {
            width: 160px;
            height: 30px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            color: #333;
            font-size: 14px;
            font-family: "Helvetica";
          }
          .largecoupon-box-describe-discounts {
            width: 152px;
            height: 14px;
            margin-top: 22px;
            color: #b1b1b1;
            line-height: 14px;
            display: flex;
            justify-content: space-between;
            .largecoupon-box-describe-discounts-left {
              display: flex;
              .largecoupon-box-describe-discounts-original {
                display: flex;
                font-size: 8px;
                margin-right: 5px;
                text-decoration: line-through;
                .largecoupon-box-describe-discounts-original-money {
                  font-size: 10px;
                }
              }
              .largecoupon-box-describe-discounts-award {
                padding: 0px 3px;
                height: 14px;
                font-size: 12px;
                color: #fb2c68;
                line-height: 14px;
                border: 1px solid #f597b8;
                text-align: center;
                font-family: "DINAlternate-Bold";
              }
            }
            .largecoupon-box-describe-discounts-right {
              .largecoupon-box-describe-discounts-sales {
                font-size: 12px;
                font-family: "DINAlternate-Bold";
              }
            }
          }
          .largecoupon-box-describe-practical {
            width: 160px;
            height: 17px;
            margin-top: 8px;
            color: #fb2c68;
            font-size: 14px;
            display: flex;
            line-height: 20px;
            font-family: "DINAlternate-Bold";
            .largecoupon-box-describe-practical-money {
              font-size: 20px;
              line-height: 16px;
            }
          }
        }
      }

      .largecoupon-box-ticket {
        width: 65px;
        height: 120px;
        text-align: center;
        .largecoupon-box-ticket-number {
          font-size: 16px;
          color: #fb2c68;
          margin-top: 20px;
          font-family: "DINAlternate-Bold";
        }
        .largecoupon-box-ticket-discount {
          font-size: 10px;
          color: #b1b1b1;
          margin-top: 5px;
          margin-bottom: 28px;
        }
        .largecoupon-box-ticket-btn {
          width: 54px;
          height: 21px;
          font-size: 12px;
          color: #fff;
          background-color: #fb2c68;
          border-radius: 10px;
          line-height: 21px;
          margin: 0px auto;
        }
      }
    }
  }
}
.load2 {
  text-align: center;
}
.loadAgain {
  display: inline;
  color: #569cff;
  font-size: 12px;
  font-family: "DINAlternate-Bold";
  padding: 3px 10px;
  border: 1px solid #569cff;
  border-radius: 20px;
}
.nothing {
  margin: 50px auto;
  width: 210px;
  height: 181px;
  background-image: url("../../assets/icon_nothing.png");
  background-size: 210px 181px;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  .nothing-text {
    color: #666;
    font-size: 16px;
  }
}
</style>
<template>
  <div class="largecoupon">
    <!-- <div class="largecoupon-title">
      <titleBar title="大额券" whiteBack color="#fff" backgroundColor="#FB2C68" />
      <div class="largecoupon-nav">
        <div
          class="largecoupon-nav-text"
          @click="hostate(index)"
          :class="{'largecoupon-nav-text-active':item.active}"
          v-for="(item,index) in navlist"
          :key="index"
        >{{item.name}}</div>
      </div>
    </div>-->

    <div
      class="largecoupon-box-auto"
      v-infinite-scroll="loadMore"
      :infinite-scroll-disabled="loading"
      infinite-scroll-distance="100"
      infinite-scroll-immediate-check="false"
      v-if="dataArr.length > 0"
    >
      <div class="largecoupon-box" v-for="(item,index) in dataArr" :key="index">
        <div class="largecoupon-box-center">
          <div class="largecoupon-box-img">
            <img v-lazy="checkUrl(item.itemPicUrl)" />
          </div>
          <div class="largecoupon-box-describe">
            <div class="largecoupon-box-describe-name">{{item.itemName}}</div>
            <div class="largecoupon-box-describe-discounts">
              <div class="largecoupon-box-describe-discounts-left">
                <div
                  class="largecoupon-box-describe-discounts-original"
                  v-if="item.originPrice!=null"
                >
                  ￥
                  <div
                    class="largecoupon-box-describe-discounts-original-money"
                  >{{item.originPrice?item.originPrice.split('.')[0]:null}}</div>
                  .{{item.originPrice?item.originPrice.split('.')[1]:null}}
                </div>
                <div
                  class="largecoupon-box-describe-discounts-award"
                  v-if="item.commissionAmount && item.commissionAmount!=='0.00'"
                >奖:{{item.commissionAmount}}元</div>
              </div>
              <div class="largecoupon-box-describe-discounts-right">
                <div
                  class="largecoupon-box-describe-discounts-sales"
                >销量:{{item.saledNumber>10000?`${Number(item.saledNumber/10000).toFixed(1)}万`:item.saledNumber}}</div>
              </div>
            </div>
            <div class="largecoupon-box-describe-practical">
              券后:￥
              <div
                class="largecoupon-box-describe-practical-money"
              >{{item.finalPrice?item.finalPrice.split('.')[0]:null}}</div>
              .{{item.finalPrice?item.finalPrice.split('.')[1]:null}}
            </div>
          </div>
        </div>

        <div class="largecoupon-box-ticket" @click="toPage('product',{item:item})">
          <div class="largecoupon-box-ticket-number">{{item.couponAmount}}元</div>
          <div class="largecoupon-box-ticket-discount">优惠券</div>
          <div class="largecoupon-box-ticket-btn">去领券</div>
        </div>
      </div>
      <div v-if="loadFail">
        <div class="nothing">
          <div class="nothing-text">没有数据或加载失败</div>
        </div>
        <div class="load2">
          <div class="loadAgain" @click="loadMore">点击重新加载</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dataArr: [],
      largePage: 2,
      allLoaded: false,
      loadFail: false,
      loading: false,
      finalPrice: [],
      originPrice: [],
      navlist: [
        {
          name: '精选',
          active: true
        }, {
          name: '男装',
          active: false
        }, {
          name: '女装',
          active: false
        }, {
          name: '男鞋',
          active: false
        }, {
          name: '女鞋',
          active: false
        }
      ]
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.$http('GET', this.api.queryBigCouponsProducts, {
        page: 1,
        pageSize: 20
      }).then(res => {
        if (res.data.success === true) {
          if (res.data.model.list != null) {
            if (res.data.model.list.length > 0) {
              this.largePage = this.largePage + 1
              this.$nextTick(() => {
                this.dataArr = this.dataArr.concat(res.data.model.list)
              })
              for (let i = 0; i < res.data.model.list.length; i++) {
                this.finalPrice = res.data.model.list[i].finalPrice.split('.')
                if (res.data.model.list[i].originPrice != null) {
                  this.originPrice = res.data.model.list[i].originPrice.split('.')
                }
              }
            } else {
              this.loadFail = true
            }
          } else {
            this.loadFail = true
          }
        } else {
          this.loadFail = true
        }
      }).catch(() => {
        this.loadFail = true
      })
    },
    loadMore () {
      if (this.allLoaded) {
        console.log('没有更多了')
        return
      }
      if (this.loading === true) {
        return
      } else {
        this.loading = true
      }
      // 加载更多
      this.$http('GET', this.api.queryBigCouponsProducts, {
        page: this.largePage,
        pageSize: 20
      }).then(res => {
        if (res.data.success === true) {
          if (res.data.model.list != null) {
            if (res.data.model.list.length > 0) {
              this.largePage = this.largePage + 1
              this.$nextTick(() => {
                this.dataArr = this.dataArr.concat(res.data.model.list)
              })
            } else {
              this.allLoaded = true
            }
          } else {
            this.allLoaded = true
          }
        }
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
    }
  }
}
</script>
