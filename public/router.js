/**
 * Created by Seattle on 2017/6/6.
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const routes=[{
    path:'/',
    name:'饿了么-首页',
    component:resolve=>require(["./components/home/homePage.vue"],resolve)
},{
    path:'/profile',
    name:'我的',
    component:resolve=>require(["./components/profile/userInfo.vue"],resolve)
},{
    path:'/shopInfo',
    name:'',
    component:resolve=>require(["./components/shop/shop.vue"],resolve)
},{
    path:'/search',
    name:'搜索',
    component:resolve=>require(["./components/home/search.vue"],resolve)
}];

export default new Router({
    base:'/',
    routes
});