<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe646;</div>
    </div>
    <div class="header-input">
      <span class="iconfont ">&#xe645;</span>
      输入城市/景点/游玩主题</div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <div class="dropdown-icon">
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/variables.styl'
.header
  display:flex;
  height:$headerheight;
  background:$bgColor;
  color:#fff;
  line-height:$headerheight;
  .header-left
    width:.64rem;
    float:left;
    .back-icon
      font-size:.4rem
      text-align:center
  .header-input
    flex:1
    background: #fff;
    border: 1px;
    margin: .12rem .2rem;
    height: 0.62rem;
    border-radius: 0.1rem;
    color: #c0c4cb;
    padding-left: .1rem;
    line-height:.7rem;
  .header-right
    width:1.24rem;
    float:right;
    color: #fff;
    .dropdown-icon
      width:0
      height:0
      border-top: .15rem solid #fff;
      border-left: .15rem solid transparent;
      border-right: .15rem solid transparent;
      position: relative;
      bottom: .5rem;
      left: .7rem;
</style>
