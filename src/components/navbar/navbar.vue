<template lang="html">
    <div id="navbar">
        <div class="container" ref="container">
            <i @click="slideBarMove">&#xe900;</i>
            <div :class="['shadowBox', { shadowBoxShow: (Focus && windowW<980) }]"></div>
            <router-link class="brand" to="/">
                <img src="../../assets/vue.png" alt="vue_t">
                <span>Vue.js</span>
            </router-link>
            <div :class="['navbarSearch', { navbarSearchClick: (Focus && windowW<980) }]">
                <form action="/search">
                    <input type="text" ref="searchInput"
                    @focus="inputFocus"
                    @blur="inputBlur"
                    :style="{ background: Focus ? '#fff' : '#fcb1d9' }"
                    :disabled="windowW<980 ? true : false">
                    <i @click="search" :style="{ color: Focus ? '#f70085' : '#fff' }">&#xe901;</i>
                </form>
            </div>
            <div :class="['navLinks', { navLinksMove: slideBar }]"
            @click="slideBarMove"
            :style="windowW<980 ? `top: ${headerHeight}px;height: ${windowH - headerHeight}px` : ''">
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
            slideBar: false,
            windowH: wh,
            windowW: ww,
            headerHeight: ''
        };
    },
    methods: {
        search() {
            const searchInput = this.$refs.searchInput;
            if (this.windowW <= 980) {
                if (!this.Focus) {
                    searchInput.disabled = false;
                    searchInput.focus();
                    this.Focus = true;
                } else {
                    searchInput.disabled = true;
                    this.Focus = false;
                }
            }
        },
        slideBarMove() {
            this.slideBar = !this.slideBar;
        },
        stop(e) {
            stopBubble(e);
        },
        windowResize(winH, winW, headerHeight) {
            this.windowH = winH;
            this.windowW = winW;
            this.headerHeight = headerHeight;
        },
        inputFocus() {
            if (this.windowW > 980) {
                this.Focus = true;
            }
        },
        inputBlur() {
            if (this.windowW > 980) {
                this.Focus = false;
            }
        }
    },
    mounted() {
        this.headerHeight = this.$refs.container.offsetHeight;
        window.onresize = () =>
        this.windowResize(window.innerHeight, window.innerWidth, this.$refs.container.offsetHeight);
    }
};
</script>

<style lang="less">
    @import "./navbar.less";
</style>
