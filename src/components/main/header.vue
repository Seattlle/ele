<template>
    <div id="header-title" :class="{'search-head':$route.path=='/search'}">
        <a href="javascript:;" class="go-back" @click="$router.go(-1)"></a>
        <h1  v-if="$route.path!='/search'">{{$store.state.currentPageName}}</h1>
        <input type="text" class="search-input" placeholder="请输入商品名称" v-if="$route.path=='/search'">
    </div>
</template>

<style>
    #header-title h1{
        font-size:0.36rem;
    }
    #header-title.search-head{
        background:#fff;
        text-align: left;
        display: flex;
        padding: .2rem 0;
    }
    .search-head .go-back{
        top:.2rem;
    }
    .search-head .go-back:before,.search-head .go-back:after{
        background:#999;
    }
    .search-input{
        -webkit-box-flex: 1;
        -webkit-flex-grow: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        border-radius: .4rem;
        background-color: #f8f8f8;
        padding: .1rem .4rem;
        font-size: .3rem;
        color: #666;
        margin-left:.8rem;
        margin-right:.3rem;
    }
</style>