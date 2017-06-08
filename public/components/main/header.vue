<template>
    <div id="header-title">
        <a href="/" class="go-back" v-if="$route.path!='/'"></a>
        <h1>{{$store.state.currentPageName}}</h1>
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
        background:#fff;
        display: block;
        position: absolute;
        top:50%;
        left:50%;
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
</style>