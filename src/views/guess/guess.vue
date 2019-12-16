<style lang="scss" scoped>
.two {
  background-color: #f7f7f7;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .two-items {
    flex: 1;
    overflow: auto;
    padding: 13px 10px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
.load2 {
  padding-top: 50px;
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
  <div class="two">
    <div
      class="two-items"
      v-infinite-scroll="loadMore"
      :infinite-scroll-disabled="loading"
      infinite-scroll-distance="100"
      infinite-scroll-immediate-check="false"
    >
      <div
        class="two-items-item"
        v-for="(item,index) in carList"
        :key="index"
        @click="toPage('product',{item:item})"
      >
        <div class="two-items-item-img">
          <img :src="checkUrl(item.itemPicUrl)" />
        </div>
        <div
          class="two-items-item-title"
          :class="{'tb':item.platform==='taobao','jd':item.platform==='jingdong','pdd': item.platform==='pingduoduo', 'tm': item.platform === 'tmall'}"
        >{{item.itemName}}</div>
        <div class="two-items-item-cerbox">
          <div class="two-items-item-certificate">
            {{item.couponAmount}}
            <span>元券</span>
          </div>
          <div class="two-items-item-img-reward" v-if="item.commissionAmount!=='0.00'">奖
            <span class="two-items-item-img-reward-two">￥</span>
            {{item.commissionAmount}}
          </div>
        </div>
        <div class="two-items-item-price">
          <div class="two-items-item-price-left">
            <div class="two-items-item-price-left-now">
              <span>￥</span>
              {{item.finalPrice}}
            </div>
            <div class="two-items-item-price-left-old" v-if="item.originPrice">
              <span>￥</span>
              {{item.originPrice}}
            </div>
          </div>
          <div class="two-items-item-price-right">已抢:{{item.saledNumber>10000?`${Number(item.saledNumber/10000).toFixed(1)}万`:item.saledNumber}}
          </div>
        </div>
      </div>
      <div class="load2">
        <div class="loadAgain" v-if="cabbageFaild" @click="getData">点击重新加载</div>
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
