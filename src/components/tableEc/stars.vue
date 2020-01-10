<template>
  <div class="warp">
      <div id="start"></div>
      <div class="table_w">
           <Table border :columns="columns13" :data="data" :loading="loading"></Table>
      </div>
  </div>
</template>

<script>
// import {getMonthEndDate, getMonthStartDate, getWeekEndDate, getWeekStartDate} from "../../assets/js/changedate.js";
export default {
    data(){
        return {
             loading:false,
        data:[
                { item: '1', percent: 21 },
                { item: '2',  percent: 257 },
                { item: '3', percent: 380 },
                { item: '4',  percent:1125 },
                { item: '5',  percent: 2230 }
            ],
    columns13: [
                    {
                        title: '评分',
                        key: 'item',
                    },
                    {
                        title: '数量',
                        key: 'percent'
                    }
               ],
        }
    },
    methods:{
        getstart(datas){
          datas=datas.reverse();
            const chart = new G2.Chart({
            container: 'start',
            forceFit: true,
            height:400,
             padding:[40,'auto',80,'auto']
            });
            chart.source(datas, {
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
        }
    },
    mounted(){
        var token=this.$route.query.token;
               var that=this;
               this.loading=true;
               this.axios({
                method:'post',
                url:'/system/leader/webevaluatestatic',
                headers: {
                    'Content-Type': 'application/json',//设置请求头请求格式为JSON
                    'token': token //设置token 其中K名要和后端协调好
                },
        }).then(({data})=>{
          this.loading=false;
              //console.log(data.data.length);
            //   this.data=data.data;
                var arr=[];
                for(var a=0;a<data.data.length;a++){
                    var obj={};
                    obj.item=data.data[a].satisfactionDegree.toString();
                    obj.percent=Number(data.data[a].count);
                    arr.push(obj);
                }
                console.log(arr);
                this.data=arr;
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
    height: 40px;
  margin-top: 10px;
    line-height: 40px;
    border-bottom: 2px solid #ff4c4c;
    font-size: 20px;
    font-weight: 400;
    color: #454545;
}
.table_w{
 margin:15px 0;
  padding-bottom: 30px;
}
</style>
