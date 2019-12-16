<style scoped lang='scss'>
.allview{
 position: absolute;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 background: #fff;
 display: flex;
 flex-direction: column;
 justify-content: flex-start;
 align-items: center;
 .resetbox{
   flex: 1;
   width: 100%;
   overflow: auto;
   border-top: 1px solid rgba(242,242,242,1);
   box-sizing: border-box;
   .resetbox-resetitem{
      width: 100%;
      height: 43px;
      border-bottom: 1px solid rgba(242,242,242,1);
      padding: 0px 14px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .resetbox-resetitem-title{
        font-size: 14px;
        color:rgba(51,51,51,1);
      }
      .resetbox-resetitem-more{
        .checkbox{
          width:32px;
          height:16px;
          background:rgba(216,216,216,1);
          border-radius: 16px;
          position: relative;
          &.check{
            background:rgba(251,44,104,1);
          }
          .checkbox-ball{
            width: 14px;
            height: 14px;
            background: #fff;
            border-radius: 50%;
            top: 1px;
            left: 1px;
            position: absolute;
            transition: left 0.5s;
            &.check{
              left: 17px;
            }
          }
        }
        .gopage{
          width: 7px;
          height: 11px;
          background-image: url('./img/mine_right_arrow.png');
          background-size: 7px 11px;
          background-repeat: no-repeat;
          background-position: right center;
          padding: 4px 10px;
        }
      }
   }
 }
}
</style>

<template>
<div class='allview'>
  <TitleBar title="编辑"></TitleBar>
  <div class="resetbox">
    <div class="resetbox-resetitem">
       <div class="resetbox-resetitem-title">下架</div>
       <div class="resetbox-resetitem-more">
        <div class="checkbox" :class="{check:isDown}" @click="makeDown">
          <div class="checkbox-ball" :class="{check:isDown}"></div>
        </div>
      </div>
    </div>
    <div class="resetbox-resetitem">
      <div class="resetbox-resetitem-title">编辑内容</div>
      <div class="resetbox-resetitem-more" @click="toResetInfo">
        <div class="gopage"></div>
      </div>
    </div>
    <div class="resetbox-resetitem" v-for="(item,index) in menus" :key="index">
       <div class="resetbox-resetitem-title">{{item.title}}</div>
       <div class="resetbox-resetitem-more" @click="chooseItem(index)">
         <div class="checkbox" :class="{check:item.active}">
           <div class="checkbox-ball" :class="{check:item.active}"></div>
         </div>
       </div>
    </div>
    <div class="resetbox-resetitem">
      <div class="resetbox-resetitem-title">{{titleName}}</div>
      <div class="resetbox-resetitem-more" @click="select">
        <div class="gopage"></div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      isDown: false,
      menus: [{
        title: '精选',
        active: false
      },
      {
        title: '热门',
        active: false
      },
      {
        title: '置顶',
        active: false
      }],
      selectList: ['bug价', '限时抢购', '最热好价'],
      titleName: '新增标签'
    }
  },
  created () {
    // chosen精选，hot热门，top置顶
    this.$http('GET', this.api.checkStatus, {
      contentId: this.$route.query.id
    }).then((res) => {
      if (res.data.model.isTop === 1) {
        this.menus[2].active = true
      }
      if (res.data.model.isHot === 1) {
        this.menus[1].active = true
      }
      if (res.data.model.recomendType === 'chosen') {
        this.menus[0].active = true
      } else if (res.data.model.recomendType === 'rec') {
        this.menus[0].active = false
      }
    })
    this.$http('GET', this.api.queryDictionary, {
      code: 'revelat_recom',
      type: 'tags'
    }).then((res) => {
      this.selectList = Object.values(res.data.model)
    })
  },
  methods: {
    toResetInfo () {
      let first = 1; let second = 1
      // console.log(this.$route.query)
      this.toPage('alterInfo', { first: first, second: second, contentId: this.$route.query.id })
    },
    makeDown () {
      let result = confirm('是否要下架商品')
      if (result) {
        if (this.isDown === false) {
          this.$http('POST', this.api.downSellItem, {
            contentId: this.$route.query.id,
            currStatus: '0'
          }).then((res) => {
            if (res.data.success) {
              this.isDown = true
              Toast('下架成功')
            } else {
              Toast(res.data.msgInfo)
            }
          })
        } else {
          this.isDown = false
        }
      }
    },
    chooseItem (index) {
      let api
      if (index === 0) {
        api = this.api.makeSellItemNice
      } else if (index === 1) {
        api = this.api.makeSellItemHot
      } else {
        api = this.api.makeSellItemTop
      }
      this.menus = this.menus.map((item, num) => {
        if (index === num) {
          if (item.active === false) {
            this.$http('POST', api, {
              contentId: this.$route.query.id,
              currStatus: index === 0 ? 'chosen' : '1'
            }).then((res) => {
              if (res.data.success) {
                item.active = true
                Toast('设置成功')
              } else {
                Toast(res.data.msgInfo)
              }
            })
          } else {
            this.$http('POST', api, {
              contentId: this.$route.query.id,
              currStatus: index === 0 ? 'rec' : '0'
            }).then((res) => {
              if (res.data.success) {
                item.active = false
                Toast('设置成功')
              } else {
                Toast(res.data.msgInfo)
              }
            })
          }
        }
        return item
      })
    },
    select () {
      if (process.env.NODE_ENV === 'production') {
        let selectArr = []; let _this = this
        for (let i = 0; i < this.selectList.length; i++) {
          let obj = {}
          obj.title = this.selectList[i]
          selectArr.push(obj)
        }
        window.plus.nativeUI.actionSheet({ title: '请选择标签', cancel: '取消', buttons: selectArr }, function (e) {
          let index = e.index
          if (_this.selectList[index - 1] !== undefined) {
            let tags = _this.selectList[index - 1]
            console.log(tags)
            // 调接口
            _this.titleName = tags
            _this.$http('POST', _this.api.changeTags, {
              contentId: _this.$route.query.id,
              tags: tags
            }).then((res) => {
              if (res.data.success) {
                Toast('设置成功')
              } else {
                Toast(res.data.msgInfo)
              }
            })
          }
        })
      } else {
        Toast('用手机打开')
      }
    }
  }
}
</script>
