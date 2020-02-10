<style scoped src="../assets/css/pcHead.scss" lang="scss"></style>
<template>
  <div>
    <div class="head">
      <div class="head-content r-s-b">
        <div class="con-left r-l-c">
          <img src="../assets/img/logo.png" @click="jump(0)">
        </div>
        <div class="con-right r-r-l">
          <div class="item c-c-c" :class="[indexTab=== 0?'item-check':'item']" @click="jump(0)">{{$t('nav.home')}}</div>
          <div class="item c-c-c" :class="[indexTab=== 1?'item-check':'item']" @click="jump(1)">{{$t('nav.board')}}</div>
          <div class="item c-c-c" :class="[indexTab=== 3?'item-check':'item']" @click="jump(3)">{{$t('nav.incubate')}}</div>
          <div class="item c-c-c" :class="[indexTab=== 2?'item-check':'item']" @click="jump(2)">{{$t('nav.service')}}</div>
          <div class="item c-c-c" :class="[indexTab=== 8?'item-check':'item']" @click="jump(8)">{{$t('nav.paw')}}</div>
          <div class="item c-c-c" :class="[indexTab=== 4?'item-check':'item']" @click="jump(4)">{{$t('nav.about')}}</div>
          <div class="item c-c-c" :class="[indexTab=== 5?'item-check':'item']" @click="jump(5)">{{$t('nav.project')}}</div>
        </div>
        <div class="showDraw c-c-c" @click="openDraw()"><i class="el-icon-s-fold"></i></div>
      </div>
    </div>
    <!--手机导航侧面弹出-->
    <div class="head-mobile r-r-l" @click.stop="closeDia()" v-show="drawer">
      <transition name="slide-fade">
        <div class="content" v-show="drawer">
          <div class="r-r-l closedia"><i class="el-icon-circle-close" @click.stop="closeDia()"></i></div>
          <div @click.stop="jump(0)" class="c-c-c">{{$t('nav.home')}}</div>
          <div @click.stop="jump(1)" class="c-c-c">{{$t('nav.board')}}</div>
          <div @click.stop="jump(3)" class="c-c-c">{{$t('nav.incubate')}}</div>
          <div @click.stop="jump(2)" class="c-c-c">{{$t('nav.service')}}</div>
          <div @click.stop="jump(8)" class="c-c-c">{{$t('nav.paw')}}</div>
          <div @click.stop="jump(4)" class="c-c-c">{{$t('nav.about')}}</div>
          <div class="c-c-c" @click.stop="jump(5)">{{$t('nav.project')}}</div>
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
