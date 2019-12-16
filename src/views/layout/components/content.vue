<template>
  <div class="content">
    <div class="content-wrap">
      <keep-alive>
        <router-view :key="key"></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    key () {
      return this.$route.fullPath
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  .content-wrap {
    display: flex;
    flex: 1;
    background-color: #f7f7f7;
  }
}
</style>
