import Vue from 'vue';
import App from './App.vue';
import router from './routers';
import store from './store';

import '../styles/index.less';


new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
