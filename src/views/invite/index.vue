<style lang="scss" scoped>
.invite {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.invite-box {
  width: 375px;
  height: 299px;
  background-color: #8540fb;
  padding-top: 19px;
  .invite-box-inside {
    position: relative;
    margin: 0 13px 19px;
    width: 345px;
    height: 283px;
    background-color: #fff;
    border-radius: 20px;
    &::before {
      position: absolute;
      left: -10px;
      top: 87px;
      content: "";
      display: block;
      width: 20px;
      height: 20px;
      border-radius: 20px;
      background-color: #8540fb;
    }
    &::after {
      position: absolute;
      right: -10px;
      top: 87px;
      content: "";
      display: block;
      width: 20px;
      height: 20px;
      border-radius: 20px;
      background-color: #8540fb;
    }
    .invite-box-inside-top {
      width: 303px;
      height: 95px;
      margin: 0 auto;
      .invite-box-inside-top-title {
        padding-top: 12px;
        font-family: "SourceHanSansSC-Regular";
        font-size: 15px;
        color: #000000;
      }
      .invite-box-inside-top-code {
        margin-top: 16px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        .invite-box-inside-top-code-text {
          font-family: "DINAlternate-Bold";
          font-size: 42px;
          letter-spacing: 1px;
          color: #000000;
        }
        .invite-box-inside-top-code-copy {
          margin-left: 16px;
          width: 48px;
          height: 21px;
          line-height: 21px;
          border-radius: 10px;
          border: solid 1px #8440fa;
          font-family: "SourceHanSansSC-Regular";
          font-size: 12px;
          color: #8440fa;
          text-align: center;
        }
      }
    }
    .invite-box-inside-top-dot {
      margin: 0 auto;
      width: 303px;
      height: 1px;
      background-image: linear-gradient(
        to right,
        #ccc 0%,
        #ccc 50%,
        transparent 50%
      );
      background-size: 12px 1px;
      background-repeat: repeat-x;
    }
    .invite-box-inside-mid {
      padding: 11px 0 0 20px;
      .invite-box-inside-mid-title {
        font-family: "SourceHanSansSC-Regular";
        font-size: 12px;
        color: #000000;
      }
      .invite-box-inside-mid-para {
        margin-top: 9px;
        font-family: "SourceHanSansSC-Regular";
        font-size: 11px;
        color: rgba(0, 0, 0, 0.6);
      }
    }
    .invite-box-inside-bottom {
      margin-top: 25px;
      padding: 0 20px;
      .invite-box-inside-bottom-para {
        margin-top: 2px;
        font-family: "SourceHanSansSC-Regular";
        font-size: 11px;
        line-height: 18px;
        color: rgba(0, 0, 0, 0.6);
      }
    }
  }
}
.invite-swiper {
  margin-top: 50px;
  padding-bottom: 50px;
  .invite-swiper-banner {
    width: 211px;
    height: 375px;
    overflow: initial !important;
    /deep/ .swiper-slide {
      overflow: hidden;
      transform: scale(0.85);
      transition-duration: 500ms;
      img {
        width: 100%;
        height: 100%;
        transition-duration: 500ms;
      }
      .invite-swiper-banner-img {
        position: relative;
        z-index: 15;
        height: 100%;
        .invite-swiper-banner-img-code {
          position: absolute;
          bottom: 10px;
          right: 12px;
          font-family: "SourceHanSansSC-Bold";
          font-size: 7px;
          letter-spacing: 1px;
          padding: 2px 5px;
          background-color: #102557;
          border-radius: 11px;
          color: #eec31b;
          box-shadow: 0px -1px 4px 0px rgba(64, 63, 64, 0.75);
        }
        .invite-swiper-banner-img-qrcode {
          position: absolute;
          right: 12px;
          bottom: 30px;
          width: 70px;
          height: 70px;
          background-color: #fff;
          canvas {
            width: 70px !important;
            height: 70px !important;
          }
        }
      }
      &.swiper-slide-prev {
        transform: scale(1.1);
      }
      &.swiper-slide-active {
        transform: scale(1.2);
        .invite-swiper-banner-img {
          position: relative;
          z-index: 15;
          .invite-swiper-banner-img-choiced {
            position: absolute;
            right: 15px;
            top: 15px;
            width: 15px;
            height: 15px;
            z-index: 16;
            background-image: url("./images/icon_choiced.png");
            background-size: 100% auto;
            background-repeat: no-repeat;
          }
        }
      }
      &.swiper-slide-next {
        transform: scale(1.1);
      }
    }
  }
}
.invite-bottom {
  position: relative;
  z-index: 20;
  width: 375px;
  height: 52px;
  line-height: 52px;
  display: flex;
  flex-direction: row;
  font-family: "SourceHanSansSC-Medium";
  font-size: 14px;
  letter-spacing: 1px;
  color: #ffffff;
  text-align: center;
  .invite-bottom-copy {
    flex: 1;
    background-color: #fb4377;
    display: flex;
    justify-content: center;
    span {
      text-indent: 17px;
      background-image: url("./images/icon_copy.png");
      background-repeat: no-repeat;
      background-size: 13px 14px;
      background-position: left center;
    }
  }
  .invite-bottom-share {
    flex: 1;
    background-color: #8d4ffa;
    display: flex;
    justify-content: center;
    span {
      text-indent: 19px;
      background-image: url("./images/icon_share.png");
      background-repeat: no-repeat;
      background-size: 14px 14px;
      background-position: left center;
    }
  }
}
.share {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 25;
  background-color: rgba(0, 0, 0, 0.5);
  transition-duration: 500ms;
  .share-mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 25;
  }
  .share-box {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 375px;
    height: 221px;
    background-color: #f9f9f9;
    z-index: 26;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    animation: toBottom 400ms ease-in-out;
    .share-box-title {
      margin-top: 25px;
      font-family: "SourceHanSansSC-Medium";
      font-size: 16px;
      letter-spacing: 1px;
      color: #8440fa;
      text-align: center;
    }
    .share-box-list {
      padding: 0 30px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      .share-box-list-item {
        .share-box-list-item-img {
          width: 44px;
          height: 44px;
          img {
            width: 44px;
            height: 44px;
          }
        }
        .share-box-list-item-text {
          margin-top: 3px;
          text-align: center;
          font-family: "SourceHanSansSC-Regular";
          font-size: 11px;
          letter-spacing: 1px;
          color: rgba(51, 51, 51, 0.6);
        }
      }
    }
    .share-box-cancel {
      width: 375px;
      height: 57px;
      line-height: 57px;
      font-family: "SourceHanSansSC-Regular";
      font-size: 16px;
      letter-spacing: 1px;
      color: rgba(51, 51, 51, 0.6);
      text-align: center;
      border-top: solid 1px rgba(151, 151, 151, 0.4);
      background: #fff;
    }
  }
}
@keyframes toBottom {
  0% {
    bottom: -225px;
  }
  100% {
    bottom: 0;
  }
}
.middle {
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
}
.middle::-webkit-scrollbar {
  display: none;
}
</style>

