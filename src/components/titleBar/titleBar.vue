<style lang="scss" scoped>
.titleBar {
  width: 375px;
  height: 44px;
  line-height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  .back-btn {
    width: 44px;
    height: 44px;
    background: url(./images/back_btn.png) no-repeat;
    background-size: 10px 16px;
    background-position: 15px center;
    &.hide {
      visibility: hidden;
    }
    &.white {
      background: url(./images/returnbtn.png) no-repeat;
      background-size: 10px 16px;
      background-position: 15px center;
    }
    &.show {
      width: 44px;
      height: 44px;
      background: url("./images/icon-lujin.png") no-repeat;
      background-size: 10px 16px;
      background-position: 15px center;
    }
  }
  .title {
    flex: 1;
    text-align: center;
    font-family: "SourceHanSansSC-Medium";
    font-size: 18px;
    color: #000000;
  }
  .share {
    width: 44px;
    height: 44px;
  }
  .tool {
    font-family: "PingFangSC-Regular";
    font-size: 13px;
    color: rgba(0, 0, 0, 0.6);
    padding-right: 13px;
  }
}
</style>
<template>
  <div class="titleBar" :style="{backgroundColor:backgroundColor}">
    <div class="back-btn" :class="{'hide':hideBack,'show':whiteBack}" @click="goBack"></div>
    <div class="title" :style="{color:color}">{{title}}</div>
    <div class="share" v-if="isShare"></div>
    <div class="tool" v-if="isNeedTool" @click="toolClick">{{toolName}}</div>
  </div>
</template>
<script>
export default {
  name: 'titleBar',
  props: {
    title: {
      type: String,
      default: ''
    },
    hideBack: {
      type: Boolean,
      default: false
    },
    whiteBack: {
      type: Boolean,
      default: false
    },
    isShare: {
      type: Boolean,
      default: true
    },
    isNeedTool: {
      type: Boolean,
      default: false
    },
    toolName: {
      type: String,
      default: ''
    },
    toolClick: {
      type: Function
    },
    colorStyle: {
      type: String,
      default: 'rgba(0,0,0,0.6)'
    },
    backColor: {
      type: String,
      default: '#fff'
    },
    textColor: {
      type: String,
      default: '#000'
    },
    worb: {
      type: String,
      default: 'black'
    },
    backgroundColor: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  }
}
</script>
