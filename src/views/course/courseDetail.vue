<style lang="scss" scoped>
.detail {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  iframe {
    flex: 1;
  }
}
</style>

<template>
  <div class="detail">
    <!-- <iframe :src="thirdUrl" v-if="thirdUrl" frameborder="0"></iframe> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      thirdUrl: ''
    }
  },
  mounted () {
    // this.thirdUrl = this.$route.query.thirdUrl
  }
}
</script>
