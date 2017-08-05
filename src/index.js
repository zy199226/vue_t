import Vue from 'vue';
import Icon from 'vue-svg-icon/Icon.vue';
import App from './containers/App.vue';
import router from './router/routers';
import store from './store/store';

Vue.component('icon', Icon); // 引入的icon模块，vue-svg-icon

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
