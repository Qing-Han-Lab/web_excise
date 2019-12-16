<style scoped lang="scss">
.allview{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.allview .commentbox{
  flex: 1;
  width: 100%;
  overflow: auto;
  width: 100%;
  .commentbox-title{
    width: 100%;
    height: 25px;
    background: #F7F7F7;
    padding: 5px 14px;
    box-sizing: border-box;
    font-family: 'SourceHanSansSC';
    font-weight:500;
    color:rgba(153,153,153,1);
    font-size: 14px;
  }
}
.allview .inputbox{
  width: 100%;
  height: 50px;
  overflow: hidden;
  padding: 0px 14px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  input{
    width: 276px;
    padding-left: 15px;
    height: 31px;
    background:rgba(247,247,247,1);
    border: 0px;
    outline: none;
    border-radius:4px;
    color: #ccc;
    font-size: 14px;
  }
  .smell_logo{
    width: 26px;
    height: 26px;
    background-image: url("./images/smellface.png");
    background-size: 100% 100%;
  }
  .sendbtn{
    width:39px;
    height:23px;
    background:rgba(255,255,255,1);
    border-radius:4px;
    border:1px solid rgba(204,204,204,1);
    color: #ccc;
    font-size: 14px;
    text-align: center;
    line-height: 23px;
  }
}
.inputbox input::-webkit-input-placeholder{
  color: #ccc;
}
</style>

<template>
<div class='allview'>
  <div class="commentbox">
    <div class="commentbox-title">全部评论「{{commentTimes}}」</div>
    <Reply v-if="changeStatus === true" :saleId='contentId' @send=setData></Reply>
  </div>
  <div class="inputbox">
    <input type="text" placeholder="是时候发表评论了" v-model="content">
    <div class="sendbtn" @click="sendComment">发送</div>
  </div>
</div>
</template>

<script>
import Reply from './components/reply2'
export default {
  data () {
    return {
      changeStatus: true,
      content: '',
      userId: 0,
      contentId: 0,
      commentId: '',
      nickName: '',
      commentTimes: 0
    }
  },
  created () {
    this.contentId = this.$route.query.id
    this.commentTimes = this.$route.query.commentTimes
  },
  methods: {
    setData (userId, commentId, nickName) {
      this.userId = userId
      this.commentId = commentId
      this.nickName = nickName
      document.getElementsByTagName('input')[0].focus()
      this.content = '回复 ' + this.nickName + ' '
    },
    sendComment () {
      let obj = {}
      obj.content = this.content
      obj.contentId = this.$route.query.id
      obj.commentId = ''
      if (this.userId) {
        obj.userId = this.userId
        obj.commentId = this.commentId
      }
      this.$http('GET', this.api.sendComment, obj).then((res) => {
        if (res.data.success === true) {
          this.changeStatus = false
          this.$nextTick(() => {
            this.changeStatus = true
            this.commentTimes = parseInt(this.commentTimes) + 1
          })
        }
        this.userId = 0
        this.commentId = ''
        this.content = ''
      })
    }
  },
  components: {
    Reply
  }
}
</script>
