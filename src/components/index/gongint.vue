<template>
  <div class="hello">
    <div class="img">
      <img :src="content.smallimg" alt="">
    </div>
    <div class="int">
      <div class="price">
       <span> {{content.price}}</span>
        <div class="jie">
          <b>距离结束还有</b>
          <em v-if="jiezhi">已截止</em>
          <em v-else>{{time.d}}天{{time.h}}时{{time.m}}分{{time.s}}秒</em>
        </div>
      </div>
      <div class="name">{{content.productname}}</div>
      <div class="bot">
        <span>发布时间：{{start}}</span><span>截止时间：{{end}}</span>
      </div>
    </div>
    <div class="comint">
      <ul>
        <li>
          <span>企业名称</span>
          <span>{{content.companyname}}</span>
        </li>
        <li>
          <span>产品数量</span>
          <span>{{content.number}}</span>
        </li>
        <li>
          <span>产品单价</span>
          <span>{{content.price}}</span>
        </li>
        <li>
          <span>发货期限</span>
          <span>{{content.dueTime}}</span>
        </li>
        <li>
          <span>所属行业</span>
          <span>{{content.industry}}</span>
        </li>
        <li>
          <span>联系人</span>
          <span>{{content.industry}}</span>
        </li>
        <li>
          <span>联系电话</span>
          <span>{{content.telephone}}</span>
        </li>
        <li>
          <span>电子邮箱</span>
          <span>{{content.email}}</span>
        </li>
        <li>
          <span>公司地址</span>
          <span>{{content.address}}</span>
        </li>
        <li>
          <span>备注</span>
          <span>{{content.remarks}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "gongint",
    data() {
      return {
        content:'',
        timer:null,
        jiezhi:false,
        start:'',
        end:'',
       time:{
         d:'',
           h:'',
           m:'',
           s:''
       },
      }
    },
    created() {
      var id=this.$route.query.id;
      this.axios.post('/web/supplyanddemand/supplyanddemand',{Id:id}).then(({data})=>{
        console.log(data.data);
        this.content=data.data;
        this.start=this.clearFen(data.data.publishertime);
        this.end=this.clearFen(data.data.endtime);
        var that=this;
        this.$nextTick(function () {
          this.timer=setInterval( that.dao,1000);
        })
      })
    },
    methods:{
      //倒计时
      dao(){
        //获取当前时间
        var date = new Date();
        var now = date.getTime();
        //设置截止时间
        /*   var a=this.content.endtime.splice(this.content.endtime.indexOf(""),1);*/
        var endDate = new Date(this.content.endtime);
        //获取开始的时间戳
        var starts=new Date(this.content.publishertime);
        var start=starts.getTime();//发布时间的时间戳
        var end = endDate.getTime();//截止时间的时间戳
        //计算已经 过去的时间占得百分比
        /*
        * (当前时间的时间戳-开始的时间戳)/(截止时间的时间戳-开始的时间戳) */
        var b= (now-start)/(end-start);
        this.state=Math.floor(b*100);

        //时间差
        var leftTime = end - now;
        //定义变量 d,h,m,s保存倒计时的时间
        if (leftTime >= 0) {
          var  d = addzero(Math.floor(leftTime / 1000 / 60 / 60 / 24));
          var h = addzero(Math.floor(leftTime / 1000 / 60 / 60 % 24));
          var m =addzero( Math.floor(leftTime / 1000 / 60 % 60));
          var s = addzero(Math.floor(leftTime / 1000 % 60));
          this.time.d=d;
          this.time.h=h;
          this.time.m=m;
          this.time.s=s;
          this.jiezhi=false;
        };
        if(this.time.d==""){
          this.jiezhi=true;
        }
        function addzero(i) {
          return  i<10?'0'+i:i
        }
        //递归每秒调用countTime方法，显示动态时间效果
      },
      clearFen(i) {
        return i.substr(0, i.indexOf(" "));
      },
    },
    destroyed () {
      clearInterval(this.timer);
    },
  }
</script>

<style scoped lang="less">
  .hello{
    padding: 0 15px;
    .img{
      margin-top: 30px;
      width: 100%;
      height: 120px;
      img{
        display: block;
        width: 100%;
        height: 120px;
        border-radius: 4px;
      }
    }
    .int{
      margin-top: 10px;
      height:90px;
      background:#fff;
      border-radius:4px;
      box-shadow:0px 0px  5px 2px #ccc;
      padding: 0 15px;
      .price{
        height: 28px;
        overflow: hidden;
        span{
          font-size: 16px;
          display: block;
          float: left;
          height: 28px;
          line-height: 28px;
          color: #e60000;
        }
        .jie{
          height: 28px;
          line-height: 28px;
          float: right;
          overflow: hidden;
          >*{
            display: block;
            float: left;
            font-size: 14px;
          }
          b{
            color: #595959;
          }
          em{
            color: #e60000;
            margin-left: 5px;
          }
        }
      }
      .name{
        height: 30px;
        line-height: 30px;
        width:224px;
        font-size:16px;
        font-weight:400;
        color:#595959;
        overflow: hidden;
      }
      .bot{
        height: 24px;
        span{
          display: block;
          height: 24px;
          line-height: 24px;
          color: #595959;
          float: left;
          font-size: 14px;
        }
        span:last-child{
          margin-left: 30px;
        }
      }
    }
    .comint{
      margin-top: 10px;
      background:#fff;
      border-radius:4px;
      box-shadow:0px 0px  5px 2px #ccc;
      padding: 5px 15px;
      margin-bottom: 50px;
      ul{
        padding-bottom: 15px;
        li{
          margin-top: 4px;
          overflow: hidden;
          border-bottom: 1px dashed #cbcbcb ;
          span{
            display: block;
            line-height: 32px;
            float: left;
            font-size: 14px;
          }
          span:first-child{
            width: 60px;
            overflow: hidden;
            margin-right: 10px;
            font-weight: 600;
            text-align: right;
          }
          span:last-child{
            width: 230px;
          }
        }
      }
    }
  }
</style>
