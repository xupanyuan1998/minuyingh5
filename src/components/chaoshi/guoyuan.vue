<template>
  <div class="warp">
    <div class="top">
      <h3 class="title"><b></b><span>公司简介</span></h3>
      <div class="jie">
        <div class="name">
          <img src="../../../static/chao/1.jpg" alt="">
          <b>国元农业保险股份有限公司</b>
        </div>
        <p>国元农业保险股份有限公司是经中国保险监督管理委员会（保监发改〔2008〕54号）批准成立的第一家总部设在安徽的财产
          保险公司。公司由安徽省金融资产规模最大的国有大型金融控股企业安徽国元控股（集团）有限责任公司等26家企业共同设立
          。注册资本2103928900元人民币。注册地合肥。 成立国元保险是安徽省委、省政府在社会主义新农村建设中着力解决“三农”
          问题，防范和化解农业风险，建立一项长效支农、惠农政策的重要举措。国元保险以“ 立足安徽、服务社会主义新农村建设”为
          宗旨，实行“三步走”发展战略。第一步是用1-3年时间完成安徽省内经营区域的全覆盖；第二步是用3-5年时间在周边省份铺设
          网点，使公司成为具有一定实力的区域性农业保险公司；第三步是面向全国，用5-8年时间把公司建设成为“资本充足、管理先进
          、服务一流、效益良好、品牌卓著”的国内一流的创新型农业保险公司。 国元保险以服务“三农”为重点，实行农业保险业务和财
          产保险业务并存发展的模式。经营范围不仅包括“种植业保险”、“养殖业保险”、“农房保险”、“农民工意外伤害保险”、“森林火
          灾保险”等农业保险业务，还包括财产损失保险、责任保险、法定责任保险、信用保险和保证保险、短期健康保险和意外伤害保险
          ，以及上述保险业务的再保险等财产保险业务。 在中国保险业快速发展的新时期，国元保险将严格遵照“法制、监管、自律、规
          范”的方针，弘扬“诚信、专业、协作、创新”的企业精神，坚持“客户至上、以人为本、规范运作、优质高效”的经营理念，信奉“
          热情周到、快速便捷”的服务宗旨，积极探索、开拓创新、追求卓越，更好地发挥保险业在服务地方经济，推进社会主义新农村建
          设中的积极作用，为全面建设小康社会和构建社会主义和谐社会做出应有贡献。
        </p>
      </div>
    </div>
    <div class="gu top">
      <h3 class="title"><b></b><span>组织架构</span></h3>
      <div class="quan">
        <img src="../../../static/chao/2.jpg" alt="">
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
        name: "guoyuan",
        data() {
            return {
                valueCustomText:4.8
            }
        },
        created(){
            document.title='国元农业保险股份有限公司'
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
