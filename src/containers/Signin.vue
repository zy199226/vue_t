<template lang="html">
    <Mains :style="ww < 980 ? `height: ${wh - nh}px;overflow: auto` : ''">
        <Panel slot="sideBar" id="sideBar">
            <div class="header signHeader" slot="header">
                <span>关于</span>
            </div>
            <div class="inner signSideInner" slot="container">
                <p>Vue：Vue.js专业中文社区</p>
                <p>在这里你可以：</p>
                <ul>
                    <li>向别人提出你遇到的问题</li>
                    <li>帮助遇到问题的人</li>
                    <li>分享自己的知识</li>
                    <li>和其它人一起进步</li>
                </ul>
            </div>
        </Panel>
        <Panel slot="content">
            <div class="header signHeader" slot="header">
                <router-link :to="`/`">主页</router-link> / 登录
            </div>
            <div class="inner signInner" slot="container">
                <input type="text" placeholder="Access Token" v-model="at">
                <button @click="login">登录</button>
            </div>
        </Panel>
    </Mains>
</template>

<script>
import { mapState } from 'vuex';
import Mains from '../components/main/main.vue';
import Panel from '../components/panel/panel.vue';
import sideBar from '../components/sideBar/sideBar.vue';

import { ww, wh, bus } from '../until/until';

export default {
    components: {
        Mains,
        Panel,
        sideBar
    },
    data() {
        return {
            nh: '',
            ww,
            wh,
            at: ''
        };
    },
    create() {
        bus.$on('navbarHeight', (nh, ww, wh) => {
            this.nh = nh;
            this.ww = ww;
            this.wh = wh;
        });
    },
    computed: mapState({
        user: state => state.loginDetail
    }),
    methods: {
        login() {
            if (this.at) {
                this.$store.dispatch('axiosLogin', this.at);
            }
        }
    }
};
</script>

<style lang="less">
.signHeader{
    a{
        color: #fe76d1;
        text-decoration: none;
        &:hover{
            text-decoration: underline;
        }
    }
}
.panel div.signInner{
    padding: 40px 10px;
    text-align: center;
    input{
        width: 100%;
        max-width: 300px;
        border: 1px solid #aaa;
        background: #fff;
        padding: 0 10px;
        border-radius: 3px;
        line-height: 2em;
        box-sizing: border-box;
    }
    button{
        display: block;
        width: 100%;
        max-width: 300px;
        border: none;
        background: #ff5cc9;
        color: #fff;
        line-height: 2em;
        border-radius: 3px;
        margin: 10px auto 0;
    }
}
.panel div.signSideInner{
    line-height: 2em;
    font-size: 14px;
    p{
        margin: 0 0 10px;
    }
}
</style>
