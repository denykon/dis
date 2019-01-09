<template>
    <div class="posts">
        <h1>{{ msg }}</h1>
        <VInput type="text" v-model="search" placeholder="Search by post title.."/>
        <VButton markup="primary">Get more posts</VButton>
        <div class="post-list">
            <div v-for="post in filteredList" :key="post.id">
                <div class="post">
                    <h3>{{post.title}}</h3>
                    <p>{{post.body}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import VButton from './Button';
  import VInput from './Input';

  export default {
    name: 'posts',
    components: {
      VInput,
      VButton
    },
    props: {
      msg: String
    },
    data() {
      return {
        search: ''
      }
    },
    computed: {
      filteredList() {
        return this.$store.state.posts.filter(post => {
          return post.title.toLowerCase().includes(this.search.toLowerCase());
        })
      }
    },
    mounted() {
      this.$store.commit('updatePosts');
    },
    methods: {
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
    input, button {
        align-self: center;
    }
    .posts {
        display: flex;
        flex-direction: column;
    }
    .post-list {
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(320px, 1fr));
        grid-row-gap: 0.5em;
        grid-column-gap: 1em;
    }
</style>
