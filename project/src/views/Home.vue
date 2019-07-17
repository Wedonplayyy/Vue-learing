<template>
  <div class="container">
    <div class="flex-container">
      <div class="box1">
        <van-dropdown-menu style="background-color: #eeeeee;margin:auto;width:80px;">
          <van-dropdown-item />
<!--            v-model="" :options="" -->
<!--          />-->
        </van-dropdown-menu>
      </div>
      <div class="box2" >
        <van-search
          placeholder="请输入搜索关键词"
          show-action
          shape="round"
          @search="onSearch"
        >
          <div slot="action" @click="onSearch">搜索</div>
        </van-search>
      </div>
    </div>

    <!--      轮播图-->
    <div class="swipe">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in swipeImgs" :key="item.goodsId">
          <img :src="item.image" width="100%" height="200px"/>
        </van-swipe-item>
      </van-swipe>
    </div>

<!--分类-->
    <div class="grid">
      <van-grid :border="false" :column-num="5"  class="box">
        <van-grid-item
          v-for = "(item, index) in category"
          :icon="item.image"
          :text="item.mallCategoryName" to="/user">
        </van-grid-item>
      </van-grid>
    </div>
<!--    横幅-->
    <div class="img">
      <img :src="this.data.advertesPicture.PICTURE_ADDRESS" width="100%">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    components: {},
    props: {},
    data() {
      return {
        data:{},
        swipeImgs: {},
        category:{},
      };
    },
    methods: {
      onSearch(){}
    },
    mounted() {
      this.$axios.req('api/recommend')
        .then((res) => {
          if(res){
            this.data = res.data.data
            this.swipeImgs = this.data.slides
            this.category = this.data.category
          }
        }).catch((err) => {
        console.log(err);
      });
    },
  };

</script>

<style scoped>
  .container{
    background-color: #eeeeee;
    height:2000px;
  }
  .flex-container {
    display: -webkit-flex;
    display: flex;
    height: 50px;
  }
  .box1{
    display: -webkit-flex;
    display: flex;
    width: 20%;
    height:auto;
    margin: 0 auto;
    /*padding:10px;*/
  }
  .box2{
    width: 80%;
    margin: 0 auto;
    /*padding: 10px 5px;*/
  }
  .swipe{
    /*margin: 20px;*/
    /*padding: 15px;*/
    /*height:150px;*/
  }
  .grid{
    /*margin: 10px;*/
    padding: 5px;
    height:auto;
    shape:round;
  }
  .img{
    /*width: 100%;*/
    margin:10px;
  }
</style>
