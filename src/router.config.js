import user from './components/user.vue'
import login from './components/login'
import regist from './components/regist'

export default{
	routes:[
		{path:'/user',
      component:user},
    {
      path: '/user/login',
      component: login
    },
    {
      path: '/user/regist',
      component: regist
    }
	]
}
