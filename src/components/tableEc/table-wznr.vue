

<template>
  <div class="hello">
    <!-- 图形 -->
    <div id="myChartsWznr" ref="myChartsWznr"></div>
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
      <Table border :columns="columns13" :data="datas" ></Table>
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
       columns13: [
                    {
                        title: '板块',
                        key: 'name',
                        resizable: true,

                    },
                    {

                        title: '数量',
                        key: 'count'
                    }
      ],
      data:[],
      datas:[],
      value1:''
    };
  },
  methods: {
    // 图形
    getData(ri) {
      // 此处数据使用了按行组织的模式，所以需要使用 DataSet 的 fold 方法对数据进行加工
        const ds = new this.DataSet();
        const dv = ds.createView().source(this.data);
        dv.transform({
          type: 'fold',
          fields: ri, // 展开字段集
          key: 'ri', // key字段
          value: '月均降雨量' // value字段
        });

        this.chart = new G2.Chart({
          container: 'myChartsWznr',
           forceFit: true,
           height:400,
            padding:[40,30,100,40]
        });
      this.chart.source(dv);
      this.chart.intervalStack()
          .position('ri*月均降雨量')
          .color('name');
      this.chart.render();
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
    getdata(datas){
      var token=this.$route.query.token;
      var that=this;
      this.axios({
        method:'post',
        url:'/system/leader/websitestatic',
        headers: {
          'Content-Type': 'application/json',//设置请求头请求格式为JSON
          'token': token //设置token 其中K名要和后端协调好
        },
        params:datas
      }).then(({data})=> {
        var arr = [];
        let list = data.data.list;
        for (var i=0;i<list.length;i++){
          for(var a=0;a<list[i].length;a++){
            arr.push(list[i][a]);
          }
        };
        let obj1={};
        let obj4={};
        let obj5={};
        var arr1=[{},{},{}];
        for(let a=0;a<arr.length;a++){
          var obj={};
          var obj2={};
          var obj3={};
          if(arr[a].categoryId==1){
            obj.name=arr[a].categoryName.toString();
            obj[arr[a].datevalue]=Number(arr[a].count);
            arr1[0]= Object.assign(arr1[0],obj);
          }
          if(arr[a].categoryId==2){
            obj2.name=arr[a].categoryName.toString();
            obj2[arr[a].datevalue]=Number(arr[a].count);
            arr1[1]= Object.assign(arr1[1],obj2);
          }
          if(arr[a].categoryId==3){
            obj3.name=arr[a].categoryName.toString();
            obj3[arr[a].datevalue]=Number(arr[a].count);
            arr1[2]= Object.assign(arr1[2],obj3);
          }
        };
        this.data = arr1;
        var ri=data.data.datelist;
        var arr2=[];
        for (var key in data.data.sumlist) {
          var obj={};
          obj.name=key;
          obj.count= data.data.sumlist[key];
          arr2.push(obj);
        };
        this.datas=arr2;
        this.chart.source( this.data);
      });
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
      url:'/system/leader/websitestatic',
      headers: {
        'Content-Type': 'application/json',//设置请求头请求格式为JSON
        'token': token //设置token 其中K名要和后端协调好
      },
      params:datas
    }).then(({data})=> {
      var arr = [];
      let list = data.data.list;
      for (var i=0;i<list.length;i++){
        for(var a=0;a<list[i].length;a++){
          arr.push(list[i][a]);
        }
      };
      var arr1=[{},{},{}];
      for(let a=0;a<arr.length;a++){
        var obj={};
        var obj2={};
        var obj3={};
        if(arr[a].categoryId==1){
          obj.name=arr[a].categoryName.toString();
          obj[arr[a].datevalue]=Number(arr[a].count);
          arr1[0]= Object.assign(arr1[0],obj);
        }
        if(arr[a].categoryId==2){
          obj2.name=arr[a].categoryName.toString();
          obj2[arr[a].datevalue]=Number(arr[a].count);
          arr1[1]= Object.assign(arr1[1],obj2);
        }
        if(arr[a].categoryId==3){
          obj3.name=arr[a].categoryName.toString();
          obj3[arr[a].datevalue]=Number(arr[a].count);
          arr1[2]= Object.assign(arr1[2],obj3);
        }
      };
      this.data = arr1;
      var ri=data.data.datelist;
      var arr2=[];
      for (var key in data.data.sumlist) {
        var obj={};
        obj.name=key;
        obj.count= data.data.sumlist[key];
        arr2.push(obj);
      };
      this.datas=arr2;
      this.getData(ri);
    });
  }
};
</script>

<style scoped lang="less">
.hello{
  padding: 0 15px;
}
h3{
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

