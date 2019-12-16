<style lang="scss" scoped>
.msg-fans {
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
  font-family: "PingFangSC-Regular";
  color: #333;
  .msg-fans-box {
    flex: 1;
    overflow: auto;
    margin-top: 20px;
    padding: 0 13px;
    width: 349px;
  }
  .msg-fans-box::-webkit-scrollbar {
    display: none;
  }
  .msg-fans-box-item {
    margin-bottom: 10px;
    .item-date {
      height: 17px;
      line-height: 17px;
      font-family: 'DINAlternate-Bold';
      font-size: 15px;
      margin-bottom: 4px;
    }
    .item-content {
      min-height: 62px;
      padding: 12px 10px;
      background-color: #fff;
      border-radius: 4px;
      .item-content-title {
        font-size: 16px;
        margin-bottom: 12px;
      }
      p {
        margin: 0;
        font-size: 12px;
        line-height: 16px;
      }
    }
  }
}

</style>
<template>
  <div class="msg-fans">
    <div class="msg-fans-box"
      v-infinite-scroll="init"
      :infinite-scroll-disabled="loading"
      infinite-scroll-distance="100"
      infinite-scroll-immediate-check="false"
      v-if="msgList.length > 0"
    >
      <div class="msg-fans-box-item" v-for="(item,index) in msgList" :key="index">
        <div class="item-date">{{formatTime(item.sendTime, 'YYYY-MM-DD HH:mm:ss')}}</div>
        <div class="item-content">
          <div class="item-content-title">{{item.title}}</div>
          <p class="item-content-description">{{item.content}}</p>
        </div>
      </div>
    </div>
    <div class="nothing" v-else>
      <div class="nothing-text">没有任何通知</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'msgFans',
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
        type: 'FS'
      }).then(res => {
        if (res.data.success === true) {
          if (res.data.model.list) {
            if (res.data.model.list.length > 0) {
              this.nowpage += 1
              this.$nextTick(() => {
                this.msgList = this.msgList.concat(res.data.model.list)
                let ids = []
                this.msgList.forEach(item => {
                  if (!item.isRead) {
                    ids.push(item.id)
                  }
                })
                console.info(ids)
                this.readMessages(ids)
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
      console.info('=====' + ids)
      if (ids.length > 0) {
        this.$http('GET', this.api.readMessages, {
          messageIds: ids.toString()
        })
      }
    }
  },
  computed: {
  }
}
</script>
