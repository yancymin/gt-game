<template>
  <div id="app">
    <router-view />
    <Loading />
  </div>
</template>

<script>
import Loading from '@/components/Loading.vue';

export default {
  name: 'App',
  components: {
    Loading,
  },
};
</script>

<style lang="scss">
@import url('./style/reset.css');

body {
  background: #ffb800;
  height: 100vh;
  overflow: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
