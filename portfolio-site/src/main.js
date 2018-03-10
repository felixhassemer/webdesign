// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App'
import {routes} from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes
})

// registering components globally
import Navigation from './components/Navigation.vue';
// import Gallery from './components/Gallery.vue';
// import About from './components/About.vue';
// import Contact from './components/Contact.vue';
// import Footer from './components/Footer.vue';

Vue.component('app-nav', Navigation);
// Vue.component('app-gallery', Gallery);
// Vue.component('app-about', About);
// Vue.component('app-footer', Footer);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
