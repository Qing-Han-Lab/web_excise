<style scope>
.allview {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #f7f7f7;
  display: flex;
  flex-direction: column;
}
.allview .likebox {
  width: 355px;
  margin: 0px auto 10px;
  overflow: auto;
  flex: 1;
}
.likebox::-webkit-scrollbar{
  display: none;
}
.likebox .likeitem {
  width: 100%;
  height: 120px;
  border-radius: 10px;
  background: #fff;
  margin-top: 14px;
  overflow: hidden;
}
.likeitem .picbox {
  float: left;
  width: 110px;
  height: 120px;
  border-radius: 10px;
  overflow: hidden;
}
.picbox img {
  width: 100%;
  height: 100%;
}
.likeitem .textbox {
  width: 245px;
  height: 120px;
  float: right;
}
.textbox .titlebox {
  width: 230px;
  height: 32px;
  margin-top: 10px;
  margin-left: 12px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: #333;
  font-family: "Helvetica";
  font-size: 14px;
}
.textbox .moneybox {
  width: 116px;
  height: 22px;
  margin: 8px 0px 0px 12px;
  color: #fb2c68;
  font-size: 20px;
  font-family: "DINAlternate-Bold";
}
.moneybox .moneylogo {
  font-size: 14px;
}
.textbox .lastbox {
  width: 230px;
  height: 20px;
  margin-top: 10px;
  font-size: 10px;
  color: #999;
  margin-left: 12px;
}
.lastbox .likepeople {
  float: left;
  height: 20px;
  line-height: 20px;
  font-family: "DINAlternate-Bold";
}
.lastbox .findsame {
  width: 60px;
  height: 20px;
  border-radius: 11px;
  border: solid 1px #cccccc;
  box-sizing: border-box;
  text-align: center;
  line-height: 20px;
  float: right;
}
</style>

<template>
  <div class="allview">
    <div
      class="likebox"
      v-infinite-scroll="loadMore"
      :infinite-scroll-disabled="loading"
      infinite-scroll-distance="100"
      infinite-scroll-immediate-check="false"
      v-if="likelist.length > 0"
    >
      <div
        class="likeitem"
        v-for="(item,index) in likelist"
        :key="index"
        @click="skipparticulars(item.contentId)"
      >
        <div class="picbox">
          <img :src="item.contentPicUrl" alt />
        </div>
        <div class="textbox">
          <div class="titlebox">{{item.itemName}}</div>
          <div class="moneybox">
            <span class="moneylogo">¥</span>
            <span class="moneynum">{{item.itemPrice ? item.itemPrice : '0.00'}}</span>
          </div>
          <div class="lastbox">
            <div class="likepeople">{{item.favoriteTimes}}人喜欢</div>
          </div>
        </div>
      </div>
    </div>
    <div class="nothing" v-else>
      <div class="nothing-text">没有查询到任何商品</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cabPage: 2,
      likelist: [],
      allLoaded: false,
      loading: false
    }
  },
  created () {
    this.getLikeData()
  },
  methods: {
    getLikeData () {
      this.$http('GET', this.api.findFavorite, {
        page: 1,
        pageSize: 10
      }).then((res) => {
        if (res.data.success === true) {
          this.likelist = res.data.model.list
          console.log(res.data)
        }
      })
    },
    skipparticulars (id) {
      this.toPage('product2', { id: id })
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
      // 加载更多
      this.$http('GET', this.api.queryBrandProducts, {
        page: this.cabPage,
        pageSize: 20
      }).then(res => {
        if (res.data.success === true) {
          if (res.data.model.list != null) {
            if (res.data.model.list.length > 0) {
              this.cabPage = this.cabPage + 1
              this.$nextTick(() => {
                this.likelist = this.likelist.concat(res.data.model.list)
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
