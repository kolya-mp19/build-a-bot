import Vue from 'vue';
import App from './App.vue';

import router from './router';
import store from './store';
// делаем директиву глобально
import pinDirective from './build/shared/pin-directive';
import currencyFilter from './build/shared/currency-filter';


Vue.config.productionTip = false;
// делаем директиву глобально
Vue.directive('pin', pinDirective);
Vue.filter('currency', currencyFilter);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
