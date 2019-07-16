<template>
    <div class="container">
      <div class="flex-container">
        <div class="box1">
          <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" />
          </van-dropdown-menu>
        </div>
        <div class="box2">
          <van-search
            v-model="value"
            placeholder="请输入搜索关键词"
            show-action
            shape="round"
            @search="onSearch"
          >
            <div slot="action" @click="onSearch">搜索</div>
          </van-search>
        </div>
      </div>

      <div class="swipe">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img :src="image"  width="100%" height="200px" />
          </van-swipe-item>
        </van-swipe>
      </div>



      <div class="grid">
        <van-grid :border="false" :column-num="5"  class="box">
          <van-grid-item icon="https://img.yzcdn.cn/vant/apple-1.jpg" text="新鲜水果" url="https://www.baidu.com">
          </van-grid-item>
          <van-grid-item icon="https://img.yzcdn.cn/vant/apple-2.jpg" text="中外名酒" >
          </van-grid-item>
          <van-grid-item icon="https://img.yzcdn.cn/vant/apple-3.jpg" text="营养奶品" >
          </van-grid-item>
          <van-grid-item icon="https://img.yzcdn.cn/vant/apple-4.jpg" text="食品饮料" >
          </van-grid-item>
          <van-grid-item icon="https://img.yzcdn.cn/vant/apple-5.jpg" text="个人护理" >
          </van-grid-item>
        </van-grid>
      </div>
        <van-tabbar v-model="active">
          <van-tabbar-item icon="wap-home">商城</van-tabbar-item>
          <van-tabbar-item icon="ellipsis" dot>分类</van-tabbar-item>
          <van-tabbar-item icon="shopping-cart-o" info="5">购物车</van-tabbar-item>
          <van-tabbar-item icon="contact" info="20">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  },
  data() {
    return {
      value1: 0,
      value: "",
      active: 0,
      option1: [
        { text: '成都', value: 0 },
        { text: '武汉', value: 1 },
        { text: '南京', value: 2 }
      ],
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
        "https://img.yzcdn.cn/vant/apple-3.jpg",
        "https://img.yzcdn.cn/vant/apple-4.jpg"
      ]
    }
  },
  methods:{
    onSearch(){

    }
  }
};
</script>

<style scoped>
  .container{
    height:2000px;
  }
  .flex-container{
    display: -webkit-flex;
    display: flex;
    height: 90px;
    font-size: 20px;
  }
  .box1{
    width: 15%;
    margin: auto;
    padding:1px;
    font-size: 20px;
  }
  .box2{
    width: 75%;
    margin: auto;
    padding:1px;
  }
  .swipe{
    margin: 20px;
    background-color: #2b81af;
    padding: 15px;
    height:400px;
  }
  .grid{
    margin: 40px;
    padding: 5px;
    background-color: #5E740B;
    height: 100px;
  }


</style>
