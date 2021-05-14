<template>
  <div>
    <MyComponent />
    {{$t('myTest')}}
  </div>
</template>

<script>
import MyComponent from '../components/MyComponent'
export default {
  components: {
    MyComponent
  },
  data () {
    return {
      test: 'MyTest'
    }
  }

}
</script>

<style>
</style>