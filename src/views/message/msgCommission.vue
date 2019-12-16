<style lang="scss" scoped>
.msg-commission {
  background-color: #f7f7f7;
  position: absolute;
  top:0;
  left:0;
  right:0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  /deep/ .titleBar {
    background: #fb2c68;
    .title {
      color: #fff;
    }
    .back-btn {
      background: url("./images/back_btn_white.png") center no-repeat;
      background-size: 10px 16px;
      background-position: 15px center;
    }
  }
  .commission-box {
    flex: 1;
    overflow: auto;
    padding: 10px;
    .commission-item {
      padding-top: 15px;
      padding-left: 10px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      background: #fff;
      height: 120px;
      border-radius: 4px;
      font-family: "PingFangSC-Regular";
      line-height: 17px;
      font-size: 11px;
      color: rgba(51, 51, 51, 0.9);
      margin-bottom: 6px;
      .commission-item-avatar {
        width: 75px;
        text-align: center;
        img {
          width: 53px;
          height: 53px;
          border-radius: 53px;
          padding: 0;
          margin: 0;
          outline: none;
          border: 0;
        }
        .avatar-name {
          width: 75px;
        }
      }
      .commission-order {
        margin-left: 20px;
        .commission-order-id {
          span {
            width: 37px;
            height: 17px;
            display: inline-block;
            border-radius: 8px;
            border: solid 1px #9462ff;
            color: #9462ff;
            text-align: center;
          }
        }
        p {
          margin: 0;
          color: rgba(51, 51, 51, 0.6);
        }
        .commission-order-mark {
          display: flex;
          text-align: center;
          font-size: 10px;
          margin-top: 10px;
          .commission-order-mark-by {
            width: 50px;
            height: 16px;
            background: #fef0ed;
            border-radius: 2px;
            color: #fe0440;
          }
          .commission-order-mark-from {
            padding: 0 5px;
            height: 16px;
            margin: 0 5px 0 10px;
            background: #fef0ed;
            border-radius: 2px;
            color: #fd520b;
          }
          .commission-order-mark-sign {
            width: 15px;
            height: 15px;
            &.from-jd {
              background: url("./images/from_jd.png") center no-repeat;
              background-size: 100%;
            }
            &.from-pdd {
              background: url("./images/from_pdd.png") center no-repeat;
              background-size: 100%;
            }
            &.from-tb {
              background: url("./images/from_tb.png") center no-repeat;
              background-size: 100%;
            }
          }
        }
      }
      .commission-income {
        margin-top: 20px;
        margin-right: 11px;
        text-align: center;
        color: #fe0440;
        font-size: 16px;
        margin-left: auto;
        min-width: 50px;
        line-height: 25px;
        span {
          line-height: 14px;
          font-size: 9px;
          display: block;
        }
      }
    }
  }
  .commission-box::-webkit-scrollbar {
    display: none;
  }
}
</style>
<template>
  <div class="msg-commission">
    <div
      class="commission-box"
      v-infinite-scroll="getData"
      :infinite-scroll-disabled="loading"
      infinite-scroll-distance="100"
      infinite-scroll-immediate-check="false"
      v-if="commisstionMsg.length > 0"
    >
      <div class="commission-item" v-for="(item,index) in commisstionMsg" :key="index">
        <div class="commission-item-avatar">
          <!--  <img src="../../assets/avatar.png" alt> -->
          <img v-if="item.senderUserId && item.senderUserId.headUrl" :src="checkUrl(item.senderUserId.headUrl)" alt />
          <img v-else src="../../assets/userhead.png" alt="">
          <div class="avatar-name" v-if="item.senderUserId">{{item.senderUserId.nickName}}</div>
          <div class="avatar-name" v-else>系统</div>
        </div>
        <div class="commission-order">
          <div class="commission-order-id">
            订单编号：{{item.orderId}}
            <span
              @click="copyOrder(item.orderId)"
            >复制</span>
          </div>
          <p>下单时间：{{formatTime(item.sendTime, 'YYYY-MM-DD HH:mm:ss')}}</p>
          <p>下单金额：{{item.orderAmount}}元</p>
          <p>收货后次月25号后可提现</p>
          <div class="commission-order-mark">
            <div class="commission-order-mark-by">{{item.isMySelf?'自己出单':'粉丝出单'}}</div>
            <div class="commission-order-mark-from">{{platForm(item.platform)}}</div>
            <div class="commission-order-mark-sign" :class="classForm(item.platform)"></div>
          </div>
        </div>
        <div class="commission-income">
          <span>预计收益</span>
          ＋{{item.commissionAmount}}
        </div>
      </div>
    </div>
    <div class="nothing" v-else>
      <div class="nothing-text">没有任何消息</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'msgCommission',
  data () {
    return {
      commissionList: [],
      commisstionMsg: [],
      nowpage: 1,
      allLoaded: false,
      loading: false
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData: function () {
      if (this.allLoaded) {
        return
      }
      if (this.loading === true) {
        return
      } else {
        this.loading = true
      }
      this.$http('GET', this.api.getMsg, {
        page: this.nowpage,
        pageSize: 15,
        type: 'YJ'
      }).then(res => {
        if (res.data.success === true) {
          if (res.data.model.list != null) {
            if (res.data.model.list.length > 0) {
              this.nowpage += 1
              this.$nextTick(() => {
                this.commisstionMsg = this.commisstionMsg.concat(
                  res.data.model.list
                )
                this.$nextTick(() => {
                  this.readMessages(this.ids)
                })
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
    },
    readMessages (ids) {
      if (this.ids.length > 0) {
        this.$http('GET', this.api.readMessages, {
          messageIds: ids.toString()
        })
      }
    },
    platForm (plat) {
      let result = ''
      switch (plat) {
        case 'taobao':
          result = '淘宝下单'
          break
        case 'jingdong':
          result = '京东下单'
          break
        case 'pingduoduo':
          result = '拼多多下单'
          break
        default:
      }
      return result
    },
    classForm (plat) {
      let platClass = ''
      switch (plat) {
        case 'taobao':
          platClass = 'from-tb'
          break
        case 'jingdong':
          platClass = 'from-jd'
          break
        case 'pingduoduo':
          platClass = 'from-pdd'
          break
        default:
      }
      return platClass
    },
    copyOrder (text) {
      this.setClipbordText(text)
      this.$toast('订单编号已复制到您的剪切板')
    }
  },
  computed: {
    ids () {
      return this.commisstionMsg.map((item) => {
        return item.isRead ? 0 : item.id
      }).filter((item) => {
        return item > 0
      })
    }
  }
}
</script>
