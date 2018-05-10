<template>
    <div class="posts">
        <h1>{{ msg }}</h1>
        <v-button markup="primary" v-on:click="getPosts">Get more posts</v-button>
        <div class="post-list">
            <div v-for="post in posts" :key="post.id">
                <h3>{{post.title}}</h3>
                <p>{{post.body}}</p>
            </div>
        </div>
    </div>
</template>

<script>
  import VButton from './Button';

  export default {
    name: 'posts',
    props: {
      msg: String
    },
    data() {
      return {
        posts: ''
      }
    },
    mounted() {

    },
    components: {
      VButton
    },
    methods: {
      getPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => response.json())
          .then(json => {
            this.posts = json;
          });
      }
    }
  }
</script>

<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    p {
        color: #002E0C85;
    }

    a {
        color: #42b983;
    }
    .post-list {
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(320px, 1fr));
        grid-auto-rows: minmax(300px, auto);
        grid-row-gap: 0.5em;
        grid-column-gap: 1em;
    }
</style>
