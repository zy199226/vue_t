import Vue from 'vue';
import Router from 'vue-router';

import Test from './Test.vue';
import MyDiv from './MyDiv.vue';
import CopyDiv from './copyDiv.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/app'
        }, {
            path: '/test',
            component: CopyDiv,
            children: [
                {
                    path: '',
                    redirect: '/test/CopyDiv'
                }, {
                    path: 'CopyDiv',
                    name: 'CopyDiv',
                    component: CopyDiv
                }
            ]
        }, {
            path: '/myDiv',
            name: 'myDiv',
            component: MyDiv
        }, {
            path: '/app',
            component: Test
        }
        // {
        //     path: '/',
        //     redirect: '/pages/'
        // }, {
        //     path: '/pages',
        //     component: Test,
        //     child: [
        //         {
        //             path: '',
        //             redirect: '/pages/home'
        //         }, {
        //             path: 'home',
        //             name: 'Test',
        //             component: Test
        //         }, {
        //             path: 'myDiv',
        //             name: 'myDiv',
        //             component: MyDiv
        //         }
        //     ]
        // }, {
        //     path: '/MyDiv',
        //     component: MyDiv
        // }
    ]
});
