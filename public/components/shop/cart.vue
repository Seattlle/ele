<template>
    <footer class="cartview ">
        <!--<div class="cartview-bIr0V" style="z-index: 10; display: none;"></div>-->
        <!--<div class="cartview-JFaw9 cartview-WUJTe" style="z-index: 11;">-->
            <!--<section class="discount-tip-1sl_7_0" style="display: none;">此处为原价，「去结算」享优惠哦</section>-->
            <!--<div class="cartview-37dYf"><span class="cartview-2IL0z">购物车</span> &lt;!&ndash;&ndash;&gt; <a href="javascript:"-->
                                                                                           <!--class="cartview-3ElqP">-->
                <!--<svg>-->
                    <!--<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-remove"></use>-->
                <!--</svg>-->
                <!--<span>清空</span></a></div>-->
            <!--<div class="entityList-yrs9v_0">&lt;!&ndash;&ndash;&gt;-->
                <!--<ul>-->
                    <!--<li class="entityList-1eODF_0"><span class="entityList-30u-R_0"><em class="entityList-2g5ra_0">极度可乐（瓶）</em>-->
                        <!--&lt;!&ndash;&ndash;&gt; &lt;!&ndash;&ndash;&gt; &lt;!&ndash;&ndash;&gt; <p class="entityList-1IZul_0"> </p></span> <span-->
                            <!--class="entityList-1vr8H_0"><span class="entityList-1XZvm_0">50</span></span> <span-->
                            <!--class="entityList-3cAE9_0"><span class="cartbutton-2tycR"><a href="javascript:"-->
                                                                                         <!--role="button"-->
                                                                                         <!--aria-label="删减商品"><svg><use-->
                            <!--xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-add"></use></svg></a> <span-->
                            <!--role="button" aria-label="已选5份" class="cartbutton-2OSi7">-->
      <!--5-->
    <!--</span> <a href="javascript:" role="button" aria-label="添加商品"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink"-->
                                                                            <!--xlink:href="#cart-minus"></use></svg></a></span></span>-->
                    <!--</li>-->
                    <!--<li class="entityList-1eODF_0"><span class="entityList-30u-R_0"><em class="entityList-2g5ra_0">百事可乐（瓶）</em>-->
                        <!--&lt;!&ndash;&ndash;&gt; &lt;!&ndash;&ndash;&gt; &lt;!&ndash;&ndash;&gt; <p class="entityList-1IZul_0"> </p></span> <span-->
                            <!--class="entityList-1vr8H_0"><span class="entityList-1XZvm_0">20</span></span> <span-->
                            <!--class="entityList-3cAE9_0"><span class="cartbutton-2tycR"><a href="javascript:"-->
                                                                                         <!--role="button"-->
                                                                                         <!--aria-label="删减商品"><svg><use-->
                            <!--xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-add"></use></svg></a> <span-->
                            <!--role="button" aria-label="已选2份" class="cartbutton-2OSi7">-->
      <!--2-->
    <!--</span> <a href="javascript:" role="button" aria-label="添加商品"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink"-->
                                                                            <!--xlink:href="#cart-minus"></use></svg></a></span></span>-->
                    <!--</li>-->
                <!--</ul> &lt;!&ndash;&ndash;&gt;</div>-->
        <!--</div>-->
        <div class="bottomNav-3XM6c_0" style="z-index: 11;">
            <span role="button" class="bottomNav-18KRG_0"></span>
            <div role="button" class="bottomNav-wzCAW_0">
                <p class="bottomNav-3Ak_E_0"><span>¥70</span> </p>
                <p class="bottomNav-3zqFz_0">配送费¥5</p></div>
            <a href="javascript:" role="button" class="bottomNav-1urxC_0">去结算</a>
        </div>
    </footer>
</template>
<style>
    .cartview{
        font-size: .3rem;
    }
    .bottomNav-3XM6c_0 {
        position: fixed;
        right: 0;
        bottom: 0;
        width:100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding-left: 1.35rem;
        background-color: #3d3d3f;
        height: .9rem;
        opacity: .95;
        max-width: 768px;
        margin: 0 auto;
        left: 0;
        box-sizing:border-box;
    }
    .bottomNav-18KRG_0 {
        position: absolute;
        left: .15rem;
        bottom: .25rem;
        width: 1rem;
        height: 1rem;
        box-sizing: border-box;
        border-radius: 100%;
        background-color: #3190e8;
        border: .133333rem solid #444;
        box-shadow: 0 -0.08rem 0.053333rem 0 rgba(0,0,0,.1);
        will-change: transform;
    }
    .bottomNav-18KRG_0.bottomNav-6KjUI_0 {
        background-image: -webkit-radial-gradient(circle,#363636 .626667rem,#444 0);
        background-image: radial-gradient(circle,#363636 .626667rem,#444 0);
    }
    .bottomNav-18KRG_0:before {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-size: .6rem;
        content: "";
    }
    .bottomNav-wzCAW_0 {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        display: block;
        width: 0;
    }
    .bottomNav-3Ak_E_0 {
        font-size: .32rem;
        line-height: normal;
        color: #fff;
    }
    .bottomNav-3zqFz_0 {
        color: #f5f5f5;
        font-size: .2rem;
    }
    .bottomNav-1urxC_0 {
        height: 100%;
        width: 2.5rem;
        background-color: #4cd964;
        color: #fff;
        text-align: center;
        text-decoration: none;
        font-size: .36rem;
        font-weight: 700;
        line-height: .9rem;
        outline:none;
    }
    .bottomNav-1urxC_0.bottomNav-9FCIh_0 {
        background-color: #535356;
    }
</style>