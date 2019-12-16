import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import http from './utils/http'
import api from './utils/api'

Vue.use(Vuex)

const saveToPlus = (key, value) => {
  window.plus.storage.setItem(key, value)
}

export default new Vuex.Store({
  state: {
    catId: '', // 类目ID three.vue有调用
    ddxId: '', // three.vue有调用
    token: '', // 登录态
    refresh: '', // 刷新登录态
    hasMsg: false, // 是否有新消息
    device: {}, // 设备信息
    userId: '', // 用户的唯一id
    userInfo: {
      level: 'normalLevel'
    }, // 默认用户信息
    account: {
      todayPreMoney: '0.00',
      yesterdayPreMoney: '0.00',
      currentMonthPreMoney: '0.00',
      totalMoney: '0.00',
      money: '0.00'
    }, // 默认账户信息
    tokenTime: 0, // 登录态过期时间
    mainPageSearchKey: '', // 二期搜索页
    replyUser: {
      userId: '',
      nickName: '',
      commentId: '',
      index: -1,
      contentId: ''
    }, // 评论回复信息
    sendShow1: false, // 评论回复框
    userToken: '',
    share: {
      sweixin: null,
      qq: null,
      sina: null
    },
    ossInfo: {
      accessid: '',
      signature: '',
      dir: '',
      policy: '',
      host: ''
    }, // OSS服务器信息
    autourl: '', // 自动跳转的url
    redPacketUrl: {}
  },
  mutations: {
    saveState (state, obj) {
      state[obj.name] = obj.data
    },
    saveUserId (state, userid) {
      state.userId = userid
    }
  },
  actions: {
    getUserAccountInfo (context) {
      // 获取用户信息
      http('GET', api.getUserInfo, {}).then(res => {
        if (res.data.success === true) {
          context.commit('saveState', {
            name: 'userInfo',
            data: res.data.model
          })
        } else {
          context.commit('saveState', {
            name: 'userInfo',
            data: { level: 'normalLevel' }
          })
        }
      }).catch(() => {
        context.commit('saveState', {
          name: 'userInfo',
          data: { level: 'normalLevel' }
        })
      })
    },
    isNewMessages (context) {
      // 查询是否有新消息
      http('GET', api.isNewMessages).then(res => {
        if (res.data.success === true) {
          if (res.data.model > 0) {
            context.commit('saveState', {
              name: 'hasMsg',
              data: true
            })
          } else {
            context.commit('saveState', {
              name: 'hasMsg',
              data: false
            })
          }
        }
      })
    },
    getUserIncome (context) {
      // 获取用户收入 mine页面
      http('GET', api.getUserIncome).then(res => {
        if (res.data.success === true) {
          context.commit('saveState', {
            name: 'account',
            data: res.data.model
          })
        }
      })
    },
    initAll (context) {
      // 初始化所有数据
      context.commit('saveState', {
        name: 'token',
        data: ''
      })
      context.commit('saveState', {
        name: 'userToken',
        data: ''
      })
      context.commit('saveState', {
        name: 'refresh',
        data: ''
      })
      context.commit('saveState', {
        name: 'hasMsg',
        data: false
      })
      context.commit('saveState', {
        name: 'userInfo',
        data: { level: 'normalLevel' }
      })
      context.commit('saveState', {
        name: 'account',
        data: {
          todayPreMoney: '0.00',
          yesterdayPreMoney: '0.00',
          currentMonthPreMoney: '0.00',
          totalMoney: '0.00',
          money: '0.00'
        }
      })
      context.commit('saveState', {
        name: 'tokenTime',
        data: 0
      })
      sessionStorage.clear()
      if (window.plus) {
        window.plus.storage.clear()
      } else {
        document.addEventListener('plusready', () => {
          window.plus.storage.clear()
        }, false)
      }
    },
    clearReplyState (context) {
      // 清除评论状态 隐藏输入框
      context.commit('saveState', {
        name: 'replyUser',
        data: {
          userId: '',
          nickName: '',
          commentId: '',
          index: -1,
          contentId: ''
        }
      })
      context.commit('saveState', {
        name: 'sendShow1',
        data: false
      })
    },
    recommentState (context) {
      // 清除评论状态 展示发送框
      context.commit('saveState', {
        name: 'replyUser',
        data: {
          userId: '',
          nickName: '',
          commentId: '',
          index: -1,
          contentId: ''
        }
      })
      context.commit('saveState', {
        name: 'sendShow1',
        data: true
      })
    },
    updateSerivces (context) {
      // 更新分享服务
      console.log('开始获取分享服务')
      window.plus.share.getServices(
        s => {
          let shares = {}
          for (var i in s) {
            var t = s[i]
            shares[t.id] = t
          }
          let obj = {
            sweixin: shares['weixin'],
            qq: shares['qq'],
            sina: shares['sinaweibo']
          }
          context.commit('saveState', {
            name: 'share',
            data: obj
          })
          console.log('更新分享服务列表成功')
        },
        e => {
          console.log('获取分享服务列表失败：' + e.message)
        }
      )
    },
    getOssInfo (context, callback) {
      // 请求OSS服务器信息
      http('GET', api.getOssRedirectSign).then(
        res => {
          context.commit('saveState', {
            name: 'ossInfo',
            data: {
              accessid: res.data.model.accessid,
              signature: res.data.model.signature,
              dir: res.data.model.dir,
              policy: res.data.model.policy,
              host: res.data.model.host
            }
          })
          callback()
        },
        err => {
          console.log(err)
        }
      )
    },
    getPDDredpacketUrl (context) {
      // 获取拼多多红包Url
      http('GET', api.redpacket).then(res => {
        if (res.data.success === true) {
          let data = JSON.parse(res.data.model)
          console.log(data)
          context.commit('saveState', {
            name: 'redPacketUrl',
            data: data
          })
        }
      })
    }
  },
  plugins: [createPersistedState({
    storage: {
      getItem: (key) => {
        if (localStorage.getItem(key)) {
          return window.localStorage.getItem(key)
        }
        if (window.plus) {
          return window.plus.storage.getItem(key)
        }
      },
      setItem: (key, value) => {
        window.localStorage.setItem(key, value)
        if (window.plus) {
          saveToPlus(key, value)
        } else {
          document.addEventListener('plusready', saveToPlus, false, key, value)
        }
      },
      removeItem: (key) => {
        window.localStorage.removeItem(key)
      }
    }
  })]
})
