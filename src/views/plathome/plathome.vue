<style scoped lang='scss'>
.plat-allview {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f7f7f7;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .plat-allview-topsearch {
    width: 100%;
    height: 50px;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 800;
    background: #f7f7f7;
    .returnbtn {
      width: 8px;
      height: 15px;
      padding: 10px;
      background-image: url("./images/back_btn.png");
      background-size: 8px 15px;
      background-repeat: no-repeat;
      background-position: 0px center;
    }
    .searchinput {
      width: 328px;
      height: 30px;
      background: #fff;
      border-radius: 15px;
      background-image: url("./images/search.png");
      background-size: 18px 17px;
      background-position: 11px center;
      background-repeat: no-repeat;
      text-indent: 34px;
      font-size: 12px;
      line-height: 30px;
      font-weight: 400;
      color: rgba(100, 100, 100, 0.5);
    }
  }
  .plat-allview-topselect{
    position: fixed;
    top: 0px;
    left: 0;
    width: 100%;
    height: 50px;
    background: #f7f7f7;
    z-index: 80;
    &.swiperShow{
       animation: toShow 0.5s ease-in-out 1 forwards;
    }
    &.hidden{
      top: -450px;
    }
    @keyframes toShow{
      0%{
        top: 0px;
      }100%{
        top: 46px;
      }
    }
    .plat-allview-selectbox {
      width: 100%;
      padding: 12px 10px 0px;
      box-sizing: border-box;
      height: 45px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      position: relative;
      z-index: 10;
      &.maketopbar {
        position: fixed;
        top: 50px;
        left: 0;
        background: #f7f7f7;
        animation: showTop 0.5s ease-in-out 1 forwards;
        @keyframes showTop {
          0% {
            top: 0px;
          }
          100% {
            top: 50px;
          }
        }
      }
      .moreselect {
        width: 375px;
        height: 2000px;
        position: absolute;
        left: 0;
        top: 45px;
        background: rgba(0, 0, 0, 0.5);
        z-index: 10;
        .moreselect-morebox {
          overflow: hidden;
          width: 375px;
          height: auto;
          background: #fff;
          padding-top: 10px;
          padding-left: 7px;
          box-sizing: border-box;
          display: flex;
          justify-content: flex-start;
          align-content: flex-start;
          flex-wrap: wrap;
          .moreselect-morebox-item {
            margin: 0px 6px 12px;
            width: 78px;
            height: 34px;
            background: rgba(247, 247, 247, 1);
            border-radius: 2px;
            font-size: 14px;
            font-weight: 400;
            color: rgba(139, 139, 139, 1);
            text-align: center;
            line-height: 34px;
            border: 1px #f7f7f7 solid;
            box-sizing: border-box;
            &.check {
              color: rgba(251, 44, 104, 1);
              border: 1px #999 dashed;
            }
          }
        }
      }
      .selectmorebtn {
        width: 20px;
        height: 5px;
        background-image: url("./images/add.png");
        background-size: 9px 5px;
        background-repeat: no-repeat;
        background-position: center;
        transition: transform 0.5s;
        padding-top: 17px;
        &.open {
          transform: rotate(180deg);
        }
      }
      .selectcontainer {
        height: 100%;
        flex: 1;
        overflow: auto;
        /deep/ .swiper-slide {
          width: auto;
          margin-left: 20px;
          &:first-child {
            margin: 0;
          }
        }
        .selectcontainer-item {
          height: 100%;
          font-family: "PingFangSC-Regular";
          font-size: 12px;
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          float: left;
          line-height: 21px;
          .title {
            margin-bottom: 8px;
            font-size: 14px;
            font-weight: 400;
            color: rgba(102, 102, 96, 1);
            &.check {
              font-size: 14px;
              font-weight: bold;
              color: rgba(51, 51, 51, 1);
            }
          }
          .line {
            width: 18px;
            height: 3px;
            background: #f7f7f7;
            border-radius: 3px;
            &.check {
              background: rgba(251, 44, 104, 1);
            }
          }
          &:first-child {
            margin: 0;
          }
        }
        &::-webkit-scrollbar {
          height: 0;
        }
      }
    }
  }
  .plat-allview-scrollbox {
    width: 100%;
    flex: 1;
    overflow: auto;
    &.overhidden{
      overflow: hidden;
    }
    &::-webkit-scrollbar{
      display: none;
    }
    .plat-allview-swiperbox {
      width: 356px;
      height: 142px;
      margin: 0px auto;
      position: relative;
      .cantmove{
        position: absolute;
        width: 100%; height: 100%;
        top: 0; left: 0;
        z-index: 50;
      }
      .plat-allview-swiperbox-pagebox {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 20;
        .pageitem {
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.7);
          border-radius: 50%;
          margin: 0px 3px;
          &.check {
            background: rgba(255, 255, 255, 1);
            box-shadow: 0px 0px 5px gray;
          }
        }
      }
      .plat-allview-swiperbox-swiper {
        width: 100%;
        height: 100%;
        .plat-allview-swiperbox-swiper-swiperslide {
          width: 100%;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      /* background-image: url("./images/pinduoduo_banner.png");
    background-size: 100% 100%; */
    }
    .plat-allview-selectbox {
      width: 100%;
      padding: 12px 10px 0px;
      box-sizing: border-box;
      height: 45px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      position: relative;
      z-index: 10;
      &.maketopbar {
        position: fixed;
        top: 50px;
        left: 0;
        background: #f7f7f7;
        animation: showTop 0.5s ease-in-out 1 forwards;
        @keyframes showTop {
          0% {
            top: 0px;
          }
          100% {
            top: 50px;
          }
        }
      }
      .moreselect {
        width: 375px;
        height: 2000px;
        position: absolute;
        left: 0;
        top: 45px;
        background: rgba(0, 0, 0, 0.5);
        z-index: 5;
        .moreselect-morebox {
          overflow: hidden;
          width: 375px;
          height: auto;
          background: #fff;
          padding-top: 10px;
          padding-left: 7px;
          box-sizing: border-box;
          display: flex;
          justify-content: flex-start;
          align-content: flex-start;
          flex-wrap: wrap;
          .moreselect-morebox-item {
            margin: 0px 6px 12px;
            width: 78px;
            height: 34px;
            background: rgba(247, 247, 247, 1);
            border-radius: 2px;
            font-size: 14px;
            font-weight: 400;
            color: rgba(139, 139, 139, 1);
            text-align: center;
            line-height: 34px;
            border: 1px #f7f7f7 solid;
            box-sizing: border-box;
            &.check {
              color: rgba(251, 44, 104, 1);
              border: 1px #999 dashed;
            }
          }
        }
      }
      .selectmorebtn {
        width: 20px;
        height: 5px;
        background-image: url("./images/add.png");
        background-size: 9px 5px;
        background-repeat: no-repeat;
        background-position: center;
        transition: transform 0.5s;
        padding-top: 17px;
        &.open {
          transform: rotate(180deg);
        }
      }
      .selectcontainer {
        height: 100%;
        flex: 1;
        overflow: auto;
        /deep/ .swiper-slide {
          width: auto;
          margin-left: 20px;
          &:first-child {
            margin: 0;
          }
        }
        .selectcontainer-item {
          height: 100%;
          font-family: "PingFangSC-Regular";
          font-size: 12px;
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          float: left;
          line-height: 21px;
          .title {
            margin-bottom: 8px;
            font-size: 14px;
            font-weight: 400;
            color: rgba(102, 102, 96, 1);
            &.check {
              font-size: 14px;
              font-weight: bold;
              color: rgba(51, 51, 51, 1);
            }
          }
          .line {
            width: 18px;
            height: 3px;
            background: #f7f7f7;
            border-radius: 3px;
            &.check {
              background: rgba(251, 44, 104, 1);
            }
          }
          &:first-child {
            margin: 0;
          }
        }
        &::-webkit-scrollbar {
          height: 0;
        }
      }
    }
    .plat-allview-sellbox {
      width: 100%;
      // flex: 1;
      margin-top: 5px;
      overflow: auto;
      display: flex;
      justify-content: flex-start;
      align-content: flex-start;
      flex-wrap: wrap;
      padding: 0px 10px;
      box-sizing: border-box;
      .platformentrance-commodity-box {
        width: 172px;
        height: 280px;
        background-color: #fff;
        border-radius: 4px;
        margin-bottom: 5px;
        &:nth-child(odd) {
          margin-right: 10px;
        }
        .platformentrance-commodity-box-img {
          width: 173px;
          height: 173px;
          img {
            width: 173px;
            height: 173px;
          }
        }
        .platformentrance-commodity-box-platform {
          width: 163px;
          height: 16px;
          margin: 8px auto 0px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          .platformentrance-commodity-box-platform-t {
            color: #f7673e;
            font-size: 8px;
            background: rgba(247, 103, 62, 0.2);
            text-align: center;
            padding: 1px 1px;
            margin-right: 5px;
            font-size: 12px;
          }
          .platformentrance-commodity-box-platform-name {
            flex: 1;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
            color: #333;
            font-size: 14px;
            line-height: 16px;
            font-family: 'Helvetica';
          }
        }
        .platformentrance-commodity-box-protest {
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
        .platformentrance-commodity-box-ticket {
          width: 163px;
          height: 14px;
          display: flex;
          line-height: 14px;
          color: #fff;
          font-size: 10px;
          margin: 18px auto 10px;
          .platformentrance-commodity-box-arch {
            padding: 0px 5px;
            height: 16px;
            box-sizing: border-box;
            line-height: 16px;
            font-size: 12px;
            background-color: #fb2c68;
            font-family: "DINAlternate-Bold";
          }
          .platformentrance-commodity-box-award {
            padding: 0px 5px;
            border: 1px solid rgba(251, 61, 116, 0.5);
            margin-left: 5px;
            height: 16px;
            box-sizing: border-box;
            font-size: 12px;
            line-height: 16px;
            color: #fb2c68;
            font-family: "DINAlternate-Bold";
          }
        }
        .platformentrance-commodity-box-price {
          width: 163px;
          height: 14px;
          margin: 12px auto 0px;
          display: flex;
          justify-content: space-between;
          font-family: "DINAlternate-Bold";
          .platformentrance-commodity-box-price-rob {
            color: #868686;
            font-size: 12px;
          }
          .platformentrance-commodity-box-price-number {
            display: flex;
            color: #fb2c68;
            font-size: 11px;
            font-family: "DINAlternate-Bold";
            .platformentrance-commodity-box-price-number-money {
              font-size: 22px;
              line-height: 10px;
            }
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="plat-allview">
    <div class="plat-allview-topsearch">
      <div class="returnbtn" @click="goBack()"></div>
      <div class="searchinput" @click="toPage('search',{form : $route.query.platform})">复制宝贝标题，搜{{$route.query.platform==='jingdong'?'京东':'拼多多'}}隐藏优惠券</div>
    </div>
    <div class="plat-allview-topselect" :class="[isTopBar?'swiperShow':'hidden']">
       <div class="plat-allview-selectbox" ref="topswiper">
        <div class="moreselect" v-if="addflag&&upShowFlag">
          <div :class="[addflag?'show':'']" class="moreselect-morebox">
            <div
              @click="chooseItem(index)"
              :class="[item.active?'check':'']"
              class="moreselect-morebox-item"
              v-for="(item,index) in selectMenus"
              :key="index"
            >{{item.catName}}</div>
          </div>
        </div>
        <div class="selectcontainer">
          <swiper :options="swiperOption2" ref="menuSwiper2">
            <swiper-slide v-for="(item,index) in menus" :key="index">
              <div class="selectcontainer-item" @click="choose(index)">
                <div class="title" :class="[item.active?'check':'']">{{item.catName}}</div>
                <div class="line" :class="[item.active?'check':'']"></div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div :class="[addflag?'open':'']" class="selectmorebtn" @click="addMore('up')"></div>
      </div>
    </div>
    <div class="plat-allview-scrollbox" :class="{overhidden : overflowFlag}" ref="sellBox"
      v-infinite-scroll="addMoreData"
      @scroll="isShowBar"
      infinite-scroll-distance="200"
      infinite-scroll-immediate-check="false"
    >
      <div class="plat-allview-swiperbox" ref="playBox">
        <div class="cantmove"  v-if="imgList.length===1"></div>
        <div class="plat-allview-swiperbox-pagebox" v-if="imgList.length>1">
          <div
            :class="[swiperIndex===index?'check':'']"
            class="pageitem"
            v-for="(item,index) in imgList"
            :key="index"
          ></div>
        </div>
        <swiper  :options="swiperOptionPlay" ref="playerSwiper" class="plat-allview-swiperbox-swiper" >
          <swiper-slide
            v-for="(item,index) in imgList"
            :key="index"
            class="plat-allview-swiperbox-swiper-swiperslide"
          >
            <img :src="item.img" alt />
          </swiper-slide>
        </swiper>
      </div>
      <div class="plat-allview-selectbox" ref="selectBox">
        <div class="moreselect" v-if="addflag&&upShowFlag===false">
          <div :class="[addflag?'show':'']" class="moreselect-morebox">
            <div
              @click="chooseItem(index)"
              :class="[item.active?'check':'']"
              class="moreselect-morebox-item"
              v-for="(item,index) in selectMenus"
              :key="index"
            >{{item.catName}}</div>
          </div>
        </div>
        <div class="selectcontainer">
          <swiper :options="swiperOption1" ref="menuSwiper1">
            <swiper-slide v-for="(item,index) in menus" :key="index">
              <div class="selectcontainer-item" @click="choose(index)">
                <div class="title" :class="[item.active?'check':'']">{{item.catName}}</div>
                <div class="line" :class="[item.active?'check':'']"></div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div :class="[addflag?'open':'']" class="selectmorebtn" @click="addMore('down')"></div>
      </div>
      <div class="plat-allview-sellbox">
        <div
          @click="toPage('product',{item:item})"
          class="platformentrance-commodity-box"
          v-for="(item,index) in sellList"
          :key="index"
        >
          <div class="platformentrance-commodity-box-img">
            <img v-lazy="item.itemPicUrl" alt />
          </div>
          <div class="platformentrance-commodity-box-platform">
            <div
              class="platformentrance-commodity-box-platform-t"
            >{{item.platform | getPlatformChinese}}</div>
            <div class="platformentrance-commodity-box-platform-name">{{item.itemName}}</div>
          </div>
          <div class="platformentrance-commodity-box-protest">{{item.shopName}}</div>
          <div class="platformentrance-commodity-box-ticket">
            <div
              class="platformentrance-commodity-box-arch"
              v-if="item.couponAmount!==null&&item.couponAmount!==''"
            >券:{{item.couponAmount}}元</div>
            <div
              class="platformentrance-commodity-box-award"
              v-if="item.commissionAmount!==null&&item.commissionAmount!==''"
            >奖:{{item.commissionAmount}}元</div>
          </div>
          <div class="platformentrance-commodity-box-price">
            <div class="platformentrance-commodity-box-price-number">
              ￥
              <div class="platformentrance-commodity-box-price-number-money">{{item.finalPrice}}</div>
            </div>
            <div class="platformentrance-commodity-box-price-rob">已抢{{item.saledNumber}}件</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data () {
    return {
      swiperIndex: 0,
      swiperOptionPlay: {
        notNextTick: true,
        loop: true,
        initialSlide: 0,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        speed: 800,
        direction: 'horizontal',
        on: {
          slideChangeTransitionStart: () => {
            let swiper = this.$refs.playerSwiper.swiper
            if (swiper !== null) {
              this.swiperIndex = swiper.realIndex
            }
          }
        }
      },
      menus: [
        {
          name: '精选',
          active: true
        },
        {
          name: '猜你喜欢',
          active: false
        },
        {
          name: '女装',
          active: false
        },
        {
          name: '鞋包配饰',
          active: false
        },
        {
          name: '美妆个护',
          active: false
        },
        {
          name: '美食',
          active: false
        },
        {
          name: '数码家电',
          active: false
        },
        {
          name: '家居家装',
          active: false
        },
        {
          name: '内衣',
          active: false
        },
        {
          name: '男装',
          active: false
        },
        {
          name: '母婴',
          active: false
        },
        {
          name: '运动户外',
          active: false
        }
      ],
      swiperOption1: {
        speed: 300,
        slidesPerView: 'auto',
        freeMode: true
      },
      swiperOption2: {
        speed: 300,
        slidesPerView: 'auto',
        freeMode: true,
        freeModeMomentumRatio: 1.5
      },
      selectMenus: [
        {
          name: '全部分类',
          active: true
        },
        {
          name: '食品保健',
          active: false
        },
        {
          name: '日用百货',
          active: false
        },
        {
          name: '家居家装',
          active: false
        },
        {
          name: '服饰鞋包',
          active: false
        },
        {
          name: '个护化妆',
          active: false
        },
        {
          name: '电脑数码',
          active: false
        },
        {
          name: '家用电器',
          active: false
        },
        {
          name: '运动户外',
          active: false
        },
        {
          name: '母婴用品',
          active: false
        },
        {
          name: '图书音像',
          active: false
        }
      ],
      addflag: false,
      platform: 'jingdong',
      catId: '',
      sellList: [],
      pageNum: 1,
      isTopBar: false,
      topHeight: 0,
      imgList: [],
      upShowFlag: true,
      overflowFlag: false
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  created () {
    this.platform = this.$route.query.platform
    console.log(this.platform, '传值')
    this.getMenusData()
    this.getImageData()
  },
  mounted () {
    let selectview = this.$refs.selectBox
    this.topHeight = selectview.offsetTop
  },
  filters: {
    getPlatformChinese (strName) {
      if (strName === 'jingdong') {
        return '京 东'
      } else {
        return '拼多多'
      }
    }
  },
  methods: {
    choose (num) {
      // 切换菜单选项
      this.menus = this.menus.map((item, index) => {
        item.active = false
        if (num === index) {
          item.active = true
        }
        return item
      })
      this.catId = this.menus[num].catId
      this.getGoodsData(false)
      this.checkOut(num)
    },
    chooseItem (num, type = 'up') {
      this.selectMenus = this.selectMenus.map((item, index) => {
        item.active = false
        if (num === index) {
          item.active = true
        }
        return item
      })
      this.choose(num)
      this.addMore(type)
    },
    addMore (type = 'up') {
      if (this.addflag === false) {
        // 展开
        this.addflag = true
        this.overflowFlag = true
      } else {
        // 收起
        this.addflag = false
        this.overflowFlag = false
      }
      if (type === 'down') {
        this.upShowFlag = false
      } else {
        this.upShowFlag = true
      }
    },
    getGoodsData (state) {
      // 获取平台商品列表  state为false切换,state为true加载更多
      let api
      if (this.platform === 'jingdong') {
        api = this.api.queryJdGoods
      } else {
        api = this.api.queryPddGoods
      }
      if (state) {
        this.pageNum++
      } else {
        this.pageNum = 1
      }
      this.$http('GET', api, {
        catId: this.catId,
        page: this.pageNum,
        pageSize: 12
      }).then(res => {
        if (res.data.success) {
          if (!state) {
            this.sellList = res.data.model.list
            this.$refs.sellBox.scrollTop = 0 // 商品div滚动条置顶
          } else {
            this.sellList = this.sellList.concat(res.data.model.list)
          }
          if (this.pageNum === 1) {
            this.$refs.sellBox.scrollTop = this.topHeight - this.$refs.topswiper.offsetHeight
          }
        }
      })
    },
    getMenusData () {
      // 菜单选项数据
      this.$http('GET', this.api.platformMenusItem, {
        platform: this.platform
      }).then(res => {
        if (res.data.success) {
          let list = res.data.model
          list = list.map((item, index) => {
            if (index === 0) {
              item.active = true
            } else {
              item.active = false
            }
            return item
          })
          this.menus = list
          this.selectMenus = list
          this.catId = list[0].catId
          this.getGoodsData(false)
        }
      })
    },
    isShowBar () {
      // 上拉加载更多
      let view = this.$refs.sellBox
      if (this.topHeight <= view.scrollTop) {
        this.isTopBar = true
      } else {
        this.isTopBar = false
      }
    },
    addMoreData () {
      this.getGoodsData(true)
    },
    getImageData () {
      this.$http('GET', this.api.queryDictionary, {
        code: 'mini_app',
        type: this.$route.query.platform
      }).then(res => {
        if (res.data.success) {
          this.imgList = res.data.model.images
        }
      })
    },
    checkOut (index) {
      this.$refs.menuSwiper1.swiper.slideTo(index, 300, false)
      this.$refs.menuSwiper2.swiper.slideTo(index, 300, false)
    }
  }
}
</script>
