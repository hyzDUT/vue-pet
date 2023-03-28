<template>
<div class="all">
    <div class="loginbg">
        <img :src="imgUrl" ref="img">
    </div>
    <div class="loginbox">
        <h1>Login</h1>
        <p><i><img src="../assets/image/login/账号.png" class="icon"></i>
            <input type="text"></p>
        <p><i><img src="../assets/image/login/密码.png" class="icon"></i>
            <input type="password"></p>
        
        
        <router-link to='/home'>
            <div class="loginbutton" @click="login">登录</div>
        </router-link>
    </div>
</div>

</template>

<script>
import {ref} from 'vue'

export default{
    name:'login',
   
    setup(){
        let timer;
        let imgUrl=ref(require("../assets/image/login/1.jpg"));
        let index=1;
        // 开启定时器轮播背景图片
        function setTimer(){
            this.timer=setInterval(()=>{
                this.$refs.img.style.opacity=1;
                index=index<8?index+1:1;
                this.imgUrl = require(`../assets/image/login/${index}.jpg`);
                setTimeout(()=>{
                    this.$refs.img.style.opacity=0.8;
                },4000)
            },5000);
            setTimeout(()=>{
                this.$refs.img.style.opacity=0.8;
                },4000)
        }
        //登录回调
        function login(){
            alert('登陆成功')
        }
        //给第一张图片加动画
        
        return{
            imgUrl,
            setTimer,
            login
        }
    },
    mounted(){
        this.setTimer();
    }
}
</script>

<style scoped lang='less'>
body{
    margin: 0;
}

.loginbg{
    width: 100%;
    height: 850px;
    overflow: hidden;
    position: absolute;
    top: 0;
    z-index: 0;
   
}
.loginbg  img {
    width: 100%;
    transition: 1.5s all;
}
.loginbox{
    width: 300px;
    height: 180px;
    border: 1px solid #2b2b2b;
    border-radius: 10px;
    box-shadow: 0 0 10px 10px #000030;
    position: absolute;
    z-index: 1;
    /* 水平居中 */
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto auto;
   
}
.loginbox  h1{
    text-align: center;
    color: #fff;
    font-family:"Arial";

}
.loginbox p{
    font-size: 18px;
    display: block;
    width: 380px;
    height: 20px auto;
}
.loginbox i{
    display: inline-block;
    width: 25px;
    height: 25px;
    padding-top: 5px;
    margin-left: 10px;
}
.icon{
    width: 25px;
}
.loginbox input{
    width: 200px;
    height: 18px;
    font-size: 18px;
    margin-left: 8px;
    background: #ffffff00;
    border: none;
    border-bottom: 2px solid #000;
    color: #D7DDE8;
}
.loginbox input:focus{
    outline: none;
}
.loginbutton{
    width: 200px;
    height: 40px;
    margin: 30px auto;
    text-align: center;
    line-height: 40px;
    background: #fff;
    cursor: pointer;
    border-radius: 10px;
}
.loginbutton:hover{
        box-shadow: 0 0 10px 10px #00000020;
    }
</style>