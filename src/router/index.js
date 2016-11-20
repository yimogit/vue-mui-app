import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../pages/home'

Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'hash',//hash 打包需要使用hash
    routes: [
        {name:'/', path: '/',  component: home },
        {name:'home', path: '/home',  component: home },
        {name:'webpage', path: '/webpage/:openUrl',  component: require('../pages/webpage')},
        {name:'list', path: '/list/:type',  component: require('../pages/list') },
        {name:'detail', path: '/detail/:type/:id',  component: require('../pages/detail') },
        {name:'setting', path: '/setting',  component: require('../pages/setting') }
        
    ]
})

router.beforeEach((to, from, next) => {
    console.log(`路由到：${to.path}`)
    next();
});

router.afterEach(route => {
    
})
export default router