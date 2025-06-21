import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import banjijianyi from '@/views/modules/banjijianyi/list'
    import jiangxuejintijiao from '@/views/modules/jiangxuejintijiao/list'
    import xuesheng from '@/views/modules/xuesheng/list'
    import xuefenjianyi from '@/views/modules/xuefenjianyi/list'
    import kechengchengji from '@/views/modules/kechengchengji/list'
    import ketangdianming from '@/views/modules/ketangdianming/list'
    import jiaoshi from '@/views/modules/jiaoshi/list'
    import jiafentijiao from '@/views/modules/jiafentijiao/list'
    import kechengxinxi from '@/views/modules/kechengxinxi/list'
    import forum from '@/views/modules/forum/list'
    import jiafenshenqing from '@/views/modules/jiafenshenqing/list'
    import tongzhigonggao from '@/views/modules/tongzhigonggao/list'
    import messages from '@/views/modules/messages/list'
    import jiangxuejinshenqing from '@/views/modules/jiangxuejinshenqing/list'
    import config from '@/views/modules/config/list'
    import biyeyaoqiu from '@/views/modules/biyeyaoqiu/list'
    import yiqingdaka from '@/views/modules/yiqingdaka/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '校园资讯',
        component: news
      }
      ,{
	path: '/banjijianyi',
        name: '班级建议',
        component: banjijianyi
      }
      ,{
	path: '/jiangxuejintijiao',
        name: '奖学金提交',
        component: jiangxuejintijiao
      }
      ,{
	path: '/xuesheng',
        name: '学生',
        component: xuesheng
      }
      ,{
	path: '/xuefenjianyi',
        name: '学分建议',
        component: xuefenjianyi
      }
      ,{
	path: '/kechengchengji',
        name: '课程成绩',
        component: kechengchengji
      }
      ,{
	path: '/ketangdianming',
        name: '课堂点名',
        component: ketangdianming
      }
      ,{
	path: '/jiaoshi',
        name: '教师',
        component: jiaoshi
      }
      ,{
	path: '/jiafentijiao',
        name: '加分提交',
        component: jiafentijiao
      }
      ,{
	path: '/kechengxinxi',
        name: '课程信息',
        component: kechengxinxi
      }
      ,{
	path: '/forum',
        name: '论坛交流',
        component: forum
      }
      ,{
	path: '/jiafenshenqing',
        name: '加分申请',
        component: jiafenshenqing
      }
      ,{
	path: '/tongzhigonggao',
        name: '通知公告',
        component: tongzhigonggao
      }
      ,{
	path: '/messages',
        name: '留言板管理',
        component: messages
      }
      ,{
	path: '/jiangxuejinshenqing',
        name: '奖学金申请',
        component: jiangxuejinshenqing
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/biyeyaoqiu',
        name: '毕业要求',
        component: biyeyaoqiu
      }
      ,{
	path: '/yiqingdaka',
        name: '疫情打卡',
        component: yiqingdaka
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
