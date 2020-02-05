<style src="../assets/css/optimal-info.scss" scoped lang="scss"></style>
<template>
    <div class="optimal-info">
      <pc-head @jump="jump" :index="index"></pc-head>
      <div class="content c-c-c">
        <div class="clear"></div>
        <div class="content-info r-s-b">
          <div class="left">
            <div class="left-title r-s-b">各项评判值</div>
            <div class="left-item r-s-b">开发代码提交活跃<div class="total-item">{{obj.activity|formatterNull}}</div></div>
            <div class="left-item r-s-b">客户市场及收益已具规模<div class="total-item">{{obj.market|formatterNull}}</div></div>
            <div class="left-item r-s-b">上币交易所币价一致<div class="total-item">{{obj.transaction|formatterNull}}</div></div>
            <div class="left-item r-s-b">成交量均匀<div class="total-item">{{obj.volume|formatterNull}}</div></div>
            <div class="left-item r-s-b">K线连续<div class="total-item">{{obj.kLine|formatterNull}}</div></div>
            <div class="left-item r-s-b">社区活跃<div class="total-item">{{obj.community|formatterNull}}</div></div>
            <div class="left-foot r-s-b">总评<div class="total">{{obj.total|formatterNull}}</div></div>
          </div>
          <div class="right c-u-d">
            <div class="right-title c-c-c">项目名称 ： {{obj.name|formatterNull}}</div>
            <div class="right-info">{{obj.info|formatterNull}}</div>
          </div>
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
    import {list} from "../assets/js/optimal.js"

    export default {
        components: {pcHead, pcFoot,concat},
        name: "optimal-info",
        data(){
            return{
                index:1,
                listIndex:this.$route.query.index-1,
                list:list,
                obj:{},
            }
        },
        filters:{
            formatterNull(val){
                if(val===''||val===null){
                    return '-'
                }else{
                    return val
                }
            }
        },
        created(){
            this.setData();
        },
        methods:{
            setData(){
                this.obj.name=this.list[this.listIndex].name;
                this.obj.info=this.list[this.listIndex].info;
                this.obj.activity=this.list[this.listIndex].activity;
                this.obj.market=this.list[this.listIndex].market;
                this.obj.transaction=this.list[this.listIndex].transaction;
                this.obj.volume=this.list[this.listIndex].volume;
                this.obj.kLine=this.list[this.listIndex].kLine;
                this.obj.community=this.list[this.listIndex].community;
                this.obj.total=this.list[this.listIndex].total;
            },
            jump(type){
                switch (type) {
                    case -1:
                        this.$router.push('/');
                        break;
                    case 0:
                        this.$router.push('/');
                        break;
                    case 1:
                        this.$router.push('/optimal');
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
            }
        }
    }
</script>

