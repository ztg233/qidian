<template>
    <main>
        <header>
            <div>
                <router-link to="/">
                    <h1><img src="../assets/images/向左箭头.png" alt=""> 遮天</h1>
                </router-link>
            </div>
            <div class="header-right">
                <img src="../assets/images/搜索.png" alt="">
                
                <img src="../assets/images/导航.png" alt="">
            </div>
        </header>
        <div class="book">
            <div class="bookimg">
                <img src="../assets/images/bookself04.jpg" alt="">
            </div>
            <div class="bookinfo">
                <h4>遮天</h4>
                <p>辰东 <span>白金</span></p>
                <p>仙侠 / 修真文明</p>
                <p>635.33万字 | 完本</p>
            </div>
        </div>
        <div class="bookdetail">
            <p class="text1" v-if="num==0" v-on:click="change(1)">冰冷与黑暗并存的宇宙深处，九具庞大的龙尸拉着一口青铜古棺，
                亘古长存。这是太空探测器在枯寂的宇宙中捕捉到的一幅极其震撼的画面
                。九龙拉棺，究竟是回到了上古，还是来到了星空的彼岸？一个浩大的仙侠世界
                ，光怪陆离，神秘无尽。热血似火山沸腾，激情若瀚海汹涌，欲望如深渊无止境……
                登天路，踏歌行，弹指遮天。</p>
                <p class="text2" v-else v-on:click="change(0)">　　冰冷与黑暗并存的宇宙深处，九具庞大的龙尸拉着一口青铜古棺，
                亘古长存。这是太空探测器在枯寂的宇宙中捕捉到的一幅极其震撼的画面
                。九龙拉棺，究竟是回到了上古，还是来到了星空的彼岸？一个浩大的仙侠世界
                ，光怪陆离，神秘无尽。热血似火山沸腾，激情若瀚海汹涌，欲望如深渊无止境……
                登天路，踏歌行，弹指遮天。</p>
        </div>
        <div class="updete">
            <ul>
                <li>
                    <div>
                        <p class="text1">最新章节 我的新书《深空彼岸》上传了</p>
                        <p class="text2">更新时间 2021-05-01  10:13</p>
                    </div>
                    <button><img src="../assets/images/导航.png" alt=""><span>目录</span></button>
                </li>
                <li>
                    <p class="text1">我的新书《圣墟》已上传</p>
                    <p class="text2">2016-11-01</p>
                </li>
                <li>
                    <p class="text1">我的新书《完美世界》已上传，请兄弟姐妹来观看</p>
                    <p class="text2">2013-08-16</p>
                </li>
            </ul>
        </div>
        <div class="span"></div>
        <div class="bookhonor">
            <div class="bookhonor-header">
                <div class="left">
                    <h4>荣誉动态</h4>
                    <span>累计获得五十万个收藏</span>
                </div>
                <p>荣誉殿堂 <img src="../assets/images/向右箭头.png" alt=""></p>
            </div>
            <div class="span2"></div>
            <div class="bookhonor-section">
                <img src="../assets/images/details01.png" alt="">
                <img src="../assets/images/details02.png" alt="">
                <img src="../assets/images/details03.png" alt="">
                <img src="../assets/images/details04.png" alt="">
            </div>
        </div>
        <div class="span"></div>
        <div class="ticket">
            <div class="one">
                <img src="../assets/images/门票.png" alt="">
                <p>投月票</p>
                <span>262票 <img src="../assets/images/点 2.png" alt=""> 第519位</span>
            </div>
            <div class="one">
                <img src="../assets/images/推荐.png" alt="">
                <p>投月票</p>
                <span>262票 <img src="../assets/images/点 2.png" alt=""> 第519位</span>
            </div>
            <div class="one">
                <img src="../assets/images/充值.png" alt="">
                <p>投月票</p>
                <span>262票 <img src="../assets/images/点 2.png" alt=""> 第519位</span>
            </div>
        </div>
        <div class="span"></div>
        <div class="bookfriends">
            <div class="header">
                <h4>书友榜</h4>
                <p>310.08万 <img src="../assets/images/向右箭头.png" alt=""></p>
            </div>
            <div class="span2"></div>
            <div class="section">
                <div class="left">

                </div>
                <div class="right">

                </div>
            </div>
        </div>
        <div class="span"></div>
        <div class="span"></div>
        <div class="bookwriter">
            <h4>本书作者</h4>
            <div class="span2"></div>
            <div class="info">
                <div class="one">
                    <img src="../assets/images/红毛.png" alt="">
                    <span>白金</span>
                </div>
                <div class="two">
                    <h5>辰东</h5>
                    <p>阅文集团白金作家，网络文学代表性人物之一，中国作协会员。</p>
                </div>
                <div class="img">
                    <img src="../assets/images/向右箭头.png" alt="">
                </div>
            </div>
        </div>
        <div class="span"></div>
        <div class="lable">
            <h4>相关标签</h4>
            <div class="span2"></div>
            <div class="one">
                <button>热血</button>
            </div>
        </div>
        <div class="span"></div>
        <div class="lable">
            <h4>同类热推</h4>
            <div class="two">
                <button>诡异：我能无限强化在线阅读</button>
                <button>我的师父什么都懂亿点点小说</button>
                <button>拥有时空门的修仙家族在线阅读</button>
                <button>天师寻道小说</button>
                <button>大劫主最新章节</button>
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
        <div class="flxed">
            <div class="one">
                <img src="../assets/images/订阅.png" alt="">      
                <p>订阅</p>
            </div>
            <div class="two">
                <img src="../assets/images/添加书架.png" alt="">
                <p>添加书架</p>
            </div>
            <button class="three">新用户免费读</button>
            <button class="four">继续阅读</button>
        </div>
        <div class="span"></div>
        <div class="span"></div>
    </main>