<template>
  <div class="invite">
    <div class="middle">
      <div class="invite-box">
        <div class="invite-box-inside">
          <div class="invite-box-inside-top">
            <div class="invite-box-inside-top-title">您的专属邀请码</div>
            <div class="invite-box-inside-top-code">
              <div class="invite-box-inside-top-code-text">{{copyContent}}</div>
              <div
                class="invite-box-inside-top-code-copy"
                @click="copyInviteCode(copyContent)"
              >复制</div>
            </div>
          </div>
          <div class="invite-box-inside-top-dot"></div>
          <div class="invite-box-inside-mid">
            <div class="invite-box-inside-mid-title">邀请方式:</div>
            <div class="invite-box-inside-mid-para">方式1：复制邀请码给好友下载APP注册时填写</div>
            <div class="invite-box-inside-mid-para">方式2：转发邀请海报，好友下载APP注册时填写海报上的邀请码</div>
            <div class="invite-box-inside-mid-para">方式3：复制邀请链接给好友下载APP注册，并使用链接中邀请码</div>
          </div>
          <div class="invite-box-inside-bottom">
            <div class="invite-box-inside-bottom-para">好友下载APP并使用您的邀请码成功注册会员，</div>
            <div class="invite-box-inside-bottom-para">Ta将永久成为您的粉丝，未来Ta通过推广商品产生的订单佣金</div>
            <div class="invite-box-inside-bottom-para">您都有奖励，会自动计入您的账户中!</div>
          </div>
        </div>
      </div>
      <div class="invite-swiper">
        <swiper class="invite-swiper-banner" :options="swiperOption" ref="swiper">
          <swiper-slide v-for="(item,index) in imgs" :key="index">
            <div class="invite-swiper-banner-img">
              <img :src="item" alt />
              <div class="invite-swiper-banner-img-choiced"></div>
              <div class="invite-swiper-banner-img-code">邀请码: {{copyContent}}</div>
              <div class="invite-swiper-banner-img-qrcode">
                <canvas ref="qrcode"></canvas>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="invite-bottom">
      <div class="invite-bottom-copy">
        <span @click="copyUrl('url')">复制邀请链接</span>
      </div>
      <div class="invite-bottom-share" @click="toShare">
        <span>分享邀请海报</span>
      </div>
    </div>
    <div class="share" v-if="showShare">
      <div class="share-mask" @click="showShare=false"></div>
      <div class="share-box">
        <div class="share-box-title">分享到</div>
        <div class="share-box-list">
          <div class="share-box-list-item" @click="shareWX('friend')">
            <div class="share-box-list-item-img">
              <img src="./images/icon_wechat.png" alt />
            </div>
            <div class="share-box-list-item-text">微信</div>
          </div>
          <div class="share-box-list-item" @click="shareWX('circle')">
            <div class="share-box-list-item-img">
              <img src="./images/icon_friend.png" alt />
            </div>
            <div class="share-box-list-item-text">朋友圈</div>
          </div>
          <!-- <div class="share-box-list-item" @click="shareWX('qq')" v-if="platformType()==='ios'">
            <div class="share-box-list-item-img">
              <img src="./images/icon_qq.png" alt />
            </div>
            <div class="share-box-list-item-text">QQ</div>
          </div>
          <div class="share-box-list-item" @click="shareWX('sina')" v-if="platformType()==='ios'">
            <div class="share-box-list-item-img">
              <img src="./images/icon_sina.png" alt />
            </div>
            <div class="share-box-list-item-text">新浪微博</div>
          </div>-->
          <div class="share-box-list-item" @click="shareWX('local')">
            <div class="share-box-list-item-img">
              <img src="./images/icon_save.png" alt />
            </div>
            <div class="share-box-list-item-text">保存图片</div>
          </div>
        </div>
        <div class="share-box-cancel" @click="cancelShare">取消</div>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import html2canvas from 'html2canvas'
