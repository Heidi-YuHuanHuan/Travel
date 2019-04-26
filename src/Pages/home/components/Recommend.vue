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
  props: {
    recommendList: Array
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
