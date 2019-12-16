<style scoped>
*{
  margin: 0;
  padding: 0;
}
.allview{
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
}
.allview .topline{
  width: 100%;
  height: 1px;
  background: #f2f2f2;
}
::-webkit-input-placeholder {
  color: #ccc;
}
.allview input{
  width: 340px;
  height: 30px;
  margin: 76px auto 0px;
  border: none;
  border-bottom: 1px solid #fe7c9f;
  outline: none;
  display: block;
  font-size: 12px;
  color: #ff0069;
}
.allview .getbtn{
  width: 140px;
  height: 30px;
  background-image: linear-gradient(135deg, #f93579 0%, #fa1f6b 100%);
  border-radius: 15px;
  font-size: 14px;
  color: #fff;
  text-align: center;
  line-height: 30px;
  margin: 40px auto;
}
.allview .question{
  width: 317px;
  font-size: 12px;
  color: #333;
  font-weight: bold;
  margin: 0px auto;
}
.allview .answer{
  width: 317px;
  margin: 7px auto 0px;
  font-size: 12px;
  color: #666;
}
</style>

<template>
<div class='allview'>
  <div class="topline"></div>
  <input type="text" placeholder="在这里粘贴爆料商品链接" v-model="msg">
  <div class="getbtn" @click="getknock">粘贴并获取信息</div>
  <p class="question">怎么复制商品链接？</p>
  <p class="answer">在淘宝、天猫、京东、拼多多等APP的商品页面点击 "分享" 按钮，然后点击“复制”，再返回好价鼻子就可以粘贴了。</p>
</div>
</template>

<script>
export default {
  data () {
    return {
      send: {},
      msg: '',
      data: {}
    }
  },
  created () {
    var first = this.$route.query.first
    var second = this.$route.query.second
    this.send.first = parseInt(first)
    this.send.second = parseInt(second)
  },
  mounted () {
    if (this.$route.query.url) { // 是否快捷键进入
      let url = this.$route.query.url
      console.log(url)
      if (url) {
        this.msg = url
        this.getknock()
        this.makeEmptyUrl()
      }
    } else if (this.getClipbordText() !== '') {
      this.msg = this.getClipbordText()
    }
  },
  methods: {
    getData () {
      var type = this.send.first === 1 ? '01' : '03'
      var msgaddress = this.msg
      this.$http('POST', this.api.findTransferDetail, {
        goodSourceUrl: msgaddress,
        type: type
      }).then((res) => {
        if (res.data.success === true) {
          this.data = res.data.model
          var first = this.send.first
          var second = this.send.second
          var data = this.data
          // console.log(res)
          // this.$router.push({ path: 'sendknock1', query: { first: first, second: second, data: data } })
          this.msg = ''
          let formpage = 'knockgoodprice'
          if (this.$route.query.url) {
            formpage = 'product'
          }
          this.toPage('sendknock1', { first: first, second: second, data: data, formpage: formpage })
        } else {
          let msgInfo = res.data.msgInfo
          this.$toast(msgInfo)
        }
      })
    },
    getknock () {
      if (this.check()) {
        this.getData()
      } else {
        this.flag = true
        setTimeout(() => {
          this.flag = false
        }, 1500)
      }
    },
    check () {
      if (this.msg !== '') return true
      else return false
    },
    makeEmptyUrl () {
      this.$store.commit('makeEmptyUrl')
    }
  }
}
</script>
