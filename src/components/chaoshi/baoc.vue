<template>
  <div class="warp">
    <div class="top">
      <h3 class="title"><b></b><span>公司简介</span></h3>
      <div class="jie">
        <div class="name">
          <img src="../../../static/chao/38.png" alt="">
          <b>中国太平洋保险（集团）股份有限公司</b>
        </div>
        <p>中国太平洋保险（集团）股份有限公司（以下称“太平洋保险”）是在1991年5月13日成
          立的中国太平洋保险公司的基础上组建而成的保险集团公司，总部设在上海，是国内领先的
          “A+H”股上市综合性保险集团。 太平洋保险以成为“行业健康稳定发展的引领者”为愿景，牢
          牢把握高质量发展主线，专注主业、做精专业，用转型的“进”，实现了发展的“稳”。连续八年
          入选《财富》世界500 强，2018年位列第220位。太平洋保险2018年实现营业收入3543.63亿
          元，其中保险业务收入3218.95亿元，同比增长14.3%；集团净利润为180.19亿元，同比增长
          22.9%。 2018年，太平洋保险全面启动转型 2.0，重在转变增长方式、优化业务结构和转换发
          展动能，开启了太保高质量发展新征程。公司凭借高水平企业管治的杰出表现，在香港董事学会
          评选中荣获2018年度“杰出董事会奖”和“杰出董事奖”称号。 太平洋保险通过科技创新，全面提
          升服务能级，为超过1.26亿名客户提供全方位风险保障解决方案、财富规划和资产管理服务。建
          成以客户为核心的大数据平台，在咨询、承保、理赔等服务中引入多项最新的人工智能技术，富有
          责任、智慧和温度的“太保服务”让客户更满意。太平洋产、寿险连续两年同获保险公司服务评价AA
          级和经营评级A级，成为行业服务和经营的新标杆。 太平洋保险积极服务国家战略、实体经济和民
          生保障。护航一带一路，海外业务覆盖112个国家，为首届中国进口博览会提供总保额350亿元的一
          揽子财产保险解决方案。所承办的大病医保等项目惠及9500多万人，率先发布个人税延养老保险解
          决方案，“太保家园”养老社区建设实现新突破。 平时注入一滴水，难时拥有太平洋。太平洋保险彰
          显责任担当，过去10年累计赔付金额近5600亿元。响应打赢脱贫攻坚战的国家战略，聚焦“三区三州
          ”深贫地区，探索建立具有太保特色的精准扶贫长效机制。2018年，公司投入扶贫专项资金2130 万
          元，各类扶贫项目共覆盖建档立卡贫困户约429万人，为贫困地区提供总保额1.36万亿元的风险保障
          。 太平洋保险将企业社会责任内化为可持续的发展动力。因在社会责任建设方面的扎实工作。2018
          年连续第九年获中国企业社会责任榜“杰出企业奖”，再次入选中国A股市场环境、社会和治理（ESG）
          “美好50指数成分股”。 太平洋保险将继续以高质量发展为主线，推进实施“转型2.0”，围绕“客户体
          验最佳、业务质量最优、风控能力最强”的转型目标，用坚实的每一步打造 “行业健康稳定发展的引领者”。
        </p>
      </div>
    </div>
    <div class="gu top">
      <h3 class="title"><b></b><span>组织架构</span></h3>
      <div class="quan">
        <img src="../../../static/chao/11.png" alt="">
      </div>
    </div>
    <div class="qi top">
      <h3 class="title"><b></b><span>保险服务</span></h3>
      <div class="tou">
        <Button type="primary" long @click="goshen">我要买保险</Button>
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
        name: "baoc",
        data() {
            return {
                valueCustomText:4.8
            }
        },
        created(){
            document.title='中国太平洋保险（集团）股份有限公司'
        },
        methods:{
            goshen(){
                Dialog.alert({
                    message: '即将开通，敬请期待'
                })
            },
            goguan(){
                window.open('http://www.ayfund.net');
            }
        }
    }
</script>

<style lang="less" src="../../assets/css/int.less"></style>
