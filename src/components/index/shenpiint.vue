<template>
  <div class="hello">
    <div class="warp">
      <div class="aa">
        <h4 class="titi">{{content.title}}</h4>
        <div class="lai">
          <p class="int"><span>时间:{{content.addTime}}</span><span>{{content.publishTime}}</span></p>
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
    <div class="hui" >
      <p>资质评定上报材料</p>
      <ul>
        <li>
          <span>申请人</span>
          <input type="text" placeholder="请填写真实姓名" v-model="name">
        </li>
        <li>
          <span>单位</span>
          <input type="text"  placeholder="请填写单位名称" v-model="depart">
        </li>
        <li>
          <span>标题</span>
          <input type="text" placeholder="请填写标题" v-model="title">
        </li>
        <li>
          <span>备注</span>
          <textarea placeholder="请填写内容" v-model="beizhu"></textarea>
        </li>
        <li>
          <span>附件</span>
          <div class="c">
            <div class="shang">
              <input type="file" ref="addtu" title="" @change="addtu($event)">
              <button >上传文件</button>
            </div>
            <i>{{fujian.name}}</i>
          </div>
        </li>
      </ul>
      <button class="save" @click="save">提交</button>
    </div>
  </div>
</template>

<script>
  //v-if="content.isReply==1"
  import { Dialog } from 'vant';
   import { Toast } from 'vant';
  import '../../assets/css/public.css';
  export default {
    name: "shenpiint",
    data(){
      return{
        name:'',
        depart:'',
        title:'',
        beizhu:'',
        content:'',
        huifu:'',
        placess:false,
        infoId:'',
        fujian:{
          name:'',
          url:''
        },
        token:'',
      }
    },
    created() {
      var id=this.$route.query.id;
     this.token=this.$route.query.token;
     console.log(this.$route.query.token);
     //获取缓存中储存的页面信息
      let name=localStorage.getItem('name');
      let depart=localStorage.getItem('depart');
      let beizhu=localStorage.getItem('beizhu');
      let title=localStorage.getItem('title');
      let fujian=JSON.parse(localStorage.getItem('fujian'));
      console.log(name,depart,beizhu,fujian);
      name==null?this.name='':this.name=name;
      title==null?this.title='':this.title=title;
      depart==null?this.depart='':this.depart=depart;
      beizhu==null?this.beizhu='':this.beizhu=beizhu;
      if(fujian==null){
        this.fujian={
          name:'',
          url:''
        }
      }else{
        this.fujian=fujian
      };
      this.axios.post('/web/onlineapproval/details',{approvalId:id}).then((res)=>{
        this.content=res.data.data;
        this.infoId=res.data.data.approvalId;
        this.$nextTick(function () {
          $('#cont').find('img').css({'display':'block','margin':'0 auto',width:'300px'});
          $('#cont').children().css({'line-height':'40px','font-size':'16px'});
        })
      })
    },
    watch:{
      name(newVal){
        localStorage.setItem('name',newVal);
      },
      depart(newVal){
        localStorage.setItem('depart',newVal);
      },
      beizhu(newVal){
        localStorage.setItem('beizhu',newVal);
      },
      title(newVal){
        localStorage.setItem('title',newVal);
      }
    },
    methods:{
      cloose(){
        this.placess=false;
      },
      addtu(e){//提交文件
        let formData = new FormData();
        let file=e.target.files[ 0 ];
        if(file!=undefined){
          formData.append("img",file);
          let config = {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          };
          var that=this;
          this.$http.post('/web/onlinework/file', formData, config).then(function (res) {
            that.fujian.name=res.data.data.name;
            that.fujian.url=res.data.data.url;
            localStorage.setItem('fujian',JSON.stringify(that.fujian));
            that.$refs.addtu.value = null;
          })
        }
      },
      save() {
         if(this.token==''){
        Dialog.alert({
             message: '请先登录'
           }).then(() => {
             // on close
           });
         }else{
           if (this.name == '') {
             Dialog.alert({
               message: '申请人不能为空'
             }).then(() => {
               // on close
             });
           } else if (this.depart == '') {
             Dialog.alert({
               message: '单位名称不能为空'
             }).then(() => {
               // on close
             });
           } else if (this.title == '') {
             console.log(this.token)
             Dialog.alert({
               message: '标题不能为空'
             }).then(() => {
               // on close
             });
           } else {
             this.axios({
               method: 'post',
               url: '/web/onlineapproval/add',
               headers: {
                 'Content-Type': 'application/json',//设置请求头请求格式为JSON
                 'token': this.token //设置token 其中K名要和后端协调好
               },
               params: {
                 approvalId: this.infoId,
                 attachment: this.fujian.url,
                 attachmentName: this.fujian.name,
                 title: this.title,
                 content: this.beizhu,
                 operatorName: this.name,
                 departmentName: this.depart
               }
             }).then(({data}) => {
               if (data.code == 10001) {
                  Toast.success('提交成功');
                  var that=this;
                setTimeout(function () {
                  that.name='';
                  that.depart='';
                  that.title='';
                  that.beizhu='';
                  that.fujian.name='';
                  that.fujian.url='';
                  localStorage.setItem('name','');
                  localStorage.setItem('depart','');
                  localStorage.setItem('beizhu','');
                  localStorage.removeItem('fujian');
                  window.location.reload()
                },2000);
               } else {
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
      font-size: 18px;
      color: #fe0000;
      border-bottom: 2px dashed #c6c6c6;
    }
    ul{
      li{
        width: 100%;
        margin-top: 20px;
        span{
          display: block;
          font-size: 16px;
          color: #333;
          width: 100%;
        }
        input{
          display: block;
          width: 100%;
          height:40px;
          line-height: 40px;
          border: none;
          outline: none;
          font-size: 18px;
          border-bottom: 1px solid #efefef;
          padding: 0 15px;
        }
        input::-webkit-input-placeholder{
          color: #CCCCCC;
        }
        textarea{
          width: 100%;
          display: block;
          height: 100px;
          padding: 5px 15px;
          border: none;
          outline: none;
          resize: none;
          border-bottom: 1px solid #efefef;
          font-size: 18px;
        }
        textarea::-webkit-input-placeholder{
          color: #CCCCCC;
        }
        .c{
          height: 30px;
          line-height: 30px;
          margin-top: 5px;
          .shang{
            width: 80px;
            height: 30px;
            background: #ccc;
            margin-left: 20px;
            float: left;
            position: relative;
            border-radius: 5px;
            input{
              display: block;
              width: 100%;
              height: 100%;
              opacity: 0;
              position: absolute;
              top: 0;
              left: 0;
              z-index: 2;
            }
            button{
              display: block;
              width: 100%;
              height: 100%;
              line-height: 100%;
              position: absolute;
              top: 0;
              left: 0;
              background:#1abbf9;
              border: none;
              outline: none;
              border-radius: 4px;
              color: #fff;
            }
          }
          i{
            display:block;
            float: left;
            height: 30px;
            line-height: 30px;
            margin-left: 10px;
            font-size: 16px;
          }
        }
      }
    }
    .save{
      width: 300px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      color: #fff;
      background:#1abbf9;
      font-size: 16px;
      border-radius: 5px;
      margin: 20px auto;
      outline: none;
      border: none;
      display: block;
    }
  }
</style>

