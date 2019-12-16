<style scoped>
.allview{
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  position: absolute;
}
.allview .topline{
  width: 100%;
  height: 1px;
  background: #f2f2f2;
}
.allview .sendknockbox{
  width: 248px;
  height: 97px;
  background-image: url("./img/sendknock.png");
  background-size: 100% 100%;
  margin: 26px 0px 0px 87px;
}
.allview .chooseknock{
  width: 300px;
  height: 100px;
  margin: 58px auto 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
}
.chooseknock .chooseitem{
  width: 70px;
  height: 100px;
  float: left;
  position: relative;
}
.chooseitem .title{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 20px;
  text-align: center;
  line-height: 20px;
  font-size: 14px;
}
.chooseitem img{
  position: absolute;
  width: 70px;
  height: 70px;
  left: 0;
  bottom: 0;
  transform: scale(1.5) translateY(10px);
}
.chooseitem img.notopen{
  width: 85px;
  height: 73px;
  left: -7px;
  transform: scale(1.3) translateY(5px);
}
.allview .tellbox{
  width: 317px;
  height: 17px;
  font-size: 12px;
  text-align: center;
  line-height: 17px;
  margin: 30px auto 0px;
}
.allview .seetell{
  width: 317px;
  height: 17px;
  font-size: 12px;
  text-align: center;
  line-height: 17px;
  color: #4485cd;
  margin: 5px auto 0px;
}
.allview .cancel{
  width: 375px;
  height: 50px;
  background-color: #f2f2f2;
  font-size: 18px;
  line-height: 50px;
  text-align: center;
  color: #fb2c68;
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>

<template>
<div class='allview'>
  <div class="topline"></div>
  <div class="sendknockbox"></div>
  <div class="chooseknock">
    <div class="chooseitem" @click="toPage('knockgoodprice',{first:1,second:1})">
      <div class="title">单品类图文</div>
      <img src="./img/knock1.png" alt="">
    </div>
    <div class="chooseitem">
      <div class="title">单品类视频</div>
      <img src="./img/knock2.png" alt="">
      <img class="notopen" src="./img/notopen.png" alt="敬请期待">
    </div>
    <!-- <div class="chooseitem" @click="toPage('knockgoodprice',{first:2,second:1})"> -->
    <div class="chooseitem">
      <div class="title">活动类图文</div>
      <img src="./img/knock3.png" alt="">
      <img class="notopen" src="./img/notopen.png" alt="敬请期待">
    </div>
  </div>
  <div class="tellbox">（目前支持淘宝、天猫、京东、拼多多商品和活动的爆料）</div>
  <div class="seetell">①查看爆料规则</div>
  <!-- <div class="cancel" @click="back">取消</div> -->
</div>
</template>

<script>
export default {
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>
