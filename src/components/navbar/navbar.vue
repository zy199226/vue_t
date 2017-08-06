<template lang="html">
    <div class="navbar">
        <div class="container">
            <i>&#xe900;</i>
            <div class="shadowBox" ref="shadowBox"></div>
            <router-link class="brand" :to="{ name: '', params: {} }">
                <img src="../../assets/vue.png" alt="vue_t">
                <span>vue.js</span>
            </router-link>
            <div class="navbarSearch" ref="navbarSearch">
                <form action="/search">
                    <input type="text" name="" value="">
                    <i @click="search">&#xe901;</i>
                </form>
            </div>
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
        search() {
            const searchInput = this.$refs.navbarSearch;
            const input = searchInput.querySelector('input');
            if (searchInput.classList.contains('navbarSearchClick')) {
                searchInput.classList.remove('navbarSearchClick');
                input.disabled = true;
                input.blur();
                input.value = '';
                this.shadowBoxHide();
            } else {
                searchInput.classList.add('navbarSearchClick');
                input.disabled = false;
                input.focus();
                this.shadowBoxShow();
            }
        },
        shadowBoxShow() {
            this.$refs.shadowBox.style.visibility = 'visible';
        },
        shadowBoxHide() {
            this.$refs.shadowBox.style.visibility = 'hidden';
        }
    }
};
</script>

<style lang="less">
    @import "./navbar.less";
</style>
