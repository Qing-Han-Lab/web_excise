export default {
  login: '/api/middle/security/mobileLogin', // 登录
  mobileLogin: '/hj/user/base/mobileLogin', // 登录
  sendIdentifyCode: '/api/middle/security/sendIdentifyCode', // 发送验证码
  sendUserIdentifyCode: '/hj/user/base/sendUserMsg', // 发送验证码
  queryItemCats: '/hj/product/queryItemCats', // 商品类目
  searchitem: '/hj/product/queryProducts', // 商品搜索
  guesslike: '/hj/product/searchFavoriteProducts', // 猜你喜欢
  topitem: '/hj/product/queryPopularityProducts', // 人气榜单
  searchFavoriteProducts: '/hj/product/querySimilarProducts', // 猜你喜欢
  queryBigCouponsProducts: '/hj/product/queryBigCouponsProducts', // 大额券
  queryHotProducts: '/hj/product/queryHotProducts', // 大家都在抢
  queryBaicaiProducts: '/hj/product/queryBaicaiProducts', // 白菜价商品
  queryBrandProducts: '/hj/product/queryBrandProducts', // 品牌券商品
  fans: '/hj/user/base/getMyFans', // 粉丝
  info: '/hj/user/msg/queryMyMessages', // 消息
  getindent: '/hj/user/order/queryMyOrders', // 订单
  getHotSearchKeywords: '/hj/product/getHotSearchKeywords', // 热搜关键词
  getMySearchHistory: '/hj/product/getMySearchHistory', // 搜索历史
  register: '/hj/user/base/registerUser', // 注册
  getProductDetail: '/hj/product/getProductDetail', // 商品详情
  getMsg: '/hj/user/msg/queryMyMessages', // 消息通知
  getUserInfo: '/hj/user/base/getUserInfo', // 个人信息
  getUserIncome: '/hj/user/account/getUserIncome', // 个人收入报表
  userSignIn: '/hj/user/base/userSignIn', // 用户签到
  bindInviteCode: '/hj/user/base/bindInviteCode', // 绑定邀请码
  getUser: '/hj/user/profit/getUser', // 获取邀请用户信息
  searchNewsProducts: '/hj/product/searchNewsProducts', // 新人
  getUserAccountInfo: '/hj/user/account/getUserAccountInfo', // 获取个人账户信息
  getUserIncomeDetail: '/hj/user/account/getUserIncomeDetail', // 收入详情
  applyMoney: '/hj/user/account/applyMoneyV2', // 提现申请
  checkToken: '/api/middle/security/checkToken', // 检测登录态
  getOssRedirectSign: '/api/middle/oss/getHjbzOssRedirectSign', // 获取OSS信息
  weixinUserLogin: '/api/middle/security/weixinUserLogin', // 微信登录
  getUserSetting: '/hj/user/base/getUserSetting', // 获取用户设置
  updateUserSetting: '/hj/user/base/updateUserSetting', // 更新用户设置
  genTaoCommand: '/hj/share/genTaoCommand', // 生成淘口令
  changeChain: '/hj/buy/changeChain', // 转链
  refreshToken: '/api/middle/security/refreshToken', // 刷新token
  saveShareGoodsInfo: '/hj/share/saveShareGoodsInfo', // 保存分享信息
  feedback: '/hj/user/base/feedback', // 用户反馈
  genUserCommissionPid: '/hj/buy/genUserCommissionPid', // 生成用户推广位
  appVersion: '/hj/comm/appVersion', // 版本信息
  queryDictionary: '/hj/comm/queryDictionary', // 数据字典
  delMyHisSearchKeywords: '/hj/product/delMyHisSearchKeywords', // 删除搜索历史
  isAuthorize: '/hj/buy/isAuthorize', // 是否淘宝授权
  isNewMessages: '/hj/user/msg/isNewMessages', // 拉取用户消息
  readMessages: '/hj/user/msg/readMessages', // 设置消息为已读
  queryList: '/hj/content/feedshome/queryHomeList', // 查询商品信息
  queryFeedsList: '/hj/synchfeeds/queryFeedsList', // 搜索商品信息
  queryRecFeedsList: '/hj/revelatrecom/feeds/queryRecFeedsList', // 查询推荐接口
  getContentDetail: '/hj/content/feedsdetail/getContentDetail', // 查询商品详情 二期
  view: '/hj/content/view', // 浏览通知
  share: '/hj/content/share', // 分享通知
  queryComment: '/hj/content/queryComment', // 查询评论
  sendComment: '/hj/content/comment', // 发送评论
  findTransferDetail: '/hj/user/revelat/feeds/transferRevelat', // 查询转换商品信息 二期
  saveSingalItem: '/hj/user/revelat/feeds/saveSingleRevelat', // 保存单品类图文 二期
  saveActiveItem: '/hj/user/revelat/feeds/saveActImgTextRevelat', // 保存活动类图文 二期
  findMySendKnock: '/hj/user/revelat/feeds/queryMyRecFeedsList', // 查询我的爆料 二期
  queryHotFeedsList: '/hj/revelatrecom/feeds/queryHotFeedsList', // 获取热门好价
  favorite: '/hj/content/favorite', // 收藏
  queryChosenFeedsList: '/hj/revelatrecom/feeds/queryChosenPageList', // 精选
  findFavorite: '/hj/content/queryMyFavorite', // 查询我喜欢的
  delFavorite: '/hj/content/delFavorite', // 删除我喜欢的
  queryTopFeedsList: '/hj/content/topfeeds/queryTopFeedsList', // 顶部商品
  queryCommentsById: '/hj/content/queryCommentsById',
  queryRandomHotFeedsList: '/hj/revelatrecom/feeds/queryRandomHotFeedsList',
  getUserDetail: '/hj/user/base/getUserInfo', // 查询用户信息
  resetUserDetail: '/hj/user/base/modifyUser', // 修改用户信息
  delMyRevelat: '/hj/user/revelat/feeds/delMyRevelat', // 删除爆料信息
  resetSingalKnock: '/hj/user/revelat/feeds/upSingleRevelat', // 修改单品爆料信息
  popLayer: '/hj/comm/popLayer',
  findHaveKnock: '/hj/user/revelat/feeds/judgeCanIntoMyRevelat', // 好价鼻子商品库到我的爆料库中
  queryPddGoods: '/hj/product/queryPDDThemeGoods', // 首页拼多多入口精选商品
  queryJdGoods: '/hj/product/queryJDJingfenGoods', // 首页京东入口精选商品
  platformMenusItem: '/hj/product/queryItemCats', // 京东拼多多入口菜单栏数据
  todayHot: '/hj/product/queryTop100Goods', // 今日爆款
  nineMoney: '/hj/product/queryJiuKuaiJiuProducts', // 9.9元包邮
  flashsale: '/hj/product/queryQiangGouProducts', // 限时抢购
  bindAlipayAccount: '/hj/user/account/bindAlipayAccount', // 绑定支付宝账号
  getCurrentPayAccount: '/hj/user/account/getCurrentPayAccount', // 获取用户支付信息
  queryBkImage: '/hj/product/queryBkImage',
  queryProductsByMaterialId: '/hj/product/queryProductsByMaterialId',
  downSellItem: '/hj/content/feedsStatus/unPublish', // 下架商品
  makeSellItemTop: '/hj/content/feedsStatus/isTop', // 置顶商品
  makeSellItemHot: '/hj/content/feedsStatus/isHot', // 置为热门商品
  makeSellItemNice: '/hj/content/feedsStatus/isChosen', // 置为精选商品
  checkStatus: '/hj/content/feedsStatus/checkStatus', // 查询feeds状态
  resetSellDetail: '/hj/content/feedsStatus/upRevelatReCom',
  changeTags: '/hj/content/feedsStatus/changeTags', // 编辑标签
  redpacket: '/hj/comm/pullConfig'
}
