<template>
  <div id="app">
    <Header v-if="this.$route.path != '/user'" />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import Header from "./components/header.vue"
  import '../static/js/waves'

  Waves.init();
  export default {
    name: 'App',
    components: {
      Header
    }
  }
</script>

<style scoped="scoped">
  .fixed {
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1030;
  }
</style>
