<template>
  <div>
    <div class="warp">
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
  </div>
</template>

<script>
    import '../../assets/css/public.css'
    export default {
        name: "handle",
        data(){
            return{
                content:''
            }
        },
        created() {
            var id=this.$route.query.id;
            console.log(this.$route.query);
            this.axios.post('/app/policy/details',{governmentId:id}).then((res)=>{
                this.content=res.data.data;
                this.$nextTick(function () {
                    $('#cont').find('img').css({'display':'block','margin':'0 auto',width:'300px'});
                    $('#cont').children().css({'line-height':'40px','font-size':'16px'});
                })
            })
        },
        mounted() {

        }
    }
</script>


