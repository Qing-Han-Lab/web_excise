import store from '../store'
import { Toast } from 'mint-ui' // 吐司
import http from './http'
import api from './api'
import dayjs from 'dayjs'
/**
 * 公共函数封装
 */
const upon = {
  product: '好价详情',
  product2: '好价详情',
  cabbage: '品牌券专区',
  largeInside: '大额券专区',
  invite: '邀请好友',
  feedback: '意见反馈',
  setting: '设置',
  bindPhone: ' ',
  mobilelogin: ' ',
  msgCommission: '佣金消息',
  msgFans: '粉丝加入通知',
  msgActivity: '系统消息',
  shareCreate: '创建分享',
  order: '订单',
  problem1: '常见问题',
  problem2: '常见问题',
  introduce: '应用介绍',
  course: '进阶教程',
  protocol: '隐私政策',
  guess: '猜你喜欢',
  advPage: '好价详情',
  knockgoodprice: '爆料好价',
  makeknock: ' ',
  mylike: '我的喜欢',
  fans: '粉丝',
  reportIncome: '收入报表',
  useProtocool: '用户使用协议',
  video: '视频',
  taobaoentrance: '淘宝',
  largecoupon: '大额券专区',
  minuterule: '详细规则',
  flashsale: '限时抢购',
  todayhot: '今日爆款',
  ninemoney: '9.9包邮'
}

