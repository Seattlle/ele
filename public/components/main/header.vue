<template>
    <div id="header-title" :class="{'search-head':$route.path=='/search'}">
        <router-link to="/" class="go-back" v-if="$route.path!='/'"></router-link>
        <h1  v-if="$route.path!='/' && $route.path!='/search'">{{$store.state.currentPageName}}</h1>
        <span class="area-title"  v-if="$route.path=='/'" @click="$store.commit('toggleAreaSearch')">厦门市湖里区禾山路</span>
        <input type="text" class="search-input" placeholder="请输入商品名称" v-if="$route.path=='/search'">
    </div>
</template>

<style>
    #header-title{
        height:0.8rem;
        line-height:0.8rem;
        background-color:rgb(0, 151, 255);
        color:#fff;
        text-align: center;
    }
    .go-back{
        position: absolute;
        left:0;
        top:0;
        line-height: 0.8rem;
        width:0.8rem;
        height:.8rem;
        display: inline-block;
        font-size:0.6rem;
        color:#fff;
        outline:none;
    }
    .go-back:before,.go-back:after{
        content:'';
        width:.3rem;
        height:2px;
        display: block;
        position: absolute;
        top:50%;
        left:50%;
        background:#fff;
        margin-left:-.15rem;
        -webkit-transform-origin:left center;
        -moz-transform-origin:left center;
        -ms-transform-origin:left center;
        -o-transform-origin:left center;
        transform-origin:left center;
    }
    .go-back:before{
        -webkit-transform: rotate(-40deg);
        -moz-transform: rotate(-40deg);
        -ms-transform:rotate(-40deg);
        -o-transform:rotate(-40deg);
        transform: rotate(-40deg);
    }
    .go-back:after{
        -webkit-transform: rotate(40deg);
        -moz-transform: rotate(40deg);
        -ms-transform:rotate(40deg);
        -o-transform:rotate(40deg);
        transform: rotate(40deg);
    }
    .go-back:active{
        outline:none;
    }
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
</style>