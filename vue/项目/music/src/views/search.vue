<template>
  <div class="about">
    <div class="search">
      <span></span>
      <input type="text" placeholder="搜索歌曲、歌手、专辑"/>
    </div>
    <span class="hotsearch">热门搜索</span>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
  .search{
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #333;
    border-color: rgba(0,0,0,.1);
  }
  .hotsearch{
    font-size: 11px;
   
    margin:20px 10px;
   float: left;
  }
  input{
    width: 90%;
    height: 30px;
    margin-top: 15px;
    border-radius: 20px;
    border:none;
    background-color: #EBECEC;
   text-indent: 30px;
   position: relative;
  }
 .search>span{
   
    display: inline-block;
    background-image:url("../assets/xiazai.svg");
    width: 13px;
    height: 13px;
    z-index: 99;
    position: absolute;
left: 27px;
    top: 66px;
  }
</style>