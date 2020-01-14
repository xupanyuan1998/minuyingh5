<template>
  <div class="warp">
    <div class="top">
      <h3 class="title"><b></b><span>公司简介</span></h3>
      <div class="jie">
        <div class="name">
          <img src="../../../static/chao/8.jpg" alt="">
          <b>铜陵市丰瑞贸易有限公司</b>
        </div>
        <p>本公司一直保持着和铜陵市新桥矿业公司业务关系,不论市场怎么变化,我们公司都在发展贸易.有诚信的厂家我们可以联系交流,我们公司的宗旨:诚信.月供硫铁矿和硫精砂近一万吨和硫金砂需求每个月20000吨（含金2克以上)
          欢迎来到铜陵市丰瑞贸易有限公司网站， 具体地址是安徽省铜陵市铜官山区铜陵市铜官山区铜陵市淮河南路金色兰庭4号楼705，联系人是谢斌。
          主要经营硫精砂和硫金砂; 硫铁矿; 低硫高铁;。
          我们是一家专业从事化工产品研发与销售的综合型高科技服务性企业。公司主营化工 过氧化物 等！公司由一批化工领域的专业研究人员及从事多年化工销售团队组建而成。同时，我公司拥有完善的技术团队，能够及时为客户提供技术支持与服务。我公司自成立以来，一直秉承“科技创新，立足诚信，感恩于心”的理念，力求创造与客户合作共赢的局面。在广大新老客户的大力支持下，我公司员工经过不懈努力，公司已快速发展成为国内知名化工企业。公司一直与国内外大型化工企业保持良好的合作关系，使我公司的服务品质得到不断提高。“做客户信赖的化工产品可以选择]品牌”是企业坚持不懈的奋斗目标，我们也时时刻刻以此来严格要求自己。如果你对我们公司的产品感兴趣，期待您的来电咨询，期望与您携手共进，共创美好未来！
        </p>
      </div>
    </div>
    <div class="gu top">
      <h3 class="title"><b></b><span>组织架构</span></h3>
      <div class="quan">
        <img src="../../../static/chao/30.png" alt="">
      </div>
    </div>
    <div class="tellme top">
      <h3 class="title"><b></b><span>联系我们</span></h3>
      <ol>
        <li><span>公司地址：</span><span> 安徽省 铜陵市 铜官山区 铜陵市铜官山区铜陵市淮河南路金色兰庭4号楼705</span></li>
        <li><span>移动电话：</span><span> 13955909988</span></li>
        <li><span>联&nbsp;系&nbsp;&nbsp;人：</span><span> 谢斌</span></li>
        <li><span>邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱：</span><span> 2219309327@qq.com</span></li>
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
            document.title='铜陵市丰瑞贸易有限公司'
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
