<style lang="scss" scoped>
.load {
  text-align: center;
}

.load2 {
  padding-top: 20px;
}

.loadAgain {
  display: inline;
  color: #569cff;
  font-size: 12px;
  font-family: "DINAlternate-Bold";
  padding: 3px 10px;
  border: 1px solid #569cff;
  border-radius: 20px;
}
</style>

<template>
  <!-- 下部分 -->
  <div class="one" ref="one">
    <div
      class="home-content-knock-item"
      v-for="(item,index) in hotProdcts"
      :key="index"
      @click="toPage('product',{item:item})"
    >
      <div class="home-content-knock-item-left">
        <img v-lazy="checkUrl(item.itemPicUrl)" />
      </div>
      <div class="home-content-knock-item-right">
        <div
          class="home-content-knock-item-right-title"
          :class="{'tb':item.platform==='taobao','jd':item.platform==='jingdong','pdd': item.platform==='pingduoduo','tm': item.tmall}"
        >{{item.itemName}}</div>
        <div class="home-content-knock-item-right-marks" v-if="item.shopName">
          <div class="home-content-knock-item-right-marks-item">{{item.shopName}}</div>
        </div>
        <div class="home-content-knock-item-right-price">
          <div class="home-content-knock-item-right-price-now">
            <span>￥</span>
            {{item.finalPrice}}
          </div>
          <div
            class="home-content-knock-item-right-price-old"
            v-if="item.originPrice"
          >￥{{item.originPrice}}</div>
          <div
            class="home-content-knock-item-right-price-certificate"
            v-if="item.couponAmount"
          >{{item.couponAmount}}元券</div>
        </div>
        <div class="home-content-knock-item-right-buy">
          <div
            class="home-content-knock-item-right-buy-price"
            v-if="item.commissionAmount!=='0.00'"
          >
            <div class="home-content-knock-item-right-buy-price-text">
              <span>奖￥{{item.commissionAmount}}</span>
              {{item.discountPrice}}
            </div>
            <div class="home-content-knock-item-right-buy-price-text">立即抢购</div>
          </div>
          <div
            class="home-content-knock-item-right-buy-price2"
            v-if="item.commissionAmount==='0.00'"
          >
            <div class="home-content-knock-item-right-buy-price-text">立即抢购</div>
          </div>
          <div class="home-content-knock-item-right-buy-knock">
            <span>已抢：{{item.saledNumber > 10000? `${Number(item.saledNumber/10000).toFixed(1)}万`: item.saledNumber}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cabbageArr: [],
      bigArr: [],
      hotProdcts: [],
      allLoaded: false,
      topStatus: '',
      loadPage: 2,
      cabbageFaild: false,
      loading: false
    }
  },
  created () {
    this.queryHotProducts()
  },
  methods: {
    toCabbage () {
      // 跳转白菜价专区
      this.toPage('cabbage')
    },
    toLargeInside () {
      // 跳转大额专区
      this.toPage('largeInside')
    },
    queryHotProducts () {
      // 大家都在抢
      this.$http('GET', this.api.queryHotProducts, {
        page: 1,
        pageSize: 15
      }).then(res => {
        if (res.data.success === true) {
          this.hotProdcts = res.data.model.list || []
        }
      })
    },
    loadTop () {
      // 顶部刷新
      this.queryHotProducts()
      this.loadPage = 2
      this.$nextTick(() => {
        setTimeout(() => {
          this.$refs.loadmore.onTopLoaded()
        }, 1000)
      })
    },
    loadMore () {
      // 底部加载更多
      if (this.allLoaded) {
        console.log('没有更多了')
        return
      }
      if (this.loading === true) {
        return
      } else {
        this.loading = true
      }
      this.$http('GET', this.api.queryHotProducts, {
        page: this.loadPage,
        pageSize: 20
      }).then(res => {
        if (res.data.success === true) {
          if (res.data.model.list != null) {
            if (res.data.model.list.length > 0) {
              this.loadPage = this.loadPage + 1
              this.$nextTick(() => {
                this.hotProdcts = this.hotProdcts.concat(res.data.model.list)
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
