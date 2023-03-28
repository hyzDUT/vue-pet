<template>
  <div>
    <div class="info">
        <div class="title">宠物信息</div>
        <img  :src="this.$route.params.coverURL"  width="100%" />
        
        <p>名称：{{ this.$route.params.name }}</p>
        <p>英文名：{{ this.$route.params.engName }}</p>
        <p>祖籍：{{ this.$route.params.nation }}</p>
        <p>性格：{{ this.$route.params.characters }}</p>
        <p>易患病：{{ this.$route.params.easyOfDisease }}</p>
        <p>寿命：{{ this.$route.params.life }}</p>
    
    <div class="hot">
        
            <!-- <img class="icon" src="../../assets/image/citiao.jpg" width="60px"> -->
            <div class="title" >词条
            <a href="##">查看更多<img src="../../assets/image/more.png" alt=""/></a>
            </div>
        <ul class="list">
            <li>
                <span>外形</span>  体态特征
                <img src="../../assets/image/right.png" class="feature" alt="" />
                
                <p>{{ isExpanded1 ? this.$route.params.feature : this.$route.params.feature.slice(0, 40) + '...' }}</p>
                <a @click="isExpanded1 = !isExpanded1">
                    {{ isExpanded1 ? '收起' : '展开' }}
                </a>
            
            </li>
            <li>
                <span>食物</span>  喂养注意
                <img src="../../assets/image/right.png" class="feed" alt="" />
                <p>{{ isExpanded2 ? this.$route.params.feed : this.$route.params.feed.slice(0, 40) + '...' }}</p>
                <a @click="isExpanded2 = !isExpanded2">
                    {{ isExpanded2 ? '收起' : '展开' }}
                </a>
            </li>
            <li>
                <span>注意</span>  照顾须知
                <img src="../../assets/image/right.png" class="care" alt="" />
                <p>{{ isExpanded3 ? this.$route.params.care : this.$route.params.care.slice(0, 40) + '...' }}</p>
                <a @click="isExpanded3 = !isExpanded3">
                    {{ isExpanded3 ? '收起' : '展开' }}
                </a>
            </li>
        </ul>
    </div>
    </div>
  </div>
</template>

<script>

export default{
    
data() {
  return {
    isExpanded1: false,
    isExpanded2: false,
    isExpanded3: false,
  };
},

}

  

</script>

<style lang='less' scoped>

.info {
  padding: 0.2rem;
  .title {
    margin-bottom: 0.2rem;
    font-size: 0.3rem;
    font-weight: bold;
    color: #666;
    a {
      float: right;
      font-weight: normal;
      color: #4169e2;
      font-size: 0.26rem;
      img {
        width: 0.26rem;
      }
    }
  }
  .title::before {
    content: "";
    border-left: 0.1rem solid rgb(9, 60, 202);
    font-size: 0.26rem;
    margin-right: 0.1rem;
  }
  p {
    line-height: 0.5rem;
    color: #666;
  }
  .hot {
    padding-top: 0.2rem;
    border-bottom: 1px solid #eee;
    .icon {
      width: 1.2rem;
      vertical-align: top;
    }
    .list {
      li {
        line-height: 0.44rem;
        margin-bottom: 0.2rem;
        letter-spacing: 0.03rem;
        font-size: 0.3rem;
        color: #666;
        a {
      font-weight: normal;
      color: #4169e2;
      font-size: 0.26rem;
    }
      }
      span {
        background: #ff5555;
        color: #fff;
        font-size: 0.26rem;
        padding: 0.02rem 0.06rem;
        border-radius: 0.06rem;
      }
      img {
        float: right;
        width: 0.24rem;
        padding-right: 0.2rem;
      }
    }
  }
}

</style>