</template>
<style scoped>
.four{
    padding: 3vw 4vw;
    color: rgb(255, 255, 255);
    font-size: 4vw;
    font-weight: 600;
    border: none;
    background-color: rgb(255, 0, 0);
    border-top-right-radius:12vw ;
    border-bottom-right-radius:12vw ;
    border-top-left-radius:12vw ;
    border-bottom-left-radius:12vw ;
}
.three{
    padding: 3vw 4vw;
    color: red;
    font-size: 4vw;
    background-color: #ffe5e7;
    border:none;
    border-top-right-radius:12vw ;
    border-bottom-right-radius:12vw ;
    border-top-left-radius:12vw ;
    border-bottom-left-radius:12vw ;
}
.flxed .two img{
    width: 5vw;
    height: 5vw;
}
.flxed .two{
    font-size: 3vw;
    text-align: center;
}
.flxed .one img{
    width: 5vw;
    height: 5vw;
}
.flxed .one{
    font-size: 3vw;
    text-align: center;
}
.flxed{
    background: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0vw 5vw;
    width: 90vw;
    position: fixed;
    left: 0px;
    bottom: 0px;
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

.lable .two button{
    font-size: 3vw;
    color: #999999;
    border: 1px #999999 solid;
    padding: 2vw 3vw;
    border-top-right-radius:6vw ;
    border-bottom-right-radius:6vw ;
    border-top-left-radius:6vw ;
    border-bottom-left-radius:6vw ;
        margin: 1vw 0px;
    margin-right: 5vw;
}
.lable .one button{

    font-size: 3vw;
    color: #999999;
    border: 1px #999999 solid;
    padding: 2vw 3vw;
    border-top-right-radius:6vw ;
    border-bottom-right-radius:6vw ;
    border-top-left-radius:6vw ;
    border-bottom-left-radius:6vw ;
}
.lable .two{
    padding: 2vw 0px;

    display: flex;
    flex-wrap: wrap;
}
.lable .one{
    padding: 4vw 0px;

    display: flex;
    flex-wrap: wrap;
}
.lable h4{
    font-size: 4vw;
    padding: 3vw 0vw;
}
.lable{
    width: 90vw;
    margin: 0px 5vw;
}
.bookwriter .two p{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #999999;
    font-size: 4vw;
}
.bookwriter .two{
    width: 70vw;
}
.bookwriter .info span{
    font-size: 4vw;
    color: wheat;
    background-color: #a091ff;
    margin-left: -10vw;
}
.bookwriter .info .img img{
    width: 5vw;
    height: 5vw;
} 
.bookwriter .info{
    padding: 4vw 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.bookwriter .info img{
    width: 12vw;
} 
.bookwriter h5{
    padding-top: 2vw;
    font-size: 4vw;
    margin-bottom: 1vw;
}
.bookwriter h4{
    font-size: 4vw;
    margin-bottom: 3vw;
}
.bookwriter{

    width: 90vw;
    margin: 0px 5vw;
}
.bookfriends .header img{
    width: 4vw;
    height: 4vw;
}
.bookfriends h4{
    font-size: 4vw;
}
.bookfriends .header p{
    font-size: 3vw;
    color: #999999;
    display: flex;
    align-items: center;
}
.bookfriends .header{
    padding: 3vw 0px;
    display: flex;
    justify-content: space-between;
}
.bookfriends{
    width: 90vw;
    margin: 0px 5vw;
}
.ticket span img{
    width: 2vw;
    height: 2vw;
}
.ticket span{
    font-size: 2vw;
    color: #999999;
}
.ticket img{
    width: 15vw;
    height: 15vw;
}
.ticket p{
    font-size: 3vw;
}
.ticket .one{
    text-align: center;
}
.ticket{
    width: 90vw;
    margin: 0vw 5vw;

    display: flex;
    justify-content: space-between;
}
.span2{
    width: 95vw;
    height:1px;
    background-color: #999999;
}
.bookhonor-header p{
    color: #999999;
    font-size: 4vw;
}
.bookhonor-header h4{
    font-size: 4vw;
    font-weight: 500;
}
.bookhonor-header span{
    margin-left: 2vw;
    color: #999999;
    font-size: 3vw;
}
.bookhonor-header  img{
    width: 4vw;
    height: 4vw;
}
.bookhonor{
    width: 90vw;
    margin: 0px 5vw;
}
.bookhonor-section img{
    width: 20vw;
}
.bookhonor-section{
    margin-top: 2vw;
    display: flex;
    justify-content: space-between;
}
.bookhonor-header .left{
    display: flex;
    align-items: center;
}
.bookhonor-header{
    margin-bottom: 2vw;
    margin-top: 4vw;
    display: flex;
    justify-content: space-between;
}
.span{
    /* width: 100vw; */
    height: 4vw;
    background-color: #f6f7f9;
}
.updete button img{
    width: 3vw;
    height: 3vw;
    position: relative;

}
.updete button{
    padding: 0px 1vw;
    outline: none;
    border: 1px #999999 solid;
    border-top-right-radius:6vw ;
    border-bottom-right-radius:6vw ;
    border-top-left-radius:6vw ;
    border-bottom-left-radius:6vw ;
    width: 15vw;
     height: 6vw;
    font-size: 2vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.updete .text1{
    width: 60vw;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 3.5vw;
    margin-top: 1vw;
}
.updete .text2{
    font-size: 2.5vw;
    color: #999999;
    margin-top: 1vw;
}
.updete ul li{
    display: flex;
    justify-content: space-between;
}
.updete{
    width: 90vw;
    margin: 4vw 5vw;
}
.bookdetail .text2{
    height: 22vh;
    overflow: hidden;

}
.bookdetail .text1{
    overflow: hidden;
    height: 12vh;

}

.bookdetail{
    width: 90vw;
    margin: 0px 5vw;
    font-size: 4vw;
    border-bottom: 1px #c6c6c6 solid;
    padding-bottom: 4vw;
}
.bookinfo p span{
    font-size: 3vw;
    color: white;
    background-color: #a091ff;
}
.bookinfo p{
    font-size: 3.5vw;
    margin-bottom: 1.5vw;
}
.bookinfo h4{
    padding: 2.5vw 0px;
    font-size: 4.5vw;
}
.bookinfo{
    margin-left: 3vw;
}
.bookimg img{
    width: 23vw;
}
.book{
    width: 90vw;
    margin: 5vw 5vw;
    display: flex;
}
header{
    width: 94vw;
    display: flex;
    justify-content: space-between;
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
</style>
<script>
export default {
    data(){
        return{
            num:0,
        }
    },
    methods:{
        change(a){
            this.num=a;
        },
    }
}
</script>

