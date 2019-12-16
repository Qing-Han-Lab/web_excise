<style scoped lang='scss'>
.allsellbox {
  background: #f7f7f7;
  display: flex;
  padding: 0 10px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: flex-start;
  .sellbox {
    width: 175px;
    background: #f7f7f7;
    .sellbox-sellitem {
      width: 175px;
      padding-bottom: 5px;
      background: #fff;
      margin-top: 5px;
      position: relative;
      .playnum {
        padding: 0 15px;
        height: 16px;
        background-image: url('./images2/video_plays.gif');
        background-size: 14px 14px;
        background-repeat: no-repeat;
        background-position: right center;
        background-color: rgba(0,0,0,0.3);
        text-align: center;
        color: #fff;
        font-size: 10px;
        border-radius: 10px;
        position: absolute;
        text-indent: -10px;
        line-height: 16px;
        top: 7px;
        right: 10px;
        z-index: 10;
      }
      .videopic{
        width: 100%;
        position: relative;
        .playbtn {
        width: 30px;
        height: 30px;
        background-image: url("./images/play.png");
        background-size: 100% 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        z-index: 10;
       }
       img {
        width: 100%;
        height: auto;
       }
      }
      .sellbox-sellitem-vediobox {
        width: 100%;
        border-radius: 4px;
        .vediobox-title {
          width: 156px;
          height: 19px;
          font-size: 14px;
          font-family: "Helvetica";
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin: 5px auto 0px;
        }
        .vediobox-moneybox {
          margin: 9px auto 0px;
          width: 156px;
          .money {
            .moneylogo {
              display: inline-block;
              font-size: 11px;
              font-family: "DINAlternate-Bold";
              font-weight: bold;
              color: rgba(251, 44, 104, 1);
              margin-bottom: 5px;
            }
            .moneynum {
              display: inline-block;
              font-family: "DINAlternate-Bold";
              font-size: 20px;
              color: rgba(251, 44, 104, 1);
            }
          }
          .couponbox {
            .coupon {
              display: inline-block;
              padding: 0px 3px;
              background: #fb2c68;
              text-align: center;
              line-height: 16px;
              height: 16px;
              font-size: 12px;
              box-sizing: border-box;
              font-family: "DINAlternate-Bold";
              color: #fff;
              margin-right: 5px;
            }
            .commistion {
              display: inline-block;
              padding: 0px 3px;
              border: 1px solid pink;
              line-height: 16px;
              height: 16px;
              color: #fb2c68;
              font-size: 12px;
              font-family: "DINAlternate-Bold";
              box-sizing: border-box;
            }
          }
        }
        .vediobox-formbox {
          width: 156px;
          height: 18px;
          display: flex;
          margin: 5px auto;
          justify-content: space-between;
          align-items: center;
          .love {
            font-size: 10px;
            color: #999999;
            background: url("./images/heart.png") no-repeat left;
            background-size: 16px;
            text-indent: 18px;
          }
          .timetext {
            height: 18px;
            line-height: 18px;
            font-size: 10px;
            font-family: "DINAlternate-Bold";
            font-weight: 400;
            color: rgba(153, 153, 153, 1);
            text-indent: 25px;
            &.taobao {
              background: url("../images/icon_tb.png") no-repeat left;
              background-size: 18px;
            }
            &.tmall {
              background: url("../images/icon_tmall.png") no-repeat left;
              background-size: 18px;
            }
            &.pdd {
              background: url("../images/icon_pdd.png") no-repeat left;
              background-size: 18px;
            }
            &.jd {
              background: url("../images/icon_jd.png") no-repeat left;
              background-size: 18px;
            }
          }
        }
      }
      .sellbox-sellitem-picbox {
        width: 100%;
        border-radius: 4px;
        .picbox-title {
          width: 156px;
          height: 19px;
          font-size: 14px;
          font-family: "Helvetica";
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin: 5px auto 0px;
        }
        .picbox-moneybox {
          width: 156px;
          height: 21px;
          margin: 8px auto 0px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .money {
            display: flex;
            justify-content: center;
            align-items: flex-end;
            .moneylogo {
              font-size: 11px;
              font-family: "DINAlternate-Bold";
              font-weight: bold;
              color: rgba(251, 44, 104, 1);
              margin-bottom: 5px;
            }
            .moneynum {
              font-size: 20px;
              font-family: "DINAlternate-Bold";
              color: rgba(251, 44, 104, 1);
            }
          }
          .getprice {
            margin-left: 5px;
            height: 16px;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            .pricelogo {
              width: 16px;
              height: 16px;
              background-image: url("./images2/icon_price.png");
              background-size: 16px 16px;
            }
            .pricebox {
              display: flex;
              justify-content: center;
              align-items: flex-end;
              font-size: 14px;
              font-family: "DINAlternate-Bold";
              font-weight: bold;
              color: rgba(252, 89, 104, 1);
              .moneylogo {
                font-size: 10px;
              }
            }
          }
          .massagebox {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 10px;
            font-family: "DINAlternate-Bold";
            font-weight: 400;
            color: rgba(153, 153, 153, 1);
            .likebox {
              background-image: url("./images/heart.png");
              background-size: 16px 16px;
              background-repeat: no-repeat;
              background-position: 0 -2px;
              text-indent: 16px;
              margin-right: 20px;
            }
            .replybox {
              background-image: url("./images/massage.png");
              background-repeat: no-repeat;
              background-position: 0 0px;
              background-size: 14px 12px;
              text-indent: 16px;
            }
          }
        }
        .picbox-formbox {
          width: 156px;
          height: 18px;
          display: flex;
          margin: 5px auto;
          justify-content: space-between;
          align-items: center;
          .love {
            font-size: 10px;
            color: #999999;
            background: url("./images/heart.png") no-repeat left;
            background-size: 16px;
            text-indent: 18px;
          }
          .timetext {
            height: 18px;
            line-height: 18px;
            font-size: 10px;
            font-family: "DINAlternate-Bold";
            font-weight: 400;
            color: rgba(153, 153, 153, 1);
            text-indent: 25px;
            display: flex;
            justify-content: space-between;
            &.taobao {
              background: url("../images/icon_tb.png") no-repeat left;
              background-size: 18px;
            }
            &.tmall {
              background: url("../images/icon_tmall.png") no-repeat left;
              background-size: 18px;
            }
            &.pdd {
              background: url("../images/icon_pdd.png") no-repeat left;
              background-size: 18px;
            }
            &.jd {
              background: url("../images/icon_jd.png") no-repeat left;
              background-size: 18px;
            }
          }
        }
      }
    }
  }
}
.loadmore {
  width: 375px;
  overflow: auto;
}
.load {
  margin: 50px auto 0;
  text-align: center;
  img {
    width: 120px;
    height: 120px;
  }
  .load-text {
    color: #666;
    font-size: 16px;
  }
}
</style>

