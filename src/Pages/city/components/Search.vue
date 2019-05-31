<template>
  <div>
    <div class="search">
      <input type="text" class="search-input" placeholder="请输入城市名或拼音" v-model="keyword">
    </div>
     <!-- v-show="keyword"   根据keyword判断是否显示 -->
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li 
          v-for="item of list" 
          :key="item.id" 
          class="search-item border-bottom"
          @click="handleCityClick(item.name)"
        >
          {{item.name}}
        </li>
        <!-- v-show="hasNoData"    根据数组的长度判断是否显示 -->
        <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default{
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length;
    }
  },
  methods: {
    handleCityClick (city) {
      this.$store.commit('changecity',city)
      this.$router.push('/')
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/variables.styl'
.search
  height: .72rem;
  padding: .1rem;
  background: $bgColor;
  .search-input
    box-sizing: border-box;
    width: 100%;
    height: .62rem;
    padding: 0 .1rem;
    line-height: .62rem;
    text-align: center;
    border-radius: .06rem;
    color: #999;
.search-content
  z-index:1;
  overflow: hidden;
  position:absolute;
  top:1.78rem;
  right: 0;
  bottom: 0;
  left: 0;
  background: #eee;
  .search-item
    line-height:.62rem;
    background-color: #fff;
    color: #666;
    padding-left: .2rem;
</style>
