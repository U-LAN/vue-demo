<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import './assest/style/global.scss'
import store from './store'
export default {
  name: 'App',
  store
}
</script>

<style lang="scss" scoped>
#app{
  width: 100%;
  height: 100%;
}
</style>
