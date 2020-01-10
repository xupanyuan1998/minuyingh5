<template>
  <div>
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
a{
  display: block;
  height: 30px;
  line-height:30px;
  font-size: 18px;
  width: 50%;
  float: left;
}
</style>
