<style scoped lang='scss'>
.wrapper {
  width: 375px;
}
.wrapper .wrapper-item {
  width: 349px;
  margin: 10px auto;
  position: relative;
}
.wrapper-item .wrapper-item-text {
  position: absolute;
  top: 17px;
  left: 17px;
  width: 306px;
  height: 84px;
}
.wrapper-item-text .question {
  width: 306px;
  letter-spacing: 1px;
  font-family: S "ourceHanSansSC-Normal";
  font-weight: normal;
  font-stretch: normal;
}
.wrapper-item-text .answer {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 306px;
  height: 53px;
  font-family: "SourceHanSansSC-Medium";
  font-size: 11px;
  line-height: 18px;
  letter-spacing: 1px;
  color: rgba(51, 51, 51, 0.6);
  margin-top: 10px;
}
.answer .left {
  width: 25px;
  height: 35px;
}
.answer .right {
  width: 281px;
  height: 53px;
  .right-text {
    margin-bottom: 10px;
  }
}
</style>

<template>
  <div class="home">
    <div class="wrapper">
      <div class="wrapper-item">
        <div class="wrapper-item-text">
          <div class="question">问：{{nowQuestion.question}}</div>
          <div class="answer">
            <div class="left">答：</div>
            <div class="right">
              <div class="right-text" v-for="(item,index) in nowQuestion.answer.split('/')" :key="index">{{item}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  data () {
    return {
      questions: [
        [{
          question: '已经收货的订单为什么失效了呢？',
          answer:
            '你好，确认收货的订单仍然可以进行申请售后进行退货退款哦，这类订单属于维权订单，佣金会在提现的时候扣除哦。'
        },
        {
          question: '为什么下单后没有佣金?',
          answer:
            '【大家注意】购买时请注意以下几点,90%会得不到佣金哦/①领券后加入购物车或收藏之后购买/②使用集分宝、红包以及其他第三方优惠/③领券后拍了店铺的其他商品/④咨询店家时通过淘宝客服发的商品链接下单/⑤使用手机淘宝以外的任何手机APP下单/正确的下单方式:复制口令→打开手机淘宝→领券→选择规格→立即下单。'
        }],
        [{
          question: '产生收入了为什么还不能提现？',
          answer:
            '好友购买后的收入是预计收入，只有当好友确认收货了以后的佣金收入才是确认收入，每月的25日结算上个自然月1-31日的已确认收货的佣金收入，结算完成后即可申请提现到支付宝哦。'
        },
        {
          question: '为什么下单之后佣金变少了呢？',
          answer:
            '你好哦，关于佣金不对问题可能存在以下几种原因，可以看下哦/1、商家临时调整了优惠券和佣金比例（数据没有及时同步）/2、分享A，买了B（需要检查两个订单的商品标题是否一致）/'
        }],
        [{
          question: '为什么为什么优惠券失效了呢？',
          answer:
            '你好，有以下几种情况哦/1、商品太火爆，优惠券已经被领完了 /2、商家取消了商品优惠券具体的优惠券活动需要在淘宝咨询卖家哦'
        },
        {
          question: '券下单一直无法跳转怎么解决?',
          answer:
            '1、有可能是您手机网络的问题,您切换一下网络试一下 /2、您可以关闭APP,重新打开试试 /3、以上两种方法都不行时,有可能商品本身的原因,您可以联系我们官方客服,将问题反馈给客服哦!'
        }],
        [{
          question: '怎么分享优惠券?',
          answer:
            '在好价鼻子中,打开您想要分享的商品,下方会有一个"分享赚″，点击后您即可分享了。'
        },
        {
          question: '如何邀请好友下载好价鼻子呢？',
          answer:
            '你好，可以通过以下步骤进行邀请哦/1．打开好价鼻子一点击“我的＂页面一点击“邀请好友将邀请码和海报分享给好友一好友扫码下载后填写你的邀请码就可以了哦/2．也可以在手机自带商城中搜索“好价鼻子＂，下载后填写邀请码注册，部分安卓机型搜索不到的，可以在应用宝里面下载哦～'
        }],
        [ {
          question: '为什么提现时显示今日提现金额上限?',
          answer:
            '/亲,支付宝限额1天1000万,现在已经开始限额了哦可以过了当晩0点后再进行提现哦,给您带来不便之处,请理解哦。'
        },
        {
          question: '为什么我的可提现金额为0？',
          answer:
            '你好，提现规则为：每月22号结算上月确认收货订单/例如：/11月22号提现10月1号－10月30号确认收货的订单/12月22号提现11月1号－1月30号确认收货的订单/1月22号结算12月1号－12月31号确认收获订单/请注意：按照确认收货时间结算！可以在淘宝查看订单的确认收货时间哦'
        },
        {
          question: '为什么我的提现被驳回了呢？',
          answer:
            '你好，可以点击提现驳回＇字样，查看被拒绝的具体原因哦/1．提现预留的支付宝姓名与支付宝实名认证的名字不样/2支付宝没有实名/3支付宝账号搜索不到，需要在支付宝开启＂通过手机号邮箱）拢到我“隐私开关修改正确的信息可以重新提现哦'
        },
        {
          question: '提现的时候，维权订单扣除是什么意思呢？',
          answer:
            '你好，确认收货的订单仍然可以进行申请售后进行退货退款哦，这类订单属于维权订单，佣金会在提现的时候扣除哦'
        }],
        [{
          question: '好价鼻子这个APP可靠吗?',
          answer:
            '好价鼻子是一个零投入，无风险，可以长期发展作为一份事业的项目/好价鼻子团队来自阿里巴巴，腾讯，滴滴等国内知名互联网公司，目前已经服务超过百万用户，在好价鼻子平台创业+兼职的用户超过10万!同时，我们的电商端直接对接淘宝、天猫、京东、拼多多，返利佣金直接打到公司账户，由公司统一发放到个人，不存在加盟商卷款跑路的可能性，只要淘宝不倒闭，你的佣金就一分都不会少。/加入好价鼻子，我们与你携手同行，开启自用省钱分享赚钱之路!'
        },
        {
          question: '商品的售后问题找谁处理呢？',
          answer:
            '你好，好价鼻子平台不卖货，所有商品还是淘宝天猫商家提供的。我们只是提供淘宝天猫隐藏优惠券，帮助用户省钱。遇到商家延期发货的情况，要立马询问商家或者退款。超过4、5天记得一定要退款哦/遇到商家少发漏发错发的情况，要先保存购买记录及商品，然后找商家或者打电话淘宝维权投诉哦/遇到商品质量与描述不符或质量和商品价格严重不符的情况，要及时拒签退货，或者多次投诉哦/投诉可以直接拨打淘宝电话：9510211'
        },
        {
          question: '好价鼻子要交钱吗？',
          answer:
            '下载注册好价鼻子，以及推广好价鼻子平台上的优惠券和商品，都是完全免费的。自用免费，分享免费，升级plus会员免费，全程不收一分钱。'
        }]
      ],
      nowQuestion: {
        question: '已经收货的订单为什么失效了呢？',
        answer:
            '你好，确认收货的订单仍然可以进行申请售后进行退货退款哦，这类订单属于维权订单，佣金会在提现的时候扣除哦。'
      }
    }
  },
  mounted () {
    // this.$route.query.xxx
    var bignum = this.$route.query.bignum
    var smallnum = this.$route.query.smallnum
    this.nowQuestion = this.questions[bignum][smallnum]
  }
}
</script>
