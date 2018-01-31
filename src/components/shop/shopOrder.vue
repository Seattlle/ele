<template>
    <section class="shop-main">
        <div class="menuview">
            <ul class="menucategory">
                <li class="menucategory-item" v-for="(item ,index) in menuCategory" :class="{'active':!!item.checked||(choseMenu&&index==0)}"   @click="choseThis(item,index)">
                    <span class="menucategory-qwsbd">{{item.name}}</span>
                    <span class="menucategory-28BIn" v-if="item.selectNum!=undefined&&item.selectNum>0">{{item.selectNum}}</span>
                </li>
            </ul>
            <section id="container" class="container-menuview">
                <template v-for="cate in menuCategory">
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
        <cart :total-money="totalMoney" :send-price="sendPrice" :total-num="totalNum"></cart>
    </section>
</template>
<script>
    let ifOnScroll=false;
    import Vue from 'vue'
    import cart from './cart.vue'
    export default{
        props:["menuCategory","sendPrice"],
        components:{
            cart
        },
        data(){
            return {
                choseMenu:true,
                totalMoney:0,
                totalNum:0,
                selectedItem:[]
            }
        },
        watch:{
            '$route':'reflash'
        },
        mounted(){
            this.$nextTick(function () {
                document.getElementById("container").addEventListener('scroll', this.onScroll)
            })
        },
        methods:{
            choseThis(thisItem,index) {
                ifOnScroll=true;
                this.choseMenu=false;

                this.menuCategory.forEach(function(item){
                    if(thisItem==item){
                        if(typeof item.checked=='undefined'){
                            Vue.set(item,'checked',true);
                        }else{
                            item.checked=true;
                        }
                    }else{
                        if(typeof item.checked=='undefined'){
                            Vue.set(item,'checked',false);
                        }else{
                            item.checked=false;
                        }
                    }
                });

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
                            _this.scrollChoseMenu(menuId)
                            _this.choseMenu=false;
                        }
                    }
                }
            },
            scrollChoseMenu(menuId){
                this.menuCategory.forEach(function(items){
                    if(items.id==menuId){
                        if(typeof items.checked=='undefined'){
                            Vue.set(items,'checked',true);
                        }else{
                            items.checked=true;
                        }
                    }else{
                        if(typeof items.checked=='undefined'){
                            Vue.set(items,'checked',false);
                        }else{
                            items.checked=false;
                        }
                    }
                });
            },
            method(list,i){
                if(typeof list.selectNum=='undefined'){
                    Vue.set(list,'selectNum',i);
                }else{
                    list.selectNum+=i;
                }
                if(i>0){
                    this.addBall(event)
                }
                this.calculateMoney();
            },
            addBall(event){
                let  startX=event.clientX-event.target.clientWidth;
                let  startY=event.clientY-event.target.clientHeight;

                let target=document.querySelector('.bottomNav-18KRG_0');
                let middle=target.offsetWidth/2;
                let targetX=target.clientLeft+middle;
                let targetY=target.offsetParent.offsetTop+target.offsetTop-middle;

                this.flyball(startX,startY,targetX,targetY);
            },
            calculateMoney(){
                let _this=this;
                this.selectedItem=[];
                this.totalMoney=0;
                this.totalNum=0;
                this.menuCategory.forEach(function (menuType) {
                    let num=0;
                    menuType.category.forEach(function (item) {
                        if(item.selectNum>0){
                            _this.selectedItem.push(item);
                            _this.totalMoney+=item.selectNum*item.price;
                            num+=item.selectNum;
                        }
                    });
                    Vue.set(menuType,'selectNum',num);
                    _this.totalNum+=num;
                });

                let button=document.getElementById("bottomNav_Cart");
                if(_this.totalNum>0){
                    if(button.className.indexOf("bottomNav_right")<0)
                        button.className=button.className.trim()+" bottomNav_right";
                }else{
                    button.className=button.className.trim().replace("bottomNav_right","");
                }
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
                        let bottom=document.getElementById("bottomNav_Cart");
                        bottom.className=bottom.className.replace("bottom_shake","")+" bottom_shake";
                        setTimeout(function () {
                            bottom.className=bottom.className.replace("bottom_shake","");
                        },300)
                    }
                }
            },
            reflash(){
                let path=this.$route.path;
                if(path.indexOf('shopInfo')>=0){
                    this.totalMoney=0;
                    this.choseMenu=true;
                    this.totalNum=0;
                    this.selectedItem=[];
                    document.getElementById("bottomNav_Cart").className="bottomNav-18KRG_0";
                }
            }
        }
    }
</script>
<style>
    @import "../../css/shopOrder.css";
</style>