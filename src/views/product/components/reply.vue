<style lang="scss" scoped>
.re {
  .reply-title {
    margin-left: 13px;
    height: 30px;
    line-height: 30px;
    font-family: "PingFangSC-Medium";
    font-size: 16px;
    color: #333333;
    background: rgba(247, 247, 247, 1);
  }
  .reply {
    padding: 10px 10px;
    .reply-item {
      margin-top: 15px;
      .reply-item-box {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
      }
      .reply-item-left {
        width: 30px;
        height: 30px;
        img {
          width: 30px;
          height: 30px;
        }
      }
      .reply-item-right {
        margin-left: 7px;
        flex: 1;
        .reply-item-right-name {
          font-family: "PingFangSC-Medium";
          font-size: 16px;
          color: #333333;
          line-height: 30px;
        }
        .reply-item-right-content {
          font-family: "PingFangSC-Medium";
          font-size: 14px;
          color: #666666;
        }
        .reply-item-right-widget {
          margin-top: 7px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          font-family: "PingFangSC-Medium";
          font-size: 12px;
          color: #999999;
        }
        .reply-item-right-reply {
          margin-top: 15px;
          padding: 6px;
          background-color: #f7f7f7;
          border-radius: 1px;
          .reply-item-right-reply-name {
            font-family: "PingFangSC-Medium";
            font-size: 12px;
            color: #5c8db9;
          }
          .reply-item-right-reply-content {
            padding-left: 10px;
            font-family: "PingFangSC-Medium";
            font-size: 12px;
            color: #666666;
          }
          .reply-item-right-reply-box {
            width: 294px;
            height: 12px;
            line-height: 12px;
            margin: 14px auto 0px;
            font-size: 10px;
            color: #999999;
            display: flex;
            justify-content: space-between;
          }
          .reply-item-right-reply-xian {
            width: 292px;
            height: 2px;
            margin: 11px auto;
            background-color: #f0f0f0;
          }
          .reply-item-right-reply-more {
            height: 12px;
            line-height: 12px;
            margin: 0px auto;
            font-size: 10px;
            color: #999999;
            text-align: center;
          }
        }
      }
      .reply-item-right-reply-xian {
        width: 292px;
        height: 2px;
        margin: 11px auto 15px;
        background-color: #f0f0f0;
      }
    }
    .reply-item-all {
      height: 12px;
      line-height: 12px;
      margin: 0px auto;
      font-size: 10px;
      color: #999999;
      text-align: center;
      margin-bottom: 10px;
    }

    .reply-more {
      margin-top: 25px;
      margin-bottom: 20px;
      font-family: "PingFangSC-Medium";
      font-size: 12px;
      color: #999999;
      text-align: center;
    }
  }
}
</style>

<template>
  <div class="re" v-if="recommendList.length > 0">
    <div class="reply-title">评论「{{content.commentTimes}}」</div>
    <div class="reply">
      <div class="reply-item" v-for="(item, index) in recommendList" :key="index">
        <div class="reply-item-box">
          <div class="reply-item-left">
            <img
              :src="item.sendUser.headUrl ? item.sendUser.headUrl : '../../../assets/userhead.png'"
              alt
            />
          </div>
          <div class="reply-item-right">
            <div class="reply-item-right-name">{{item.sendUser.nickName}}</div>
            <div class="reply-item-right-content">{{item.comment}}</div>
            <div class="reply-item-right-widget">
              <div class="reply-item-right-widget-time">{{formatTime(item.time)}}</div>
              <div
                class="reply-item-right-widget-reply"
                @click="toReplyPeople(item.commentId, item.sendUser.userId, item.sendUser.nickName, index, item.contentId)"
              >回复</div>
            </div>

            <div class="reply-item-right-reply" v-if="item.replies.length !== 0">
              <div
                class="reply-item-right-reply-item"
                v-for="(itemize, number) in item.replies"
                :key="number"
              >
                <div>
                  <span class="reply-item-right-reply-name">{{itemize.sendUser.nickName}}</span>
                  <span class="reply-item-right-reply-content">{{itemize.reply}}</span>
                </div>
                <div class="reply-item-right-reply-box">
                  <div class="reply-item-right-reply-box-date">{{formatTime(itemize.replyTime)}}</div>
                  <div
                    class="reply-item-right-reply-box-huifu"
                    @click="toReplyPeople(item.commentId, itemize.sendUser.userId, itemize.sendUser.nickName, index, item.contentId, number)"
                  >回复</div>
                </div>
                <div class="reply-item-right-reply-xian" v-if="number!==item.replies.length-1"></div>
              </div>
              <!-- <div class="reply-item-right-reply-more" @click='showhidden'>查看更多回复</div> -->
            </div>
          </div>
        </div>
        <div class="reply-item-right-reply-xian" v-if="recommendList.length > 3"></div>
      </div>
      <div
        class="reply-item-all"
        v-if="recommendList.length > 3 && recommendList.length < 21"
        @click="showMoreReply"
      >查看更多评论</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['content'],
  data () {
    return {
      flag: false,
      recommendList: []
    }
  },
  created () {
    this.getReplyInfo()
  },
  methods: {
    showhidden () {
      this.flag = true
    },
    toReplyPeople (commentId, userId, nickName, index, contentId) {
      this.$store.commit('saveState', {
        name: 'replyUser',
        data: {
          userId,
          nickName,
          commentId,
          index,
          contentId
        }
      })
      this.$store.commit('saveState', {
        name: 'sendShow1',
        data: true
      })
      this.$nextTick(() => {
        this.$parent.$refs.input1.focus()
      })
    },
    getReplyInfo () {
      this.$http('GET', this.api.queryComment, {
        contentId: this.$route.query.id,
        limit: 3,
        offset: 0
      }).then(res => {
        console.log(res.data)
        if (res.data.success === true) {
          // 正常请求
          this.recommendList = res.data.model
        }
      })
    },
    showMoreReply () {
      this.$http('GET', this.api.queryComment, {
        contentId: this.$route.query.id,
        limit: 20,
        offset: 0
      }).then(res => {
        console.log(res.data)
        if (res.data.success === true) {
          // 正常请求
          this.recommendList = res.data.model
        }
      })
    },
    sendComment (text) {
      let obj = {
        content: text,
        contentId: this.$route.query.id,
        commentId: ''
      }
      // 评论回复判定
      if (this.$store.state.replyUser.userId) {
        // 回复
        obj.content = `回复 \r\b ${this.$store.state.replyUser.nickName}\n\b ${
          obj.content
        }`
        obj.userId = this.$store.state.replyUser.userId
        obj.commentId = this.$store.state.replyUser.commentId
      }
      this.$http('POST', this.api.sendComment, obj).then(
        res => {
          if (res.data.success === true) {
            if (this.$store.state.replyUser.userId) {
              this.refreshItem(res.data.model)
            } else {
              this.recommendList.unshift(res.data.model)
              this.$store.dispatch('clearReplyState')
            }
          } else {
            this.$toast(res.data.msgInfo)
          }
        },
        error => {
          console.info(error)
          this.$store.dispatch('clearReplyState')
        }
      )
    },
    refreshItem (model) {
      this.recommendList[this.$store.state.replyUser.index].replies.unshift(
        model
      )
      this.$store.dispatch('clearReplyState')
    }
  }
}
</script>
