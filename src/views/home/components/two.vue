<style lang="scss" scoped>
.two {
  -webkit-overflow-scroll: touch;
  background-color: #f7f7f7;
}
</style>

<template>
  <div class="two">
    <!-- <mt-loadmore
      :top-method="loadTop"
      :bottom-all-loaded="allLoaded"
      @top-status-change="topStatusChange"
      ref="loadmore"
    > -->
      <!-- <div
        class="two-items"
        v-infinite-scroll="loadMore"
        :nfinite-scroll-disabled="loading"
        infinite-scroll-distance="100"
        infinite-scroll-immediate-check="false"
      > -->
      <div class="two-items">
        <div
          class="two-items-item"
          v-for="(item,index) in list"
          :key="index"
          @click="toPage('product',{item:item})"
        >
          <div class="two-items-item-img">
            <img v-lazy="checkUrl(item.itemPicUrl)" />
          </div>
          <div class="two-items-item-title" :class="{'tb':item.platform==='taobao','jd':item.platform==='jingdong','pdd': item.platform==='pingduoduo', 'tm': item.tmall}">{{item.itemName}}</div>
          <div class="two-items-item-cerbox">
            <div class="two-items-item-certificate" v-if="item.couponAmount">{{item.couponAmount}}元券</div>
            <div class="two-items-item-img-reward" v-if="item.commissionAmount!=='0.00'">
              奖<span class="two-items-item-img-reward-two">￥</span>{{item.commissionAmount}}
            </div>
          </div>
          <div class="two-items-item-price">
            <div class="two-items-item-price-left">
              <div class="two-items-item-price-left-now">
                <span>￥</span>{{item.finalPrice}}
              </div>
              <div class="two-items-item-price-left-old" v-if="item.originPrice">
                <span>￥</span>{{item.originPrice}}
              </div>
            </div>
            <div
              class="two-items-item-price-right"
            >已抢:{{item.saledNumber>10000?`${Number(item.saledNumber/10000).toFixed(1)}万`:item.saledNumber}}</div>
          </div>
        </div>
      </div>
      <!-- <div slot="top" class="mint-loadmore-top">
        <span v-if="topStatus === 'pull'">下拉刷新↓</span>
        <span v-if="topStatus === 'drop'">释放更新</span>
        <span class="loading" v-if="topStatus === 'loading'">
          <img src="../images/loading.gif" alt />
        </span>
      </div>
    </mt-loadmore> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      guessPage: 2,
      allLoaded: false,
      topStatus: '',
      loading: false
    }
  },
  created () {
    this.getGuessData()
  },
  methods: {
    getGuessData () {
      if (this.$route.name === 'hot') {
        this.$http('GET', this.api.searchFavoriteProducts, {
          page: 1,
          pageSize: 20
        }).then(res => {
          if (res.data.success === true) {
            this.$nextTick(() => {
              this.list = res.data.model.list
            })
          }
        })
      }
    },
    loadMore () {
      if (this.allLoaded) {
        console.log('没有更多了')
        return
      }
      if (this.loading === true) {
        return
      } else {
        this.loading = true
      }
      this.$http('GET', this.api.searchFavoriteProducts, {
        page: this.guessPage,
        pageSize: 20
      }).then(res => {
        if (res.data.success === true) {
          if (res.data.model.list != null) {
            if (res.data.model.list.length > 0) {
              this.guessPage = this.guessPage + 1
              this.$nextTick(() => {
                this.list = this.list.concat(res.data.model.list)
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
    },
    loadTop () {
      // 刷新
      this.guessPage = 2
      this.allLoaded = false
      this.$nextTick(() => {
        this.getGuessData()
        setTimeout(() => {
          this.$refs.loadmore.onTopLoaded()
        }, 1000)
      })
    },
    topStatusChange (status) {
      // 上拉状态改变
      this.topStatus = status
    }
  }
}
</script>
