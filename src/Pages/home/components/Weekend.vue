<template>
  <div>
    <div class="weekend-title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item of weekendList" :key="item.id">
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
  props: {
    weekendList: Array
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
@import '~styles/variables.styl'
.weekend-title
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
