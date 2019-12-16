<style lang="scss" scoped>
.product2-content {
  width: 375px;
}
.product2-content-swiper {
  width: 375px;
  height: 200px;
  overflow: hidden;
  img {
    margin: 0 auto;
    width: auto;
    height: 200px;
    display: block;
  }
  /deep/ .swiper-pagination-bullet-active {
    background: #fb2c68;
  }
}
.product2-content-title {
  padding: 13px;
  font-size: 18px;
  line-height: 25px;
  color: #333333;
}
.product2-content-price {
  padding-left: 13px;
  font-family: "DINAlternate-Bold";
  font-size: 20px;
  color: #fb2c68;
}
.product2-content-time {
  margin-top: 5px;
  margin-left: 13px;
  font-size: 12px;
  color: #999999;
  text-indent: 30px;
  height: 20px;
  line-height: 20px;
  background-repeat: no-repeat;
  background-size: 20px;
  background-position: left center;
  &.tmall {
    background-image: url("data:image/png;base64,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");
  }
  &.tb {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGkAAABkCAMAAACywu7WAAABQVBMVEUAAAD\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/UAD\/\/\/\/\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");
  }
  &.jd {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAABelBMVEUAAAD/+vb0uLHhTTrocmPZIwrjWEbaKhTlYE7mZlXpe2ztkITmZlbumY70tKv40Mr30M351M752dX83dn/8O//8/L/+Pj/+Pj///r\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/lXkzodWbxq6Lys6rjWEbhTDnriHvwpp31wLjqgHL75+TdNiDfSjbgSTTjWkjeOCHyqaDytaz/6eThSzfhTzzrgnTzvrb/7u7/7OrcNyDrgHLtiH3siH3YHgb\/\/\/\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");
  }
  &.pdd {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAABNVBMVEUAAAD1AAr1AAn1AAn/ABf7GSL0AAr1AAr2AAr2AAn0AAn0AAn2AAv4AA/rRErsREvsRErtRUz0AAj\/\/\/\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");
  }
}
.product2-content-cert {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 355px;
  margin: 0 auto;
  border-bottom: 2px solid #f2f2f2;
  .product2-content-cert-subtitle {
    font-size: 12px;
    color: #999999;
    line-height: 50px;
  }
  .product2-content-cert-item {
    margin-left: 15px;
    padding: 3px 10px;
    font-size: 12px;
    color: #ffffff;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXcAAABkCAMAAABKK4BNAAAAdVBMVEX9pgsAAAD/shT/shL9qQz/rhb+qwz/shL/tBb+tRL/rRP9sg7/sxP/tRT8qAv/tBP/tA/9tRD9qwz+sRP+rxT+rBb9tBD+qhf9sA79rw39pwv+sxL8owr9rRX9rQz9qQv9sw78pQr9sg79txD+rhX9pQv+qgzxohWFAAAAEXRSTlP+AHwjtrZ7WhG2M7EpM1oNM+eYbnUAAASWSURBVHja7Z2LctowEEVl19AaSFMeBgwEwiv//4ldENJ1kTFed0Z0OveMJlqv9sgdpYODRFqzIK/A9BYkPj2TpAsSmzQxSdJfkLj0k8u6J3ypiUsvsev+rSiKRbGQJoE6FuirnG/XdRd6BYlHL3Hr/r0g8fju131QkHgM/Lr/KEg8fvzNun8UH9LcFX0FWPeBm8f2FlzbPszh/vQV/gDPVZs7fZxOxamQZnvUXnMyjDnkolJDX+Hjudo7CTZfRRLI22tp6FFDX+H7nyO/hfN6cJ9gHDn6Gv/k3jf17uYFQa6+hr7Kv+0TpB8zPy7hbHaanaTNJKzOidwFCTz0lX56Wfc0mMPO2zqmr/VPaWJ6cDDHc1BLv4PfMzPyCrjur0FeZ0h8LuerMxKby/mqXfjpbHpB+usXB64RBz19pZ/e3jeJYCWrh+A+tTn6Kt+fr7qhrtBX+f58NZ+SeOTYB56SeGAf+G1K4vGGc75wcD1dSwuvka9CX+FXzldR03Cf2rks9BU+1v1t3QE/r0BfwRueq2sSDzxX8zWJR+7PV8dIztdzabYXpEP+cUxf47v3TfkcoK6awzXiCvRVfn47X61x4bWAvtK356vj+dheSiAt7AHqKg59rb9OE5OPhSYX4/Vj9Dv4ubnLhzTfa0y/k2/GJC5cdwVc9/8ErntswnU/jo/S0APkgmv6nXwj146wFvlH8x7pd/JNjliH8+h38HOTpJij9vvZPCbQV/v2c0uupvk+Qeyhr/TT237kmMQkd/vvxzGJx9Huv/MvfGQqn1uyCezbNIE6xPQVfuVzS837nZamvU36Cv8XPj8zfw68GugrfHx+5n0+/5x/SpsLiB/0AuoE6egr/He/7iPUW1BXH9/n6Cv8EZ6rnyQeeK4ObeLweZDWJr72gsvTV/hD/7klzFMB8z/jk77G97/vMTzUszwspR2eQ1/lD+26p25cvtyBPOIwR1/p9y/rPpKoBfAC6Cv9w+j67wMvSVzS2+v7ksRk6H9/tX68XJbSli2gr/Dx+6vD0oG6wA1iVy+NvsIf4v0q3Dbgfi6mr/DxfnVUkniMsB9Zkni8Y/+9JPHA/vugLLflVlopIH7QC6gTpKOv8Ad4rqLegrr6+D5HX+HjuZptSTwyvw9c2sRkO5HWJr72gsvTV/hb974pwzwVttda14FtEG3pt/BBZte9P3mClXHVop5+6IPrPnB/QmLTT0w2IfHJzIS8go7rvvMR/U7gdaZu8t3u+R3od/Azea5+yaBDwno3jFFPX+l/9e3PkdZVUXXoK/3+7X3Tyl6uditpTxzUIaav8jO3T/AVutXeguuwlr7C3/nz1WzVxO7GVauHvsLP/H7kzxWJx0+ce6xIPCr//+qKxOPH/bqblZHWJr72gsvTV/hY94EdA5hzv9rvzd5eSyCtro6+wh/guWrzZ3OWBu/RfcJa+gofz9XMjsuXgPP+LM3GtgY9cvQVPs5XUd8A5gihr/CNP1+V3Ga/kfZnL0jXOGahr/Ld+aqrqdadN2dp4RyI8f2nr/Tt+aoEqOsAfbV/OV/dbP7dP99/62dmQ17Bb7WgOAdZ1xo+AAAAAElFTkSuQmCC");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
}
.product2-content-context {
  padding: 14px 10px 15px;
  border-bottom: 5px solid rgba($color: #f7f7f7, $alpha: 0.7);
  .product2-content-context-p {
    padding-bottom: 20px;
    font-size: 14px;
    line-height: 24px;
    color: #000000;
  }
  .product2-content-context-tip {
    font-size: 12px;
    color: #999999;
  }
}
.product2-content-hot {
  background-color: #f7f7f7;
  padding-bottom: 10px;
  .product2-content-hot-title {
    padding-top: 14px;
    padding-left: 10px;
    padding-bottom: 8px;
    font-size: 16px;
    color: #333333;
  }
}
.product2-content-qrcode {
  width: 375px;
  height: 200px;
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .product2-content-qrcode-left {
    width: 131px;
    height: 131px;
    margin-left: 35px;
    canvas {
      width: 100% !important;
      height: 100% !important;
    }
  }
  .product2-content-qrcode-right {
    margin-right: 45px;
    text-align: center;
    font-size: 14px;
    color: #666666;
    align-items: center;
    display: flex;
    flex-direction: column;
    .product2-content-qrcode-right-item {
      margin-bottom: 5px;
    }
    .product2-content-qrcode-right-img {
      width: 100px;
      height: 27px;
      background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZoAAABuCAMAAAAprCXqAAAC/VBMVEUAAADNzc0zMzM2Njabm5uampozMzOwsLA1NTU0NDQ0NDSampozMzM0NDQ1NTWZmZmdnZ2goKCampqZmZmlpaWampozMzOampo0NDScnJyampqZmZmZmZmZmZmZmZmbm5uampqampqampozMzOampqampo0NDQ0NDQ1NTU2NjY1NTWampozMzM0NDScnJw0NDSampqampqZmZn8RG/8RG+ampqampqbm5tGRkYzMzMzMzOampo0NDSampr7RG+ampqenp6ampozMzObm5v9RXCZmZmampqampqampr/QnL8RG/7Q28zMzM0NDT8RHA0NDT8RG/8RG+ampr8RG8zMzOampo5OTkzMzOampr8RHCampr7RG/7RG/8RG/7RG/8RG/Nzc38RHD8RG80NDQ0NDQ2NjYzMzP8RW/8RHD8RHD8RG/7RXD8RG81NTUzMzM0NDT7RG81NTXMzMwzMzP7Q3D8Qm/8RW/8RG/7RG8zMzP\/\/\/\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");
      background-repeat: no-repeat;
      background-size: 100% auto;
      background-position: center;
    }
  }
}
.product2-content-top {
  width: 375px;
  height: 65px;
  background-color: #fb2c68;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.product2-content-top-left {
  margin-left: 11px;
  width: 36px;
  height: 36px;
  border-radius: 36px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
}
.product2-content-top-right {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 6px;
  .product2-content-top-right-line {
    font-size: 11px;
    color: #ffffff;
  }
  .product2-content-top-right-line2 {
    margin-top: 5px;
    padding: 1px 20px;
    border-radius: 9px;
    border: solid 1px #fee4b3;
    opacity: 0.45;
    font-size: 12px;
    color: #fee4b3;
  }
}
</style>

<template>
  <div class="product2-content" id="savePic">
    <div class="product2-content-top" v-if="$store.state.token">
      <div class="product2-content-top-left">
        <img :src="headerImg" alt />
      </div>
      <div class="product2-content-top-right">
        <div
          class="product2-content-top-right-line"
        >{{$store.state.userInfo.nickName}}为你准备了{{productDetail.couponInfo.discount?`${productDetail.couponInfo.discount}元`:''}}红包，快下载好价鼻子APP领取吧</div>
        <div class="product2-content-top-right-line2">邀请码:{{$store.state.userInfo.inviteCode}}</div>
      </div>
    </div>
    <div class="product2-content-swiper">
      <swiper :options="swiperOption" ref="imageSwiper">
        <swiper-slide v-for="(item,index) in images" :key="index">
          <img :src="item" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="product2-content-title">{{productDetail.itemName}}</div>
    <div
      class="product2-content-price"
    >{{productDetail.finalPrice}}元{{(productDetail.couponInfo && productDetail.couponInfo.discount && productDetail.couponInfo.discount !=='0.00')?'（需用券）':''}}</div>
    <div
      class="product2-content-time"
      :class="checkPlatformClass(productDetail.platform)"
    >{{checkPlatform(productDetail.platform)}} | {{formatTime(productDetail.publicTime)}}</div>
    <div class="h5"></div>
    <div
      class="product2-content-cert"
      v-if="productDetail.couponInfo.quota && productDetail.couponInfo.quota!=='0.00'"
    >
      <div class="product2-content-cert-subtitle">领券</div>
      <div
        class="product2-content-cert-item"
      >满{{productDetail.couponInfo.quota}}减{{productDetail.couponInfo.discount}}</div>
    </div>
    <div class="product2-content-context">
      <div class="product2-content-context-p" v-html="productDetail.recomendReason"></div>
    </div>
    <div class="product2-content-qrcode">
      <div class="product2-content-qrcode-left">
        <Canvas ref="canvas"></Canvas>
      </div>
      <div class="product2-content-qrcode-right">
        <div class="product2-content-qrcode-right-item">长按识别图中二维码</div>
        <div class="product2-content-qrcode-right-item">查看更多信息</div>
        <div class="product2-content-qrcode-right-img"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import QRCode from 'qrcode'
export default {
  props: ['productDetail', 'images', 'qrcode', 'headerImg'],
  data () {
    return {
      swiperOption: {
        speed: 300,
        pagination: {
          el: '.swiper-pagination'
        }
      },
      headUrl: ''
    }
  },
  created () {
    if (this.qrcode !== '') {
      QRCode.toCanvas(this.$refs.canvas, this.qrcode, () => { })
    }
  },
  watch: {
    qrcode (newValue) {
      if (newValue !== '') {
        QRCode.toCanvas(this.$refs.canvas, newValue, () => { })
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>
