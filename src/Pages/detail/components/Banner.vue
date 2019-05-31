<template>
  <div>
    <div class="banner" @click="handleBannerclick">
      <img class="banner-img" src="../../../assets/images/1.jpg">
      <div class="banner-info">
        <div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
        <div class="banner-number"><span><img class="banner-icon" src="../../../assets/images/图片.png"></span>5</div>
      </div>
    </div>
    <public-gallary 
      :imgs="imgs" 
      v-show="showGallary"
      @close="handleGallaryclose"
    ></public-gallary>
  </div>
</template>
<script >
import PublicGallary from 'public/gallary/Gallary'
export default{
  name: 'DetailBanner',
  components:{
    PublicGallary
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleBannerclick () {
      this.showGallary = true;
    },
    handleGallaryclose () {
      this.showGallary = false;
    }
  }
}
</script>
<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display:flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8))
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        height: .32rem
        line-height: .32rem
        margin-top: .14rem
        padding: 0 .4rem
        border-radius: .2rem
        font-size: .24rem
        .banner-icon
          width:.3rem
          margin-right:.15rem 
</style>
