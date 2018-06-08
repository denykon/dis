<template>
    <div class="product-catalog">
        <h1>{{ header }}</h1>
        <input type="text" v-model="search" placeholder="Search by product title.."/>
        <v-button markup="success" v-on:click="getProducts(albumId)">Get more products</v-button>
        <div class="product-list">
            <div v-for="product in filteredList" :key="product.id" class="product-item">
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
        products: [],
        search: '',
        albumId: 1
      }
    },
    mounted() {
      this.getProducts(this.albumId);
    },
    components: {
      VButton
    },
    computed: {
      filteredList() {
        return this.products.filter(product => {
          return product.title.toLowerCase().includes(this.search.toLowerCase())
        })
      }
    },
    methods: {
      getProducts(albumId) {
        fetch(`http://localhost:3000/photos/?albumId=${albumId}`)
          .then(response => response.json())
          .then(json => {
            this.products = json;
          });
        this.albumId++;
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
