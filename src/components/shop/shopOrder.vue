<template>
    <section class="shop-main">
        <div class="menuview">
            <ul class="menucategory">
                <li class="menucategory-item" v-for="(item ,index) in $store.state.shop.menuCategory" :class="{'active':!!item.checked||($store.state.shop.choseMenu==undefined&&index==0)}"   @click="choseThis(item,index)">
                    <span class="menucategory-qwsbd">{{item.name}}</span>
                    <span class="menucategory-28BIn" v-if="item.selectNum!=undefined&&item.selectNum>0">{{item.selectNum}}</span>
                </li>
            </ul>
            <section id="container" class="container-menuview">
                <template v-for="cate in $store.state.shop.menuCategory">
                    <div class="category-title" :data-menuid="cate.id">
                        <strong class="category-name">{{cate.name}}</strong>
                        <span  class="category-description">{{cate.descript}}</span>
                    </div>
                    <ul class="categoryList">
                        <li class="category-item" v-for="list in cate.category">
                            <span class="foodimg">
                                <img  :src="list.headImg">
                            </span>
                            <section class="foodinfo">
                                <div class="foodtitle">
                                    <span>{{list.name}}</span>
                                </div>
                                <p class="fooddescription">{{list.description}}</p>
                                <p class="foodsales">
                                    <span >月售{{list.monthSale}}份</span>
                                    <span >好评率{{list.goodNum}}%</span>
                                </p>
                                <p class="foodactivity" v-if="list.limit!=''">
                                    <span  >限{{list.limit}}份</span>
                                </p>
                                <strong class="foodprice">
                                    <span >{{list.price}}</span>
                                </strong>
                                <div class="cartbutton">
                                <span>
                                    <span class="cartbutton-2tycR">
                                        <a href="javascript:" role="button" class="cut" @click="method(list,-1)" v-if="list.selectNum>0">-</a>
                                        <span role="button" class="cartbutton-2OSi7" v-if="list.selectNum>0">{{list.selectNum}}</span>
                                        <a href="javascript:" role="button" class="add" @click="method(list,1)">+</a>
                                    </span>
                                </span>
                                </div>
                            </section>
                        </li>
                    </ul>
                </template>
            </section>
        </div>
        <cart></cart>
    </section>
</template>
<script>
    let ifOnScroll=false;
    import Vue from 'vue'
    import cart from './cart.vue'
    export default{
        components:{
            cart
        },
        data(){
            return { }
        },
        mounted(){
            this.$nextTick(function () {
                document.getElementById("container").addEventListener('scroll', this.onScroll)
            })
        },
        methods:{
            choseThis(thisItem,index) {
                ifOnScroll=true;
                this.choseMenu=thisItem;
                this.$store.commit('choseMenu',thisItem);
                //平滑滚动
                this.jump(index)
            },
            jump(index){
                let jump = document.querySelectorAll('.category-title');
                // 获取需要滚动的距离
                let total = jump[index].offsetTop;
                let distance = document.getElementById("container").scrollTop;
                // 平滑滚动，时长500ms，每10ms一跳，共50跳
                let step = total / 50;
                if (total > distance) {
                    smoothDown()
                } else {
                    let newTotal = distance - total;
                    step = newTotal / 50;
                    smoothUp()
                }
                function smoothDown () {
                    if (distance < total) {
                        distance += step;
                        document.getElementById("container").scrollTop=distance;
                        setTimeout(smoothDown, 10)
                    } else {
                        document.getElementById("container").scrollTop=total;
                        ifOnScroll=false;
                    }
                }
                function smoothUp () {
                    if (distance > total) {
                        distance -= step;
                        document.getElementById("container").scrollTop=distance;
                        setTimeout(smoothUp, 10)
                    } else {
                        document.getElementById("container").scrollTop=total;
                        ifOnScroll=false;
                    }
                }
            },
            onScroll(){
                if(!ifOnScroll){
                    let scrolled = document.getElementById("container").scrollTop;
                    let title=document.querySelectorAll('.category-title');
                    let _this=this;
                    for(let i=0;i<title.length;i++){
                        if(title[i].offsetTop>scrolled-50&&title[i].offsetTop<scrolled+50){
                            let menuId=title[i].dataset.menuid;
                            _this.$store.commit('scrollMenu',menuId);
                            _this.choseMenu=menuId;
                        }
                    }
//                    title.forEach(function (it) {
//                        _this.menuTop+=it.offsetTop+";";
//                        if(it.offsetTop>scrolled-50&&it.offsetTop<scrolled+50){
//                            let menuId=it.dataset.menuid;
//                            _this.$store.commit('scrollMenu',menuId);
//                            _this.choseMenu=menuId;
//                        }
//                    })
                }
            },
            method(list,i){
                this.choseMenu=i;
                this.$store.commit('addOrder',{
                    'list':list,
                    'num':i
                });
                if(i>0){
                    let  startX=event.clientX-event.target.clientWidth;
                    let  startY=event.clientY-event.target.clientHeight;

                    let target=document.querySelector('.bottomNav-18KRG_0');
                    let middle=target.offsetWidth/2;
                    let targetX=target.clientLeft+middle;
                    let targetY=target.offsetParent.offsetTop+target.offsetTop-middle;

                   this.flyball(startX,startY,targetX,targetY);
                }
                this.$store.commit('calculateMoney');
            },
            //购物车抛物线  开始坐标  结束坐标
            flyball(startX,startY,targetX,targetY){
                let flyball=document.createElement('div');
                flyball.className='flyball';
                flyball.style.left=startX+'px';
                flyball.style.top=startY+'px';
                document.getElementById('app').appendChild(flyball);

                let stepsX=(startX-targetX)/50;

                let nStartY=startY;
                let nStartX=startX;
                let nEndX=targetX;
                let nEndY=targetY;
                let nTopX=0.8*nStartX;
                let nTopY=0.9*nStartY;

                let a = ((nStartY - nEndY) * (nStartX - nTopX) - (nStartY - nTopY) * (nStartX - nEndX)) / ((nStartX * nStartX - nEndX * nEndX) * (nStartX - nTopX) - (nStartX * nStartX - nTopX * nTopX) * (nStartX - nEndX));
                let b = ((nEndY - nStartY) - a * (nEndX * nEndX - nStartX * nStartX)) / (nEndX - nStartX);
                let c = nStartY - a * nStartX * nStartX - b * nStartX;

                moveBall();
                function moveBall(){
                    if (startX > targetX) {
                        startX -= stepsX;
                        let y = a * startX * startX + b * startX + c;

                        flyball.style.left=startX+'px';
                        flyball.style.top=y+'px';
                        setTimeout(moveBall, 20)
                    } else {
                        document.getElementById('app').removeChild(flyball);
                    }
                }
            }
        }
    }
</script>
<style>
    @import "../../css/shopOrder.css";
</style>