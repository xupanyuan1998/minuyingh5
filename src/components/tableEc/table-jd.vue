<template>
  <div>
    <div class="warp">
      <h3>企业按地区统计</h3>
      <div id="bing" ref="bing"></div>
      <h3>按产业统计</h3>
      <div id="chan" ref="chan"></div>
    </div>
  </div>
</template>

<script>


export default {
  name: "table-jd",
  data() {
    return {
       data : [
  { item: '义安区',  percent: 200 },
  { item: '铜官区',  percent: 500 },
  { item: '郊区',  percent: 100 },
  { item: '枞阳县', percent:342 },
       ],
       data1:[],
    };
  },

  methods: {
    bing(){
      const chart = new G2.Chart({
        container: 'bing',
        forceFit: true,
        height:400,
        padding:[30,'auto',100, 'auto']
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
          percent = percent ;
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
    chan(ri){
        // 此处数据使用了按行组织的模式，所以需要使用 DataSet 的 fold 方法对数据进行加工
const ds = new this.DataSet();
const dv = ds.createView().source(this.data1);
dv.transform({
  type: 'fold',
  fields: ri, // 展开字段集
  key: '月份', // key字段
  value: '月均降雨量' // value字段
});

const chart = new G2.Chart({
  container: 'chan',
  forceFit: true,
  height:400,
   padding:[40,30,70,40]
});
chart.source(dv);
      chart.tooltip({
        showTitle: false
      });
chart.intervalStack()
  .position('月份*月均降雨量')
  .color('name');
chart.render();
    },
  },
  mounted() {

    const e = document.createEvent('Event')
    e.initEvent('resize', true, true)
    window.dispatchEvent(e)
    //初始化获取数据
    var datas={
      startTime: '',
      endTime: '',
    };
    var token=this.$route.query.token;
    this.axios({
      method:'post',
      url:'/system/leader/webenterprisestatic',
      headers: {
        'Content-Type': 'application/json',//设置请求头请求格式为JSON
        'token': token //设置token 其中K名要和后端协调好
      },
      params:datas
    }).then(({data})=>{
     var list= data.data.listregion;
     var arr=[];
    for(var i=0;i<list.length;i++){
      var obj={};
      obj.item=list[i].name;
      obj.percent=list[i].count;
      arr.push(obj);
    }
    this.data=arr;
      this.bing();
     //  //堆叠图
      var lista=data.data.listindustry;
      var arr1=[];
      var ri=[];
    for(var i=0;i<lista.length;i++){
      var obj1={};
      obj1.name=lista[i].cyname;
      console.log()
      for (var a=0;a<lista[i].childlist.length;a++){
        obj1[lista[i].childlist[a].name]=lista[i].childlist[a].count;
       arr1.push(obj1);
       ri.push(lista[i].childlist[a].name);
      }
    };
    //es6 数组去重
    ri=[...new Set(ri)];
      function format(array) {
        let newArray = [array[0]];
        array.reduce(function (accumulator, currentItem) {
          if (JSON.stringify(accumulator.name) === JSON.stringify(currentItem.name)) {
          } else {
            newArray.push(currentItem);
          }
          return newArray[newArray.length - 1];
        })
        return newArray;
      };
      let result=format(arr1);
      this.data1=result;
      this.chan(ri);
    });
  }
};
</script>

<style scoped lang="less">
.warp {
  padding: 0 15px;
  h3 {
    height:40px;
    line-height: 40px;
    border-bottom: 2px solid #ff4c4c;
    font-size: 20px;
    font-weight: 400;
    color: #454545;
  }
}
</style>
