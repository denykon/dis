<template>
    <div class="home">
        <img alt="logo" src="../assets/logo_main.png">
        <Posts msg="Posts"/>
    </div>
</template>

<script>
  // @ is an alias to /src
  import Posts from '@/components/Posts.vue';

  export default {
    components: {
      Posts
    }
  }
</script>

<style scoped>
    img {
        width: 10vw;
    }
</style>