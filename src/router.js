import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Catalog from './views/Catalog.vue';
import About from './views/About.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: Catalog
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