<template>
  <div class="allsellbox">
    <div class="sellbox" ref="leftbox" v-if="leftList.length > 0">
      <div
        class="sellbox-sellitem"
        v-for="(item,index) in leftList"
        :key="`A${index}`"
        @click="toDetail(item)"
      >
        <div class="videopic">
           <img v-lazy="item.itemPicUrl" alt />
           <div v-if="item.type==='02'" class="playbtn"></div>
        </div>
        <div v-if="item.type==='02'" class="playnum">{{item.pvTimes}}人正在观看</div>
        <div :class="[item.type==='01'?'sellbox-sellitem-picbox':'sellbox-sellitem-vediobox']">
          <div :class="[item.type==='01'?'picbox-title':'vediobox-title']">{{item.itemName}}</div>
          <div :class="[item.type==='01'?'picbox-moneybox':'vediobox-moneybox']">
            <div class="money">
              <div class="moneylogo">￥</div>
              <div class="moneynum">{{item.finalPrice}}</div>
            </div>
            <div
              v-if="item.type==='01' && item.commissionAmount && item.commissionAmount!=='0.00'"
              class="getprice"
            >
              <div class="pricelogo"></div>
              <div class="pricebox">
                <div class="moneylogo">￥</div>
                {{item.commissionAmount}}
              </div>
            </div>
            <div
              v-if="item.type==='02' && item.couponAmount && item.couponAmount!=='0.00'"
              class="couponbox"
            >
              <div class="coupon">券:{{item.couponAmount}}元</div>
              <div
                class="commistion"
                v-if="item.commissionAmount && item.commissionAmount!=='0.00'"
              >奖{{item.commissionAmount}}元</div>
            </div>
          </div>
          <div :class="[item.type==='01'?'picbox-formbox':'vediobox-formbox']">
            <div
              class="timetext"
              :class="`
              ${item.platform === 'taobao'?' taobao':null}
              ${item.platform === 'tmall'?' tmall':null}
              ${item.platform === 'jingdong'?' jd':null}
              ${item.platform === 'pingduoduo'?' pdd':null}
              `"
            >{{checkPlatform(item.platform)}} | {{formatTime(item.publicTime)}}</div>
            <div class="love" v-if="item.type==='01'">{{item.favoriteTimes}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="sellbox" ref="rightbox" v-if="rightList.length > 0">
      <div
        class="sellbox-sellitem"
        v-for="(item,index) in rightList"
        :key="`B${index}`"
        @click="toDetail(item)"
      >
         <div class="videopic">
           <img v-lazy="item.itemPicUrl" alt />
           <div v-if="item.type==='02'" class="playbtn"></div>
        </div>
        <div v-if="item.type==='02'" class="playnum">{{item.pvTimes}}人正在观看</div>
        <div :class="[item.type==='01'?'sellbox-sellitem-picbox':'sellbox-sellitem-vediobox']">
          <div :class="[item.type==='01'?'picbox-title':'vediobox-title']">{{item.itemName}}</div>
          <div :class="[item.type==='01'?'picbox-moneybox':'vediobox-moneybox']">
            <div class="money">
              <div class="moneylogo">￥</div>
              <div class="moneynum">{{item.finalPrice}}</div>
            </div>
            <div
              v-if="item.type==='01' && item.commissionAmount && item.commissionAmount!=='0.00'"
              class="getprice"
            >
              <div class="pricelogo"></div>
              <div class="pricebox">
                <div class="moneylogo">￥</div>
                {{item.commissionAmount}}
              </div>
            </div>
            <div
              v-if="item.type==='02' && item.couponAmount && item.couponAmount!=='0.00'"
              class="couponbox"
            >
              <div class="coupon">券:{{item.couponAmount}}元</div>
              <div
                class="commistion"
                v-if="item.commissionAmount && item.commissionAmount!=='0.00'"
              >奖{{item.commissionAmount}}元</div>
            </div>
          </div>
          <div :class="[item.type==='01'?'picbox-formbox':'vediobox-formbox']">
            <div
              class="timetext"
              :class="`
              ${item.platform === 'taobao'?' taobao':null}
              ${item.platform === 'tmall'?' tmall':null}
              ${item.platform === 'jingdong'?' jd':null}
              ${item.platform === 'pingduoduo'?' pdd':null}
              `"
            >{{checkPlatform(item.platform)}} | {{formatTime(item.publicTime)}}</div>
            <div class="love" v-if="item.type==='01'">{{item.favoriteTimes}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="load" v-if="leftList.length === 0 && rightList.length === 0">
      <img src="../images/loading_home.gif" alt />
      <div class="load-text">加载中...</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sellList: [],
      leftList: [],
      rightList: [],
      allLoaded: false,
      loading: false,
      loadPage: 2
    }
  },
  created () { },
  mounted () {
    this.initData()
  },
  methods: {
    toDetail (item) {
      if (item.type === '01') {
        this.toPage('product2', { id: item.contentId, feedsLinkSource: item.feedsLinkSource, commissionAmount: item.commissionAmount })
      } else if (item.type === '02') {
        this.toPage('video', { id: item.contentId, feedsLinkSource: item.feedsLinkSource, commissionAmount: item.commissionAmount })
      } else if (item.type === '03') {
        // couponClickUrl
        this.goThirdPlatform(item.platform, item.couponClickUrl, (res) => {
          console.info('======callback, res=' + JSON.stringify(res))
          if (typeof res === 'string') {
            res = this.parseJSON(res)
          }
          if (!res.success) {
            if (res.data) {
              if (res.data.msgInfo === '1100') {
                return
              }
            }
            this.$toast(res.data.msgInfo)
          }
        })
      }
    },
    initData (refresh) {
      this.$http('GET', this.api.queryChosenFeedsList, {
        page: 1,
        pageSize: 10
      })
        .then(res => {
          if (res.data.success === true) {
            if (res.data.model.list != null) {
              this.sellList = res.data.model.list
              this.waterFall(refresh)
            } else {
              this.$toast('加载错误,请重试')
            }
          } else {
            this.$toast('加载错误,请重试')
          }
        })
        .catch(() => {
          this.$toast('加载错误,请重试')
        })
    },
    waterFall (refresh) {
      // 瀑布流布局
      if (this.sellList.length > 5) {
        let len = Math.floor((this.sellList.length - 2) / 2)
        if (refresh) {
          this.leftList = this.sellList.splice(0, len)
          this.rightList = this.sellList.splice(0, len)
        } else {
          this.leftList = this.leftList.concat(this.sellList.splice(0, len))
          this.rightList = this.rightList.concat(this.sellList.splice(0, len))
        }
        this.$nextTick(() => {
          if (
            this.$refs.leftbox.clientHeight - this.$refs.rightbox.clientHeight >
            0
          ) {
            this.rightList = this.rightList.concat(this.sellList.splice(0, 1))
          } else {
            this.leftList = this.leftList.concat(this.sellList.splice(0, 1))
          }
          this.$nextTick(() => {
            setTimeout(() => {
              if (
                this.$refs.leftbox.clientHeight -
                this.$refs.rightbox.clientHeight >
                0
              ) {
                this.rightList = this.rightList.concat(
                  this.sellList.splice(0, 1)
                )
              } else {
                this.leftList = this.leftList.concat(
                  this.sellList.splice(0, 1)
                )
              }
            }, 1500)
          })
        })
      } else {
        let len = Math.floor(this.sellList.length / 2)
        if (refresh) {
          this.leftList = this.sellList.splice(0, len)
          this.rightList = this.sellList.splice(0, len)
        } else {
          this.leftList = this.leftList.concat(this.sellList.splice(0, len))
          this.rightList = this.rightList.concat(this.sellList.splice(0, len))
        }
        if (this.sellList.length > 0) {
          this.leftList = this.leftList.concat(this.sellList)
        }
      }
    },
    loadMore () {
      if (this.allLoaded === true) {
        return
      }
      if (this.loading === true) {
        return
      } else {
        this.loading = true
      }
      this.$http('GET', this.api.queryChosenFeedsList, {
        page: this.loadPage,
        pageSize: 10
      })
        .then(res => {
          if (res.data.success === true) {
            if (res.data.model.list != null) {
              if (res.data.model.list.length > 0) {
                this.sellList = res.data.model.list
                this.loadPage = this.loadPage + 1
                this.loading = false
                this.waterFall()
              } else {
                this.loading = false
                this.allLoaded = true
              }
            } else {
              this.allLoaded = true
              this.loading = false
            }
          } else {
            this.loading = false
          }
        })
        .catch(() => {
          this.loading = false
        })
    },
    loadTop () {
      this.loadPage = 2
      this.allLoaded = false
      window.plus.webview.currentWebview().endPullToRefresh()
      // this.$nextTick(() => {
      //   this.initData(true)
      //   setTimeout(() => {
      //     // this.$refs.loadmore.onTopLoaded()
      //   }, 1000)
      // })
    }
  }
}
</script>
