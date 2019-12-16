<style scoped lang='scss'>
.binding {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #f7f7f7;
  .binding-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    .binding-top-title {
      font-size: 18px;
      color: #333333;
    }
    .binding-top-back {
      width: 40px;
      height: 40px;
      background-image: url("../../components/titleBar/images/back_btn.png");
      background-repeat: no-repeat;
      background-size: 10px 16px;
      background-position: center center;
    }
    .binding-top-icon {
      height: 40px;
      width: 40px;
    }
  }
  .binding-box {
    width: 332px;
    min-height: 144px;
    padding: 17px 8px 15px 9px;
    background: rgba(255, 255, 255, 1);
    border-radius: 4px;
    margin: 9px auto 34px;
    color: #333333;
    font-size: 14px;
    font-weight: 400;
    .binding-box-text{
      color:#666;
      font-size: 10px;
    }
    .binding-box-name-label {
      line-height: 30px;
      width: 75px;
    }
    input {
      width: 160px;
      height: 30px;
      margin-left: 10px;
      border: 0;
      outline: none;
    }
    .binding-box-verification-right {
      margin-right: 10px;
      color: #fb2c68;
    }
    .binding-box-verification-left{
      display: flex;
    }
    .binding-box-verification{
      display: flex;
      justify-content:space-between;
      line-height: 30px;
    }
  }
  .magin {
    height: 40px;
    margin-bottom: 10px;
    display: flex;
    border-bottom: 0.5px solid #EEEEEE;
  }
  .binding-btn {
    width: 269px;
    height: 35px;
    background: rgba(252, 165, 13, 1);
    border-radius: 18px;
    margin: 0px auto;
    text-align: center;
    line-height: 35px;
    color: #fff;
  }
  input {
    flex: 1;
  }
}
</style>
<template>
  <div class="binding">
    <!-- <div class="binding-top">
      <div class="binding-top-back" @click="goBack"></div>
      <div class="binding-top-title">绑定支付宝</div>
      <div class="binding-top-icon"></div>
    </div> -->
    <div class="binding-box">
      <div class="binding-box-name magin">
        <div class="binding-box-name-label">真实姓名</div>
        <input type="text" v-model="name" placeholder="请输入您的真实姓名" />
      </div>
      <div class="binding-box-id magin">
        <div class="binding-box-name-label">支付宝账号</div>
        <input type="text" v-model="number" placeholder="请输入您的支付宝账号"/>
      </div>
      <div class="binding-box-verification magin">
        <div class="binding-box-verification-left">
          <div class="binding-box-name-label">验证码</div>
          <input type="tel" v-model="code" placeholder="请输入验证码" maxlength="6"/>
        </div>
        <div class="binding-box-verification-right" @click="toGetCode">{{codeText}}</div>
      </div>
      <div class="binding-box-text">验证码将发送到注册时填写的手机号</div>
    </div>
    <div class="binding-btn" @click="toBindAlipay">确定</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      codeText: '获取验证码',
      name: '',
      number: '',
      mobile: '',
      code: '',
      isGet: false,
      minutes: 60,
      timer: -1
    }
  },
  mounted () {
    this.mobile = this.$store.state.userInfo.mobile
  },
  methods: {
    toGetCode () {
      // 获取验证码
      let phoneReg = /^1[3456789]\d{9}$/ // 手机号正则
      let eMailReg = new RegExp('^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$') // email正则
      if (phoneReg.test(this.number) || eMailReg.test(this.number)) {
        if (this.isGet) {
          this.$toast('60秒内只能请求一次验证码')
          return
        }
        if (this.name === '') {
          this.$toast('请输入姓名')
          return
        }
        if (this.number === '') {
          this.$toast('请输入支付宝账号')
          return
        }
        this.$http('GET', this.api.sendUserIdentifyCode, {
          smsInfo: JSON.stringify({
            module: 'check'
          })
        }).then(res => {
          if (res.data.success === true) {
            this.$toast('验证码已发送到您的手机,请注意查收！')
            this.timer = setInterval(() => {
              this.minutes--
              this.codeText = `${this.minutes}s`
              this.isGet = true
              if (this.minutes < 0) {
                clearInterval(this.timer)
                this.codeText = '获取验证码'
                this.minutes = 60
                this.isGet = false
              }
            }, 1000)
          } else {
            this.$toast(res.data.msgInfo)
          }
        })
      } else {
        this.$toast('请填写正确的支付宝账号')
      }
    },
    toBindAlipay () {
      // 绑定支付宝
      if (this.name === '') {
        this.$toast('请输入姓名')
        return
      }
      if (this.number === '') {
        this.$toast('请输入支付宝账号')
        return
      }
      if (this.mobile === '') {
        this.$toast('未获取到用户注册手机号')
        return
      }
      if (this.code === '') {
        this.$toast('请输入验证码')
      }
      this.$http('GET', this.api.bindAlipayAccount, {
        alipayAccount: this.number,
        identifyCode: this.code,
        mobile: this.mobile,
        realName: this.name
      }).then(res => {
        if (res.data.success === true) {
          this.$toast('绑定成功')
          if (window.plus) {
            window.plus.webview.currentWebview().close()
          }
        } else {
          this.$toast(res.data.msgInfo)
        }
      })
    }
  }
}
</script>
