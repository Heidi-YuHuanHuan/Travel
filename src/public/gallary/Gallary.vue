<template>
  <div class="container" @click="handleGallaryclick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide>
          <img class="garray-img" src="../../assets/images/1.jpg">
        </swiper-slide>
        <swiper-slide>
          <img class="garray-img" src="../../assets/images/2.jpg">
        </swiper-slide>
        <swiper-slide>
          <img class="garray-img" src="../../assets/images/3.jpg">
        </swiper-slide>
        <swiper-slide>
          <img class="garray-img" src="../../assets/images/4.jpg">
        </swiper-slide>
        <swiper-slide>
          <img class="garray-img" src="../../assets/images/5.jpg">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default{
  name: 'PublicGallary',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        //swiper自我刷新
        observeParents: true,
        observer:true
      }
    }
  },
  methods: {
    handleGallaryclick () {
      this.$emit('close')
    }
  }
}
</script>
<style lang="stylus">
  .container >>> .swiper-container
    overflow: inherit
  .container
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 99
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: #000
    .wrapper
      height: 0
      width: 100%
      padding-bottom: 100%
      .garray-img
        width: 100%
      .swiper-pagination
        color:#fff;
        // bottom: -1rem
</style>
