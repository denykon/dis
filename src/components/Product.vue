<template>
    <div class="product-catalog">
        <h1>{{ header }}</h1>
        <VInput type="text" v-model="search" placeholder="Search by product title.."/>
        <VButton markup="success"
                 @click="getProducts(albumId)">Get more products</VButton>
        <div class="product-list">
            <div v-for="product in filteredList" :key="product.id" class="product-item">
                <h4 class="title">{{product.title}}</h4>
                <img class="image" :src="product.url" alt="Product">
            </div>
        </div>
    </div>
</template>

<script>
  import VButton from './Button';
  import VInput from './Input';

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
      VInput,
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
        fetch(`https://vue-x.herokuapp.com/photos/?albumId=${albumId}`)
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
