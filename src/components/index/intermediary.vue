<template>
  <div class="warp">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <ul>
        <li v-for="(item,idx) in list" :key="idx" @click="goint(item.companyId)">
          <div class="left">
            <img :src="item.companyLogo" alt="">
          </div>
          <div class="right">
            <h2>{{item.companyName}}</h2>
            <span>法人代表：{{item.legalPerson}}</span>
            <span>成立日期：{{item.establishmentTime}}</span>
          </div>
        </li>
      </ul>
    </van-list>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: [],
        loading: false,
        finished: false,
        current:1,
        size:5,
        title:'',
        ids:'27',
        pages:1,
      };
    },
    methods: {
      getlist(){
        this.axios.post('/web/company/companylist',{
          title:this.title,
          current:this.current,
          size:this.size,
          ids:this.ids
        }).then(({data})=>{
          console.log(data.data);
          this.pages=data.data.pages;
          console.log(this.pages);
          this.list=this.list.concat(data.data.records);
        });
      },
      onLoad() {
        // 异步更新数据
        setTimeout(() => {
          this.current +=1;
          this.getlist();
          // 加载状态结束
          this.loading = false;

          // 数据全部加载完成
          if (this.current>=this.pages) {
            this.finished = true;
          }
        }, 500);
      },
      goint(i){
        AndroidWebView.jump_new_window('http://101.37.65.219:8081/app/#/qiyeint?id='+i);
      }
    },
    created() {
      this.getlist();
    }
  }
</script>

<style lang="less" scoped>
    .warp{
        padding: 0 15px;
        ul{
            li{
                overflow: hidden;
                padding-bottom: 10px;
                border-bottom: 1px solid #efefef;
                margin-bottom: 20px;
                .left{
                    float: left;
                    width: 80px;
                    height: 60px;
                    margin-right: 10px;
                    img{
                        width: 80px;
                        height: 60px;
                        border-radius: 4px;
                    }
                }
                .right{
                    width: 255px;
                    float: left;
                    h2{
                        height: 20px;
                        line-height: 20px;
                        font-size: 14px;
                        font-weight: 700;
                        margin-bottom: 4px;
                    }
                    span{
                        display: block;
                        height: 20px;
                        line-height: 20px;
                        font-size: 12px;
                    }
                }
            }
            li:last-child{
                border-bottom: 0;
            }
        }
    }
</style>
