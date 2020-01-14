<template>
  <div class="warp">
    <div class="top">
      <h3 class="title"><b></b><span>公司简介</span></h3>
      <div class="jie">
        <div class="name">
          <img src="../../../static/chao/3.jpg" alt="">
          <b>铜陵市担保控股有限公司</b>
        </div>
        <p>铜陵市担保控股有限公司办公室地址位于全国综合配套改革、优化资本
          结构等试点城市--铜陵， 安徽省铜陵市石城大道南段660号10层，于201
          4年12月30日在铜陵市工商行政管理局注册成立， 注册资本为40,360万元
          ，在公司发展壮大的5年里，我们始终为客户提供好的产品和技术支持、 健
          全的售后服务，我公司主要经营企业管理，投资管理，资产管理。（依法须经批
          准的项目， 经相关部门批准后方可开展经营活动）， 我们有好的产品和专业的销
          售和技术团队，我公司属于铜陵金融服务公司行业
        </p>
      </div>
    </div>
    <div class="gu top">
      <h3 class="title"><b></b><span>组织架构</span></h3>
      <div class="quan">
        <img src="../../../static/chao/16.png" alt="">
      </div>
    </div>
    <div class="tellme top">
      <h3 class="title"><b></b><span>联系我们</span></h3>
      <ol>
        <li>
          <span>固定电话：</span>
          <span>05622885220</span>
        </li>
        <li>
          <span>公司地址：</span>
          <span>安徽省铜陵市石城大道南段660号10层</span>
        </li>
        <li>
          <span>经&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;理：</span>
          <span>钱滢</span>
        </li>
        <li>
          <span>电子邮件：</span>
          <span>2401720210@qq.com</span>
        </li>
      </ol>
    </div>
    <div class="qi top">
      <h3 class="title"><b></b><span>企业服务</span></h3>
      <div class="tou">
        <Button type="primary" long @click="goshen">我要融资</Button>
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
                data: [
                    {
                        bumen: ' 办公室',
                        name: ' 杨剑平',
                        phone: '65227257'
                    },
                    {
                        bumen: ' 综合计划部',
                        name: ' 齐智洲 ',
                        phone: '65227561'
                    },
                    {
                        bumen: '担保一部',
                        name: '周 剑',
                        phone: ' 65227263'
                    },
                    {
                        bumen: '  担保二部',
                        name: ' 巫 惠',
                        phone: '65227273'
                    },
                    {
                        bumen: '担保三部',
                        name: '  孙小虎',
                        phone: ' 65227105'
                    },
                    {
                        bumen: ' 担保四部',
                        name: ' 朱玉友',
                        phone: ' 65227245'
                    },
                    {
                        bumen: ' 担保五部',
                        name: '  朱安国',
                        phone: '65227255'
                    },
                    {
                        bumen: '  担保六部\n' +
                            '(宿州市分公司)',
                        name: ' 邰成华',
                        phone: '67186096'
                    },
                    {
                        bumen: '再担保总部',
                        name: ' 袁 野',
                        phone: '65227521'
                    },
                    {
                        bumen: '投资管理部',
                        name: '冷苏明',
                        phone: '65227571'
                    },
                    {
                        bumen: '资产质量和风险管理部',
                        name: '程 岱',
                        phone: '65227100'
                    },
                    {
                        bumen: '项目评审部',
                        name: '程  云',
                        phone: ' 65227612'
                    },
                    {
                        bumen: ' 合规法律部',
                        name: ' 朱晓平',
                        phone: ' 67186089'
                    },
                    {
                        bumen: '业务研发部',
                        name: '  滕 青',
                        phone: ' 65227591'
                    },
                    {
                        bumen: '  稽核审计部',
                        name: '  吴金荣',
                        phone: ' 65227529'
                    },
                    {
                        bumen: ' 信息技术部',
                        name: ' 汪 磐',
                        phone: ' 65227515'
                    },
                    {
                        bumen: ' 财务管理部',
                        name: ' 王晶晶',
                        phone: ' 65227260'
                    },
                    {
                        bumen: '  人力资源部',
                        name: '  李 震',
                        phone: '65227262'
                    },
                    {
                        bumen: ' 监察室',
                        name: '  吴泽同',
                        phone: ' 65227246'
                    },
                    {
                        bumen: ' 党群工作部\n' +
                            '（工会办公室）\n',
                        name: '  郭 晗',
                        phone: '65227552'
                    },
                    {
                        bumen: ' 督查室 ',
                        name: '  吕洁丽',
                        phone: '67186085'
                    },
                    {
                        bumen: ' 集团工会',
                        name: '  汤   闽',
                        phone: ' 65227259'
                    },
                    {
                        bumen: '  金寨分公司',
                        name: '  郭尔翰',
                        phone: ' 65292612'
                    },
                    {
                        bumen: '  省开发投资公司',
                        name: '  冷苏明',
                        phone: ' 65227571'
                    },
                    {
                        bumen: '  省科技融资担保公司',
                        name: '  董 青',
                        phone: ' 65227511'
                    },
                    {
                        bumen: '  安徽担保资产管理公司',
                        name: '  徐文卿',
                        phone: ' 65227517'
                    },
                    {
                        bumen: ' 省科技产业投资公司',
                        name: ' 江闽涛',
                        phone: ' 66195753'
                    },
                    {
                        bumen: '  黄山公司',
                        name: ' 朱晓平',
                        phone: ' 67186089'
                    }
                ],
                columns1: [
                    {
                        title: '部门（公司）',
                        key: 'bumen',
                        align:'center'
                    },
                    {
                        title: '联系人',
                        key: 'name',
                        align:'center'
                    },
                    {
                        title: '联系电话',
                        key: 'phone',
                        align:'center'
                    }
                ],
            }
        },
        created(){
            document.title='铜陵市担保控股有限公司'
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
