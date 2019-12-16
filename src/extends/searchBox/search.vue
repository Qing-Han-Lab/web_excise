<style lang="scss" scoped>
.mask {
  position: fixed;
  background: rgba($color: #000000, $alpha: 0.5);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
}
.search-top {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  height: 310px;
  width: 302px;
  z-index: 101;
  background-image: url("./images/search_bg.png");
  background-size: 302px 310px;
  background-repeat: no-repeat;
  background-position: center center;
  .search-top-text {
    margin: 115px auto 0;
    width: 204px;
    font-family: "SourceHanSansSC-Regular";
    font-size: 14px;
    line-height: 20px;
    color: #333333;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .search-top-bottom {
    position: absolute;
    bottom: 0;
    left: 20px;
    width: 260px;
    height: 64px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    .search-top-bottom-item {
      margin-top: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .search-top-bottom-item-img {
        width: 40px;
        height: 40px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .search-top-bottom-item-text {
        margin-top: 3px;
        font-family: 'SourceHanSansSC-Regular';
        font-size: 10px;
        color: #ffffff;
      }
    }
  }
  .search-top-close {
    position: absolute;
    top: 0;
    right: 15px;
    z-index: 102;
    width: 30px;
    height: 30px;
  }
  .search-top-subtitle {
    position: absolute;
    width: 100%;
    bottom: 65px;
    text-align: center;
    height: 40px;
    line-height: 40px;
    color: #999999;
    font-size: 12px;
  }
}
</style>

<template>
  <div class="search" v-if="isShowSearch">
    <div class="mask" @click="close"></div>
    <div class="search-top">
      <div class="search-top-close" @click="close"></div>
      <div class="search-top-text">{{title}}</div>
      <div class="search-top-subtitle">请点击下方</div>
      <div class="search-top-bottom">
        <div class="search-top-bottom-item" @click="openSearch('taobao')">
          <div class="search-top-bottom-item-img">
            <img src="./images/icon_tb.png" alt="">
          </div>
          <div class="search-top-bottom-item-text">淘宝</div>
        </div>
        <div class="search-top-bottom-item" @click="openSearch('jingdong')">
          <div class="search-top-bottom-item-img">
            <img src="./images/icon_jd.png" alt="">
          </div>
          <div class="search-top-bottom-item-text">京东</div>
        </div>
        <div class="search-top-bottom-item" @click="openSearch('pingduoduo')">
          <div class="search-top-bottom-item-img">
            <img src="./images/icon_pdd.png" alt="">
          </div>
          <div class="search-top-bottom-item-text">拼多多</div>
        </div>
        <div class="search-top-bottom-item" v-if="isHot" @click="goknock()">
          <div class="search-top-bottom-item-img">
            <img src="./images/icon_hot.png" alt="">
          </div>
          <div class="search-top-bottom-item-text">爆料</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      isShowSearch: false,
      isHot: false
    }
  },
  methods: {
    openSearch (type) {
      this.$search.hide()
      this.toPage('search', { type: type, searchKey: this.title }, 'fade-in')
    },
    close () {
      this.$search.hide()
    },
    goknock () {
      let first = 1; let second = 1
      this.toPage('knockgoodprice', { first: first, second: second, url: this.title })
    }
  }
}
</script>
