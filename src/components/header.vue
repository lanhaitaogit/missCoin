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
          <div class="item lang c-c-c">
            <el-dropdown>
              <span class="el-dropdown-link">
                {{$t('lang')}}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="toggleLang('zh')" :disabled="$i18n.locale === 'zh'">中文</el-dropdown-item>
                <el-dropdown-item @click.native="toggleLang('en')" :disabled="$i18n.locale === 'en'">English</el-dropdown-item>
                <el-dropdown-item @click.native="toggleLang('ko')" :disabled="$i18n.locale === 'ko'">한글</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
        <div class="showDraw c-c-c" @click="openDraw()"><i class="el-icon-s-fold"></i></div>
      </div>
    </div>
    <!--手机导航侧面弹出-->
    <div class="head-mobile r-r-l" @click.stop="closeDia()" v-show="drawer">
      <transition class="slide-fade">
        <div class="content switch-lang" v-show="drawerLang">
          <div class="c-c-c item" @click.stop="toggleLang('zh')" :disabled="$i18n.locale === 'zh'">中文</div>
          <div class="c-c-c item" @click.stop="toggleLang('en')" :disabled="$i18n.locale === 'en'">English</div>
          <div class="c-c-c item" @click.stop="toggleLang('ko')" :disabled="$i18n.locale === 'ko'">한글</div>
          <div></div>
          <div></div>
        </div>
      </transition>
      <transition name="slide-fade">
        <div class="content" v-show="drawer">
          <div class="r-r-l closedia"><i class="el-icon-circle-close" @click.stop="closeDia()"></i></div>
          <div class="c-c-c" @click.stop="langDrawer()">Language</div>
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
                drawerLang: false,
                direction: 'rtl',
            }
        },
        created() {
            this.indexTab = this.index;
        },
        methods: {
            jump(type) {
                this.indexTab = type;
                this.$emit('jump', type);
            },
            // 打开左侧面板
            openDraw() {
                this.drawer = true;
              this.drawerLang = false;
            },
            closeDia() {
                this.drawer = false;
            },
            langDrawer() {
                this.drawerLang = true;
            },
          toggleLang(lang) {
              switch (lang) {
                case 'zh':
                  localStorage.setItem('locale', 'ZH');
                  this.$i18n.locale = localStorage.getItem('locale');
                  // this.$message({
                  //   message: '切换为中文！',
                  //   type: 'success'
                  // });
                  break;
                case 'en':
                  localStorage.setItem('locale', 'EN');
                  this.$i18n.locale = localStorage.getItem('locale');
                  // this.$message({
                  //   message: 'Switch to English!',
                  //   type: 'success'
                  // });
                  break;
                case 'ko':
                  localStorage.setItem('locale', 'KR');
                  this.$i18n.locale = localStorage.getItem('locale');
                  // this.$message({
                  //   message: '한글로 전환',
                  //   type: 'success'
                  // });
                  break;
              }
              window.location.reload();
          },
        },
    }
</script>
