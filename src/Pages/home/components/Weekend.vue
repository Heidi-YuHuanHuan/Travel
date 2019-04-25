<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgURL">
        </div>
        <div class="item-info">
          <p class="info-title">{{item.title}}</p>
          <p class="info-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [
        {
          id: '01',
          imgURL: 'http://img2.imgtn.bdimg.com/it/u=2313766368,1230529460&fm=26&gp=0.jpgg',
          title: '[北京]太平洋海底世界学生门票',
          desc: '漫步海底，欣赏五彩缤纷的海底生物'
        },
        {
          id: '02',
          imgURL: 'http://img2.imgtn.bdimg.com/it/u=2313766368,1230529460&fm=26&gp=0.jpg',
          title: '江苏出发一日游',
          desc: '[北京]【五一预售】八达岭长城+颐和园+北大外观+鸟巢水立方一日游'
        }]
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
@import '~styles/variables.styl'
.recommend-title
  line-height:.8rem;
  background:#eee;
  margin-top: .2rem;
  text-indent:.2rem;
.item-img-wrapper
  height:0;
  overflow: hidden;
  padding-bottom: 37%;
.item-img
  width:100%;
.info-title
  color: $darkTextColor;
  font-weight: 600;
  font-size: .32rem;
  line-height: .54rem;
  ellipsis();
.info-desc
  color: #999;
  line-height: .4rem;
  width: 80%;
  ellipsis();
    </style>
