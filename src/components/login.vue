<template>
    <main>
        <div class="login-header">
            <img src="../assets/images/login01.png" alt="">
        </div>
        <div class="login-main">
            <ul>
                <li>
                    <span><img src="../assets/images/账户.png" alt=""></span>
                    <input type="text" placeholder="请输入邮箱/个性账号">
                </li>
                <li>
                    <span><img src="../assets/images/密码.png" alt=""></span>
                    <input type="password" placeholder="请输入密码">
                </li>
            </ul>
        </div>
        <div class="login-main1">
            <a href="">忘记密码</a>
            <router-link to="/register">
                用户注册
            </router-link>
            
        </div>
        <p class="login-text1">登录即代表同意 <a href="">《用户服务协议》</a>和<a href="">《隐私政策》</a></p>
        <div class="login-section">
            <router-link to="/my"><input type="button" value="登录"></router-link>
            
        </div>
        <div class="login-footer">
            <img src="../assets/images/qq.png" alt="">
            <img src="../assets/images/手机.png" alt="">
            <img src="../assets/images/更多.png" alt="">
        </div>
    </main>
</template>
<style scoped>
    *{
        margin: 0px;
        padding: 0px;
        list-style: none;
    }
    .login-header{
        width: 100w;
        overflow: hidden;
        margin-bottom: 2vw;
    }
    .login-header img{
        width: 100vw;
    }
    .login-main{
        width: 100vw;
    }
    .login-main ul li{
        text-align: center;
        width: 80vw;
        margin: 0px auto;
        /* background-color: lime; */
        border-bottom:1px #61708f solid;
        margin-bottom: 5vw;
        display: flex;
    }
    .login-main ul li span{
        width: 10vw;
        padding: 2vw;
        background-color: white;
    }
    .login-main img{
        width: 6vw;
    }
    .login-main ul li input{
        width: 70vw;
        color: #61708f;
        outline:none;
        border: none;
        background-color: rgb(255, 255, 255)
        
    }
    .login-main1{
        width: 80vw;
        margin: 0px auto;
        display: flex;
        justify-content: space-between;
    }
     .login-main1 a{
        font-size: 12px;
        color: #0091d1;
        text-decoration: none;
     }
     .login-text1{
        width: 80vw;
        margin: 5vw auto;
        font-size: 12px;
     }
     .login-text1 a{
        font-size: 12px;
        color: #0091d1;
        text-decoration: none;
     }
     .login-section{
        width: 80vw;
        margin: 0px auto;
        margin-bottom: 10vw;
     }
     .login-section input{
        display: block;
        width: 80vw;
        height: 14vw;
        font-size: 16px;
        color: white;
        font-weight: 600;
        border:none;
        border-bottom-right-radius: 16vw;
        border-top-right-radius: 16vw;
        border-bottom-left-radius: 16vw;
        border-top-left-radius: 16vw;
        outline: none;
        text-align: center;
        background-color: #ee434c;
     }
     .login-footer{
        width: 60vw;
        display: flex;
        justify-content: space-between;
        margin: 0px auto;
     }
     .login-footer img{
        width: 15vw;
     }
</style>