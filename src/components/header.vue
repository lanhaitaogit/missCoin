<style scoped src="../assets/css/pcHead.scss" lang="scss"></style>
<template>
  <div>
    <div class="head">
      <div class="head-content r-s-b">
        <div class="con-left r-l-c">
          <img src="../assets/img/logo.png" @click="jump(0)">
        </div>
        <div class="con-right r-r-l">
          <div class="item c-c-c" :class="[indexTab=== 0?'item-check':'item']" @click="jump(0)">首页</div>
          <div class="item c-c-c" :class="[indexTab=== 1?'item-check':'item']" @click="jump(1)">百币榜单</div>
          <div class="item c-c-c" :class="[indexTab=== 3?'item-check':'item']" @click="jump(3)">项目孵化营</div>
          <div class="item c-c-c" :class="[indexTab=== 2?'item-check':'item']" @click="jump(2)">服务商招募</div>
          <div class="item c-c-c" :class="[indexTab=== 8?'item-check':'item']" @click="jump(8)">流量池</div>
          <div class="item c-c-c" :class="[indexTab=== 4?'item-check':'item']" @click="jump(4)">关于我们</div>
          <div class="item c-c-c" :class="[indexTab=== 5?'item-check':'item']" @click="jump(5)">项目提交</div>
        </div>
        <div class="showDraw c-c-c" @click="openDraw()"><i class="el-icon-s-fold"></i></div>
      </div>
    </div>
    <!--手机导航侧面弹出-->
    <div class="head-mobile r-r-l" @click.stop="closeDia()" v-show="drawer">
      <transition name="slide-fade">
        <div class="content" v-show="drawer">
          <div class="r-r-l closedia"><i class="el-icon-circle-close" @click.stop="closeDia()"></i></div>
          <div @click.stop="jump(0)" class="c-c-c">首页</div>
          <div @click.stop="jump(1)" class="c-c-c">百币榜单</div>
          <div @click.stop="jump(3)" class="c-c-c">项目孵化营</div>
          <div @click.stop="jump(2)" class="c-c-c">服务商招募</div>
          <div @click.stop="jump(8)" class="c-c-c">流量池</div>
          <div @click.stop="jump(4)" class="c-c-c">关于我们</div>
          <div class="c-c-c" @click.stop="jump(5)">项目提交</div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
    export default {
        name: "pcHead",
        props: ['index'],
        data() {
            return {
                indexTab: 0,
                drawer: false,
                direction: 'rtl',
            }
        },
        created() {
            this.indexTab = this.index
        },
        methods: {
            jump(type) {
                this.indexTab = type;
                this.$emit('jump', type);
            },
            // 打开左侧面板
            openDraw() {
                this.drawer = true;
            },
            closeDia() {
                this.drawer = false;
            }
        },
    }
</script>
