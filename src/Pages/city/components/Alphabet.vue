<template>
  <div class="alphabet">
    <ul class="list">
      <li class="item"
          v-for="item of letters"
          :key="item"
          :ref="item"
          @click="handleLetterClick"
          @touchstart="handletTouchStart"
          @touchmove="handletTouchMove"
          @touchend="handletTouchEnd"
      >
        {{item}}
      </li>
    </ul>
  </div>
</template>
<script>
export default{
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchstatus: false
    }
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handletTouchStart () {
      this.touchstatus = true
    },
    handletTouchMove (e) {
      if (this.touchstatus) {
        // offsetTop指的是'A'字母距离城市选择最下沿的距离
        const startY = this.$refs['A'][0].offsetTop
        const touchY = e.touches[0].clientY - 89
        const index = Math.floor((touchY - startY) / 20)
        console.log(index)
        if (index >= 0 && index < this.letters.length) {
          this.$emit('change', this.letters[index])
        }
      }
    },
    handletTouchEnd () {
      this.touchstatus = false
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/variables.styl'
.list
  position:absolute;
  top:1.78rem;
  right: 0;
  bottom: 0;
  width: .4rem;
  display: flex;
  flex-direction:column;
  justify-content:center;
  .item
    line-height:.4rem;
    text-align: center;
    color: $bgColor;
</style>
