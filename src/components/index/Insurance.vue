<template>
  <div class="warp">
      <ul>
          <li>
              <div class="left">
                  <img src="../../../static/34.jpg" alt="">
                  <span>雇主责任险</span>
              </div>
              <div class="right">
                  <p>保障雇员在工作期间发生意外以及职业性疾病导致的身故、伤残、医疗费用； 提供员工暂时丧失劳动能力期间的误工津贴保障； 可扩展非工作期间的意外伤害保障；
                      最多可同时为300人投保，人数越多保费越优惠； 转嫁雇主的法律责任，免除雇主后顾之忧；</p>
              </div>
          </li>
          <li>
              <div class="left">
                  <img src="../../../static/35.jpg" alt="">
                  <span>万创保</span>
              </div>
              <div class="right">
                  <p>万创保 专门为住宿业、零售业、批发业、餐饮业、商务服务业五大 行业中小企业量身定做的一款组合保险产品，保障全面，范围涵盖企业财产、雇主及其家 人和员
                      工的意外、健康，还可转嫁雇主和企业的多种法律责任风险。中小企业通过保险即可获得大企业的保障！</p>
              </div>
          </li>
          <li>
              <div class="left">
                  <img src="../../../static/36.jpg" alt="">
                  <span>金福保</span>
              </div>
              <div class="right">
                  <p>为中小餐饮业量身定做的保险产品，保障全面，经营更安心。店内发生火 灾、盗窃、抢劫，店内存货因水管爆裂受损，顾客摔伤、烫伤、食品中毒，雇员伤亡，均在保障范围。一险在手，后顾无忧！</p>
              </div>
          </li>
          <li>
              <div class="left">
                  <img src="../../../static/37.jpg" alt="">
                  <span>企财险</span>
              </div>
              <div class="right">
                  <p>企业财产保险简称“企财险”，为企事业单位存放在指定地点的财产物资提供保障。 针对保险责任范围内的自然灾害或意外事故造成的损失，中国人寿财险将进行赔偿，协助您尽可能降低损失。</p>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.warp{
    padding: 0 15px;
    ul{
        li{
            overflow: hidden;
            padding-bottom: 10px;
            margin-bottom: 10px;
            border-bottom: 1px dashed #ccc;
            .left{
                width: 20%;
                float: left;
                margin-right: 10px;
                img{
                    width: 100%;
                    height: 80px;
                }
                span{
                    display: block;
                    width: 100%;
                    height: 30px;
                    line-height: 30px;
                    text-align: center;
                    font-weight: 700;
                    font-size: 12px;
                }
            }
            .right{
                float: left;
                width: 75%;
                p{
                    text-indent: 2em;
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
