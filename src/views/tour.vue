<style scoped>
  .content{
    height: calc(100vh - 120px);
  }
    .serves {
        margin-top: 40px;
    }
    .serves>div {
        margin: 0 20px;
    }
</style>
<template>
    <div class="subProject">
      <pc-head @jump="jump" :index="index"></pc-head>
      <div class="content c-c-c">
          <h2>服务商将得到：</h2>
          <div>客源锁定：参与Miss Coin榜单项目的高效对接，定向服务，收款保护</div>
          <div>海外资源：获得韩国、日本、东南亚及欧美市场资源，企业资源，政治资源的深度对接</div>
          <div>年度荣誉：提升专业服务评级认证，并参与一年一度的国际嘉年华颁奖</div>
        <div class="serves r-s-a">
            <div class="c-c-c"><span>A+级：指定服务商</span>
            <span>可获得Miss Coin旗下孵化优质项目的指定服务权益</span></div>
            <div class="c-c-c"><span>A级：推荐服务商</span>
            <span>可获得Miss Coin旗下孵化项目服务的优先推荐机会</span></div>
            <div class="c-c-c"><span>B级：专业服务商</span>
            <span>可进入Miss Coin的签约服务商列表，对接充沛项目方选项</span></div>
        </div>
      </div>
      <concat></concat>
      <pc-foot></pc-foot>
    </div>
</template>

<script>
    import pcHead from "../components/header";
    import concat from "../components/concat";
    import pcFoot from "../components/footer";
    export default {
        components: {pcHead, pcFoot,concat},
        name: "subProject",
        data(){
            return{
                index:2
            }
        },
        methods: {
            jump(type){
                switch (type) {
                    case -1:
                        this.$router.push('/');
                        break;
                    case 0:
                        this.$router.push('/');
                        break;
                    case 1:
                        this.$router.push({path:'/',query:{type:type}});
                        break;
                    case 2 :
                        this.$router.push({path:'/',query:{type:type}});
                        break;
                    case 3:
                        this.$router.push({path:'/',query:{type:type}});

                        break;
                    case 4 :
                        this.$router.push({path:'/',query:{type:type}});
                        break;
                    case 5:
                        this.$router.push({path:'/',query:{type:type}});
                        break;
                }
            },
        }
    }
</script>

<style scoped>

</style>
