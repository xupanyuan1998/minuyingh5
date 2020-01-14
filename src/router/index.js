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
      meta: {
        title: '新闻详情'
      },
      component: index
    },{
      path: '/notice',//通知公告详情
      name: 'notice',
      meta: {
        title: '公告详情'
      },
      component: notice
    },
    {
      path: '/policy',//政策详情
      name: 'policy',
      meta: {
        title: '政策详情'
      },
      component: policy
    },{
      path: '/affairs',//办事指南
      name: 'affairs',
      meta: {
        title: '办事指南详情'
      },
      component: affairs
    },{
      path: '/handle',//政务公开
      name: 'handle',
      meta: {
        title: '政务公开详情'
      },
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
      component:()=>import('@/components/chaoshi/bank'),
    },//金融机构详情
    {
      path:'/jili',
      name:'jili',
      component:()=>import('@/components/chaoshi/jili'),
    },//积利金
    {
      path:'/waihui',
      name:'waihui',
      component:()=>import('@/components/chaoshi/waihui'),
    },//外汇宝
    {
      path:'/anhua',
      name:'anhua',
      component:()=>import('@/components/chaoshi/anhua'),
    },//安华创新
    {
      path:'/anyuan',
      name:'anyuan',
      component:()=>import('@/components/chaoshi/anyuan'),
    },//安徽安元
    {
      path:'/baoc',
      name:'baoc',
      component:()=>import('@/components/chaoshi/baoc'),
    },//太平洋保险
    {
      path:'/guoyuan',
      name:'guoyuan',
      component:()=>import('@/components/chaoshi/guoyuan'),
    },//国元农业保险
    {
      path:'/dongfang',
      name:'dongfang',
      component:()=>import('@/components/chaoshi/dongfang'),
    },//铜陵东方会计师事务所
    {
      path:'/yongchang',
      name:'yongchang',
      component:()=>import('@/components/chaoshi/yongchang'),
    },//铜陵永昌会计师事务所
    {
      path:'/andan',
      name:'andan',
      component:()=>import('@/components/chaoshi/andan'),
    },//安徽省信用担保集团
    {
      path:'/tongl',
      name:'tongl',
      component:()=>import('@/components/chaoshi/tongl'),
    },//铜陵市担保控股有限公司
    {
      path:'/xianda',
      name:'xianda',
      component:()=>import('@/components/server/falv'),
    },//安徽宪达律师事务所
    {
      path:'/daqian',
      name:'daqian',
      component:()=>import('@/components/server/daqian'),
    },//安徽大潜律师事务所
    {
      path:'/dong',
      name:'dong',
      component:()=>import('@/components/server/dong'),
    },//铜陵东方事务所
    {
      path:'/lan',
      name:'lan',
      component:()=>import('@/components/server/lan'),
    },//安徽蓝天会计事务所
    {
      path:'/shun',
      name:'shun',
      component:()=>import('@/components/server/shun'),
    },//顺位财税
    {
      path:'/fuda',
      name:'fuda',
      component:()=>import('@/components/server/fuda'),
    },//铜陵市富达财务代理有限公司
    {
      path:'/zhonghai',
      name:'zhonghai',
      component:()=>import('@/components/server/zhonghai'),
    },//中海
    {
      path:'/nanda',
      name:'nanda',
      component:()=>import('@/components/server/nanda'),
    },//南大
    {
      path:'/jinyuan',
      name:'jinyuan',
      component:()=>import('@/components/server/jinyuan'),
    },//金源
    {
      path:'/ruide',
      name:'ruide',
      component:()=>import('@/components/server/ruide'),
    },//瑞德
    {
      path:'/changjiang',
      name:'changjiang',
      component:()=>import('@/components/server/changjiang'),
    },//长江
    {
      path:'/taixiang',
      name:'taixiang',
      component:()=>import('@/components/server/taixiang'),
    },//泰祥
    {
      path:'/fengrui',
      name:'fengrui',
      component:()=>import('@/components/server/fengrui'),
    },//丰瑞
    {
      path:'/ailide',
      name:'ailide',
      component:()=>import('@/components/server/alide'),
    },//爱立德




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
