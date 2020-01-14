<template>
  <div class="ji">
    <div class="cc">
      <ul>
        <li>
          <b>产品名称：</b>
          <span>外汇宝(个人实盘外汇买卖)</span>
        </li>
        <li>
          <b>产品简介：</b>
          <span>外汇宝是中国银行个人实盘外汇买卖业务的简称，是指在中国银行开立本外币活期一本通存折且持有外币现钞（汇）的客户，可以按照中行报出的买入/卖出价格，将某种外币（汇）的存款换成另一种外币（汇）的存款。支持即时买卖和挂单委托。
                客户可以利用国际外汇市场上外汇汇率的频繁波动性，在不同的存款货币间转换并赚取一定的汇差，以达到保值、盈利的目的。
                </span>
        </li>
        <li>
          <b>交易币种：</b>
          <span>美元、欧元、英镑、澳元、港币、瑞士法郎、日元、加拿大元、新加坡元，可做直接盘交易与交叉盘交易。</span>
        </li>
        <li>
          <b>交易方式：</b>
          <span>柜台、电话、自助终端和网上银行等多种交易方式。</span>
        </li>
        <li>
          <b>产品优势：</b>
          <span>提高收益：使投资者有机会在获取外币存款利息的同时，通过外汇交易进行保值甚至赚得额外的汇差收益。
                交易方法多样：目前可以通过柜面服务人员、电话交易设备等方式进行。交易方式灵活，既可进行市价交易，又可进行委托交易。一日可进行多次交易，提供更多投资机遇。
                </span>
        </li>
        <li>
          <b>适用对象：</b>
          <span>凡持有个人有效身份证件，拥有完全民事行为能力的境内、外个人，并持有中国银行外汇宝支持交易
                的货币，均可进行个人实盘外汇交易。</span>
        </li>
        <li>
          <b>办理流程：</b>
          <span>凭本人有效身份证件在中国银行开立活期一本通或定期一本通存折并存入一定数量的外币现汇或现钞，以及持有外币现钞的客户均可在中国银行开办外汇宝业务的网点进行交易。
                凭本人有效身份证件和长城电子借记卡到柜台即可开通电话银行服务。
                </span>
        </li>
        <li>
          <b>提交证件：</b>
          <span>本人有效身份证件。</span>
        </li>
        <li>
          <b>风险提示：</b>
          <span>交易时间为星期一早7点至星期六凌晨5点（除周六、日、休市和其他非交易日外）。
                    因受国际上各种政治、经济因素，以及各种突发事件的影响，汇价经常处于剧烈的波动之中，因此，进行个
                人实盘外汇买卖，风险与机遇并存。基于任何投资产品都具有风险特性，在决定买卖前，
                投资者应先了解交易的风险，并考虑个人对风险的承受力、期望回报等。
</span>
        </li>
      </ul>
    </div>
    <Button type="primary" long @click="goshen">我要购买</Button>
  </div>
</template>

<script>
    import { Dialog } from 'vant';
    export default {
        name: "waihui",
        methods:{
            goshen(){
                Dialog.alert({
                    message: '即将开通，敬请期待！！！'
                })
            }
        },
        created(){
            document.title='外汇宝'
        },
    }
</script>

<style scoped lang="less">
  .ji{
    padding: 10px 15px 20px 15px;
  }
  .cc{
    ul{
      li{
        overflow: hidden;
        margin-bottom: 10px;
        display: flex;
        flex-direction: row;
        b{
          width:30%;
          font-size: 16px;
          line-height: 30px;
          text-align: right;
        }
        span{
          width:70%;
          font-size: 16px;
          line-height: 30px;
        }
      }
    }
  }
</style>
