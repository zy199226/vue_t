import Vue from 'vue';
import Router from 'vue-router';

import Homepage from '../containers/Homepage.vue';
import Topic from '../containers/Topic.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: Homepage
        }, {
            path: '/topic',
            component: Topic
        }
    ]
});
