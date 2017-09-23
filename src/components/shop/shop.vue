<template>
    <div class="shop">
        <!--商家信息-->
        <section class="shopInfo">
            <div class="shop-header-main_1B2kH_0">
                <img class="shop-header-logo_3woDQ_0" :src="shop.img"> <div class="shop-header-content_3UjPs_0"><h2 class="shop-header-shopName_2QrHh_0" v-text="shop.name"></h2>
                <p class="shop-header-delivery_1mcTe_0">
                <span class="shop-header-deliveryItem_Fari3_0">
                     {{shop.sendMethods}}
                 </span>
                    <span class="shop-header-deliveryItem_Fari3_0">
                    {{shop.time}}送达
                 </span>
                    <span class="shop-header-deliveryItem_Fari3_0">
                    配送费{{shop.sendPrice | toMoney}}
                  </span>
                </p>
                <div class="shop-header-notice_2DzmG_0">
                    <span>公告：</span>
                    <span v-text="shop.gongGao"></span>
                </div>
            </div>
            </div>
        </section>

        <!--商品/单价-->
        <div class="shop-tab-container_3skq8_0">
            <div class="shop-tab-tab_r4SDi_0 " :class="{'shop-tab-active':showOrder}" @click="showOrder=true">
                    <span class="shop-tab-title_1crD1_0">商品</span>
            </div>
            <div class="shop-tab-tab_r4SDi_0" :class="{'shop-tab-active':!showOrder}" @click="showOrder=false">
                    <span class="shop-tab-title_1crD1_0">评价</span>
            </div>
        </div>
        <!--subpage-->
        <section class="subPage">
           <shop-order v-show="showOrder"></shop-order>
           <comment v-show="!showOrder"></comment>
        </section>
    </div>

</template>
<script>
    import shopOrder from './shopOrder.vue';
    import comment from './comment.vue';
    export default{
        data(){
            return{
                showOrder:true,
                shop:{}
            }
        },
        watch: {
            // 监听 $route 为店内页设置不同的过渡效果
            "$route" (to, from) {
                let shopid=this.$route.query.shophash;
                let _this=this;
                this.$store.state.indexShopList.forEach(function (item) {
                    if(item.id==shopid){
                        _this.shop=item;
                        return false;
                    }
                })
            }
        },
        mounted(){
            this.$nextTick(function () {
                // this.$store.commit('getShopInfoById',this.$route.query.shophash);
            })
        },
        components:{
            shopOrder,comment
        }
    }
</script>
<style>
    @import url('../../css/shop.css');
</style>