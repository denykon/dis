import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Catalog from './views/Catalog.vue';
import About from './views/About.vue';
import Admin from './views/Admin.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/dis/',
      name: 'Home',
      component: Home
    },
    {
      path: '/dis/catalog',
      name: 'Catalog',
      component: Catalog
    },
    {
      path: '/dis/about',
      name: 'About',
      component: About
    },
    {
      path: '/dis/adminpage',
      name: 'AdminPage',
      component: Admin
    }
  ]
})
