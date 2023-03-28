<template>
    <div id="climbk">
        <div height="80px">
    <el-carousel :interval="4000" height="750px" style="padding-top: 0; padding-bottom: 20px;">
      <el-carousel-item v-for="item in list" :key="item.id" >
        <img :src="item.image"  style="max-width: 100%; height: 750px;"  alt="">
      </el-carousel-item>
    </el-carousel>
    </div>
    </div>
</template>

<script >
export default {
    name: "climbk",
    data() {
        return {
            list: [
        {
          id: 1,
          image: require('../assets/image/climb/2.jpg')
        },
        {
          id: 2,
          image: require('../assets/image/climb/3.jpg')
        },
        {
          id: 3,
          image: require('../assets/image/climb/4.jpg')
        },
        {
          id: 4,
          image: require('../assets/image/climb/5.jpg')
        },
        {
          id: 5,
          image: require('../assets/image/climb/6.jpg')
        }
      ]
        }
    },
    components: {},
    methods: {}
}
</script>

<style >

</style>
