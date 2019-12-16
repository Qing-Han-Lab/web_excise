<style scoped lang='scss'>
.home {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.hotproblem {
  width: 375px;
  flex: 1;
  overflow: auto;
}
.hotproblem::-webkit-scrollbar {
    display: none;
  }
.hotproblem .hotproblem-ul {
  width: 375px;
}
.hotproblem .hotproblem-ul .hotproblem-ul-li {
  width: 349px;
  background: #ffffff;
  margin-top: 9px;
  margin-left: 13px;
  position: relative;
  overflow: hidden;
}
.hotproblem-ul-li .itemtopbox {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 25px;
  line-height: 25px;
  margin-top: 16px;
  margin-left: 16px;
}
.hotproblem-ul-li .itemtopbox img {
  width: 13px;
  height: 13px;
}
.hotproblem-ul-li .aboutorder {
  min-width: 58px;
  height: 25px;
  line-height: 25px;
  font-family: "SourceHanSansSC-Regular";
  font-size: 14px;
  color: #333333;
  margin-left: 6px;
}
.hotproblem-ul-li .orderselect {
  margin-top: 5px;
  margin-left: 36px;
  width: 313px;
  max-height: 500px;
}
.orderselect .choose {
  width: 313px;
  height: 33px;
  font-family: 'SourceHanSansSC-Medium';
  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 29px;
  letter-spacing: 1px;
  color: rgba(51, 51, 51, 0.6);
  position: relative;
}
.choose::after {
  content: ">";
  color: rgba(51, 51, 51, 0.6);
  line-height: 8px;
  position: absolute;
  width: 7px;
  height: 11px;
  right: 12px;
  top: 10px;
  font-size: 8px;
}
.h10 {
  width: 375px;
  height: 5px;
  background: #f7f7f7;
}
</style>

<template>
  <div class="home">
    <div class="h10"></div>
    <div class="hotproblem">
      <div class="hotproblem-ul">
        <div class="hotproblem-ul-li" v-for="(item,index) in problem" :key="index">
          <div class="itemtopbox">
            <img :src="item.url" alt />
            <p class="aboutorder">{{item.bigproble}}</p>
          </div>
          <div class="orderselect">
            <div
              @click="toPage('problem2',{bignum : index, smallnum : num})"
              class="choose"
              v-for="(quesitem,num) in item.problemitem"
              :key="num"
            >{{quesitem}}</div>
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
      problem: [
        {
          url: require('./image/one.png'),
          bigproble: '关于订单',
          problemitem: [
            '已经收货的订单为什么失效了呢？',
            '为什么下单后没有佣金?'
          ]
        },
        {
          url: require('./image/two.png'),
          bigproble: '关于佣金',
          problemitem: [
            '产生收入了为什么还不能提现？',
            '为什么下单之后佣金变少了呢？'
          ]
        },
        {
          url: require('./image/three.png'),
          bigproble: '关于优惠券',
          problemitem: ['为什么优惠券失效了呢？', '券下单一直无法跳转怎么解决?']
        },
        {
          url: require('./image/four.png'),
          bigproble: '关于分享',
          problemitem: ['怎么分享优惠券?', '如何邀请好友下载好价鼻子呢？']
        },
        {
          url: require('./image/five.png'),
          bigproble: '关于提现',
          problemitem: [
            '为什么提现时显示今日提现金额上限',
            '为什么我的可提现金额为0？',
            '为什么我的提现被驳回了呢？',
            '提现的时候，维权订单扣除是什么意思呢？'
          ]
        },
        {
          url: require('./image/five.png'),
          bigproble: '关于好价鼻子',
          problemitem: [
            '好价鼻子这个APP可靠吗?',
            '商品的售后问题找谁处理呢？',
            '好价鼻子要交钱吗？'
          ]
        }
      ]
    }
  }
}
</script>
