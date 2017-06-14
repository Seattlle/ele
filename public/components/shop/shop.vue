<template>
    <div class="shop">
        <!--商家信息-->
        <section class="shopInfo">
            <div class="shop-header-main_1B2kH_0">
                <img class="shop-header-logo_3woDQ_0" :src="$store.state.shop.head"> <div class="shop-header-content_3UjPs_0"><h2 class="shop-header-shopName_2QrHh_0" v-text="$store.state.shop.name"></h2>
                <p class="shop-header-delivery_1mcTe_0">
                <span class="shop-header-deliveryItem_Fari3_0">
                     {{$store.state.shop.sendMethods}}
                 </span>
                    <span class="shop-header-deliveryItem_Fari3_0">
                    {{$store.state.shop.sendTime}}送达
                 </span>
                    <span class="shop-header-deliveryItem_Fari3_0">
                    配送费{{$store.state.shop.sendPrice | toMoney}}
                  </span>
                </p>
                <div class="shop-header-notice_2DzmG_0">
                    <span>公告：</span>
                    <span v-text="$store.state.shop.gongGao"></span>
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
            return{}
        },
        mounted(){
            this.$store.commit('toggleFooter');
        }
    }
</script>
<style>
    @import url('../../css/shop.css');
</style>