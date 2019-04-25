<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <img class="icon-imgs" :src= "item.imgURL">
          <p class="icon-texts">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default{
  name: 'HomeIcons',
  data () {
    return {
      iconList: [
        {
          id: '01',
          imgURL: '../../../../static/images/景点门票.png',
          desc: '景点门票'
        },
        {
          id: '02',
          imgURL: '../../../../static/images/滑雪.png',
          desc: '滑雪'
        },
        {
          id: '03',
          imgURL: '../../../../static/images/温泉.png',
          desc: '泡温泉'
        },
        {
          id: '04',
          imgURL: '../../../../static//images/动植物园.png',
          desc: '动植物园'
        },
        {
          id: '05',
          imgURL: '../../../../static/images/一日游.png',
          desc: '一日游'
        },
        {
          id: '06',
          imgURL: '../../../../static/images/榜单.png',
          desc: '必游榜单'
        },
        {
          id: '07',
          imgURL: '../../../../static/images/自然风光.png',
          desc: '自然风光'
        },
        {
          id: '08',
          imgURL: '../../../../static/images/全部.png',
          desc: '全部'
        },
        {
          id: '09',
          imgURL: '../../../../static/images/景点门票.png',
          desc: '景点门票'
        }
      ]
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
  width:25%;
  float: left;
  overflow: hidden;
  padding-bottom: 10%;
  .icon-imgs
    width: .7rem;
    display: block;
    box-sizing: border-box;
    margin: 0 auto;
    height: 100%;
    padding-top: .2rem
  .icon-texts
    color:$darkTextColor;
    text-align: center;
    padding-top: .1rem;
    ellipsis()
</style>
