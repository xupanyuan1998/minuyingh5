<template>
    <div class="warp">
      <div class="top">
        <h3 class="title"><b></b><span>银行简介</span></h3>
        <div class="jie">
          <img src="../../../static/168.png" alt="">
          <p>本行成立于1987年，是中国改革开放中最早成立的新兴商业银行之一，是中国最早参与国内外金融市场融资的商业银行，并以屡创中国现代金融史上多个第一而蜚声海内外，为中国经济建设做出了积极贡献。2007年4月，本行实现在上海证券交易所和香港联合交易所A+H股同步上市。 本行以建设最佳综合金融服务企业为发展愿景，充分发挥中信集团金融与实业并举的独特竞争优势，坚持“以客为尊”，
            秉承“平安中信、合规经营、科技立行、服务实体、市场导向、创造价值”的经营理念，向企业客户和机构客户提供公
            司银行业务、国际业务、金融市场业务、机构业务、投资银行业务、保理业务、托管业务等综合金融解决方案，向个人客户
            提供零售银行、信用卡、消费金融、财富管理、私人银行、出国金融、电子银行等多元化金融产品及服务，全方位满足企业、机构及个人客户的综合金融服务需求。</p>
        </div>
      </div>
      <div class="li">
        <h3 class="title"><b></b><span>利率政策</span></h3>
        <div class="lv">
          <div class="tab">
            <i-table border :content="self" :columns="columns7" :data="data6"></i-table>
          </div>
          <template>
            <div style="display: none">
              <h4>中信银行存款利率政策</h4>
              <table border="1" >
                <tr>
                  <th>城乡居民存款</th>
                  <th>非保证金存款利率</th>
                  <th class="cla">非保证金存款利率</th>
                </tr>
                <tr>
                  <td>活期</td>
                  <td>0.30</td>
                  <td class="cla">0.30</td>
                </tr>
                <tr>
                  <td>定期</td>
                  <td>-</td>
                  <td class="cla">-</td>
                </tr>
                <tr>
                  <td colspan="3" class="left cla" >整存整取</td>
                </tr>
                <tr>
                  <td>三个月</td>
                  <td>1.40</td>
                  <td class="cla">1.10</td>
                </tr>
                <tr>
                  <td>半年</td>
                  <td>1.65</td>
                  <td class="cla">1.30</td>
                </tr>
                <tr>
                  <td>一年</td>
                  <td>1.95</td>
                  <td class="cla">1.50</td>
                </tr>
                <tr>
                  <td>两年</td>
                  <td>2.40</td>
                  <td class="cla">2.10</td>
                </tr>
                <tr>
                  <td>三年</td>
                  <td>3.00</td>
                  <td class="cla">2.75</td>
                </tr>
                <tr>
                  <td>五年</td>
                  <td>3.00</td>
                  <td class="cla">2.75</td>
                </tr>
                <tr>
                  <td colspan="3" class="left cla">零存整取、整存零取、存本取息</td>
                </tr>
                <tr>
                  <td>一年</td>
                  <td>1.40</td>
                  <td class="cla">-</td>
                </tr>
                <tr>
                  <td>一年</td>
                  <td>1.40</td>
                  <td class="cla">-</td>
                </tr>
                <tr>
                  <td>三年</td>
                  <td>1.65</td>
                  <td class="cla">-</td>
                </tr>
                <tr>
                  <td>五年</td>
                  <td>1.65</td>
                  <td class="cla">-</td>
                </tr>
                <tr>
                  <td>定活两便</td>
                  <td>按一年以内定期整存整取同档次利率打六折执行</td>
                  <td class="cla">-</td>
                </tr>
                <tr>
                  <td colspan="3" class="left cla">通知存款</td>
                </tr>
                <tr>
                  <td>一天</td>
                  <td>0.55</td>
                  <td class="cla">-</td>
                </tr>
                <tr>
                  <td>七天</td>
                  <td>1.10</td>
                  <td class="cla">-</td>
                </tr>
              </table>
            </div>
          </template>
        </div>
      </div>
      <div class="dai">
        <h3 class="title"><b></b><span>申请材料</span></h3>
        <div class="banli">
          <p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; color: rgb(51, 51, 51);    white-space: normal;">
            　　1、身份证、结婚证，户口本的原件及其复印件；
          </p>
          <p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; color: rgb(51, 51, 51);    white-space: normal;">
            　　2、个人最近半年的银行流水账，税单证明；
          </p>
          <p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; color: rgb(51, 51, 51);    white-space: normal;">
            　　3、抵押物的归属证明原件；
          </p>
          <p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; color: rgb(51, 51, 51);    white-space: normal;">
            　　4、您可以提供的其他财力证明材料，如股票，定期存款，理财产品，保单，汽车等。&nbsp;
          </p>
        </div>
        <van-button type="info" size="large" @click="goshen()">我要申贷</van-button>
      </div>
    </div>
</template>

<script>
  import { Dialog } from 'vant';
    export default {
        name: "bank",
        data() {
            return {
                self: this,
                columns7: [
                    {
                        title: '编号',
                        type:'index',
                        width: 50,
                        align:'center'
                    },
                    {
                        title: '名称',
                        key: 'name'
                    },
                    {
                        title: '详情',
                        key: 'action',
                        width: 80,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '查看'),
                            ]);
                        }
                    }
                ],
                data6: [
                    {
                        name: '中信银行存款利率政策',
                    }
                ]
            }
        },
        created(){
          document.title='中信银行'
        },
      methods:{
          goshen(){
            Dialog.alert({
              message: '此功能正在开发中！！！'
            })
          }
      }
    }
</script>

<style scoped lang="less">
.warp{
  padding: 0 15px;
  .title{
    font-size: 16px;
    overflow: hidden;
    padding-bottom: 15px;
    b{
      display: block;
      float: left;
      width:3px;
      height: 20px;
      background: #fe0000;
      margin-right: 10px;
    }
    span{
      display: block;
      float: left;
      margin-top: -1px;
    }
  }
  .top{
      padding-bottom: 20px;
    .jie{
      img{
        display: block;
        float: left;
        width: 120px;
        height: 48px;
        margin: 0 10px 10px 0;
      }
      p{
        font-size: 14px;
        line-height: 30px;
      }
    }
  }
  .li{
    padding-bottom: 20px;
    h4{
      text-align: center;
      font-size: 18px;
      padding-bottom: 15px;
    }
    table{
      width: 100%;
      display: block;
    }
    td{
      width: 33%;
    }
    td,th{
      padding: 5px ;
      height: 40px;
      text-align: center;
      font-size: 16px;
    }
    td.left{
      text-align: left;
      background: #efefef;
    }
    td.cla,th.cla{
      border-right: 0;
    }
  }
  .chanpin{
    padding-bottom: 20px;
    ul{
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap:wrap;
      li{
        width: 25%;
        margin-bottom: 10px;
        img{
          width: 80%;
          display: block;
          margin: 0 auto;
        }
        span{
          padding: 5px 0;
          display: block;
          width: 100%;
          text-align: center;
          font-weight: 500;
          font-size: 16px;
        }
      }
    }
  }
  .dai{
    padding-bottom: 20px;
    .banli{
      padding:5px 5px 30px 5px;
      font-size: 16px;
      line-height:30px;
    }
    .shen{
      margin: 10px 0;
    }
  }
  div.tab{
    margin: 10px 0;
    padding-bottom: 30px;
    /deep/.ivu-table-cell{
      padding: 5px ;
    }
  }
}
</style>
