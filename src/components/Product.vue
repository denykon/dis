<template>
    <div class="product">
        <h1>{{ title }}</h1>
        <Button markup="success" v-on:click="getProducts">Get more products</Button>
        <div v-for="product in products" :key="product.id">
            <h4 class="title">{{product.title}}</h4>
            <img class="image" :src="product.url">
        </div>
    </div>
</template>

<script>
  import Button from '@/components/Button.vue';

  export default {
    name: 'prods',
    props: {
      title: String
    },
    data() {
      return {
        products: ''
      }
    },
    components: {
      Button
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
