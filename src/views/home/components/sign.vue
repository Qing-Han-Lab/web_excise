<style lang="scss" scoped>
.normal-sign {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 15;
  .normal-sign-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    width: 320px;
    height: 300px;
    background-color: #ffffff;
    border-radius: 10px;
    .normal-sign-box-title {
      padding-top: 24px;
      font-family: "PingFang-SC-Bold";
      font-size: 18px;
      color: #fb2c68;
      text-align: center;
    }
    .normal-sign-box-tip {
      padding-top: 5px;
      font-family: "PingFangSC-Medium";
      font-size: 10px;
      color: #7f50fc;
      text-align: center;
    }
    .normal-sign-box-first {
      margin: 14px auto 0;
      width: 242px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      .normal-sign-box-first-item {
        position: relative;
        width: 44px;
        height: 44px;
        font-size: 12px;
        color: #ffffff;
        line-height: 44px;
        text-align: center;
        border-radius: 10px;
        background-image: url("./images/sign_bg_grey.png");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 44px;
        &.active {
          background-image: url("./images/sign_bg_red.png");
          .normal-sign-box-first-item-right {
            position: absolute;
            bottom: 0;
            right: 0;
            width: 11px;
            height: 11px;
            background-image: url('./images/sign_active.png');
            background-repeat: no-repeat;
            background-position: center;
            background-size: 11px;
          }
        }
      }
    }
    .normal-sign-box-second {
      margin: 28px auto 0;
      width: 172px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      .normal-sign-box-second-item {
        position: relative;
        width: 44px;
        height: 44px;
        font-size: 12px;
        color: #ffffff;
        line-height: 44px;
        text-align: center;
        border-radius: 10px;
        background-image: url("./images/sign_bg_grey.png");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 44px;
        &.active {
          background-image: url("./images/sign_bg_red.png");
          .normal-sign-box-second-item-right {
            position: absolute;
            bottom: 0;
            right: 0;
            width: 11px;
            height: 11px;
            background-image: url('./images/sign_active.png');
            background-repeat: no-repeat;
            background-position: center;
            background-size: 11px;
          }
        }
      }
    }
    .normal-sign-box-enter {
      margin: 34px auto 0;
      width: 200px;
      height: 35px;
      background-image: linear-gradient(180deg, #ff5183 0%, #fb2c68 100%);
      box-shadow: 3px 1px 9px 0px rgba(0, 0, 0, 0.2);
      border-radius: 19px;
      text-align: center;
      line-height: 35px;
      color: #ffffff;
      font-size: 16px;
    }
  }
}
</style>

<template>
  <div class="sign">
    <div class="normal-sign" v-if="boxShow">
      <div class="normal-sign-box">
        <div class="normal-sign-box-title">签到成功</div>
        <div class="normal-sign-box-tip">{{tip}}</div>
        <div class="normal-sign-box-first">
          <div
            class="normal-sign-box-first-item"
            :class="{'active':item.sign}"
            v-for="(item,index) in text1"
            :key="index"
          >
            {{checkDay1(index)}}
            <div class="normal-sign-box-first-item-right" v-if="item.sign"></div>
          </div>
        </div>
        <div class="normal-sign-box-second">
          <div
            class="normal-sign-box-second-item"
            :class="{'active':item.sign}"
            v-for="(item,index) in text2"
            :key="index"
          >{{checkDay2(index)}}
            <div class="normal-sign-box-second-item-right" v-if="item.sign"></div>
          </div>
        </div>
        <div class="normal-sign-box-enter" @click="hideBox">确定</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      boxShow: false
    }
  },
  props: ['text', 'tip'],
  methods: {
    hideBox () {
      this.boxShow = false
      this.$store.dispatch('getUserAccountInfo')
    },
    showBox () {
      this.boxShow = true
    },
    checkDay1 (index) {
      let result = ''
      switch (index) {
        case 0:
          result = '周一'
          break
        case 1:
          result = '周二'
          break
        case 2:
          result = '周三'
          break
        case 3:
          result = '周四'
          break
      }
      return result
    },
    checkDay2 (index) {
      let result = ''
      switch (index) {
        case 0:
          result = '周五'
          break
        case 1:
          result = '周六'
          break
        case 2:
          result = '周日'
          break
      }
      return result
    }
  },
  computed: {
    text1 () {
      return this.text.filter((item, index) => {
        return index < 4
      })
    },
    text2 () {
      return this.text.filter((item, index) => {
        return index >= 4
      })
    }
  }
}
</script>
