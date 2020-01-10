<template>
  <div class="hello">
    <div class="warp">
      <div class="aa">
            <h4 class="titi">{{content.title}}</h4>
          <div class="lai">
            <p class="int"><span>来源:{{content.departmentName}}</span><span>{{content.publishTime}}</span></p>
          </div>
          <div class="content">
            <div id="cont"  v-html="content.content"></div>
            <div class="fu" v-if="content.attachmentName!=''">
              <span>附件:</span>
              <div class="ming">
                <a :href="content.attachment">{{content.attachmentName}}</a>
              </div>
            </div>

          </div>
        </div>
      <!-- 回复 -->

    </div>
     <div class="hui" v-if="content.isReply==1">
       <p>请填写您的意见</p>
        <textarea v-model="huifu"></textarea>
        <button  @click="huifus">提交</button>
      </div>
  </div>
</template>

<script>
//v-if="content.isReply==1"

    import '../../assets/css/public.css'
import { Dialog } from 'vant';
import { Toast } from 'vant';
    export default {
        name: "noticestalil",
        data(){
            return{
                content:'',
                huifu:'',
                 placess:false,
                 infoId:''
            }
        },
        created() {
            var id=this.$route.query.id;
            this.axios.post('/web/newnotice/notice',{noticeId:id}).then((res)=>{
                this.content=res.data.data;
                this.infoId=res.data.data.noticeId;
                this.$nextTick(function () {
                    $('#cont').find('img').css({'display':'block','margin':'0 auto',width:'300px'});
                    $('#cont').children().css({'line-height':'40px','font-size':'16px'});
                })
            })
        },
        methods:{
          cloose(){
              this.placess=false;
            },
            huifus(){
              var token=this.$route.query.token;
               if(this.token==''){
        Dialog.alert({
             message: '请先登录'
           }).then(() => {
             // on close
           });
         }else{
           if(this.huifu==''){
              Dialog.alert({
             message: '内容不能为空'
           }).then(() => {
             // on close
           });
           }else{
               var that=this;
               this.axios({
                method:'post',
                url:'/web/seeking/reply',
                headers: {
                    'Content-Type': 'application/json',//设置请求头请求格式为JSON
                    'token': token //设置token 其中K名要和后端协调好
                },
                params:{
                  content:this.huifu,
                  infoId:this.infoId
                }
        }).then(({data})=>{
               if(data.code==10001){
                 Toast.success('提交成功');
                 var that=this;
                 setTimeout(function () {
                   window.location.reload();
                   that.huifu='';
                 },2000);
                }else{
                 Dialog.alert({
                   message: data.msg
                 }).then(() => {
                   // on close
                 });
               }
            })
           }
         }

          },
        mounted() {

        }
    }
    }
</script>
<style lang="less" scoped>

.hello{
  background: #f2f2f2;
  .warp{
    background: #fff;
  }
}
.hui{
  margin-top: 15px;
        margin-bottom: 25px;
        padding: 0 15px;
        background: #fff;
        p{
          padding: 15px 0;
          line-height: 30px;
          text-align: center;
          font-size: 14px;
          color: #fe0000;
          border-bottom: 2px dashed #c6c6c6;
        }
        textarea{
          width: 100%;
          padding: 0 10px;
          margin-top: 15px;
           border:1px solid #888;
           resize: none;
           height: 100px;
           margin-bottom: 15px;
        }
        textarea:focus{
          border: 1px solid #fe0000;
        }
        button{
          width: 70px;
          height: 20px;
          line-height: 20px;
         margin: 0 auto;
          text-align: center;
          border: none;
          outline: none;
          color: #fff;
          background: #1abbf9;
          border-radius: 5px;
          display: block;
        }
      }
 .place{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    background: rgba(0,0,0,.16);
    .su{
      width: 100px;
      height: 80px;
      border-radius: 5px;
      background: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      img{
        display: block;
        margin: 10px auto;
        width: 30px;
        height: 30px;
      }
      span{
        display: block;
        width: 100%;
        height: 25px;
        line-height:25px;
        text-align: center;
        font-size: 16px;
      }
    }
  }
</style>

