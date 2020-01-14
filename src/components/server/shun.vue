<template>
  <div class="warp">
    <div class="top">
      <h3 class="title"><b></b><span>公司简介</span></h3>
      <div class="jie">
        <div class="name">
          <img src="../../../static/chao/32.png" alt="">
        </div>
        <p>铜陵市顺为财务咨询有限公司是经铜陵市工商行政管理局及铜陵市财政局审批具有专业法
          定资格从事会计的财务公司。专业代理，以诚为本！高效、快速、专业、规范、敬业保密。
          公司业务范围涵盖代理记帐、代理申报纳税、代办税务登记、变更登记、一般纳税人认定，
          税收及会计事务咨询筹划，我们将以高度负责的精神，真正服务于客户。以完整地会计资
          料、报表，规范、细致地专业技术，为客户提供企业制度设计，加强经济核算、改善经营管
          理、提高经济效益等方面的建议。涉及行业包括商业、工业制造、广告及服务业、国内贸易
          、房地产业、建筑装饰、交通运输、酒店业等。
        </p>
      </div>
    </div>
    <div class="gu top">
      <h3 class="title"><b></b><span>组织架构</span></h3>
      <div class="quan">
        <img src="../../../static/chao/34.png" alt="">
      </div>
    </div>
    <div class="tellme top">
      <h3 class="title"><b></b><span>联系我们</span></h3>
      <ol>
        <li>
          <span >电话：</span>
          <span>0562-5316777</span>
        </li>
        <li>
          <span>地址：</span>
          <span>铜陵市北斗星城B1栋1306室</span>
        </li>

        <li>
          <span>传真：</span>
          <span>0562-5316777</span>
        </li>
        <li>
          <span>官网：</span>
          <span>www.shunweicaishui.com</span>
        </li>
      </ol>
    </div>
    <div class="qi top">
      <h3 class="title"><b></b><span>企业服务</span></h3>
      <div class="tou">
        <Button type="primary" long @click="goshen">我要办理</Button>
      </div>
    </div>
    <div class="ping top">
      <h3 class="title"><b></b><span>我要评价</span></h3>
      <div class="fen">
        <Rate disabled show-text allow-half v-model="valueCustomText">
          <span style="color: #f5a623">{{ valueCustomText }}</span>
        </Rate>
      </div>
    </div>
  </div>
</template>

<script>
    import { Dialog } from 'vant';
    export default {
        data() {
            return {
                valueCustomText:4.8,
            }
        },
        created(){
            document.title='顺为财税'
        },
        methods:{
            goshen(){
                Dialog.alert({
                    message: '即将开通，敬请期待'
                })
            }
        }
    }
</script>
<style lang="less" src="../../assets/css/int.less"></style>
