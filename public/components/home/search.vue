<template>
    <section class="search">
        <section v-if="$store.state.search.historyData.length>0">
            <header class="history-title">
                <span>历史搜索</span> <i class="history-del">del</i>
            </header>
            <section class="history-list">
                <span class="history-item" v-for="item in $store.state.search.historyData">{{item.name}}</span>
            </section>
        </section>
        <section class="history-2IxHX_1" v-if="$store.state.search.hotData.length>0">
            <header class="history-title">热门搜索</header>
            <section class="history-list">
                <span class="history-item" v-for="item in $store.state.search.hotData">{{item.name}}</span>
            </section>
        </section>
    </section>
</template>
<script>
    export default{ }
</script>
<style>
    .history-2IxHX_1 {
        margin-top: .3rem;
    }
    .history-title{
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        font-size: .34rem;
        padding: .15rem .2rem;
        color: #666;
        font-weight: 700;
    }
    .history-list{
        padding: 0 .2rem .2rem;
    }
    .history-item {
        display: inline-block;
        border-radius: .066667rem;
        padding: .1rem .15rem;
        font-size: .26rem;
        margin-right: .2rem;
        margin-top: .2rem;
        color: #666;
        background-color: #f7f7f7;
    }
    .history-del{
        font-style: normal;
        font-size:.28rem;
        color: #999;
    }
</style>