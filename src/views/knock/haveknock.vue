<style scoped>
.allview {
  background: #f7f7f7;
  overflow-x: hidden;
  overflow-y: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.allview .emptyback{
   width: 250px;
   height: 200px;
   background-image: url("./img/empty.png");
   background-size: 100% 100%;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translateX(-50%) translateY(-50%);
}
.emptyback::after{
  position: absolute;
  content: "暂无爆料";
  bottom: 30px;
  letter-spacing: 3px;
  left: 50%;
  transform: translateX(-50%);
  color: #ccc;
  font-family: 'SourceHanSansSC';
  font-weight:400;
}
.allview .knockbox {
  width: 387px;
  flex: 1;
  margin-top: 14px;
  margin-left: 20px;
  transform: translateX(-26px);
  transition: transform 0.5s;
  overflow-y: auto;
}
.allview .goright {
  transform: translateX(0px);
}
.knockbox .itembox {
  width: 387px;
  height: 120px;
  margin-bottom: 14px;
}
.knockbox .itembox .choosebox {
  width: 32px;
  height: 120px;
  float: left;
  position: relative;
}
.choosebox .checkbox.check {
  border: solid 1px #fb2c68;
  background-color: #fb2c68;
}
.choosebox .checkbox {
  width: 18px;
  height: 18px;
  border: solid 1px #cccccc;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  margin-top: -9px;
  right: 10px;
  color: #fff;
  text-align: center;
}
.knockbox .itembox .knockitem {
  float: left;
  width: 355px;
  height: 120px;
  background: #fff;
  border-radius: 10px;
}
.knockitem .picbox {
  width: 110px;
  height: 120px;
  float: left;
  border-radius: 10px;
  overflow: hidden;
}
.picbox img {
  width: 100%;
  height: 100%;
  transform: scale(0.85);
}
.knockitem .textbox {
  width: 245px;
  height: 120px;
  float: right;
  overflow: hidden;
  position: relative;
}
.textbox .resetdetail{
  width:60px;
  height:20px;
  border-radius:11px;
  border:1px solid rgba(204,204,204,1);
  text-align: center;
  line-height: 20px;
  font-size:12px;
  font-family: 'SourceHanSansSC';
  font-weight:400;
  color: #999;
  position: absolute;
  bottom: 12px;
  right: 4px;
}
.textbox .titlebox {
  width: 230px;
  height: 32px;
  margin-top: 10px;
  margin-left: 12px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: #333;
  font-family: "Helvetica";
  font-size: 14px;
}
.textbox .moneybox {
  width: 116px;
  height: 22px;
  margin: 8px 0px 0px 12px;
  color: #fb2c68;
  font-size: 20px;
  font-family: "DINAlternate-Bold";
}
.moneybox .moneylogo {
  font-size: 14px;
}
.textbox .timebox {
  width: 64px;
  height: 14px;
  margin: 20px 0px 0px 12px;
  font-size: 10px;
  color: #999;
  font-family: "DINAlternate-Bold";
}
.allview .managebox {
  position: absolute;
  width: 375px;
  height: 50px;
  background: #fff;
  left: 0;
  bottom: 0;
}
.managebox .allchoosebox {
  width: 150px;
  height: 25px;
  float: left;
  margin-left: 13px;
  margin-top: 14px;
}
.allchoosebox .allchoosebtn {
  width: 18px;
  height: 18px;
  border: solid 1px #cccccc;
  float: left;
  margin-top: 3.5px;
  border-radius: 50%;
}
.allchoosebox .allchoosebtn.allcheck {
  border: solid 1px #fb2c68;
  background-color: #fb2c68;
  color: #fff;
  text-align: center;
}
.allchoosebox .allchoosetext {
  height: 100%;
  float: left;
  margin-left: 15px;
  line-height: 25px;
}
.managebox .delbtn {
  width: 60px;
  height: 25px;
  background-image: linear-gradient(151deg, #fe2183 0%, #fb2c68 100%);
  border-radius: 13px;
  margin-right: 13px;
  margin-top: 14px;
  float: right;
  color: #fff;
  font-size: 14px;
  text-align: center;
  line-height: 25px;
}
</style>

<template>
  <div class="allview">
    <TitleBar
      title="我的爆料"
      :isShare="false"
      :isNeedTool="true"
      :toolName="toolname"
      :toolClick="manage"
    ></TitleBar>
    <div class="emptyback" v-if="haveKnockList.length===0"></div>
    <div class="knockbox" :class="{goright : manageflag}" @scroll="addMore($event)">
    <div class="itembox" v-for="(item,index) in haveKnockList" :key="index">
      <div class="choosebox">
        <div ref="checkbox" class="checkbox" :class="{check :item.checkactive}"  @click="check(index)"></div>
      </div>
      <div class="knockitem" @click="toDetail(item.contentId, item.feedsLinkSource, item.type, item.commissionAmount)">
         <div class="picbox">
          <img :src="item.itemPicUrl" alt="">
         </div>
          <div class="textbox">
            <div class="resetdetail" @click.stop="reset(index)">编辑</div>
            <p class="titlebox">{{item.itemName}}</p>
            <div class="moneybox">
              <span class="moneylogo" v-if="item.finalPrice">¥</span>
              <span class="moneynum">{{item.finalPrice}}</span>
            </div>
            <div class="timebox">
              <span>{{item.gmtModifyTime | getRightTime}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="managebox" v-if="manageflag">
      <div class="allchoosebox">
        <div ref="allchecks" class="allchoosebtn" @click="allcheck"></div>
        <div class="allchoosetext">全选</div>
      </div>
      <div class="delbtn" @click="delchoose">删除</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toDetail (itemId, itemSource, type, commissionAmount) {
      if (type === '01' || type === '02') {
        this.toPage('product2', { id: itemId, feedsLinkSource: itemSource, commissionAmount: commissionAmount })
      } else if (type === '03') {
        this.toPage('advPage', { id: itemId, feedsLinkSource: itemSource, commissionAmount: commissionAmount })
      }
    },
    getData () {
      this.pageNum++
      this.$http('GET', this.api.findMySendKnock, {
        page: this.pageNum,
        pageSize: 10
      }).then((res) => {
        // console.log(res.data.model)
        this.$nextTick(() => {
          var dataList = res.data.model.list
          for (let i = 0; i < dataList.length; i++) {
            dataList[i].checkactive = false
          }
          this.haveKnockList = this.haveKnockList.concat(dataList)
          // console.log(this.haveKnockList, 1)
        })
      })
    },
    manage () {
      if (this.toolname === '管理') {
        this.manageflag = true
        this.toolname = '完成'
      } else {
        this.toolname = '管理'
        this.manageflag = false
        for (var i = 0; i < this.knocklist.length; i++) {
          this.knocklist[i].checkactive = false
        }
      }
    },
    check (index) {
      var item = this.$refs.checkbox[index]
      if (this.haveKnockList[index].checkactive === false) {
        item.innerText = '√'
        this.haveKnockList[index].checkactive = true
      } else {
        item.innerText = ''
        this.haveKnockList[index].checkactive = false
      }
      /*   this.knocklist = this.knocklist.map((itemize, num) => {
          if (num === index) {
            if (itemize.checkactive === false) {
              itemize.checkactive = true
            } else {
              itemize.checkactive = false
            }
          }
          return itemize
        }) */
    },
    allcheck () {
      var item = this.$refs.allchecks
      var itemize = this.$refs.checkbox
      if (item.classList.contains('allcheck')) {
        item.classList.remove('allcheck')
        item.innerText = ''
        this.haveKnockList = this.haveKnockList.map((item) => {
          item.checkactive = false
          return item
        })
        for (var i = 0; i < this.haveKnockList.length; i++) {
          itemize[i].innerText = ''
        }
      } else {
        item.classList.add('allcheck')
        item.innerText = '√'
        this.haveKnockList = this.haveKnockList.map((item) => {
          item.checkactive = true
          return item
        })
        for (var j = 0; j < this.haveKnockList.length; j++) {
          itemize[j].innerText = '√'
        }
      }
    },
    delchoose () {
      let id = ''; let flag = 0; let dellist = []
      for (let i = 0; i < this.haveKnockList.length; i++) {
        if (this.haveKnockList[i].checkactive === true) {
          console.log(this.haveKnockList[i].contentId)
          if (flag === 0) {
            id += this.haveKnockList[i].contentId
          } else {
            id += (',' + this.haveKnockList[i].contentId)
          }
          flag++
          dellist.push(i)
        }
      }
      if (dellist.length === this.haveKnockList.length) {
        this.haveKnockList = []
      } else {
        this.haveKnockList = this.haveKnockList.filter((item, index) => {
          return (!dellist.includes(index))
        })
      }

      // let contentId = this.haveKnockList[i].contentId
      this.$http('GET', this.api.delMyRevelat, {
        contentIdStr: id
      }).then(res => {
        if (res.data.success === true) {
          this.$toast('删除成功')
        } else {
          this.$toast('系统错误，删除失败')
        }
      })
      console.log(id)
      this.toolname = '管理'
      this.haveKnockList = this.haveKnockList.map((item) => {
        item.checkactive = false
        return item
      })
      console.log(this.haveKnockList)
      this.manageflag = false
    },
    addMore (e) {
      let tmp = e.path[0]
      if (tmp.scrollTop + tmp.clientHeight === tmp.scrollHeight) {
        this.getData()
      }
    },
    reset (index) { // 编辑我的爆料
      console.log(this.haveKnockList[index].contentId)
      this.$http('GET', this.api.getContentDetail, {
        contentId: this.haveKnockList[index].contentId
      }).then((res) => {
        this.toPage('sendknock1', { first: 1, second: 1, data: res.data.model, isSave: 'yes' })
      })
    }
  },
  created () {
    this.getData()
  },
  filters: {
    getRightTime (timeNum) {
      if (timeNum !== null) {
        timeNum = parseInt(timeNum)
        let time = new Date(timeNum)
        let month = time.getMonth() + 1
        let day = time.getDate()
        let hour = time.getHours()
        let minutes = time.getMinutes()
        if (month < 10) month = '0' + month
        if (day < 10) day = '0' + day
        if (hour < 10) hour = '0' + hour
        if (minutes < 10) minutes = '0' + minutes
        return month + '-' + day + '   ' + hour + ':' + minutes
      }
    }
  },
  data () {
    return {
      pageNum: 0,
      toolname: '管理',
      manageflag: false,
      haveKnockList: []
    }
  }
}
</script>
