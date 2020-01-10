

<template>
  <div class="hello">
    <!-- 图形 -->
    <div id="myCharts" ref="myCharts"></div>
      <!-- 日期 -->
    <div class="choosedate">
      <van-button type="info" size="small"  @click="getweek">本周</van-button>
      <van-button type="info" size="small"  @click="getmon">本月</van-button>
      <div>
        <DatePicker type="daterange" :value="value1" placement="bottom-end" placeholder="选择日期"
                    @on-change="handleChange"></DatePicker>
        <van-button type="info" class="last" @click="getdate" size="small">查询</van-button>
      </div>

    </div>
    <div class="table_w">
      <!-- 表单 -->
      <Table border :columns="columns13" :data="data" ></Table>
    </div>
  </div>
</template>

<script>
  import {getMonthEndDate, getMonthStartDate, getWeekEndDate, getWeekStartDate} from "../../assets/js/changedate";
export default {
  created() {},
  data() {
    return {
       buttonSize:'large',
      // 表头
     columns13: [
                    {
                        title: '类型',
                        key: 'item',
                        resizable: true,
                    },
                    {
                        title: '数量',
                        key: 'percent'
                    }
                ],
      // 时间戳
      value1: [],
      chart:null,
      data:[
        { item: '审核中', percent: 5503 },
        { item: '办理中', percent:1104 },
        { item: '已完成', percent: 3233 },
        { item: '已评价', percent:5092 },
      ],
  value1:'',
    };
  },
  methods: {
    get() {
      const chart = new G2.Chart({
        container: 'myCharts',
       forceFit: true,
           height:400,
            padding:[60,30,60,40]
      });
      chart.source(this.data, {
        percent: {
          formatter: val => {
            return val;
          }
        }
      });
      chart.coord('theta');
      chart.tooltip({
        showTitle: false
      });
      chart.intervalStack()
        .position('percent')
        .color('item')
        .label('percent', {
          offset: -40,
          // autoRotate: false,
          textStyle: {
            textAlign: 'center',
            shadowBlur: 2,
            shadowColor: 'rgba(0, 0, 0, .45)',
            fill: '#fff'
          }
        })
        .tooltip('item*percent', (item, percent) => {
          percent = percent
          return {
            name: item,
            value: percent
          };
        })
        .style({
          lineWidth: 1,
          stroke: '#fff'
        });
      chart.render();
    },
    getdate() {
      // alert(this.value1)
      var start=this.value1[0];
      var end=this.value1[1]  ;
      var datas = {
        startTime: start,
        endTime: end,
      };
      this. getdata(datas);
    },
    getweek(){
      var start=getWeekStartDate();
      var end=getWeekEndDate();
      var datas = {
        startTime: start,
        endTime: end,
      };
      this. getdata(datas);
    },
    getmon(){
      var start=getMonthStartDate();
      var end=getMonthEndDate();
      var datas = {
        startTime: start,
        endTime: end,
      };
      this. getdata(datas);
    },
    getdata(datas){
      var token=this.$route.query.token;
      var that=this;
      this.axios({
        method:'post',
        url:'/system/leader/orderlist',
        headers: {
          'Content-Type': 'application/json',//设置请求头请求格式为JSON
          'token': token //设置token 其中K名要和后端协调好
        },
        data:datas
      }).then(({data})=>{
        var arr=[];
        let list=data.data;
        for (var i = 0; i < list.length; i++) {
          var obj = {month: '', percent: '',};
          obj.item = list[i].stateString.toString();
          obj.percent = Number(list[i].count);
          arr.push(obj)
        };
        this.data = arr;
        this.chart.source( this.datas);
      })
    },
    handleChange(date){
      this.value1=date
    }
  },

  mounted() {
    var token=this.$route.query.token;
    var that=this;
    var datas={
      startTime: '',
      endTime: '',
    };
    this.axios({
      method:'post',
      url:'/system/leader/orderlist',
      headers: {
        'Content-Type': 'application/json',//设置请求头请求格式为JSON
        'token': token //设置token 其中K名要和后端协调好
      },
      params:datas
    }).then(({data})=> {
      var arr = [];
      let list = data.data;
      console.log(list)
      for (var i = 0; i < list.length; i++) {
        var obj = {month: '', percent: '',};
        obj.item = list[i].stateString.toString();
        obj.percent = Number(list[i].count);
        arr.push(obj)
      };
      this.data = arr;
      this.get();
    })
  }
};
</script>

<style scoped lang="less">
  .hello{
    padding: 0 15px;
  }
h3{
  font-size: 20px;
  font-weight: 400;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #ff4c4c;
}
  .choosedate{
    margin: 10px 0;
    overflow: hidden;
    >*{
      float: left;
    }
    button{
      margin-right: 30px;
    }
    div{
      margin: 10px 0;

    }
    button.last{
      margin-left: 20px;
      margin-top: 10px;
    }
  }

  .table_w{
    padding-bottom: 30px;
  }
  /deep/.ivu-input{
    height: 30px;
  }
</style>

