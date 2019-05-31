import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Pages/home/Home'
import City from '@/Pages/city/City'
import Test from '@/pages/test/Test'
import Detail from '@/Pages/detail/Detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})
