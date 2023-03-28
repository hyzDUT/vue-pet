<template>
    <div class="food">
      <!-- 顶部logo -->
      <img width="100%" src="../../assets/image/foodup.jpg" alt="" />
      <!-- 物资内容 -->
      <div class="wrapper">
        <!-- 选项卡：1. 自己写  2. vant库里面  3. 修改vant样式 /deep/ 类名{ }-->
        <!-- vant库-tabs标签 -->
        <van-tabs v-model="active" animated>
          <van-tab v-for="item in arr" :title="item.title" :key='item.title'>
              <!-- <img width="100%" src="../../assets/images/jiujing.png" alt="" /> -->
              <img width="100%" :src="item.img" alt="" />
          </van-tab>
        </van-tabs>
  
      </div>
    </div>
  </template>
  
  <script>
  //导入图片
  import img1 from '../../assets/image/food1.jpg'
  import img2 from '../../assets/image/cat/2.jpg'
  import img3 from '../../assets/image/dog/9.jpg'
  export default {
    data() {
      return {
        active: 0,
        arr:[
            {
                img:img1,
                title:'总体'
            },
            {
                img:img2,
                title:'猫猫篇'
                
            },
            {
                img:img3,
                title:'狗狗篇'
            }
        ]
      };
    },
  };
  </script>
  
  <style lang='less' scoped>
  .food {
    background: #f7f5f5;
  }
  .wrapper {
    background: #f7f7f8;
    padding: 0.2rem;
  }
  </style>