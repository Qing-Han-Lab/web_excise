<template>
  <div class="bottom">
    <div
      :class="`${item.class}${item.active?' on':''}`"
      v-for="(item,index) in menus"
      :key="index"
      @click="checkMenu(index)"
    >
      <img :src="item.active?item.activeIcon:item.icon" alt />
      <div class="bottom-text">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menus: [
        {
          name: '首页',
          active: true,
          class: 'index',
          icon: require('./images/tab_index.png'),
          activeIcon: require('./images/tab_index_on.png'),
          url: '/home'
        },
        {
          name: '爆款',
          active: false,
          class: 'hot',
          icon: require('./images/tab_hot.png'),
          activeIcon: require('./images/tab_hot_on.png'),
          url: '/hot'
        },
        {
          name: '权益',
          active: false,
          class: 'right',
          icon: require('./images/tab_right.png'),
          activeIcon: require('./images/tab_right_on.png'),
          url: '/right'
        },
        {
          name: '我的',
          active: false,
          class: 'mine',
          icon: require('./images/tab_mine.png'),
          activeIcon: require('./images/tab_mine_on.png'),
          url: '/mine'
        }
      ],
      homeHeight: 0,
      hotHeight: 0,
      rightHeight: 0,
      mineHeight: 0
    }
  },
  mounted () {
    switch (this.$route.name) {
      case 'home':
        this.menus = this.menus.map(item => {
          item.active = false
          return item
        })
        this.menus[0].active = true
        break
      case 'hot':
        this.menus = this.menus.map(item => {
          item.active = false
          return item
        })
        this.menus[1].active = true
        break
      case 'right':
        this.menus = this.menus.map(item => {
          item.active = false
          return item
        })
        this.menus[2].active = true
        break
      case 'mine':
        this.menus = this.menus.map(item => {
          item.active = false
          return item
        })
        this.menus[3].active = true
        break
    }
  },
  methods: {
    checkMenu (index) {
      switch (this.$route.name) {
        case 'home':
          this.homeHeight = document.querySelector('.home .home-content').scrollTop
          break
        case 'hot':
          this.hotHeight = document.querySelector('.hot .content').scrollTop
          break
        case 'right':
          this.rightHeight = document.querySelector('.right').scrollTop
          break
        case 'mine':
          this.mineHeight = document.querySelector('.mine').scrollTop
          break
      }
      this.menus = this.menus.map(item => {
        item.active = false
        return item
      })
      this.menus[index].active = true
      this.$router.replace({
        path: this.menus[index].url
      })
      this.$nextTick(() => {
        switch (index) {
          case 0:
            document.querySelector('.home .home-content').scrollTop = this.homeHeight
            break
          case 1:
            document.querySelector('.hot .content').scrollTop = this.hotHeight
            break
          case 2:
            document.querySelector('.right').scrollTop = this.rightHeight
            break
          case 3:
            document.querySelector('.mine').scrollTop = this.mineHeight
            break
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.bottom {
  height: 50px;
  width: 375px;
  box-sizing: border-box;
  border-top: solid 1px rgba(231, 231, 231, 1);
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  .bottom-text {
    font-family: "PingFangSC-Regular";
    font-size: 9px;
    line-height: 12px;
    color: rgba(153, 153, 153, 1);
  }
  div {
    flex: 1;
  }
  .index {
    img {
      margin-top: 9px;
      width: 21px;
      height: 21px;
    }
    &.on {
      .bottom-text {
        color: rgba(251, 44, 104, 1);
      }
      img {
        animation: checkMenu 300ms ease-in-out;
      }
    }
  }
  .hot {
    img {
      margin-top: 9px;
      width: 21px;
      height: 20px;
    }
    &.on {
      .bottom-text {
        color: rgba(251, 44, 104, 1);
      }
      img {
        animation: checkMenu 300ms ease-in-out;
      }
    }
  }
  .right {
    img {
      margin-top: 9px;
      width: 21px;
      height: 21px;
    }
    &.on {
      .bottom-text {
        color: rgba(251, 44, 104, 1);
      }
      img {
        animation: checkMenu 300ms ease-in-out;
      }
    }
  }
  .mine {
    img {
      margin-top: 9px;
      width: 28px;
      height: 19px;
    }
    &.on {
      .bottom-text {
        color: rgba(251, 44, 104, 1);
      }
      img {
        animation: checkMenu 300ms ease-in-out;
      }
    }
  }
}
@keyframes checkMenu {
  0% {
    transform: scale(0.8) rotate(0);
  }
  33% {
    transform: scale(1.2) rotate(-10deg);
  }
  50% {
    transform: scale(1.4) rotate(0);
  }
  66% {
    transform: scale(1.2) rotate(10deg);
  }
  100% {
    transform: scale(1) rotate(0);
  }
}
</style>
