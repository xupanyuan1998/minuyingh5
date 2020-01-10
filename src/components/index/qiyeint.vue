<template>
    <div class="hello">
      <div class="int">
        <img :src="company.companyLogo" alt="">
        <h3>{{company.companyName}}</h3>
        <p>{{company.intro}}</p>
      </div>
      <div class="chan">
      <div class="top">
        <span></span>
        <b>产品服务</b>
      </div>
        <div class="places" v-if="servicelist.length==0">暂无内容</div>
      <ul class="chanpin" v-else>
        <li v-for="(item,idx) in servicelist" :key="idx" :class="idx % 3==2?'clear':''">
          <img :src="item.smallImg" alt="">
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
      <div class="chan">
        <div class="top">
          <span></span>
          <b>近期需求</b>
        </div>
        <div class="places" v-if="supplyanddemandlist.length==0">暂无内容</div>
       <template v-else>
         <p><span>产品名称</span><em>数量</em><i>截止时间</i></p>
         <ul class="gong">
           <li v-for="(item,idx) in supplyanddemandlist" :key="idx"><span @click="gogong(item.supplyanddemandId)">{{item.productname}}</span><em>{{item.number}}</em><i>{{item.endtime}}</i></li>
         </ul>
       </template>
      </div>
      <div class="chan">
        <div class="top">
          <span></span>
          <b>企业资质</b>
        </div>
        <div class="places" v-if="qualificationslist.length==0">暂无内容</div>
        <ul class="zi" v-else>
          <li v-for="(item,idx) in qualificationslist" :key="idx" :class="{'clear':idx %4 ==3}"><img :src="item.smallImg" alt=""></li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "qiyeint",
        data() {
            return {
              company:'',
              servicelist:'',
              supplyanddemandlist:'',
              qualificationslist:''
            }
        },
      created() {
          //获取传入的企业id
        var id=this.$route.query.id;
        console.log(id);
        this.axios.post('/web/company/company',{companyId:id}).then(({data})=>{
          console.log(data.data);
          this.company=data.data.company;//公司简介
          this.servicelist=data.data.servicelist;//产品列表
          this.supplyanddemandlist=data.data.supplyanddemandlist;//企业供需
          this.qualificationslist=data.data.qualificationslist;//企业资质
        })
      },
      methods:{
          gogong(i){
            //供应详情页面
            // AndroidWebView.jump_new_window('http://101.37.65.219:8081/app/#/gongint?id='+i);
            this.$router.push('/bank');
        }
      }
    }
</script>

<style scoped lang="less">
.hello{
  background: #ebebeb;
  .int{
    background: #fff;
    padding: 20px 15px;
    img{
      display: block;
      width: 100%;
      height: 114px;
    }
    h3{
      margin-top: 16px;
      width: 100%;
      height: 20px;
      line-height: 20px;
      font-size: 14px;
      font-weight: bold;
    }
    p{
      margin-top: 5px;
      font-size: 14px;
    }
  }
  .chan{
    margin-top: 8px;
    background: #fff;
    padding: 9px 0;
    .top{
      padding: 0 15px;
      overflow: hidden;
      margin-bottom: 22px;
      span{
        display: block;
        float: left;
        width: 2px;
        height: 14px;
        background: #E8390A;
        margin-right: 8px;
        margin-top: 4px;
      }
      b{
        font-size: 14px;
        display: block;
        float: left;
        font-weight: bold;
      }
    }
    ul{
      overflow: hidden;
      li{
        float: left;
      }
      li.clear{
        margin-right: 0;
      }
    }
    .chanpin{
      padding: 0 25px;
      li{
        margin-bottom: 7px;
        margin-right: 5%;
        width: 30%;
        img{
          width: 100%;
          height: 55px;
        }
        span{
          display: block;
          width: 100%;
          overflow: hidden;
          height:30px;
          line-height: 30px;
          text-align: center;
          font-size:12px;
          font-weight:500;
          color:#454545;
        }
      }
      li.clear{
        margin-right: 0;
      }
    }
    p{
      padding: 0 15px;
      background: #F7F7F7;
      overflow: hidden;
      >*{
        display: block;
        float: left;
        height: 30px;
        line-height: 30px;
        font-size: 12px;
      }
      span{
        width: 55%;
        margin-right: 3%;
      }
      em{
        width: 20%;
        margin-right: 2%;
      }
      i{
        width: 20%;
        float: right;
      }
    }
    .gong{
      padding: 0 15px;
      li{
        width: 100%;
        height: 45px;
        overflow: hidden;
        >*{
         display: block;
          float: left;
          height: 45px;
          line-height: 45px;
          overflow: hidden;
          font-size: 12px;
        }
        span{
          width: 55%;
          margin-right:3%;
        }
        em{
          width: 20%;
          margin-right: 2%;
        }
        i{
          width: 20%;
        }
      }
    }
    .zi{
      padding: 0 30px;
     margin-bottom: 30px;
      li{
        width: 22%;
        height: 108px;
        margin-right: 4%;
        margin-bottom: 10px;
        img{
          width:100%;
          height: 108px;
        }
      }
    }
  }
  .places{
    text-align: center;
    font-size: 14px;
    padding-bottom: 20px;
    font-weight: 500;
  }
}
</style>
