<template>
    <main>
        <header>
            <div>
                <router-link to="/">
                    <h1><img src="../assets/images/向左箭头.png" alt=""> 分类</h1>
                </router-link>
            </div>
            <div>
                <ul>
                    <li v-for="(item,index) in sex" :key='index' v-on:click="change(index)"  :class="{'current':index==num}"><h2>{{item}}</h2></li>
                </ul>
            </div>
            <div class="header-right">
                <img src="../assets/images/搜索.png" alt="">
                
                <img src="../assets/images/导航.png" alt="" v-on:click='add()'>
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
        </header>
        <section v-if="num==0" >
            <div class="s1">
                <div class="s1-header">
                    <div>
                        <h3>玄幻</h3>
                        <p>共有23333本作品</p>
                    </div>
                   <p><img src="../assets/images/向右箭头.png" alt=""></p>
                </div>
                <div class="s1-section">
                    <button>东方玄幻</button>
                    <button>东方玄幻</button>
                    <button>东方玄幻</button>
                    <button>东方玄幻</button>
                </div>
            </div>
            <div class="s1">
                <div class="s1-header">
                    <div>
                        <h3>玄幻</h3>
                        <p>共有23333本作品</p>
                    </div>
                   <p><img src="../assets/images/向右箭头.png" alt=""></p>
                </div>
                <div class="s1-section">
                    <button>东方玄幻</button>
                    <button>东方玄幻</button>
                    <button>东方玄幻</button>
                    <button>东方玄幻</button>
                </div>
            </div>
            <div class="s1">
                <div class="s1-header">
                    <div>
                        <h3>玄幻</h3>
                        <p>共有23333本作品</p>
                    </div>
                    <p><img src="../assets/images/向右箭头.png" alt=""></p>
                </div>
                <div class="s1-section">
                    <button>东方玄幻</button>
                    <button>东方玄幻</button>
                    <button>东方玄幻</button>
                    <button>东方玄幻</button>
                    <button>东方玄幻</button>
                    <button>东方玄幻</button>
                    <button>东方玄幻</button>
                    <button>东方玄幻</button>
                </div>
            </div>
            <div class="s1">
                <div class="s1-header">
                    <div>
                        <h3>玄幻</h3>
                        <p>共有23333本作品</p>
                    </div>
                    <p><img src="../assets/images/向右箭头.png" alt=""></p>
                </div>
                <div class="s1-section">
                    <button>东方玄幻</button>
                    <button>东方玄幻</button>
                    <button>东方玄幻</button>
                    <button>东方玄幻</button>
                    <button>东方玄幻</button>

                </div>
            </div>
             <div class="s1">
                <div class="s1-header">
                    <div>
                        <h3>玄幻</h3>
                        <p>共有23333本作品</p>
                    </div>
                    <p><img src="../assets/images/向右箭头.png" alt=""></p>
                </div>
                <div class="s1-section">
                    <button>东方玄幻</button>
                    <button>东方玄幻</button>
                    <button>东方玄幻</button>
                    <button>东方玄幻</button>
                    <button>东方玄幻</button>
                    <button>东方玄幻</button>

                </div>
            </div>
             <div class="s1">
                <div class="s1-header">
                    <div>
                        <h3>玄幻</h3>
                        <p>共有23333本作品</p>
                    </div>
                    <p><img src="../assets/images/向右箭头.png" alt=""></p>
                </div>
                <div class="s1-section">
                    <button>东方玄幻</button>
                    <button>东方玄幻</button>
                    <button>东方玄幻</button>
                    <button>东方玄幻</button>
                    <button>东方玄幻</button>
                </div>
            </div>
             <div class="s1">
                <div class="s1-header">
                    <div>
                        <h3>玄幻</h3>
                        <p>共有23333本作品</p>
                    </div>
                    <p><img src="../assets/images/向右箭头.png" alt=""></p>
                </div>
                <div class="s1-section">
                    <button>东方玄幻</button>
                    <button>东方玄幻</button>
                    <button>东方玄幻</button>
                    <button>东方玄幻</button>
                    <button>东方玄幻</button>
                    <button>东方玄幻</button>

                </div>
            </div>
             <div class="s1">
                <div class="s1-header">
                    <div>
                        <h3>玄幻</h3>
                        <p>共有23333本作品</p>
                    </div>
                    <p><img src="../assets/images/向右箭头.png" alt=""></p>
                </div>
                <div class="s1-section">
                    <button>东方玄幻</button>
                    <button>东方玄幻</button>
                    <button>东方玄幻</button>
                    <button>东方玄幻</button>
                    <button>东方玄幻</button>
                    <button>东方玄幻</button>
                    <button>东方玄幻</button>
                    <button>东方玄幻</button>

                </div>
            </div>
        </section>
        <section v-else >
            <div class="s1">
                <div class="s1-header">
                    <div>
                        <h3>古代言情</h3>
                        <p>共有23333本作品</p>
                    </div>
                    <p><img src="../assets/images/向右箭头.png" alt=""></p>
                </div>
                <div class="s1-section">
                    <button>古代情缘</button>
                    <button>古代情缘</button>
                    <button>古代情缘</button>
                    <button>古代情缘</button>
                    <button>古代情缘</button>
                    <button>古代情缘</button>
                    <button>古代情缘</button>
                    <button>古代情缘</button>
                    <button>古代情缘</button>
                </div>
            </div>
            <div class="s1">
                <div class="s1-header">
                    <div>
                        <h3>古代言情</h3>
                        <p>共有23333本作品</p>
                    </div>
                    <p><img src="../assets/images/向右箭头.png" alt=""></p>
                </div>
                <div class="s1-section">
                    <button>古代情缘</button>
                    <button>古代情缘</button>
                    <button>古代情缘</button>
                    <button>古代情缘</button>
                    <button>古代情缘</button>
                    <button>古代情缘</button>
                    <button>古代情缘</button>
                    <button>古代情缘</button>
                    <button>古代情缘</button>
                </div>
            </div>
            <div class="s1">
                <div class="s1-header">
                    <div>
                        <h3>古代言情</h3>
                        <p>共有23333本作品</p>
                    </div>
                    <p><img src="../assets/images/向右箭头.png" alt=""></p>
                </div>
                <div class="s1-section">
                    <button>古代情缘</button>
                    <button>古代情缘</button>
                    <button>古代情缘</button>
                    <button>古代情缘</button>
                    <button>古代情缘</button>
                    <button>古代情缘</button>
                    <button>古代情缘</button>
                    <button>古代情缘</button>
                    <button>古代情缘</button>
                </div>
            </div>
             <div class="s1">
                <div class="s1-header">
                    <div>
                        <h3>玄幻</h3>
                        <p>共有23333本作品</p>
                    </div>
                    <p><img src="../assets/images/向右箭头.png" alt=""></p>
                </div>
                <div class="s1-section">
                    <button>东方玄幻</button>
                    <button>东方玄幻</button>
                    <button>东方玄幻</button>
                    <button>东方玄幻</button>
                    <button>东方玄幻</button>
                    <button>东方玄幻</button>

                </div>
            </div>
             <div class="s1">
                <div class="s1-header">
                    <div>
                        <h3>玄幻</h3>
                        <p>共有23333本作品</p>
                    </div>
                    <p><img src="../assets/images/向右箭头.png" alt=""></p>
                </div>
                <div class="s1-section">
                    <button>东方玄幻</button>
                    <button>东方玄幻</button>
                    <button>东方玄幻</button>
                    <button>东方玄幻</button>
                    <button>东方玄幻</button>
                    <button>东方玄幻</button>
                    <button>东方玄幻</button>
                    <button>东方玄幻</button>

                </div>
            </div>
        </section>
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
    z-index: 100;
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
 .navsimg img{
    width: 8vw;
    height: 8vw;
}


