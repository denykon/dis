<template>
    <div class="admin">
        <h1>This is an admin page</h1>
        <PostWriter/>
    </div>
</template>

<script>
  import PostWriter from '../components/PostWriter';
  export default {
    name: 'Admin',
    components: {
      PostWriter
    }
  }
</script>

<style scoped>

</style>