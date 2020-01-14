<template>
  <div class="warp">
    <div class="top">
      <h3 class="title"><b></b><span>公司简介</span></h3>
      <div class="jie">
        <div class="name">
          <img src="../../../static/chao/20.png" alt="">
        </div>
        <p>南京大学是蜚声海内外的高等学府和科研中心，也是我国最早开展环境科学研究和教学的单位之一。自1978年教育部批准设立南京大学环境科学研究所以来，我校环境学科在培育大批优秀人才的同时，还一直坚持为国家、地方的重大环境需求提供有力的科技支撑。根据教育部2013年对全国一级学科的评估，我校“环境科学与工程”学科位列前三。为进一步完善我校环境学科“科学研究-人才培养-技术开发-服务社会”的一体化平台体系，根据国家事业单位体制改革和高校产业转型的相关要求，我校整合相关资源组建了综合性甲级环境科研、规划和咨询服务机构——南京大学环境规划设计研究院。
          “学府智慧、绿动未来”。我院发源于南京大学环境科学与工程学科群，坚持实践、科研、教学相结合的发展思路，严守“责任、诚信、公益、创新”的价值理念和“求实、求是、求精”的质量方针，利用综合性院校的优势，致力于推动我国社会经济的可持续发展。围绕环境标准制修订、环境模拟技术、环境经济政策、污染防控技术和风险防范与应急技术研究等重点方向，我院科研人员开展了大量科学研究和技术开发工作，研究成果获得多项国家级、省部级奖励。在环保服务业领域，我院开展了大量的顾问咨询、环境规划、工程设计、环境影响评价、监理核查、清洁生产、水资源论证、教育培训等工作，为各级政府、各类开发区、百余家世界500强企业等数2000余家客户提供了高品质的服务，获得了主管部门和社会各界的高度肯定。此外，我院还承担了南京大学环境行业校友会秘书处的职能，致力于为海内外从事环境保护相关领域工作的校友提供服务。
          廿一世纪的第二个十年，全球经济徘徊与环境事件频发并行，我国发展中面临的资源环境瓶颈更加凸显，环保人肩负了国家和人民的重托，任务艰巨，使命光荣。南京大学环境规划设计研究院将秉承“诚朴雄伟、励学敦行；艰苦奋斗、追求卓越”的精神，以“开放、包容、交流、竞合”的态度，与大家一起努力，开启和谐发展的新时代。
        </p>
      </div>
    </div>
    <div class="gu top">
      <h3 class="title"><b></b><span>组织架构</span></h3>
      <div class="quan">
        <img src="../../../static/chao/25.png" alt="">
      </div>
    </div>
    <div class="gu top">
      <h3 class="title"><b></b><span>公司资质</span></h3>
      <div class="quan">
        <img src="../../../static/chao/24.png" alt="">
      </div>
    </div>
    <div class="qi top">
      <h3 class="title"><b></b><span>企业服务</span></h3>
      <div class="tou">
        <Button type="primary" long @click="goshen">我要环评</Button>
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
            document.title='南京大学环境规划设计院'
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
