<template>
  <div class="about">
    <Title>推荐歌单</Title>
    <ul class="recommendMusicList">
      <router-link
        v-for="rem in recommendMusicList"
        :key="rem.id"
        to="/"
        tag="li"
      >
        <div>
          <img :src="rem.picUrl" alt="" />
          <span>{{ rem.playCount | formatNum }}</span>
        </div>
        <p>{{ rem.name}}</p>
      </router-link>
    </ul>
    <Title>最新音乐</Title>
    <MusicItem :newMusicList="newMusicList"></MusicItem>
  </div>
</template>
<script>
import Title from "../components/Title";
import MusicItem from "../components/MusicItem";
export default {
  name: "Recommend",
  components: {
    Title,
    MusicItem
  },
  data() {
    return {
      recommendMusicList: [],
      newMusicList:[]
    };
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.$http.get("/personalized?limit=6").then((data) => {
        // console.log(data);
        vm.recommendMusicList = data.data.result;
      });
      vm.$http.get("/personalized/newsong?limit=20").then((data) => {
        // console.log(data);
        vm.newMusicList = data.data.result;
      });
    });
  },
  filters: {
    formatNum(value) {
      return (value / 10000).toFixed(1) + "万";
    },
  
  },
};
</script>
<style lang="less" scoped>
ul.recommendMusicList{
  display:flex;
 flex-wrap: wrap;
 justify-content: space-between;

}
li{
width: 33%;
}
div{
  position: relative;
}
span{
position: absolute;
font-size: 11px;
color: white;
top: 0px;
right: 0px;
text-shadow: 1px 0 0 rgba(0,0,0,.15);

}
p{
        text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
      margin-bottom: 10px;
      font-size: 10px;
}
</style>