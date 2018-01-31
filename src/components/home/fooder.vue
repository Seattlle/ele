<template>
    <div class="fooder-list-wrap" v-on:touchstart="touchLi(0)"  v-on:touchmove="touchLi(1)"  v-on:touchend="touchLi(2)">
        <ul class="fooder-list active">
            <li class="list-item" v-for="food in fooders">
                <a href="javascript:;">
                    <div class="list-img">
                        <img :src="food.img" :alt="food.title">
                    </div>
                    <span class="title">{{food.title}}</span>
                </a>
            </li>
        </ul>
        <ul class="fooder-list">
            <li class="list-item" v-for="food in fooders">
                <a href="javascript:;">
                    <div class="list-img">
                        <img :src="food.img" :alt="food.title">
                    </div>
                    <span class="title">{{food.title}}</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<style>
    .fooder-list-wrap{
        position: relative;
        overflow: hidden;
        height:3rem;
    }
    .fooder-list{
        position: absolute;
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
        width: 100%;
        display: none;
    }
    .fooder-list.active{
        -webkit-transform: translateX(0);
        transform: translateX(0);
        display: block;
    }
    .fooder-list .list-item{
        text-align:center;
        float:left;
        width:25%;
    }
    .fooder-list:after{
        content: '';
        display: block;
        clear: both;
        zoom: 1;
    }
    .fooder-list a{
        outline:none;
    }
    .fooder-list .list-img{
        width:1rem;
        height:1rem;
        display: inline-block;
    }
    .fooder-list img{width:100%;}

    .fooder-list .title{
        display: block;
        /*margin-top: .133333rem;*/
        color: #666;
        font-size: .26rem;
    }
</style>

<script>
    let startX=0,bodywidth=document.body.clientWidth;
    export default{
        props:['fooders'],
        data(){
            return{
            }
        },
        methods:{
            touchLi(index){
                let touch=event.changedTouches[0],endX=0;
                let fooder=document.querySelectorAll(".fooder-list");
                let length=fooder.length;

                if(index==0){
                   startX=touch.pageX;
                    for(let i=0;i<length;i++){
                        let item=fooder[i];
                        if(item.className.indexOf("active")<0){
                            item.style.display="block";
                        }
                    }
                   return false;
               }

                endX=touch.pageX;
                let dt=endX-startX;

               if(index==2){
                     if(Math.abs(dt)>bodywidth/2){
                         for(let i=0;i<length;i++){
                             let item=fooder[i];
                             if(item.className.indexOf("active")<0){
                                 item.className=item.className.trim()+" active";
                             }else{
                                 item.className=item.className.replace("active","");
                             }
                             item.style="";
                         }
                     }else{
                        for(let i=0;i<length;i++){
                           let item=fooder[i];
                           item.style="";
                       }
                     }

                   return false;
               }



               for(let i=0;i<length;i++){
                   let item=fooder[i];
                   if(item.className.indexOf("active")>=0){
                       item.style.transform="translate3d("+dt+"px,0,0)";
                   }else{
                       item.style.transform="translate3d("+(bodywidth+dt)+"px,0,0)";
                   }
               }
            }
        }
    }
</script>