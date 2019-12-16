<style lang="scss" scoped>
.search {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  .search-mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba($color: #000000, $alpha: 0.5);
    z-index: 10;
  }
  .search-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    width: 281px;
    height: 239px;
    z-index: 11;
    border-radius: 10px;
    background-image: url("./images/bg.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% 100%;
    .search-box-top {
      position: relative;
      border-radius: 10px;
      width: 281px;
      height: 44px;
      line-height: 44px;
      text-align: center;
      font-size: 18px;
      color: #fff;
    }
    .search-box-center {
      margin: 0 14px;
      height: 135px;
      display: flex;
      flex-direction: row;
      align-items: center;
      .search-box-center-img {
        width: 92px;
        height: 92px;
        img {
          width: 92px;
          height: 92px;
        }
      }
      .search-box-center-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        .search-box-center-info-title {
          font-size: 14px;
          color: #333;
          word-break: break-all;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        .search-box-center-info-price {
          margin-top: 20px;
          font-family: "DINAlternate-Bold";
          font-size: 16px;
          color: #fa1f6b;
          span {
            font-size: 11px;
          }
        }
        .search-box-center-info-prize {
          margin-top: 6px;
          background-color: #fbe99f;
          font-size: 12px;
          color: #8b7550;
          padding: 1px 5px;
          span {
            font-size: 9px;
          }
        }
      }
    }
    .search-box-bottom {
      margin: 0 18px;
      height: 58px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .search-box-bottom-knock {
        width: 113px;
        height: 33px;
        line-height: 33px;
        text-align: center;
        border-radius: 18px;
        border: solid 1px #fa1f6b;
        font-size: 14px;
        color: #fa1f6b;
      }
      .search-box-bottom-buy {
        width: 113px;
        height: 33px;
        line-height: 33px;
        text-align: center;
        background-color: #fa1f6b;
        border-radius: 18px;
        color: #ffffff;
      }
    }
    .search-box-close {
      position: absolute;
      bottom: -40px;
      left: 50%;
      width: 23px;
      height: 23px;
      background: url('./images/icon_close.png') no-repeat center center;
      background-size: cover;
      transform: translate3d(-50%,0,0);
    }
  }
}
</style>

<template>
  <div class="search" v-if="isShowSearch">
    <div class="search-mask" @click="hide"></div>
    <div class="search-box">
      <div class="search-box-top">猜你想要</div>
      <div class="search-box-center">
        <div class="search-box-center-img">
          <img src="../../assets/demo.jpg" alt />
        </div>
        <div class="search-box-center-info">
          <div class="search-box-center-info-title">oversize工装外套男士春秋潮牌ins帅气oversize工装外套男士春秋潮牌ins帅气</div>
          <div class="search-box-center-info-price">
            <span>￥</span>122.22
            <span>抢购</span>
          </div>
          <div class="search-box-center-info-prize">
            <span>奖￥</span>5.99
          </div>
        </div>
      </div>
      <div class="search-box-bottom">
        <div class="search-box-bottom-knock">去爆料</div>
        <div class="search-box-bottom-buy">购买省</div>
      </div>
      <div class="search-box-close" @click="hide"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShowSearch: false
    }
  },
  methods: {
    hide () {
      this.$searchProduct.hide()
    }
  }
}
</script>
