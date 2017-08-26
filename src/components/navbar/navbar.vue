<template lang="html">
    <div id="navbar">
        <div class="container" ref="container">
            <i @click="slideBarMove">&#xe900;</i>
            <div :class="['shadowBox', { shadowBoxShow: (Focus && windowW<980) }]"></div>
            <router-link class="brand" to="/">
                <img src="../../assets/vue.png" alt="vue_t">
                <span>Vue.js</span>
            </router-link>
            <div :class="['navbarSearch', { navbarSearchClick: Focus }]">
                <form action="/search">
                    <input type="text" ref="searchInput"
                    @focus="inputFocus"
                    @blur="inputBlur"
                    :disabled="windowW<980 ? true : false">
                    <i @click="search">&#xe901;</i>
                </form>
            </div>
            <div :class="['navLinks', { navLinksMove: slideBar }]"
            @click="slideBarMove"
            :style="windowW<980 ? `top: ${headerHeight}px;height: ${windowH - headerHeight}px` : ''">
                <ul @click="stop(this)">
                    <li v-for="link in navLinks"
                    @click="slideBarMove"
                    :style="link.login !== success || link.login === 2 ? '' : 'padding: 0'">
                        <span v-if="link.name === '未读消息' && count > 0">{{count}}</span>
                        <a v-if="link.src.match('http')" :href="link.src">{{link.name}}</a>
                        <a v-else-if="link.name === '退出' && link.login !== success" @click="loginOut">{{link.name}}</a>
                        <router-link v-else-if="link.login === 2 || link.login !== success"
                        :to="link.src"
                        >{{link.name}}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { ww, wh, stopBubble, bus } from '../../until/until';

export default {
    data() {
        return {
            navLinks: [
                { name: '首页', src: '/', login: 2 },
                { name: '未读消息', src: '/message', login: false },
                { name: 'VUE 2.0', src: 'http://doc.vue-js.com', login: 2 },
                { name: '参考资料', src: '/getstart', login: 2 },
                { name: 'API', src: 'https://www.vue-js.com/api/', login: 2 },
                { name: '关于', src: 'https://www.vue-js.com/about', login: 2 },
                { name: '设置', src: '/', login: false },
                { name: '退出', src: '/', login: false },
                { name: '登录', src: '/signin', login: true }
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
            bus.$emit('navbarHeight', this.headerHeight, this.windowW, this.windowH);
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
        },
        loginOut() {
            window.localStorage.removeItem('accesstoken');
            this.$store.commit('loginOut');
        }
    },
    mounted() {
        this.headerHeight = this.$refs.container.offsetHeight;
        bus.$emit('navbarHeight', this.headerHeight, this.windowW, this.windowH);
        window.onresize = () =>
            this.windowResize(
                window.innerHeight,
                window.innerWidth,
                this.$refs.container.offsetHeight
            );
    },
    computed: mapState({
        success: state => state.login.success,
        token: state => state.token,
        count: state => state.message.count
    }),
    watch: {
        token() {
            this.$store.dispatch('axiosMessageCount');
        }
    }
};
</script>

<style lang="less">
    @import "./navbar.less";
</style>
