<style scoped lang='scss'>
.allview {
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
  .addtitlebox {
    width: 100%;
    flex: 1;
    border-top: 1px solid rgba(242, 242, 242, 1);
    box-sizing: border-box;
    input {
      width: 340px;
      height: 30px;
      outline: none;
      border: 0px;
      border-bottom: 1px solid rgba(254, 124, 159, 1);
      color: rgba(204, 204, 204, 1);
      font-size: 14px;
      margin: 56px auto 0px;
      display: block;
    }
    .surebtn {
      width: 140px;
      height: 30px;
      background: linear-gradient(
        135deg,
        rgba(249, 53, 121, 1) 0%,
        rgba(250, 31, 107, 1) 100%
      );
      border-radius: 15px;
      margin: 60px auto 0px;
      color: #fff;
      font-size:14px;
      text-align: center;
      line-height: 30px;
    }
  }
}
</style>

<template>
  <div class="allview">
    <TitleBar title="新增标签"></TitleBar>
    <div class="addtitlebox">
      <input type="text" placeholder="输入标签内容" />
      <div class="surebtn" @click="goBack()">确定</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
