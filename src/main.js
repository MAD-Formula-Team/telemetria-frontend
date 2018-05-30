import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';

import { API_URL } from './api/index';

import VueMqtt from 'vue-mqtt';
Vue.use(VueMqtt, API_URL, {});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  mqtt: {
    'formula-fake-data/+' (data, topic) {
      // console.log(data.toString(), topic);
    }
  },
  mounted() {
    // this.$mqtt.subscribe('formula-fake-data/#');
    this.$store.dispatch('fetchConfig');
    this.$store.dispatch('login', {
      email: 'test@test.com',
      password: '1234'
    });
  },
  render: h => h(App),
}).$mount('#app');
