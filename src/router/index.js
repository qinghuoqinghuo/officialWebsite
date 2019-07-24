import Vue from 'vue'
import Router from 'vue-router'
import constellation from '@/components/constellation'
import fullpageScroll from '@/components/fullpageScroll'
import constellationDetails from '@/components/constellationDetails'
import echartsDemo from '@/components/echartsDemo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/fullpageScroll',
      name: 'fullpageScroll',
      component: fullpageScroll
    },
    {
      path: '/',
      name: 'constellation',
      component: constellation
    },
    {
      path: '/constellationDetails',
      name: 'constellationDetails',
      component: constellationDetails
    },
    {
      path: '/echarts',
      name: 'echarts',
      component: echartsDemo
    }
  ]
})
