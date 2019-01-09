import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({

  state: {
    userID: 1,
    posts: []
  },
  getters: {
    getPosts() {
      return () => fetch(`https://vue-x.herokuapp.com/posts`);
    }
  },
  mutations: {
    updatePosts(state) {
      this.getters.getPosts().then(response => response.json()).then(json => {state.posts = json});
    }
  },
  actions: {

  }

});
