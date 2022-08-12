<template>
  <main>
    <div class="index-header">
      <p class="text1">起点中文网</p>
      <ul>
          <li v-for="(item,index) in sex" :key='index' v-on:click="change(index)"  ><h2 :class="{'current':index==num}">{{item}}</h2></li>
      </ul>
      <p class="text2">
        <router-link to="/login"
          ><a href=""><img src="../assets/images/登录.png" alt="登录" /></a
        ></router-link>

        <router-link to="/bookself"
          ><a href=""><img src="../assets/images/书架.png" alt="书架" /></a
        ></router-link>
      </p>
    </div>
    <div class="index-carousel">
      <van-swipe
        class="my-swipe"
        :autoplay="3000"
        indicator-color="rgb(254, 107, 2)"
      >
        <van-swipe-item
          ><img class="img" src="../assets/images/index01.jpg" alt=""
        /></van-swipe-item>
        <van-swipe-item
          ><img class="img" src="../assets/images/index02.jpg" alt=""
        /></van-swipe-item>
        <van-swipe-item
          ><img class="img" src="../assets/images/index03.jpg" alt=""
        /></van-swipe-item>
        <van-swipe-item
          ><img class="img" src="../assets/images/index04.jpg" alt=""
        /></van-swipe-item>
      </van-swipe>
    </div>
    <div class="index-search">
      <van-search
        class="search"
        v-model="value"
        background="white"
        placeholder="请输入搜索关键词"
      />
    </div>
    <div class="index-nav">
      <ul>
        <li>
            <router-link to="/classify">
            <img src="../assets/images/index05.png" alt="" />
            <h5>分类</h5>
            </router-link>
          
        </li>
        <li>
          <img src="../assets/images/index06.png" alt="" />
          <h5>排行榜</h5>
        </li>
        <li>
          <img src="../assets/images/index07.png" alt="" />
          <h5>免费</h5>
        </li>
        <li>
          <img src="../assets/images/index08.png" alt="" />
          <h5>完本</h5>
        </li>
        <li>
          <img src="../assets/images/index09.png" alt="" />
          <h5>大神</h5>
        </li>
      </ul>
    </div>
    <div class="index-button">
      <button>新书强推</button>
      <button>三江.网文新风</button>
    </div>
    <div class="index-section">
      <div class="index-section1">
        <div class="index-h3">
          <h3>畅销精选</h3>
          <span>更多></span>
        </div>
        <div class="index-books">
          <ul>
            <li>
              <div class="index-book">
                <img src="../assets/images/index-s01.jpg" alt="" />
                <div class="index-booksection">
                  <h4>一万种清楚玩家的方法</h4>
                  <p class="text1">
                    “我穿越的世界遍布玩家，生存本就不易，而我更是被系统缠身，成了NPC中最耀眼的那个……
                    土著看我不顺眼，玩家视我为眼中钉。
                    为了在异世界美好的生活，为了不被玩家欺辱，我只能竭尽全力，把所经历的苦厄变成别”
                  </p>
                  <div class="text2">
                    <span>仙侠.117万字</span>
                    <div>
                      <span>系统流</span>

                      <span>第四天灾</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="index-book">
                <img src="../assets/images/index-s02.jpg" alt="" />
                <div class="index-booksection">
                  <h4>唐人的餐桌</h4>
                  <p class="text1">
                    “我穿越的世界遍布玩家，生存本就不易，而我更是被系统缠身，成了NPC中最耀眼的那个……
                    土著看我不顺眼，玩家视我为眼中钉。
                    为了在异世界美好的生活，为了不被玩家欺辱，我只能竭尽全力，把所经历的苦厄变成别”
                  </p>
                  <div class="text2">
                    <span>仙侠.117万字</span>
                    <div>
                      <span>系统流</span>

                      <span>第四天灾</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="index-book">
                <img src="../assets/images/index-s03.jpg" alt="" />
                <div class="index-booksection">
                  <h4>我的属性修行人生</h4>
                  <p class="text1">
                    “我穿越的世界遍布玩家，生存本就不易，而我更是被系统缠身，成了NPC中最耀眼的那个……
                    土著看我不顺眼，玩家视我为眼中钉。
                    为了在异世界美好的生活，为了不被玩家欺辱，我只能竭尽全力，把所经历的苦厄变成别”
                  </p>
                  <div class="text2">
                    <span>仙侠.117万字</span>
                    <div>
                      <span>系统流</span>

                      <span>第四天灾</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="index-section2">
        <div class="index-h3">
          <h3>猜你喜欢</h3>
          <p>根据你的阅读口味智能推荐</p>
        </div>
        <div class="index-books">
          <ul>
            <li>
              <h5>看过深空彼岸的29.2万人也喜欢</h5>
              <div class="index-book">
                <img src="../assets/images/index-s04.jpg" alt="" />
                <div class="index-booksection">
                  <h4>赤心巡天</h4>
                  <p class="text1">
                    “我穿越的世界遍布玩家，生存本就不易，而我更是被系统缠身，成了NPC中最耀眼的那个……
                    土著看我不顺眼，玩家视我为眼中钉。
                    为了在异世界美好的生活，为了不被玩家欺辱，我只能竭尽全力，把所经历的苦厄变成别”
                  </p>
                  <div class="text2">
                    <span>仙侠.117万字</span>
                    <div>
                      <span>系统流</span>

                      <span>第四天灾</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <h5>读过深空彼岸的76%也在读</h5>
              <div class="index-book">
                <img src="../assets/images/index-s05.jpg" alt="" />
                <div class="index-booksection">
                  <h4>光阴之外</h4>
                  <p class="text1">
                    “我穿越的世界遍布玩家，生存本就不易，而我更是被系统缠身，成了NPC中最耀眼的那个……
                    土著看我不顺眼，玩家视我为眼中钉。
                    为了在异世界美好的生活，为了不被玩家欺辱，我只能竭尽全力，把所经历的苦厄变成别”
                  </p>
                  <div class="text2">
                    <span>仙侠.117万字</span>
                    <div>
                      <span>系统流</span>

                      <span>第四天灾</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <h5>读过深空彼岸的也喜欢</h5>
              <div class="index-book">
                <img src="../assets/images/index-s06.jpg" alt="" />
                <div class="index-booksection">
                  <h4>牧神记</h4>
                  <p class="text1">
                    “我穿越的世界遍布玩家，生存本就不易，而我更是被系统缠身，成了NPC中最耀眼的那个……
                    土著看我不顺眼，玩家视我为眼中钉。
                    为了在异世界美好的生活，为了不被玩家欺辱，我只能竭尽全力，把所经历的苦厄变成别”
                  </p>
                  <div class="text2">
                    <span>仙侠.117万字</span>
                    <div>
                      <span>系统流</span>

                      <span>第四天灾</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="index-section3">
        <div class="index-h3">
          <h3>限时免费</h3>
          <p>
            <van-count-down class="aaa" millisecond :time="time" format="HH:mm:ss:SS" />
          </p>
          <span>更多></span>
        </div>
        <div class="index-books">
          <ul>
            <li>
              <div class="index-book">
                <img src="../assets/images/index-s04.jpg" alt="" />
                <p class="text1">盗墓：一剑天门开，怒劈青铜门</p>
                <p class="text2">九三废废</p>
              </div>
            </li>
            <li>
              <div class="index-book">
                <img src="../assets/images/index-s04.jpg" alt="" />
                <p class="text1">盗墓：一剑天门开，怒劈青铜门</p>
                <p class="text2">九三废废</p>
              </div>
            </li>
            <li>
              <div class="index-book">
                <img src="../assets/images/index-s04.jpg" alt="" />
                <p class="text1">盗墓：一剑天门开，怒劈青铜门</p>
                <p class="text2">九三废废</p>
              </div>
            </li>
            <li>
              <div class="index-book">
                <img src="../assets/images/index-s04.jpg" alt="" />
                <p class="text1">盗墓：一剑天门开，怒劈青铜门</p>
                <p class="text2">九三废废</p>
              </div>
            </li>
            <li>
              <div class="index-book">
                <img src="../assets/images/index-s04.jpg" alt="" />
                <p class="text1">盗墓：一剑天门开，怒劈青铜门</p>
                <p class="text2">九三废废</p>
              </div>
            </li>
            <li>
              <div class="index-book">
                <img src="../assets/images/index-s04.jpg" alt="" />
                <p class="text1">盗墓：一剑天门开，怒劈青铜门</p>
                <p class="text2">九三废废</p>
              </div>
            </li>
            <li>
              <div class="index-book">
                <img src="../assets/images/index-s04.jpg" alt="" />
                <p class="text1">盗墓：一剑天门开，怒劈青铜门</p>
                <p class="text2">九三废废</p>
              </div>
            </li>
            <li>
              <div class="index-book">
                <img src="../assets/images/index-s04.jpg" alt="" />
                <p class="text1">盗墓：一剑天门开，怒劈青铜门</p>
                <p class="text2">九三废废</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="index-section4">
        <div class="index-h3">
          <h3>排行榜</h3>
          <span>更多></span>
        </div>
        <div class="index-books">
          <ul class="s4-ul1" id="list1">
            <li
              v-for="(it, index) in List"
              :key="index"
              v-on:click="change(index)"
              v-bind:class="{ current: index == num }"
            >
              {{ it }}
            </li>
          </ul>
          <ul class="s4-ul2" id="list2">
            <li v-show="0 == num">
              <ul>
                <li v-for="(itt, index) in book" :key="index">
                  <img alt="" v-bind:src="itt.src" />
                  <p>{{ itt.bookname }}</p>
                  <span>{{ itt.writer }}</span>
                </li>
              </ul>
            </li>
            <li v-show="1 == num">
              <ul class="s4-ul2">
                <li v-for="(itt, index) in book2" :key="index">
                  <img alt="" v-bind:src="itt.src" />
                  <p>{{ itt.bookname }}</p>
                  <span>{{ itt.writer }}</span>
                </li>
              </ul>
            </li>
            <li v-show="2 == num">
              <ul class="s4-ul2">
                <li v-for="(itt, index) in book3" :key="index">
                  <img alt="" v-bind:src="itt.src" />
                  <p>{{ itt.bookname }}</p>
                  <span>{{ itt.writer }}</span>
                </li>
              </ul>
            </li>
            <li v-show="3 == num">
              <ul class="s4-ul2">
                <li v-for="(itt, index) in book4" :key="index">
                  <img alt="" v-bind:src="itt.src" />
                  <p>{{ itt.bookname }}</p>
                  <span>{{ itt.writer }}</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
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
<style>
* {
  margin: 0px;
  padding: 0px;
  list-style: none;
}
</style>
<style scoped>

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
main {
  
  position: relative;
  /* background: #f6f7f9; */
  /* background-color: #999999; */
}
.index-header .text2 img{
  width: 5vw;
  height: 5vw;
  margin-left: 4vw;
}
.index-header .current{
        background-color: red;
        color: white;
    }
