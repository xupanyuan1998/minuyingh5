import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/newsdetail'
import notice from '@/components/index/noticedetail'
import policy from '@/components/index/policy'
import affairs from '@/components/index/affairs'
import zhengce from '@/components/index/zhengce'
import handle from '@/components/index/handle'
import jingyan from '@/components/jingyanfrom/gauge'
import tableFa from '@/components/tableEc/table-fa'
import tableJd from '@/components/tableEc/table-jd'
import tableMq from '@/components/tableEc/table-mq'
import tableMysuqiu from '@/components/tableEc/table-mysuqiu'
import tableQyhy from '@/components/tableEc/table-qyhy'
import tableSqbl from '@/components/tableEc/table-sqbl'
import tableWznr from '@/components/tableEc/table-wznr'
import g2 from '@/components/g2/test'
import stars from '@/components/tableEc/stars'
import zijin from '@/components/tableEc/zijin'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'test',
      component: g2
    },
    {
      path: '/from',
      name: 'from',
      component: () => import('@/components/g2/from')
    },
    {
      path: '/newsdetail',//新闻详情
      name: 'index',
      component: index
    },{
      path: '/notice',//通知公告详情
      name: 'notice',
      component: notice
    },
    {
      path: '/policy',//政策详情
      name: 'policy',
      component: policy
    },{
      path: '/affairs',//办事指南
      name: 'affairs',
      component: affairs
    },{
      path: '/handle',//政务公开
      name: 'handle',
      component: handle
    },{
      path: '/jingyan',//经验推荐
      name: 'jingyan',
      component: jingyan
    },
    {
      path: '/zhengce',//政策前瞻
      name: 'zhengce',
      component: zhengce
    },
    {
      path:'/qiyeint',//企业详情
      name:'qiyeint',
      component:() => import('@/components/index/qiyeint')
    },
    {
      path:'/gongint',//供需详情
      name:'gongint',
      component:() => import('@/components/index/gongint')
    },
    {
      path:'/online',//在线资源
      name:'online',
      component:() => import('@/components/index/online')
    },{
      path:'/shenpi',//审批服务
      name:'shenpi',
      component:() => import('@/components/index/shenpi')
    },
    {
      path:'/shenpiint',//审批服务详情
      name:'shenpiint',
      component:() => import('@/components/index/shenpiint')
    },
    {
      path:'/falv',//法律服务
      name:'falv',
      component:() => import('@/components/index/falv')
    },
    {
      path:'/xieyi',//协议
      name:'falv',
      component:() => import('@/components/index/xieyi')
    },
    {
      path:'/legal',
      name:'legal',
      component:()=>import('@/components/index/legal'),
    },//法律服务列表
    {
      path:'/Finance',
      name:'Finance',
      component:()=>import('@/components/index/Finance'),
    },//金融机构
    {
      path:'/bank',
      name:'bank',
      component:()=>import('@/components/index/bank'),
    },//金融机构详情
    {
      path:'/innovate',
      name:'innovate',
      component:()=>import('@/components/index/innovate'),
    },//创新产品
    {
      path:'/fund',
      name:'fund',
      component:()=>import('@/components/index/fund'),
    },//基金对接
    {
      path:'/Insurance',
      name:'Insurance',
      component:()=>import('@/components/index/Insurance'),
    },//保险服务
    {
      path:'/technology',
      name:'technology',
      component:()=>import('@/components/index/technology'),
    },//技术服务 intermediary
    {
      path:'/intermediary',
      name:'intermediary',
      component:()=>import('@/components/index/intermediary'),
    },//中介服务
// table
    {
      path: '/tableFa',    //政策发布效果统计
      name: 'tableFa',
      component: tableFa
    },
    {
      path: '/tableJd',//企业建档统计
      name: 'tableJd',
      component: tableJd
    },
    {
      path: '/tableMq',//我的办理企业
      name: 'tableMq',
      component: tableMq
    },
    {
      path: '/tableMysuqiu',//在线诉求日统计
      name: 'tableMysuqiu',
      component: tableMysuqiu
    },
    {
      path: '/tableQyhy',//企业活跃统计
      name: 'tableQyhy',
      component: tableQyhy
    },
    {
      path: '/tableSqbl',//诉求办理统计
      name: 'tableSqbl',
      component: tableSqbl
    },
    {
      path: '/stars',//企业评分
      name: 'stars',
      component: stars
    },{
       path: '/tableWznr',//政策发布效果
      name: 'tableWznr',
      component: tableWznr
   },{
      path: '/zijin',//注册资金
      name: 'zijin',
      component: zijin
    }
  ]
})
