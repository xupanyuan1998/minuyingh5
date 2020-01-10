<template>
  <div>
    <div class="hui" >
      <ul>
        <li>
          <span>标题</span>
          <input type="text" placeholder="请填写标题" v-model="title">
        </li>
        <li>
          <span>内容</span>
          <textarea placeholder="请填写内容" v-model="content"></textarea>
        </li>
        <li>
          <span>附件</span>
          <div class="c">
            <div class="shang">
              <input type="file" ref="addtu" title="" @change="addtu($event)">
              <button>上传文件</button>
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
  import { Dialog } from 'vant';
  import { Toast } from 'vant';
export default {
    data(){
        return{
            title:'',
            content:'',
            fujian:{
                name:'',
                url:''
            },
              waring:0,
          token:'',
        }
    },
    methods:{
      save() {
        if(this.token==''){
          Dialog.alert({
            message: '请先登录'
          }).then(() => {
            // on close
          });
        }else{
           if (this.title == '') {
            Dialog.alert({
              message: '标题不能为空'
            }).then(() => {
              // on close
            });
          } else {
            this.axios({
              method: 'post',
              url: '/web/seeking/add',
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
                  that.title='';
                  that.content='';
                  that.fujian.name='';
                  that.fujian.url='';
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
        addtu(e){//提交文件
          let formData = new FormData();
          let file=e.target.files[ 0 ];
          console.log(e);
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
              console.log(that.fujian);
              that.$refs.addtu.value = null;
            })
          }
        },
    },
    created() {
      this.token=this.$route.query.token
    }
}
</script>

<style scoped lang="less">
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
</style>>