import axios from 'axios'
import QRCode from 'qrcode'
import config from '@/utils/config'
export default {
  data () {
    return {
      swiperOption: {
        speed: 500,
        initialSlide: 1,
        spaceBetween: 50
      },
      showShare: false,
      copyContent: '',
      imgs: [],
      shareImg: '',
      type: ''
    }
  },
  created () {
    this.copyContent = this.$store.state.userInfo.inviteCode
    if (window.plus) {
      this.$store.dispatch('updateSerivces')
    } else {
      document.addEventListener('plusready', () => {
        this.$store.dispatch('updateSerivces')
      }, false)
    }
    this.getImgs()
  },
  methods: {
    getImgs () {
      // 获取分享图
      this.$http('GET', this.api.queryDictionary, {
        code: 'invite_image',
        type: 'new_share'
      }).then(res => {
        if (res.data.success === true) {
          let imgs = res.data.model.images
          this.imgs = res.data.model.images
          this.$nextTick(() => {
            for (let i = 0; i < imgs.length; i++) {
              let filename = imgs[i].substring(imgs[i].lastIndexOf('/') + 1, imgs[i].length)
              let relativePath = '_downloads/' + filename
              if (window.plus) {
                window.plus.io.resolveLocalFileSystemURL(relativePath, (entry) => {
                  console.log('本地已有图片=' + relativePath)
                  // 如果文件存在,则直接设置本地图片
                  this.setImgFromLocal(relativePath, i)
                }, (e) => {
                  console.log('图片不存在,联网下载=' + relativePath)
                  // 如果文件不存在,联网下载图片
                  this.setImgFromNet(imgs[i], i)
                })
              } else {
                document.addEventListener('plusready', () => {
                  window.plus.io.resolveLocalFileSystemURL(relativePath, (entry) => {
                    console.log('本地已有图片=' + relativePath)
                    // 如果文件存在,则直接设置本地图片
                    this.setImgFromLocal(relativePath, i)
                  }, (e) => {
                    console.log('图片不存在,联网下载=' + relativePath)
                    // 如果文件不存在,联网下载图片
                    this.setImgFromNet(imgs[i], i)
                  })
                }, false)
              }
              let doms = this.$refs.qrcode
              QRCode.toCanvas(doms[i], config.domain + '/#/downloadPage?invitecode=' + this.$store.state.userInfo.inviteCode, function (error) {
                console.log(error)
              })
            }
          })
        }
      })
    },
    setImgFromLocal (relativePath, index) {
      // 从本地缓存读取图片
      let fileReader = new window.plus.io.FileReader()
      fileReader.onloadend = (evt) => {
        // 数组改变监听兼容，不要修改
        let tempArr = [...this.imgs]
        tempArr[index] = evt.target.result
        this.imgs = tempArr
        // this.$nextTick(() => {
        //   let doms = this.$refs.qrcode
        //   QRCode.toCanvas(doms[index], config.domain + '/#/downloadPage?invitecode=' + this.$store.state.userInfo.inviteCode, function (error) {
        //     console.log(error)
        //   })
        // })
      }
      fileReader.readAsDataURL(window.plus.io.convertLocalFileSystemURL(relativePath), 'utf-8')
    },
    setImgFromNet (imgUrl, index) {
      // 从网络获取图片
      let dtask = window.plus.downloader.createDownload(imgUrl, {}, (d, status) => {
        if (d.state === 4 && status === 200) {
          // 下载完成
          let fileReader = new window.plus.io.FileReader()
          fileReader.onloadend = (evt) => {
            // 数组改变监听兼容，不要修改
            let tempArr = [...this.imgs]
            tempArr[index] = evt.target.result
            this.imgs = tempArr
            // this.$nextTick(() => {
            //   let doms = this.$refs.qrcode
            //   QRCode.toCanvas(doms[index], config.domain + '/#/downloadPage?invitecode=' + this.$store.state.userInfo.inviteCode, function (error) {
            //     console.log(error)
            //   })
            // })
          }
          fileReader.readAsDataURL(window.plus.io.convertLocalFileSystemURL(d.filename), 'utf-8')
        }
      })
      dtask.start()
    },
    toShare () {
      this.showShare = true
    },
    cancelShare () {
      this.showShare = false
    },
    copyInviteCode (text) {
      this.setClipbordText(text)
      this.$toast('邀请码已复制到您的剪切板')
    },
    copyUrl (text) {
      if (text === 'url') {
        this.setClipbordText(config.domain + '/#/downloadPage?invitecode=' + this.$store.state.userInfo.inviteCode)
      } else {
        this.setClipbordText(text)
      }
      this.$toast('链接已复制到您的剪切板')
    },
    shareWX (type) {
      this.type = type
      this.$nextTick(() => {
        let activePic = document.querySelector(
          '.swiper-slide-active .invite-swiper-banner-img'
        )
        if (window.plus) {
          if (type === 'local') {
            window.plus.nativeUI.showWaiting('保存中')
          } else {
            window.plus.nativeUI.showWaiting('分享中')
          }
        }
        if (sessionStorage.getItem('shareQR')) {
          let QRarr = JSON.parse(sessionStorage.getItem('shareQR'))
          if (QRarr[this.$refs.swiper.swiper.activeIndex]) {
            this.shareImg = QRarr[this.$refs.swiper.swiper.activeIndex]
            this.shareImage(this.shareImg, this.type)
            return
          }
        }
        html2canvas(activePic, {
          logging: false,
          allowTaint: true,
          ignoreElements: (element) => {
            if (element.className === 'invite-swiper-banner-img-choiced') {
              return true
            }
          }
        }).then(canvas => {
          canvas.toBlob((blob) => {
            this.upLoadOSS(blob)
          }, 'image/jpeg', 1)
        })
      })
    },
    upLoadOSS (blob) {
      // 上传OSS
      console.log('开始获取OSS信息')
      this.$store.dispatch('getOssInfo', () => {
        console.log('准备上传OSS')
        const formData = new FormData()
        const time = new Date().getTime()
        const filename = `${time}${Math.round(Math.random() * 100000000)}.jpg`
        const key = `${this.$store.state.ossInfo.dir}${filename}`
        formData.append('key', key)
        formData.append('name', filename)
        formData.append('policy', this.$store.state.ossInfo.policy)
        formData.append('OSSAccessKeyId', this.$store.state.ossInfo.accessid)
        formData.append('success_action_status', '200')
        formData.append('callback', '')
        formData.append('signature', this.$store.state.ossInfo.signature)
        formData.append('file', blob)
        axios
          .create({
            withCredentials: true,
            headers: { 'Content-Type': 'multipart/form-data' }
          })
          .post(this.$store.state.ossInfo.host, formData)
          .then(res => {
            if (res.status === 200) {
              this.shareImg = this.$store.state.ossInfo.host + '/' + key
              console.log('上传完毕,开始分享')
              if (sessionStorage.getItem('shareQR')) {
                let QRarr = JSON.parse(sessionStorage.getItem('shareQR'))
                QRarr[this.$refs.swiper.swiper.activeIndex] = this.shareImg
                sessionStorage.setItem('shareQR', JSON.stringify(QRarr))
              } else {
                let QRarr = new Array(this.imgs.length)
                QRarr[this.$refs.swiper.swiper.activeIndex] = this.shareImg
                sessionStorage.setItem('shareQR', JSON.stringify(QRarr))
              }
              this.shareImage(this.shareImg, this.type)
            }
          })
      })
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>
