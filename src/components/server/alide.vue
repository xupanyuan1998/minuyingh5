<template>
  <div class="warp">
    <div class="top">
      <h3 class="title"><b></b><span>公司简介</span></h3>
      <div class="jie">
        <div class="name">
          <img src="../../../static/chao/3.jpg" alt="">
          <b>安徽爱立得人力资源有限公司</b>
        </div>
        <p>安徽爱立得人力资源有限公司是安徽省人力资源服务实力企业，注册资金500万，是安徽省较早开展人力资源外包服务企业和人力资源外包行业实力企业。爱立得凭借优良的管理和业界信誉，获得政府行政主管部门和广大企业的好评。
          　　公司凭借专业的服务团队，深化服务内容、扩大服务区域，致力于向客户提供高品质人事外包、劳务派遣、业务外包及猎头等服务。公司将致力于成为人力资源外包服务领域的专注者与耕耘者，立足于安徽、辐射华东、面向全国，成为能够与客户同步发展的合作伙伴。
          　　主营业务：猎头服务＼培训咨询＼人才派遣＼人事代理＼业务外包。
        </p>
      </div>
    </div>
    <div class="gu top">
      <h3 class="title"><b></b><span>组织架构</span></h3>
      <div class="quan">
        <img src="../../../static/chao/31.png" alt="">
      </div>
    </div>
    <div class="tellme top">
      <h3 class="title"><b></b><span>联系我们</span></h3>
      <ol>
        <li><span>公司地址：</span><span> 安徽阜阳市一道河中路28号万方广场3号楼14层</span></li>
        <li><span>移动电话：</span><span>15755885728</span></li>
        <li><span>联&nbsp;系&nbsp;&nbsp;人：</span><span> 王经理</span></li>
        <li><span>固定电话：</span><span> 0558-2666658</span></li>
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
            document.title='安徽爱立得人力资源有限公司'
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
