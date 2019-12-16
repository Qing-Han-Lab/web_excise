<style scoped lang='scss'>
.searchresultbox {
  width: 100%;
  height: 100%;
  overflow: auto;
  background: #f7f7f7;
  .searchsellbox {
    width: 100%;
    background: #f7f7f7;
    display: flex;
    padding: 0 10px;
    padding-top: 8px;
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
        overflow: hidden;
        border-radius: 4px;
        .playnum {
          padding: 0 15px;
          height: 16px;
          background-image: url("../../home/components/images2/video_plays.gif");
          background-size: 14px 14px;
          background-repeat: no-repeat;
          background-position: right center;
          background-color: rgba(0, 0, 0, 0.3);
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
        .imgbox {
          position: relative;
          width: 100%;
          img {
            width: 100%;
            height: auto;
          }
          .playbtn {
          width: 30px;
          height: 30px;
          background-image: url("./img/play.png");
          background-size: 100% 100%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
          z-index: 10;
         }
        }
        .sellbox-sellitem-vediobox {
          width: 100%;
          border-radius: 4px;
          .vediobox-title {
            width: 156px;
            height: 19px;
            font-size: 12px;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin: 5px auto 0px;
          }
          .vediobox-moneybox {
            margin: 9px auto 0px;
            height: 21px;
            width: 156px;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
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
                font-size: 22px;
                font-family: "DINAlternate-Bold";
                font-weight: bold;
                color: rgba(251, 44, 104, 1);
              }
            }
            .couponbox {
              display: flex;
              justify-content: center;
              align-items: center;
              .coupon {
                width: 36px;
                height: 14px;
                background: #fb2c68;
                text-align: center;
                line-height: 14px;
                font-size: 8px;
                font-weight: 500;
                color: #fff;
                margin-right: 14px;
                padding: 2px 3px;
                margin-right: 5px;
              }
              .commistion {
                padding: 2px 3px;
                border: 1px solid pink;
                text-align: center;
                line-height: 15px;
                color: #fb2c68;
                font-size: 8px;
                font-weight: 500;
              }
            }
          }
          .vediobox-formbox {
            width: 156px;
            height: 18px;
            margin: 5px auto;
            .formandtime {
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              .formpic {
                width: 18px;
                height: 18px;
                margin-right: 5px;
                img {
                  width: 100%;
                }
              }
              .timetext {
                font-size: 10px;
                font-weight: 400;
                color: rgba(153, 153, 153, 1);
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
            font-size: 12px;
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
                font-size: 22px;
                font-family: "DINAlternate-Bold";
                font-weight: bold;
                color: rgba(251, 44, 104, 1);
              }
            }
            .massagebox {
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 10px;
              font-weight: 400;
              color: rgba(153, 153, 153, 1);
              .likebox {
                background-image: url("./img/heart.png");
                background-size: 16px 16px;
                background-repeat: no-repeat;
                background-position: 0 -2px;
                text-indent: 16px;
                margin-right: 8px;
              }
              .replybox {
                background-image: url("./img/massage.png");
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
            .formandtime {
              display: flex;
              justify-content: flex-start;
              align-items: center;
              .formpic {
                width: 18px;
                height: 18px;
                margin-right: 5px;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              .timetext {
                font-size: 10px;
                color: rgba(153, 153, 153, 1);
              }
            }
            .getprice {
              display: flex;
              justify-content: space-between;
              align-items: flex-end;
              .pricebox {
                display: flex;
                justify-content: center;
                align-items: flex-end;
                font-size: 14px;
                font-family: "DINAlternate-Bold";
                font-weight: bold;
                color: rgba(252, 89, 104, 1);
                .moneylogo {
                  width: 16px;
                  height: 16px;
                  background-image: url("./img/icon_price.png");
                  background-size: 16px 16px;
                }
                .moneyicon {
                  font-size: 10px;
                }
              }
            }
          }
        }
      }
    }
  }
  .sellnone {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 18px;
    &.makedown {
      margin-top: 100px;
    }
    .sellnone-back {
      width: 142px;
      height: 167px;
      background-image: url("./img/searchNone.png");
      background-size: 100% 100%;
    }
    .sellnone-text {
      color: #666;
      font-size: 12px;
    }
    .sellnone-searchbtn {
      width: 110px;
      height: 30px;
      background: rgba(251, 44, 104, 1);
      border-radius: 15px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 13px;
      .searchlogo {
        width: 18px;
        height: 18px;
        background-image: url("./img/searchLogo.png");
        background-size: 100% 100%;
      }
      .searchtext {
        width: 55px;
        height: 18px;
        background-image: url("./img/toSearch.png");
        background-size: 100% 100%;
      }
    }
  }
}
</style>

