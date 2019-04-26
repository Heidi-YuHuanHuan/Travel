<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont back-icon">&#xe646;</div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'CityHeader'
}
</script>
<style lang="stylus" scoped>
@import '~styles/variables.styl'
.header
  color:#fff;
  height: $headerheight;
  text-align: center;
  background: $bgColor;
  line-height: $headerheight;
  overflow: hidden;
  font-size: .32rem;
  .back-icon
    width:.64rem;
    text-align: center;
    font-size: .5rem;
    position: absolute;
    top: 0;
    color: #fff;
</style>
