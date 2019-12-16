<style scoped lang='scss'>
.allview{
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #f7f7f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .allview-selectbox{
    width: 100%;
    height: 35px;
    background: #FB2C68;
    display: flex;
    justify-content: center;
    align-items: center;
    /deep/ .swiper-slide {
      width: auto;
      margin-left: 24px;
      &:last-child {
        margin-right: 24px;
      }
    }
    .allview-selectbox-selectitem{
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      .selectname{
        font-size: 14px;
        color: #fff;
        &.choose{
          font-size: 15px;
          font-weight: bold;
        }
      }
      .line{
        width: 18px;
        height: 3px;
        border-radius: 2px;
        background: #FB2C68;
        &.choose{
          background: #fff;
        }
      }
    }
  }
  .allview-sellbox{
    width: 100%;
    flex: 1;
    padding: 0px 10px;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;
    overflow: auto;
    &::-webkit-scrollbar{
      display: none;
    }
    .sellitem{
      width: 172px;
      height: 281px;
      background: #fff;
      border-radius: 4px;
      margin-top: 5px;
      overflow: hidden;
      img{
        width: 173px;
        height: 173px;
      }
      .sellitem-title{
        width: 100%;
        padding: 0px 10px;
        box-sizing: border-box;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 5px;
        .sellitem-title-platfrom{
          background:rgba(247,103,62,0.2);
          padding: 1px 3px;
          color: #F7673E;
          font-size:12px;
          margin-right: 6px;
          line-height: 15px;
        }
        .sellitem-title-itemname{
           flex: 1;
           height: 100%;
           line-height: 16px;
           overflow: hidden;
           text-overflow:ellipsis;
           white-space: nowrap;
           font-family: "Helvetica";
           font-size: 14px;
           color: rgba(51, 51, 51, 1);
        }
      }
      .sellitem-reason{
        width: 100%;
        height: 16px;
        line-height: 16px;
        padding: 0px 10px;
        box-sizing: border-box;
        margin-top: 3px;
        font-size:12px;
        color:rgba(134,134,134,1);
      }
      .sellitem-couponbox{
        width: 100%;
        height: 16px;
        padding: 0px 10px;
        box-sizing: border-box;
        margin-top: 16px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .sellitem-couponbox-coupon{
          background: #FB2C68;
          text-align: center;
          line-height: 16px;
          font-size:12px;
          font-family: "DINAlternate-Bold";
          color: #fff;
          margin-right: 14px;
          padding: 0px 5px;
          border: 1px solid #FB2C68;
          box-sizing: border-box;
          height: 16px;
        }
        .sellitem-couponbox-commistion{
          padding: 0px 5px;
          border: 1px solid pink;
          text-align: center;
          line-height: 16px;
          color: #FB2C68;
          font-size:12px;
          font-family: "DINAlternate-Bold";
          box-sizing: border-box;
          height: 16px;
        }
      }
      .sellitem-moneybox{
        margin-top: 10px;
        padding: 0px 10px;
        box-sizing: border-box;
        width: 100%;
        height: 22px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .sellitem-moneybox-money{
          color: #FB2C68;
          font-family: "DINAlternate-Bold";
          font-size: 20px;
          transform: translateY(-3px);
           .moneylogo{
             display: inline;
             font-size: 11px;
             font-weight: normal;
           }
        }
        .sellitem-moneybox-sellnum{
             font-size:12px;
             font-family: "DINAlternate-Bold";
             font-weight:400;
             color:rgba(134,134,134,1);
        }
      }
      &.left{
         margin-right: 10px;
      }
    }
  }
}
</style>

