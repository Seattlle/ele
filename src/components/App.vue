<template>
    <div id="app" :class="{'hide-footer':$store.state.hidefooter,'search-page':$route.path=='/search','hide-header':$route.path=='/'}">

        <!--头部-->
        <header class="app-header" v-if="$route.path!='/'">
            <ele-title></ele-title>
        </header>

        <!--底部-->
        <footer class="app-footer">
            <footer-nav></footer-nav>
        </footer>

        <!--主体-->
        <section class="main">
            <div class="main-contaienr">
                <keep-alive>
                    <router-view name="default"></router-view>
                </keep-alive>
            </div>
        </section>

        <!--定位-->
        <transition name="slide" v-if="$route.path=='/'">
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
    import eleTitle from "./main/header.vue";
    import footerNav from "./main/footer.vue";
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
</script>
<style>
    @import "../css/base.css";
    @import "../../static/iconfont/iconfont.css";
    @import "../css/App.css";
</style>
