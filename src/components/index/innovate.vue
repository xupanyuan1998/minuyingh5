<template>
    <div class="warp">
      <ul>
        <li>
          <div class="left">
            <img src="../../../static/27.png" alt="">
          </div>
          <div class="right">
            <h2>云税贷</h2>
            <p>建设银行依据纳税信息对诚信纳税优质小微企业发放的，用于生产经营周转的人民币信贷业务。单户贷款额度最高为300万元，
            期限一年，按需支用、随借随还，活动期间贷款年利率为5.0025%。</p>
            <van-button type="info" size="mini" @click="place" class="bu">我要申请</van-button>
          </div>
        </li>
        <li>
          <div class="left">
            <img src="../../../static/27.png" alt="">
          </div>
          <div class="right">
            <h2>抵押快贷</h2>
            <p>建设银行认可的优质房产或企业主在建设银行的住房按揭贷款。给予建设银行认可的优质房产，包括住宅别墅、商铺、公寓。额度最高1000万元，期限一年，按需支用、随借随还
              ，活动期间贷款年利率为4.5675%。
            </p>
             <van-button type="info" size="mini" @click="place" class="bu">我要申请</van-button>
          </div>
        </li>
        <li>
          <div class="left">
            <img src="../../../static/27.png" alt="">
          </div>
          <div class="right">
            <h2>薪金云贷</h2>
            <p>薪金云贷：是指建设银行以小微企业代发工资和住房公积金缴存信息为依据，通过互联网渠道办理的全流程自助信用抵款业务。单户最高贷款额度不超过200万元，对于符合条件的
              优质客户贷款金额最高300万元（含）。单户贷款额度超过100万元的，企业及企业主在建设银行系统内可掌握的金融资产需覆盖贷款本息的20%。期限一年，按需支用、随借随还
              ，活动期间贷款年利率为5.0025%。
            </p>
             <van-button type="info" size="mini" @click="place" class="bu">我要申请</van-button>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
import { Dialog } from 'vant';
    export default {
        name: "innovate",
        data() {
            return {}
        },
        methods:{
          place(){
            Dialog.alert({
              message: '即将开通，敬请期待！'
            }).then(() => {
            // on close
            });
          }
        },
    }
</script>

<style scoped lang="less">
.warp{
  padding: 0 15px;
  ul{
    li{
      overflow: hidden;
      padding-bottom: 5px;
      margin-bottom: 20px;
      border-bottom: 1px dashed #ccc;
      .left{
        float: left;
        margin-right: 5px;
        width: 15%;
        img{
          width: 100%;
        }
      }
      .right{
        width:80%;
        float: right;
        h2{
          width: 100%;
          height: 20px;
          font-size: 14px;
          line-height: 20px;
        }
        p{
          font-size: 12px;
        }
        .bu{
          float:right;
          margin: 5px 0;
        }
      }
    }
  }
}
</style>
