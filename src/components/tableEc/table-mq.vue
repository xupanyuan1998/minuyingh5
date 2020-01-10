<template>
<div>
  <div class="warps">
    <div class="tab">
      <Table :loading="loading" :columns="columns13" :data="data" border></Table>
    </div>
  </div>
</div>
</template>

<script>

    export default {
        name: "table-mq",
        data(){
            return {
              columns13:[
                 {
                      title: '序号',
                      type: 'index',
                      align: 'center',
                   width:50,
                  },
                  {
                      title: '企业名称',
                      key: 'companyName',
                      resizable: true,
                  },
                  {
                      title: '法人',
                      key: 'legalperson',
                      resizable: true,
                    width:70,
                    align: 'center',
                  },
              ],
              data:[],
              loading:false,
            }
        },
        created(){
          var token=this.$route.query.token;
               var that=this;
               this.loading=true;
               this.axios({
                method:'post',
                url:'/system/operator/companylist ',
                headers: {
                    'Content-Type': 'application/json',//设置请求头请求格式为JSON
                    'token': token //设置token 其中K名要和后端协调好
                },
        }).then(({data})=>{
          this.loading=false;
              console.log(data.data);
              this.data=data.data;
            })
        },
        methods:{

        }
    }
</script>

<style scoped lang="less">
.warps{
  padding: 0 15px;
  margin: 0 auto;
}
h3{
  font-size: 20px;
  font-weight: 400;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #ff4c4c;
}
div.tab{
  margin: 10px 0;
  padding-bottom: 30px;
  /deep/.ivu-table-cell{
    padding: 5px ;
  }
}
</style>
