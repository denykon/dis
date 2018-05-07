<template>
    <div class="catalog">
        <h1>This is an Catalog page</h1>
        <v-product header="Product"/>
    </div>
</template>

<script>
  import VProduct from '../components/Product';

  export default {
    components: {
      VProduct
    }
  }
</script>

<style scoped>

</style>