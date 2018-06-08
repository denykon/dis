<template>
    <div class="posts">
        <h1>{{ msg }}</h1>
        <input type="text" v-model="search" placeholder="Search by post title.."/>
        <v-button markup="primary" v-on:click="getPosts(id)">Get more posts</v-button>
        <div class="post-list">
            <div v-for="post in filteredList" :key="post.id">
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
        posts: [],
        search: '',
        id: 1
      }
    },
    computed: {
      filteredList() {
        return this.posts.filter(post => {
          return post.title.toLowerCase().includes(this.search.toLowerCase())
        })
      }
    },
    mounted() {
      this.getPosts(this.id);
    },
    components: {
      VButton
    },
    methods: {
      getPosts(id) {
        fetch(`https://vue-x.herokuapp.com/posts/?userId=${id}`)
          .then(response => response.json())
          .then(json => {
            this.posts = json;
          });
        this.id++;
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
        grid-row-gap: 0.5em;
        grid-column-gap: 1em;
    }
</style>
