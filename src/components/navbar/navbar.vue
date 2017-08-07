<template lang="html">
    <div class="navbar">
        <div class="container" ref="container">
            <i @click="slideBarMove">&#xe900;</i>
            <div :class="['shadowBox', { shadowBoxShow: Focus }]" ref="shadowBox"></div>
            <router-link class="brand" to="/">
                <img src="../../assets/vue.png" alt="vue_t">
                <span>Vue.js</span>
            </router-link>
            <div class="navbarSearch" ref="navbarSearch">
                <form action="/search">
                    <input type="text"
                    @focus="inputFocus"
                    @blur="inputBlur"
                    :style="{ background: Focus ? '#fff' : '#fcb1d9' }">
                    <i @click="search" :style="{ color: Focus ? '#f70085' : '#fff' }">&#xe901;</i>
                </form>
            </div>
            <div :class="['navLinks', { navLinksMove: slideBar }]" ref="navLinks" @click="slideBarMove">
                <ul @click="stop(this)">
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
import { ww, wh, stopBubble } from '../../until/until';

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
            ],
            Focus: false,
            slideBar: false
        };
    },
    methods: {
        search() {
            const searchInput = this.$refs.navbarSearch;
            const input = searchInput.querySelector('input');
            if (searchInput.classList.contains('navbarSearchClick')) {
                console.log(111);
                input.blur();
                searchInput.classList.remove('navbarSearchClick');
                input.value = '';
                input.disabled = true;
            } else {
                console.log(222);
                input.disabled = false;
                input.focus();
                searchInput.classList.add('navbarSearchClick');
            }
        },
        slideBarMove() {
            this.slideBar = !this.slideBar;
        },
        stop(e) {
            stopBubble(e);
        },
        windowResize(winH, winW) {
            const headerHeight = this.$refs.container.offsetHeight;
            this.$refs.navLinks.style.cssText = `top: ${headerHeight}px;height: ${winH - headerHeight}px`;
            if (winW <= 980) {
                this.$refs.navbarSearch.querySelector('input').disabled = false;
            }
        },
        inputFocus() {
            this.Focus = true;
            console.log(333);
        },
        inputBlur() {
            this.Focus = false;
            console.log(444);
        }
    },
    mounted() {
        this.windowResize(wh, ww);
        window.onresize = () => this.windowResize(window.innerHeight, window.innerWidth);
    }
};
</script>

<style lang="less">
    @import "./navbar.less";
</style>
