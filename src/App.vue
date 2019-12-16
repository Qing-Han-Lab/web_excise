<style>
#app {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
}
</style>

<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  created () {
    window.showSearch = () => {
      let clipbordtext = this.getClipbordText()
      if (clipbordtext) {
        this.$http('GET', this.api.popLayer, {
          content: clipbordtext,
          extParams: {}
        }).then(res => {
          if (res.data.success) {
            let data = res.data.model
            if (data.isPop) {
              if (data.popType === 'SCH') {
                this.$search.show(data.content, false)
              } else {
                this.$search.show(data.content, true)
              }
              this.setClipbordText('')
            }
          }
        })
      }
    }
  },
  mounted () {
    if (window.plus) {
      // 监听系统通知栏消息点击事件
      window.plus.push.addEventListener('click', this.clickMsg, false)
      // 监听接收透传消息事件
      window.plus.push.addEventListener('receive', this.receiveMsg, false)
    } else {
      document.addEventListener(
        'plusready',
        () => {
          // 监听系统通知栏消息点击事件
          window.plus.push.addEventListener('click', this.clickMsg, false)
          // 监听接收透传消息事件
          window.plus.push.addEventListener('receive', this.receiveMsg, false)
        },
        false
      )
    }
  },
  methods: {
    clickMsg (msg) {
      if (msg.payload.page) {
        this.toPage(msg.payload.page)
      }
    },
    receiveMsg (msg) {
      console.log(msg)
    }
  }
}
</script>
