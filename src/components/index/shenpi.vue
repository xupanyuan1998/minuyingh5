<template>
    <div class="shenpi">
      <van-tabs :swipeable="true"   @click="top">
        <van-tab v-for="(item,index) in toplist" :key="index"  :border="true" :title="item.name" title-style="font-size:18px">
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <ul class="contents">
              <li v-for="(item,ids) in list" :key="ids">
               <h3 @click="goint(item.approvalId)">{{item.title}}</h3>
                <div>
                  <span>{{item.departmentName}}</span>
                  <span>{{item.idate}}</span>
                </div>
              </li>
            </ul>
          </van-list>
        </van-tab>
      </van-tabs>
    </div>
</template>

<script>
    export default {
        name: "shenpi",
        data() {
            return {
              list:[],
              loading: false,
              finished: false,
              toplist:[],
              cateid:'',
              pages:1,
              current:'',
              token:''
            }
        },
      methods:{
        onLoad() {
          // 异步更新数据
          var that=this;
          setTimeout(() => {
            // 加载状态结束
            if(that.pages>=that.current){
              that.finished = true;
            }else{
              that.axios.post('/web/onlineapproval/list',{
                categoryId:that.cateid,
                current:that.current,
                size:10,
                title:''
              }).then(({data})=>{
                this.pages=data.data.pages;
                var arr=data.data.records;
                for (var i=0;i<arr.length;i++){
                  arr[i].idate=that.clearFen(arr[i].addTime);
                  that.list.push(arr[i]);
                }
              });
              that.loading = false;
            }

            // 数据全部加载完成
          }, 500);
        },
        clearFen(i) {
          return i.substring(0, i.indexOf(" "));
        },
    top(title,name){
       this.cateid=this.toplist[title].categoryId;
       this.axios.post('/web/onlineapproval/list',{
        categoryId:this.cateid,
        current:1,
        size:10,
        title:''
      }).then(({data})=>{
        this.pages=data.data.pages;
        var arr=data.data.records;
        for (var i=0;i<arr.length;i++){
          arr[i].idate=this.clearFen(arr[i].addTime);
        }
        this.list=arr;
      })
    },
        goint(i){
          AndroidWebView.jump_new_window('http://101.37.65.219:8081/app/#/shenpiint?id='+i+'&token='+this.token,i,5);
        },
      },
      created() {

          this.token=this.$route.query.token;
          //获取在线审批类别
        this.axios.post('/web/onlineapproval/categorylist').then(({data})=>{
          console.log(data.data);
          this.toplist=data.data;
          this.cateid=data.data[0].categoryId;
          this.axios.post('/web/onlineapproval/list',{
            categoryId:this.cateid,
            current:1,
            size:10,
            title:''
          }).then(({data})=>{
            this.pages=data.data.pages;
            var arr=data.data.records;
            for (var i=0;i<arr.length;i++){
              arr[i].idate=this.clearFen(arr[i].addTime);
            }
            this.list=arr;
          })
        })
      },
      mounted(){

      }
    }
</script>

<style scoped lang="less">
.contents{
  padding: 20px 15px 0 15px;
  li{
    width: 100%;
    padding: 10px 0 5px 0;
    border-bottom: 1px solid #ccc;
    h3{
      height: 20px;
      line-height: 20px;
      font-size:16px;
      font-weight: 400;
      color: #333;
     overflow: hidden;
    }
    div{
      height: 30px;
      line-height: 30px;
      font-size: 14px;
      span{
        display: block;
        float: left;
        height: 30px;
        line-height: 30px;
        color: #ccc;
      }
      span:last-child{
        float: right;
      }
    }
  }
  li:last-child{
    border-bottom: none;
  }
}
</style>



