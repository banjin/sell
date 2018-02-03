import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import goods from './components/goods/goods.vue';
import seller from './components/seller/seller.vue';
import ratings from './components/ratings/ratings.vue';

// 加载全局样式
import './common/stylus/index.styl';

Vue.use(VueRouter);

let app = Vue.extend(App);
let router = new VueRouter({
  linkActiveClass: 'active'
});

router.map({
  '/goods': {
    component: goods
  },
  '/ratings': {
    component: ratings
  },
  '/seller': {
    component: seller
  }
});
router.start(app, '#app');

// /* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// });

