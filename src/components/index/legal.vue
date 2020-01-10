<template>
    <div class="warp">
      <div class="list">
        <div class="title">
          <b></b>
          <span>律所推荐</span>
        </div>
        <ul class="room">
          <li>
            <div class="left">
              <img src="../../../static/20.jpg" alt="" @click="pre('../../../static/20.jpg')">
              <span>安徽宪达律师事务所</span>
            </div>
            <p>我所先后为数十家政府机关、企事业单位、个人担任过法律顾问，从未间断地办理刑事辩护、民事、行政诉讼代理，以自己的智 慧和勇气为民请命，为法治呐喊。
              与此同时，合同起草、商务谈判、公司组建、律师见证、留学证明等非诉讼法律事务，亦成为 我所同仁大量涉足。广连四海、博采众长。多年来，我所与全国众多
              同行均建立有良好的业务合作关系，我所同仁的足迹更是远至 欧洲大陆。</p>
          </li>
          <li>
            <div class="left">
              <img src="../../../static/21.jpg" alt="" @click="pre('../../../static/21.jpg')">
              <span>安徽宪达律师事务所</span>
            </div>
            <p>我所先后为数十家政府机关、企事业单位、个人担任过法律顾问，从未间断地办理刑事辩护、民事、行政诉讼代理，以自己的智 慧和勇气为民请命，为法治呐喊。
              与此同时，合同起草、商务谈判、公司组建、律师见证、留学证明等非诉讼法律事务，亦成为 我所同仁大量涉足。广连四海、博采众长。多年来，我所与全国众多
              同行均建立有良好的业务合作关系，我所同仁的足迹更是远至 欧洲大陆。</p>
          </li>
        </ul>
      </div>
      <div class="list">
        <div class="title">
          <b></b>
          <span>律师推荐</span>
        </div>
        <ul class="lvshi">
          <li class="a" >
            <div class="left">
              <img src="../../../static/22.jpg" alt="" @click="pre('../../../static/22.jpg')">
              <span>邓文</span>
            </div>
            <ul class="right">
              <li><b>事务所:</b><p>上海治学律师事务所</p></li>
              <li><b>资源:</b><p>行业资源</p></li>
              <li><b>擅长:</b><p>法律咨询 无形资产评估 知识产权交易代理</p></li>
              <li><b>介绍:</b><p>邓博士尤对企业知识产权运营有 深入研究，并在《科技与法律》、《电子知识产权》、 《中国知识产权报》、《中国发明与专利》等知识产权权威刊物上发表多篇与企业知识产权运营相关的研究成果。</p></li>
            </ul>
          </li>
          <li class="a" >
            <div class="left">
              <img src="../../../static/23.jpeg" alt="" @click="pre('../../../static/23.jpeg')">
              <span>孙瑜</span>
            </div>
            <ul class="right">
              <li><b>事务所:</b><p>上海申浩律师事务所</p></li>
              <li><b>资源:</b><p>场地孵化 行业资源</p></li>
              <li><b>擅长:</b><p>风险规避 法律咨询 诉讼代理</p></li>
              <li><b>介绍:</b><p>上海大学法学学士（LL.B），华东理工大学工商管理硕士(MBA) 2005年正式开始律师执业，同时具有司法职业资格、基金从业资格、证券从业资格，深谙 企业法律顾问实务和企业的经营管理，有多年从事</p></li>
            </ul>
          </li>
          <li class="a" >
            <div class="left">
              <img src="../../../static/24.jpg" alt="" @click="pre('../../../static/24.jpg')">
              <span>刘雨雁</span>
            </div>
            <ul class="right">
              <li><b>事务所:</b><p>北京盈科（上海）律师事务所</p></li>
              <li><b>资源:</b><p>政策资源</p></li>
              <li><b>擅长:</b><p>法律咨询</p></li>
              <li><b>介绍:</b><p>公司基础法律服务、企业涉诉案件开庭私募基金备案、并购，投前尽职调查等。 业绩:科技创新板挂牌，私募基金备案等，曾担任平安保险、北京银行法律顾问，对保险公司和银行相关法律服务较为熟</p></li>
            </ul>
          </li>
          <li class="a" >
            <div class="left">
              <img src="../../../static/25.jpg" alt="" @click="pre('../../../static/25.jpg')">
              <span>潘登</span>
            </div>
            <ul class="right">
              <li><b>事务所:</b><p>上海潘登律师事务所</p></li>
              <li><b>资源:</b><p>融资资源 政策资源 行业资源</p></li>
              <li><b>擅长:</b><p>法律咨询 律师服务 诉讼代理</p></li>
              <li><b>介绍:</b><p>企业法律顾问、金融证券、企业改制上市、重大资产重组及并购、高端私人法律顾问 、经济金融犯罪的辩护与代理。</p></li>
            </ul>
          </li>
        </ul>
      </div>
      <van-image-preview
        v-model="show"
        :images="images"
        :show-index="false"
        @change="onChange"
      >
      </van-image-preview>
    </div>
</template>

<script>
  import { ImagePreview } from 'vant';
    export default {
        name: "legal",
      components:{ImagePreview},
        data() {
            return {
              images:[],
              show: false,
            }
        },
      methods:{
          pre(i){
            // this.show=true;
            // var arr=[];
            // this.images=[];
            // arr.push(i);
            // this.images=arr;
          },
        onChange(index) {
          this.index = index;
        }
      }
    }
</script>

<style scoped lang="less">
.warp{
  padding: 0 15px;
  margin-top:0 ;
  .list{
    .title{
      padding: 10px 0;
      overflow: hidden;
      b{
        display: block;
        float: left;
        width: 3px;
        height: 16px;
        background: #E8390A;
        margin: 7px 0;
      }
      span{
        margin-left: 10px;
        display: block;
        height: 30px;
        font-size: 16px;
        font-weight: 600;
        line-height: 30px;
      }
    }
    .room{
      padding:0 10px;
      li{
        padding-bottom:10px ;
        overflow: hidden;
        margin-bottom: 20px;
        border-bottom: 1px dashed #efefef;
        .left{
          width: 40%;
          float: left;
          margin: 0 20px 0 0;
          img{
            display: block;
            width: 100%;
            height: 100px;
          }
          span{
            width: 100%;
            height: 26px;
            line-height: 26px;
            font-size: 12px;
            font-weight: 700;
            text-align: center;
            display: block;
          }
        }
        p{
          width: 100%;
          text-indent: 2em;
          font-size: 12px;
        }
      }
      li:last-child{
        border-bottom: 0;
      }
    }
    .lvshi{
      li.a{
        overflow: hidden;
        padding-bottom: 10px;
        margin-bottom: 20px;
        border-bottom: 1px dashed #ccc;
        .left{
          float: left;
          margin-left: 5%;
          width: 20%;
          img{
            width: 100%;
            height:84px;
          }
          span{
            display: block;
            width: 100%;
            height: 30px;
            line-height: 30px;
            text-align: center;
            font-size: 12px;
            font-weight: 700;
          }
        }
        .right{
          float: right;
          width: 75%;
          li{
            width: 100%;
            padding: 0 5px 0 0;
            overflow: hidden;
            b{
              width: 20%;
              display: block;
              height: 20px;
              line-height: 20px;
              font-size: 12px;
              font-weight: 600;
              float: left;
              text-align: right;
            }
            p{
              margin-left: 4px;
              width:76%;
              float: left;
              display: block;
              line-height: 20px;
              font-size: 12px;
            }
          }
        }
      }
      li.a:last-child{
        border-bottom: 0;
      }
    }
  }
}
</style>
