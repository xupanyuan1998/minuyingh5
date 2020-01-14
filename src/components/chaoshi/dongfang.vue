<template>
  <div class="warp">
    <div class="top">
      <h3 class="title"><b></b><span>公司简介</span></h3>
      <div class="jie">
        <div class="name">
          <img src="../../../static/chao/4.jpg" alt="">
          <b>铜陵东方会计师事务所</b>
        </div>
        <p>铜陵永昌会计师事务所成立于2000年03月21日，注册地位于铜陵县五松镇南湖路11号，法人代表为陆浩。经营范围包括一般经营项目：审计验资、造价咨询、工程招标代理、工程监理、司法鉴
          定、 咨询服务、业务培训（凭有效资质证书经营）；代理公司注册服务。铜陵永昌会计师事务所对外投资2家公司
        </p>
      </div>
    </div>
    <div class="gu top">
      <h3 class="title"><b></b><span>组织架构</span></h3>
      <div class="quan">
        <img src="../../../static/chao/5.jpg" alt="">
      </div>
    </div>
    <div class="tellme top">
      <h3 class="title"><b></b><span>联系我们</span></h3>
      <ol>
        <li>
          <span class="left">电话：</span>
          <span>
            <i>0562-2882787（财务审计部）</i>
            <i>0562-2882767（综合服务部）</i>
            <i>0562-2882019（税务业务部）</i>
            <i>0562-2882809（招标代理部）</i>
            <i>0562-2882559（造价咨询部）</i>
            <i>0562-2882789（所长室）</i>
          </span>
        </li>
        <li>
          <span>地址：</span>
          <span>天山大道与铜井路交叉口联盟大厦三楼（中房东郡对面）</span>
        </li>
        <li>
          <span>邮箱：</span>
          <span>459356698@qq.com</span>
        </li>
      </ol>
    </div>
    <div class="qi top">
      <h3 class="title"><b></b><span>企业服务</span></h3>
      <div class="tou">
        <Button type="primary" long @click="goshen">我要辅导</Button>
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
        name: "dongfang",
        data() {
            return {
                valueCustomText:4.8
            }
        },
        created(){
            document.title='铜陵东方会计师事务所'
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
