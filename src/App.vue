<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Cookies from 'js-cookie';
export default {
  'name': 'App',
  data () {
    return {};
  },
  mounted () {
    this.initLanguage();
  },
  'methods': {
    /**
     * 初始化语言环境
     */
    initLanguage () {
      if (Cookies.get('lang') === 'ZH') {
        this.$i18n.locale = 'zh';
        Cookies.set('lang', 'ZH', { 'domain': `${process.env.VUE_APP_DOMAIN}` });
      } else if (Cookies.get('lang') === 'EN') {
        this.$i18n.locale = 'en';
        Cookies.set('lang', 'EN', { 'domain': `${process.env.VUE_APP_DOMAIN}` });
      } else { // 默认显示英文
        this.$i18n.locale = 'en';
        Cookies.set('lang', 'EN', { 'domain': `${process.env.VUE_APP_DOMAIN}` });
      }
    }
  }
};
</script>

<style lang="less">
@import "./assets/style/global.css";
@import "./assets/style/common.css";
#app {
  width: 100%;
  height: 100%;
  background-color: #f8fcff;
}
</style>
