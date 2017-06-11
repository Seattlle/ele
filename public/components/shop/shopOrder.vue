<template>
    <section class="shop-main">
        <div class="menuview">
            <ul class="menucategory">
                <li class="menucategory-item" v-for="(item,index) in menuCategory" :class="{'active':!!item.checked||(choseMenu==undefined&&index==0)}"   @click="choseThis(item,index)">
                    <span class="menucategory-qwsbd">{{item.name}}</span>
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
        <cart></cart>
    </section>
</template>
<script>
    let ifOnScroll=false;
    import Vue from 'vue'
    import cart from './cart.vue'
    export default{
        data(){
            return {
                'menuCategory':[{
                    'id':'10001',
                    'name':'热销榜',
                    'descript':'大家喜欢吃，才叫真好吃。',
                    'category':[{
                        'id':'1001001',
                        'name':'冬（香）菇鸡腿肉满足餐（配外婆菜）',
                        'headImg':'https://fuss10.elemecdn.com/3/a8/2cdc1acf305611ebe21ac8428970djpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/',
                        'description':'冬菇鸡腿肉饭X1四季猪骨汤X1蒸蛋X1外婆菜X1',
                        'monthSale':'319',
                        'goodNum':'100',
                        'limit':'',
                        'price':'20'
                    },{
                        'id':'1001001',
                        'name':'冬（香）菇鸡腿肉满足餐（配外婆菜）',
                        'headImg':'https://fuss10.elemecdn.com/3/a8/2cdc1acf305611ebe21ac8428970djpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/',
                        'description':'冬菇鸡腿肉饭X1四季猪骨汤X1蒸蛋X1外婆菜X1',
                        'monthSale':'319',
                        'goodNum':'100',
                        'limit':'1',
                        'price':'20'
                    },{
                        'id':'1001001',
                        'name':'冬（香）菇鸡腿肉满足餐（配外婆菜）',
                        'headImg':'https://fuss10.elemecdn.com/3/a8/2cdc1acf305611ebe21ac8428970djpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/',
                        'description':'冬菇鸡腿肉饭X1四季猪骨汤X1蒸蛋X1外婆菜X1',
                        'monthSale':'319',
                        'goodNum':'100',
                        'limit':'1',
                        'price':'20'
                    }]
                },{
                    'id':'10002',
                    'name':'优惠',
                    'descript':'大家喜欢吃，才叫真好吃。',
                    'category':[{
                        'id':'1001001',
                        'name':'冬（香）菇鸡腿肉满足餐（配外婆菜）',
                        'headImg':'https://fuss10.elemecdn.com/3/a8/2cdc1acf305611ebe21ac8428970djpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/',
                        'description':'冬菇鸡腿肉饭X1四季猪骨汤X1蒸蛋X1外婆菜X1',
                        'monthSale':'319',
                        'goodNum':'100',
                        'limit':'1',
                        'price':'20'
                    },{
                        'id':'1001001',
                        'name':'冬（香）菇鸡腿肉满足餐（配外婆菜）',
                        'headImg':'https://fuss10.elemecdn.com/3/a8/2cdc1acf305611ebe21ac8428970djpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/',
                        'description':'冬菇鸡腿肉饭X1四季猪骨汤X1蒸蛋X1外婆菜X1',
                        'monthSale':'319',
                        'goodNum':'100',
                        'limit':'1',
                        'price':'20'
                    },{
                        'id':'1001001',
                        'name':'冬（香）菇鸡腿肉满足餐（配外婆菜）',
                        'headImg':'https://fuss10.elemecdn.com/3/a8/2cdc1acf305611ebe21ac8428970djpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/',
                        'description':'冬菇鸡腿肉饭X1四季猪骨汤X1蒸蛋X1外婆菜X1',
                        'monthSale':'319',
                        'goodNum':'100',
                        'limit':'1',
                        'price':'20'
                    }]
                },{
                    'id':'10003',
                    'name':'主餐主餐主餐',
                    'descript':'大家喜欢吃，才叫真好吃。',
                    'category':[{
                        'id':'1001001',
                        'name':'冬（香）菇鸡腿肉满足餐（配外婆菜）',
                        'headImg':'https://fuss10.elemecdn.com/3/a8/2cdc1acf305611ebe21ac8428970djpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/',
                        'description':'冬菇鸡腿肉饭X1四季猪骨汤X1蒸蛋X1外婆菜X1',
                        'monthSale':'319',
                        'goodNum':'100',
                        'limit':'1',
                        'price':'20'
                    },{
                        'id':'1001001',
                        'name':'冬（香）菇鸡腿肉满足餐（配外婆菜）',
                        'headImg':'https://fuss10.elemecdn.com/3/a8/2cdc1acf305611ebe21ac8428970djpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/',
                        'description':'冬菇鸡腿肉饭X1四季猪骨汤X1蒸蛋X1外婆菜X1',
                        'monthSale':'319',
                        'goodNum':'100',
                        'limit':'1',
                        'price':'20'
                    },{
                        'id':'1001001',
                        'name':'冬（香）菇鸡腿肉满足餐（配外婆菜）',
                        'headImg':'https://fuss10.elemecdn.com/3/a8/2cdc1acf305611ebe21ac8428970djpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/',
                        'description':'冬菇鸡腿肉饭X1四季猪骨汤X1蒸蛋X1外婆菜X1',
                        'monthSale':'319',
                        'goodNum':'100',
                        'limit':'1',
                        'price':'20'
                    }]
                }],
                'choseMenu':undefined
            }
        },
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
                this.menuCategory.forEach(function(item){
                    if(typeof item.checked=='undefined'){
                        Vue.set(item,'checked',false);
                    }else{
                        item.checked=false;
                    }
                });
                thisItem.checked=true;
                this.choseMenu=thisItem;
                //平滑滚动
                this.jump(index)
            },
            jump(index){
                let jump = document.querySelectorAll('.category-title')
                // 获取需要滚动的距离
                let total = jump[index].offsetTop;
                let distance = document.getElementById("container").scrollTop
                // 平滑滚动，时长500ms，每10ms一跳，共50跳
                let step = total / 50
                if (total > distance) {
                    smoothDown()
                } else {
                    let newTotal = distance - total
                    step = newTotal / 50
                    smoothUp()
                }
                function smoothDown () {
                    if (distance < total) {
                        distance += step
                        document.getElementById("container").scrollTop=distance;
                        setTimeout(smoothDown, 10)
                    } else {
                        document.getElementById("container").scrollTop=total;
                        ifOnScroll=false;
                    }
                }
                function smoothUp () {
                    if (distance > total) {
                        distance -= step
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
                    var _this=this;
                    title.forEach(function (it) {
                        if(it.offsetTop>scrolled-20&&it.offsetTop<scrolled+20){
                            let menuId=it.dataset.menuid;
                            _this.menuCategory.forEach(function(items){
                                if(items.id==menuId){
                                    if(typeof items.checked=='undefined'){
                                        Vue.set(items,'checked',true);
                                    }else{
                                        items.checked=true;
                                    }
                                    _this.choseMenu=items;
                                }else{
                                    if(typeof items.checked=='undefined'){
                                        Vue.set(items,'checked',false);
                                    }else{
                                        items.checked=false;
                                    }
                                }
                            });
                        }
                    })
                }
            },
            method(list,i){
                if(typeof list.selectNum=='undefined'){
                    Vue.set(list,'selectNum',i);
                }else{
                    list.selectNum+=i;
                }
                if(i>0){
                   this.flyball(event.clientX-event.target.clientWidth,event.clientY-event.target.clientHeight);
                }
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
//                        flyball.style.top=startY+'px';
//                        flyball.style.left=startX+'px';
                    }
                }
            }
        }
    }
</script>
<style>
    @import "../../css/shopOrder.css";
</style>