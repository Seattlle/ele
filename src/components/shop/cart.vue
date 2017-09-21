<template>
    <footer class="cartview ">
        <div class="bottomNav-3XM6c_0" style="z-index: 11;">
            <span role="button" class="bottomNav-18KRG_0 " id="bottomNav_Cart" :attr-quantity="$store.state.shop.totalNum"></span>
            <div role="button" class="bottomNav-wzCAW_0">
                <p class="bottomNav-3Ak_E_0"><span>{{$store.state.shop.totalMoney | toMoney}}</span> </p>
                <p class="bottomNav-3zqFz_0">配送费{{$store.state.shop.sendPrice | toMoney}}</p></div>
            <a href="javascript:" role="button" class="bottomNav-1urxC_0">去结算</a>
        </div>
    </footer>
</template>
<script>

</script>
<style>
    @import "../../css/cart.css";
</style>