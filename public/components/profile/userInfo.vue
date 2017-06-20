<template>
    <!--个人信息组件-->
    <section class="user">
        <section class="userInfo" @click="$router.push('/login')">
            <div class="profile-header">
                <img src="../../images/head.png" alt="">
            </div>
            <div class="profile-info">
                <p class="profile-tips">登录/注册</p>
                <p class="profile-1UP72">
                    <span>登录后享受更多特权</span>
                </p>
                <i class="icon to-right"></i>
            </div>
        </section>

        <div class="index-1G7HV_0">
            <router-link to="/profile/benefit/" class="index-1ryAh">
                <p>
                </p>
                <p class="index-3S6cZ_0">优惠</p>
            </router-link>
            <router-link to="/profile/benefit/" class="index-1ryAh">
                <p>
                </p>
                <p class="index-3S6cZ_0">积分</p>
            </router-link>
        </div>

        <section class="profile-1reTe">
        <router-link to="/order/#/" class="index-2MEEn_0">
            <aside class="index-161Mm_0">
            </aside>
            <div class="index-yydpu_0">
                我的订单
                <span class="index-3Z8It_0">
                        <i class="icon to-right"></i>
                    </span>
            </div>
        </router-link>
        <router-link to="/gift/" class="index-2MEEn_0">
            <aside class="index-161Mm_0">
            </aside>
            <div class="index-yydpu_0">
                积分商城
                <span class="index-3Z8It_0">
                        <i class="icon to-right"></i>
                    </span>
            </div>
        </router-link>
        <router-link to="/vipcard/" class="index-2MEEn_0">
            <aside class="index-161Mm_0">
            </aside>
            <div class="index-yydpu_0">
                饿了么会员卡
                <span class="index-3Z8It_0">
                        <i class="icon to-right"></i>
                    </span>
            </div>
        </router-link>
    </section>
        <section class="profile-1reTe">
            <router-link to="/service/" class="index-2MEEn_0">
                <aside class="index-161Mm_0">
                </aside>
                <div class="index-yydpu_0">
                    服务中心
                    <span class="index-3Z8It_0">
                        <i class="icon to-right"></i>
                    </span>
                </div>
            </router-link>
            <router-link to="/download/" class="index-2MEEn_0">
                <aside class="index-161Mm_0">
                </aside>
                <div class="index-yydpu_0">
                    下载饿了么APP
                    <span class="index-3Z8It_0">
                        <i class="icon to-right"></i>
                    </span>
                </div>
            </router-link>
        </section>
    </section>
</template>
<script>
    export default {}
</script>

<style>
    @import "../../css/profile.css";
</style>