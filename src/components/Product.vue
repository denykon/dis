<template>
    <div class="product-catalog">
        <h1>{{ header }}</h1>
        <v-button markup="success" v-on:click="getProducts">Get more products</v-button>
        <div class="product-list">
            <div v-for="product in products" :key="product.id" class="product-item">
                <h4 class="title">{{product.title}}</h4>
                <img class="image" :src="product.url">
            </div>
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
    .product-list {
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(320px, 1fr));
        grid-auto-rows: minmax(300px, auto);
        grid-row-gap: 0.5em;
    }
</style>
