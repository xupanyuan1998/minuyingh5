<template>
  <div class="warp">
    <div class="top">
      <h3 class="title"><b></b><span>律所简介</span></h3>
      <div class="jie">
        <div class="name">
          <img src="../../../static/20.jpg" alt="">
          <b>安徽宪达律师事务所</b>
        </div>
        <p>公正即法，权威即治，法治在于公正权威。秉持着这一理念的安徽宪达律师事务所自一九九三年创建以来，
          励精图治十数载。虽历经铜陵市对外经济律师事务所、铜陵宪达律师事务所数易其名，历经国资所、合伙所
          体制变更，但对于法治的信念始终未敢动摇。 十数次的花开花落中，我所先后为数十家政府机关、企事业
          单位、个人担任过法律顾问，从未间断地办理刑事辩护、民事、行政诉讼代理，以自己的智慧和勇气为民请
          命，为法治呐喊。与此同时，合同起草、商务谈判、公司组建、律师见证、留学证明等非诉讼法律事务，亦
          成为我所同仁大量涉足。广连四海、博采众长。多年来，我所与全国众多同行均建立有良好的业务合作关系
          ，我所同仁的足迹更是远至欧洲大陆。 我所以恢复律师制度以来第一批从事律师工作具有二十多年经验的资
          深律师为主体，并拥有具有会计师、工程师、经济师等专业技术资格的复合型律师人才。我所的特色是人少精
          干、专业分工、团队协作，用集体的智慧为客户提供优质的法律服务。现我所由余国富律师任主任，合伙性质
          ，执业律师13人，内勤工作人员2人，执业律师中具有法律专业本科学历6人，其他专业本科学历6人，法律专
          业专科学历1人，其中有3位硕士学位。 宪者，法令也；达者，畅通也；法令之畅通，公正之权威，是我所全
          体同仁秉持的信念，为之奋斗不息所追求的理想。路漫漫其修远兮，吾将上下而求索。我们一直并将继续不断
          地实践着以个案推动我国伟大而艰巨的法治进程的理念。
        </p>
      </div>
    </div>
    <div class="gu top">
      <h3 class="title"><b></b><span>法律团队</span></h3>
      <div class="cc">
        <Table border :columns="columns1" :data="data"></Table>
      </div>
    </div>
    <div class="tellme top">
      <h3 class="title"><b></b><span>联系我们</span></h3>
      <ol>
        <li>
          <span>电话：</span>
          <span>0562-2825000</span>
        </li>
        <li>
          <span>地址：</span>
          <span> 安徽省铜陵市义安大道北段财富广场B座2006号</span>
        </li>
        <li>
          <span> 官网：</span>
          <span>http://www.tlxdls.com</span>
        </li>
      </ol>
    </div>
    <div class="qi top">
      <h3 class="title"><b></b><span>企业服务</span></h3>
      <div class="tou">
        <Button type="primary" long @click="goshen">我要咨询</Button>
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
                        name: '张海林',
                        jigou:'安徽宪达律师事务所',
                        card:'13407201611750119',
                        age:'3'
                    },
                    {
                        name: '汪镭',
                        jigou:'安徽宪达律师事务所',
                        card:'13407201311862143',
                        age:'6'
                    },
                    {
                        name: '卢守辉',
                        jigou:'安徽宪达律师事务所',
                        card:'13407201110609359',
                        age:'8'
                    },
                    {
                        name: '王文元',
                        jigou:'安徽宪达律师事务所',
                        card:'13407201210504981',
                        age:'7'
                    },
                    {
                        name: '朱永诚',
                        jigou:'安徽宪达律师事务所',
                        card:'13407201610263828',
                        age:'3'
                    },
                    {
                        name: '杨光康',
                        jigou:'安徽宪达律师事务所',
                        card:'13407201610466322',
                        age:'3'
                    },
                    {
                        name: '朱真珣',
                        jigou:'安徽宪达律师事务所',
                        card:'13407201510901926',
                        age:'4'
                    },
                    {
                        name: '余国富',
                        jigou:'安徽宪达律师事务所',
                        card:'13407198910197417',
                        age:'30'
                    },
                    {
                        name: '余勇',
                        jigou:'安徽宪达律师事务所',
                        card:'13407201610356149',
                        age:'3'
                    },
                    {
                        name: '刘圣刚',
                        jigou:'安徽宪达律师事务所',
                        card:'13407198701524260',
                        age:'32'
                    },
                ],
                columns1: [
                    {
                        title: '姓名',
                        key: 'name',
                        align:'center',
                        width: 80
                    },
                    {
                        title: '执业机构',
                        key: 'jigou',
                        align:'center'
                    },
                    {
                        title: '执业年限',
                        key: 'age',
                        align:'center',
                        width:80
                    }
                ],
            }
        },
        created(){
            document.title='安徽宪达律师事务所'
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