.index-header h2{
  color: red;
  font-size: 4vw;
  font-weight: 400;
  border: 1px red solid;
}
.index-header .text1{
  color: red;
  font-size: 5vw;
  font-weight: 600;
}
.index-header {
  padding: 2vw 0px;
    width: 90vw;
  margin: 0px 5vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.index-header ul {

  display: flex;
}
.index-carousel {
  width: 90vw;
  margin: 0px 5vw;
}
.van-swipe__indicator {
  background-color: rgb(248, 14, 14);
}
.my-swipe .van-swipe-item {
  color: rgb(254, 107, 2);
  font-size: 20px;
  line-height: 10px;
  text-align: center;
  background-color: #39a9ed;
}
.van-swipe-item .img {
  width: 100vw;
}
.index-search {
  width: 100vw;
  /* margin: 0px 5vw; */
}
.index-search input {
  background-color: rgb(242, 8, 8);
  color: #999999;
}
.index-nav {
  width: 90vw;
  margin: 0px 5vw;
  padding: 4vw 0px;
}
.index-nav ul {
  display: flex;
  justify-content: space-between;
}
.index-nav ul h5 {
  text-align: center;
  font-size: 4vw;
}
.index-nav img {
  width: 8vw;
  height: 8vw;
  margin: 0px 1vw;
}
.index-button {
  width: 90vw;
  margin: 3vw 5vw;
  display: flex;
  justify-content: space-between;
}
.index-button button {
  width: 43vw;
  font-size: 4vw;
  color: red;
  text-align: center;
  padding: 1vw 0px;
  border: 1px red solid;
  border-bottom-left-radius: 6vw;
  border-top-left-radius: 6vw;
  border-bottom-right-radius: 6vw;
  border-top-right-radius: 6vw;
}
.index-section1 .index-h3 {
  width: 90vw;
  margin: 0px 5vw;
  padding: 3vw 0px;
  display: flex;
  justify-content: space-between;
}
.index-h3 span{
  font-size: 4vw;
}
.index-h3 h3 {
  font-size: 5vw;
  font-weight: 400;
  border-left: 1vw red solid;
  padding: 0px 2vw;
}
.index-books {
  width: 90vw;
  margin: 0px auto;
}
.index-section1 .index-books ul li {
  padding: 4vw 0px;
  border-bottom: 1px #999999 solid;
}
.index-section1 .index-book {
  display: flex;
  justify-content: space-between;
}
.index-book img {
  width: 20vw;
}
.index-booksection {
  width: 68vw;
}
.index-booksection h4 {
  font-size: 4vw;
  margin-bottom: 3vw;
}
.index-booksection .text1 {
  height: 10vw;
  color: #969ba3;
  font-size: 2.5vw;
  line-height: 5vw;
  overflow: hidden;
  text-overflow: ellipsis;
  line-clamp: 2;
}
.index-booksection .text2 {
  margin-top: 3vw;
  display: flex;
  justify-content: space-between;
  font-size: 2.5vw;
}
.index-booksection .text2 span {
  background-color: #f5f5f5;
  color: #969ba3;
}
.index-booksection .text2 span:nth-of-type(1) {
  margin-right: 4vw;
}
.index-section2 {
  margin-top: 4vw;
}
.index-section2 .index-h3 {
  width: 90vw;
  margin: 0px 5vw;
  display: flex;
}
.index-section2 .index-h3 p {
  font-size: 3vw;
  color: #999999;
  position: relative;
  top: 2vw;
}
.index-section2 h5 {
  margin-bottom: 4vw;
  font-weight: 400;
  color: #999999;
  font-size: 2.5vw;
}
.index-section2 .index-book {
  display: flex;
  justify-content: space-between;
}
.index-section2 .index-books ul li {
  padding: 4vw 0px;
  border-bottom: 1px #999999 solid;
}
.index-section3 {
  margin-top: 4vw;
}
.index-section3 .index-h3 {
  width: 90vw;
  margin: 0px 5vw;
  display: flex;
}
.index-section3 .index-h3 p {
  font-size: 14px;
  color: #999999;
  position: relative;
  top: 2vw;
}
.index-section3 .index-h3 span {
  margin-left: 30vw;
}
.index-section3 .index-books ul {
  width: 90vw;
  overflow: auto;
  display: flex;
}
.index-section3 .index-books ul li {
  width: 17vw;
  margin-right: 4vw;
}
.index-section3 .index-books ul li img {
  width: 17vw;
}
.index-section3 .text1 {
  font-size: 3.2vw;
  height: 8vw;
  overflow: hidden;
}
.index-section3 .text2 {
  font-size: 2vw;
  color: #999999;
}
.index-section3 .index-h3 p{
  font-size: 4vw;
}
.index-section4 {
  width: 90vw;
  margin: 0px 5vw;
}
.index-section4 .index-h3 {
  display: flex;
  justify-content: space-between;
  margin: 4vw auto;
}
    .s4-ul1{
        display: flex;
        justify-content: space-between;
        margin-bottom: 4vw;
    }
    .s4-ul1 li{
        width: 22.5vw;
        font-size: 4vw;
        text-align: center;
        padding: 1vw 0px;
        color: red;
        border: 1px red solid;
    }
    .s4-ul2{
        width: 90vw;
        display: flex;
        overflow: auto;
        
        text-align: center;
        white-space: nowrap;
    }
    .s4-ul2 ul{
        display: flex;
    }
    .s4-ul2 li{
        margin-right: 4vw;
    }
    .s4-ul2 p{
        font-size: 3vw;
    }
    .s4-ul2 span{
        font-size: 1.5vw;
        color: #999999;
    }
.s4-ul1 .current{
        background-color: red;
        color: white;
    }
    .s4-ul2 img{
        width: 16vw;

    }
    .aaa{
      font-size: 4vw;
    }

</style>
<script>
export default {
  data() {
    return {
      sex:['男生','女生'],
      time: 30 * 60 * 60 * 1000,
      List: ["畅销榜", "风云榜", "签约榜", "推荐榜"],
      num: 0,
      book: [
        {
          src: require("../assets/images/index-p01.jpg"),
          bookname: "灵境行者",
          writer: "卖报小郎君",
        },
        {
          src: require("../assets/images/index-p02.jpg"),
          bookname: "夜的命名术",
          writer: "会说话的肘子",
        },
        {
          src: require("../assets/images/index-p03.jpg"),
          bookname: "深空彼岸",
          writer: "辰东",
        },
        {
          src: require("../assets/images/index-p04.jpg"),
          bookname: "大夏文圣",
          writer: "七月末时",
        },
        {
          src: require("../assets/images/index-p05.jpg"),
          bookname: "不科学御兽",
          writer: "清泉流响",
        },
      ],
            book2: [
        {
          src: require("../assets/images/index-p02.jpg"),
          bookname: "灵境行者",
          writer: "卖报小郎君",
        },
        {
          src: require("../assets/images/index-p01.jpg"),
          bookname: "夜的命名术",
          writer: "会说话的肘子",
        },
        {
          src: require("../assets/images/index-p03.jpg"),
          bookname: "深空彼岸",
          writer: "辰东",
        },
        {
          src: require("../assets/images/index-p04.jpg"),
          bookname: "大夏文圣",
          writer: "七月末时",
        },
        {
          src: require("../assets/images/index-p05.jpg"),
          bookname: "不科学御兽",
          writer: "清泉流响",
        },
      ],
            book3: [
        {
          src: require("../assets/images/index-p03.jpg"),
          bookname: "灵境行者",
          writer: "卖报小郎君",
        },
        {
          src: require("../assets/images/index-p02.jpg"),
          bookname: "夜的命名术",
          writer: "会说话的肘子",
        },
        {
          src: require("../assets/images/index-p01.jpg"),
          bookname: "深空彼岸",
          writer: "辰东",
        },
        {
          src: require("../assets/images/index-p04.jpg"),
          bookname: "大夏文圣",
          writer: "七月末时",
        },
        {
          src: require("../assets/images/index-p05.jpg"),
          bookname: "不科学御兽",
          writer: "清泉流响",
        },
      ],
            book4: [
        {
          src: require("../assets/images/index-p04.jpg"),
          bookname: "灵境行者",
          writer: "卖报小郎君",
        },
        {
          src: require("../assets/images/index-p03.jpg"),
          bookname: "夜的命名术",
          writer: "会说话的肘子",
        },
        {
          src: require("../assets/images/index-p02.jpg"),
          bookname: "深空彼岸",
          writer: "辰东",
        },
        {
          src: require("../assets/images/index-p01.jpg"),
          bookname: "大夏文圣",
          writer: "七月末时",
        },
        {
          src: require("../assets/images/index-p05.jpg"),
          bookname: "不科学御兽",
          writer: "清泉流响",
        },
      ],
    };
  },
  methods: {
    change(a) {
      this.num = a;
    },
  },
};
</script>

