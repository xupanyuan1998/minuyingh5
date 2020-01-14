<template>
  <div class="warp">
    <div class="top">
      <h3 class="title"><b></b><span>公司简介</span></h3>
      <div class="jie">
        <div class="name">
          <img src="../../../static/chao/6.jpg" alt="">
        </div>
        <p>中海环境科技（上海）股份有限公司隶属于中国远洋海运集
          团有限公司，是由上海船舶运输科学研究所为主发起的、在整合
          全部环境相关业务的基础上设立的股份制高新技术企业。公司控股股
          东上海船舶运输科学研究所成立于1962年，是我国最大的交通运输及航运
          综合技术研究开发基地，原为交通部直属科研事业机构，2000年转制为科
          技型企业，改由中央企业工作委员会领导，2003年划归国务院国有资产监
          督管理委员会管理，2010年经国务院批准，整体并入原中国海运（集团）总公司。
        </p>
      </div>
    </div>
    <div class="gu top">
      <h3 class="title"><b></b><span>组织架构</span></h3>
      <div class="quan">
        <img src="../../../static/chao/7.jpg" alt="">
      </div>
    </div>
    <div class="gu top">
      <h3 class="title"><b></b><span>公司资质</span></h3>
      <div class="quan">
        <img src="../../../static/chao/23.png" alt="">
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
            document.title='中海环境科技（上海）股份有限公司'
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
