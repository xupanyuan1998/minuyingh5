<template>
  <div class="warp">
    <div class="top">
      <h3 class="title"><b></b><span>公司简介</span></h3>
      <div class="jie">
        <div class="name">
          <img src="../../../static/chao/4.jpg" alt="">
          <b>铜陵东方会计师事务所</b>
        </div>
        <p>铜陵东方是由注册会计师、注册造价工程师、注册税务师、注册资产评估师、房地产估价师、 二手车估价师等专职从业人员组成的职业群体，
          是一家集会计、审计、税务、造价、招投标、评估、管理、投资及相关咨询服务为一体，以东方会计师事务所、东方造价咨询公司和东方税务
          师事务所三个独立法人单位为主体， 大中小型企业、机关事业单位、社会团体和广大自然人为客体的咨询服务机构。作为一家专业的咨询服务
          机构，东方拥有一支富有创造性的精英团队，共有专职从业人员30人，其中：注册会计师、注册税务师、注册造价工程师、注册资产评估师、
          房地产估价师和二手车估价师等注册人员20人，高级工程师2人。 十年来，铜陵东方秉承专业为本、诚信为基、服务至上的经营理念，为企事
          业单位和广大投资者提供全面的财务审计、工程造价、招投标、评估、税务代理和投资、会计、管理咨询等服务。围绕支持领导决策、促进战
          略落地、提高经济效益、控制公司风险、改善经营管理、提升财务系统等方向，为广大大中小型企事业单位、社会团体和自然人主体提供个性
          化服务。 厚德载物，自强不息。未来，铜陵东方将在多元化经营中，努力开拓细分市场，我们有信心、愿付出、求进步， 一步一个脚印，满
          怀热情服务社会、服务广大投资人，为社会各界提供增值的专业化服务，携手共创辉煌！
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
        <Button type="primary" long @click="goshen">我要审计</Button>
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
            document.title='铜陵东方会计师事务所'
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
