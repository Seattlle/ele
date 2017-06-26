<template>
    <section class="order">
        <section class="no-log" v-if="!$store.state.user.isLogin">
            <img src="//github.elemecdn.com/eleme/fe-static/master/media/empty/error-load.png">
            <h3>登录后查看外卖订单</h3>
            <button @click="$router.push({path:'/login',query:{redirect:'order'}})">立即登录</button>
        </section>
    </section>
</template>
<style>
    .no-log{
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        margin-top:2rem;
    }
    .no-log img{
        display: block;
        width: 3rem;
    }
    .no-log h3 {
        margin: .24rem 0 .24rem;
        color: #6a6a6a;
        font-weight: 400;
        font-size: .36rem;
    }
    .no-log button {
        padding: .16rem 0;
        width: 3.2rem;
        border: none;
        border-radius: .053333rem;
        background-color: #56d176;
        color: #fff;
        text-align: center;
        font-size: .32rem;
        font-family: inherit;
        outline:none;
    }
</style>