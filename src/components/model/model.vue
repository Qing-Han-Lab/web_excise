<style lang="scss" scoped>
.model {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.4);
  .model-box {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    width: 266px;
    height: 126px;
    background-color: #fff;
    border-radius: 5px;
    .model-box-title {
      margin-top: 23px;
      font-size: 16px;
      letter-spacing: 1px;
      color: #333333;
      text-align: center;
    }
    .model-box-btn {
      width: 172px;
      margin: 28px auto 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .model-box-btn-cancel {
        width: 68px;
        height: 29px;
        line-height: 29px;
        text-align: center;
        border-radius: 15px;
        border: solid 1px rgba(51, 51, 51, 0.6);
        font-size: 15px;
      }
      .model-box-btn-confirm {
        width: 68px;
        height: 29px;
        line-height: 29px;
        border-radius: 29px;

        font-size: 15px;
        letter-spacing: 1px;
        color: #ffffff;
        background-color: #fb2c68;
        text-align: center;
      }
    }
  }
}
</style>

<template>
  <div class="model" v-if="showModel">
    <div class="model-box">
      <div class="model-box-title">{{title}}</div>
      <div class="model-box-btn">
        <div class="model-box-btn-cancel" @click="cancel">取消</div>
        <div class="model-box-btn-confirm" @click="confirmFun">确认</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showModel: false
    }
  },
  props: ['title', 'confirmFun'],
  methods: {
    cancel () {
      this.showModel = false
    },
    show () {
      this.showModel = true
    }
  }
}
</script>
