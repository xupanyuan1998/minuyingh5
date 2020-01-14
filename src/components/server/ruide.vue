<template>
  <div class="warp">
    <div class="top">
      <h3 class="title"><b></b><span>公司简介</span></h3>
      <div class="jie">
        <div class="name">
          <img src="../../../static/chao/3.jpg" alt="">
          <b>铜陵瑞德环境科技咨询有限公司</b>
        </div>
        <p>铜陵瑞德环境科技咨询有限公司是依法成立的具有独立法人资格的科技型企业，常年从事 环境影响评价咨询、清洁生产审核、节能评估、环保实用技术的应用与推广等工作。公司职员 熟悉环境政策法规，具有扎实的环保专业技能，经历过多年的环境咨询服务的实践磨练，对各种 环境保护问题具备高效的应对能力。公司与当地政府及
          相关部门和企业建立了良好的合作关系，高效、诚信、负责的工作作风得到了客户认同。
        </p>
      </div>
    </div>
    <div class="gu top">
      <h3 class="title"><b></b><span>组织架构</span></h3>
      <div class="quan">
        <img src="../../../static/chao/27.png" alt="">
      </div>
    </div>
    <div class="tellme top">
      <h3 class="title"><b></b><span>联系我们</span></h3>
      <ol>
        <li><span>地址：</span><span> 安徽省铜陵市螺蛳山社区公共服务中心二楼</span></li>
        <li><span>电话：</span><span> 13965223358 </span></li>
        <li><span>邮箱：</span><span> 2219309327@qq.com</span></li>
      </ol>
    </div>
    <div class="qi top">
      <h3 class="title"><b></b><span>企业服务</span></h3>
      <div class="tou">
        <Button type="primary" long @click="goshen">我要能评</Button>
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
            document.title='铜陵瑞德环境科技咨询有限公司'
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
