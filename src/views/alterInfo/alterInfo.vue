<style scoped>
.allview {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  position: absolute;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
}
.allview .topline {
  width: 375px;
  height: 1px;
  background: #f2f2f2;
}
.allview .inputbox {
  width: 100%;
  padding: 0px 8.5px;
  box-sizing: border-box;
  max-height: 800px;
  margin: 0px auto;
  overflow: auto;
}
.inputbox .oneitem {
  width: 100%;
  max-height: 200px;
  padding-top: 8px;
  overflow: hidden;
}
.oneitem .titlename {
  font-size: 12px;
  color: #333;
  font-weight: bold;
}
.titlename span {
  color: #fa1f6a;
}
::-webkit-input-placeholder {
  color: #ccc;
}
.oneitem input {
  border: 0px;
  border-bottom: 1px solid #f2f2f2;
  outline: none;
  color: #666;
  font-size: 14px;
  width: 100%;
  height: 40px;
  margin-top: 5px;
}
.oneitem .imgbox {
  width: 100%;
  height: 66px;
  margin-top: 5px;
  position: relative;
}
.oneitem .choosebox {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  border-bottom: 1px solid #f2f2f2;
  color: #666;
  font-size: 14px;
}
.oneitem.show {
  animation: show 0.3s 1 ease-in-out forwards;
}
@keyframes show {
  0% {
    height: 0px;
  }
  100% {
    height: 70px;
  }
}
.choosebox .chooseboxitem {
  width: 50px;
  height: 30px;
  margin-right: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap;
}
.chooseboxitem .chooseitem {
  width: 20px;
  height: 20px;
  border: 1px solid #f2f2f2;
  background: #f7f7f7;
  box-sizing: border-box;
  border-radius: 50%;
}
.chooseboxitem .chooseitem.check {
  border: 1px solid #fa1f6a;
  background: #fa1f6a;
  background-image: url("../knock/img/yes.png");
  background-size: 100% 100%;
  background-position: 0px -1px;
}
.imgbox input {
  width: 66px;
  height: 100%;
  border: none;
  outline: none;
  position: absolute;
  margin-right: 10px;
  top: 0;
  left: 0;
  opacity: 0;
}
.imgbox img {
  float: left;
  width: 66px;
  height: 66px;
  margin-right: 10px;
  position: absolute;
  top: 0;
  left: 0;
}
.oneitem .tell {
  width: 100%;
  height: 17px;
  margin-top: 11px;
  color: #ccc;
  font-size: 12px;
}
.allview .submit {
  width: 375px;
  height: 50px;
  background-image: linear-gradient(135deg, #f93579 0%, #fa1f6b 100%);
  text-align: center;
  line-height: 50px;
  color: #fff;
  font-size: 18px;
}
.allview .boxshadow {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
}
.boxshadow .shadowbox {
  margin: 153px auto 0px;
  width: 300px;
  height: 320px;
  background-color: #ffffff;
  border-radius: 4px;
  overflow: hidden;
}
.shadowbox .shadowpic {
  width: 243px;
  height: 81px;
  margin: 36px auto 0px;
  background-image: url(../knock/img/successknock.png);
  background-size: 100% 100%;
}
.shadowbox .shadowtext {
  margin: 14px auto 0px;
  width: 268px;
  height: 80px;
  font-family: PingFangSC-Medium;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #666666;
}
.shadowbox .endbox {
  width: 250px;
  height: 30px;
  margin: 48px auto 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.shadowbox .endbox .knowbtn {
  width: 100px;
  height: 30px;
  background-image: linear-gradient(135deg, #f93579 0%, #fa1f6b 100%);
  border-radius: 15px;
  font-family: PingFangSC-Medium;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #ffffff;
  text-align: center;
  line-height: 30px;
}
</style>

<template>
  <div class="allview">
    <TitleBar :title="title"></TitleBar>
    <div class="inputbox" v-if="pageitem.first==1">
      <div class="oneitem">
        <div class="titlename">
          商品标题
          <span>*</span>
        </div>
        <input type="text" placeholder="输入商品的标题名称" v-model="inputs1.salename" />
      </div>
      <div class="oneitem">
        <div class="titlename">
          原价
          <span>*</span>
        </div>
        <input type="number" placeholder="输入商品的原价" v-model="inputs1.oldprice" />
      </div>
      <div class="oneitem">
        <div class="titlename">
          券后价
          <span>*</span>
        </div>
        <input type="number" placeholder="输入商品的券后价" v-model="inputs1.couponprice" />
      </div>
      <div class="oneitem">
        <div class="titlename">
          到手价
          <span>*</span>
        </div>
        <input type="number" placeholder="输入商品到手时的价格" v-model="inputs1.saleprice" />
      </div>
      <div class="oneitem">
        <div class="titlename">
          是否预告
          <span>*</span>
        </div>
        <div class="choosebox" @click="checkNotice($event)">
          <div class="chooseboxitem" data-notice="yes">
            是
            <div data-notice="yes" :class="{check : isNotice}" class="chooseitem"></div>
          </div>
          <div class="chooseboxitem" data-notice="no">
            否
            <div data-notice="no" :class="{check : isNotice===false}" class="chooseitem"></div>
          </div>
        </div>
      </div>
      <div v-if="isNotice">
        <div style="height: 0px;" class="oneitem" :class="[isNotice? 'show' : '']">
          <div class="titlename">
            预告价
            <span>*</span>
          </div>
          <input type="number" placeholder="输入商品的预告价" v-model="inputs1.noticeprice" />
        </div>
        <div style="height: 0px; padding: 0px;" class="oneitem" :class="[isNotice? 'show' : '']">
          <div class="titlename">
            预告开始时间
            <span>*</span>
          </div>
          <input type="date" placeholder="输入商品的预告价的开始时间" v-model="inputs1.actBeginTime" />
        </div>
        <div style="height: 0px; padding : 0px;" class="oneitem" :class="[isNotice? 'show' : '']">
          <div class="titlename">
            预告结束时间
            <span>*</span>
          </div>
          <input type="date" placeholder="输入商品的预告价的结束时间" v-model="inputs1.actEndTime" />
        </div>
      </div>
      <div class="oneitem">
        <div class="titlename">
          推荐理由
          <span>*</span>
        </div>
        <input type="text" placeholder="15字以上的推荐理由更容易通过审核投放至首页哦！" v-model="inputs1.salereason" />
      </div>
      <div class="oneitem">
        <div class="titlename">
          是否包邮
          <span>*</span>
        </div>
        <div class="choosebox" @click="checkPromiseRoot($event)">
          <div class="chooseboxitem" data-root="yes">
            是
            <div data-root="yes" :class="{check : isFreeShip}" class="chooseitem"></div>
          </div>
          <div class="chooseboxitem" data-root="no">
            否
            <div data-root="no" :class="{check : isFreeShip===false}" class="chooseitem"></div>
          </div>
        </div>
      </div>
      <div class="oneitem">
        <div class="titlename">
          商品图片
          <span>*</span>
        </div>
        <div class="imgbox">
          <img :src="pageitem.data.itemPicUrl" alt />
        </div>
        <div class="tell">请上传清晰产品图，购物车截图还可增加入选几率</div>
      </div>
      <div class="oneitem" v-if="pageitem.first==1&&pageitem.second==1">
        <div class="titlename">
          订单截图
          <span></span>
        </div>
        <div class="imgbox">
          <img id="orderpic1" :src="shareImg?shareImg : require('../knock/img/m1.png')" alt />
          <input type="file" @change="getpic" multiple accept="image/*" />
        </div>
        <div class="tell">特别提示：截图请注意隐藏个人信息</div>
      </div>
      <div class="oneitem" v-if="pageitem.first==1&&pageitem.second==2">
        <div class="titlename">
          商品短视频
          <span>*</span>
        </div>
        <div class="imgbox">
          <img :src="pageitem.data.itemPicUrl" alt />
        </div>
      </div>
    </div>
    <div class="inputbox" v-if="pageitem.first==2">
      <div class="oneitem">
        <div class="titlename">
          爆料链接
          <span>*</span>
        </div>
        <input type="text" placeholder="复制活动页的链接粘贴在这里哦！" v-model="inputs3.knockaddress" />
      </div>
      <div class="oneitem">
        <div class="titlename">
          活动名称
          <span>*</span>
        </div>
        <input type="text" placeholder="聚划算99大促，多款AJ限量球鞋都可以做到3折" v-model="inputs3.activename" />
      </div>
      <div class="oneitem">
        <div class="titlename">活动力度</div>
        <span>*</span>
        <input type="text" placeholder="全场五折封顶 再加购物津贴" v-model="inputs3.activepower" />
      </div>
      <div class="oneitem">
        <div class="titlename">
          推荐理由
          <span>*</span>
        </div>
        <input type="text" placeholder="15字以上的推荐理由更容易通过审核投放至首页哦！" v-model="inputs3.givereason" />
      </div>
      <div class="oneitem">
        <div class="titlename">
          爆料配图
          <span>*</span>
        </div>
        <div class="imgbox">
          <img id="orderpic2" :src="shareImg?shareImg : require('../knock/img/m1.png')" alt />
          <input type="file" multiple accept="image/*" @change="getpic2" />
        </div>
        <div class="tell">请上传清晰产品图，购物车截图还可增加入选几率</div>
      </div>
    </div>
    <!-- <van-datetime-picker v-model="currentDate" type="date"  /> -->
    <div class="submit" @click="submit">保存</div>
    <div class="boxshadow" v-if="okflag">
      <div class="shadowbox">
        <div class="shadowpic"></div>
        <div class="shadowtext">鼻子君将在24小时内完成审核 ，如遇稿件数庞大或节假日等特殊情况，审核结果将会有延迟，请耐心等待。点击「我要爆料」进入查看全部爆料状态。</div>
        <div class="endbox">
          <div class="knowbtn" @click="toShare">去分享</div>
          <div class="knowbtn" @click="thenKnock">继续爆料</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  data () {
    return {
      currentDate: new Date(),
      pageitem: null,
      okflag: false,
      title: '编辑',
      inputs1: {
        salename: '',
        saleprice: '', // 到手价
        salereason: '',
        oldprice: '', // 原价
        couponprice: '', // 券后价
        noticeprice: '', // 预告价
        actBeginTime: '', // 预告开始时间
        actEndTime: '' // 预告结束时间
      },
      inputs3: {
        knockaddress: '',
        activename: '',
        activepower: '',
        givereason: ''
      },
      accessid: '',
      signature: '',
      dir: '',
      policy: '',
      host: '',
      shareImg: '',
      isNotice: false, // 是否预告
      isFreeShip: false // 是否包邮
    }
  },
  created () {
    if (this.$route.query.isSave) {
      this.title = '保存爆料'
    }
    var obj = {}
    obj.first = parseInt(this.$route.query.first)
    obj.second = parseInt(this.$route.query.second)
    if (this.$route.query.data) {
      obj.data = JSON.parse(this.$route.query.data)
      this.pageitem = obj
      this.initdata()
    } else {
      // getContentDetail
      this.$http('GET', this.api.getContentDetail, {
        contentId: this.$route.query.contentId
      }).then(res => {
        if (res.data.success) {
          console.log(res, '呵呵')
          obj.data = res.data.model
          this.pageitem = obj
          console.log(this.pageitem, '12312313213')
          this.initdata()
        } else {
          this.$toast(res.data.msgInfo)
          setTimeout(() => {
            this.goBack()
          }, 3000)
        }
      })
    }
  },
  methods: {
    getRightTime (str) {
      str = Number.parseInt(str)
      let date = new Date(str)
      let year = date.getFullYear()
      let month = date.getMonth() + 1
      if (month < 10) month = '0' + month
      let day = date.getDate()
      if (day < 10) day = '0' + day
      return year + '-' + month + '-' + day
    },
    initdata () {
      if (this.pageitem.data) {
        var data = this.pageitem.data
        if (this.pageitem.first === 1) {
          console.log('单品', data)
          this.inputs1.salename = data.itemName
          this.inputs1.saleprice = data.finalPrice
          this.inputs1.salereason = data.recomendReason
          this.inputs1.oldprice = data.originPrice
          this.inputs1.couponprice = data.discountPrice
          console.log(this.inputs1.couponprice, '券后价')
          console.log(data.isForecast)
          if (data.isForecast) {
            this.isNotice = true
            if (data.forecastPrice) {
              this.inputs1.noticeprice = data.forecastPrice
            }
            if (data.actStartTime) {
              this.inputs1.actBeginTime = this.getRightTime(data.actStartTime)
            }
            if (data.actEndTime) {
              this.inputs1.actEndTime = this.getRightTime(data.actEndTime)
            }
          } else {
            this.isNotice = false
          }
          if (data.isFreeShip) {
            if (data.isFreeShip === 1) {
              this.isFreeShip = true
            } else {
              this.isFreeShip = false
            }
          }
          if (data.recomendReason) {
            this.inputs1.salereason = data.recomendReason
          }
          if (data.discountPrice && data.discountPrice !== null) {
            console.log('A')
            this.inputs1.couponprice = data.discountPrice
          } else if (data.couponInfo) {
            console.log('B')
            if (
              data.couponInfo.discount !== null &&
            data.couponInfo.discount !== ''
            ) {
              this.inputs1.couponprice =
              parseInt(this.inputs1.oldprice) -
              parseInt(data.couponInfo.discount)
              this.inputs1.couponprice = this.inputs1.couponprice + '.00'
            } else {
              console.log('C')
              this.inputs1.couponprice = data.finalPrice
            }
          } else {
            this.inputs1.couponprice = data.finalPrice
          }
        } else if (this.pageitem.first === 2) {
          console.log('活动')
          console.log(data)
          this.inputs3.knockaddress = data.itemUrl
          this.inputs3.activename = data.itemName
        }
      }
    },
    getpic2 (e) {
      /* var img = document.getElementById('orderpic2') */
      var files = e.target.files[0]
      this.updataImage(files)
      /* img.src = window.URL.createObjectURL(files) */
    },
    getpic (e) {
      // var img = document.getElementById('orderpic1')
      var files = e.target.files[0]
      this.updataImage(files)
      // img.src = window.URL.createObjectURL(files)
      /* var imgaddress = e.target.value
      this.imgpath1 = require(imgaddress) */
    },
    updataImage (blob) {
      // 上传oss
      this.getOssInfo().then(() => {
        const formData = new FormData()
        const time = new Date().getTime()
        const filename = `${time}${Math.round(Math.random() * 100000000)}.jpg`
        const key = `${this.dir}${filename}`
        formData.append('key', key)
        formData.append('name', filename)
        formData.append('policy', this.policy)
        formData.append('OSSAccessKeyId', this.accessid)
        formData.append('success_action_status', '200')
        formData.append('callback', '')
        formData.append('signature', this.signature)
        formData.append('file', blob)
        axios
          .create({
            withCredentials: true,
            headers: { 'Content-Type': 'multipart/form-data' }
          })
          .post(this.host, formData)
          .then(res => {
            if (res.status === 200) {
              this.shareImg = this.host + '/' + key
              console.log('上传完毕')
            }
          })
      })
    },
    getOssInfo () {
      // 请求OSS服务器信息
      return new Promise((resolve, reject) => {
        this.$http('GET', this.api.getOssRedirectSign, {}).then(
          res => {
            this.accessid = res.data.model.accessid
            this.signature = res.data.model.signature
            this.dir = res.data.model.dir
            this.policy = res.data.model.policy
            this.host = res.data.model.host
            this.$nextTick(() => {
              resolve()
            })
          },
          err => {
            reject(err)
          }
        )
      })
    },
    isPriceNumber (_keyword) {
      if (
        _keyword === '0' ||
        _keyword === '0.' ||
        _keyword === '0.0' ||
        _keyword === '0.00'
      ) {
        _keyword = '0'
        return true
      } else {
        var index = _keyword.indexOf('0')
        var length = _keyword.length
        if (index === 0 && length > 1) {
          /* 0开头的数字串 */
          var reg = /^[0]{1}[.]{1}[0-9]{1,2}$/
          if (!reg.test(_keyword)) {
            return false
          } else {
            return true
          }
        } else {
          /* 非0开头的数字 */
          let reg = /^[1-9]{1}[0-9]{0,10}[.]{0,1}[0-9]{0,2}$/
          if (!reg.test(_keyword)) {
            return false
          } else {
            return true
          }
        }
      }
    },
    check () {
      let startTime = this.inputs1.actStartTime
      let endTime = this.inputs1.actEndTime
      if (startTime > endTime) {
        this.$toast('预告结束时间必须大于开始时间')
        return false
      }
      let rgx = /(^[1-9]\d*(\.\d{1,2})?$)|(^0\.(([1-9]{1}\d?)|(0[1-9]{1})){1}$)/
      if (this.inputs1.saleprice.match(rgx)) {
        if (parseFloat(this.inputs1.saleprice) === 0) {
          return false
        }
      } else {
        this.$toast('到手价不正确')
        return false
      }
      if (this.inputs1.oldprice.match(rgx)) {
        if (parseFloat(this.inputs1.oldprice) === 0) {
          return false
        }
      } else {
        this.$toast('原价不正确')
        return false
      }
      if (this.inputs1.couponprice.match(rgx)) {
        if (parseFloat(this.inputs1.couponprice) === 0) {
          return false
        }
      } else {
        console.log(this.inputs1.couponprice.match(rgx))
        this.$toast('券后价不正确')
        return false
      }
      if (this.isNotice === true) {
        if (this.inputs1.noticeprice.match(rgx)) {
          if (this.isNotice === true) {
            if (parseFloat(this.inputs1.noticeprice) === 0) {
              return false
            }
          } else {
            return false
          }
        } else {
          this.$toast('预告价不正确')
          return false
        }
      }
      var flag = 1
      var inputs = document.getElementsByTagName('input')
      console.log(inputs)
      var len = inputs.length
      for (var i = 0; i < len - 1; i++) {
        if (inputs[i].value === '') {
          if (i === 4 && this.pageitem.first === 1) {
            if (this.isNotice === true) {
              if (this.inputs1.noticeprice === '') {
                flag = 0
                break
              }
            }
          } else {
            flag = 0
            break
          }
        }
      }
      if (this.pageitem.first === 2) {
        // 活动
        if (inputs[len - 1].value === '') {
          flag = 0
        }
      }

      if (flag === 0) {
        return false
      } else {
        if (this.pageitem.first === 1) {
          if (document.getElementById('orderpic1').src !== '') {
            return true
          }
        } else if (this.pageitem.first === 2) {
          if (document.getElementById('orderpic2').src !== '') {
            return true
          }
        }
        return true
      }
    },
    submit () {
      if (this.check()) {
        // 调发布爆料接口
        let api
        let data = this.pageitem.data
        console.log(data.itemUrl)

        if (this.pageitem.first === 1) {
          // 单品
          api = this.api.resetSellDetail
          // 初始化对象
          let obj = {
            /* storeNick: data.shopName ? data.shopName : undefined,
            goodsId: data.itemId ? data.itemId : undefined */
          }
          obj.contentId = data.contentId
          obj.goodPlatform = data.platform
          if (data.shopName) {
            obj.storeNick = data.shopName
          }
          if (data.itemId) {
            obj.goodsId = data.itemId
          }
          if (data.shopId) {
            obj.storeId = data.shopId
          }
          if (data.commissionRate) {
            // 百分比
            obj.commissionRate = data.commissionRate
          }
          if (data.saledNumber) {
            obj.monthNum = data.saledNumber
          }
          if (data.couponInfo) {
            if (data.couponInfo.endTime) {
              obj.couponEndTime = data.couponInfo.endTime
            }
            if (data.couponInfo.startTime) {
              obj.couponStartTime = data.couponInfo.startTime
            }
            if (data.couponInfo.discount) {
              obj.couponMoney = data.couponInfo.discount
            }
            if (data.couponInfo.couponId) {
              obj.couponId = data.couponInfo.couponId
            }
          }
          if (data.platform) {
            obj.goodPlatform = data.platform
          }

          if (data.couponClickUrl) {
            obj.couponUrl = data.couponClickUrl
          }
          if (data.originPrice) {
            obj.currentPrice = this.inputs1.oldprice // 原价
          }
          if (data.finalPrice) {
            obj.realMoney = this.inputs1.saleprice // 到手价
          }
          if (this.inputs1.couponprice) {
            obj.discountPrice = this.inputs1.couponprice
          } else {
            obj.discountPrice = data.originPrice
          }
          if (this.isNotice) {
            // 是否预告
            obj.isForecast = 1
            obj.forecastPrice = this.inputs1.noticeprice
            let startTime = this.setRightTime(
              this.inputs1.actBeginTime,
              '00:00:00'
            )
            let endTime = this.setRightTime(
              this.inputs1.actEndTime,
              '23:59:59'
            )
            console.log(startTime, endTime)
            obj.actStartTime = startTime
            obj.actEndTime = endTime
          } else {
            obj.isForecast = 0
            obj.forecastPrice = null
          }
          if (this.isFreeShip) {
            // 是否包邮
            obj.isFreeShip = 1
          } else {
            obj.isFreeShip = 0
          }
          if (this.shareImg !== '') {
            // 用户上传图片
            obj.goodsOrderUrls = document.getElementById('orderpic1').src
          }
          if (data.itemPicUrl) {
            obj.goodsCoverUrl = data.itemPicUrl
          }
          if (data.itemPicUrl) {
            obj.goodsImgUrls = data.itemPicUrl
          }
          if (data.itemUrl) {
            obj.goodsOutUrl = data.itemUrl
          }
          obj.recomendReason = this.inputs1.salereason
          obj.title = this.inputs1.salename
          this.$http('POST', api, {
            type: data.type,
            saveJsonStr: JSON.stringify(obj)
          }).then(res => {
            // debugger
            if (res.data.success === true) {
              this.$toast('修改成功!')
              this.toPage('product2', { id: data.contentId, feedsLinkSource: data.feedsLinkSource, commissionAmount: data.commissionAmount })
            } else {
              /* alert('发布失败') */
              this.$toast(res.data.msgInfo)
            }
          })
        }
      } else {
        this.$toast('有选项未填写')
      }
    },
    setRightTime (str, less) {
      str = str.split('/').join('-')
      str += ' ' + less
      return str
    },

    toShare () {
      this.okflag = false
      let formpage = this.$route.query.formpage
      if (formpage === 'product2') {
        this.goBack()
      } else {
        this.$http('GET', this.api.findMySendKnock, {
          page: 1,
          pageSize: 1
        }).then((res) => {
          if (res.data.success === true) {
            let id = res.data.model.list[0].contentId
            this.toPage('product2', { id: id })
          }
        })
      }
    },

    thenKnock () {
      this.okflag = false
      this.goBack()
      this.goBack()
    },
    goDetail () {
      // 需要后端把contentId传过来
      this.$http('GET', this.api.findMySendKnock, {
        page: 1,
        pageSize: 1
      }).then(res => {
        if (res.data.success === true) {
          let contentId = res.data.model.list[0].contentId
          this.toPage('product2', { id: contentId })
        }
      })
      this.okflag = false
    },
    checkNotice (e) {
      let str = e.target.dataset.notice
      if (str === 'yes') {
        this.isNotice = true
      } else {
        this.isNotice = false
      }
    },
    checkPromiseRoot (e) {
      let str = e.target.dataset.root
      if (str === 'yes') {
        this.isFreeShip = true
      } else {
        this.isFreeShip = false
      }
    }
  }
}
</script>
