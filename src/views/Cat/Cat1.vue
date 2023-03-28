<template>
    <div>
          <router-link :to="{name:'info',params:{name:item.name,engName:item.engName,nation:item.nation,characters:item.characters,easyOfDisease:item.easyOfDisease,life:item.life,coverURL:item.coverURL,feature:item.feature}}" tag="div" v-for="(item,index) in cat" :key="index">
            <div class="album">
               <img :src="item.coverURL" :alt="item.name">
              <div class="name">{{ item.name }}</div>
            </div>
          </router-link>
    </div>
</template>

<script>
import api from '../../api/index'
import axios from 'axios'
import base from '../../api/base'
export default{
  name: 'cat',
  data(){
    return{
      cat:[]
      
    }
  },
  props:{
    title:{
      type:String,
      default:"猫类"
    },
    type:{
      type:String,
      default:"0"
    }
  },
  created(){
    // 请求接口
    api.getcatinfo()
    .then(res=>{
      // console.log(res.data);
      console.log(res.data.result);
      // let data=res.data.result.list;
      this.cat=res.data.result.list

    })
  }

}
</script>

<style>

/* div {
    width: 64px;
    font-size: 12px;
    text-align: right;
} */

.mod-albums .gallery {
    overflow: hidden;
    margin: 0 -5px;
}

 .mod-albums .gallery .card {
    width: 33.3%;
    float: left;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 5px 10px;
}

.mod-albums .gallery .card .album {
  position: relative;
}

.mod-albums .gallery .card img {
    width: 100%;
    height: auto;
    border: 1px solid #eee;
}

.mod-albums .gallery .card .name {
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 4px;
    line-height: 14px;
    max-height: 28px;
    margin-bottom: 2px;
}
</style>