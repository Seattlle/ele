<template>
    <li class="comment-item">
        <div class="comment-block-container">
            <small class="comment-block-time">{{item.date}}</small>
            <img class="comment-block-avatar" src="https://fuss10.elemecdn.com/f/2e/20a4300d40b97e98a5889591fb1f2jpeg.jpeg?imageMogr/format/webp/thumbnail/!60x60r/gravity/Center/crop/60x60/">
            <div class="comment-block-content">
                <h3 class="comment-block-username">{{item.name}}</h3>
                <div class="rating-wrapper overview-lineContent">
                    <div class="rating-max">
                        <i class="start">★</i>
                        <i class="start">★</i>
                        <i class="start">★</i>
                        <i class="start">★</i>
                        <i class="start">★</i>
                    </div>
                </div>
            </div>
        </div>
    </li>
</template>

<script>
    export default{
        props:['item']
    }
</script>

<style>
    .comment-item {
        padding: .26rem 0;
        border-bottom: 1px solid #ddd;
    }
    .comment-block-container{
        position: relative;
        padding-left: 1.2rem;
    }
    .comment-block-time{
        position: absolute;
        top: .3rem;
        right: 0;
        font-size: .26rem;
        color: #999;
    }
    .comment-block-avatar{
        position: absolute;
        top: 0;
        left: 0;
        width: .8rem;
        height: .8rem;
        border-radius: 50%;
    }
    .comment-block-content{
        font-size: .3rem;
    }
    .comment-block-username{
        font-size: .3rem;
        margin-top: 0;
        color: #666;
    }
</style>