<template>
    <section class="shopComment">
        <section class="overview-container">
            <div class="overview-col1">
                <strong class="overview-overallScore">4.6</strong>
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
                        <span class="overview-lineScore">4.7</span>
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
                        <span class="overview-lineScore">4.6</span>
                    </span>
                </div>
                <div class="overview-line">
                    <span>送达时间</span>
                    <span class="overview-lineContent overview-small">57分钟</span>
                </div>
            </div>
        </section>
        <section class="index-rateDetail">
            <ul class="commit-list">
                <comment-list v-for="comment in commentList" :item="comment" :key="comment.id"></comment-list>
            </ul>
        </section>
    </section>
</template>
<script>
    import commentList from './commentList.vue'
    export default{
        data(){
            return {
                'commentList':[{
                    'id':'10001',
                    'name':'啊拉萨',
                    'date':'2017-06-08 11:33:59'
                },{
                    'id':'10002',
                    'name':'啊拉萨',
                    'date':'2017-06-08 11:33:59'
                },{
                    'id':'10003',
                    'name':'啊拉萨',
                    'date':'2017-06-08 11:33:59'
                },{
                    'id':'10004',
                    'name':'啊拉萨',
                    'date':'2017-06-08 11:33:59'
                },{
                    'id':'10005',
                    'name':'啊拉萨',
                    'date':'2017-06-08 11:33:59'
                },{
                    'id':'10006',
                    'name':'啊拉萨',
                    'date':'2017-06-08 11:33:59'
                }]
            }
        },
        components:{
            commentList
        }
    }
</script>
<style>
   @import "../../css/comment.css";
</style>