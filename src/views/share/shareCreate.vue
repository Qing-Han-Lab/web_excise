<style lang="scss" scoped>
.share-create {
  background: #f7f7f7;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .share-create-inner {
    flex: 1;
    font-family: "SourceHanSansSC-Regular";
    overflow-y: auto;
    .share-create-reward {
      width: 375px;
      height: 38px;
      line-height: 38px;
      background: #fb3419;
      font-family: "SourceHanSansSC-Medium";
      font-size: 14px;
      color: #fff;
      text-align: center;
    }
    .share-create-content {
      padding: 9px 13px;
      .share-create-steps {
        height: 104px;
        padding: 0 28px;
        background: #fff;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 11px;
        color: rgba(51, 51, 51, 0.6);
        line-height: 20px;
        margin-bottom: 10px;
        div {
          border-bottom: 1px dashed #fd3a73;
          font-family: "PingFangSC-Regular";
        }
        .steps-item {
          font-size: 12px;
          line-height: 19px;
          font-family: "SourceHanSansSC-Regular";
          color: #333;
          border: 0;
          span {
            display: block;
            width: 53px;
            height: 53px;
            border-radius: 50%;
            margin-bottom: 4px;
            &.steps-a {
              background: url("./images/share_select.png") center no-repeat,
                -webkit-linear-gradient(149deg, #ff4279 0%, #fb2c68 100%);
              background-size: 24.5px 24.5px;
            }
            &.steps-b {
              background: url("./images/share_tsb.png") center no-repeat,
                -webkit-linear-gradient(149deg, #ff4279 0%, #fb2c68 100%);
              background-size: 25.5px 24.5px;
            }
            &.steps-c {
              background: url("./images/share_reward.png") center no-repeat,
                -webkit-linear-gradient(149deg, #ff4279 0%, #fb2c68 100%);
              background-size: 25px 26px;
            }
          }
        }
      }
      .share-create-select {
        background: #fff;
        border-radius: 4px;
        padding: 10px 0 23px;
        .create-select-title {
          font-size: 12px;
          color: rgba(51, 51, 51, 0.6);
          padding: 0 16px;
          span {
            font-family: "SourceHanSansSC-Medium";
            font-size: 14px;
            color: #333;
          }
        }
        .create-select-image {
          overflow-x: scroll;
          margin-top: 10px;
          /deep/ .swiper-slide {
            width: 120px;
            height: 120px;
            line-height: 0;
            margin-left: 15px;
            position: relative;
            &:first-child {
              margin-left: 16px;
            }
            .select-icon {
              width: 15px;
              height: 15px;
              background: url("./images/icon_choose.png") center no-repeat;
              background-size: 15px 15px;
              position: absolute;
              top: 8px;
              right: 8px;
              z-index: 2;
            }
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
        .create-select-info {
          margin: 0 16px;
          padding: 6px;
          background: #f5f5f5;
          font-size: 12px;
          color: rgba(51, 51, 51, 0.8);
          p {
            margin: 5px 0;
            // height: 15px;
            line-height: 15px;
            &:first-child {
              margin-bottom: 7px;
            }
          }
          .create-select-info-content {
            border-bottom: 1px dashed #5a5a5a;
          }
          .create-select-info-tool {
            display: flex;
            flex-direction: column;
            .tool-copy {
              height: 21px;
              line-height: 21px;
              font-size: 11px;
              padding: 0 5px;
              text-align: center;
              background-color: #f7dfe2;
              color: #fc2f6b;
              border-radius: 10px;
              margin-left: auto;
            }
          }
        }
      }
    }
    .share {
      padding: 0 13px;
      .share-box {
        padding: 10px 0 20px;
        background-color: #f9f9f9;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .share-box-title {
          margin-top: 9px;
          margin-bottom: 16px;
          font-family: "SourceHanSansSC-Medium";
          font-size: 14px;
          letter-spacing: 1px;
          color: rgba(51, 51, 51, 0.6);
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
      }
    }
  }
}
.canvasBox {
  width: 0;
  height: 0;
  overflow: hidden;
}
</style>
<template>
  <div class="share-create">
    <div class="share-create-inner">
      <div
        v-show="product.commissionAmount != '0.00'"
        class="share-create-reward"
      >分享成功，你的预估奖励为：{{product.commissionAmount}}元</div>
      <div class="share-create-content">
        <div class="share-create-steps">
          <div class="steps-item">
            <span class="steps-a"></span>
            选择图片
          </div>
          <div>生成海报</div>
          <div class="steps-item">
            <span class="steps-b"></span>分享好友
          </div>
          <div>好友购买</div>
          <div class="steps-item">
            <span class="steps-c"></span>获得奖励
          </div>
        </div>
        <div class="share-create-select">
          <div class="create-select-title">
            <span>选择图片</span>
            （二维码海报会根据您选择的图片自动生成）
          </div>
          <div class="create-select-image">
            <swiper :options="swiperOption">
              <swiper-slide v-for="(item,index) in shareList" :key="index">
                <span class="select-icon" v-if="item.active"></span>
                <img v-lazy="checkUrl(item.url)" @click="selectImage(index)" />
              </swiper-slide>
            </swiper>
          </div>
          <div class="create-select-info">
            <div class="create-select-info-content">
              <p>{{detail.itemName}}</p>
              <p>[折扣价]¥{{(detail.finalPrice*1.0 + (detail.couponAmount?detail.couponAmount:0)*1.0).toFixed(2)}}</p>
              <p>[券后价]¥{{(detail.finalPrice*1.0).toFixed(2)}}</p>
            </div>
            <div class="create-select-info-tool">
              <p
                v-if="detail.platform === 'taobao' || detail.platform === 'tmall'"
              >点击复制此条（{{tkl}}）,打开淘宝即可抢购</p>
              <p v-if="detail.platform !== 'taobao' && detail.platform !== 'tmall'">点击复制此条链接,打开即可抢购</p>
              <div
                v-if="detail.platform === 'taobao' || detail.platform === 'tmall'"
                class="tool-copy"
                @click="copyTkl(tkl)"
              >复制评论【淘口令】</div>
              <div
                v-if="detail.platform !== 'taobao' && detail.platform !== 'tmall'"
                class="tool-copy"
                @click="copyUrl(checkUrl(product.jumpUrl))"
              >复制链接</div>
            </div>
          </div>
        </div>
      </div>
      <div class="share">
        <div class="share-box">
          <div class="share-box-list">
            <div class="share-box-list-item" @click="toShare('friend')">
              <div class="share-box-list-item-img">
                <img src="../invite/images/icon_wechat.png" alt />
              </div>
              <div class="share-box-list-item-text">微信</div>
            </div>
            <div class="share-box-list-item" @click="toShare('circle')">
              <div class="share-box-list-item-img">
                <img src="../invite/images/icon_friend.png" alt />
              </div>
              <div class="share-box-list-item-text">朋友圈</div>
            </div>
            <!--
            <div class="share-box-list-item" @click="toShare('qq')" v-if="platformType()==='ios'">
              <div class="share-box-list-item-img">
                <img src="../invite/images/icon_qq.png" alt />
              </div>
              <div class="share-box-list-item-text">QQ</div>
            </div>
            -->
            <!-- <div class="share-box-list-item" @click="toShare('sina')" v-if="platformType()==='ios'">
              <div class="share-box-list-item-img">
                <img src="../invite/images/icon_sina.png" alt />
              </div>
              <div class="share-box-list-item-text">新浪微博</div>
            </div>-->
            <div class="share-box-list-item" @click="toShare('local')">
              <div class="share-box-list-item-img">
                <img src="../invite/images/icon_save.png" alt />
              </div>
              <div class="share-box-list-item-text">保存图片</div>
            </div>
          </div>
        </div>
      </div>
      <div class="canvasBox" v-if="select!=='' && headerImg!=='' && qrcode!==''">
      <!-- <div class="canvasBox"> -->
        <CanvasCreate :img="select" :headerImg="headerImg" :qrCode="qrcode" :detail="$route.query.detail"></CanvasCreate>
      </div>
    </div>
  </div>
</template>
<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'
import html2canvas from 'html2canvas'
import CanvasCreate from './components/sharePage'
import axios from 'axios'
import config from '@/utils/config'
export default {
  name: 'shareCreate',
  components: {
    swiper,
    swiperSlide,
    CanvasCreate
  },
  data () {
    return {
      shareList: [],
      swiperOption: {
        speed: 300,
        slidesPerView: 'auto'
      },
      select: '',
      shares: null,
      shareImg: '',
      accessid: '',
      signature: '',
      dir: '',
      policy: '',
      host: '',
      type: '',
      product: {
        url: '',
        jumpUrl: ''
      },
      detail: {},
      tkl: '',
      qrcode: '',
      shareUrls: [],
      headerImg: '',
      selectIndex: 0
    }
  },
  mounted () {
    let detail = this.parseJSON(this.$route.query.detail)
    let imgs = detail.images
    this.detail = detail
    this.shareList = imgs.map(item => {
      let obj = {
        active: false,
        url: item
      }
      return obj
    })
    if (this.shareList.length > 0) {
      this.shareList[0].active = true
      if (window.plus) {
        this.downImg(this.selectedImg[0].url)
      } else {
        document.addEventListener('plusready', this.downImg, false)
      }
    }
    if (window.plus) {
      this.$store.dispatch('updateSerivces')
    } else {
      document.addEventListener('plusready', () => {
        this.$store.dispatch('updateSerivces')
      }, false)
    }
    this.product = this.parseJSON(this.$route.query.item)
    this.$nextTick(() => {
      if (detail.platform === 'taobao' || detail.platform === 'tmall') {
        this.genTaoCommand()
      } else {
        this.saveInfo()
      }
    })
  },
  methods: {
    downImg () {
      if (window.plus) {
        window.plus.nativeUI.showWaiting()
      }
      let imgUrl = this.selectedImg[0].url
      let dtask = window.plus.downloader.createDownload(imgUrl, {}, (d, status) => {
        if (d.state === 4 && status === 200) {
          // 下载完成
          let fileReader = new window.plus.io.FileReader()
          fileReader.onloadend = (evt) => {
            // 数组改变监听兼容，不要修改
            this.select = evt.target.result
            if (window.plus) {
              window.plus.nativeUI.closeWaiting()
            }
          }
          fileReader.readAsDataURL(window.plus.io.convertLocalFileSystemURL(d.filename), 'utf-8')
        }
      })
      dtask.start()
      if (this.$store.state.userInfo.userHeadUrl) {
        var dtask2 = window.plus.downloader.createDownload(this.$store.state.userInfo.userHeadUrl, {}, (d, status) => {
          if (d.state === 4 && status === 200) {
          // 下载完成
            let fileReader = new window.plus.io.FileReader()
            fileReader.onloadend = (evt) => {
            // 数组改变监听兼容，不要修改
              this.headerImg = evt.target.result
            }
            fileReader.readAsDataURL(window.plus.io.convertLocalFileSystemURL(d.filename), 'utf-8')
            if (window.plus) {
              window.plus.nativeUI.closeWaiting()
            }
          }
        })
        dtask2.start()
      } else {
        this.headerImg = require('@/assets/userhead.png')
      }
    },
    selectImage (index) {
      this.shareList = this.shareList.map(item => {
        item.active = false
        return item
      })
      this.shareList[index].active = true
      this.selectIndex = index
      this.$nextTick(() => {
        if (window.plus) {
          this.downImg(this.selectedImg[0].url)
        } else {
          document.addEventListener('plusready', this.downImg, false)
        }
      })
    },
    saveInfo () {
      // 保存信息到radis
      this.$http('POST', this.api.saveShareGoodsInfo, {
        goodsInfo: JSON.stringify({
          detail: this.detail,
          product: this.product
        }),
        itemId: this.product.itemId,
        platform: this.product.platform
      }).then(res => {
        if (res.data.success === true) {
          this.qrcode = `${config.domain}/#/middlev2?sign=${encodeURIComponent(
            res.data.model
          )}&itemId=${this.product.itemId}&platform=${this.product.platform}`
        }
      })
    },
    toShare (type) {
      // 分享
      if (this.$store.state.token) {
        try {
          this.product.inviteCode = this.$store.state.userInfo.inviteCode
        } catch (e) {
          this.product.inviteCode = ''
        }
      }
      this.type = type
      this.$nextTick(() => {
        if (window.plus) {
          if (type === 'local') {
            window.plus.nativeUI.showWaiting('保存中')
          } else {
            window.plus.nativeUI.showWaiting('分享中')
          }
        }
        if (sessionStorage.getItem('shareImgs')) {
          let imgsArr = JSON.parse(sessionStorage.getItem('shareImgs'))
          if (imgsArr[this.selectIndex]) {
            this.shareImage(imgsArr[this.selectIndex], this.type)
            return
          }
        }
        let dom = document.querySelector('.share-page')
        html2canvas(dom, {
          logging: false,
          allowTaint: false
        }).then((canvas) => {
          canvas.toBlob((blob) => {
            this.upLoadOSS(blob)
          }, 'image/jpeg', 1)
        })
      })
    },
    upLoadOSS (blob) {
      // 上传OSS
      this.$store.dispatch('getOssInfo', () => {
        const formData = new FormData()
        const time = new Date().getTime()
        const filename = `${time}${Math.round(Math.random() * 100000000)}.jpg`
        const key = `${this.$store.state.ossInfo.dir}${filename}`
        if (window.plus) {
          window.plus.nativeUI.showWaiting()
        }
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
              if (window.plus) {
                window.plus.nativeUI.closeWaiting()
              }
              if (sessionStorage.getItem('shareImgs')) {
                let imgsArr = JSON.parse(sessionStorage.getItem('shareImgs'))
                imgsArr[this.selectIndex] = this.shareImg
                sessionStorage.setItem('shareImgs', JSON.stringify(imgsArr))
              } else {
                let imgsArr = new Array(this.shareList.length)
                imgsArr[this.selectIndex] = this.shareImg
                sessionStorage.setItem('shareImgs', JSON.stringify(imgsArr))
              }
              this.shareImage(this.shareImg, this.type)
            }
          })
      })
    },
    copyTkl (text) {
      this.setClipbordText(text)
      this.$toast('淘口令已复制到您的剪切板')
    },
    copyUrl (text) {
      this.setClipbordText(text)
      this.$toast('链接已复制到您的剪切板')
    },
    genTaoCommand () {
      this.$http('GET', this.api.genTaoCommand, {
        itemUrl: this.product.jumpUrl,
        logoUrl: this.detail.images[0],
        text: this.detail.itemName
      }).then(res => {
        if (res.data.success === true) {
          this.tkl = res.data.model
          this.product.tkl = res.data.model
        } else {
          this.$toast(res.data.msgInfo)
        }
        this.saveInfo()
      })
    }
  },
  computed: {
    selectedImg () {
      return this.shareList.filter(item => {
        return item.active
      })
    }
  }
}
</script>
