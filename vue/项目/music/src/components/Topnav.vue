<template>
 
    <ul class="topnav">
      <li><router-link to="/Recommend">推荐音乐</router-link></li>
      <li><router-link to="/Hot">热歌榜</router-link></li>
      <li><router-link to="/Search">搜索</router-link></li>
    </ul>
 
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.topnav{
  display:flex;
  border-bottom:1px solid #ddd;
}
li{
  line-height:40px ;
  flex: 1 1 auto;
  font-size: 15px;
}
a{
  display:inline-block;
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  color: #000;
   &.router-link-exact-active{
    color:red;
    border-bottom:2px solid red;
  }
}

</style>
