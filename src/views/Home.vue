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
            <div class="r-l-c">Miss coin
              <!--<span class="details" @click="jump(7)">详情</span>-->
            </div>
            <div class="r-l-c">围绕百币榜单为项目提供以下十大服务</div>
          </div>
        </div>
        <div class="incubation-con r-s-a warp">
          <div v-for="(icb,index) in icbList" :key="index" class="con-img" @click="jump(icbIndex)">
            <img :src="require('../assets/img/incubator/' + icb.name)">
            <a class="con-title">{{icb.title}}</a>
          </div>
        </div>
      </div>
      <div class="touring">
        <div id="touring"></div>
        <div class="content">
            <div class="l-1 r-l-c">Miss Coin全球服务商招募</div>
            <!--<div class="titles-con2">recruitment</div>-->
            <div class="l-2">
              众人拾柴火焰高，“Miss Coin”提供一个平台，寻找区块链行业内顶尖专业服务商加入，为“Miss Coin”旗下“百币榜单”内的项目提供专项服务，助力项目快速发展。            </div>
            <div class="enter" @click="jump(6)">关于全球服务商招募点击详情……</div>
            <div class="exa" @click="jump(7)">
              优秀服务商案例点击详情……
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
            <div>Mr.game利用Tokencan交易平台的客户管理系统和资产管理系统，解决了有关流量入口的两个问题，第一个是直接导入游戏，走腾讯当年的游戏发展之路，利用现有平台构建游戏中心。第二个是为其他的游戏平台提供充值通道，可以充值法币，也可以充值平台币或其他项目的Token。从而，同样可以解决消泡沫的问题和导流的问题。</div>
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
          <div class="flow-con2">
            <div class="titles-con1 l-1">支付</div>
            <div>AIPP是“Miss Coin”重点孵化的的项目之一，“Miss Coin”不仅孵化了AIPP，同时还让AIPP成为“Miss Coin”最重要的流量源头，这体现了“Miss Coin”创立的另外一个初衷——构建流量池。</div>
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
                <div><span class="check-item"></span>与各种主链及侧链实现跨链支付对接</div>
                <div><span class="check-item"></span>与其他支付系统对接</div>
              </div>
            </div>
            <div class="intro">AIPP的核心产品是它的预付费卡以及积分系统，其中预付费卡的结算系统基于信用卡系统原理开发，具备了支付、消费等几乎所有卡种的功能，另外，AIPP的积分系统拥有Korail（韩国铁道公司）的信用背书，购买积分的钱不是进入AIPP的账户，而是进入Korail的账户，保障了AIPP的积分具有刚性兑付属性。这两样产品可以应用的至少四类客户身上：可以帮助区块链公司消除Token的泡沫，可以帮助旅行社解决便捷消费问题，可以帮助合规的传销公司解决用积分返点的问题，可以帮助Esports的选手建立与粉丝的商业联系。同时，AIPP成为汇聚流量的优质工具。</div>

          </div>
          <div class="flow-con3">
            <div class="titles-con1 l-1">羊票</div>
            <div>羊票样板项目，这个项目巧妙的利用区块链技术解决了订单农业问题，同时巧妙的利用交易所解决了羊肉的流通问题。对于普通的老百姓来讲，他们不用了解“钱包”和“地址”这些专业概念，用微信扫码可以完成充值和提币的需要；对于一般的企业来讲，“羊票项目”的系统端程序是可以快速复制的，即插即用，企业可以仿照“羊票项目”的模式，非常方便的构建自己的区块链销售货物的应用。“羊票项目”可以为“Miss Coin”带来全新的客户流量。</div>
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
          <div class="titles-con1">关于Miss Coin</div>
        </div>
        <div class="aboutUs-con">
          “Miss Coin”是一个拥有大流量池的一站式项目孵化营社区。它集合了全球各地优秀、专业、有成功案例的服务商，为百币清单内的优质区块链项目提供其需要的所有服务，同时，“Miss Coin”通过构建一些典型的应用场景，将这些场景通过Tokencan交易所串联起来，从而构建了一个巨大的流量池。        </div>
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
          <div class="titles-con1">Miss Coin Committee</div>
          <div class="about-comm">Miss Coin Committee是“Miss Coin”的执行组织，也是最高的决策机构，委员会成员具有推荐项目、团队的权力。工作委员会成员不超过21名，由优质的全球服务商共同组成。“Miss Coin”工作委员会将定期向委员会成员同步工作进展，并邀请委员会成员参与相关活动。</div>
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
