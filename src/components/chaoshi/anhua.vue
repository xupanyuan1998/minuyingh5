<template>
  <div class="warp">
    <div class="top">
      <h3 class="title"><b></b><span>公司简介</span></h3>
      <div class="jie ">
        <div class="name">
          <img src="../../../static/chao/8.png" alt="">
          <b>安徽安华创新风险投资基金有限公司</b>
        </div>
        <p>安徽安华创新风险投资基金有限公司成立于2017年，目标规模40.00亿元人民币，存续期7年
          ，由华富嘉业投资管理有限公司、华安证券股份有限公司、国元证券股份有限公司、安徽华
          文创业投资管理有限公司、时代出版传媒股份有限公司、安徽省交通控股集团有限公司、合肥兴泰金
          融控股(集团)有限公司、安徽省盐业总公司、合肥高新区管委会、安徽省投资集团控股有限公司与安徽
          省国有资产运营有限公司共同发起设立，由华富嘉业投资管理有限公司负责管理，投资于战略
          性新兴产业企业、高新技术企业、现代制造业企业以及“专精特新”企业。 基金由华安证券作为主发起人，采取市场化运作模式，重点投资省内初创期、成长期企业，同时设立子基金对接以高新区为代表的省内战略性新兴产业集聚发展和试验基地。 安华创新基金将在贯彻落实省委省政府关于建设省级股权投资基金体系的要求、服务全省实体经济转型升级等方面
          发挥作用，以股权风险投资为初创期、成长期企业“保驾护航”，给高新区广大中小高新技术企业带来潜在利好。</p>
        <Button type="primary" long @click="goshen" style="margin: 20px 0">进入官网</Button>
      </div>
    </div>
    <div class="gu top">
      <h3 class="title"><b></b><span>股权结构</span></h3>
      <div class="quan">
        <img src="../../../static/chao/13.png" alt="">
      </div>
    </div>
    <div class="tellme top">
      <h3 class="title"><b></b><span>联系我们</span></h3>
      <ol>
        <li><span>电话：</span><span>0551-65161616</span></li>
        <li><span>地址：</span><span>合肥市高新区创新大道2800号创新产业园二期E1栋866室</span></li>
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
        name: "anhua",
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
                    message: '即将开通，敬请期待！！！'
                })
            }
        }
    }
</script>

<style lang="less" src="../../assets/css/int.less"></style>
