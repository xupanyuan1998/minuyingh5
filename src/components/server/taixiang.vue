<template>
  <div class="warp">
    <div class="top">
      <h3 class="title"><b></b><span>公司简介</span></h3>
      <div class="jie">
        <div class="name">
          <img src="../../../static/chao/3.jpg" alt="">
          <b>铜陵泰祥科创高新技术有限公司</b>
        </div>
        <p>
          泰祥园区成立于2008年5月，位于铜陵市经济技术开发区泰山大道，由铜陵泰祥科创高新技术有限公司投资成立。园区总投资近亿元，占地50亩，建筑面积近4万平方米，园内七通一平，基础设施齐全。
          园区是“安徽省电子信息产业园”、“安徽省机电产品专业孵化器”、“安徽省小微企业创业基地”、“安徽省中小企业公共服务示范平台”，“铜陵市就业创业园泰祥分园”，园区成立的“创梦空间”是铜陵市首批市级“众创空间”。
          园区成立了中小企业服务公司，建设了光机电应用技术科技服务平台，成立了孵化种子基金，可为入驻企业（创业团队）提供政务代理、技术培训与研发、融资和股权投资等一站式服务。
          目前园区入驻的初创型企业（创业团队）100多家，毕业16家。2014年实现年产值近11.4亿元，提供就业岗位近1700个，培育了金典科技、晶越电子等多家国家高新技术企业或规模以上企业。已成为名副其实的战略性新兴产业培育基地。
        </p>
      </div>
    </div>
    <div class="gu top">
      <h3 class="title"><b></b><span>组织架构</span></h3>
      <div class="quan">
        <img src="../../../static/chao/29.png" alt="">
      </div>
    </div>
    <div class="tellme top">
      <h3 class="title"><b></b><span>联系我们</span></h3>
      <ol>
        <li><span>地址：</span><span>铜陵经济技术开发区泰山大道1688号</span></li>
        <li><span>联系人：</span><span> 孔东</span></li>
        <li><span>电 话：</span><span> <i>0562--2681290</i><i>13399628882</i></span></li>
      </ol>
    </div>
    <div class="qi top">
      <h3 class="title"><b></b><span>企业服务</span></h3>
      <div class="tou">
        <Button type="primary" long @click="goshen">咨询办理</Button>
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
            document.title='铜陵泰祥科创高新技术有限公司'
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
