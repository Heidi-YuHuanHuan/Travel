 <template>
  <div class="cityList" ref="wrapper">
    <div>
      <div class="area">
         <div class="title">当前城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">
                <p class="button-text">{{this.$store.state.city}}</p>
              </div>
            </div>
          </div>
      </div>
      <div class="area">
         <div class="title">热门城市</div>
          <div class="button-list">
            <div class="button-wrapper" 
                v-for="item of hotCities" 
                :key="item. id"
                @click="handleCityClick(item.name)"
              >
              <div class="button">
                <p class="button-text">{{item.name}}</p>
              </div>
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
                @click="handleCityClick(innerItem.name)"
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
  methods: {
    handleCityClick(city) {
      this.$store.commit('changecity',city)
      this.$router.push('/')
    }
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
    padding: .1rem 4rem .1rem .1rem;
    width:90%;
  .button-wrapper
    float:left;
    width: 33.33%;
    .button
      margin: .1rem;
      text-align: center;
      border-radius: .06rem;
      border: .02rem solid #ccc;
      .button-text
         padding: .1rem .1rem;
         width: 100px;
  .item-list
  .item
    line-height: .76rem;
    border-bottom: .01rem solid #ddd;
    padding-left: .2rem;
</style>
