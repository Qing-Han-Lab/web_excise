import Vue from 'vue'
import Router from 'vue-router'
// import Layout from '@/views/layout/layout.vue'
// import Home from '@/views/home/home.vue'
// import Hot from '@/views/home/hot.vue'
// import Right from '@/views/home/right.vue'
// import Mine from '@/views/home/mine.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    // {
    //   path: '/layout',
    //   name: 'layout',
    //   component: Layout
    // },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home/home.vue')
    },
    {
      path: '/hot',
      name: 'hot',
      component: () => import('@/views/home/hot.vue')
    },
    {
      path: '/right',
      name: 'right',
      component: () => import('@/views/home/right.vue')
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import('@/views/home/mine.vue')
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('@/views/product/product')
    },
    {
      path: '/product2',
      name: 'product2',
      component: () => import('@/views/product/product2')
    },
    {
      path: '/cabbage',
      name: 'cabbage',
      component: () => import('@/views/cabbage/cabbage')
    },
    {
      path: '/largeInside',
      name: 'largeInside',
      component: () => import('@/views/largeInside/largeInside')
    },
    {
      path: '/fans',
      name: 'fans',
      component: () => import('@/views/fans/index')
    },
    {
      path: '/invite',
      name: 'invite',
      component: () => import('@/views/invite/index')
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: () => import('@/views/feedback/index')
    },
    {
      path: '/setting',
      name: 'setting',
      component: () => import('@/views/setting/index')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/login')
    },
    // {
    //   path: '/register',
    //   name: 'register',
    //   component: () => import('@/views/login/register')
    // },
    {
      path: '/bindPhone',
      name: 'bindPhone',
      component: () => import('@/views/login/bindPhone')
    },
    {
      path: '/loginInvite',
      name: 'loginInvite',
      component: () => import('@/views/login/loginInvite')
    },
    {
      path: '/mobilelogin',
      name: 'mobilelogin',
      component: () => import('@/views/login/mobileLogin')
    },
    {
      path: '/message',
      name: 'message',
      component: () => import('@/views/message/message')
    },
    {
      path: '/msgCommission',
      name: 'msgCommission',
      component: () => import('@/views/message/msgCommission')
    },
    {
      path: '/msgFans',
      name: 'msgFans',
      component: () => import('@/views/message/msgFans')
    },
    {
      path: '/msgActivity',
      name: 'msgActivity',
      component: () => import('@/views/message/msgActivity')
    },
    {
      path: '/shareCreate',
      name: 'shareCreate',
      component: () => import('@/views/share/shareCreate')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('@/views/order/order')
    },
    {
      path: '/reportIncome',
      name: 'reportIncome',
      component: () => import('@/views/report/reportIncome')
    },
    {
      path: '/problem1',
      name: 'problem1',
      component: () => import('@/views/problem/problem1')
    },
    {
      path: '/problem2',
      name: 'problem2',
      component: () => import('@/views/problem/problem2')
    },
    {
      path: '/introduce',
      name: 'introduce',
      component: () => import('@/views/introduce/introduce')
    },
    {
      path: '/course',
      name: 'course',
      component: () => import('@/views/course/course')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/views/search/index')
    },
    {
      path: '/mainSearch',
      name: 'mainSearch',
      component: () => import('@/views/search/mainSearch')
    },
    {
      path: '/withdraw',
      name: 'withdraw',
      component: () => import('@/views/withdraw/withdraw')
    },
    {
      path: '/protocol',
      name: 'protocol',
      component: () => import('@/views/login/protocol')
    },
    {
      path: '/useProtocool',
      name: 'useProtocool',
      component: () => import('@/views/introduce/useProtocool')
    },
    {
      path: '/guess',
      name: 'guess',
      component: () => import('@/views/guess/guess')
    },
    {
      path: '/rule',
      name: 'rule',
      component: () => import('@/views/rule/rule.vue')
    },
    // {
    //   path: '/courseDetail',
    //   name: 'courseDetail',
    //   component: () => import('@/views/course/courseDetail.vue')
    // },
    {
      path: '/advPage',
      name: 'advPage',
      component: () => import('@/views/advPage/advPage.vue')
    },
    // {
    //   path: '/commentPage',
    //   name: 'commentPage',
    //   component: () => import('@/views/comment/commentPage.vue')
    // },
    {
      path: '/haveknock',
      name: 'haveknock',
      component: () => import('@/views/knock/haveknock.vue')
    },
    {
      path: '/knockgoodprice',
      name: 'knockgoodprice',
      component: () => import('@/views/knock/knockgoodprice.vue')
    },
    {
      path: '/makeknock',
      name: 'makeknock',
      component: () => import('@/views/knock/makeknock.vue')
    },
    {
      path: '/mylike',
      name: 'mylike',
      component: () => import('@/views/knock/mylike.vue')
    },
    {
      path: '/sendknock1',
      name: 'sendknock1',
      component: () => import('@/views/knock/sendknock1.vue')
    },
    {
      path: '/resetUserInfo',
      name: 'resetUserInfo',
      component: () => import('@/views/resetUserInfo/resetUserInfo.vue')
    },
    {
      path: '/ninemoney',
      name: 'ninemoney',
      component: () => import('@/views/ninemoney/ninemoney.vue')
    },
    {
      path: '/todayhot',
      name: 'todayhot',
      component: () => import('@/views/todayhot/todayhot.vue')
    },
    {
      path: '/largecoupon',
      name: 'largecoupon',
      component: () => import('@/views/largecoupon/largecoupon.vue')
    },
    {
      path: '/flashsale',
      name: 'flashsale',
      component: () => import('@/views/flashsale/flashsale.vue')
    },
    {
      path: '/plathome',
      name: 'plathome',
      component: () => import('@/views/plathome/plathome.vue')
    }, {
      path: '/taobaoentrance',
      name: 'taobaoentrance',
      component: () => import('@/views/taobaoentrance/taobaoentrance.vue')
    },
    {
      path: '/binding',
      name: 'binding',
      component: () => import('@/views/binding/binding.vue')
    },
    {
      path: '/minuterule',
      name: 'minuterule',
      component: () => import('@/views/minuterule/minuterule.vue')
    },
    {
      path: '/video',
      name: 'video',
      component: () => import('@/views/video/video.vue')
    },
    {
      path: '/resetknock',
      name: 'resetknock',
      component: () => import('@/views/resetKnock/resetknock.vue')
    },
    {
      path: '/addtitle',
      name: 'addtitle',
      component: () => import('@/views/resetKnock/addtitle.vue')
    },
    {
      path: '/alterInfo',
      name: 'alterInfo',
      component: () => import('@/views/alterInfo/alterInfo.vue')
    }
  ]
})
