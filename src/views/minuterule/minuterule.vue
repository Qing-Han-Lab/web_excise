<style scoped lang='scss'>
.minuterule {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffffff;
  overflow: auto;
  padding-bottom: 20px;
  .minuterule-ask {
    width: 52px;
    height: 52px;
    margin: 13px auto;
    img {
      width: 52px;
      height: 52px;
    }
  }
  .minuterule-btn {
    width: 156px;
    height: 29px;
    background-color: #fb2c68;
    line-height: 29px;
    color: #ffffff;
    font-size: 16px;
    font-family: "SourceHanSansSC-Regula";
    font-weight: 400;
    margin: 0px auto;
    text-align: center;
  }
  .minuterule-box {
    width: 325px;
    min-height: 53px;
    margin: 37px auto 0px;
    font-size: 12px;
    color: #666666;
    .minuterule-box-title {
      font-size: 14px;
      color: #333;
      font-family: "SourceHanSansSC-Regula";
      font-weight: 400;
    }
    .minuterule-box-text{
      margin: 5px 0px;
      line-height: 20px;
    }
  }
}
</style>
<template>
  <div class="minuterule">
    <div class="minuterule-ask">
      <img src="./images/icon-ask.png" alt />
    </div>
    <div class="minuterule-btn">提现金额相关规则</div>
    <div class="minuterule-box" v-for="(item,index) in askList" :key="index">
      <div class="minuterule-box-title">{{item.title}}</div>
      <div class="minuterule-box-text">{{item.text}}</div>
      <div class="minuterule-box-text">{{item.text1}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      askList: [
        {
          title: '1.可提现金额',
          text: '为当前您可以直接提现到支付宝的金额，它由历史已为您结算且还未提现的金额的总和计算得出。',
          text1: ''
        },
        {
          title: '2.上月已结算',
          text: '为上个自然月里符合结算条件的佣金总额。',
          text1: ''
        },
        {
          title: '3.本月已结算',
          text: '为本个自然月里符合阶段条件的佣金总额。',
          text1: ''
        },
        {
          title: '4.待结算',
          text: '为本个自然月之前的所有还未结算的佣金总额。',
          text1: ''
        },
        {
          title: '5.结算周期',
          text: '每个月25号结算本月之前的所有确认收货完成的订单的金额。',
          text1: '举例：当前是9月25号，如果您或者您的粉丝在8月30号之前的订单，同时进行了确认收货动作，那么9月将会对这些订单进行结算。如果您或您的粉丝8月30号购买了商品形成订单，但在9月7号才确认收货，那么该笔订单会在10月25号为您进行结算。'
        }
      ]
    }
  }
}
</script>
