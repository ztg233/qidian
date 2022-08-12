<template>
    <main>
        <header>
            <div class="header1">
                <div class="a">
                <h1>
                    <img src="../assets/images/向左箭头2.png" alt="">
                    <p> 个人中心</p>
                </h1>
                </div>
                
                <div class="ab">
                    <img src="../assets/images/搜索2.png" alt="">
                    <img src="../assets/images/导航2.png" alt="" v-on:click='add()'>
                </div>
                <div class="navs" v-show="show">
                    <div class="nav0">

                    
                    <div class="navsimg">
                        <p><router-link to="/">
                            <img src="../assets/images/首页.png" alt="" />
                            <h6>首页</h6>
                            </router-link>
                        </p>
                        <p><router-link to="/classify">
                            <img src="../assets/images/index05.png" alt="" />
                            <h6>分类</h6>
                            </router-link>
                        </p>
                        <p><router-link to="/">
                            <img src="../assets/images/index06.png" alt="" />
                            <h6>排行榜</h6>
                            </router-link>
                        </p>
                        <p><router-link to="/">
                            <img src="../assets/images/index07.png" alt="" />
                            <h6>免费</h6>
                            </router-link>
                        </p>
                        <p><router-link to="/">
                            <img src="../assets/images/index08.png" alt="" />
                            <h6>完本</h6>
                            </router-link>
                        </p>
                        <p><router-link to="/my">
                            <img src="../assets/images/账户2.png" alt="" />
                            <h6>账户</h6>
                            </router-link>
                        </p>
                    </div>
                    <router-link to="/bookself">
                    <button>我的书架</button>
                    </router-link>
                    
                    </div>
                </div>
            </div>
            <div class="headerimg">
                <img src="../assets/images/my01.png" alt="">
            </div>
            <p class="name">书友1233243534</p>
            <p class="level"><img src="../assets/images/会员等级.png" alt=""></p>
        </header>
        <ul class="ticket">
            <li>
                <p class="one">0</p>
                <p class="two">月票</p>
            </li>
            <li>
                <p class="one">2</p>
                <p class="two">推荐票</p>
            </li>
            <li>
                <p class="one">10</p>
                <p class="two">起点币</p>
            </li>
            <li>
                <p class="one"><img src="../assets/images/充值.png" alt=""></p>
                <p class="three">去充值 ></p>
            </li>
        </ul>
        <ul class="set">
            <li>
                <h3><img src="../assets/images/消息.png" alt=""><h4>消息中心</h4></h3>
                <p><img src="../assets/images/向右箭头.png" alt=""></p>
            </li>
             <li>
                <h3><img src="../assets/images/会员.png" alt=""><h4>会员等级</h4></h3>
                <p><img src="../assets/images/会员等级.png" alt=""><img src="../assets/images/向右箭头.png" alt=""></p>
            </li>
             <li>
                <h3><img src="../assets/images/星星.png" alt=""><h4>经验等级</h4></h3>
                <p><span>16级</span><img src="../assets/images/向右箭头.png" alt=""></p>
            </li>
             <li>
                <h3><img src="../assets/images/安全中心.png" alt=""><h4>安全中心</h4></h3>
                <p><img src="../assets/images/向右箭头.png" alt=""></p>
            </li>
             <li>
                <h3><img src="../assets/images/帮助.png" alt=""><h4>帮助中心</h4></h3>
                <p><img src="../assets/images/向右箭头.png" alt=""></p>
            </li>
        </ul>
        <router-link to="/"><button>退出登录</button></router-link>
        
        <footer>
            <div class="footer1">
                <span>QQ阅读</span>
                <span>红袖添香</span>
            </div>
            <div class="footer2">
                <ul>
                    <li>客户端</li>
                    <li>触屏版</li>
                    <li>帮助</li>
                    <li>反馈</li>
                    <li>搜索</li>
                </ul>
                <p>网站备案/许可证号：沪B2-20080046-1</p>
                <p>copyright © 2002-2022 m.qidian.com</p>
            </div>
        </footer>
    </main>
