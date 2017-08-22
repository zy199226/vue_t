import Vue from 'vue';
import Router from 'vue-router';

import Homepage from '../containers/Homepage.vue';
import Topic from '../containers/Topic.vue';
import User from '../containers/User.vue';
import createTopic from '../containers/createTopic.vue';
import Message from '../containers/Message.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: Homepage
        }, {
            path: '/topic/:id',
            component: Topic
        }, {
            path: '/user/:loginname',
            component: User
        }, {
            path: '/create',
            component: createTopic
        }, {
            path: '/message',
            component: Message
        }, {
            path: '/getstart',
            component: Message
        }
    ]
});
