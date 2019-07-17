<template>
  <div id="app">
    <router-view/>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home" to="/">商城</van-tabbar-item>
      <van-tabbar-item icon="ellipsis" dot to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" info="5">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" info="20" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>


<script>
  export default {
    name: 'App',
    data() {
      return {
        active: 0,
      };
    },
  };
</script>
<style>
  /*#app {*/
  /*  font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*  -webkit-font-smoothing: antialiased;*/
  /*  -moz-osx-font-smoothing: grayscale;*/
  /*  text-align: center;*/
  /*  color: #2c3e50;*/
  /*}*/
  /*#nav {*/
  /*  padding: 30px;*/
  /*}*/

  /*#nav a {*/
  /*  font-weight: bold;*/
  /*  color: #2c3e50;*/
  /*}*/

  /*#nav a.router-link-exact-active {*/
  /*  color: #42b983;*/
  /*}*/
</style>
