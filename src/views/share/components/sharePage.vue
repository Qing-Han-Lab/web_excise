<style lang="scss" scoped>
.share-page {
  width: 375px;
  .share-page-head {
    width: 375px;
    height: 113px;
    background-color: rgb(238, 134, 96);
    overflow: hidden;
    text-align: center;
    .share-page-head-name {
      margin-top: 30px;
      font-size: 24px;
      color: #ffffff;
    }
  }
  .share-page-box {
    width: 375px;
    background-color: #ffffff;
    border-radius: 10px 10px 0px 0px;
    margin-top: -10px;
    .share-page-box-portrait {
      width: 60px;
      height: 60px;
      background-color: #d8d8d8;
      border: solid 3px #ffffff;
      border-radius: 50%;
      margin: 0px auto;
      transform: translate3d(0, -50%, 0);
      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
      }
    }
    .share-page-box-name {
      font-family: "PingFangSC-Medium";
      font-size: 14px;
      color: #333333;
      text-align: center;
      margin-top: -17px;
    }
    .share-page-box-title {
      width: 300px;
      // height: 24px;
      // display: -webkit-box;
      // -webkit-box-orient: vertical;
      // -webkit-line-clamp: 1;
      // overflow: hidden;
      text-align: center;
      margin: 6px auto;
      font-family: "PingFangSC-Medium";
      font-size: 17px;
      color: #000000;
      line-height: 24px;
      text-indent: 20px;
      font-weight: bold;
      &.taobao {
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAnFBMVEUAAAD+Uwn+Uwn/VQr/VAr/Uwn/VAr+Uwj/Ugr/Ugr/VQz/Vwn/cHD+Ugn+Ugj+Ugn9Uwn/Uwr/YST+Uwj+Ugn+Ugj+Uwn+Uwn9Uwn9Uwj/VAv/VAv/VA3+Ugn9Ugr/Uwn/Uwj/WAr+Ugn+Uwj9Ugn9Uwn/Ugn/VQn/WA3/WxL/YxX9Uwn/Ugj/Uwn/VAn/Vgr/VQ//XQ/+Ugj+UgiMbgD0AAAAM3RSTlMAy+dOZFhI9GI/KRwC4tXGkmgH+O7bz7KfmEQsJquEdVsY6sCljjs1Eg4MiXpwUDEhELipmfQ9AAABPElEQVQoz4XRV46DQBBF0Qdjcs45Oecwtf+9TYFHgCwk3y/oo2qpVfieWeQ/s+TDayS/XtNHwa/+bw4tpGgD7mgx8dUPKrScyqgNl1Q20aUK57hllIjTYTqWCTUQ3KvnXQTiNoxqP2gC2Q0ofZz3cg7kfIfAuCIu06XYB2sS0HDczjAm5YFCxvH94gNOE2bmzi706Iin3JdJQDhiAzS0lqEagNc0CWM0IjklEmXvkgZY/MtoT0iWeXUMw/CBzjBqxniGIlwxTVMd2KUr4WNSgi11+XCthJjRmrDGg2ToPVYHeIzKiC6wpRuw7wBoOOc404AqPxN4EoU8Zpbqhrz0iPuIoQp32H+/vbZddTjZ/DzGn2ED01Lbwii8iD8SRp1oORdcRMtpPcrLVmFIDRYsOeFdWTuROMuKt3d86w8Z8E9mryZhzAAAAABJRU5ErkJggg==")
          no-repeat;
        background-size: 18px;
        background-position-y: 3px;
      }
      &.jd {
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAcCAMAAABIzV/hAAAAolBMVEUAAADvKhnuKhnuKhnyLBvtKhjvKhnuKhntKhjuKRjtKxnvKhr/Li7tKRj\/\/\/\/2n5fxXVDyZ1v4q6T4rafwU0btMSD6yMT6w775vLf1jILzeG7xWk3uPC3uNib++vn96un85uT72NX4tK/3pZ72lo30gXfze3DxYVTxV0nvRzjvQDHtLBv+9PT5uLL3o5z2npb2mpL1iH/0hHrzdmvyb2TvRTawFPZUAAAADXRSTlMAPFyZH/SN7+eIcjELARm9ZwAAALdJREFUKM+l0dcOgjAYhuFfBZz9BWVP2cs97v/WLAkQiK0nvEdNnjRpvgLM5swEAImwE7cgEk4SEF6LaVRlDlFt+616P6Tggeyx6ZTVLHoo6S3A0GWQTE/aFXU20Qx0xnTsycY7jwo0eeSiziNnfOs1eEaKyZAstDqqQ1QHVAUot1QaeCEdeUnkY0QoxVZs+GhqPX3ocE+tIdpZlwfzau3cZZ4X7vSv5NOSR2vYcGQlAAgzZjv40xdpsSZnOcR9dgAAAABJRU5ErkJggg==")
          no-repeat;
        background-size: 18px;
        background-position-y: 3px;
      }
      &.pdd {
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAcCAMAAABIzV/hAAABAlBMVEUAAAD1AAr1AAn0AAn/ADH1AAr1AAr1AAr1AAn1AAv2AAv1AAr/AA/1AAn0AAn1AAr1AAr0AAn\/\/\/\/3UVf9wML7nqH3OT/8urz8r7H8qq37mJv+6Oj94eL6e4D1FR3/+Pn/6uv8ycr9xMb7m5/4WmD0DRX0CRH/9fb/7e793N3+1Nb90dP7oqb7lZn6jZH5c3j5cXb5aW73P0X1Iin+8vL+19n9x8j8srb6n6L6kJP6gob5gIT6d3z5b3T4ZGn5XWP3Vlv3RUz3NTz2GyP95eX+2dv9zM78tbj8rK/7paj4WF34SU/2MTj1KTD93t/9tbn7trj7pKf7j5P6iI35hIj4TVSDojxZAAAAEXRSTlMAmsS/BbmzkYx1XU4R4KWFg5SlL08AAAFwSURBVCjPfdDFVsNQEIDhS3FnJtfi1qTuXurFXd//VShJoQdK+Tez+M7MYsh/bexurS+1eXIwkwT82eEB2YMVHZPtVbRJ1qKZLLYDiDPzpWgmIgqukeEDh1m1Jsq0mH5R1ShcMlUpdQEG+vRV0r5+E5OVwWqZedBFM4lYyckhiPpdREq+panM0bxBCMpZw5bnBU8zY8JcJ8WQ1jTezvNnlNimeBpT9j3XKZchMJopewDKW/Gi0phvVcA0qgHcG1y0FADuvkCyFJNzIQXLTEKpaFlec1VXNb4OptQzm6HT697zysiz1XTO12PiAnHsF+FWWKGGSXpl8kc6iij000PGehY/7w+bn6RAgU7njxrVkSGq1zoVvpuSTqP3/UOouazeEXmdtryiITMTmFMU1+ybiU+rfVRvA/hBcJfNXjp0XNLHAL8IwgKmKT5ZsEwASkaUARa0A4ssCxZtkX1Y0S4hR39LYoMQsr+zttT23kxW9wGuFUDQhzf0lgAAAABJRU5ErkJggg==")
          no-repeat;
        background-size: 18px;
        background-position-y: 3px;
      }
    }
    .share-page-box-rob {
      font-family: "PingFangSC-Medium";
      font-size: 14px;
      text-align: center;
      margin: 6px auto;
      color: #fe4741;
    }
    .share-page-box-wai {
      width: 347px;
      height: 367px;
      background-color: #fe4741;
      border-radius: 10px;
      margin: 12px auto;
      overflow: hidden;
      .share-page-box-wai-nei {
        width: 323px;
        height: 275px;
        background-color: #d8d8d8;
        border-radius: 10px;
        margin: 14px auto 0px;
        img {
          width: 323px;
          height: 275px;
        }
      }

      .share-page-box-wai-price {
        margin-top: 7px;
        display: flex;
        justify-content: space-around;
        text-align: center;
        .share-page-box-wai-originalprice {
          color: #ffffff;
          font-size: 12px;
          margin-top: 18px;
          .share-page-box-wai-originalprice-price {
            display: flex;
            .share-page-box-wai-originalprice-price-icon {
              font-size: 5px;
              line-height: 15px;
            }
          }
        }
        .share-page-box-wai-hottest {
          color: #fceb91;
          font-size: 14px;
          text-align: center;
          margin-top: 6px;
          .share-page-box-wai-originalprice-money {
            font-size: 20px;
            color: #ffffff;
            display: flex;
            .share-page-box-wai-originalprice-money-icon {
              font-size: 10px;
              line-height: 27px;
            }
          }
        }
      }
    }
    .share-page-box-fingerprint {
      width: 347px;
      height: 135px;
      background-color: #fff9f8;
      border-radius: 10px;
      margin: 15px auto;
      display: flex;
      justify-content: space-around;
      .share-page-head-code {
        width: 120px;
        height: 120px;
        margin: auto 0px;
        background-color: #ffffff;
        canvas {
          width: 120px !important;
          height: 120px !important;
        }
      }
      .share-page-box-fingerprint-left {
        width: 58px;
        height: 33px;
        color: #999999;
        font-size: 12px;
        text-align: center;
        margin: auto 3px;
      }
    }
  }
  .share-page-flow {
    width: 375px;
    height: 128px;
    .share-page-flow-top {
      font-size: 12px;
      color: #666666;
      margin-top: 12px;
      margin-left: 14px;
    }
    .share-page-flow-center {
      width: 310px;
      height: 51px;
      margin: 7px auto;
      background: url("data:image/png;base64,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")
        no-repeat;
      background-size: 310px 51px;
    }
    .share-page-flow-bottom {
      width: 347px;
      height: 17px;
      margin: 0px auto;
      font-size: 12px;
      color: #666666;
      display: flex;
      justify-content: space-between;
      line-height: 15px;
      .yuan {
        width: 15px;
        height: 15px;
        background-color: #d8d8d8;
        border-radius: 50%;
        text-align: center;
        line-height: 15px;
        margin-right: 1px;
      }
      .share-page-flow-bottom1 {
        display: flex;
        &:nth-child(3) {
          margin-right: -10px;
        }
      }
    }
  }
}
</style>
<template>
  <div class="share-page">
    <div class="share-page-head">
      <div class="share-page-head-name">好价鼻子</div>
    </div>
    <div class="share-page-box">
      <div class="share-page-box-portrait">
        <img :src="headerImg" alt />
      </div>
      <div class="share-page-box-name">{{$store.state.userInfo.nickName || '好价鼻子'}}为你精选</div>
      <div>
        <div
          class="share-page-box-title"
          :class="{'taobao':product.platform==='taobao','jd':product.platform==='jingdong','pdd':detail.platform==='pingduoduo'}"
        >{{product.itemName.length > 30 ? `${product.itemName.substring(0,30)}...`:product.itemName}}</div>
      </div>
      <div
        class="share-page-box-rob"
        v-if="product.saledNumber"
      >{{product.saledNumber>10000?`${Number(product.saledNumber/10000).toFixed(1)}万`:product.saledNumber}}人已抢</div>
      <div class="share-page-box-wai">
        <div class="share-page-box-wai-nei">
          <img :src="img" alt />
        </div>
        <div class="share-page-box-wai-price">
          <div class="share-page-box-wai-originalprice">
            日常价:
            <div class="share-page-box-wai-originalprice-price">
              <div class="share-page-box-wai-originalprice-price-icon">￥</div>
              {{(product.finalPrice*1.0 + (product.couponAmount?product.couponAmount:0)*1.0).toFixed(2)}}
            </div>
          </div>
          <div class="share-page-box-wai-hottest">
            鼻子劲爆价
            <div class="share-page-box-wai-originalprice-money">
              <div class="share-page-box-wai-originalprice-money-icon">￥</div>
              {{Number(product.finalPrice).toFixed(2)}}
            </div>
          </div>
          <div class="share-page-box-wai-originalprice">
            日常价:
            <div class="share-page-box-wai-originalprice-price">
              <div class="share-page-box-wai-originalprice-price-icon">￥</div>
              {{(product.finalPrice*1.0 + (product.couponAmount?product.couponAmount:0)*1.0).toFixed(2)}}
            </div>
          </div>
        </div>
      </div>
      <div class="share-page-box-fingerprint">
        <div class="share-page-box-fingerprint-left">长按识别二维码</div>
        <div class="share-page-head-code">
          <canvas ref="qrcode"></canvas>
        </div>
      </div>
      <div class="share-page-box-operate"></div>
    </div>
    <div class="share-page-flow">
      <div class="share-page-flow-top">购买步骤</div>
      <div class="share-page-flow-center"></div>
      <div class="share-page-flow-bottom">
        <div class="share-page-flow-bottom1">
          <div class="yuan">1</div>长按长图2秒
        </div>
        <div class="share-page-flow-bottom1">
          <div class="yuan">2</div>复制淘口令
        </div>
        <div class="share-page-flow-bottom1">
          <div class="yuan">3</div>打开淘宝购买
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import QRCode from 'qrcode'
export default {
  name: 'sharePage',
  props: {
    img: {
      type: String,
      default: ''
    },
    qrCode: {
      type: String,
      default: ''
    },
    detail: {},
    headerImg: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      product: {}
    }
  },
  created () {
    this.product = this.parseJSON(this.detail)
    console.log(this.product)
  },
  mounted () {
    if (this.qrCode !== '') {
      QRCode.toCanvas(this.$refs.qrcode, this.qrCode, function (error) {
        console.log(error)
      })
    }
  }
}
</script>
