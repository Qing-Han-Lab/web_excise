<style scoped lang='scss'>
.taobaoentrance {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f7f7f7;
  overflow: auto;
  .taobaoentrance-input {
    width: 355px;
    height: 163px;
    margin: 0px auto;
    background: url("./images/icon-bg.png") no-repeat;
    background-size: 355px 163px;
    overflow: hidden;
    .taobaoentrance-input-conter {
      width: 328px;
      height: 29px;
      line-height: 29px;
      margin-top: 120px;
      margin-left: 14px;
      border-radius: 30px;
      background: url("../search/images/home_search.png") no-repeat left;
      background-size: 19px;
      background-position-x: 11px;
      text-indent: 35px;
      color: #646464;
      font-size: 12px;
      border: 0;
      outline: none;
      background-color: #fff;
    }
  }
  .taobaoentrance-icon {
    width: 202px;
    height: 15px;
    background: url("./images/icon-like.png") no-repeat;
    background-size: 202px 15px;
    margin: 11px auto 5px;
  }
  .taobaoentrance-commodity {
    flex: 1;
    display: flex;
    padding:0px 5px;
    flex-wrap: wrap;
    justify-content: flex-start;
    overflow: hidden;
    .taobaoentrance-commodity-box {
      width: 172px;
      height: 280px;
      background-color: #fff;
      border-radius: 4px;
      margin: 5px 5px;
      overflow: hidden;
      .taobaoentrance-commodity-box-img {
        width: 172px;
        height: 172px;
        background-color: #ffffff;
        margin-bottom: 8px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .taobaoentrance-commodity-box-taobao {
        width: 163px;
        height: 16px;
        margin: 2px auto 0px;
        display: flex;
        .taobaoentrance-commodity-box-taobao-t {
          width: 81px;
          height: 17px;
          line-height: 17px;
          color: #f7673e;
          font-size: 12px;
          text-align: center;
          background:rgba(247,103,62,0.2);
        }
        .taobaoentrance-commodity-box-taobao-name {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          overflow: hidden;
          color: #333;
          font-size: 14px;
          margin-top: 1px;
          margin-left: 4px;
          font-family: "Helvetica";
        }
      }
      .taobaoentrance-commodity-box-protest {
        width: 163px;
        height: 16px;
        color: #868686;
        font-size: 12px;
        margin: 3px auto 0px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        line-height: 16px;
      }
      .taobaoentrance-commodity-box-ticket {
        width: 163px;
        height: 14px;
        display: flex;
        line-height: 14px;
        color: #fff;
        font-size: 8px;
        margin: 21px auto 10px;
        .taobaoentrance-commodity-box-arch {
          font-size: 12px;
          height: 14px;
          line-height: 14px;
          padding: 0px 5px;
          background-color: #fb2c68;
          border: 1px solid #fb2c68;
          font-family: "DINAlternate-Bold";
        }
        .taobaoentrance-commodity-box-award {
          font-size: 12px;
          height: 14px;
          line-height: 14px;
          padding: 0px 5px;
          border: 1px solid rgba(251, 61, 116, 0.5);
          margin-left: 5px;
          color: #fb2c68;
          font-family: "DINAlternate-Bold";
        }
      }
      .taobaoentrance-commodity-box-price {
        width: 163px;
        height: 14px;
        margin: 0px auto;
        display: flex;
        justify-content: space-between;
        .taobaoentrance-commodity-box-price-rob {
          color: #868686;
          font-size: 12px;
          font-family: "DINAlternate-Bold";
        }
        .taobaoentrance-commodity-box-price-number {
          display: flex;
          color: #fb2c68;
          font-size: 12px;
          .taobaoentrance-commodity-box-price-number-money {
            font-size: 20px;
            line-height: 10px;
            font-family: "DINAlternate-Bold";
          }
        }
      }
    }
  }
}
.taobaoentrance::-webkit-scrollbar{
  display: none
}
</style>
<template>
  <div class="taobaoentrance">
    <div class="taobaoentrance-input">
      <div
        class="taobaoentrance-input-conter"
        @click="toPage('search')"
      >复制宝贝标题，搜淘宝隐藏优惠券</div>
    </div>
    <div class="taobaoentrance-icon"></div>
    <div
      class="taobaoentrance-commodity"
      v-infinite-scroll="loadMore"
      :infinite-scroll-disabled="loading"
      infinite-scroll-distance="200"
      infinite-scroll-immediate-check="false"
    >
      <div
        class="taobaoentrance-commodity-box"
        v-for="(item,index) in carList"
        :key="index"
        @click="toPage('product',{item:item})"
      >
        <div class="taobaoentrance-commodity-box-img">
          <img :src="checkUrl(item.itemPicUrl)" />
        </div>
        <div class="taobaoentrance-commodity-box-taobao">
          <div class="taobaoentrance-commodity-box-taobao-t">{{item.platform | getPlatformName}}</div>
          <div class="taobaoentrance-commodity-box-taobao-name">{{item.itemName}}</div>
        </div>
        <div class="taobaoentrance-commodity-box-protest">{{item.shopName}}</div>
        <div class="taobaoentrance-commodity-box-ticket">
          <div class="taobaoentrance-commodity-box-arch">券:{{item.couponAmount}}元</div>
          <div
            class="taobaoentrance-commodity-box-award"
            v-if="item.commissionAmount!=='0.00'"
          >奖:{{item.commissionAmount}}元</div>
        </div>
        <div class="taobaoentrance-commodity-box-price">
          <div class="taobaoentrance-commodity-box-price-number">
            ￥
            <div class="taobaoentrance-commodity-box-price-number-money">{{item.finalPrice}}</div>
          </div>
          <div
            class="taobaoentrance-commodity-box-price-rob"
          >已抢:{{item.saledNumber>10000?`${Number(item.saledNumber/10000).toFixed(1)}万`:item.saledNumber}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      cabPage: 2,
      carList: [],
      cabbageFaild: false,
      loading: false,
      allLoaded: false
    }
  },
  created () {
    this.getData()
  },
  filters: {
    getPlatformName (strName) {
      if (strName === 'tmall') {
        return '天猫'
      } else if (strName === 'taobao') {
        return '淘宝'
      } else if (strName === 'jingdong') {
        return '京东'
      } else if (strName === 'pingduoduo') {
        return '拼多多'
      }
    }
  },
  methods: {
    getData () {
      this.$http('GET', this.api.searchFavoriteProducts, {
        page: 1,
        pageSize: 20
      }).then(res => {
        if (res.data.success === true) {
          this.carList = res.data.model.list || []
          if (this.carList.length === 0) {
            this.cabbageFaild = true
          } else {
            this.cabbageFaild = false
          }
        }
      })
    },
    loadMore () {
      // 加载更多
      if (this.allLoaded === true) {
        console.log('没有更多了')
        return
      }
      if (this.loading === true) {
        return
      } else {
        this.loading = true
      }
      this.$http('GET', this.api.searchFavoriteProducts, {
        page: this.cabPage,
        pageSize: 20
      }).then(res => {
        if (res.data.success === true) {
          if (res.data.model.list != null) {
            if (res.data.model.list.length > 0) {
              this.cabPage = this.cabPage + 1
              this.$nextTick(() => {
                this.carList = this.carList.concat(res.data.model.list)
              })
            } else {
              this.allLoaded = true
            }
          } else {
            this.allLoaded = true
          }
        }
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
    }
  }
}
</script>
