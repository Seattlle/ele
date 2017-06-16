<template>
    <div id="app" :class="{'hide-footer':$store.state.hidefooter,'search-page':$route.path=='/search'}">
        <header class="app-header">
            <ele-title></ele-title>
        </header>

        <footer class="app-footer">
            <footer-nav></footer-nav>
        </footer>

        <section class="main">
            <div class="main-contaienr">
                <router-link to="search" class="index-search-link"   v-if="$route.path=='/'">
                    <input type="text" placeholder="搜索商家、商品" aria-label="搜索商家、商品" class="index-search">
                </router-link>
                <keep-alive>
                    <router-view name="default"></router-view>
                </keep-alive>
            </div>
        </section>

        <transition name="slide">
            <section class="searchArea" v-show="$store.state.showSearchArea">
                <div class="search-top">
                    <header class="search-hearder">
                        <span class="go-back" @click="$store.commit('toggleAreaSearch')"></span>
                        <div class="search-area-title">选择地址</div>
                    </header>
                    <input type="search" placeholder="请输入地址" autofocus="autofocus" class="search-area-input">
                </div>
            </section>
        </transition>
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
                    this.$store.commit("setPageName", to.name);
                    if(to.path.indexOf('search')>-1||to.path.indexOf('shopInfo')>-1){
                        this.$store.commit('hideFooter');
                    }else if(this.$store.state.hidefooter){
                        this.$store.commit('showFooter');
                    }
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
