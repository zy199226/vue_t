import Vue from 'vue';
import App from './containers/App.vue';
import router from './router/routers';
import store from './store/store';

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
