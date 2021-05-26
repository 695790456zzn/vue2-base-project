<template>
  <div>
    {{test}}{{chainId}}{{network}}
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  data () {
    return {
      test: '子组件'
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