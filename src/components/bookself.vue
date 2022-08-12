<template>
    <main>
        <header>
            <div>
                <router-link to="/">
                    <h1><img src="../assets/images/向左箭头.png" alt=""> </h1>
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
        <div class="section" v-if="num==0">
            <div class="s-header">
                <h3>默认书架 <img src="../assets/images/下三角形.png" alt=""> <a href="">阅读时间 <img src="../assets/images/箭头_上下切换.png" alt=""></a></h3><span>编辑</span>
            </div>
            <div class="s-books">
                <ul>
                    <li>
                        <div class="book">
                            <div class="book-left">
                                <img src="../assets/images/bookself01.jpg" alt="">
                            </div>
                            <div class="bookright">
                                <div class="bookheader">
                                    <h4>深空彼岸</h4><span>继续阅读 <img src="../assets/images/向右箭头.png" alt=""></span>
                                </div>
                                <div class="bookreading">
                                    <img src="../assets/images/作者.png" alt=""> <p>辰东 | 读至新篇 第152章 动心章</p>
                                </div>
                                <div class="bookupdate">
                                    <p><img src="../assets/images/点.png" alt="">更新至 新篇 第349章 混沌金莲只是遮掩物</p>
                                    <span>8小时前</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="book">
                            <div class="book-left">
                                <img src="../assets/images/bookself02.jpg" alt="">
                            </div>
                            <div class="bookright">
                                <div class="bookheader">
                                    <h4>圣墟</h4><span>继续阅读 <img src="../assets/images/向右箭头.png" alt=""></span>
                                </div>
                                <div class="bookreading">
                                    <img src="../assets/images/作者.png" alt=""> <p>辰东 | 读至新篇 第152章 动心章</p>
                                </div>
                                <div class="bookupdate">
                                    <p><img src="../assets/images/点.png" alt="">更新至 新篇 第349章 混沌金莲只是遮掩物</p>
                                    <span>一年前</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="book">
                            <div class="book-left">
                                <img src="../assets/images/bookself03.jpg" alt="">
                            </div>
                            <div class="bookright">
                                <div class="bookheader">
                                    <h4>完美世界</h4><span>继续阅读 <img src="../assets/images/向右箭头.png" alt=""></span>
                                </div>
                                <div class="bookreading">
                                    <img src="../assets/images/作者.png" alt=""> <p>辰东 | 读至新篇 第152章 动心章</p>
                                </div>
                                <div class="bookupdate">
                                    <p><img src="../assets/images/点.png" alt="">更新至 新篇 第349章 混沌金莲只是遮掩物</p>
                                    <span>一年前</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="book">
                            <div class="book-left">
                                <img src="../assets/images/bookself04.jpg" alt="">
                            </div>
                            <div class="bookright">
                                <div class="bookheader">
                                    <h4>遮天</h4><span>继续阅读 <img src="../assets/images/向右箭头.png" alt=""></span>
                                </div>
                                <div class="bookreading">
                                    <img src="../assets/images/作者.png" alt=""> <p>辰东 | 读至新篇 第152章 动心章</p>
                                </div>
                                <div class="bookupdate">
                                    <p><img src="../assets/images/点.png" alt="">更新至 新篇 第349章 混沌金莲只是遮掩物</p>
                                    <span>一年前</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="section" v-else>
            <div class="s-books">
                <ul>
                    <li>
                        <div class="book">
                            <div class="book-left">
                                <img src="../assets/images/bookself03.jpg" alt="">
                            </div>
                            <div class="bookright">
                                <div class="bookheader">
                                    <h4>完美世界</h4><span>继续阅读 <img src="../assets/images/向右箭头.png" alt=""></span>
                                </div>
                                <div class="bookreading">
                                    <img src="../assets/images/作者.png" alt=""> <p>辰东 | 读至新篇 第152章 动心章</p>
                                </div>
                                <div class="bookupdate">
                                    <p><img src="../assets/images/点.png" alt="">更新至 新篇 第349章 混沌金莲只是遮掩物</p>
                                    <span>一年前</span>
                                </div>
                            </div>
                        </div>
                    </li>

                    
                    <li>
                        <router-link to="/details">
                        <div class="book">
                            <div class="book-left">
                                <img src="../assets/images/bookself04.jpg" alt="">
                            </div>
                            <div class="bookright">
                                <div class="bookheader">
                                    <h4>遮天</h4><span>继续阅读 <img src="../assets/images/向右箭头.png" alt=""></span>
                                </div>
                                <div class="bookreading">
                                    <img src="../assets/images/作者.png" alt=""> <p>辰东 | 读至新篇 第152章 动心章</p>
                                </div>
                                <div class="bookupdate">
                                    <p><img src="../assets/images/点.png" alt="">更新至 新篇 第349章 混沌金莲只是遮掩物</p>
                                    <span>一年前</span>
                                </div>
                            </div>
                        </div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
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


.footer1{
    width: 60vw;
    margin: 4vw auto;
    display: flex;
    color: #999999;
    justify-content: space-between;
}
.footer2 {
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


.bookupdate p{
    overflow: hidden;
    width: 50vw;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.bookupdate img{
    width: 4vw;
    height: 4vw;
    position: relative;
    /* top: 1vw; */
    margin-left: -2vw;
}
.bookupdate{
    margin-top: 1vw;
    display: flex;
    justify-content: space-between;
    color: #999999;
    font-size: 4vw;
}
.bookreading p{
    font-size: 4vw;
    color: #999999;
}
.bookreading{
    display: flex;
    margin-top: 1vw;
}
.bookreading img{
    width: 3vw;
    margin-right: 1vw;
}
.bookheader span{
    font-size: 3vw;
    color: #999999;
}
.bookheader span img{
    position: relative;
    top: 1vw;
    width: 4vw;
    height: 4vw;
}
.bookright{
    width: 72vw;
}
.bookheader h4{
    font-size: 5vw;
}
.bookheader{
    display: flex;
    justify-content: space-between;
}

.book-left img{
    width: 15vw;
}
.book{
    /* width: 90vw;
    margin: 0px 5vw; */
    display: flex;
    justify-content: space-between;
}
.s-books ul li{
    padding: 2vw 0px;
    border-bottom: 1px #999999 solid;
}
    header{
    width: 94vw;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px #c4c4c4 solid;
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
    margin-bottom: 1vw;
}
.header-right img{
    width: 6vw;
    margin-left: 4vw;
}

.section{
    width: 90vw;
    height: 80vh;
    margin: 3vw 5vw;
}
 .s-header{
    margin-bottom: 4vw;
    display: flex;
    justify-content: space-between;
}
.s-header h3{
    font-size: 4vw;

}
.s-header a{
    font-size: 3vw;
    color: rgb(0, 195, 255);
        font-weight: 400;
        margin-left: 2vw;
}
.s-header a img{
    position: relative;
    top:1vw;
}
.s-header img{
    width: 4vw;
    height: 4vw;
}
</style>
<script scoped>

export default {
    data(){
        return{
            show:false,
            num:0,
            sex:['我的书架','最近阅读'],
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