<template lang="html">
    <div class="navbar">
        <div class="container">
            <icon class="Category" name="Category" scale="1.6"></icon>
            <router-link class="brand" :to="{ name: '', params: {} }">
                <img src="../../assets/vue.png" alt="vue_t">
                <span>vue.js</span>
            </router-link>
            <form class="navbarSearch" action="/search">
                <input type="text" name="" value="">
                <icon name="search" scale="1.6"></icon>
            </form>
            <div class="navLinks">
                <ul>
                    <li v-for="link in navLinks">
                        <a v-if="link.src.match('http')" :href="link.src">{{link.name}}</a>
                        <router-link v-else :to="link.src">{{link.name}}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navLinks: [
                { name: '首页', src: '/' },
                { name: '未读消息', src: '/' },
                { name: 'VUE 2.0', src: 'http://doc.vue-js.com' },
                { name: '参考资料', src: '/' },
                { name: 'API', src: '/' },
                { name: '关于', src: '/' },
                { name: '设置', src: '/' },
                { name: '退出', src: '/' }
            ]
        };
    },
    methods: {
    }
};
</script>

<style lang="less">
    @import "./navbar.less";
</style>
