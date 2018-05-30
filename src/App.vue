<template>
    <div id="app">
        <MainHeader/>
        <router-view/>
    </div>
</template>

<script>
  import MainHeader from './components/Header';

  export default {
    components: {
      MainHeader
    }
  }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
