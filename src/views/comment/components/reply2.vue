<style lang="scss" scoped>
.reply {
  padding: 0 10px;
  .reply-title {
    padding-top: 17px;
    font-family: "PingFangSC-Medium";
    font-size: 16px;
    color: #333333;
  }
  .reply-item {
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
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
          font-size: 16px;
          color: #5c8db9;
        }
        .reply-item-right-reply-content {
          padding-left: 10px;
          font-family: "PingFangSC-Medium";
          font-size: 14px;
          color: #666666;
        }
        .timereplybox{
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: nowrap;
          color: #999;
          font-size: 12px;
          padding: 10px 0px 16px;
          border-bottom: 2px solid #f0f0f0;
          margin-bottom: 10px;
        }
        .closeallreply{
          color: #999;
          font-size: 12px;
          text-align: center;
          display: block;
          margin: 0px auto;
          padding: 15px 0px;
        }
      }
    }
  }
  .reply-more {
    margin-top: 25px;
    margin-bottom: 20px;
    font-family: 'PingFangSC-Medium';
    font-size: 12px;
    color: #999999;
    text-align: center;
  }
}
</style>

<template>
  <div class="reply">
    <div class="reply-item" v-for="(item,index) in commentList" :key="index">
      <div class="reply-item-left">
        <img :src="item.sendUser.headUrl ? item.sendUser.headUrl : '../../../assets/userhead.png'" alt />
      </div>
      <div class="reply-item-right">
        <div class="reply-item-right-name">{{item.sendUser.nickName}}</div>
        <div class="reply-item-right-content">{{item.comment}}</div>
        <div class="reply-item-right-widget">
          <div class="reply-item-right-widget-time">{{formatTime(item.time)}}</div>
          <div class="reply-item-right-widget-reply" @click="toReply(item.commentId, item.sendUser.userId, item.sendUser.nickName)">回复</div>
        </div>
        <div class="reply-item-right-reply" v-if="item.replies.length>0">
          <div class="reply-item-right-reply-item" v-for="(itemize,number) in item.replies" :key="number">
            <div @click="toReply(item.commentId, itemize.sendUser.userId, itemize.sendUser.nickName)">
              <span class="reply-item-right-reply-name">{{itemize.sendUser.nickName}}</span>
              <span class="reply-item-right-reply-content">{{itemize.reply}}</span>
              <div class="timereplybox">
                <div class="time">{{itemize.replyTime ? formatTime(itemize.replyTime) : ''}}</div>
              </div>
            </div>
          </div>
          <span class="closeallreply">收起所有回复</span>
        </div>
      </div>
    </div>
    <div class="reply-more">查看更多↓</div>
  </div>
</template>

<script>
export default {
  props: {
    saleId: {
      default: '',
      type: String
    }
  },
  data () {
    return {
      hackReset: true,
      commentList: [],
      page: 1,
      pageSize: 10
    }
  },
  created () {
    this.getComment()
  },
  methods: {
    toReply (commentId, userId, nickName) {
      this.$emit('send', userId, commentId, nickName)
    },
    getComment () {
      this.$http('GET', this.api.queryComment, {
        contentId: this.saleId,
        limit: this.pageSize,
        offset: (this.page - 1) * this.pageSize
      }).then((res) => {
        if (res.data.success === true) {
          this.commentList = this.commentList.concat(res.data.model)
          this.page++
        }
      })
    }
  },
  filters: {
    getRightTime (timeNum) {
      if (timeNum !== null) {
        timeNum = parseInt(timeNum)
        let time = new Date(timeNum)
        let month = time.getMonth() + 1
        let day = time.getDate()
        let hour = time.getHours()
        let minutes = time.getMinutes()
        return month + '-' + day + ' ' + hour + ':' + minutes
      }
    }
  }
}
</script>
