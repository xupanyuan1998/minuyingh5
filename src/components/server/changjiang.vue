<template>
  <div class="warp">
    <div class="top">
      <h3 class="title"><b></b><span>公司简介</span></h3>
      <div class="jie">
        <div class="name">
          <img src="../../../static/chao/22.png" alt="">
          <b>铜陵长江科技有限责任公司</b>
        </div>
        <p>
          铜陵长江科技有限责任公司成立于1999年。是一支热情、诚实、勇于进取的优质员工组成的合作团队。公司位于铜陵市淮河大道中段铜陵商城双星国际大厦南楼1104号；主要经营项目为:计算机软（硬）件及辅助设备和耗材、网络设备、通讯器材、数码产品、电子电器、仪器仪表、影像设备、办公用品、自动化设备、多媒体设备、会议系统设备销售及相关技术咨询、设计和售后服务；监控设备安装，网络工程，综合布线，信息系统集成等；建有完备的售前、售中和售后服务制度。
          我们坚持“诚信、恭谦、创新、敬业”的企业理念，锐意进取，受到社会各界的好评和肯定，陆续荣获《铜陵市守合同重信用单位》、《安徽省守合同重信用单位》、《劳动保障诚信A级单位》等称号，是《铜陵市计算机协会理事单位》、《铜陵市消费者协会理事单位》、《安徽省安全技术防范行业协会会员单位》，《安防三级资质》，连续多年中标《铜陵市政府行政事业单位办公设备定点采购单位》。</p>
      </div>
    </div>
    <div class="gu top">
      <h3 class="title"><b></b><span>组织架构</span></h3>
      <div class="quan">
        <img src="../../../static/chao/28.png" alt="">
      </div>
    </div>
    <div class="tellme top">
      <h3 class="title"><b></b><span>联系我们</span></h3>
      <ol>
        <li><span>地址：</span><span> 安徽省铜陵市铜都大道中段3798号(润盈矿产品交易市场) </span></li>
        <li><span>电话：</span><span> 0562-2876699</span></li>
        <li><span>传真：</span><span> 0562-2878899</span></li>
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
            document.title='铜陵长江科技有限责任公司'
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
