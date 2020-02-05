<style scoped src="../assets/css/home.scss" lang="scss"></style>
<style lang="scss">
  html{
    overflow-y: auto;//修复轮播锁滚动条
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__button {
    height: 6px !important;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .el-carousel--horizontal, .el-carousel__container, .el-carousel {
    height: 670px !important;
    @media only screen and (max-width: 768px) {
      height: 268px !important;
    }
    @media only screen and (max-width: 414px) {
      height: 181px !important;
    }
    @media only screen and (max-width: 375px) {
      height: 205px !important;
    }
  }
</style>
<template>
  <div class="home">
    <div style="height: 80px" id="home"></div>
    <!--pc头部导航-->
    <pc-head @jump="jump" :index="index" ref="head"></pc-head>
    <!--内容部分-->
    <div class="content">
      <div class="block">
        <el-carousel arrow="never">
          <el-carousel-item v-for="(carouse,index) in carouseList" :key="index">
            <el-image
              :src="require('../assets/img/carouse/' + carouse.name)"
              fit="cover"
              class="carouse-img"></el-image>
<!--            <img :src="require('../assets/img/carouse/' + carouse.name)" >-->
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="preferred">
        <div id="preferred"></div>
        <div class="titles c-c-c">
        </div>
        <div class="preferred-con r-s-a">
          <div class="pre-left c-c-c">
            <div class="l-1 r-l-c">百币榜单</div>
            <div class="l-2">通过对目前市场表现活跃的新老项目的综合评估，优选100个区块链项目构成百币榜单。百币榜单优胜劣汰，随着市场选择动态更新。
            </div>
          </div>
          <div class="pre-right">
            <img src="../assets/img/perfect-img.png">
          </div>
        </div>
      </div>
      <div class="incubation">
        <div id="incubation"></div>
        <div class="content">
          <div class="titles c-c-c">
            <div class="titles-con1">项目孵化营</div>
            <div class="l-1 r-l-c">孵化包</div>
            <div class="r-l-c">Miss coin围绕百币榜单为项目提供以下十大服务
              <!--<span class="details" @click="jump(7)">详情</span>-->
            </div>
          </div>
        </div>
        <div class="incubation-con r-s-a warp">
          <div v-for="(icb,index) in icbList" :key="index" class="con-img" @click="jump(icbIndex)">
            <img :src="require('../assets/img/incubator/' + icb.name)">
            <div class="con-title">{{icb.title}}</div>
          </div>
        </div>
      </div>
      <div class="touring">
        <div id="touring"></div>
        <div class="content">
          <div class="pre-left">
            <div class="l-1 r-l-c">全球服务商招募</div>
            <!--<div class="titles-con2">recruitment</div>-->
            <div class="l-2">
              寻找行业内顶尖服务提供商，为Miss Coin旗下“百币榜单”内的项目提供专项收益服务。
            </div>
            <div class="enter" @click="jump(6)">全球服务商招募报名入口</div>
            <div class="exa" @click="jump(7)">
              优秀服务商案例点击详情
            </div>
          </div>
        </div>
        <div class="pre-right"> </div>
      </div>
      <div class="flow">
        <div id="flow"></div>
        <div class="titles">
          <div class="titles-con1">流量池</div>
        </div>
        <div class="flow-con">
          <div class="flow-con1">
            <div class="titles-con1 l-1">Mr.game 游戏中心</div>
            <div>Mr.game游戏中心会开发自己的特色游戏供人玩耍；也欢迎更多游戏商家入驻Mr.game游戏中心，给用户带来更多玩法。</div>
            <div class="fbi-content1">
                <div class="fbi-warning1">
                  <div class="logo">Tokencan</div>
                    <span class="titles">Mr.game游戏中心</span>
                    <div class="wire-con1 wire">
                      <div  class="wire-sub1">
                        <span class="wire1" style="margin-left: 18px;">游戏消费</span>
                        <span class="wire1" style="margin-right: -10px;">游戏充值通道</span>
                      </div>
                    </div>
                  <div class="wire-con2">
                    <div class="wore-sub2 wire">
                      <span class="wire2" style="margin-left: -40px;">游戏上架</span>
                      <span class="wire2" style="margin-right: -30px;">泡沫消除</span>
                    </div>
                    <div class="wore-sub2 wire">
                      <span class="wire2" style="margin-left: -52px;">游戏平台币充值</span>
                      <span class="wire2" style="margin-right: -40px;">法币充值</span>
                    </div>
                  </div>
                  <div class="wire-sub3">
                    <div class="wire3 wire">外部流量引入</div>
                  </div>
                  <div class="wire-con3">
                    <div class="wire4 wire" style="margin-left: -40px;">渠道分发</div>
                    <div class="wire4 wire" style="margin-right: -40px;">游戏平台</div>
                  </div>
                </div>
            </div>
          </div>
          <div class="flow-con1">
            <div class="titles-con1 l-1">支付</div>
            <div>与各国法币对应的数字货币及其他支付系统对接，实现一个系统所有支付数字货币的打通，线下可使用。</div>
            <div class="fbi-content2">
              <div class="fbi-warning2">
                <div class="bank">银行</div>
                <div class="logo">Tokencan</div>
                <div class="wire-sub1">
                  <div class="titles">AIPP支付中央结算系统</div>
                  <div class="wire-con1 wire">
                    <div class="wire-sub2">
                      <span class="wire1" style="margin-left: 18px;">储值卡</span>
                      <span class="wire1" style="margin-right: -10px;">ARA积分</span>
                    </div>
                  </div>
                  <div class="wire-con2 wire">
                    <div class="wire-sub3">
                      <span class="wire2 wire" style="margin-left: 18px;">项目公司</span>
                      <span class="wire2 wire" style="">旅游公司</span>
                      <span class="wire2 wire" style="">直销公司</span>
                    </div>
                  </div>
                  <div class="wire3 wire">AIPP云支付</div>
                </div>
              </div>
              <div class="list">
                <div><span class="check-item"></span>与韩国法定数字货币对接</div>
                <div><span class="check-item"></span>与中国法定数字DCEP对接</div>
                <div><span class="check-item"></span>与Libra对接</div>
                <div><span class="check-item"></span>与各种主链及侧脸链实现跨链支付对接</div>
                <div><span class="check-item"></span>与其他支付系统对接</div>
              </div>
            </div>
          </div>
          <div class="flow-con1">
            <div class="titles-con1 l-1">羊票</div>
            <div>与普通群众生活相关，区块链融入百姓生活的真实落地案例。</div>
            <div class="fbi-content3">
              <div class="fbi-warning3">
                <div class="logo">Tokencan</div>
                <div class="wire-sub1">
                  <div class="titles">羊票：大司农社区</div>
                  <div class="wire-con1 wire">
                    <div class="wire-sub2">
                      <span class="wire1" style="margin-left: 18px;">农产品生产端</span>
                      <span class="wire1" style="margin-right: -10px;">农产品消费端</span>
                    </div>
                  </div>
                  <div class="wire-con2 wire">
                    <div class="wire-sub3">
                      <span class="wire2 wire" style="margin-left: 18px;">即插即用</span>
                      <span class="wire2 wire" style="">合规合法</span>
                      <span class="wire2 wire" style="">扫码转账</span>
                    </div>
                  </div>
                  <div class="wire3 wire">免费吃羊肉</div>
                </div>
              </div>
              <div class="list">
                <div><span class="check-item"></span>羊票是养羊的免费红利</div>
                <div><span class="check-item"></span>一克羊肉对应一枚羊票（NRC）</div>
                <div><span class="check-item"></span>认购一只羊一个月可分得750克羊肉</div>
                <div><span class="check-item"></span>羊票在Tokencan交易所交易</div>
                <div><span class="check-item"></span>买羊票可以换到更便宜更高品质的羊肉</div>
                <div><span class="check-item"></span>这个模式会大大的促进订单农业的发展</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="about-us">
        <div id="about-us"></div>
        <div class="titles c-c-c">
          <div class="titles-con1" style="color: #D6B978">关于我们</div>
          <!--<div class="titles-con2">About Miss Coin</div>-->
        </div>
        <div class="aboutUs-con">
          一站式项目孵化营+流量池
        </div>
      </div>
      <div class="road">
        <img src="../assets/img/intro/131580458483_.pic_hd.jpg">
      </div>
      <div class="concat" id="concat" style="display: none">
        <div class="split">
          <span>—</span>
          <span>发起机构</span>
          <span>—</span>
        </div>
        <div class="concat-con r-l-c warp">
          <div class="concat-con-img" v-for="(sp,index) in sponsorList" :key="index">
            <img :src="require('../assets/img/sponsor/' + sp.name)">
          </div>
        </div>
      </div>
      <div class="concat-us">
        <div class="titles c-c-c">
          <div class="titles-con1">联系我们</div>
          <!--<div class="titles-con2">Contact us</div>-->
        </div>
        <div class="concat-us-con r-s-a warp">
          <div class="c-s-con c-c-c">
            <div class="concat-img"><img src="../assets/img/concat-us/ho_ic_cont_tele.png"></div>
            <div class="concat-titles">Telegram</div>
            <div class="concat-value">+82-10-7568-9777</div>
          </div>
          <div class="c-s-con c-c-c">
            <div class="concat-img"><img src="../assets/img/concat-us/ho_ic_cont_email.png"></div>
            <div class="concat-titles">Email</div>
            <a class="concat-value" href="mailto:tokencan@tokencan.com">tokencan@tokencan.com</a>
          </div>
          <div class="c-s-con c-c-c">
            <div class="concat-img"><img src="../assets/img/concat-us/ho_ic_cont_tel.png"></div>
            <div class="concat-titles">Tel</div>
            <a class="concat-value" href="tel:+82-10-7568-9777">+82-10-7568-9777</a>
            <a class="concat-value" href="tel:17801076753">+86 17801076753</a>

          </div>
        </div>
      </div>
    </div>
    <pc-foot></pc-foot>
  </div>
</template>
<script>
    import {icbList} from "../assets/js/incubator.js"
    import {sponsorList} from "../assets/js/sponsor.js"
    import {carouseList} from "../assets/js/carousel.js"
    import pcHead from "../components/header";
    import pcFoot from "../components/footer";


    export default {
        name: 'home',
        components: {pcHead, pcFoot},
        data() {
            return {
                icbList: icbList,
                sponsorList: sponsorList,
                carouseList: carouseList,
                index: this.$route.query.type ? this.$route.query.type : 0,
            }
        },
        created() {
            this.index = this.$route.query.type ? this.$route.query.type : 0;
        },
        mounted() {
            this.$refs.head.indexTab=parseInt(this.index);
            setTimeout(() => {
                if (this.$route.query.type) {
                    this.jump(parseInt(this.$route.query.type))
                }
            }, 100)
        },
        methods: {
            //锚点链接
            jump(type) {
                this.index = type;
                switch (type) {
                    case 0:
                        document.getElementById("home").scrollIntoView({block: "start", behavior: "smooth"});
                        break;
                    case 1:
                        document.getElementById("preferred").scrollIntoView({block: "start", behavior: "smooth"});
                        break;
                    case 2 :
                        document.getElementById("touring").scrollIntoView({block: "start", behavior: "smooth"});
                        break;
                    case 3:
                        document.getElementById("incubation").scrollIntoView({block: "start", behavior: "smooth"});
                        break;
                    case 4 :
                        document.getElementById("about-us").scrollIntoView({block: "start", behavior: "smooth"});
                        break;
                    case 8 :
                         document.getElementById("flow").scrollIntoView({block: "start", behavior: "smooth"});
                        break;
                    case 5:
                        this.$router.push('/subProject');
                        break;
                    case 6:
                        this.$router.push('/tour');
                        break;
                    case 7:
                        this.$router.push('/incubator');
                        break;
                }
            },
            // 跳转到百币榜单列表
            goOptimal() {
                this.$router.push('/optimal')

            }
        }
    }
</script>
