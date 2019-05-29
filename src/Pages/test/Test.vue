<template>
  <ul class="list" id="list">
    <li v-for="(item,index) in items" :key="index">
        <p>
            <b>{{item.nm}}</b>
            <em>{{item.enm}}</em>
        </p>
        <div class="btns">
            <button class="btn_no" @click="btnUp(index)">
                <i class="sprites_all sprites_up"></i>
            </button>
        </div>
        <div class="btns btn_move">
            <button class="btn_no">
                <i class="sprites_all sprites_draw"></i>
            </button>
        </div>
    </li>
  </ul>
</template>
<script>
import Sortable from 'sortablejs'
export default {
  data () {
    return {
      uwasc: true,
      idx: '1',
      items: [{
        id: 1,
        nm: '澳元日元',
        enm: 'AUDJPY(2.6)',
        price: 20.545,
        up: '-255%',
        sel: false
      }, {
        id: 2,
        nm: '澳元日元1',
        enm: 'AUDJPY(2.6)',
        price: 20.545,
        up: '+255%',
        sel: true
      }, {
        id: 3,
        nm: '澳元日元2',
        enm: 'AUDJPY(2.6)',
        price: 20.545,
        up: '+255%',
        sel: true
      }, {
        id: 4,
        nm: '澳元日元3',
        enm: 'AUDJPY(2.6)',
        price: 20.545,
        up: '+255%',
        sel: true
      }, {
        id: 5,
        nm: '澳元日元4',
        enm: 'AUDJPY(2.6)',
        price: 20.545,
        up: '+255%',
        sel: true
      }, {
        id: 6,
        nm: '澳元日元5',
        enm: 'AUDJPY(2.6)',
        price: 20.545,
        up: '+255%',
        sel: true
      }, {
        id: 7,
        nm: '澳元日元5',
        enm: 'AUDJPY(2.6)',
        price: 20.545,
        up: '+255%',
        sel: true
      }, {
        id: 8,
        nm: '澳元日元5',
        enm: 'AUDJPY(2.6)',
        price: 20.545,
        up: '+255%',
        sel: true
      }, {
        id: 9,
        nm: '澳元日元5',
        enm: 'AUDJPY(2.6)',
        price: 20.545,
        up: '+255%',
        sel: true
      }]
    }
  },
  mounted () {
    var _this = this
    var $ul = this.$el.querySelector('#list')
    /* eslint-disable no-new */
    new Sortable($ul, {
      onUpdate: function (event) {
        var newIndex = event.newIndex,
          oldIndex = event.oldIndex,
          $li = $ul.children[newIndex],
          $oldLi = $ul.children[oldIndex]
        $ul.removeChild($li)
        if (newIndex > oldIndex) {
          $ul.insertBefore($li, $oldLi)
        } else {
          $ul.insertBefore($li, $oldLi.nextSibling)
        }
        var item = _this.items.splice(oldIndex, 1)
        _this.items.splice(newIndex, 0, item[0])
      },
      animation: 150
    })
  },
  methods: {
    btnUp (index) {
      var item = this.items[index]
      this.items.splice(index, 1)
      this.items.unshift(item)
    }
  }
}
</script>