</template>
<style scoped>
header{
    width: 100vw;
    padding-top: 3vw;
    background: url('../assets/images/my02.jpg');
}
.nav0 button{
    width: 40vw;
    margin:4vw 20vw;
    font-size: 5vw;
    text-align: center;
    padding: 4vw 0vw;
    color: white;
    background-color: red;
    border: none;
    border-bottom-left-radius: 15vw;
    border-top-left-radius: 15vw;
    border-bottom-right-radius: 15vw;
    border-top-right-radius: 15vw;
}
.nav0{
    width: 100vw;
    background-color: white;
    padding: 0vw 10vw;
}
.navs{
    width: 100vw;
    height: 100vh;
 background-color: rgba(rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 5), 0.5);

    position: fixed;
    left: 0px;
    top:10vw;
}
.navsimg{
    width: 80vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: white;
}
.navsimg p{
    width: 20vw;
    padding: 4vw 2vw;
    text-align: center;
    margin: 2vw 0px;
}
.header1 .navsimg img{
    width: 8vw;
    height: 8vw;
}

h1{
    display: flex;
    font-size: 4vw;
}
h1 p{
    position: relative;
    top: 0.5vw;
}
.a{
    margin-left: 2vw;
    display: flex;
}
.ab img{
    margin-right: 5vw;
}
.header1{
    position: relative;
    display: flex;
    justify-content: space-between;
    color: white;
    font-size: 4vw;
    line-height: 5vw;
}
.header1 p{
    margin-left: 2vw;
}
.header1 img{
    width: 5vw;
    height: 5vw;
}
.headerimg{
    width: 15vw;
    margin: 0 auto;
    margin-top: 3vw;
}
.headerimg img{
    width: 15vw;
}
.name{
    text-align: center;
    color: white;
    font-size: 4vw;
    margin-bottom: 1vw;
}
.level{
    width: 5vw;
    margin: 0px auto;
    margin-bottom: 2vw;
}
.level img{
    width: 5vw;
}
.ticket{
    width: 100vw;
    display: flex;
}
.ticket li{
    width: 22vw;
}
.ticket .one{
    text-align: center;
    font-size: 4vw;
}
.ticket .two{
    text-align: center;
    font-size: 2vw;
    color: #999999;
}
.ticket .one img{
    width: 4vw;
}
.ticket .three{
    text-align: center;
    font-size: 2vw;
    color: red;
}
.set{
    width: 100vw;
    margin: 0px auto;
    margin-top: 4vw;
        font-weight: 400;
}
.set h3{
    display: flex;
}
.set li{
    width: 95vw;
    font-size: 4vw;
    margin-bottom: 1vw;
    padding: 3vw 0px;
    padding-left: 5vw;
    display: flex;
    justify-content: space-between;
    background-color: #f6f7f9;
}
.set li img{
    width: 5vw;
    height: 5v;
    margin-right: 2vw;
}
.set span{
    font-size: 4vw;
    position: relative;
    top: -1vw;
    color: #999999;
}

.footer1{
    font-size: 4vw;
    width: 60vw;
    margin: 4vw auto;
    display: flex;
    color: #999999;
    justify-content: space-between;
}
.footer2 {
    font-size: 4vw;
    width: 80vw;
    margin: 3vw auto;
}
.footer2 ul{
    display: flex;
    color: #999999;
    justify-content: space-between;
}
.footer2 p{
    margin: 3vw auto;
    text-align: center;
    font-size: 3vw;
    color: #999999;
}
button{
    width: 100vw;
    text-align: center;
    padding: 2vw 0px;
    outline: none;
    border: none;
    margin: 3vw 0px;
    color: red;
    font-size: 5vw;
}

</style>
<script>


export default {
    data(){
       return{
        show:false,
       } 
    },
    methods:{
        add(){
            this.show=!this.show
        }
    }
}
</script>
