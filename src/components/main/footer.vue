<template>
    <div id="footer">
        <ul class="nav-list">
            <li class="nav-item " :class="{'active':$route.path==='/'}">
                <router-link to="/">
                    <div class="nav-icon icon iconfont icon-eliaomo"></div>
                    <span>外卖</span>
                </router-link>
            </li>
            <li class="nav-item" :class="{'active':$route.path.indexOf('discover')>0}">
                 <router-link to="discover">
                     <div class="nav-icon icon iconfont icon-iconfaxian"></div>
                     <span>发现</span>
                 </router-link>
            </li>
            <li class="nav-item" :class="{'active':$route.path.indexOf('order')>0}">
                <router-link to="order">
                    <div class="nav-icon icon iconfont icon-dingdan"></div>
                    <span>订单</span>
                </router-link>
            </li>
            <li class="nav-item" :class="{'active':$route.path.indexOf('profile')>0}">
                <router-link to="profile">
                    <div class="nav-icon icon iconfont icon-wo"></div>
                    <span>我的</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<style>
    #footer{
        position: relative;
        width:100%;
        background:#fff;
        box-sizing:border-box;
        padding-top: .12rem;
        box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1);
    }
    #footer .nav-list{
        display:-ms-flex;
        display:-webkit-flex;
        display:flex;
        align-items:center;
    }
    .nav-list .nav-item{
        -webkit-flex:1;
        -webkit-box-flex:1;
        -ms-flex:1;
        flex:1;
        display: block;
        width:0;
        text-align:center;
    }
    .nav-list .nav-item span{
        display: block;
        color:#666;
        font-size:0.2rem;
    }
    .nav-list .nav-item.active span, .nav-list .nav-item.active .nav-icon{
        color:rgb(0, 151, 255);
    }
    .nav-list .nav-item .nav-icon{
        width:0.5rem;
        height:0.5rem;
        line-height:.5rem;
        margin:0 auto;
        background-repeat:no-repeat;
        background-size:100%;
        font-size:.42rem;
        color:#666;
    }
    .nav-item .nav-icon.icon-eliaomo{
        font-size:.58rem;
    }
</style>