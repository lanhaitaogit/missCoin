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
           敬请期待
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
                index:3
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
