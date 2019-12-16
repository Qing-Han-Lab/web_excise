<style lang="scss" scoped>
.right {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
  min-height: 90vh;
  background: linear-gradient(
    180deg,
    rgba(251, 44, 104, 1) 50%,
    rgba(247, 247, 247, 1) 50%
  );
}
.right::-webkit-scrollbar {
  display: none;
}
</style>

<template>
  <div class="right" ref="right">
    <Normal v-if="$store.state.userInfo.level === 'normalLevel'"></Normal>
    <High v-if="$store.state.userInfo.level === 'superLevel'"></High>
    <Plus v-if="$store.state.userInfo.level === 'plusLevel'"></Plus>
  </div>
</template>

<script>
import Normal from './components/normal'
import High from './components/high'
import Plus from './components/plus'
export default {
  data () {
    return {
      canRefresh: true
    }
  },
  created () {
    window.update = () => {
      if (this.$store.state.token) {
        this.$store.dispatch('getUserAccountInfo')
      }
    }
    if (this.$store.state.token) {
      this.$store.dispatch('getUserAccountInfo')
    }
    if (window.plus) {
      this.setRefresh()
    } else {
      document.addEventListener('plusready', this.setRefresh, false)
    }
  },
  mounted () {
    this.$refs.right.addEventListener('scroll', this.scrollListen, false)
  },
  methods: {
    scrollListen () {
      if (this.$refs.right.scrollTop < 10) {
        if (window.plus) {
          const color = window.plus.os.name.toLocaleLowerCase() === 'ios' ? '#ffffff' : '$fb2c68'
          const style = window.plus.os.name.toLocaleLowerCase() === 'ios' ? 'default' : 'circle'
          window.plus.webview.currentWebview().setPullToRefresh({
            support: true,
            color: color,
            height: '50px',
            range: '50px',
            style: style
          }, this.refreshRight)
          this.canRefresh = true
        }
      } else {
        if (window.plus) {
          window.plus.webview.currentWebview().setPullToRefresh({
            support: false
          })
          this.canRefresh = false
        }
      }
    },
    setRefresh () {
      // 设置刷新
      if (this.$store.state.token) {
        const color = window.plus.os.name.toLocaleLowerCase() === 'ios' ? '#ffffff' : '$fb2c68'
        const style = window.plus.os.name.toLocaleLowerCase() === 'ios' ? 'default' : 'circle'
        window.plus.webview.currentWebview().setPullToRefresh({
          support: true,
          color: color,
          height: '50px',
          range: '50px',
          style: style
        }, this.refreshRight)
        this.canRefresh = true
      } else {
        window.plus.webview.currentWebview().setPullToRefresh({
          support: false
        })
        this.canRefresh = false
      }
    },
    refreshRight () {
      // 刷新我的页面
      if (this.$store.state.token) {
        this.$store.dispatch('getUserAccountInfo')
      }
      window.plus.webview.currentWebview().endPullToRefresh()
    }
  },
  components: {
    Normal,
    High,
    Plus
  }
}
</script>
