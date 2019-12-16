<style scoped lang='scss'>
.introduce {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f7f7f7;
}
.introduce-bg {
  background: #f7f7f7;
  width: 375px;
  position: absolute;
}
.introduce-top {
  .introduce-top-yuan {
    width: 91px;
    height: 91px;
    border: 1px solid #f71b69;
    border-radius: 50% 50%;
    margin: 93px auto 0px;
    background-image: url("../../assets/logo.png");
    background-repeat: no-repeat;
    background-size: 91px 91px;
    background-position: center center;
  }
  .introduce-bizi {
    font-family: "SourceHanSansSC-Medium";
    font-size: 18px;
    letter-spacing: 0px;
    color: #333333;
    margin: 5px auto 2px;
    text-align: center;
  }
  .introduce-jie {
    font-family: "SourceHanSansSC-Regular";
    font-size: 11px;
    letter-spacing: 0px;
    color: #333333;
    text-align: center;
  }
}
.introduce-center {
  width: 323px;
  height: 67px;
  font-family: "SourceHanSansSC-Regular";
  font-size: 12px;
  line-height: 22px;
  letter-spacing: 0px;
  color: rgba(51, 51, 51, 0.6);
  margin: 14px auto 0px;
}
.introduce-bottom {
  font-family: "SourceHanSansSC-Regular";
  font-size: 11px;
  line-height: 22px;
  letter-spacing: 0px;
  color: rgba(51, 51, 51, 0.6);
  margin-top: 150px;
  .introduce-bottom-version {
    text-align: center;
  }
  .introduce-bottom-version2 {
    color: blue;
    text-align: center;
    text-decoration: underline;
  }
  .introduce-bottom-site {
    text-align: center;
  }
}
</style>

<template>
  <div class="introduce">
    <div class="introduce-bg">
      <div class="introduce-top">
        <div class="introduce-top-yuan"></div>
        <div class="introduce-bizi">好价鼻子</div>
        <div class="introduce-jie">能赚钱 惠省钱</div>
      </div>
      <div class="introduce-center">
        一站式的内容导购分享平台，
        在这里你能get到全网最具性价比的商品推荐信息，
        同时成为我们的会员后还能通过记得分享赚得佣金，
        5亿用户都可以用的“内容导购返佣创业平台
      </div>
      <div class="introduce-bottom">
        <div class="introduce-bottom-version2" @click="toPage('useProtocool')">《好价鼻子用户使用协议》</div>
        <div class="introduce-bottom-version">版本号 {{appversion}}</div>
        <div class="introduce-bottom-site">copyright @杭州启立网络科技有限公司</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      appversion: '1.0.0'
    }
  },
  created () {
    if (window.plus) {
      this.appversion = window.plus.runtime.version
    } else {
      document.addEventListener('plusready', () => {
        this.appversion = window.plus.runtime.version
      }, false)
    }
  }
}
</script>
