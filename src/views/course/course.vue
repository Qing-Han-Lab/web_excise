<style scoped lang='scss'>
.course {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f7f7f7;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.course-bg {
  flex: 1;
  background: #f7f7f7;
  overflow: auto;
  .course-panel {
    margin: 10px auto;
    padding: 10px 0;
    width: 356px;
    background-color: #ffffff;
    border-radius: 4px;
    .course-panel-img {
      margin: 0 auto;
      width: 318px;
      height: 135px;
      border-radius: 2px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .course-panel-title {
      padding-top: 10px;
      padding-left: 19px;
      padding-right: 19px;
      font-family: "PingFangSC-Medium";
      font-size: 16px;
      color: #333333;
    }
    .course-panel-subtitle {
      padding-top: 5px;
      padding-left: 19px;
      padding-right: 19px;
      font-family: "PingFangSC-Medium";
      font-size: 12px;
      color: #999999;
    }
  }
}
.course-bg::-webkit-scrollbar{
  display: none;
}
</style>

<template>
  <div class="course">
    <div class="course-bg">
      <div
        class="course-panel"
        v-for="(item,index) in guilds"
        :key="index"
        @click="toDetail(item.url)"
      >
        <div class="course-panel-img">
          <img :src="item.img" alt />
        </div>
        <div class="course-panel-title">{{item.title}}</div>
        <div class="course-panel-subtitle">{{item.content}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      guilds: [
        {
          img: require('./images/guild8.jpg'),
          title: '从什么是去中心化商业来理解好价鼻子',
          content: '关于好价鼻子去中心化的一点思考。',
          url: 'https://mp.weixin.qq.com/s/EMqKbLV5YdYTFS9Ha_09OQ'
        },
        {
          img: require('./images/guild9.jpeg'),
          title: '为什么好价鼻子可以成为你创业的APP',
          content: '加入好价鼻子一起创业吧。',
          url: 'https://mp.weixin.qq.com/s/-bO3yZ1PJDbZWTBb1EdXSQ'
        },
        {
          img: require('./images/guild10.jpeg'),
          title: '好价鼻子和淘客的区别',
          content: '如何区分与淘客的差别？销售模式？货品纬度？收益？',
          url: 'https://mp.weixin.qq.com/s/rfGXs_v6dyCmrzOGL4-Leg'
        },
        {
          img: require('./images/guild10(1).jpg'),
          title: '鼻子学院:打造个人IP',
          content: '如何打造个人IP',
          url: 'https://mp.weixin.qq.com/s/3_P0-ZeXS1CA884kJRZctw'
        },
        {
          img: require('./images/guild11.jpg'),
          title: '大学生如何用好价鼻子赚取自己的第一桶佣金',
          content: '今天就为大家推荐2019年适合在校大学生挣钱的兼职创业项目',
          url: 'https://mp.weixin.qq.com/s/0m9mNP4KOGSFxL_e2Dfxww'
        },
        {
          img: require('./images/guild12.jpg'),
          title: '好价鼻子的会员权益有哪些差异？',
          content: '今天给大家介绍一下',
          url: 'https://mp.weixin.qq.com/s/dnNr-k-jenzz1m0CfbprDA'
        },
        {
          img: require('./images/guild13.jpeg'),
          title: '好价鼻子的分拥模式？',
          content: '普通会员，高级会员，puls会员的不同权益。',
          url: 'https://mp.weixin.qq.com/s/-b1RroJrVRoQb5LocfttQw'
        },
        {
          img: require('./images/guild1.jpg'),
          title: '什么是好价鼻子APP？',
          content: '本文给新手网购用户介绍好价鼻子APP省钱和赚钱的逻辑。',
          url: 'https://mp.weixin.qq.com/s/j50N3veaOMfS2Aso_HKXpg'
        },
        {
          img: require('./images/guild14.jpeg'),
          title: '如何实现人脉变现',
          content: '今天分享人脉即钱脉。',
          url: 'https://mp.weixin.qq.com/s/6xFKlrEhSqM4iTEEcC5fKw'
        },
        {
          img: require('./images/guild2.jpg'),
          title: '淘宝天猫、京东、拼多多的为什么会有隐藏优惠券？',
          content: '给大家分享淘宝、京东、拼多多平台隐藏优惠券的秘密。',
          url: 'https://mp.weixin.qq.com/s/plck6zyalW9WpcSnp-bg-Q'
        },
        {
          img: require('./images/guild15.jpeg'),
          title: '朋友圈广告技巧下篇',
          content: '下篇7个描述，让你更深的认识朋友圈的信任感。',
          url: 'https://mp.weixin.qq.com/s/2buGbJhlfkN5rbw4MrcnXQ'
        },
        {
          img: require('./images/guild17.jpeg'),
          title: '朋友圈消费分类',
          content: '一文交你朋友圈如何分类。',
          url: 'https://mp.weixin.qq.com/s/nLREv4Mgm7MuE38z1S_aBA'
        },
        {
          img: require('./images/guild18.png'),
          title: '鼻子学院:如何建群与维护',
          content: '大家好我是好价鼻子的早期用户,本堂课程教大家如何正确运营微信群。',
          url: 'https://mp.weixin.qq.com/s/Ebut1ydfVMgKtTaGXdtFYQ'
        },
        {
          img: require('./images/guild16.jpg'),
          title: '朋友圈广告技巧上篇',
          content: '朋友圈广告技巧上篇，5个小绝招',
          url: 'https://mp.weixin.qq.com/s/QbGoZCSjQbmqN_H3pD12tQ'
        },
        {
          img: require('./images/guild3.jpg'),
          title: '好价鼻子的会员等级有哪些差异？',
          content:
            '很多新人刚接触好价鼻子APP，不了解好价鼻子到底有哪几类用户，不同级别用户又有什么不同的权益，今天给大家详细介绍一下~',
          url: 'https://mp.weixin.qq.com/s/plck6zyalW9WpcSnp-bg-Q'
        },
        {
          img: require('./images/guild4.jpg'),
          title: '好价鼻子的分佣奖励模式是怎么样的？',
          content:
            '本文给大家详细介绍好价鼻子APP里，普通用户，高级会员，puls会员的不同权益。',
          url: 'https://mp.weixin.qq.com/s/-b1RroJrVRoQb5LocfttQw'
        },
        {
          img: require('./images/guild5.jpg'),
          title: '鼻子学院：如何建群与维护群?',
          content:
            '大家好，我是好价鼻子的早期用户，本堂课程教大家如何正确运营微信群。',
          url: 'https://mp.weixin.qq.com/s/Ebut1ydfVMgKtTaGXdtFYQ'
        },
        {
          img: require('./images/guild6.jpg'),
          title: '鼻子学院：朋友圈消费者分类',
          content: '小颖老师教你如何进行朋友圈分类。',
          url: 'https://mp.weixin.qq.com/s/nLREv4Mgm7MuE38z1S_aBA'
        },
        {
          img: require('./images/guild7.jpg'),
          title: '鼻子学院：大学生如何利用好价鼻子赚取自己的第一桶金',
          content: '大东老师为大家推荐2019年适合在校大学生挣钱的兼职创业项目~',
          url: 'https://mp.weixin.qq.com/s/0m9mNP4KOGSFxL_e2Dfxww'
        }
      ]
    }
  },
  methods: {
    toDetail (url) {
      if (window.plus) {
        this.createWB(url, 'guide', '进阶教程详情')
      } else {
        document.addEventListener('plusready', () => {
          this.createWB(url, 'guide', '进阶教程详情')
        }, false)
      }
    }
  }
}
</script>
