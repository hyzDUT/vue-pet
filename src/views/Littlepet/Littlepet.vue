<template>
  <div>
        <router-link :to="{name:'info',params:{care:item.careKnowledge,feed:item.feedPoints,name:item.name,engName:item.engName,nation:item.nation,characters:item.characters,easyOfDisease:item.easyOfDisease,life:item.life,coverURL:item.coverURL,feature:item.feature}}" tag="div" v-for="(item,index) in littlepet" :key="index">
          <div class="album">
            <el-avatar shape="circle" :fit="scale-down" :size="100" :src="item.coverURL" :alt="item.name"></el-avatar>
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
name: 'littlepet',
data(){
  return{
    littlepet:[]
    
  }
},
props:{
  title:{
    type:String,
    default:"小宠物类"
  },
  type:{
    type:String,
    default:"3"
  }
},
created(){
  // 请求接口
  api.getlittlepetinfo()
  .then(res=>{
    // console.log(res.data);
    console.log(res.data.result);
    // let data=res.data.result.list;
    this.littlepet=res.data.result.list

  })
}

}
</script>

<style>
.album{

  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
.name{
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 20px;
}
</style>