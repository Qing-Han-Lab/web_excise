<style scoped lang='scss'>
.allview{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f7f7f7;
  .userinfobox{
    margin-top: 16px;
    width: 100%;
    padding: 0px 22px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: #fff;
    .userinfobox-useritem{
      width: 100%;
      height: 50px;
      border-bottom: 1px solid rgba(51,51,51,0.15);
      line-height: 50px;
      font-size:16px;
      font-family: 'SourceHanSansSC';
      font-weight:400;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .useritem-title{
        width: 111px;
        color: rgba(51,51,51,1);
      }
      .useritem-content{
        color: #999;
        flex: 1;
        text-align: right;
      }
      input {
        color: #333;
        border: 0px;
        outline: none;
        flex: 1;
        text-align: right;
      }
      .userphoto{
        width: 45px;
        height: 45px;
        border-radius: 100%;
        margin-left: 160px;
        overflow: hidden;
        position: relative;
        img{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        input{
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
        }
      }
      .go{
        width: 7px;
        height: 12px;
        background-image: url("../setting/images/arrow_right.png");
        background-size: 100% 100%;
        margin-left: 10px;
      }
    }
    .lastline{
      border-bottom: none;
    }
    .firstline{
      height: 60px;
      line-height: 60px;
    }
  }
}
::-webkit-input-placeholder { /* WebKit browsers */
    color:#ccc;
}
</style>

<template>
<div class='allview'>
  <TitleBar colorStyle="#FB2C68" title="编辑资料" toolName="完成" :isShare="false" :toolClick='finish' :isNeedTool='finishflag'></TitleBar>
  <div class="userinfobox">
    <div class="firstline userinfobox-useritem">
      <div class="useritem-title">头像</div>
      <div class="userphoto">
        <img v-lazy :src="user.headPic" alt="">
        <input type="file" multiple accept="image/*" @change="changeuserPic($event)">
      </div>
      <div class="go"></div>
    </div>
    <div class="userinfobox-useritem">
      <div class="useritem-title">修改昵称</div>
      <input type="text" v-model="user.Name" maxlength="10" placeholder="编辑您的昵称">
    </div>
    <!-- <div class="userinfobox-useritem">
      <div class="useritem-title">微信号</div>
    </div> -->
    <div class="lastline userinfobox-useritem">
      <div class="useritem-title">手机号</div>
      <div class="useritem-content">{{user.phoneNum}}</div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      finishflag: true,
      user: {
        Name: '',
        headPic: '',
        wechatNum: '',
        phoneNum: ''
      },
      accessid: '',
      signature: '',
      dir: '',
      policy: '',
      host: ''
    }
  },
  created () {
    this.getUserDetil()
  },
  methods: {
    finish () {
      // console.log(1)
      let jsonobj = {
        nickName: this.user.Name,
        headUrl: this.user.headPic,
        weixin: this.user.wechatNum
      }
      this.$http('GET', this.api.resetUserDetail, {
        userJson: JSON.stringify(jsonobj)
      }).then((res) => {
        console.log(res)
        if (res.data.success === true && res.data.model === true) {
          this.goBack()
        } else {
          this.$toast(res.data.msgInfo)
        }
      })
    },
    getUserDetil () {
      this.$http('GET', this.api.getUserDetail, {}).then((res) => {
        this.$nextTick(() => {
          let data = res.data.model
          this.user.Name = data.nickName
          this.user.headPic = data.userHeadUrl
          if (data.weixin) {
            if (data.weixin !== null) {
              this.user.wechatNum = data.weixin
            }
          }
          if (data.mobile) {
            if (data.mobile !== null) {
              this.user.phoneNum = data.mobile
            }
          }
        })
      })
    },
    changeuserPic (e) {
      let file = e.target.files[0]
      this.updataImage(file)
    },
    updataImage (blob) {
      // 上传oss
      this.getOssInfo().then(() => {
        const formData = new FormData()
        const time = new Date().getTime()
        const filename = `${time}${Math.round(Math.random() * 100000000)}.jpg`
        const key = `${this.dir}${filename}`
        formData.append('key', key)
        formData.append('name', filename)
        formData.append('policy', this.policy)
        formData.append('OSSAccessKeyId', this.accessid)
        formData.append('success_action_status', '200')
        formData.append('callback', '')
        formData.append('signature', this.signature)
        formData.append('file', blob)
        axios
          .create({
            withCredentials: true,
            headers: { 'Content-Type': 'multipart/form-data' }
          })
          .post(this.host, formData)
          .then(res => {
            if (res.status === 200) {
              this.user.headPic = this.host + '/' + key
              console.log('上传完毕')
            }
          })
      })
    },
    getOssInfo () {
      // 请求OSS服务器信息
      return new Promise((resolve, reject) => {
        this.$http('GET', this.api.getOssRedirectSign, {
        }).then(
          res => {
            this.accessid = res.data.model.accessid
            this.signature = res.data.model.signature
            this.dir = res.data.model.dir
            this.policy = res.data.model.policy
            this.host = res.data.model.host
            this.$nextTick(() => {
              resolve()
            })
          },
          err => {
            reject(err)
          }
        )
      })
    }
  }
}
</script>
