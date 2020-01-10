<template>
  <div class="warp">
    <div id="start"></div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            data: []
        }
    },
    methods:{
      getstart(arr){
        const { DataView } =this.DataSet;
// 通过 DataSet 计算百分比
        const dv = new DataView();
        dv.source(arr).transform({
          type: 'percent',
          field: 'value',
          dimension: 'type',
          as: 'percent'
        });
        const chart = new G2.Chart({
          container: 'start',
          forceFit: true,
          height: 300,
          padding: [30,30,30,40]
        });
        chart.source(dv, {
          percent: {
            formatter: val => {
              return val;
            }
          }
        });
        chart.coord('theta', {
          radius: 0.5
        });
        chart.tooltip({
          showTitle: false
        });
        chart.legend(false);
        chart.intervalStack()
          .position('value')
          .color('type')
          .label('type', {
            offset: -10
          })
          .tooltip('name*value', (item, value) => {
            return {
              name: item,
              value: value
            };
          })
          .select(false)
          .style({
            lineWidth: 1,
            stroke: '#fff'
          });

        const outterView = chart.view();
        const dv1 = new DataView();
        dv1.source(arr).transform({
          type: 'percent',
          field: 'value',
          dimension: 'name',
          as: 'percent'
        });
        outterView.source(dv1, {
          percent: {
            formatter: val => {
              return val;
            }
          }
        });
        outterView.coord('theta', {
          innerRadius: 0.5 / 0.75,
          radius: 0.75
        });
        outterView.intervalStack()
          .position('percent')
          .color('name', [ '#BAE7FF', '#7FC9FE', '#71E3E3', '#ABF5F5', '#8EE0A1', '#BAF5C4' ])
          .label('name')
          .tooltip('name*value', (item, value) => {
            return {
              name: item,
              value: value
            };
          })
          .select(false)
          .style({
            lineWidth: 1,
            stroke: '#fff'
          });
        chart.render();
      }
    },
    mounted(){
        //获取数据
      var token=this.$route.query.token;
      this.axios({
        method:'post',
        url:'/system/leader/capitalstatic',
        headers: {
          'Content-Type': 'application/json',//设置请求头请求格式为JSON
          'token': token //设置token 其中K名要和后端协调好
        },
      }).then(({data})=>{
        console.log(data.data);
        /*
        * 1.先将数据取出来，
        * 2.声明一个空数组 用来存放合成的数据
        * */
        let arr=[];
        let dataList=data.data.staticlist;
        //重组之后的数据格式   { value: 251, type: '大事例一', name: '子事例一' },
        for(let i=0;i<dataList.length;i++){
          for (let a=0;a<dataList[i].childlist.length;a++){
            var obj={};
            obj.value=dataList[i].childlist[a].startupCapital;
            obj.type=dataList[i].name;
            obj.name=dataList[i].childlist[a].name;
            arr.push(obj);
          }
        }
        this.getstart(arr);
      })
    }
}
</script>
<style scoped>
.warp{
    padding: 0 15px;
}
h3{
  font-size: 20px;
  font-weight: normal;
  padding-top: 15px;
  border-bottom: 1px solid #ff4c4c;
}
.table_w{
  margin-top: 15px;
  padding-bottom: 30px;
}
</style>
