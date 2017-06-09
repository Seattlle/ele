/**
 * Created by Seattle on 2017/6/6.
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

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
    component:resolve=>require(["./components/shop/shop.vue"],resolve),
    children:[
        {
            path:'',
            component:resolve=>require(["./components/shop/shopOrder.vue"],resolve)
        },
        {
            path:'comment',
            component:resolve=>require(["./components/shop/comment.vue"],resolve)
        }
    ]
}]

export default new Router({
    base:'/',
    routes
});