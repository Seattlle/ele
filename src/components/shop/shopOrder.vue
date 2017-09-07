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
                    title.forEach(function (it) {
                        if(it.offsetTop>scrolled-50&&it.offsetTop<scrolled+50){
                            let menuId=it.dataset.menuid;
                            _this.$store.commit('scrollMenu',menuId);
                            _this.choseMenu=menuId;
                        }
                    })
                }
            },
            method(list,i){
                this.choseMenu=i;
                this.$store.commit('addOrder',{
                    'list':list,
                    'num':i
                });
                if(i>0){
                   this.flyball(event.clientX-event.target.clientWidth,event.clientY-event.target.clientHeight);
                }
                this.$store.commit('calculateMoney');
            },
            flyball(startX,startY){
                let flyball=document.createElement('div');
                flyball.className='flyball';
                flyball.style.top=startY+'px';
                flyball.style.left=startX+'px';

                document.getElementById('app').appendChild(flyball);

                let target=document.querySelector('.bottomNav-18KRG_0');
                let targetX=target.clientLeft+15;
                let targetY=screen.height-target.clientTop-40;

                let stepsX=(startX-targetX)/50;
                let stepsY=(targetY-startY)/50;

               moveBall();

                function moveBall(){
                    if (startX > targetX) {
                        startX -= stepsX;
                        flyball.style.left=startX+'px';
                        if(startY<targetY){
                            startY += stepsY;
                            flyball.style.top=startY+'px';
                        }
                        setTimeout(moveBall, 10)
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