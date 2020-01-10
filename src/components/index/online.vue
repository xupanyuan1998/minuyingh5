<template>
    <div class="warp">
      <div class="tianqi">
        <div class="left">
            <div class="posi">
              <b>{{city}}</b><strong></strong><span>实时天气</span>
            </div>
            <div class="state">
              <em>{{wether.type}}</em><em>{{hight}}</em>
            </div>
            <div class="feng">
              <i>{{wether.fengxiang}}</i><i>{{low}}</i>
            </div>
        </div>
        <div class="img">
          <img v-if="wether.type=='晴'" src="../../../static/qing.png" alt="">
          <img v-if="wether.type=='小雨'" src="../../../static/xiaoyu.png" alt="">
          <img v-if="wether.type=='暴雪'" src="../../../static/baoxue.png" alt="">
          <img v-if="wether.type=='大雪'" src="../../../static/daxue.png" alt="">
          <img v-if="wether.type=='小雪'" src="../../../static/xiaoxue.png" alt="">
          <img v-if="wether.type=='雨夹雪'" src="../../../static/yujiaxue.png" alt="">
          <img v-if="wether.type=='暴雨'" src="../../../static/baoyu.png" alt="">
          <img v-if="wether.type=='大雨'" src="../../../static/dayu.png" alt="">
          <img v-if="wether.type=='雷阵雨'" src="../../../static/leizhenyu.png" alt="">
          <img v-if="wether.type=='中雨'" src="../../../static/zhongyu.png" alt="">
          <img v-if="wether.type=='阴'" src="../../../static/yin.png" alt="">
          <img v-if="wether.type=='多云'" src="../../../static/duoyun.png" alt="">
          <img v-if="wether.type=='雾霾'" src="../../../static/mai.png" alt="">
        </div>
      </div>
      <ul class="cont">
        <li
            >
          <img @touchstart="start($event)"  @touchend="qiye($event)" src="../../../static/14.png" alt="">
          <span>企业设立</span>
        </li>
        <li>
          <img  @touchstart="start($event)"  @touchend="shang($event)" src="../../../static/15.png" alt="">
          <span>商标注册</span>
        </li>
        <li class="clear"
           >
          <img @touchstart="start($event)"  @touchend="zhi($event)" src="../../../static/19.png" alt="">
          <span>职工社保</span>
        </li>
        <li
            >
          <img @touchstart="start($event)"  @touchend="shui($event)" src="../../../static/16.png" alt="">
          <span>税务登记</span>
        </li>
        <li
            >
          <img  @touchstart="start($event)" @touchend="bian($event)" src="../../../static/17.png" alt="">
          <span>变更登记</span>
        </li>
        <li class="clear"
           >
          <img  @touchstart="start($event)"  @touchend="ji($event)" src="../../../static/18.png" alt="">
          <span>机构备案</span>
        </li>
      </ul>
    </div>
