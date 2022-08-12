<template >
    <main>
        <button v-on:click='add()'>按钮</button>
        <p v-show="b" >233333</p>
    </main>
</template>
<style scoped>
    .s4-ul1{
        display: flex;
        justify-content: space-between;
    }
    .s4-ul2{
        width: 90vw;
        display: flex;
        overflow: auto;
        text-align: center;
    }
    .s4-ul2 ul{
        display: flex;
    }
    .s4-ul2 li{
        margin-right: 4vw;
    }
    .s4-ul2 p{
        font-size: 2vw;
    }
    .s4-ul2 span{
        font-size: 12px;
    }
    .s4ul1 .current{
        background-color: red;
        color: white;
    }
    .s4-ul2 img{
        width: 16vw;

    }
</style>
<script>
// var  ul1=document.getElementById('list1').children
// ul1[0].style.color='red'
export default {
  data() {
    return {
      List: ['畅销榜', '风云榜', '签约榜', '推荐榜'],
      num:0,
      b:false,
      book:[
        {
            src:require('../assets/images/index-p01.jpg'),
            bookname:'灵境行者',
            writer:'卖报小郎君',
        },
        {
            src:require('../assets/images/index-p02.jpg'),
            bookname:'夜的命名术',
            writer:'会说话的肘子',
        },
        {
            src:require('../assets/images/index-p03.jpg'),
            bookname:'深空彼岸',
            writer:'辰东',
        },
        {
            src:require('../assets/images/index-p04.jpg'),
            bookname:'大夏文圣',
            writer:'七月末时',
        },
        {
            src:require('../assets/images/index-p05.jpg'),
            bookname:'不科学御兽',
            writer:'清泉流响',
        }
      ]
    };
  },
  methods:{
    add(){
    this.b=!this.b;
     }
  }
};
</script>
