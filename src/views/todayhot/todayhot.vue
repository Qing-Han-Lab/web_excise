<style scoped lang='scss'>
.allview {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f7f7f7;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  .allview-allsellbox {
    width: 100%;
    overflow: auto;
    flex: 1;
    &::-webkit-scrollbar{
      display: none;
    }
    .allview-topback {
      width: 100%;
      height: 116px;
      background-image: url("./img/topback.png");
      background-size: 100% 160px;
      background-position-y: -44px;
      position: relative;
      .sellhot {
        width: 160px;
        height: 16px;
        background-image: url("./img/sellhot.png");
        background-size: 100% 100%;
        position: absolute;
        bottom: 70px;
        left: 50%;
        transform: translateX(-50%);
      }
      .getcoupon {
        width: 131px;
        height: 15px;
        bottom: 46px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        background-image: url("./img/getcoupon.png");
        background-size: 100% 100%;
      }
      .updatebox {
        z-index: 5;
        width: 122px;
        height: 34px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -18px;
        background-image: url("./img/update.png");
        background-size: 100% 100%;
        color: rgba(251, 44, 104, 1);
        text-align: center;
        font-size: 10px;
        font-weight: bold;
        line-height: 34px;
      }
    }
    .allview-sellbox {
      width: 100%;
      min-height: 667px;
      padding: 8px 10px 0px;
      box-sizing: border-box;
      .allview-sellbox-sellitem {
        width: 355px;
        height: 135px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 10px 20px -16px rgba(0, 0, 0, 0.5);
        border-radius: 4px;
        margin-top: 10px;
        padding: 12px 5px 5px 0px;
        box-sizing: border-box;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        position: relative;
        .lev1 {
          position: absolute;
          width: 18px;
          height: 20px;
          background-image: url("./img/lv1.png");
          background-size: 100% 100%;
          top: 2px;
          left: 9px;
        }
        .lev2 {
          position: absolute;
          width: 18px;
          height: 20px;
          background-image: url("./img/lv2.png");
          background-size: 100% 100%;
          top: 2px;
          left: 9px;
        }
        .lev3 {
          position: absolute;
          width: 18px;
          height: 20px;
          background-image: url("./img/lv3.png");
          background-size: 100% 100%;
          top: 2px;
          left: 9px;
        }
        img {
          width: 107px;
          height: 107px;
          margin-left: 9px;
          margin-right: 9px;
        }
        .rightbox {
          flex: 1;
          height: 100%;
          overflow: hidden;
          .rightbox-title {
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 14px;
            font-weight: 500;
            color: rgba(51, 51, 51, 1);
            font-family: "Helvetica";
          }
          .rightbox-sellnum {
            margin-top: 16px;
            height: 15px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            .fire {
              width: 15px;
              height: 15px;
              background-image: url("./img/fire.png");
              background-size: 100% 100%;
              margin-right: 3px;
            }
            .sellnum-text {
              color: rgba(251, 44, 104, 1);
              font-size: 12px;
              font-family: "DINAlternate-Bold";
            }
          }
          .rightbox-oldmoney {
            margin-top: 17px;
            font-size: 12px;
            font-family: "DINAlternate-Bold";
            font-weight: 400;
            color: rgba(177, 177, 177, 1);
            text-decoration: line-through;
            &.hidden {
              opacity: 0;
            }
          }
          .rightbox-moneybox {
            width: 100%;
            height: 44px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .leftmoneybox {
              height: 100%;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              .money {
                font-size: 14px;
                font-family: "DINAlternate-Bold";
                font-weight: 500;
                color: rgba(251, 44, 104, 1);
                margin-right: 14px;
                display: flex;
                justify-content: center;
                align-items: flex-end;
                .smallmoney {
                  font-weight: bold;
                }
                .bigmoney {
                  font-size: 20px;
                  font-weight: bold;
                  transform: translateY(1px);
                }
              }
              .coupon {
                background: #fb2c68;
                text-align: center;
                line-height: 16px;
                font-size: 12px;
                font-family: "DINAlternate-Bold";
                font-weight: 500;
                color: #fff;
                margin-right: 14px;
                padding: 0px 5px;
                height: 16px;
                margin-right: 5px;
              }
              .commistion {
                padding: 0px 5px;
                height: 16px;
                border: 1px solid pink;
                box-sizing: border-box;
                text-align: center;
                color: #fb2c68;
                font-size: 12px;
                font-family: "DINAlternate-Bold";
                line-height: 16px;
              }
            }
            .buybox {
              width: 44px;
              height: 44px;
              background-image: url("./img/buy.png");
              background-size: 100% 100%;
            }
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="allview">
    <div class="allview-allsellbox" @scroll="addMoreData($event)">
      <div class="allview-topback">
        <div class="sellhot"></div>
        <div class="getcoupon"></div>
        <div class="updatebox">每2小时更新一次</div>
      </div>
      <div class="allview-sellbox">
        <div
          @click="toPage('product',{item:item})"
          class="allview-sellbox-sellitem"
          v-for="(item,index) in sellList"
          :key="index"
        >
          <div :class="'lev'+`${index+1}`" v-if="index<3"></div>
          <img v-lazy="checkUrl(item.itemPicUrl)" alt />
          <div class="rightbox">
            <div class="rightbox-title">{{item.itemName}}</div>
            <div class="rightbox-sellnum">
              <div class="fire"></div>
              <div class="sellnum-text">爆卖{{toMoneyFix(item.saledNumber)}}件</div>
            </div>
            <div
              class="rightbox-oldmoney"
              :class="item.originPrice==null?'hidden':''"
            >￥{{item.originPrice}}</div>
            <div class="rightbox-moneybox">
              <div class="leftmoneybox">
                <div class="money">
                  <div class="smallmoney">￥</div>
                  <div class="bigmoney">{{getBig(item.finalPrice)}}</div>
                  <div class="smallmoney">{{getSmall(item.finalPrice)}}</div>
                </div>
                <div
                  class="coupon"
                  v-if="item.couponAmount!==null&&item.couponAmount!==''&&item.couponAmount!=='0.00'"
                >券:{{item.couponAmount}}元</div>
                <div
                  class="commistion"
                  v-if="item.commissionAmount!==null&&item.commissionAmount!==''&&item.commissionAmount!=='0.00'"
                >奖{{item.commissionAmount}}元</div>
              </div>
              <div class="buybox"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pageNum: 1,
      sellList: []
    }
  },
  created () {
    this.getData()
  },
  computed: {
    getBig () {
      return function (str) {
        let index = str.indexOf('.')
        if (index !== -1) {
          str = str.substring(0, index)
          return str
        } else {
          return ''
        }
      }
    },
    getSmall () {
      return function (str) {
        let index = str.indexOf('.')
        if (index !== -1) {
          str = str.substr(index)
          return str
        } else {
          return ''
        }
      }
    }
  },
  methods: {
    getData () {
      this.$http('GET', this.api.todayHot, {
        cid: 0,
        pageSize: 10,
        saleType: 1,
        page: this.pageNum++
      }).then(res => {
        if (res.data.success) {
          this.sellList = this.sellList.concat(res.data.model.list)
        }
      })
    },
    addMoreData (e) {
      let scrollDiv = e.target
      if (
        scrollDiv.scrollTop + scrollDiv.clientHeight ===
        scrollDiv.scrollHeight
      ) {
        console.log('加载更多')
        this.getData()
      }
    }
  }
}
</script>
