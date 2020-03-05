import Vue from 'vue';
import App from '@/components/App/App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import VueCookies from 'vue-cookies';

Vue.config.productionTip = false;
Vue.use(VueCookies);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
