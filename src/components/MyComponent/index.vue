<template>
  <div>
    {{test}}{{chainId}}{{network}}
    <img :src="hecoImg"
         alt="">
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  data () {
    return {
      test: '子组件',
      hecoImg: require('img/heco_icon.png')
    }
  },
  computed: {
    ...mapGetters(['chainId']),
    ...mapState({
      network: state => state.network
    })
  }
}
</script>

<style>
</style>