</template>
<script>
    export default {
        name: "online",
        data() {
            return {
              longClick:0,  // 长按标志
              timeOutEvent: 0,  // 计时器,
              city:'',
              wether:'',
              hight:'',
              low:''
            }
        },
      created() {
          this.axios.get('/common/weather',).then(({data})=>{
            console.log(data.data.city);
            this.city=data.data.city;
            this.wether=data.data.forecast[0];
            this.hight=this.subwen(data.data.forecast[0].high);
            this.low=this.subwen(data.data.forecast[0].low);
          })
      },
      methods:{
        start(e){
          var li=e.target;
          console.log(e)
          var that =this;
          this.longClick=0;  // 初始化
          this.timeOutEvent =setTimeout(function(){
            that.longClick=1;  //  长按标志位
            // 此处为长按事件
            $(li).parent().css({background:'#ccc'});
          },500);
        },
          qiye(e){//企业设立
            var li=e.target;
            $(li).parent().css({background:'#fff'});
            clearTimeout(this.timeOutEvent);  // 清除计时器
            if(this.timeOutEvent!=0 && this.longClick==0){  // 判断是否非长按事件
              //此处为点击事件
              window.location.href='http://tl.ahzwfw.gov.cn/bog-bsdt/static/workProcess/components/servicesList.html?subjecttype=C&parentItemtypeName=%u4F01%u4E1A%u5F00%u529E&itemtypeName=%u8BBE%u7ACB%u767B%u8BB0&itemtypeType=GBDFFRQYKB&itemtypeCode=10&nav=newwindows';
            }
            return false;
            // window.open('http://tl.ahzwfw.gov.cn/bog-bsdt/static/workProcess/components/servicesList.html?subjecttype=C&parentItemtypeName=%u4F01%u4E1A%u5F00%u529E&itemtypeName=%u8BBE%u7ACB%u767B%u8BB0&itemtypeType=GBDFFRQYKB&itemtypeCode=10&nav=newwindows')
          },
        shang(e){//商标注册
          var li=e.target;
          $(li).parent().css({background:'#fff'});
          clearTimeout(this.timeOutEvent);  // 清除计时器
          if(this.timeOutEvent!=0 && this.longClick==0){  // 判断是否非长按事件
            //此处为点击事件
            window.location.href='http://tl.ahzwfw.gov.cn/bog-bsdt/static/workProcess/components/servicesList.html?subjecttype=C&parentItemtypeName=%u5546%u6807%u6CE8%u518C&itemtypeName=%u5546%u6807%u6CE8%u518C&itemtypeType=GBDFFRSBZC&itemtypeCode=100&nav=newwindows';
          }
          return false;
            // window.open('http://tl.ahzwfw.gov.cn/bog-bsdt/static/workProcess/components/servicesList.html?subjecttype=C&parentItemtypeName=%u5546%u6807%u6CE8%u518C&itemtypeName=%u5546%u6807%u6CE8%u518C&itemtypeType=GBDFFRSBZC&itemtypeCode=100&nav=newwindows')
        },
        zhi(e){//职工社保
          var li=e.target;
          $(li).parent().css({background:'#fff'});
          clearTimeout(this.timeOutEvent);  // 清除计时器
          if(this.timeOutEvent!=0 && this.longClick==0){  // 判断是否非长按事件
            //此处为点击事件

            window.location.href='http://tl.ahzwfw.gov.cn/bog-bsdt/static/workProcess/components/servicesList.html?subjecttype=C&parentItemtypeName=%u798F%u5229%u8865%u8D34&itemtypeName=%u804C%u5DE5%u793E%u4FDD&itemtypeType=GBDFFRFLBT&itemtypeCode=40&nav=newwindows';
          }
          return false;
          // window.open('http://tl.ahzwfw.gov.cn/bog-bsdt/static/workProcess/components/servicesList.html?subjecttype=C&parentItemtypeName=%u798F%u5229%u8865%u8D34&itemtypeName=%u804C%u5DE5%u793E%u4FDD&itemtypeType=GBDFFRFLBT&itemtypeCode=40&nav=newwindows')
        },
        shui(e){//税务登记
          var li=e.target;
          $(li).parent().css({background:'#fff'});
          clearTimeout(this.timeOutEvent);  // 清除计时器
          if(this.timeOutEvent!=0 && this.longClick==0){  // 判断是否非长按事件
            //此处为点击事件
            // window.open('http://tl.ahzwfw.gov.cn/bog-bsdt/static/workProcess/components/servicesList.html?subjecttype=C&parentItemtypeName=%u4F01%u4E1A%u5F00%u529E&itemtypeName=%u7A0E%u52A1%u767B%u8BB0&itemtypeType=GBDFFRQYKB&itemtypeCode=12&nav=newwindows')
            window.location.href='http://tl.ahzwfw.gov.cn/bog-bsdt/static/workProcess/components/servicesList.html?subjecttype=C&parentItemtypeName=%u4F01%u4E1A%u5F00%u529E&itemtypeName=%u7A0E%u52A1%u767B%u8BB0&itemtypeType=GBDFFRQYKB&itemtypeCode=12&nav=newwindows';
          }
          return false;
        },
        bian(e){//变更登记
          var li=e.target;
          $(li).parent().css({background:'#fff'});
          clearTimeout(this.timeOutEvent);  // 清除计时器
          if(this.timeOutEvent!=0 && this.longClick==0){  // 判断是否非长按事件
            //此处为点击事件

            // window.open('http://tl.ahzwfw.gov.cn/bog-bsdt/static/workProcess/components/servicesList.html?subjecttype=C&parentItemtypeName=%u80A1%u6743%u51FA%u8D44&itemtypeName=%u53D8%u66F4%u767B%u8BB0&itemtypeType=GBDFFRGQCZ&itemtypeCode=71&nav=newwindows')
            window.location.href='http://tl.ahzwfw.gov.cn/bog-bsdt/static/workProcess/components/servicesList.html?subjecttype=C&parentItemtypeName=%u80A1%u6743%u51FA%u8D44&itemtypeName=%u53D8%u66F4%u767B%u8BB0&itemtypeType=GBDFFRGQCZ&itemtypeCode=71&nav=newwindows';
          }
          return false;
        },
        ji(e){//机构备案
          var li=e.target;
          $(li).parent().css({background:'#fff'});
          clearTimeout(this.timeOutEvent);  // 清除计时器
          if(this.timeOutEvent!=0 && this.longClick==0){  // 判断是否非长按事件
            //此处为点击事件

            // window.open('http://tl.ahzwfw.gov.cn/bog-bsdt/static/workProcess/components/servicesList.html?subjecttype=C&parentItemtypeName=%u516C%u53F8%u5907%u6848&itemtypeName=%u673A%u6784%u5907%u6848&itemtypeType=GBDFFRGSBA&itemtypeCode=60&nav=newwindows')
            window.location.href='http://tl.ahzwfw.gov.cn/bog-bsdt/static/workProcess/components/servicesList.html?subjecttype=C&parentItemtypeName=%u516C%u53F8%u5907%u6848&itemtypeName=%u673A%u6784%u5907%u6848&itemtypeType=GBDFFRGSBA&itemtypeCode=60&nav=newwindows';
          }
          return false;
        },
        //截取温度
        subwen(str){
          return str.substring(str.indexOf(' '));
        }
      }
    }
