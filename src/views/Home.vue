<template>
    <div class="home">
        <img src="../assets/logo.png">
        <Posts title="Posts"/>
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
