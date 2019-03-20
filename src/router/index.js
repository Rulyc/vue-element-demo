import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: Layout,
      children: [
        // { path: '/', component: Main },
        {
          path: '/HelloWorld',
          component: resolve => require(['@/components/HelloWorld'], resolve),
          name: '首页'
        }, {
          path: '/one',
          component: resolve => require(['@/components/one'], resolve),
          name: 'one'
        }]
    }
  ]
})
