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
          <div class="titles-con1">100优项</div>
          <div class="titles-con2">optimal</div>
        </div>
        <div class="preferred-con r-s-a">
          <div class="pre-left c-c-c">
            <div class="l-1 r-l-c">100优项评价标准</div>
            <div class="l-2">我搭台你唱戏，入驻平台的项目将在开发代码提交活跃、客户时长及
              收益规模等6个纬度进行展示和竞争，实时评选出前100名优质项目，
              让更值得被关注和信赖的项目浮出水面！
            </div>
            <div class="l-3 r-l-c">
              <div class=" more-btn c-c-c" @click="goOptimal()">
                查看详情
              </div>
            </div>
          </div>
          <div class="pre-right">
            <img src="../assets/img/perfect-img.png">
          </div>
        </div>
      </div>
      <div class="incubation">
        <div id="incubation"></div>
        <div class="titles c-c-c">
          <div class="titles-con1">孵化包</div>
          <div class="titles-con2">incubator</div>
        </div>
        <div class="incubation-con r-s-a warp">
          <div v-for="(icb,index) in icbList" :key="index" class="con-img">
            <img :src="require('../assets/img/incubator/' + icb.name)">
            <div class="con-title">{{icb.title}}</div>
          </div>
        </div>
      </div>
      <div class="touring">
        <div id="touring"></div>
        <div class="titles c-c-c">
          <div class="titles-con1">全球巡演</div>
          <div class="titles-con2">tour</div>
        </div>
        <div class="touring-con c-c-c">
          <div class="touring-con-title">
            <div class="touring-info">
              Miss Coin将从媒体、评级机构、投行、社群等各个方面给项目提供助力。Miss Coin全球巡演计划也已
              经启动，每年2次千人峰会（2020年的定在首尔和柏林），12次百人活动。通过峰会活动，让优质项目方之间互相交流，互相学习，在应
              用层面得到提升；让项目获取资本市场更大的关注，行成市场新的热点；也能化解某一个国家市场监管政策对优质项目社区信心造成的打击和压力。
            </div>
          </div>
          <div class="touring-con-img r-s-a warp">
            <div class="t-con">
              <img src="../assets/img/tour/tour1.png">
            </div>
            <div class="t-con">
              <img src="../assets/img/tour/tour1.png">
            </div>
            <div class="t-con">
              <img src="../assets/img/tour/tour1.png">
            </div>
          </div>
          <div class=" more-btn c-c-c" @click="jump(6)">
            查看更多
          </div>
        </div>
      </div>

      <div class="about-us">
        <div id="about-us"></div>
        <div class="titles c-c-c">
          <div class="titles-con1" style="color: #D6B978">关于我们</div>
          <div class="titles-con2">About us</div>
        </div>
        <div class="aboutUs-con">
          MISS COIN是由全球领先的各区块链机构共同发起的全球优质项目的一个自我展示平台，通过让区块链项目以及产业在一起，形成势能产生共振，共同来推动区块链产业和项目的应用落地和国际的进程。
        </div>
      </div>
      <div class="concat" id="concat">
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
          <div class="titles-con2">Contact us</div>
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
            <div class="concat-value">tokencan@tokencan.com</div>
          </div>
          <div class="c-s-con c-c-c">
            <div class="concat-img"><img src="../assets/img/concat-us/ho_ic_cont_tel.png"></div>
            <div class="concat-titles">Tel</div>
            <div class="concat-value">+82-10-7568-9777</div>
            <div class="concat-value">+86 17801076753</div>

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
                    case 5:
                        this.$router.push('/subProject');
                        break;
                    case 6:
                        this.$router.push('/tour');
                        break;
                }
            },
            // 跳转到100优项列表
            goOptimal() {
                this.$router.push('/optimal')

            }
        }
    }
</script>
