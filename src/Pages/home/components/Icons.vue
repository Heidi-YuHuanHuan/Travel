<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-imgs">
            <img class="icon-img-content" :src= "item.imgURL">
          </div>
          <p class="icon-texts">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default{
  name: 'HomeIcons',
  props: {
    iconList: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/variables.styl'
@import '~styles/mixins.styl'
.icons >>> .swiper-container
  height: 0;
  padding-bottom: 50%;
.icon
  position:relative;
  width:25%;
  float: left;
  overflow: hidden;
  padding-bottom: 25%;
  height: 0;
  .icon-imgs
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 1rem;
    box-sizing: border-box;
    padding: .1rem;
    .icon-img-content
      display: block;
      margin: 0 auto;
      height: 100%;
  .icon-texts
    color:$darkTextColor;
    position: absolute;
    left: 0;
    right: 0;
    bottom: .44rem;
    height: .44rem;
    line-height: .44rem;
    text-align: center;
    ellipsis();
</style>