header{
    width: 94vw;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px #999999 solid;
    padding: 0px 3vw;
}
header ul{
    display: flex;
    color: red;
    font-size: 3vw;
    font-weight: 600;
}
header ul li{
    border: 1px red solid;
    background-color: white;
    position: relative;
    top:2vw;

}
.current{
    background-color: red;
    color: white;
}
header h1{
    font-size: 4vw;
    
    display: flex;
    line-height: 11vw;
    color: black;
    font-weight: 400;
}
header h1 img{
    width: 5vw;
    height: 5vw;
    margin-right: 5vw;
    position: relative;
    top: 2.5vw;
}
.header-right{
    margin-top: 2.5vw;
}
.header-right img{
    width: 6vw;
    margin-left: 4vw;
}
 .s1{
    width: 90vw;
    margin: 0px 5vw;
 }
.s1-header{
    border-bottom: 1px #999999 solid;
    line-height: 10vw;
    display: flex;
    justify-content: space-between;
}
.s1-header div{
    display: flex;
}
.s1-header h3{
    font-size: 4vw;
    font-weight: 400;
}
.s1-header p{
    color: #999999;
    font-size: 2vw;
    margin-left: 4vw;
    position: relative;
    top: 1vw;
}
.s1-header img{
    width: 5vw;
}
.s1-section{
    display: flex;

    margin-top: 4vw;
    margin-bottom: 1vw;
    flex-wrap: wrap;

}
.s1-section button{
    width: 19.5vw;
    border: 1px solid #999999;
    background-color: white;
    color: #999999;
    font-size: 2.5vw;
    padding: 2vw;
    border-bottom-left-radius: 5vw;
    border-top-left-radius: 5vw;
    border-bottom-right-radius: 5vw;
    border-top-right-radius: 5vw;
    margin-bottom: 3vw;
    margin-right: 3vw;
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
</style>
<script scoped>

export default {
    data(){
        return{
            num:0,
            show:false,
            sex:['男生','女生'],
        }
    },
    methods:{
        change(a){
            this.num=a;
        },
        add(){
            this.show=!this.show;
        }
    }
}
</script>
