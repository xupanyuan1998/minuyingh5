<template>
  <div class="warp">
    <div class="top">
      <h3 class="title"><b></b><span>公司简介</span></h3>
      <div class="jie">
        <div class="name">
          <img src="../../../static/chao/3.jpg" alt="">
          <b>安徽蓝天会计师事务所</b>
        </div>
        <p>安徽蓝天是具有多种从业资格的综合型中介机构。其前身是由铜陵市审计局于1988年成立的
          铜陵市审计事务所（自收自支的副县级单位），1999年12月根据《安徽省会计师（审计）事务
          所脱钩改制实施意见》的规定进行脱钩改制，成立有限责任式的会计师事务所，经多年发展具
          有 多种资质平台，多个机构，统一定名为“安徽蓝天”。 安徽蓝天技术力量雄厚：现有固定从
          业人员50名，其中注册会计师34名、注册资产评估师8人、 注册税务师13名、注册造价（监理
          ）工程师11名、土地估价师6名、房地产估价师10名、司法鉴 定人28名、节能评估师7名、二手
          车评估师6名。 安徽蓝天社会信誉良好：安徽蓝天涉足铜陵各行业及各经济领域，我们的足迹遍
          布青阳、石台、 池州、黄山、安庆、芜湖、合肥、深圳、上海等地。我们一贯秉承“以责任凝聚，
          以实践立帜，以 专业求效，以博学实基”这一信念，以为客户提供优质服务为理念，与客户共同进
          步、共赢发展， 有着良好的社会信誉： 2003-2013年度列安徽省会计师事务所及资产评估机构前
          20强，2004-2008 年被市工商局评为“优秀诚信企业”、“重合同守信用单位”， 2009年-2014年度
          被省工商局授予省级 重合同守信用单位，2011年被省建筑工程招标协会授予 “双满意工程招标代理
          机构”荣誉称号，2004 -2014年被市建工局评为“优秀招标代理企业”和“优秀工程造价咨询企业”，2
          013年被省造价协会评为 2011-2012年度全省工程造价咨询企业先进单位，安徽省档案管理一级单位
          、2013年度安徽省诚信企业。
        </p>
      </div>
    </div>
    <div class="gu top">
      <h3 class="title"><b></b><span>组织架构</span></h3>
      <div class="quan">
        <img src="../../../static/chao/10.jpg" alt="">
      </div>
    </div>
    <div class="tellme top">
      <h3 class="title"><b></b><span>联系我们</span></h3>
      <ol>
        <li>
          <span >电话：</span>
          <span>0562-2172288</span>
        </li>
        <li><span>传真：</span><span>0562-2877257</span></li>
        <li>
          <span>地址：</span>
          <span>铜陵市北京西路655号</span>
        </li>
        <li>
          <span>邮箱：</span>
          <span>ahlt-gxl@163.com</span>
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
            document.title='安徽蓝天会计师事务所'
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
