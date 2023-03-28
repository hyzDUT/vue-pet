<template>
    <div class="header">
      <p>{{ title }}</p>
      <nav>
        <ul>
          <li><button @click="goback"><img src="../assets/image/left.png" width="50px" alt=""/></button></li>

        </ul>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    name: "Header",
    methods:{
        goback(){
            this.$router.go(-1);
        }
    },
    data() {
      return {
        title: "宠物伴你",
      };
    },
  };
  </script>
  
  <style>
  .header {
    display: flex;

    background-color: #333;
    color: #fff;
    height: 60px;
    position: relative;
    
  }
  .header p{
     position: absolute;
    
    justify-content: center;
    align-items: center; 
   
  }
  
  nav ul {
    display: flex;
    list-style: none;
    margin-left: 0;

    padding: 0;
  }
  nav li button{
    float: left;
    background-color: #333;
    border: #333;
  }
  
  </style>
  