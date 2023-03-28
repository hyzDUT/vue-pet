<template>
  <div class="home">
    <div >
    <el-carousel :interval="4000" height="200px" style="padding-top: 0; padding-bottom: 20px;">
      <el-carousel-item v-for="item in list" :key="item.id" >
        <img :src="item.image"  style="max-width: 100%; height: 200px;"  alt="">
      </el-carousel-item>
    </el-carousel>
    </div>
    <div class="down">
    <div class="title">宠物分类</div>
    <div class="list">
      
      <div  class="avatar-container">
        <div class="row">
        <router-link to='/cat'>
          <div class="avatar-image">
          <el-avatar class="my-avatar1" shape="circle" :fit="scale-down" :size="80"></el-avatar>
          </div>
          <div>猫类</div>
        </router-link>
        
      </div>
      <div>
        <router-link to='/dog'>
          <div class="avatar-image">
          <el-avatar class="my-avatar2" shape="circle" :fit="scale-down" :size="80" ></el-avatar>
        </div>
          <div>犬类</div>
        </router-link>
        
      </div>
      <div >
        <router-link to='/climb'>
          <div class="avatar-image">
          <el-avatar class="my-avatar3" shape="circle" :fit="scale-down" :size="80"></el-avatar>
          </div>
          <div>爬行类</div>
        </router-link>
      </div>
      
      </div>
      <div class="row">
      <div >
        <router-link to='/littlepet'>
          <div class="avatar-image">
          <el-avatar class="my-avatar4" shape="circle" :fit="scale-down" :size="80"></el-avatar>
        </div>
          <div>小宠物类</div>
        </router-link>
      </div>

      <div >
        <router-link to='/fish'>
          <div class="avatar-image">
          <el-avatar class="my-avatar5" shape="circle" :fit="scale-down" :size="80" ></el-avatar>
        </div>
          <div>水族类</div>
        </router-link>
      </div> 
      </div>
    </div>
    <div>
      <div class="title">宠物百科小知识</div>
      <div class="list">
      <div>
        <router-link to='/lpetk'>
          <img src="../assets/image/know/momo.jpg" alt="" />
          <div>小宠相关</div>
        </router-link>
      </div>

      <div>
        <router-link to='/food'>
          <img src="../assets/image/know/food.jpg" alt="" />
          <div>日常饮食</div>
        </router-link>
      </div>

      <div>
        <router-link to='/climbk'>
          <img src="../assets/image/know/climb.jpg" alt="" />
          <div>爬宠知识</div>
        </router-link>
      </div>
    </div>
    </div>
    <div class="title">宠物记录</div>
    <div class="note">
      <div>
        <router-link to='/photo'>
          <img src="../assets/image/photo.png" alt="" />
        </router-link>
      </div>
      <div>
        <router-link to='/note'>
          <img src="../assets/image/shower.png" alt="" />
        </router-link>
      </div>
      <div>
        <router-link to='/note'>
          <img src="../assets/image/note.png" alt="" />
        </router-link>
      </div>
    </div>
  </div>
  
  </div>
</template>

<script>
// @ is an alias to /src

import api from '../api/index'
import axios from 'axios'
import base from '../api/base'
export default {
  name: 'Home',
  
  data() {
    return {
      list: [
        {
          id: 1,
          image: require('../assets/image/1.jpg')
        },
        {
          id: 2,
          image: require('../assets/image/2.jpg')
        },
        {
          id: 3,
          image: require('../assets/image/3.jpg')
        },
        {
          id: 4,
          image: require('../assets/image/4.jpg')
        },
        {
          id: 5,
          image: require('../assets/image/5.jpg')
        }
      ]
    };
  }
  
}

</script>
<style scoped lang='less'>
.my-avatar1 {
  background-image: url("../assets/image/cat.jpg");
  background-size: cover;
}
.my-avatar2 {
  background-image: url("../assets/image/dog.jpg");
  background-size: cover;
}
.my-avatar3 {
  background-image: url("../assets/image/climb.jpg");
  background-size: cover;
}
.my-avatar4 {
  background-image: url("../assets/image/littlepet.jpg");
  background-size: cover;
}
.my-avatar5 {
  background-image: url("../assets/image/fish.jpg");
  background-size: cover;
}
.down{
  padding: 0.2rem;
}
.title {
    margin-bottom: 0.2rem;
    font-size: 0.3rem;
    font-weight: bold;
    color: #666;
}
.title::before {
    content: "";
    border-left: 0.1rem solid rgb(9, 60, 202);
    font-size: 0.26rem;
    margin-right: 0.1rem;
  }

.list {
  display: flex;
  padding-bottom: 0.2rem;
  > div {
    flex: 1;
    text-align: center;
    color: #666;
    img {
      width: 0.8rem;
      height: 0.8rem;
    }
    .avatar-container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 10px;
}


.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.avatar-image {
  margin-bottom: 10px;
}
.avatar-label {
  font-size: 16px;
}
  }
}
.note{
  display: flex;
  padding-bottom: 0.2rem;
   div {
    flex: 1;
    text-align: center;
    color: #666;
    img {
      width: 2rem;
      height: 1.2rem;
    }
  }
}

</style>
