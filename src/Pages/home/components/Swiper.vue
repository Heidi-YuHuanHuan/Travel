<template>
<div class="wrapper">
  <swiper :options="swiperOption" v-if="showswiper">
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
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 2000
      }
    }
  },
  computed: {
    showswiper () {
      return this.swiperList.length
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
