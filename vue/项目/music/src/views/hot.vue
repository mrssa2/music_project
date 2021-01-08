<template>
  <div class="about">
    <span></span>
    <P>更新日期：{{time}}</P>
    <HotItem :HotList="HotList"></HotItem>
  </div>
</template>
<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
p {
  color: white;
  font-size: 10px;
  position: absolute;
  top: 108px;
  left: 20px;
}
.about {
  width: 100%;
  height: 200px;
  background: url("../assets/hot_music_bg_2x.jpg") no-repeat;
  background-size: contain;
  position: relative;
}
.about > span {
  display: inline-block;
  background-image: url(../assets/index_icon_2x.png);
  background-size: 166px 97px;
  width: 142px;
  height: 68px;
  background-position: -24px -30px;
  position: absolute;
  top: 35px;
  left: 20px;
}
</style>
<script>
import HotItem from "../components/HotItem";
export default {
  name: "Hot",

  components: {
    HotItem,
  },
  data() {
    return {
      HotList: [],
      time: "",
    };
  },
  mounted() {
    let datetime = new Date();
    let m = datetime.getMonth() + 1;
    m = m > 10 ? m : "0" + m;
    let d = datetime.getDate();
    d = d > 10 ? d : "0" + d;
    this.time = m + "月 " + d + "日";
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.$http.get("/toplist/detail").then((data) => {
        console.log(data.data.list[3].tracks);
        vm.HotList = data.data.list[3].tracks;
        // console.log('111111mrc',vm.HotList);
      });
    });
  },
};
</script>