export default {
  install (Vue, options) {
    Vue.prototype.toPage = (name, data = {}, animation = 'pop-in') => {
      if (process.env.NODE_ENV === 'production') {
        let str = '/index.html#' + name
        str = str + '?'
        for (let key in data) {
          if (typeof data[key] === 'object') {
            str = str + key + '=' + encodeURIComponent(JSON.stringify(data[key])) + '&'
          } else {
            str = str + key + '=' + encodeURIComponent(data[key]) + '&'
          }
        }
        str = str.substring(0, str.length - 1)
        // 如果有导航栏配置名字的页面 不是一期详情页，就绘制导航栏
        // 否则直接跳转
        if (upon[name]) {
          if (name === 'product' || name === 'video') {
            if (!window.plus) return
            window.plus.webview.create(str, name, {
              'titleNView': {
                titleText: '', // 导航栏标题
                type: 'transparent', // 导航栏样式
                autoBackButton: true // 自动绘制返回箭头
              }
            }).show('pop-in')
          } else {
            Vue.prototype.createWB(str, name, upon[name])
          }
        } else {
          let w = window.plus.webview.create(str, name)
          window.third = w
          w.show(animation, 200)
        }
      } else {
        // 兼容H5跳转，H5跳转后没有导航栏了
        let dataStr = ''
        for (let key in data) {
          if (typeof data[key] === 'object') {
            dataStr = dataStr + key + '=' + encodeURIComponent(JSON.stringify(data[key])) + '&'
          } else {
            dataStr = dataStr + key + '=' + encodeURIComponent(data[key]) + '&'
          }
        }
        dataStr = '?' + dataStr.substring(0, dataStr.length - 1)
        location.href = `index.html#/${name}${dataStr}`
      }
    } // 跳转方法
    Vue.prototype.goBack = () => {
      if (process.env.NODE_ENV === 'production') {
        let ws = window.plus.webview.currentWebview()
        window.plus.webview.close(ws)
      } else {
        history.back()
      }
    } // 返回方法
    Vue.prototype.parseJSON = (data) => {
      let response
      try {
        response = JSON.parse(data)
      } catch (e) {
        console.log('转换对象失败')
        console.log(data)
        response = data
      }
      return response
    }
    Vue.prototype.hexString = (str) => {
      var val = ''
      for (var i = 0; i < str.length; i++) {
        if (val === '') { val = str.charCodeAt(i).toString(16) } else { val += str.charCodeAt(i).toString(16) }
      }
      val += '0a'
      return val
    }
    Vue.prototype.checkUrl = (url) => {
      // 检测url链接，自动补全协议
      if (url.indexOf('http') > -1 || url.indexOf('https') > -1) {
        return url
      } else {
        return `https:${url}`
      }
    }
    Vue.prototype.goThirdPlatform = (type, url, callback) => {
      // 跳转第三方App应用方法
      if (!window.plus) return
      if (type === 'taobao' || type === 'tmall') {
        window.plus.Biz.openTaobao(url, callback)
      } else if (type === 'jingdong') {
        window.plus.Biz.openJD(url, callback)
      } else if (type === 'pingduoduo') {
        window.plus.Biz.openPinduoduo(url, callback)
      }
    }
    Vue.prototype.getClipbordText = () => {
      // 获取剪切板内容 在plusready后再调用
      if (!window.plus) return
      if (window.plus.os.name.toLocaleLowerCase() === 'android') {
        var Context = window.plus.android.importClass('android.content.Context')
        var main = window.plus.android.runtimeMainActivity()
        var clip = main.getSystemService(Context.CLIPBOARD_SERVICE)
        return window.plus.android.invoke(clip, 'getText')
      } else {
        var UIPasteboard = window.plus.ios.importClass('UIPasteboard')
        var generalPasteboard = UIPasteboard.generalPasteboard()
        var _val = generalPasteboard.plusCallMethod({ valueForPasteboardType: 'public.utf8-plain-text' })
        return _val || ''
      }
    }
    Vue.prototype.setClipbordText = (txt) => {
      // 写入剪切板内容 在plusready后再调用
      if (!window.plus) return
      if (window.plus.os.name.toLocaleLowerCase() === 'android') {
        var Context = window.plus.android.importClass('android.content.Context')
        var main = window.plus.android.runtimeMainActivity()
        var clip = main.getSystemService(Context.CLIPBOARD_SERVICE)
        window.plus.android.invoke(clip, 'setText', txt)
      } else {
        var UIPasteboard = window.plus.ios.importClass('UIPasteboard')
        var generalPasteboard = UIPasteboard.generalPasteboard()
        generalPasteboard.setValueforPasteboardType(txt, 'public.utf8-plain-text')
      }
    }
    Vue.prototype.createWB = (url, name, title) => {
      // 以H5+的titlebar 打开新页面 动画pop-in
      if (!window.plus) return
      let color = '#fff'
      let titleColor = '#000000'
      if (name === 'fans' || name === 'reportIncome' || name === 'largecoupon' || name === 'minuterule' || name === 'flashsale' || name === 'todayhot' || name === 'ninemoney') {
        color = '#fb2c68'
        titleColor = '#fff'
      } else if (name === 'invite') {
        color = '#8540fb'
        titleColor = '#fff'
      }
      let w = window.plus.webview.create(url, name, {
        'titleNView': {
          backgroundColor: color, // 导航栏背景色
          titleText: title, // 导航栏标题
          titleColor: titleColor, // 文字颜色
          type: 'default', // 透明渐变样式
          autoBackButton: true // 自动绘制返回箭头
        }
      })
      window.third = w
      w.show('pop-in')
    }
    Vue.prototype.toAuth = () => {
      // 淘宝授权变更
      try {
        let redirect = 'https://m-zy-api.yisutech.com' + '/dg/#/register?state=' + Vue.prototype.hexString(store.state.userToken) + '&'
        let url = 'https://oauth.taobao.com/authorize?response_type=token&client_id=27598010' +
          '&view=wap&redirect_uri=' + encodeURIComponent(redirect)
        if (window.plus) {
          // 授权
          window.plus.Biz.taobaoLogin(res => {
            if ((typeof res) === 'string') {
              res = Vue.prototype.parseJSON(res)
            }
            if (res && res.success) {
              // Vue.prototype.createWB(url, 'authorize', '淘宝授权'
              window.plus.Biz.openTaobao(url, (res) => {
                console.info(res)
              })
            }
          })
        } else {
          window.location.href = url
        }
      } catch (e) {
        Toast(e)
      }
    }
    Vue.prototype.doShare = (srv, msg) => {
      // 执行分享操作
      srv.send(
        msg,
        () => {
          console.log('分享到"' + srv.description + '"成功！')
        },
        e => {
          console.log(
            '分享到"' + srv.description + '"失败: ' + JSON.stringify(e)
          )
        }
      )
    }
    Vue.prototype.share = (srv, msg, button) => {
      console.log('分享操作：')
      if (!srv) {
        console.log('无效的分享服务！')
        return
      }
      button && (msg.extra = button.extra)
      // 发送分享
      if (srv.authenticated) {
        console.log('---已授权---')
        window.plus.nativeUI.closeWaiting()
        Vue.prototype.doShare(srv, msg)
      } else {
        console.log('---未授权---')
        srv.authorize(
          () => {
            console.log(srv, msg)
            Vue.prototype.share(srv, msg, button)
          },
          e => {
            console.log('认证授权失败：' + JSON.stringify(e))
          }
        )
      }
    }
    Vue.prototype.shareImage = (shareImg, type) => {
      var msg = { type: 'image' }
      msg.pictures = [shareImg]
      if (type === 'friend') {
        Vue.prototype.share(store.state.share.sweixin, msg, {
          title: '我的好友',
          extra: { scene: 'WXSceneSession' }
        })
      } else if (type === 'qq') {
        Vue.prototype.share(store.state.share.qq, msg)
      } else if (type === 'circle') {
        Vue.prototype.share(store.state.share.sweixin, msg, {
          title: '我的朋友圈',
          extra: { scene: 'WXSceneTimeline' }
        })
      } else if (type === 'sina') {
        Vue.prototype.share(store.state.share.sina, msg)
      } else if (type === 'local') {
        window.plus.gallery.save(shareImg, () => {
          Toast('保存图片到相册成功')
          window.plus.nativeUI.closeWaiting()
        }, () => {
          Toast('保存失败')
          window.plus.nativeUI.closeWaiting()
        })
      }
    }
    Vue.prototype.platformType = () => {
      let u = navigator.userAgent
      let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
      let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
      if (isAndroid) {
        return 'android'
      } else if (isiOS) {
        return 'ios'
      } else {
        return ''
      }
    }
    Vue.prototype.toUrl = (detail, closeLanding, callback) => {
      if ((detail.platform === 'taobao' || detail.platform === 'tmall') && store.state.token) {
        http('POST', api.isAuthorize, {
          platform: 'taobao'
        }).then(res => {
          if (res.data.model === false) {
            Vue.prototype.toAuth()
          } else {
            http('GET', api.changeChain, {
              platform: detail.platform,
              itemId: detail.itemId,
              extendJson: JSON.stringify({
                couponUrl:
                detail.couponInfo && detail.couponInfo.couponClickUrl ? detail.couponInfo.couponClickUrl : ''
              })
            }).then(res => {
              let chainUrl
              if (res.success || res.data.success) {
                chainUrl = detail.couponAmount ? res.data.model.shortUrl : res.data.model.url
                if (chainUrl) {
                  if (window.plus) {
                    closeLanding()
                    Vue.prototype.goThirdPlatform(detail.platform, chainUrl, auth => {
                      if (auth.success === true) {

                      } else {
                        callback(auth, chainUrl)
                      }
                    })
                  } else {
                    document.addEventListener(
                      'plusready',
                      () => {
                        closeLanding()
                        Vue.prototype.goThirdPlatform(detail.platform, chainUrl, auth => {
                          if (auth.success === true) {

                          } else {
                            callback(auth, chainUrl)
                          }
                        })
                      }, true)
                  }
                } else {
                  Toast('商品链接错误')
                }
              } else {
                callback(res, chainUrl)
              }
            })
          }
        })
      } else {
        http('GET', api.changeChain, {
          platform: detail.platform,
          itemId: (detail.platform === 'taobao' || detail.platform === 'tmall') ? detail.itemId : detail.url,
          extendJson: JSON.stringify({
            couponUrl:
            detail.couponInfo && detail.couponInfo.couponClickUrl ? detail.couponInfo.couponClickUrl : ''
          })
        }).then(res => {
          if (res.success || res.data.success) {
            let chainUrl = res.data.model.shortUrl
            if (detail.platform === 'taobao' || detail.platform === 'tmall') {
              chainUrl = detail.couponAmount ? res.data.model.shortUrl : res.data.model.url
            } else {
              chainUrl = res.data.model.shortUrl
            }
            chainUrl = (detail.platform === 'pingduoduo') ? res.data.model.url : chainUrl
            if (chainUrl) {
              if (detail.platform === 'pingduoduo') {
                chainUrl = decodeURIComponent(
                  chainUrl.substr(
                    chainUrl.indexOf('duo_coupon_landing'),
                    chainUrl.length)
                )
              }
              if (window.plus) {
                closeLanding()
                Vue.prototype.goThirdPlatform(detail.platform, chainUrl, auth => {
                  if (auth.success === true) {
                  } else {
                    callback(auth, chainUrl)
                  }
                })
              } else {
                document.addEventListener(
                  'plusready',
                  () => {
                    closeLanding()
                    Vue.prototype.goThirdPlatform(detail.platform, chainUrl, auth => {
                      if (auth.success === true) {
                      } else {
                        callback(auth, chainUrl)
                      }
                    })
                  }, true)
              }
            } else {
              Toast('商品链接错误')
            }
          } else {
            callback(res)
          }
        })
      }
    }
    Vue.prototype.checkPlatform = (type) => {
      if (type === 'taobao') {
        return '淘宝'
      } else if (type === 'jingdong') {
        return '京东'
      } else if (type === 'pingduoduo') {
        return '拼多多'
      } else if (type === 'tmall') {
        return '天猫'
      }
    }
    Vue.prototype.checkPlatformClass = (type) => {
      if (type === 'taobao') {
        return 'tb'
      } else if (type === 'jingdong') {
        return 'jd'
      } else if (type === 'pingduoduo') {
        return 'pdd'
      } else if (type === 'tmall') {
        return 'tmall'
      }
    }
    Vue.prototype.formatTime = (time, format = 'MM-DD HH:mm') => {
      // 时间戳格式化方法
      return dayjs(Number(time)).format(format)
    }
    Vue.prototype.toMoneyFix = (strMoney) => { // 销售量格式化
      let len = strMoney.length
      if (len >= 5) { // 超过万了
        strMoney = strMoney.substr(0, len - 4) + '.' + strMoney.charAt(len - 4)
        return strMoney + '万'
      }
      return strMoney
    }
    Vue.prototype.b64toBlob = (b64Data, contentType = '', sliceSize = 512) => {
      // 图片转换为blob
      const byteCharacters = atob(b64Data)
      const byteArrays = []
      for (
        let offset = 0;
        offset < byteCharacters.length;
        offset += sliceSize
      ) {
        const slice = byteCharacters.slice(offset, offset + sliceSize)
        const byteNumbers = new Array(slice.length)
        for (let i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i)
        }
        const byteArray = new Uint8Array(byteNumbers)
        byteArrays.push(byteArray)
      }
      const blob = new Blob(byteArrays, { type: contentType })
      return blob
    }
    Vue.prototype.removeTag = (str) => {
      // 去除文字中所有html标签
      return str.replace(/<[^>]+>/g, '')
    }
  }
}
