<template>
    <section class="shoplist">
        <ul class="shop-list">
            <li class="shop-list-item" v-for="shop in indexShop">
                <router-link :to="{path:'shopInfo',query:{shophash:shop.id}}">
                    <div class="logo-container">
                        <img :src="shop.img" alt="" class="shop-logo">
                    </div>
                    <div class="index-main">
                        <section class="index-line">
                            <h3 class="shop-name">
                                <span>{{shop.name}}</span>
                            </h3>
                            <div class="index-supportWrap">
                                <i class="activity-activityIcon">保</i>
                                <i class="activity-activityIcon"> 票</i>
                                <i class="activity-activityIcon"> 准</i>
                            </div>
                        </section>
                        <section class="index-line">
                            <div class="index-rateWrap">
                                <div class="rating-max">
                                    <i class="start">★</i>
                                    <i class="start">★</i>
                                    <i class="start">★</i>
                                    <i class="start">★</i>
                                    <i class="start">★</i>
                                </div>
                                <span class="index-rate">{{shop.score}}</span>
                                <span>月售{{shop.sale}}单</span>
                            </div>
                            <div class="index-deliveryWrap">
                                <span class="index-iconDeliver">准时达</span>
                                <span class="index-iconDeliver">蜂鸟专送</span>
                            </div>
                        </section>
                        <section class="index-line">
                            <div class="index-rateWrap">
                               <span>{{shop.saleStart | toMoney}}起送&nbsp;/&nbsp;</span>
                                <span>配送费{{shop.sendPrice | toMoney}}&nbsp;/&nbsp;</span>
                                <span>{{shop.pingJun}}/人</span>
                            </div>
                            <div class="index-deliveryWrap">
                                <span class="index-distanceWrap">{{shop.juLi}}m&nbsp;/&nbsp;</span>
                                <span class="index-distanceWrap">{{shop.time}}</span>
                            </div>
                        </section>
                    </div>
                </router-link>
            </li>
        </ul>
    </section>
</template>
<script>
    export default {
        "props":["indexShop"]
    }

</script>
<style>
    @import "../../css/shopList.css";
</style>