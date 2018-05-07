<template>
    <div class="product">
        <h1>{{ header }}</h1>
        <v-button markup="success" v-on:click="getProducts">Get more products</v-button>
        <div v-for="product in products" :key="product.id">
            <h4 class="title">{{product.title}}</h4>
            <img class="image" :src="product.url">
        </div>
    </div>
</template>

<script>
  import VButton from './Button';

  export default {
    name: 'v-product',
    props: {
      header: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        products: ''
      }
    },
    components: {
      VButton
    },
    methods: {
      getProducts() {
        fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
          .then(response => response.json())
          .then(json => {
            this.products = json;
          });
      }
    }
  }
</script>

<style scoped>
    .image {
        max-width: 80%;
    }
</style>
