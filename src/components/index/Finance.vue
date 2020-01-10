<template>
    <div class="warp">
      <ul>
        <li @click="goint">
          <img src="../../../static/27.png" alt="">
          <span>中国建设银行</span>
        </li>
        <li  @click="goint">
          <img src="../../../static/26.png" alt="">
          <span>中国工商银行</span>
        </li>
        <li  @click="goint">
          <img src="../../../static/28.png" alt="">
          <span>中国民生银行</span>
        </li>
        <li  @click="goint">
          <img src="../../../static/29.png" alt="">
          <span>中国农业银行</span>
        </li>
        <li  @click="goint">
          <img src="../../../static/30.png" alt="">
          <span>中国银行</span>
        </li>
        <li  @click="goint">
          <img src="../../../static/31.png" alt="">
          <span>中国邮政银行</span>
        </li>
        <li  @click="goint">
          <img src="../../../static/32.png" alt="">
          <span>中国招商银行</span>
        </li>
        <li  @click="goint">
          <img src="../../../static/33.png" alt="">
          <span>中信银行</span>
        </li>
      </ul>
    </div>

</template>

<script>
    export default {
        name: "Finance",
        data() {
            return {}
        },
      methods:{
          goint(){
            //this.$router.push('/bank')
             AndroidWebView.jump_new_window('http://101.37.65.219:8081/app/#/bank');
          }
      }
    }
</script>

<style scoped lang="less">
.warp{
  padding: 0 15px;
  ul{
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    li{
      width: 33%;
      height: 100px;
      margin-bottom: 20px;
      display: flex;
      overflow: hidden;
      padding: 0 5px;
      flex-direction: column;
      img{
       width: 60px;
        height:60px;
        margin: 0 auto;
      }
      span{
        margin-top: 10px;
        width: 100%;
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 14px;
        font-weight: 500;
      }
    }
    li.clear{
      margin-right: 0;
    }
  }
}
</style>
