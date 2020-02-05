import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import optimal from '../views/optimal.vue'
import optimalInfo from '../views/optimal-info.vue'
import subProject from '../views/subProject.vue'
import tour from '../views/tour.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/optimal',
    name: 'optimal',
    component: optimal
  }, {
    path: '/optimal-info',
    name: 'optimal-info',
    component: optimalInfo
  },{
    path: '/subProject',
    name: 'subProject',
    component: subProject
  },{
    path: '/tour',
    name: 'tour',
    component: tour
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, saveTop){
    if (saveTop) {
      return saveTop;
    } else {
      return {x: 0, y: 0}
    }
  }
});

export default router
