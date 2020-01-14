<template>
  <div class="warp">
    <div class="top">
      <h3 class="title"><b></b><span>公司简介</span></h3>
      <div class="jie">
        <div class="name">
          <img src="../../../static/chao/3.jpg" alt="">
          <b>安徽安元创新风险投资基金有限公司</b>
        </div>
        <p>为进一步推进安徽经济结构调整和产业升级，促进多层次资本市场建设，扩大
          企业直接融资比重，根据省政府领导指示，并经省国资委批准，国元集团、国元
          证券共同作为主发起人，联合省内实力雄厚的交控集团，省投集团（出资主体：
          铁路基金）、国贸集团（出资主体：国贸联创）、国资运营公司等六家大型国有
          企业于2015年6月30日共同发起设立安徽安元投资基金有限公司（简称：安元基金
          ）。同时，上述发起人股东单位又联合股交中心、黄山公司共同发起设立安徽安元
          投资基金管理有限公司（简称：管理公司）作为专业管理机构受托管理安元基金的
          全部资产。 安元基金实收注册资本30亿元，定位为开放创新型母基金。其中一部
          分用于直接股权投资，大部分用于引进社会资本发起设立子基金（包括区域专项子
          基金、并购子基金、债券子基金等），这种基金模式创新，使得母基金与系列子基
          金相呼应，共同形成一个“蜂窝状、可拆卸”的母子基金体系架构，可以因时制宜、
          因地制宜，根据资本市场环境变化、自身定位调整对各类子基金发展规模、速度，
          进行调节和控制。安元基金投资方向主要以服务培育安徽省重点发展领域的优质企
          业和加快省内多层次资本市场体系建设为主。同时，面对省内资本市场深化改革、
          产业整合全球化大趋势，安元基金立足安徽，放眼全国乃至全球资本市场，遵循市
          场化原则，以获利最大化为目标，紧跟传统产业整合升级、新型产业蓬勃发展的时
          代潮流，准确把握经济周期变化过程中的投资时机，运用“PE+上市公司”“PE+投行”
          等投资组合模式，全面开展并购重组业务，在资本市场上大显身手
        </p>
        <Button type="primary" long @click="goguan" style="margin: 20px 0">进入官网</Button>
      </div>
    </div>
    <div class="gu top">
      <h3 class="title"><b></b><span>股权结构</span></h3>
      <div class="quan">
        <img src="../../../static/chao/12.png" alt="">
      </div>
    </div>
    <div class="tellme top">
      <h3 class="title"><b></b><span>联系我们</span></h3>
      <ol>
        <li><span>传真：</span><span>0551-63894124</span></li>
        <li><span>邮箱：</span><span>zhangfabao@ayfund.net</span></li>
        <li><span>地址：</span><span>合肥市高新区创新创业园二期E1栋527室</span></li>
      </ol>
    </div>
    <div class="qi top">
      <h3 class="title"><b></b><span>企业服务</span></h3>
      <div class="tou">
        <Button type="primary" long @click="goshen">我要投资</Button>
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
        name: "anyuan",
        data() {
            return {
                valueCustomText:4.8
            }
        },
        created(){
            document.title='安徽安华创新风险投资基金'
        },
        methods:{
            goshen(){
                Dialog.alert({
                    message: '此功能正在开发中！！！'
                })
            },
            goguan(){
                window.open('http://www.ayfund.net');
            }
        }
    }
</script>

<style lang="less" src="../../assets/css/int.less"></style>
