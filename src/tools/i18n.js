import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n);

const messages = {
    'ZH': require('../assets/lang/zh'),   // 中文语言包
    'EN': require('../assets/lang/en'),    // 英文语言包
    'KR': require('../assets/lang/ko'),    // 韩文语言包
};

export default new VueI18n({
    locale : localStorage.getItem('locale') ||'ZH', // set locale 默认显示中文
    messages : messages,// set locale messagesq

})
