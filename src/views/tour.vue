<style scoped>
  .content{
    height: calc(100vh - 60px);
  }
    .serves {
        margin-top: 40px;
    }
    .serves>div {
        margin: 0 20px;
        max-width: 25%;
        line-height: 1.75;
    }
</style>
<template>
    <div class="subProject">
      <pc-head @jump="jump" :index="index"></pc-head>
      <div class="content c-c-c">
          <h2>{{$t('tour.earn')}}</h2>
          <div>{{$t('tour.earn1')}}</div>
          <div>{{$t('tour.earn2')}}</div>
          <div>{{$t('tour.earn3')}}</div>
        <div class="serves r-s-a">
            <div class="c-c-c"><span>{{$t('tour.ISP1')}}</span>
            <span>{{$t('tour.rights1')}}</span></div>
            <div class="c-c-c"><span>{{$t('tour.ISP1')}}</span>
            <span>{{$t('tour.rights2')}}</span></div>
            <div class="c-c-c"><span>{{$t('tour.ISP1')}}</span>
            <span>{{$t('tour.rights3')}}</span></div>
        </div>
      </div>
      <concat></concat>
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
