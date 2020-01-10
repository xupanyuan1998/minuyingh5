
<template>
  <div class="hello">
    <!-- 图形 -->
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
    <div id="huoy"></div>
    <div class="table_w">
      <!-- 表单 -->
      <Table :columns="columns13" :data="data" border></Table>
    </div>
  </div>
</template>

<script>
  import {getMonthEndDate, getMonthStartDate, getWeekEndDate, getWeekStartDate} from "../../assets/js/changedate";
export default {
  created() {},
  data() {
    return {
      // 表格数据
        buttonSize:'large',
      // 表头
     columns13: [
                    {
                        title: '序号',
                        type: 'index',
                        align: 'center',
                      width:70
                    },
                    {
                        title: '日期',
                        key: 'month',
                        resizable: true,
                      width: 120
                    },
                    {
                        title: '数量',
                        key: '数量'
                    }
                ],
      // 时间戳
      value1: [],
      chart:null,
      data:[],
  value1:'',
    };
  },
  methods: {
    getfa(){
      const ds = new this.DataSet();
      const dv = ds.createView().source(this.data);
      // fold 方式完成了行列转换，如果不想使用 DataSet 直接手工转换数据即可
      dv.transform({
        type: 'fold',
        fields: [ '数量' ], // 展开字段集
        key: 'city', // key字段
        value: 'temperature' // value字段
      });
      const chart = new G2.Chart({
        container: 'huoy',
        forceFit: true,
        height:400,
         padding:[40,30,30,40]
      });
      chart.source(dv, {
        month: {
          range: [ 0, 1 ]
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
            return val ;
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
    getdate(){
      var start=this.value1[0];
      var end=this.value1[1]  ;
      var datas = {
        startTime: start,
        endTime: end,
      };
      this. get(datas);
      // alert(this.value1)
    },
    getweek(){
      var start=getWeekStartDate();
      var end=getWeekEndDate();
      var datas = {
        startTime: start,
        endTime: end,
      };
      this. get(datas);
    },
    getmon(){
      var start=getMonthStartDate();
      var end=getMonthEndDate();
      var datas = {
        startTime: start,
        endTime: end,
      };
      this. get(datas);
    },
    handleChange(date){
      this.value1=date
    },
    //获取数据
    get(datas){
      var token=this.$route.query.token;
      this.axios({
        method:'post',
        url:'/system/leader/webcompanyactivity',
        headers: {
          'Content-Type': 'application/json',//设置请求头请求格式为JSON
          'token': token //设置token 其中K名要和后端协调好
        },
        params:datas
      }).then(({data})=>{
        var list=data.data;
        var arr=[];
        for (var i=0;i<list.length;i++){
          var obj={};
          obj.month=list[i].datevalue;
          obj.数量=list[i].viewcnt;
          arr.push(obj);
        }
        this.data=arr;
        this.chart.source( this.data);
      });
    }
  },

  mounted() {

    var that=this;
    var datas={
      startTime: '',
      endTime: '',
    };
    var token=this.$route.query.token;
    this.axios({
      method:'post',
      url:'/system/leader/webcompanyactivity',
      headers: {
        'Content-Type': 'application/json',//设置请求头请求格式为JSON
        'token': token //设置token 其中K名要和后端协调好
      },
      params:datas
    }).then(({data})=>{
      var list=data.data;
      var arr=[];
      for (var i=0;i<list.length;i++){
        var obj={};
        obj.month=list[i].datevalue;
        obj.数量=list[i].viewcnt;
        arr.push(obj);
      }
      this.data=arr;
      this.getfa();
    });
  }
};
</script>
<style scoped lang="less">
  .hello{
    padding: 0 15px;
  }
h3 {
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
    margin-top: 15px;
    padding-bottom: 30px;
  }
  /deep/.ivu-input{
    height: 30px;
  }
</style>

