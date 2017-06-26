<template>
    <div class="container">
        <div id="header-title"  v-if="$route.path=='/'">
            <span class="area-title" @click="$store.commit('toggleAreaSearch')">厦门市湖里区禾山路</span>
        </div>
        <router-link to="search" class="index-search-link"   v-if="$route.path=='/'">
            <input type="text" placeholder="搜索商家、商品" aria-label="搜索商家、商品" class="index-search">
        </router-link>

        <!--食物功能列表-->
        <section class="fooder">
            <fooder></fooder>
        </section>

        <h3 class="index-title">推荐商家</h3>

        <shop-list></shop-list>

    </div>
</template>
<script>
    import fooder from './fooder.vue'
    import shopList from './shopList.vue'

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

    .index-search-link{
        background:#0097ff;
        display: block;
        padding:0 .3rem .3rem .3rem;
    }
    .index-search-link:active{
        background:#0097ff;
    }
    .index-search{
        display: block;
        width: 100%;
        height: .7rem;
        line-height: .7rem;
        text-align: center;
        border-radius: .7rem;
        color: #333;
        font-size: .28rem;
        outline:none;
        border: none;
        box-shadow: 0 0.026667rem 0.066667rem 0 rgba(0,0,0,.2);
    }
    .area-title{
        float:left;
        text-align:left;
        width:40%;
        overflow:hidden;
        white-space:nowrap;
        -ms-text-overflow: ellipsis;
        text-overflow: ellipsis;
        padding-left:.3rem;
        font-size:.32rem;
    }

    .searchArea{
        position: fixed;
        top:0;
        bottom:0;
        width:100%;
        height:100%;
        z-index:100;
        background:#f4f4f4;
    }
    .searchArea .search-top{
        background-color:rgb(0, 151, 255);
        text-align: center;
        padding-bottom: .2rem;
    }
    .searchArea .search-hearder{
        height:0.8rem;
        line-height:0.8rem;
        color:#fff;
    }
    .searchArea .search-hearder .search-area-title{
        font-size:0.36rem;
    }
    .searchArea .search-area-input{
        width: 90%;
        height: .666666rem;
        line-height: .666666rem;
        border-radius: .733333rem;
        padding: 0 .32rem;
        font-size: .28rem;
        box-sizing:border-box;
    }

    .slide-enter-active, .slide-leave-active {
        transition: all 300ms;
    }
    .slide-enter, .slide-leave-active {
        opacity: 0;
        transform: translateX(100%);
    }
</style>