<template>
  <div class="container">
    <div class="test"></div>
    <MyComponent />
    {{$t('myTest')}}
  </div>
</template>

<script>
import MyComponent from 'comp/MyComponent'
import { mapMutations } from 'vuex'
export default {
  components: {
    MyComponent
  },
  data () {
    return {
      test: 'MyTest'
    }
  },
  mounted () {
    document.title = 'Test' // 浏览器标签设置
    this.setChainId('34')
    this.initStore()
  },
  methods: {
    initStore () {
      console.log('fdsfsfsfsdfsdfsfs')
      this.$store.commit('setNetWork', 'HECO')
    },
    ...mapMutations(['setChainId'])
  }
}
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  background-color: yellow;
  .test {
    width: 100px;
    height: 100px;
    background-color: red;
  }
}
</style>