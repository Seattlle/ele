<template>
    <div class="container">
        <!--食物功能列表-->
        <section class="fooder">
            <fooder></fooder>
        </section>

        <h3 class="index-title">推荐商家</h3>

        <shop-list></shop-list>

    </div>
</template>
<script>
    import fooder from '../module/fooder.vue'
    import shopList from '../module/shopList.vue'

    export default{
        name:'homePage',
        components:{
            fooder,shopList
        }
    }
</script>
<style>
    .fooder{background-color:#fff;padding-bottom:0.2rem;}
    .index-title {
        margin-top: .266667rem;
        line-height: .7rem;
        font-weight: 600;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
        font-size: .3rem;
        padding-left: .3rem;
        background-color:#fff;
    }
</style>