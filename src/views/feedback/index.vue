<style lang="scss" scoped>
.feedback {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f7f7f7;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  .feedback-content {
    flex: 1;
    overflow: auto;
  }
  .text {
    margin: 25px;
    padding: 13px 17px;
    width: 299px;
    height: 227px;
    background-color: #ffffff;
    border-radius: 4px;
    border: solid 1px rgba(51, 51, 51, 0.15);
    outline: none;
    font-family: "SourceHanSansSC-Regular";
    font-size: 14px;
  }
  .subBtn {
    margin: 0 auto;
    width: 251px;
    height: 44px;
    line-height: 44px;
    background-image: linear-gradient(180deg, #ff4e82 0%, #fc356f 100%);
    border-radius: 4px;
    text-align: center;
    font-family: "SourceHanSansSC-Medium";
    font-size: 17px;
    color: #ffffff;
  }
}
</style>

<template>
  <div class="feedback">
    <div class="feedback-content">
      <textarea name="feedback" v-model="feedbacktext" class="text" placeholder="请输入您想要反馈的内容和意见"></textarea>
      <div class="subBtn" @click="subFeedBack">发送</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      feedbacktext: ''
    }
  },
  methods: {
    subFeedBack () {
      this.$http('GET', this.api.feedback, {
        content: this.feedbacktext,
        type: 'feedback'
      }).then(res => {
        if (res.data.success === true) {
          this.$toast('您的反馈已经提交了，我们会尽快解决')
          this.feedbacktext = ''
        } else {
          this.$toast(res.data.msgInfo)
        }
      })
    }
  }
}
</script>
