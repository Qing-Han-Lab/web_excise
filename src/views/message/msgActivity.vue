<style lang="scss" scoped>
.msg-activity {
  background-color: #f7f7f7;
  position: absolute;
  top:0;
  left:0;
  right:0;
  bottom: 0;
  font-family: "PingFangSC-Regular";
  color: #333;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  .msg-activity-box {
    flex: 1;
    overflow: auto;
    padding: 20px 13px 0;
  }
  .msg-activity-box-item {
    margin-bottom: 10px;
    .item-date {
      height: 17px;
      line-height: 17px;
      font-family: "DINAlternate-Bold";
      font-size: 15px;
      margin-bottom: 4px;
    }
    .item-content {
      min-height: 62px;
      padding: 12px 0 0;
      background-color: #fff;
      border-radius: 4px;
      width: 349px;
      overflow: hidden;
      .item-content-title {
        font-size: 16px;
        margin-bottom: 2px;
        padding: 0 10px;
      }
      .item-content-tag {
        margin: 0;
        font-size: 12px;
        line-height: 20px;
        padding: 0 10px;
      }
      .item-content-image {
        width: 349px;
        height: 180px;
        img {
          width: 349px;
          height: 180px;
        }
      }
    }
  }
}
</style>
<template>
  <div class="msg-activity">
    <div
      class="msg-activity-box"
      v-infinite-scroll="init"
      :infinite-scroll-disabled="loading"
      infinite-scroll-immediate-check="false"
      infinite-scroll-distance="100"
      v-if="msgList.length > 0"
    >
      <div class="msg-activity-box-item" v-for="(item,index) in msgList" :key="index">
        <div class="item-date">{{formatTime(item.sendTime, 'YYYY-MM-DD HH:mm:ss')}}</div>
        <div class="item-content">
          <div class="item-content-title">{{item.title}}</div>
          <div class="item-content-tag"># {{item.content}} #</div>
          <div class="item-content-image" v-if="item.picUrl">
            <img :src="checkUrl(item.picUrl ? item.picUrl : '')" alt />
          </div>
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
  name: 'msgActivity',
  data () {
    return {
      msgList: [],
      nowpage: 1,
      allLoaded: false,
      loading: false
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      if (this.allLoaded) {
        return
      }
      if (this.loading === true) {
        return
      } else {
        this.loading = true
      }
      this.$http('GET', this.api.info, {
        page: this.nowpage,
        pageSize: 10,
        type: 'HD'
      }).then(res => {
        if (res.data.success === true) {
          if (res.data.model.list != null) {
            if (res.data.model.list.length > 0) {
              this.nowpage += 1
              this.$nextTick(() => {
                this.msgList = this.msgList.concat(res.data.model.list)
                this.readMessages(this.ids)
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
    }
  },
  computed: {
    ids () {
      return this.msgList.map((item) => {
        return item.isRead ? 0 : item.id
      }).filter((item) => {
        return item > 0
      })
    }
  }
}
</script>
