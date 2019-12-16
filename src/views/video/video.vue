<style lang="scss" scoped>
.video {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background: #000;
  /deep/ .swiper-container {
    height: 100%;
    width: 100%;
  }
  .video-product {
    position: absolute;
    bottom: 11px;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    width: 350px;
    height: 100px;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    z-index: 11;
    .video-product-left {
      width: 310px;
      height: 100px;
      border-radius: 8px;
      background: #fff;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;

      .video-product-left-price {
        padding: 1px 5px;
        position: absolute;
        left: 0;
        top: 0;
        background: #fe024b;
        border-bottom-right-radius: 8px;
        color: #fff;
        font-size: 10px;
        text-align: center;
        font-family: "DINAlternate-Bold";
        line-height: 18px;
        span {
          font-size: 8px;
        }
      }
      .video-product-left-img {
        width: 100px;
        height: 100px;
        img {
          width: 100px;
          height: 100px;
        }
      }
      .video-product-left-info {
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .video-product-left-info-title {
          margin-top: 5px;
          font-size: 14px;
          color: rgba(51, 51, 51, 1);
          line-height: 20px;
          font-weight: bold;
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .video-product-left-info-price {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          .video-product-left-info-price-text {
            font-size: 22px;
            font-family: "DINAlternate-Bold";
            font-weight: bold;
            color: rgba(251, 44, 104, 1);
            line-height: 11px;
            span {
              font-size: 10px;
            }
          }
          .video-product-left-info-price-buy {
            margin-right: 10px;
            font-size: 8px;
            color: rgba(153, 153, 153, 1);
            line-height: 12px;
          }
        }
        .video-product-left-info-time {
          margin-bottom: 5px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          .video-product-left-info-time-platform {
            font-size: 10px;
            color: rgba(153, 153, 153, 1);
            text-indent: 24px;
            height: 18px;
            line-height: 18px;
            background-repeat: no-repeat;
            background-size: 18px;
            background-position: left center;
            &.tb {
              background-image: url("../home/images/icon_tb.png");
            }
            &.pdd {
              background-image: url("../home/images/icon_pdd.png");
            }
            &.jd {
              background-image: url("../home/images/icon_jd.png");
            }
            &.tmall {
              background-image: url("../home/images/icon_tmall.png");
            }
          }
          .video-product-left-info-time-cert {
            font-size: 9px;
            font-family: "DINAlternate-Bold";
            font-weight: bold;
            color: rgba(156, 96, 9, 1);
            line-height: 10px;
            background-image: url("../home/images/certificate_orange.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            padding: 3px 10px;
            margin-right: 10px;
          }
        }
      }
    }
    .video-product-right {
      width: 41px;
      height: 100px;
      background: orange;
      border-radius: 8px;
      font-size: 16px;
      color: rgba(255, 255, 255, 1);
      line-height: 24px;
      text-align: center;
      writing-mode: vertical-lr;
      line-height: 41px;
      letter-spacing: 5px;
    }
  }
  .video-action {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate3d(0, -50%, 0);
    width: 60px;
    height: 190px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    z-index: 11;
    .video-action-item {
      .video-action-item-text {
        text-align: center;
        font-size: 10px;
        color: rgba(255, 255, 255, 1);
        line-height: 15px;
        font-family: "DINAlternate-Bold";
        text-shadow: 1px 2px 3px black;
      }
      .video-action-item-img {
        width: 32px;
        height: 32px;
        background-repeat: no-repeat;
        background-position: center center;
        &.played {
          background-image: url("./images/video_played.png");
          background-size: 30px;
        }
        &.reply {
          background-image: url("./images/video_reply.png");
          background-size: 30px;
        }
        &.video-share {
          background-image: url("./images/video_share.png");
          background-size: 29px 25px;
        }
      }
    }
  }
  .video-source {
    width: 100%;
    height: 100%;
    position: relative;
    video {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate3d(0,-50%,0);
      width: 100%;
      object-fit: fill;
      z-index: 9;
    }
    .video-source-play {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 40px;
      height: 40px;
      z-index: 11;
      background-image: url("./images/video_isplay.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      transform: translate3d(-50%, -50%, 0);
    }
    .video-source-mask {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 10;
      background: #000;
    }
  }
}
.share {
  transition-duration: 500ms;
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
.comment {
  position: fixed;
  left: 0;
  bottom: -85vh;
  right: 0;
  background: #fff;
  max-height: 85vh;
  z-index: 101;
  transition-duration: 200ms;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &.show {
    bottom: 0;
  }
  .comment-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 39px;
    align-items: center;
    .comment-top-title {
      font-size: 12px;
      color: #333333;
    }
    .comment-top-close {
      width: 39px;
      height: 39px;
      background-image: url("./images/icon_close.png");
      background-repeat: no-repeat;
      background-size: 19px 19px;
      background-position: center center;
    }
    .comment-top-hide {
      width: 39px;
      height: 39px;
    }
  }
  .comment-bottom {
    width: 375px;
    height: 70px;
    border-top: 1px solid #e7e7e7;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .comment-bottom-input {
      margin-left: 14px;
      margin-right: 8px;
      padding: 0 10px;
      flex: 1;
      height: 31px;
      background: #eee;
      border-radius: 5px;
      input {
        padding: 0;
        margin: 0;
        border: 0;
        outline: none;
        width: 100%;
        line-height: 31px;
        background: transparent;
      }
    }
    .comment-bottom-send {
      margin-right: 14px;
      color: #cccccc;
      font-size: 14px;
      line-height: 21px;
      padding: 0px 5px;
      border: 1px solid #cccccc;
      border-radius: 5px;
    }
  }
  .comment-middle {
    flex: 1;
    overflow: auto;
    padding-bottom: 10px;
  }
  .comment-middle::-webkit-scrollbar {
    display: none;
  }
  .comment-middle-item {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    &:not(:first-child) {
      margin-top: 20px;
    }
    .comment-middle-left {
      img {
        margin-left: 14px;
        width: 30px;
        height: 30px;
        border-radius: 30px;
        overflow: hidden;
      }
    }
    .comment-middle-right {
      margin-left: 7px;
      margin-right: 20px;
      .comment-middle-right-name {
        color: #999999;
        font-size: 12px;
        line-height: 30px;
      }
      .comment-middle-right-reply {
        font-size: 12px;
        color: #333333;
        span {
          color: #cccccc;
          margin-left: 5px;
        }
      }
      .comment-middle-right-item {
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        .comment-middle-right-item-left {
          width: 20px;
          height: 20px;
          border-radius: 20px;
          overflow: hidden;
          img {
            width: 20px;
            height: 20px;
            border-radius: 20px;
            overflow: hidden;
          }
        }
        .comment-middle-right-item-right {
          margin-left: 8px;
          .comment-middle-right-item-right-name {
            font-size: 12px;
            color: #999;
            line-height: 20px;
          }
          .comment-middle-right-item-right-reply {
            font-size: 12px;
            color: #333333;
            span {
              font-size: 12px;
              color: #cccccc;
              margin-left: 5px;
            }
          }
        }
      }
      .comment-middle-right-more {
        margin-top: 20px;
        color: #cccccc;
        font-size: 12px;
        padding-right: 10px;
        background-image: url("./images/more_bottom.png");
        background-repeat: no-repeat;
        background-position: right center;
        background-size: 6px 3px;
        display: inline-block;
      }
    }
  }
  .conment-middle-noMore {
    margin-top: 20px;
    text-align: center;
    color: #666;
    font-size: 12px;
  }
}
</style>

<template>
  <div class="video">
    <!-- <swiper :options="swiperOption">
    <swiperSlide>-->
    <div class="video-source" id="video">
      <div class="video-source-mask" v-if="playNow"></div>
      <div class="video-source-play" v-if="!playing" @click="changePlay"></div>
      <video
        :src="productDetail.videoUrl"
        webkit-playsinline="webkit-playsinline"
        autoplay
        muted
        playsinline="playsinline"
        ref="video"
        @click="changePlay"
      ></video>
    </div>
    <div class="video-product">
      <div class="video-product-left">
        <div
          class="video-product-left-price"
          v-if="$route.query.commissionAmount && $route.query.commissionAmount!=='0.00'"
        >
          奖
          <span>￥</span>
          {{$route.query.commissionAmount}}
        </div>
        <div class="video-product-left-img">
          <img :src="imgBase64" alt />
        </div>
        <div class="video-product-left-info">
          <div class="video-product-left-info-title">{{productDetail.itemName}}</div>
          <div class="video-product-left-info-price">
            <div class="video-product-left-info-price-text">
              <span>￥</span>
              {{productDetail.finalPrice}}
            </div>
            <div class="video-product-left-info-price-buy">{{productDetail.saledNumber}}人已买</div>
          </div>
          <div class="video-product-left-info-time">
            <div
              class="video-product-left-info-time-platform"
              :class="checkPlatformClass(productDetail.platform)"
            >{{checkPlatform(productDetail.platform)}} | {{formatTime(productDetail.publicTime)}}</div>
            <div
              class="video-product-left-info-time-cert"
              v-if="productDetail.couponAmount && productDetail.couponAmount!=='0.00'"
            >{{productDetail.couponAmount}}元券</div>
          </div>
        </div>
      </div>
      <div class="video-product-right" @click="toThird(productDetail)">去购买</div>
    </div>
    <div class="video-action">
      <div class="video-action-item">
        <div class="video-action-item-img played"></div>
        <div
          class="video-action-item-text"
        >{{productDetail.pvTimes>10000?`${(productDetail.pvTimes/10000).toFixed(1)}万`:productDetail.pvTimes}}</div>
      </div>
      <div class="video-action-item" @click="showComment = true; showShare = false">
        <div class="video-action-item-img reply"></div>
        <div class="video-action-item-text">评论</div>
      </div>
      <div class="video-action-item" @click="showShare = true;showComment = false">
        <div class="video-action-item-img video-share"></div>
        <div class="video-action-item-text">分享</div>
      </div>
    </div>
    <!-- </swiperSlide>
    </swiper>-->
    <div class="share" v-if="showShare">
      <div class="share-box">
        <div class="share-box-title">分享到</div>
        <div class="share-box-list">
          <div class="share-box-list-item" @click="checkAuth('friend')">
            <div class="share-box-list-item-img">
              <img src="../invite/images/icon_wechat.png" alt />
            </div>
            <div class="share-box-list-item-text">微信</div>
          </div>
          <div class="share-box-list-item" @click="checkAuth('circle')">
            <div class="share-box-list-item-img">
              <img src="../invite/images/icon_friend.png" alt />
            </div>
            <div class="share-box-list-item-text">朋友圈</div>
          </div>
          <div class="share-box-list-item" @click="saveToPhoto">
            <div class="share-box-list-item-img">
              <img src="./images/icon_video.png" />
            </div>
            <div class="share-box-list-item-text">保存视频</div>
          </div>
          <div class="share-box-list-item" @click="shareWX('copy')">
            <div class="share-box-list-item-img">
              <img src="../invite/images/icon_copy2.png" />
            </div>
            <div class="share-box-list-item-text">复制链接</div>
          </div>
        </div>
        <div class="share-box-cancel" @click="showShare=false">取消</div>
      </div>
    </div>
    <div class="comment" :class="{'show':showComment}">
      <div class="comment-top">
        <div class="comment-top-hide"></div>
        <div class="comment-top-title">{{productDetail.commentTimes || 0}}条评论</div>
        <div class="comment-top-close" @click="showComment = false"></div>
      </div>
      <div class="comment-middle" ref="replyBox">
        <div ref="heightBox">
          <div
            class="comment-middle-item"
            v-for="(item,index) in recommendList"
            :key="`comment1${index}`"
          >
            <div class="comment-middle-left">
              <img
                class="comment-middle-left-head"
                :src="item.sendUser.headUrl? item.sendUser.headUrl:require('../../assets/userhead.png')"
              />
            </div>
            <div class="comment-middle-right">
              <div class="comment-middle-right-name">{{item.sendUser.nickName}}</div>
              <div
                class="comment-middle-right-reply"
                @click="toReplyPeople(item.commentId, item.sendUser.userId, item.sendUser.nickName, index, item.contentId)"
              >
                {{item.comment}}
                <span>{{formatTime(item.time)}}</span>
              </div>
              <div v-if="item.replies.length !== 0">
                <div
                  class="comment-middle-right-item"
                  v-for="(item2,index2) in item.replies"
                  :key="`comment1${index2}`"
                >
                  <div class="comment-middle-right-item-left">
                    <img
                      :src="item2.sendUser.headUrl?item2.sendUser.headUrl:require('../../assets/userhead.png')"
                      alt
                    />
                  </div>
                  <div class="comment-middle-right-item-right">
                    <div class="comment-middle-right-item-right-name">{{item2.sendUser.nickName}}</div>
                    <div
                      class="comment-middle-right-item-right-reply"
                      @click="toReplyPeople(item.commentId, item2.sendUser.userId, item2.sendUser.nickName, index, item.contentId, index2)"
                    >
                      {{item2.reply}}
                      <span>{{formatTime(item2.replyTime)}}</span>
                    </div>
                  </div>
                </div>
                <div
                  class="comment-middle-right-more"
                  v-if="item.replies.length === 3 && !item.noMore"
                  @click="toShowMoreReplys(item.commentId,item.contentId,item.replies.length, index)"
                >
                  --展开更多回复
                  <span></span>
                </div>
              </div>
            </div>
          </div>
          <div class="conment-middle-noMore" v-if="allLoaded">---没有更多了---</div>
        </div>
      </div>
      <div class="comment-bottom">
        <div class="comment-bottom-input">
          <input type="text" v-model="commentText" :placeholder="inputHolder" ref="input" />
        </div>
        <div class="comment-bottom-send" @click="sendComment(commentText)">发送</div>
      </div>
    </div>
  </div>
</template>

<script>
// import { swiper, swiperSlide } from 'vue-awesome-swiper'
import html2canvas from 'html2canvas'
import Canvas2Image from '@/utils/canvas2image'
import axios from 'axios'
import config from '@/utils/config'
export default {
  data () {
    return {
      swiperOption: {
        direction: 'vertical',
        loop: true
      }, // swiper配置 这版用不到
      productDetail: {}, // 物品详情
      imgBase64: '',
      playing: false, // 视频播放状态
      showShare: false, // 分享框弹出状态
      type: '', // 分享状态
      qrcode: '', // 分享链接
      showComment: false, // 评论框状态
      commentText: '', // 评论内容
      inputHolder: '是时候发表评论了', // placeholder 评论框
      replyUser: {
        userId: '',
        nickName: '',
        commentId: '',
        index: -1,
        contentId: ''
      }, // 回复人信息
      recommendList: [], // 评论列表
      allLoaded: false, // 所有评论已加载
      loading: false, // 评论列表请求状态
      playNow: true, // 背景框黑色遮罩层状态
      ossImg: ''
    }
  },
  created () {
    this.getDetail() // 获取详情
    this.getComment() // 获取列表
    if (window.plus) {
      this.$store.dispatch('updateSerivces') // 获取分享服务列表
    } else {
      document.addEventListener('plusready', () => {
        this.$store.dispatch('updateSerivces')
      }, false)
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.replyBox.addEventListener('scroll', this.scrollListen, false)
    })
  },
  methods: {
    scrollListen () {
      // 监听滚动到底部加载更多评论
      if (this.$refs.heightBox.clientHeight - this.$refs.replyBox.clientHeight - this.$refs.replyBox.scrollTop < 100) {
        this.loadMore()
      }
    },
    getDetail () {
      // 获取详情
      this.$http('GET', this.api.getContentDetail, {
        contentId: this.$route.query.id
      }).then((res) => {
        if (res.data.success === true) {
          this.productDetail = res.data.model
          this.$nextTick(() => {
            this.getLocalImg()
            this.$refs.video.addEventListener('canplay', this.changePlay, false)
            this.$refs.video.addEventListener('pause', this.stopPlay, false)
          })
          if (this.$store.state.token !== '') {
            if (this.productDetail.platform === 'taobao' || this.productDetail.platform === 'tmall') {
              this.changeUrl(() => {
                this.getTaoCommand(this.saveInfo)
              }, true)
            } else {
              this.changeUrl(() => {
                this.saveInfo()
              })
            }
          }
        }
      })
      this.$http('GET', this.api.view, {
        contentId: this.$route.query.id
      })
    },
    getLocalImg () {
      // 图片转换为本地图片
      if (window.plus) {
        this.setImgFromNet()
      } else {
        document.addEventListener('plusready', this.setImgFromNet, false)
      }
    },
    setImgFromNet () {
      // 从网络获取图片
      let imgUrl = this.productDetail.itemPicUrl
      let dtask = window.plus.downloader.createDownload(imgUrl, {}, (d, status) => {
        if (d.state === 4 && status === 200) {
          // 下载完成
          let fileReader = new window.plus.io.FileReader()
          fileReader.onloadend = (evt) => {
            // 数组改变监听兼容，不要修改
            this.imgBase64 = evt.target.result
          }
          fileReader.readAsDataURL(window.plus.io.convertLocalFileSystemURL(d.filename), 'utf-8')
        }
      })
      dtask.start()
    },
    getComment () {
      // 获取评论信息
      this.$http('GET', this.api.queryComment, {
        contentId: this.$route.query.id,
        limit: 4,
        offset: 0
      }).then(res => {
        console.log(res.data)
        if (res.data.success === true) {
          // 正常请求
          this.recommendList = res.data.model
          if (res.data.model.length < 4) {
            this.allLoaded = true
          }
        }
      })
    },
    loadMore () {
      // 加载更多评论
      if (this.allLoaded === true) {
        return
      }
      if (this.loading === true) {
        return
      } else {
        this.loading = true
      }
      this.$nextTick(() => {
        this.$http('GET', this.api.queryComment, {
          contentId: this.$route.query.id,
          limit: 4,
          offset: this.recommendList.length
        }).then(res => {
          if (res.data.success === true) {
          // 正常请求
            if (res.data.model.length < 4) {
              this.recommendList = this.recommendList.concat(res.data.model)
              this.allLoaded = true
            } else {
              this.recommendList = this.recommendList.concat(res.data.model)
            }
          }
          this.loading = false
        }).catch(() => {
          this.loading = false
        })
      })
    },
    changeUrl (callback2, conti) {
      // 转链信息，用于记录追踪用户购买记录
      if (this.productDetail.platform === 'taobao' || this.productDetail.platform === 'tmall') {
        if (this.$store.state.token === '') {
          this.toPage('login')
          return
        }
        this.$http('POST', this.api.isAuthorize, {
          platform: 'taobao'
        }).then(res => {
          if (res.data.model === false) {
            if (conti) {
              return
            }
            this.toAuth()
          } else {
            this.$http('GET', this.api.changeChain, {
              platform: this.productDetail.platform,
              itemId: (this.productDetail.platform === 'taobao' || this.productDetail.platform === 'tmall') ? this.productDetail.itemId : this.productDetail.url,
              extendJson: JSON.stringify({
                couponUrl:
                  this.productDetail.couponInfo && this.productDetail.couponInfo.couponClickUrl
                    ? this.productDetail.couponInfo.couponClickUrl
                    : ''
              })
            }).then(res => {
              let chainUrl
              if (res.success || res.data.success) {
                if (this.productDetail.platform === 'taobao' || this.productDetail.platform === 'tmall') {
                  chainUrl = this.productDetail.couponAmount ? res.data.model.shortUrl : res.data.model.url
                } else {
                  chainUrl = res.data.model.shortUrl
                }
                this.productDetail.jumpUrl = chainUrl
                this.productDetail.chainUrl = chainUrl
                if (callback2) {
                  callback2()
                }
              } else {
                this.callback(res, chainUrl)
              }
            })
          }
        })
      } else {
        this.$http('GET', this.api.changeChain, {
          platform: this.productDetail.platform,
          itemId: (this.productDetail.platform === 'taobao' || this.productDetail.platform === 'tmall') ? this.productDetail.itemId : this.productDetail.url,
          extendJson: JSON.stringify({
            couponUrl:
              this.productDetail.couponInfo && this.productDetail.couponInfo.couponClickUrl
                ? this.productDetail.couponInfo.couponClickUrl
                : ''
          })
        }).then(res => {
          let chainUrl
          if (res.success || res.data.success) {
            if (this.productDetail.platform === 'taobao' || this.productDetail.platform === 'tmall') {
              chainUrl = this.productDetail.couponAmount ? res.data.model.shortUrl : res.data.model.url
            } else {
              chainUrl = res.data.model.shortUrl
            }
            this.productDetail.jumpUrl = chainUrl
            this.productDetail.chainUrl = chainUrl
            if (callback2) {
              callback2()
            }
          } else {
            this.callback(res, chainUrl)
          }
        })
      }
    },
    checkAuth (type) {
      // 判断是否已登录
      if (this.$store.state.token === '') {
        this.$toast('请先登录再分享')
        setTimeout(() => {
          this.toPage('login')
        }, 1500)
        return
      }
      this.type = type
      if (this.productDetail.jumpUrl && this.productDetail.chainUrl) {
        this.shareWXText()
        return
      }
      this.changeUrl(this.shareWXText)
    },
    saveToPhoto () {
      // 保存视频到相册 先下载再保存
      if (window.plus) {
        var dtask = window.plus.downloader.createDownload(this.productDetail.videoUrl, () => { }, (d, status) => {
          // eslint-disable-next-line eqeqeq
          if (status == 200) {
            window.plus.gallery.save(d.filename, () => {
              this.$toast('保存视频到相册成功')
            }, (e) => {
              this.$toast('保存视频到相册失败')
            })
          } else {
            this.$toast('保存视频到相册失败')
          }
        })
        dtask.addEventListener('statechanged', function (task, status) {
          switch (task.state) {
            case 1: // 开始
              window.plus.nativeUI.showWaiting('下载中...')
              break
            case 2: // 已连接到服务器
              break
            case 3:
              // 每隔一定的比例显示一次
              if (task.totalSize !== 0) {
                var progress = task.downloadedSize / task.totalSize * 100
                progress = Math.round(progress)
                window.plus.nativeUI.showWaiting('下载中...' + progress + '%')
              }
              break
            case 4: // 下载完成
              window.plus.nativeUI.closeWaiting()
              break
          }
        })
        dtask.start()
      } else {
        document.addEventListener('plusready', () => {
          var dtask = window.plus.downloader.createDownload(this.productDetail.videoUrl, () => { }, (d, status) => {
            // eslint-disable-next-line eqeqeq
            if (status == 200) {
              window.plus.gallery.save(d.filename, () => {
                this.$toast('保存视频到相册成功')
              }, (e) => {
                this.$toast('保存视频到相册失败')
              })
            } else {
              this.$toast('保存视频到相册失败')
            }
          })
          dtask.addEventListener('statechanged', function (task, status) {
            switch (task.state) {
              case 1: // 开始
                window.plus.nativeUI.showWaiting('下载中...0%')
                break
              case 2: // 已连接到服务器
                break
              case 3:
                // 每隔一定的比例显示一次
                if (task.totalSize !== 0) {
                  var progress = task.downloadedSize / task.totalSize * 100
                  progress = Math.round(progress)
                  window.plus.nativeUI.showWaiting('下载中...' + progress + '%')
                }
                break
              case 4: // 下载完成
                window.plus.nativeUI.closeWaiting()
                break
            }
          })
          dtask.start()
        }, false)
      }
    },
    getTaoCommand (callback) {
      // 获取淘口令
      this.$http('GET', this.api.genTaoCommand, {
        itemUrl: this.productDetail.jumpUrl,
        logoUrl: this.productDetail.images[0],
        text: this.productDetail.itemName
      }).then(res => {
        if (res.data.success === true) {
          this.productDetail.tkl = res.data.model
          callback()
        } else {
          this.$toast(res.data.msgInfo)
        }
      })
    },
    saveInfo (callback) {
      // 保存中间页信息
      this.$http('POST', this.api.saveShareGoodsInfo, {
        goodsInfo: JSON.stringify({
          detail: this.productDetail,
          userInfo: this.$store.state.userInfo,
          hotList: this.hotList
        }),
        itemId: this.productDetail.contentId,
        platform: this.productDetail.platform
      }).then(res => {
        if (res.data.success === true) {
          this.qrcode = `${config.domain}/#/video?sign=${encodeURIComponent(
            res.data.model
          )}&itemId=${this.productDetail.contentId}&platform=${this.productDetail.platform}`
          if (callback) {
            callback()
          }
        }
      })
    },
    shareWX (type) {
      // 复制分享链接  先转链再写入剪切板
      this.type = type
      if (this.$store.state.token === '') {
        this.$toast('请先登录再分享')
        setTimeout(() => {
          this.toPage('login')
        }, 1500)
        return
      }
      this.$http('GET', this.api.share, {
        contentId: this.$route.query.id
      })
      if (window.plus) {
        window.plus.nativeUI.showWaiting('链接生成中....')
      }
      if (this.qrcode !== '') {
        if (type === 'copy') {
          this.setClipbordText(this.qrcode)
          this.$toast('链接已复制到您的剪切板')
          return
        }
      }
      this.changeUrl(() => {
        if (type === 'copy') {
          if (this.productDetail.platform === 'taobao' || this.productDetail.platform === 'tmall') {
            this.getTaoCommand(() => {
              this.saveInfo(() => {
                this.$nextTick(() => {
                  this.setClipbordText(this.qrcode)
                  this.$toast('链接已复制到您的剪切板')
                })
              })
            })
          } else {
            this.saveInfo(() => {
              this.$nextTick(() => {
                this.setClipbordText(this.qrcode)
                this.$toast('链接已复制到您的剪切板')
              })
            })
          }
        }
      })
    },
    shareWXText () {
      // 微信图文分享，先转链
      if (this.$store.state.token === '') {
        this.$toast('请先登录再分享')
        setTimeout(() => {
          this.toPage('login')
        }, 1500)
        return
      }
      this.$http('GET', this.api.share, {
        contentId: this.$route.query.id
      })
      if (this.qrcode !== '' && this.productDetail.chainUrl && this.productDetail.jumpUrl) {
        this.shareText()
        return
      }
      if (this.productDetail.platform === 'taobao' || this.productDetail.platform === 'tmall') {
        this.getTaoCommand(() => {
          this.saveInfo(this.shareText)
        })
      } else {
        this.saveInfo(this.shareText)
      }
    },
    shareText () {
      // 图文分享
      if (this.ossImg !== '') {
        var msg = {
          type: 'web',
          thumbs: [this.ossImg],
          pictures: [this.ossImg],
          href: this.qrcode,
          title: this.removeTag(this.productDetail.itemName).substring(0, 30),
          content: this.removeTag(this.productDetail.recomendReason).substring(0, 45)
        }
        if (this.type === 'friend') {
          this.share(this.$store.state.share.sweixin, msg, {
            title: '我的好友',
            extra: { scene: 'WXSceneSession' }
          })
        } else if (this.type === 'circle') {
          this.share(this.$store.state.share.sweixin, msg, {
            title: '我的朋友圈',
            extra: { scene: 'WXSceneTimeline' }
          })
        }
        return
      }

      let activeImg = document.querySelector('.video-product-left-img img')
      html2canvas(activeImg, {
        logging: true
      }).then(canvas => {
        let context = canvas.getContext('2d')
        context.mozImageSmoothingEnabled = false
        context.webkitImageSmoothingEnabled = false
        context.msImageSmoothingEnabled = false
        context.imageSmoothingEnabled = false
        let img = Canvas2Image.convertToJPEG(
          canvas,
          100,
          100
        )
        const ImageURL = img.src
        const block = ImageURL.split(';')
        const contentType = block[0].split(':')[1]
        const realData = block[1].split(',')[1]
        let blob = this.b64toBlob(realData, contentType)
        this.$store.dispatch('getOssInfo', () => {
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
                let shareImg = this.$store.state.ossInfo.host + '/' + key
                this.ossImg = this.$store.state.ossInfo.host + '/' + key
                console.log(shareImg)
                let msg = {
                  type: 'web',
                  thumbs: [shareImg],
                  pictures: [shareImg],
                  href: this.qrcode,
                  title: this.productDetail.itemName,
                  content: this.productDetail.recomendReason
                }
                if (this.type === 'friend') {
                  this.share(this.$store.state.share.sweixin, msg, {
                    title: '我的好友',
                    extra: { scene: 'WXSceneSession' }
                  })
                } else if (this.type === 'circle') {
                  this.share(this.$store.state.share.sweixin, msg, {
                    title: '我的朋友圈',
                    extra: { scene: 'WXSceneTimeline' }
                  })
                }
              }
            })
        })
      })
    },
    changePlay () {
      if (this.showShare === true) {
        this.showShare = false
        return
      }
      if (this.showComment === true) {
        this.showComment = false
        return
      }
      if (this.playNow === true) {
        this.playNow = false
      }
      if (this.playing === true) {
        this.$refs.video.pause()
        this.playing = false
      } else {
        this.$refs.video.play()
        this.$refs.video.muted = false
        this.playing = true
      }
    },
    stopPlay () {
      this.playing = false
    },
    toThird (detail) {
      // 跳转第三方平台
      this.toUrl(detail, () => {
        if (this.playing === true) {
          this.changePlay()
        }
      }, this.callback)
    },
    callback (res, chainUrl) {
      console.info('======callback, res=' + JSON.stringify(res))
      if (typeof res === 'string') {
        res = this.parseJSON(res)
      }
      if (!res.success) {
        if (res.data) {
          if (res.data.msgInfo === '1100') {
            return
          }
        }
        this.$toast(JSON.stringify(res))
      }
    },
    sendComment (text) {
      if (this.$store.state.token === '') {
        this.$toast('请先登录再评论')
        setTimeout(() => {
          this.toPage('login')
        }, 1500)
        return
      }
      let obj = {
        content: text,
        contentId: this.$route.query.id,
        commentId: ''
      }
      if (this.replyUser.userId) {
        // 回复
        obj.content = `回复 \r\b ${this.replyUser.nickName}\n\b ${
          obj.content
        }`
        obj.userId = this.replyUser.userId
        obj.commentId = this.replyUser.commentId
      }
      this.$http('POST', this.api.sendComment, obj).then(
        res => {
          if (res.data.success === true) {
            if (this.replyUser.userId) {
              this.refreshItem(res.data.model)
            } else {
              this.recommendList.unshift(res.data.model)
              this.clearReplyState()
            }
            this.productDetail.commentTimes += 1
          } else {
            this.$toast(res.data.msgInfo)
          }
        },
        error => {
          console.info(error)
          this.clearReplyState()
        }
      )
    },
    clearReplyState () {
      // 清楚回复人信息
      this.replyUser = {
        userId: '',
        nickName: '',
        commentId: '',
        index: -1,
        contentId: ''
      }
      this.commentText = ''
      this.inputHolder = '是时候发表评论了'
    },
    refreshItem (model) {
      // 局部刷新
      this.recommendList[this.replyUser.index].replies.unshift(
        model
      )
      this.clearReplyState()
    },
    toReplyPeople (commentId, userId, nickName, index, contentId) {
      this.replyUser = {
        userId,
        nickName,
        commentId,
        index,
        contentId
      }
      this.inputHolder = `回复${nickName}`
      this.$nextTick(() => {
        this.$refs.input.focus()
      })
    },
    toShowMoreReplys (commentId, contentId, offset, index) {
      // 行内查询更多
      this.$http('GET', this.api.queryCommentsById, {
        commentId,
        contentId,
        offset,
        limit: 3
      }).then(res => {
        if (res.data.success === true) {
          if (res.data.model.length < 3) {
            this.recommendList[index].replies = this.recommendList[index].replies.concat(res.data.model)
            this.recommendList[index].noMore = true
            this.$toast('没有更多了')
          } else {
            this.recommendList[index].replies = this.recommendList[index].replies.concat(res.data.model)
            this.recommendList[index].noMore = false
          }
        }
      })
    }
  },
  components: {
    // swiper,
    // swiperSlide
  }
}
</script>
