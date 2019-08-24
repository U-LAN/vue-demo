import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/views/index/index'
import Color from '@/views/color/color'
import Shop from '@/views/shop/shop'
import PropDemo from '@/views/prop-demo/prop-demo'
import GradientColor from '@/views/gradientColor/gradientColor'
import Async from '@/views/asyncAwait/asyncAwait'
import Echarts from '@/views/echarts/echarts'
import D3 from '@/views/d3/d3'
import Git from '@/views/gitCommand/gitCommand'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      redirect: '/color',
      children: [
        {
          path: '/color',
          name: 'color',
          component: Color
        },
        {
          path: '/shop',
          name: 'shop',
          component: Shop
        },
        {
          path: '/prop-demo',
          name: 'prop-demo',
          component: PropDemo
        },
        {
          path: '/gradientColor',
          name: 'gradientColor',
          component: GradientColor
        },
        {
          path: '/asyncAwait',
          name: 'asyncAwait',
          component: Async
        },
        {
          path: '/echarts',
          name: 'echarts',
          component: Echarts
        },
        {
          path: '/d3',
          name: 'd3',
          component: D3
        },
        {
          path: '/git',
          name: 'git',
          component: Git
        }
      ]
    }
  ]
})
