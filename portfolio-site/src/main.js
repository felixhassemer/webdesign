// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App'
import {routes} from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0};
  }
});


// fix attempt for scroll behavior
// router.beforeEach(function (to, from, next) {
//   setTimeout(() => {
//     window.scrollTo(0, 0);
//   }, 300);
//   console.log('scrolled');
//   next();
// });

// router.afterEach(() => {
//   setTimeout(() => {
//     window.scrollTo(0, 0);
//   }, 300);
// });

// registering components globally
import Navigation from './components/Navigation.vue';

Vue.component('app-nav', Navigation);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
