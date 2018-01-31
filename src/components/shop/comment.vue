<template>
    <section class="shopComment">
        <section class="overview-container">
            <div class="overview-col1">
                <strong class="overview-overallScore">{{overallScore}}</strong>
                <div>综合评价</div>
                <p class="overview-small">高于周边商家32.2%</p>
            </div>
            <div class="overview-col2">
                <div class="overview-line">
                    <span>服务态度</span>
                    <span class="overview-lineContent">
                        <div class="rating-wrapper">
                            <div class="rating-max">
                                <i class="start">★</i>
                                <i class="start">★</i>
                                <i class="start">★</i>
                                <i class="start">★</i>
                                <i class="start">★</i>
                            </div>
                        </div>
                        <span class="overview-lineScore">{{serviceNum}}</span>
                    </span>
                </div>
                <div class="overview-line">
                    <span>菜品评价</span>
                    <span class="overview-lineContent">
                        <div class="rating-wrapper">
                            <div class="rating-max">
                                <i class="start">★</i>
                                <i class="start">★</i>
                                <i class="start">★</i>
                                <i class="start">★</i>
                                <i class="start">★</i>
                            </div>
                        </div>
                        <span class="overview-lineScore">{{goodNum}}</span>
                    </span>
                </div>
                <div class="overview-line">
                    <span>送达时间</span>
                    <span class="overview-lineContent overview-small">{{sendTime}}</span>
                </div>
            </div>
        </section>
        <section class="index-rateDetail">
            <ul class="commit-list">
                <comment-list v-for="comment in comments" :item="comment" :key="comment.id"></comment-list>
            </ul>
        </section>
    </section>
</template>
<script>
    import commentList from './commentList.vue'
    export default{
        props:["comments","overallScore","goodNum","sendTime","serviceNum"],
        data(){
            return { }
        },
        components:{
            commentList
        }
    }
</script>
<style>
   @import "../../css/comment.css";
</style>