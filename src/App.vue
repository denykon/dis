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

<style lang="less">
    @import 'styles/main-styles.less';
</style>
