<template>
    <div class="post-writer">
        <h3>Add new post</h3>
        <div class="input-group">
            <VInput class="id" type="text" v-model="userId" placeholder="User ID"/>
            <VInput class="title" type="text" v-model="title" placeholder="Title"/>
            <textarea class="text" v-model="text" placeholder="Text"></textarea>
        </div>
        <VButton markup="primary"
                 @click="addPost">Add post
        </VButton>
        <VButton markup="error"
                 @click="deletePost">Delete post
        </VButton>
    </div>
</template>

<script>
  import VButton from './Button';
  import VInput from './Input';

  export default {
    name: 'PostWriter',
    components: {
      VInput,
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
            this.textClear();
          });
      },
      deletePost() {
        return fetch(`https://vue-x.herokuapp.com/posts/${this.userId}`, {
          method: 'DELETE'
        });
      },
      textClear() {
        this.title = '';
        this.text = '';
        this.$emit('post-added', this.userId);
      }
    }
  }
</script>

<style lang="less" scoped>
    .input-group {
        width: 50vw;
        margin: 0 auto;
    }

    .text {
        height: 30vh;
    }

    textarea {
        resize: none;
    }
</style>