<template>
  <div class="searchresultbox" @scroll="addMore($event)">
    <div class="searchsellbox">
      <div class="sellbox" ref="leftbox">
        <div
          class="sellbox-sellitem"
          v-for="(item,index) in leftList"
          :key="`A${index}`"
          @click="toDetail(item)"
        >
          <div class="imgbox">
            <img v-lazy="item.itemPicUrl" alt />
            <div v-if="item.type==='02'" class="playbtn"></div>
          </div>
          <div v-if="item.type==='02'" class="playnum">{{item.pvTimes}}次播放</div>
          <div :class="[item.type==='01'?'sellbox-sellitem-picbox':'sellbox-sellitem-vediobox']">
            <div :class="[item.type==='01'?'picbox-title':'vediobox-title']">{{item.itemName}}</div>
            <div :class="[item.type==='01'?'picbox-moneybox':'vediobox-moneybox']">
              <div class="money">
                <div class="moneylogo">￥</div>
                <div class="moneynum">{{item.finalPrice}}</div>
              </div>
              <div v-if="item.type==='01'" class="massagebox">
                <div class="likebox" v-if="item.type!=='02'">{{item.favoriteTimes}}</div>
                <div class="replybox">{{item.commentTimes}}</div>
              </div>
              <div
                v-else-if="item.type==='02' && item.couponAmount && item.couponAmount!=='0.00'"
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
              <div class="formandtime">
                <div class="formpic">
                  <img v-if="item.platform === 'taobao'" src="../../home/images/icon_tb.png" alt />
                  <img v-if="item.platform === 'tmall'" src="../../home/images/icon_tmall.png" alt />
                  <img v-if="item.platform === 'jingdong'" src="../../home/images/icon_jd.png" alt />
                  <img
                    v-if="item.platform === 'pingduoduo'"
                    src="../../home/images/icon_pdd.png"
                    alt
                  />
                </div>
                <div
                  class="timetext"
                >{{checkPlatform(item.platform)}} | {{formatTime(item.publicTime)}}</div>
              </div>
              <div
                v-if="item.type==='01' && item.commissionAmount && item.commissionAmount!=='0.00'"
                class="getprice"
              >
                <div class="pricebox">
                  <div class="moneylogo"></div>
                  <div class="moneyicon">￥</div>
                  {{item.commissionAmount}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sellbox" ref="rightbox">
        <div
          class="sellbox-sellitem"
          v-for="(item,index) in rightList"
          :key="`B${index}`"
          @click="toDetail(item)"
        >
          <div class="imgbox">
            <img v-lazy="item.itemPicUrl" alt />
            <div v-if="item.type==='02'" class="playbtn"></div>
          </div>
          <div v-if="item.type==='02'" class="playnum">{{item.pvTimes}}次播放</div>
          <div :class="[item.type==='01'?'sellbox-sellitem-picbox':'sellbox-sellitem-vediobox']">
            <div :class="[item.type==='01'?'picbox-title':'vediobox-title']">{{item.itemName}}</div>
            <div :class="[item.type==='01'?'picbox-moneybox':'vediobox-moneybox']">
              <div class="money">
                <div class="moneylogo">￥</div>
                <div class="moneynum">{{item.finalPrice}}</div>
              </div>
              <div v-if="item.type==='01'" class="massagebox">
                <div class="likebox">{{item.favoriteTimes}}</div>
                <div class="replybox">{{item.commentTimes}}</div>
              </div>
              <div
                v-else-if="item.type==='02' && item.couponAmount && item.couponAmount!=='0.00'"
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
              <div class="formandtime">
                <div class="formpic">
                  <img v-if="item.platform === 'taobao'" src="../../home/images/icon_tb.png" alt />
                  <img v-if="item.platform === 'tmall'" src="../../home/images/icon_tmall.png" alt />
                  <img v-if="item.platform === 'jingdong'" src="../../home/images/icon_jd.png" alt />
                  <img
                    v-if="item.platform === 'pingduoduo'"
                    src="../../home/images/icon_pdd.png"
                    alt
                  />
                </div>
                <div
                  class="timetext"
                >{{checkPlatform(item.platform)}} | {{formatTime(item.publicTime)}}</div>
              </div>
              <div
                v-if="item.type==='01' && item.commissionAmount && item.commissionAmount!=='0.00'"
                class="getprice"
              >
                <div class="pricebox">
                  <div class="moneylogo"></div>
                  <div class="moneyicon">￥</div>
                  {{item.commissionAmount}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sellnone makedown" v-if="leftList.length === 0 && rightList.length === 0">
      <div class="sellnone-back"></div>
      <div class="sellnone-text">没找到你想要的？试试看用商品搜索</div>
      <div class="sellnone-searchbtn" @click="toSearch">
        <div class="searchlogo"></div>
        <div class="searchtext"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    keywords: {
      type: String,
      default: ''
    },
    isSearch: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      sellList: [],
      leftList: [],
      rightList: [],
      sellnone: false,
      toDown: false,
      allLoaded: false,
      loading: false,
      page: 1
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    toSearch () {
      // 去一期登录页
      this.toPage(
        'search',
        { type: 'taobao', searchKey: this.keywords },
        'fade-in'
      )
    },
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
    addMore (e) {
      let div = e.target
      if (div.scrollHeight === div.scrollTop + div.clientHeight) {
        this.getData()
      }
    },
    getData () {
      if (this.allLoaded) {
        return
      }
      if (this.loading === true) {
        return
      } else {
        this.loading = true
      }
      this.$http('GET', this.api.queryList, {
        keyword: this.keywords,
        page: this.page,
        pageSize: 10
      }).then(res => {
        if (res.data.success) {
          let list = res.data.model.list
          if (list != null) {
            if (list.length > 0) {
              this.sellList = list
              this.page = this.page + 1
              this.$nextTick(() => {
                this.waterFall()
              })
            } else {
              this.$toast('没有更多了')
              this.allLoaded = true
            }
          } else {
            this.$toast('没有更多了')
            this.allLoaded = true
          }
        }
        this.loading = false
      })
    },
    waterFall () {
      // 瀑布流布局
      if (this.sellList.length > 5) {
        let len = Math.floor((this.sellList.length - 2) / 2)
        this.leftList = this.leftList.concat(this.sellList.splice(0, len))
        this.rightList = this.rightList.concat(this.sellList.splice(0, len))
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
        this.leftList = this.leftList.concat(this.sellList.splice(0, len))
        this.rightList = this.rightList.concat(this.sellList.splice(0, len))
        if (this.sellList.length > 0) {
          this.leftList = this.leftList.concat(this.sellList)
        }
      }
    }
  }
}
</script>
