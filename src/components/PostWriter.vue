<template>
    <div class="post-writer">
        <h3>Add new post</h3>
        <input type="text" v-model="userId" placeholder="User ID"/>
        <input type="text" v-model="title" placeholder="Title"/>
        <input type="text" v-model="text" placeholder="Text"/>
        <v-button markup="primary" v-on:click="addPost">Add post</v-button>
    </div>
</template>

<script>
  import VButton from './Button';

  export default {
    name: 'PostWriter',
    components: {
      VButton
    },
    data() {
      return {
        userId: 1,
        title: '',
        text: ''
      }
    },
    methods: {
      addPost() {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        return fetch('https://vue-x.herokuapp.com/posts/', {
          headers: headers,
          method: 'POST',
          body: JSON.stringify({userId: this.userId, title: this.title, body: this.text})
        }).then(response => response.json())
          .then(() => {
            this.title = '';
            this.text = '';
            this.userId = 1;
          });
      }
    }
  }
</script>

<style scoped>

</style>