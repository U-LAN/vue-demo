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
import CustomComponent from '@/views/custom-component/index'
import Es6 from '@/views/es6/index'
import Css from '@/views/css/index'
import AntvG6 from '@/views/antv-g6/index'
import Profit from '@/views/profit/index'
import Svg from '@/views/svg/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
        },
        {
          path: '/custom-component',
          name: 'custom-component',
          component: CustomComponent
        },
        {
          path: '/es6',
          name: 'es6',
          component: Es6
        },
        {
          path: '/css',
          name: 'css',
          component: Css
        }, {
          path: 'antv-g6',
          name: 'antv-g6',
          component: AntvG6
        }, {
          path: 'profit',
          name: 'profit',
          component: Profit
        }, {
          path: 'svg',
          name: 'svg',
          component: Svg
        }
      ]
    }
  ]
})
