<template>
  <div class="warp">
    <div class="top">
      <h3 class="title"><b></b><span>公司简介</span></h3>
      <div class="jie">
        <div class="name">
          <img src="../../../static/chao/3.jpg" alt="">
          <b>铜陵市富达财务代理有限公司</b>
        </div>
        <p>本公司经营工商、税务行业代办业务，为创业者提供专业、便捷的代理公 司注册服务，办理各种
          繁琐的前置及后置专项许可审批；为准备扩大规模的企 业提供快速、可靠的代理业务。专业代理
          公司注册、变更、验资、税务登记等一 系列工商税务事项，为中小型企业提供专业的代理记账业务
          、乱帐整理、年检、 财务咨询、税务咨询、财务制度制度等服务。我们是一个由多名老资历的注册
          会 计师、注册税务师组成的财务管理咨询团队，致力于提升各类民营企业的财务和 税务管理水平，
          以为各类民营企业提供高水平的财税咨询/财务顾问为主要服务项 目。具有丰富的财务筹划、税务筹
          划及财务管理经验。我们的主要职责是：根据客 户的实际状况，提出切合客户实际的具有针对性、实
          用性和可操作性的解决方案（ 化繁为简），以较小的成本提升企业的财务管理水平，降低风险、提升效益。
        </p>
      </div>
    </div>
    <div class="gu top">
      <h3 class="title"><b></b><span>组织架构</span></h3>
      <div class="quan">
        <img src="../../../static/chao/35.png" alt="">
      </div>
    </div>
    <div class="tellme top">
      <h3 class="title"><b></b><span>联系我们</span></h3>
      <ol>
        <li>
          <span >电话：</span>
          <span>0562-2223982</span>
        </li>
        <li>
          <span >手机：</span>
          <span>13339255219</span>
        </li>
        <li>
          <span>地址：</span>
          <span>铜陵市石城大道与翠湖一路交汇处（大润发对面）汇富广场1607室</span>
        </li>
        <li>
          <span >联系人：</span>
          <span>姚经理  先生(经理)</span>
        </li>
        <li>
          <span >邮箱：</span>
          <span>981432841@qq.com</span>
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
            document.title='铜陵市富达财务代理有限公司'
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