<template>
<div class='allview'>
   <swiper class="allview-selectbox" :options="swiperOption" ref="swiperbox">
     <swiper-slide class="allview-swiperitem" v-for="(item,index) in menuList" :key="index">
         <div class="allview-selectbox-selectitem" @click="chooseMenu(index)">
           <div class="selectname" :class="[item.active?'choose':'']">{{item.title}}</div>
           <div class="line" :class="[item.active?'choose':'']"></div>
         </div>
     </swiper-slide>
   </swiper>
   <div class="allview-sellbox"  v-infinite-scroll="addMoreData"
      infinite-scroll-distance="100"
      infinite-scroll-immediate-check="false">
     <div @click="toPage('product',{item:item})" class="sellitem" :class="[index%2===0?'left':'']" v-for="(item,index) in sellList" :key="index">
       <img v-lazy="checkUrl(item.itemPicUrl)" alt="">
       <div class="sellitem-title">
         <div class="sellitem-title-platfrom">{{getPlatform(item.platform)}}</div>
         <div class="sellitem-title-itemname">{{item.itemName}}</div>
       </div>
       <div class="sellitem-reason">{{item.shopName}}</div>
       <div class="sellitem-couponbox">
         <div class="sellitem-couponbox-coupon"  v-if="item.couponAmount!==null&&item.couponAmount!==''&&item.couponAmount!=='0.00'">券:{{item.couponAmount}}元</div>
         <div class="sellitem-couponbox-commistion"  v-if="item.commissionAmount!==null&&item.commissionAmount!==''&&item.commissionAmount!=='0.00'">奖{{item.commissionAmount}}元</div>
       </div>
       <div class="sellitem-moneybox">
         <div class="sellitem-moneybox-money">
           <div class="moneylogo">￥</div>{{item.finalPrice}}
         </div>
         <div class="sellitem-moneybox-sellnum">已抢{{toMoneyFix(item.saledNumber)}}件</div>
       </div>
     </div>
   </div>
</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { Toast } from 'mint-ui'
export default {

  data () {
    return {
      pageNum: 1,
      menuList: [
        {
          title: '全部',
          active: true
        },
        {
          title: '女装',
          active: false
        },
        {
          title: '母婴',
          active: false
        },
        {
          title: '美妆',
          active: false
        },
        {
          title: '居家日用',
          active: false
        },
        {
          title: '鞋品',
          active: false
        }, {
          title: '美食',
          active: false
        },
        {
          title: '文娱车品',
          active: false
        },
        {
          title: '数码家电',
          active: false
        },
        {
          title: '男装',
          active: false
        },
        {
          title: '内衣',
          active: false
        },
        {
          title: '箱包',
          active: false
        }, {
          title: '配饰',
          active: false
        }, {
          title: '户外运动',
          active: false
        }, {
          title: '家装家纺',
          active: false
        }

      ],
      sellList: [

      ],
      swiperOption: {
        speed: 800,
        notNextTick: true,
        direction: 'horizontal',
        freeMode: true,
        freeModeSticky: true,
        slidesPerView: 'auto'
      },
      cidNum: 0
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    getPlatform () {
      return function (platform) {
        if (platform === 'tmall') {
          return '天猫'
        } else if (platform === 'taobao') {
          return '淘宝'
        } else if (platform === 'jingdong') {
          return '京东'
        } else if (platform === 'pinduoduo') {
          return '拼多多'
        }
      }
    }
  },
  created () {
    this.getData()
  },
  methods: {
    chooseMenu (num) {
      this.menuList = this.menuList.map((item, index) => {
        item.active = false
        if (num === index) item.active = true
        return item
      })
      let swiperItem = this.$refs.swiperbox
      swiperItem.swiper.slideTo(num, 300, false)
      this.sellList = []
      this.pageNum = 1
      this.cidNum = num
      this.getData()
    },
    getData () {
      if (this.cidNum !== null && this.pageNum !== null) {
        let cid = this.cidNum
        this.$http('GET', this.api.nineMoney, {
          page: this.pageNum,
          cid: cid,
          nav: 1,
          pageSize: 10,
          sort: 0
        }).then((res) => {
          if (res.data.success) {
            this.pageNum = res.data.model.pageNum
            if (res.data.model.list !== null && res.data.model.list.length !== 0) {
              this.sellList = this.sellList.concat(res.data.model.list)
            } else {
              Toast('没有更多了')
              this.cidNum = this.pageNum = null
            }
          }
        })
      }
    },
    addMoreData (e) {
      this.getData()
      /* let scrollDiv = e.target
      if (scrollDiv.scrollTop + scrollDiv.clientHeight === scrollDiv.scrollHeight) {
        console.log('加载更多', this.pageNum)
        this.getData()
      } */
    }
  }

}
</script>
