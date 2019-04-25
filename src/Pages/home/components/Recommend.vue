<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgURL">
        </div>
        <div class="item-info">
          <p class="info-title">{{item.title}}</p>
          <p class="info-desc">{{item.desc}}</p>
          <button class="item-btn">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [
        {
          id: '01',
          imgURL: '//imgs.qunarzz.com/sight/p0/1602/67/67feeab24cfc82bb90.water.jpg_256x144_22f0e440.jpg',
          title: '[北京]太平洋海底世界学生门票',
          desc: '漫步海底，欣赏五彩缤纷的海底生物'
        },
        {
          id: '02',
          imgURL: '//imgs.qunarzz.com/p/tts1/1809/6a/ac23991ddfed9c02.jpg_256x144_a2f43ab2.jpg',
          title: '江苏出发一日游',
          desc: '[北京]【五一预售】八达岭长城+颐和园+北大外观+鸟巢水立方一日游'
        },
        {
          id: '03',
          imgURL: 'https://imgs.qunarzz.com/sight/p0/1603/85/85aa0c000578a01e90.water.jpg_256x160_649a8b35.jpg',
          title: '拙政园',
          desc: '庭院错落，花木为胜，天下园林之典范'
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
.item
  display:flex;
  height: 1.9rem;
  overflow: hidden;
  .item-img
    width: 1.7rem;
    height: 1.7rem;
    padding: .1rem;
  .item-info
    padding-left: .1rem;
    flex: 1;
    min-width: 0;
    .info-title
      color: $darkTextColor;
      font-weight: 600;
      font-size: .32rem;
      line-height: .54rem;
      width: 80%;
      ellipsis();
    .info-desc
      color: #999;
      line-height: .4rem;
      ellipsis();
    .item-btn
      background:#ff6700;
      color: #fff;
      line-height: 0.45rem;
      padding: .03rem .3rem;
      margin-top: .2rem;
      font-size: .24rem;
      border-radius: .08rem;
    </style>
