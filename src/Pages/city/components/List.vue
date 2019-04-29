<template>
  <div class="cityList" ref="wrapper">
    <div>
      <div class="area">
         <div class="title">当前城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">无锡</div>
            </div>
          </div>
      </div>
      <div class="area">
         <div class="title">热门城市</div>
          <div class="button-list">
            <div class="button-wrapper" v-for="item of hotCities" :key="item. id">
              <div class="button">{{item.name}}</div>
            </div>
          </div>
      </div>
      <div class="area"
           v-for="(item,key) of cities"
           :key="key"
           :ref="key"
      >
         <div class="title">{{key}}</div>
         <div class="item-list">
           <div class="item"
                v-for="innerItem of item"
                :key="innerItem.id"
           >
           {{innerItem.name}}
           </div>
         </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default{
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  watch: {
    // 监听letter
    letter () {
      if (this.letter) {
        // 获得的是数组，但我们需要的是dom元素，所以通过在后面加上 [0]
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/variables.styl'
.cityList
  overflow: hidden;
  position: absolute;
  top: 1.78rem;
  left: 0;
  bottom: 0;
  .title
    line-height: .54rem;
    background: #eee;
    padding-left: .2rem;
    color: #999;
    border-bottom: .01rem solid #ddd;
    border-top: .01rem solid #ddd;
  .button-list
    overflow: hidden;
    padding: .1rem 3rem .1rem .1rem;
  .button-wrapper
    float:left;
    width: 33.33%;
    .button
      margin: .1rem;
      padding: .1rem 0;
      text-align: center;
      border-radius: .06rem;
      border: .02rem solid #ccc;
  .item-list
  .item
    line-height: .76rem;
    border-bottom: .01rem solid #ddd;
    padding-left: .2rem;
</style>
