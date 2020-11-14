import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/index'),
      redirect: '/color',
      children: [
        {
          path: '/color',
          name: 'color',
          component: () => import('@/views/color')
        },
        {
          path: '/shop',
          name: 'shop',
          component: () => import('@/views/shop')
        },
        {
          path: '/propDemo',
          name: 'propDemo',
          component: () => import('@/views/propDemo')
        },
        {
          path: '/gradientColor',
          name: 'gradientColor',
          component: () => import('@/views/gradientColor')
        },
        {
          path: '/asyncAwait',
          name: 'asyncAwait',
          component: () => import('@/views/asyncAwait')
        },
        {
          path: '/echarts',
          name: 'echarts',
          component: () => import('@/views/echarts')
        },
        {
          path: '/d3',
          name: 'd3',
          component: () => import('@/views/d3')
        },
        {
          path: '/git',
          name: 'git',
          component: () => import('@/views/gitCommand')
        },
        {
          path: '/customComponent',
          name: 'customComponent',
          component: () => import('@/views/customComponent')
        },
        {
          path: '/es6',
          name: 'es6',
          component: () => import('@/views/es6')
        },
        {
          path: '/css',
          name: 'css',
          component: () => import('@/views/css')
        }, {
          path: 'antvG6',
          name: 'antvG6',
          component: () => import('@/views/antvG6')
        }, {
          path: 'profit',
          name: 'profit',
          component: () => import('@/views/profit')
        }, {
          path: 'svg',
          name: 'svg',
          component: () => import('@/views/svg')
        }
      ]
    }
  ]
})
