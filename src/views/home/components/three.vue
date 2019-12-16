<style lang="scss" scoped>
.three {
  -webkit-overflow-scroll: touch;
  background-color: #f7f7f7;
  width: 375px;
  .three-popular {
    padding: 10px 9.5px 0;
    .three-popular-title {
      padding-left: 4px;
      font-family: "SourceHanSansSC-Medium";
      font-size: 16px;
      color: #000000;
      line-height: 25px;
    }
    .two-items {
      padding: 0;
    }
  }
}
</style>

<template>
  <div class="three">
    <!-- <mt-loadmore
      :top-method="loadTop"
      :bottom-all-loaded="allLoaded"
      @top-status-change="topStatusChange"
      ref="loadmore"
    > -->
      <!-- <div
        class="three-popular"
        v-infinite-scroll="loadMore"
        :infinite-scroll-disabled="loading"
        infinite-scroll-distance="100"
        infinite-scroll-immediate-check="false"
      > -->
      <div class="three-popular">
        <div class="three-popular-title">人气榜单</div>
        <div
          class="home-content-knock-item"
          v-for="(item,index) in toplist"
          :key="index"
          @click="toPage('product',{item:item})"
        >
          <div class="home-content-knock-item-left">
            <img v-lazy="checkUrl(item.itemPicUrl)" />
            <div class="home-content-knock-item-left-medal">{{index + 1}}</div>
          </div>
          <div class="home-content-knock-item-right">
            <div
              class="home-content-knock-item-right-title"
              :class="{'tb':item.platform==='taobao','jd':item.platform==='jingdong','pdd': item.platform==='pingduoduo','tm': item.tmall}"
            >{{item.itemName}}</div>
            <div class="home-content-knock-item-right-marks" v-if="item.itemFeature">
              <div
                class="home-content-knock-item-right-marks-item"
                v-for="(item2,index2) in item.itemFeature"
                :key="index2"
              >{{item2}}</div>
            </div>
            <div class="home-content-knock-item-right-price" v-if="item.finalPrice">
              <div class="home-content-knock-item-right-price-now">
                <span>￥</span>
                {{item.finalPrice}}
              </div>
              <div
                class="home-content-knock-item-right-price-old"
                v-if="item.originPrice"
              >￥{{item.originPrice}}</div>
              <div class="home-content-knock-item-right-price-certificate">
                <span>{{item.couponAmount}}</span>元券
              </div>
            </div>
            <div class="home-content-knock-item-right-buy">
              <div
                class="home-content-knock-item-right-buy-price"
                v-if="item.commissionAmount!=='0.00'"
              >
                <div class="home-content-knock-item-right-buy-price-text">
                  <span>奖￥</span>
                  {{item.commissionAmount}}
                </div>
                <div class="home-content-knock-item-right-buy-price-text">立即抢购</div>
              </div>
              <div
                class="home-content-knock-item-right-buy-price2"
                v-if="item.commissionAmount==='0.00'"
              >
                <div class="home-content-knock-item-right-buy-price-text">立即抢购</div>
              </div>
              <div class="home-content-knock-item-right-buy-knock">已抢：{{item.saledNumber>10000?`${Number(item.saledNumber/10000).toFixed(1)}万`:item.saledNumber}}</div>
            </div>
          </div>
        </div>
        <div class="two-items">
          <div
            class="two-items-item"
            v-for="(item,index) in selectitem"
            :key="index"
            @click="toPage('product',{item:item})"
          >
            <div class="two-items-item-img">
              <img v-lazy="checkUrl(item.itemPicUrl)" alt />
            </div>
            <div class="two-items-item-title" :class="{'tb':item.platform==='taobao','jd':item.platform==='jingdong','pdd': item.platform==='pingduoduo','tm': item.tmall}">{{item.itemName}}</div>
            <div class="two-items-item-cerbox">
              <div class="two-items-item-certificate">{{item.couponAmount}}<span>元券</span></div>
              <span class="two-items-item-img-reward" v-if="item.commissionAmount!=='0.00'">奖<span class="two-items-item-img-reward-two">￥</span>{{item.commissionAmount}}</span>
            </div>
            <div class="two-items-item-price">
              <div class="two-items-item-price-left">
                <div class="two-items-item-price-left-now">
                  <span>￥</span>
                  {{item.finalPrice}}
                </div>
                <div class="two-items-item-price-left-old" v-if="item.originPrice">
                  <span>￥{{item.originPrice}}</span>
                </div>
              </div>
              <div class="two-items-item-price-right">已抢:{{item.saledNumber>10000?`${Number(item.saledNumber/10000).toFixed(1)}万`:item.saledNumber}}</div>
            </div>
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
      selectitem: [],
      toplist: [],
      selectPage: 1,
      allLoaded: false,
      topStatus: '',
      loading: false
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.$http('GET', this.api.topitem, {
        page: 1,
        pageSize: 3,
        cid: this.$store.state.ddxId
      }).then(res => {
        if (res.data.success === true) {
          this.toplist = res.data.model.list
          this.getList()
        }
      })
    },
    getList () {
      if (this.allLoaded) {
        console.log('没有更多了')
        return
      }
      if (this.loading === true) {
        return
      } else {
        this.loading = true
      }
      // 上拉加载更多
      this.$http('GET', this.api.searchitem, {
        itemCat: this.$store.state.catId,
        platform: 'taobao',
        page: this.selectPage,
        pageSize: 20
      }).then(res => {
        if (res.data.success === true) {
          if (res.data.model.list !== null) {
            if (res.data.model.list.length > 0) {
              this.selectPage = this.selectPage + 1
              this.$nextTick(() => {
                this.selectitem = this.selectitem.concat(res.data.model.list)
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
      // 上拉加载更多
      this.$http('GET', this.api.searchitem, {
        itemCat: this.$store.state.catId,
        platform: 'taobao',
        page: this.selectPage,
        pageSize: 20
      }).then(res => {
        if (res.data.success === true) {
          if (res.data.model.list !== null) {
            if (res.data.model.list.length > 0) {
              this.selectPage = this.selectPage + 1
              this.$nextTick(() => {
                this.selectitem = this.selectitem.concat(res.data.model.list)
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
      this.selectPage = 1
      this.allLoaded = false
      this.$nextTick(() => {
        this.getData()
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
