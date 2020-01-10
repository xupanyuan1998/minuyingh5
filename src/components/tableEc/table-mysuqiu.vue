<template>
  <div class="hello">
    <!-- 图形 -->
    <div id="myChartsFa" ref="myChartsFa"></div>
    <!-- 日期 -->
    <div class="choosedate">
      <van-button type="info" size="small" @click="getweek">本周</van-button>
      <van-button type="info" size="small" @click="getmon">本月</van-button>
      <div>
        <DatePicker type="daterange" :value="value1" placement="bottom-end" placeholder="选择日期"
                    @on-change="handleChange"></DatePicker>
        <van-button type="info" class="last" @click="getdate" size="small">查询</van-button>
      </div>

    </div>
    <div class="table_w">
      <!-- 表单 -->
      <Table :columns="columns13" :data="datas" border></Table>
    </div>
  </div>
</template>

<script>
  var chart;
  import {getMonthEndDate, getMonthStartDate, getWeekEndDate, getWeekStartDate} from "../../assets/js/changedate";
  export default {
    data() {
      return {
        buttonSize: 'large',
        // 表头
        columns13: [
          {
            title: '序号',
            type: 'index',
            align: 'center'
          },
          {
            width:80,
            title: '日期',
            key: 'month',
            align: 'center'
          },
          {
            title: '总数量',
            key: '总数量',
            align: 'center'
          },
          {
            title: '未完成',
            key: '未完成',
            align: 'center'
          }, {
            title: '已完成',
            key: '已完成',
            align: 'center'
          }
        ],
        // 时间戳
        value1: [],
        datas: [],
      }
    },
    methods: {
      getfa(arr) {
        const ds = new this.DataSet();
        const dv = ds.createView().source(arr);
        // fold 方式完成了行列转换，如果不想使用 DataSet 直接手工转换数据即可
        dv.transform({
          type: 'fold',
          fields: ['总数量', '未完成', '已完成'], // 展开字段集
          key: 'city', // key字段
          value: 'temperature' // value字段
        });
        chart = new G2.Chart({
          container: 'myChartsFa',
          forceFit: true,
          height: 400,
          padding: [40, 30, 100, 40]
        });
        chart.source(dv, {
          month: {
            range: [0, 1]
          }
        });
        chart.tooltip({
          crosshairs: {
            type: 'line'
          }
        });
        chart.axis('temperature', {
          label: {
            formatter: val => {
              return val;
            }
          }
        });
        chart
          .line()
          .position('month*temperature')
          .color('city')
          .shape('smooth');
        chart
          .point()
          .position('month*temperature')
          .color('city')
          .size(4)
          .shape('circle')
          .style({
            stroke: '#fff',
            lineWidth: 1
          });
        chart.render()
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
      //获取数据
      getdata(datas){
        var token=this.$route.query.token;
        var that=this;
        this.axios({
          method:'post',
          url:'/system/leader/weborderstatic',
          headers: {
            'Content-Type': 'application/json',//设置请求头请求格式为JSON
            'token': token //设置token 其中K名要和后端协调好
          },
          params:datas
        }).then(({data})=>{
          var arr=[];
          let list=data.data;
          for (var i=0;i<list.length;i++){
            var obj= {month: '', '总数量': '', '未完成': '', '已完成':''};
            obj.month=list[i].datevalue.toString();
            obj.总数量=Number(list[i].num);
            obj.未完成=Number(list[i].notcount);
            obj.已完成=Number(list[i].finishcount);
            arr.push(obj)
          };
          this.datas=arr;
          chart.source( arr);
        })
      },

      handleChange(date) {
        this.value1 = date
      }
    },
    mounted(){
      var token=this.$route.query.token;
      var that=this;
      var datas={
        startTime: '',
        endTime: '',
      };
      this.axios({
        method:'post',
        url:'/system/leader/weborderstatic',
        headers: {
          'Content-Type': 'application/json',//设置请求头请求格式为JSON
          'token': token //设置token 其中K名要和后端协调好
        },
        params:datas
      }).then(({data})=>{
        var arr=[];
        let list=data.data;
        for (var i=0;i<list.length;i++){
          var obj= {month: '', '总数量': '', '未完成': '', '已完成':''};
          obj.month=list[i].datevalue.toString();
          obj.总数量=Number(list[i].num);
          obj.未完成=Number(list[i].notcount);
          obj.已完成=Number(list[i].finishcount);
          arr.push(obj)
        };
        this.datas=arr;
        this.getfa(arr);
      })
    }
  };
</script>

<style scoped lang="less">
  .hello{
    padding: 0 15px;
  }
  h2 {
    font-size: 20px;
    font-weight: normal;
    padding-top: 15px;
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
    /deep/.ivu-table-cell{
      padding: 0 ;
    }
  }
  /deep/.ivu-input{
    height: 30px;
  }
</style>


