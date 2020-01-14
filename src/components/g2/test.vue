<template>
  <div class="aaa">
      <h1>测试报表</h1>
      <div id="earch"></div>
      <router-link to="/tableFa">政策发布效果统计</router-link>
      <router-link to="/tableJd">企业建档统计</router-link>
      <router-link to="/tableMq">我的办理企业</router-link>
      <router-link to="/zijin">注册资金统计</router-link>
      <router-link to="/tableMysuqiu">在线诉求统计</router-link>
      <router-link to="/tableQyhy">企业活跃统计</router-link>
      <router-link to="/tableSqbl">诉求办理统计</router-link>
      <router-link to="/tableWznr">政策发布效果</router-link>
      <router-link to="/stars">评分统计</router-link>
    <h1>页面</h1>
      <router-link to="/from">表单</router-link>
      <router-link to="/qiyeint">企业详情</router-link>
      <router-link to="/gongint">供需详情</router-link>
      <router-link to="/legal">法律服务</router-link>
      <router-link to="/Finance">金融机构</router-link>
      <router-link to="/fund">基金对接</router-link>
      <router-link to="/Insurance">保险服务</router-link>
      <router-link to="/innovate">创新产品</router-link>
      <router-link to="/technology">技术服务</router-link>
      <router-link to="/intermediary">中介服务</router-link>
      <router-link to="/jili">积利金（增强行）</router-link>
      <router-link to="/waihui">外汇宝</router-link>
      <router-link to="/anhua">安徽安华创新风险投资基金有限公司</router-link>
      <router-link to="/anyuan">安徽安元创新风险投资基金有限公司</router-link>
      <router-link to="/baoc">太平洋保险</router-link>
      <router-link to="/guoyuan">国元农业保险</router-link>
      <router-link to="/dongfang">铜陵东方会计师事务所</router-link>
      <router-link to="/yongchang">铜陵永昌会计师事务所</router-link>
      <router-link to="/andan">安徽省信用担保集团</router-link>
      <router-link to="/tongl">铜陵市担保控股有限公司</router-link>
      <router-link to="/xianda">安徽宪达律师事务所</router-link>
      <router-link to="/daqian">安徽大潜律师事务所</router-link>
      <router-link to="/dong">铜陵东方事务所</router-link>
      <router-link to="/lan">安徽蓝天会计师事务所</router-link>
      <router-link to="/shun">顺位财税</router-link>
      <router-link to="/fuda">铜陵市富达财务代理有限公司</router-link>
      <router-link to="/zhonghai">中海环境</router-link>
      <router-link to="/nanda">南大</router-link>
      <router-link to="/jinyuan">金元节能</router-link>
      <router-link to="/ruide">瑞德节能</router-link>
      <router-link to="/changjiang">长江</router-link>
      <router-link to="/taixiang">泰祥</router-link>
      <router-link to="/fengrui">丰瑞</router-link>
      <router-link to="/ailide">爱立德</router-link>
  </div>
</template>

<script>
export default {
  name: "g2Demo",
  components: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 载入后, Vue 实例挂载到实际的 DOM 操作完成，一般在该过程进行 Ajax 交互
  mounted() {
    this.initComponent();
  },
  data() {
    return {
      msg: "",
      chart: null,
      data: [
        { genre: "Sports", sold: 275 },
        { genre: "Strategy", sold: 115 },
        { genre: "Action", sold: 120 },
        { genre: "Shooter", sold: 350 },
        { genre: "Other", sold: 150 }
      ]
    };
  },
  // 方法集合
  methods: {
    initComponent() {
      // 此函数为个人习惯,喜欢创建一个初始化的函数
      this.msg = "vue-cli案例";
      const chart = new G2.Chart({
        container: "earch",
        width: 350,
        height: 200
      })
      chart.source(this.data);
      chart
        .interval()
        .position("genre*sold")
        .color("genre");
      this.chart = chart
      this.chart.render()
    }
  },
  // 计算属性
  computed: {}
}
</script>

<style>
h1{
  float: left;
  width: 100%;
}
.aaa{
  padding: 0 15px;
}
a{
  height: 30px;
  line-height:30px;
  font-size: 18px;
  overflow: hidden;
  width: 40%;
  display: inline-block;
}
</style>