</script>

<style scoped lang="less">
.warp{
  margin: 0 ;
  padding: 0 15px;
  -webkit-touch-callout:none;  /*系统默认菜单被禁用*/
  -webkit-user-select:none; /*webkit浏览器*/
  -khtml-user-select:none; /*早期浏览器*/
  -moz-user-select:none;/*火狐*/
  -ms-user-select:none; /*IE10*/
  user-select:none;
  .tianqi{
    padding:20px 15px;
    height: 120px;
    background: url("../../../static/12.png") no-repeat ;
    background-position:left bottom;
    background-size: cover;
    overflow: hidden;
    .left{
      float: left;
      width: 120px;
      height: 90px;
      font-size: 16px;
     .posi{
       overflow: hidden;
       >*{
         display: block;
         float: left;
       }
       b{
         font-size: 16px;
         margin-right: 5px;
         color: #333;
         font-weight: 400;
       }
       strong{
         margin: 4px 0;
         height: 14px;
         width: 2px;
         background: #333;
       }
       span{
         color: #333;
       }
     }
     .state{
       overflow: hidden;
       em{
         display: block;
         float: left;
       }
       em:first-child{
         margin-left: 10px;
         font-size: 20px;
         color: #333;
       }
       em:last-child{
         float: right;
         margin-right: 8px;
         font-size: 16px;
         color: #333;
       }
     }
      .feng{
        overflow: hidden;
        i{
          display: block;
          float: left;
          font-size: 12px;
          height: 30px;
          line-height: 30px;
        }
        i:last-child{
          float: right;
          margin-right: 8px;
          font-size: 16px;
          color: #333;
        }
      }
    }
    .img{
      float: right;
      margin: 15px 30px 0 0;
      img{
        display: block;
        width:32px;
        height: 32px;
      }
    }
    span{
      margin-left: 5px;
    }
  }
  .cont{
    overflow: hidden;
    display: flex;
    flex-wrap:wrap;
    margin-top: 30px;
    li{
      width: 33%;
      margin-bottom: 15px;
      padding-bottom: 15px;
      border-bottom: 1px solid #efefef;
      img{
        width: 32px;
        height: 32px;
        margin: 4px auto;
        display: block;
      }
      span{
        display: block;
        height: 20px;
        line-height: 20px;
        text-align: center;
        font-size: 14px;
        color: #333;
      }

    }
    li.clear{
      margin-right: 0;
    }
  }
}
</style>
