<template>
    <footer class="cartview ">
        <div class="bottomNav-3XM6c_0" style="z-index: 11;">
            <span role="button" class="bottomNav-18KRG_0" :attr-quantity="num"></span>
            <div role="button" class="bottomNav-wzCAW_0">
                <p class="bottomNav-3Ak_E_0"><span>{{money | toMoney}}</span> </p>
                <p class="bottomNav-3zqFz_0">配送费{{sendprice | toMoney}}</p></div>
            <a href="javascript:" role="button" class="bottomNav-1urxC_0">去结算</a>
        </div>
    </footer>
</template>
<script>
    export default{
        props:['money','sendprice','num']
    }
</script>
<style>
    @import "../../css/cart.css";
</style>