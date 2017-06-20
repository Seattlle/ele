<template>
    <section class="login">
        <form action="#">
            <div class="MessageLogin">
                <input type="tel" maxlength="11" placeholder="手机号" v-model.trim="phone">
                <button class="CountButton" v-bind="{'disabled':phone.length!=11}">获取验证码</button>
            </div>
            <div class="MessageLogin">
                <input type="tel" maxlength="11" placeholder="验证码">
            </div>
        </form>

        <div class="login-panel">
            <p>温馨提示：未注册饿了么帐号的手机号，登录时将自动注册，且代表您已同意<a href="//h5.ele.me/service/agreement/" target="_blank">《用户服务协议》</a></p>
        </div>
        <button class="SubmitButton">
            登录
        </button>
        <div class="about-us"><span>关于我们</span></div>
    </section>
</template>
<script>
    export default{
        data(){
            return{
                phone:''
            }
        }
    }
</script>
<style>
    .login{
        margin-top: .4rem;
    }
    .login form{background:#fff;}
    .MessageLogin{
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding: 0 .426667rem;
        height: .9rem;
        border-bottom: 1px solid #ddd;
        background: #fff;
        font-size: .3rem;
    }
    .MessageLogin input {
        -webkit-box-flex: 1;
        -webkit-flex-grow: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        padding: .133333rem 0;
        height: .6rem;
        color: #333;
        line-height: .533333rem;
    }
    .CountButton{
        padding: 0;
        width: 2rem;
        height: .7rem;
        border-radius: .08rem;
        background: #0097ff;
        color: #fff;
        text-align: center;
        font-size: .3rem;
        line-height: .7rem;
        border:none;
    }
    .CountButton[disabled] {
        background: #ccc;
    }
    .login-panel{
        margin: .24rem auto -.266667rem;
        width: 6.9rem;
        color: #999;
        font-size: .28rem;
        line-height: .426667rem;
    }
    .SubmitButton{
        display: block;
        margin: .533333rem auto 0;
        padding: 0;
        width: 6.9rem;
        height: .8rem;
        border-radius: .053333rem;
        background: #4cd964;
        color: #fff;
        text-align: center;
        font-size: .3rem;
        line-height: .8rem;
        outline:none;
        border:none;
    }
    .about-us{
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        margin: .533333rem auto;
        color: #999;
        font-size: .28rem;
    }
</style>