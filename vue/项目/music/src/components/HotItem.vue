<template>
    <ul class="HotList">
        <router-link v-for="Hotitem in HotList" :key="Hotitem.id" tag="li" to="/">
        <div class="">{{Hotitem.first}}</div>
        <p>{{Hotitem.second}}-{{Hotitem.first}}</p>
        </router-link>
     
    </ul>
</template>
<style lang="less" scoped>
.HotList{
    li{
        display:flex;
    margin-top:10px;
    padding-left:10px;
        div.left{
            flex:1;
            text-align: left;
             border-bottom: 1px solid #ddd;
            div{
                font-size: 17px;
                color: black;
     
            }
            p{
                font-size: 12px;
                color: #888;
            }
        }
    }
}
</style>
<script>
export default {
    name:"HotItem",
    props:{
        HotList:Array
    }
}
</script>