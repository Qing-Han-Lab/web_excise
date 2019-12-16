<style scoped lang='scss'>
.playerview{
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  .playerview-playitem{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    transition: left 0.5s;
    z-index: 3;
    opacity: 0;
    img{
      width: 100%;
      height: 100%;
    }
    &.now{
      top: 0;
      left: 0;
      z-index: 5;
      opacity: 1;
    }
    &.next{
      top: 0;
      left: 356px;
      z-index: 3;
      opacity: 1;
      &.toLeft{
        z-index: 5;
      }
    }
    &.prev{
      top: 0;
      left: -356px;
      z-index: 5;
      opacity: 1;
      &.toLeft{
        z-index: 3;
      }
    }
  }
  .playerview-pagebox{
    position: absolute;
    height: 20px;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    .pageitem{
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: rgba(0,0,0,0.2);
      margin: 0 5px;
      &.check{
        background: #fff;
      }
    }
  }
}
</style>

<template>
<div class='playerview' @touchstart="touchBegin($event)"  @touchmove="touchMove($event)" @touchend="touchEnd">
  <div  :class="[index===nowPage?'now':(index===nextPage?'next':(index===lastPage?'prev':'')),((index===nextPage&&toLeft)||(index===lastPage&&toLeft))?'toLeft':'']" class="playerview-playitem" v-for="(item,index) in playerList" :key="index">
    <img :src="item.img" alt="">
  </div>
  <div class='playerview-pagebox'>
    <div :class="[pageNum===index?'check':'']" class="pageitem" v-for="(item,index) in len" :key="index"></div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    form: {
      type: String,
      default: 'jingdong'
    }
  },
  data () {
    return {
      playerList: [],
      nowPage: 0,
      lastPage: 0,
      nextPage: 1,
      timer: null,
      startx: 0,
      beginx: 0,
      endx: 0,
      toLeft: false,
      len: 0,
      pageNum: 0
    }
  },
  created () {
    this.getImageList()
  },
  mounted () {
    this.autoPlay()
  },
  methods: {
    changeNext () { // 下一页
      let len = this.playerList.length
      this.nowPage = (++this.nowPage) % len
      this.lastPage = this.nowPage - 1
      if (this.lastPage < 0) this.lastPage = len - 1
      this.nextPage = this.nowPage + 1
      if (this.nextPage >= len) this.nextPage = 0
      this.toLeft = false
      this.pageNum = (++this.pageNum) % (this.len)
    },
    changeLast () { // 上一页
      let len = this.playerList.length
      this.nowPage = this.nowPage - 1
      if (this.nowPage < 0) this.nowPage = len - 1
      this.lastPage = this.nowPage - 1
      if (this.lastPage < 0) this.lastPage = len - 1
      this.nextPage = this.nowPage + 1
      if (this.nextPage >= len) this.nextPage = 0
      this.toLeft = true
      this.pageNum--
      if (this.pageNum < 0) this.pageNum = this.len - 1
    },
    autoPlay () {
      this.timer = setInterval(() => {
        this.changeNext()
      }, 3000)
    },
    touchBegin (e) {
      let _this = this
      clearInterval(_this.timer)
      let x = e.touches[0].clientX
      this.startx = this.beginx = x
    },
    touchMove (e) {
      let x = e.touches[0].clientX
      this.endx = x
      let movex = x - this.startx
      this.startx = x
      let now = document.getElementsByClassName('now')[0]
      let prev = document.getElementsByClassName('prev')[0]
      let next = document.getElementsByClassName('next')[0]
      if (x > 0) { // 右
      } else { // 左
      }
      now.style.left = now.offsetLeft + movex * 30 + 'px'
      prev.style.left = prev.offsetLeft + movex * 30 + 'px'
      next.style.left = next.offsetLeft + movex * 30 + 'px'
    },
    touchEnd () {
      let now = document.getElementsByClassName('now')[0]
      let prev = document.getElementsByClassName('prev')[0]
      let next = document.getElementsByClassName('next')[0]
      now.removeAttribute('style')
      prev.removeAttribute('style')
      next.removeAttribute('style')
      if (this.endx < this.beginx) {
        this.changeNext()
      } else {
        this.changeLast()
      }
      this.autoPlay()
    },
    getImageList () {
      this.$http('GET', this.api.queryDictionary, {
        code: 'mini_app',
        type: this.form
      }).then((res) => {
        if (res.data.success) {
          this.playerList = res.data.model.images
          console.log(this.playerList)
          setTimeout(() => {
            this.len = this.playerList.length
            if (this.playerList.length === 2) {
              let item = this.playerList[0]
              this.playerList.push(item)
            }
            this.lastPage = this.playerList.length - 1
          }, 10)
        }
      })
    }
  }
}
</script>
