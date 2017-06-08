<template>
    <section class="shoplist">
        <ul class="shop-list">
            <li class="shop-list-item" v-for="shop in $store.state.indexShopList">
                <router-link :to="{path:'shopInfo',query:{shophash:shop.id}}">
                    <div class="logo-container">
                        <img :src="shop.img" alt="" class="shop-logo">
                    </div>
                    <div class="index-main">
                        <section class="index-line">
                            <h3 class="shop-name">
                                <span>{{shop.name}}</span>
                            </h3>
                        </section>
                    </div>
                </router-link>
            </li>
        </ul>
    </section>
</template>
<script>

</script>
<style>
    @import "../../css/shopList.css";
</style>