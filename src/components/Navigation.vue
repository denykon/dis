<template>
    <div id="nav">
        <router-link to="/dis/">Home</router-link> |
        <router-link to="/dis/catalog">Catalog</router-link> |
        <router-link to="/dis/about">About</router-link> |
        <router-link to="/dis/adminpage">Admin</router-link>
    </div>
</template>

<script>
  export default {
    name: "Navigation",
  }
</script>

<style scoped>
    #nav {
        padding: 30px;
    }

    a {
        font-weight: bold;
        color: #2c3e50;
    }

    .router-link-exact-active {
        color: #42b983;
    }
</style>