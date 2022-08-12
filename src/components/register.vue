<template>
<main>
    <div class="register-header">
    <router-link to='/'><a> <img src="../assets/images/向左箭头.png" alt=""> 手机注册</a></router-link>
    </div>
    <div class="register-section">
        <div class="register-input1">
            <span>中国大陆</span>
        </div>
        <div class="register-input2">
            +86<input type="phone" placeholder="请输入手机号">
        </div>        
        <div class="register-input3">
            <router-link to="/login">
                <input type="button" value="获取手机验证码">
            </router-link>
            
        </div>        
        
        
        <p class="register-text1"><input type="checkbox" name="" id=""> 我同意 <a href="">《用户服务协议》</a>和<a href="">《隐私政策》</a></p>
    </div>
</main>
</template>
<style scoped>
.register-header{
    padding: 8px;
    border-bottom: 1px #c7c4c4 solid;
}
.register-header a{
    text-decoration: none;
    color:black;
}
.register-header a img{
    width: 15px;
    height: 15px;
    position: relative;
    top:2px
}
.register-section{
    width: 90vw;
    padding: 15vw 0vw;
    margin: 0px auto;
}
.register-input1{
    background-color: #f6f7f9;
    line-height: 10vw;
    font-size: 14px;
    color: #333333;
        border-bottom-right-radius: 2vw;
        border-top-right-radius: 2vw;
        border-bottom-left-radius: 2vw;
        border-top-left-radius: 2vw;
    padding-left: 4vw;
    margin-bottom: 4vw;
}
.register-input2{
    background-color: #f6f7f9;
    line-height: 10vw;
    font-size: 14px;
    color: #333333;
        border-bottom-right-radius: 2vw;
        border-top-right-radius: 2vw;
        border-bottom-left-radius: 2vw;
        border-top-left-radius: 2vw;
    padding-left: 4vw;
}
.register-input2 input{
    background-color: #f6f7f9;
    color: #999999;
    outline: none;
    border: none;
    margin-left: 13vw;
}
.register-input3 input{
    width: 90vw;
    margin-top: 8vw;
    background-color: #2581fa;
    border: none;
    line-height: 10vw;
    font-size: 14px;
    color: #ffffff;
        border-bottom-right-radius: 12vw;
        border-top-right-radius: 12vw;
        border-bottom-left-radius: 12vw;
        border-top-left-radius: 12vw;
    padding-left: 4vw;
}
.register-section p{
        width: 80vw;
        margin: 5vw auto;
        font-size: 12px;
        text-align: center;
}
.register-section p a{
        font-size: 12px;
        color: #0091d1;
        text-decoration: none;
}
</style>