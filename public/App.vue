<template>
    <div id="app" :class="{'hide-footer':$store.state.hidefooter}">
        <header class="app-header">
            <ele-title></ele-title>
        </header>
        <footer class="app-footer">
            <footer-nav></footer-nav>
        </footer>
        <section class="main">
            <div class="main-contaienr">
                <keep-alive>
                    <router-view name="default"></router-view>
                </keep-alive>
            </div>
        </section>
    </div>
</template>
<script>
    import eleTitle from "./components/main/header.vue";
    import footerNav from "./components/main/footer.vue";
    export default{
        name:"app",
        components:{
            eleTitle,
            footerNav
        },
        watch: {
            // 监听 $route 为店内页设置不同的过渡效果
            "$route" (to, from) {
                    this.$store.commit("setPageName", to.name)
             }
        }
    }
    function resize(){
        var _width=window.innerWidth>750?750:window.innerWidth;
        var fontSize=_width/7.5;
        document.documentElement.style.fontSize=fontSize+"px";
    }
    resize();
    window.onresize=resize;
</script>
<style>
    @import "./css/base.css";
    @import "./css/App.css";
</style>
