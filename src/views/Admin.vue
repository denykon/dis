<template>
    <div class="admin-page">
        <h1>This is an admin page</h1>
        <PostWriter @post-added="log"/>
        <Posts/>
    </div>
</template>

<script>
  import PostWriter from '../components/PostWriter';
  import Posts from '../components/Posts';

  export default {
    name: 'AdminPage',
    components: {
      Posts,
      PostWriter
    },
    methods: {
      log(id) {
        console.log(id);
      }
    }
  }
</script>

<style scoped>

</style>