<template>
    <!--个人信息组件-->
    <section class="userInfo" @click="$router.push('/login')">
       <div class="profile-header">
           <img src="../../images/head.png" alt="">
       </div>
        <div class="profile-info">
            <p class="profile-tips">登录/注册</p>
            <p class="profile-1UP72">
                <span>登录后享受更多特权</span>
            </p>
        </div>
    </section>
</template>
<script>
    export default {}
</script>

<style>
    @import "../../css/profile.css";
</style>