import Vue from 'vue'
import Router from 'vue-router'
import user from '../views/user/index'
import admin from '../views/admin/index'
import apply from '../views/user/apply'
import applylist from '../views/user/applylist'
import schedule from '../views/user/schedule'
import more from '../views/user/more'
import Error from '../components/404.vue'

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/schedule'
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path :'/apply',
      component : apply
    },
    {
      path :'/applylist',
      component : applylist
    },
    {
      path :'/schedule',
      component : schedule
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin
    },
    {
      path: '/404',
      name: '404',
      component: Error
    }
  ]
})
