<template>
    <div class="shop">
        <!--商家信息-->
        <section class="shopInfo">
            <div class="shop-header-main_1B2kH_0">
                <img class="shop-header-logo_3woDQ_0" :src="shop.shopInfo.head"> <div class="shop-header-content_3UjPs_0"><h2 class="shop-header-shopName_2QrHh_0" v-text="shop.shopInfo.name"></h2>
                <p class="shop-header-delivery_1mcTe_0">
                <span class="shop-header-deliveryItem_Fari3_0">
                     {{shop.shopInfo.sendMethods}}
                 </span>
                    <span class="shop-header-deliveryItem_Fari3_0">
                    {{shop.shopInfo.sendTime}}送达
                 </span>
                    <span class="shop-header-deliveryItem_Fari3_0">
                    配送费¥{{shop.shopInfo.sendPrice}}
                  </span>
                </p>
                <div class="shop-header-notice_2DzmG_0">
                    <span>公告：</span>
                    <span v-text="shop.shopInfo.gongGao"></span>
                </div>
            </div>
            </div>
        </section>

        <!--商品/单价-->
        <div class="shop-tab-container_3skq8_0">
            <router-link :to="{path:'/shopInfo',query:{shophash:$route.query.shophash}}" class="shop-tab-tab_r4SDi_0 " :class="{'shop-tab-active':$route.path.indexOf('comment')===-1}">
                    <span class="shop-tab-title_1crD1_0">商品</span>
            </router-link>
            <router-link :to="{path:'/shopInfo/comment',query:{shophash:$route.query.shophash}}" class="shop-tab-tab_r4SDi_0" :class="{'shop-tab-active':$route.path.indexOf('comment')>-1}">
                    <span class="shop-tab-title_1crD1_0">评价</span>
            </router-link>
        </div>
        <!--subpage-->
        <section class="subPage">
            <router-view></router-view>
        </section>
    </div>

</template>
<script>
    export default{
        data(){
            return{
                'shop':{
                    'shopInfo':{
                        'name':'放牛斑（滨北官任店）',
                        'head':'https://fuss10.elemecdn.com/f/db/4e3454fcacc68667ef8ee8832179cjpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/',
                        'sendMethods':'蜂鸟专送',
                        'sendTime':'31分钟',
                        'sendPrice':'15',
                        'gongGao':'各位放牛斑的粉丝，请在饮料下单的时候备注一下购买饮料的需求：1、甜度选择（多糖、正常糖、少糖、半塘、微糖、无糖）。2、放牛斑会员卡的手机号，以便我们帮您把积分积进去喔！3、选购加料（波霸、燕麦、红豆）的时候要备注清楚加料要加在哪一杯饮料中，确保我们给您的饮料是无误的，谢谢！'
                    }
                }
            }
        },
        mounted(){
            this.$store.commit('toggleFooter');
        }
    }
</script>
<style>
    @import url('../../css/shop.css');
</style>