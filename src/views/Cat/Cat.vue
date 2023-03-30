<template>
    <div class="all">
          <router-link :to="{name:'info',params:{care:item.careKnowledge,feed:item.feedPoints,name:item.name,engName:item.engName,nation:item.nation,characters:item.characters,easyOfDisease:item.easyOfDisease,life:item.life,coverURL:item.coverURL,feature:item.feature}}" tag="div" v-for="(item,index) in cat" :key="index">
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
import Header from "@/components/Header.vue";
export default{
  name: 'cat',
  components: {
    Header,
  },
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
/* .top{
  height: 30px;
  background-color:lightblue;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 30px;
} */
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