<template>
<div class="wrapper">
  <swiper :options="swiperOption">
    <swiper-slide v-for="item of swiperList" :key="item.id">
        <img :src="item.imgURL" class="swiper-img">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>
<script>
export default{
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: '01',
          imgURL: 'https://i1.mifile.cn/a4/xmad_15548890300924_zATjN.jpg'
        },
        {
          id: '02',
          imgURL: 'https://i1.mifile.cn/a4/xmad_15476942090876_owaIH.jpg'
        },
        {
          id: '03',
          imgURL: 'https://i1.mifile.cn/a4/xmad_15560028478222_yXWrh.jpg'
        },
        {
          id: '04',
          imgURL: 'https://i1.mifile.cn/a4/xmad_15548066625675_jhzWS.jpg'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background:#fff
.wrapper
  width:100%;
  height: 0;
  padding-bottom: 37.5%;
  overflow: hidden;
  background: #eee;
  .swiper-img
    width:100%
</style>
