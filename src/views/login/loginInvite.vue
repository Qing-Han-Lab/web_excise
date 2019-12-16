<style lang="scss" scoped>
.top {
  height: 50px;
  width: 375px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .top-back {
    width: 50px;
    height: 50px;
    background-image: url("./images/icon_back.png");
    background-repeat: no-repeat;
    background-size: 10px 16px;
    background-position: center center;
  }
  .top-next {
    margin-right: 25px;
    font-family: "SourceHanSansSC-Regular";
    font-size: 12px;
    color: rgba(51, 51, 51, 0.6);
  }
}
.invite-title {
  margin: 30px 46px 0;
  font-family: "SourceHanSansSC-Medium";
  font-size: 25px;
  color: #333333;
}
.invite-subtitle {
  margin: 2px 46px;
  font-family: "SourceHanSansSC-Medium";
  font-size: 14px;
  color: #333333;
}
.invite-input {
  margin: 30px 46px 0;
  width: 271px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px rgba(151, 151, 151, 0.25);
  input {
    margin: 0;
    padding: 0;
    outline: none;
    border: 0;
    flex: 1;
    height: 100%;
  }
  .invite-input-btn {
    text-align: center;
    font-family: "SourceHanSansSC-Regular";
    font-size: 14px;
    color: #fc3972;
    padding: 5px 10px;
    border: 1px solid #fd3e75;
    border-radius: 15px;
  }
}
.invite-tip {
  margin: 10px 46px;
  font-family: "SourceHanSansSC-Regular";
  font-size: 12px;
  color: rgba(51, 51, 51, 0.61);
}
.invite-login {
  margin: 65px auto 0;
  width: 233px;
  height: 39px;
  line-height: 39px;
  border-radius: 39px;
  background-color: #fc3972;
  font-family: "SourceHanSansSC-Medium";
  font-size: 16px;
  color: #ffffff;
  text-align: center;
}
.phone-protocool {
  margin-top: 215px;
  text-align: center;
  font-family: "SourceHanSansSC-Regular";
  font-size: 12px;
  color: #a0a0a0;
  span {
    color: #389dff;
  }
}
.invite-info {
  margin-left: 47px;
  margin-top: 18px;
  width: 271px;
  height: 61px;
  background-color: #f7f7f7;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  .invite-info-img {
    margin-left: 13px;
    width: 46px;
    height: 46px;
    border-radius: 46px;
    border: 1px solid #fc3972;
    img {
      width: 46px;
      height: 46px;
      border-radius: 46px;
      overflow: hidden;
    }
  }
  .invite-info-text {
    margin-left: 12px;
    .invite-info-text-name {
      font-family: "SourceHanSansSC-Regular";
      font-size: 12px;
      color: rgba(51, 51, 51, 0.6);
    }
    .invite-info-text-tip {
      margin-top: 5px;
      font-family: "SourceHanSansSC-Regular";
      font-size: 11px;
      color: rgba(51, 51, 51, 0.6);
    }
  }
}
</style>

<template>
  <div class="loginInvite">
    <div class="top">
      <div class="top-back" @click="goBack"></div>
      <div class="top-next" @click="toHome">跳过</div>
    </div>
    <div class="invite-title">邀请码</div>
    <div class="invite-subtitle">请输入邀请码或邀请人手机号</div>
    <div class="invite-input">
      <input type="tel" placeholder="" v-model="inviteCode">
      <div class="invite-input-btn" @click="toSearchInviter">确认</div>
    </div>
    <div class="invite-tip" v-if="!isSearch">绑定邀请码可以免费获得高级会员的权限哦</div>
    <div class="invite-info" v-if="isSearch">
      <div class="invite-info-img">
        <img :src="inviteUser.headUrl" alt>
      </div>
      <div class="invite-info-text" v-show="isSearch">
        <div class="invite-info-text-name">{{inviteUser.nickName}}</div>
        <div class="invite-info-text-tip">邀请您加入好价鼻子</div>
      </div>
    </div>
    <div class="invite-login" @click="toBind()">立即登录</div>
    <div class="phone-protocool">
      登录即代表同意好价鼻子
      <span @click="toPage('useProtocool')">用户协议</span>和
      <span @click="toPage('protocol')">隐私政策</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      inviteCode: '',
      inviteUser: {},
      isSearch: false
    }
  },
  methods: {
    toSearchInviter () {
      // 检查用户
      if (this.inviteCode !== '') {
        this.$http('GET', this.api.getUser, {
          inviteCode: this.inviteCode,
          mobile: this.inviteCode
        }).then(res => {
          console.log(res)
          if (res.data.success) {
            this.inviteUser.headUrl = res.data.model.userHeadUrl
            this.inviteUser.nickName = res.data.model.nickName
            this.inviteCode = res.data.model.inviteCode
            this.isSearch = true
          } else {
            this.$toast('邀请码或手机号不正确')
          }
        })
      } else {
        this.$toast('请先输入邀请码或手机号')
      }
    },
    toBind () {
      // 绑定
      if (!this.inviteUser.nickName) {
        this.$toast('请先查询邀请人信息是否正确')
        return
      }
      this.$http('GET', this.api.bindInviteCode, {
        userJson: JSON.stringify({
          inviteCode: this.inviteCode
        })
      }).then(res => {
        if (res.data.success === true) {
          // 绑定成功
          this.isSearch = false
          window.plus.webview.create('/bottom.html?islogin=true').show('none')
          // this.toPage('layout', { islogin: true })
        } else {
          this.$toast(res.data.msgInfo)
          this.isSearch = false
        }
      })
    },
    toHome () {
      window.plus.webview.create('/bottom.html?islogin=true').show('none')
      // this.toPage('layout', { islogin: true })
    }
  }
}
</script>
