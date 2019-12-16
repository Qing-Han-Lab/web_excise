<style lang="scss" scoped>
.message {
  background-color: #f7f7f7;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  .message-wrap {
    flex: 1;
    overflow: auto;
  }
  .message-toolbar {
    width: 287px;
    height: 101px;
    padding: 0 31px;
    background-color: #fff;
    border-radius: 4px;
    display: flex;
    margin: 13px auto;
    font-family: "PingFangSC-Regular";
    font-size: 11px;
    color: rgba(51, 51, 51, 0.6);
    text-align: center;
    align-items: center;
    justify-content: space-between;
    .toolbar-item {
      position: relative;
      img {
        width: 41px;
        height: 41px;
      }
      .item-title {
        margin-top: 4px;
        line-height: 18px;
      }
      .toolbar-item-point {
        position: absolute;
        top: 0;
        right: 0;
        width: 10px;
        height: 10px;
        border-radius: 10px;
        background-color: red;
      }
    }
  }
  .message-box {
    .message-box-title {
      font-family: "PingFangSC-Regular";
      font-size: 15px;
      padding: 0 14px 7px;
    }
    .message-box-content {
      padding: 0 10px;
      .message-box-content-item {
        padding: 6px 15px 8px 6px;
        background: #fff;
        border-radius: 4px;
        display: flex;
        align-content: center;
        margin-bottom: 6px;
        .message-box-content-item-imgage {
          width: 81px;
          height: 81px;
          line-height: 0;
          padding: 0;
          margin: 0;
          img {
            width: 100%;
            height: 100%;
            border: 0;
          }
        }
        .message-box-content-item-info {
          width: 244px;
          font-family: "AppleSystemUIFont";
          color: rgba(51, 51, 51, 0.6);
          margin-left: 10px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .info-title {
            font-family: "PingFangSC-Regular";
            font-size: 14px;
            color: #333;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .info-description {
            font-size: 11px;
            margin: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .info-expand {
            display: flex;
            font-size: 11px;
            justify-content: space-between;
            .info-expand-sale {
              font-family: "DINAlternate-Bold";
              span {
                font-family: "PingFangSC-Regular";
                font-size: 10px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
<template>
  <div class="message">
    <TitleBar
      title="消息"
      toolName="提醒设置"
      :isShare="isShare"
      :isNeedTool="isNeedTool"
      :toolClick="toolFun"
    ></TitleBar>
    <div
      class="message-wrap"
      v-infinite-scroll="loadMore"
      :infinite-scroll-disabled="loading"
      infinite-scroll-distance="100"
      infinite-scroll-immediate-check="false"
    >
      <div class="message-toolbar">
        <div class="toolbar-item item-icon-commission" @click="toPage('msgCommission')">
          <img src="./images/icon_commission.png" alt />
          <div class="item-title">佣金通知</div>
          <div class="toolbar-item-point" v-if="msgStatus[0]"></div>
        </div>
        <div class="toolbar-item item-icon-fans" @click="toPage('msgFans')">
          <img src="./images/icon_fans.png" alt />
          <div class="item-title">粉丝加入通知</div>
          <div class="toolbar-item-point" v-if="msgStatus[1]"></div>
        </div>
        <div class="toolbar-item item-icon-activity" @click="toPage('msgActivity')">
          <img src="./images/icon_activity.png" alt />
          <div class="item-title">系统消息</div>
          <div class="toolbar-item-point" v-if="msgStatus[2]"></div>
        </div>
      </div>
      <div class="message-box">
        <div class="message-box-title">爆款商品通知</div>
        <div class="message-box-content" v-if="messageList.length > 0">
          <div class="message-box-content-item" v-for="(item,index) in messageList" :key="index">
            <div class="message-box-content-item-imgage">
              <img :src="item.goodsUrl" />
            </div>
            <div class="message-box-content-item-info">
              <div class="info-title">{{item.title}}</div>
              <p class="info-description">{{item.content}}~</p>
              <div class="info-expand">
                <div class="info-expand-date">{{formatTime(item.sendTime, 'YYYY-MM-DD HH:mm:ss')}}</div>
                <div class="info-expand-sale">
                  <span>已抢:</span>
                  {{item.goodsSales}}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="nothing" v-else>
          <div class="nothing-text">没有发现通知</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'message',
  data () {
    return {
      isShare: false,
      isNeedTool: true,
      msgStatus: [false, false, false],
      messageList: [],
      allLoaded: false,
      messagePage: 2,
      loading: false
    }
  },
  mounted () {
    this.init()
    this.isNewMessages('YJ')
    this.isNewMessages('FS')
    this.isNewMessages('HD')
  },
  methods: {
    init () {
      this.$http('GET', this.api.info, {
        page: 1,
        pageSize: 10,
        type: 'PK'
      }).then(res => {
        if (res.data.success === true) {
          if (res.data.model.list != null) {
            this.messageList = this.messageList.concat(res.data.model.list)
          }
        }
      })
    },
    isNewMessages (type) {
      this.$http('GET', this.api.isNewMessages, {
        type: type
      }).then(res => {
        if (res.data.success === true) {
          if (res.data.model > 0) {
            if (type === 'YJ') {
              this.msgStatus[0] = true
            } else if (type === 'FS') {
              this.msgStatus[1] = true
            } else if (type === 'HD') {
              this.msgStatus[2] = true
            }
            this.msgStatus = [...this.msgStatus]
          }
        }
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
      this.$http('GET', this.api.info, {
        page: this.messagePage,
        pageSize: 10,
        type: 'PK'
      }).then(res => {
        if (res.data.success === true) {
          if (res.data.model.list != null) {
            if (res.data.model.list.length > 0) {
              this.messagePage++
              this.$nextTick(() => {
                this.messageList = this.messageList.concat(res.data.model.list)
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
    toolFun () {
      this.toPage('setting')
    }
  }
}
</script>
