import { createRouter, createWebHistory } from 'vue-router'
import mainPage from "../components/mainPage.vue"
import allPages from "../components/allPages.vue"
import hooka from '../components/hooka.vue'
import food from '../components/food.vue'
import jusise from '../components/softjusise.vue'
import hotdrink from '../components/hotdrink.vue'
import drinks from '../components/drinks.vue'
import moheto from '../components/moheto.vue'
import m3jnatCold from '../components/m3jnat-cold.vue'
import m3jnatHot from '../components/m3jnat-hot.vue'


const routes = [
  {
    path: '/',
    name: 'mainPage',
    component: mainPage
  },
  {
    path: '/menu',
    name: 'allPages',
    component: allPages
  },
  {
    path: '/hooka',
    name: 'hooka',
    component: hooka
  },
  {
    path: '/food',
    name: 'food',
    component: food
  },
  {
    path: '/sjs',
    name: 'jusise',
    component: jusise
  },
  {
    path: '/hotd',
    name: 'hotdrink',
    component: hotdrink
  },
  {
    path: '/d',
    name: 'drinks',
    component: drinks
  },
  {
    path: '/mojito',
    name: 'moheto',
    component: moheto
  }
  ,
  {
    path: '/mcold',
    name: 'm3jnatCold',
    component: m3jnatCold
  },
  {
    path: '/mhot',
    name: 'm3jnatHot',
    component: m3jnatHot
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
