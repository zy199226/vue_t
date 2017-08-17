<template lang="html">
    <div id="sideBar">
        <Panel>
            <div class="header" slot="header" v-if="success">
                <span>个人信息</span>
            </div>
            <div class="inner sign" slot="container" v-if="!success">
                <p>Vue：Vue.js专业中文社区</p>
                <input type="text" placeholder="Access Token" v-model="at">
                <button @click="login">登录</button>
            </div>
            <div class="inner user" slot="container" v-if="success">
                <router-link :to="{ name: '', params: {} }">
                    <img :src="avatar_url" :alt="loginname" :title="loginname">
                    <span>{{loginname}}</span>
                </router-link>
                <p><span>积分：{{score}}</span></p>
                <p>"API返回的数据没有这一项。。。"</p>
            </div>
        </Panel>
        <Panel v-if="success">
            <div class="inner" slot="container">
                <router-link id="aSuccess" :to="{ name: '', params: {} }">发布话题</router-link>
            </div>
        </Panel>
        <Panel>
            <div class="inner ad" slot="container">
                <a href="http://weekly.vue-js.com/#/">
                    <img src="../../assets/1.png" alt="">
                </a>
            </div>
        </Panel>
        <Panel>
            <div class="inner ad" slot="container">
                <a href="https://www.vue-js.com/nav.html">
                    <img src="../../assets/2.png" alt="">
                </a>
                <a href="http://doc.vue-js.com/v2/api/">
                    <img src="../../assets/3.png" alt="">
                </a>
                <a href="http://www.react-d.com/api/">
                    <img src="../../assets/4.png" alt="">
                </a>
            </div>
        </Panel>
        <Panel>
            <div class="header" slot="header">
                <span>社区交流群</span>
            </div>
            <div class="inner qq" slot="container">
                <img width="200" src="../../assets/5.png" alt="">
                <a>扫码快速入群</a>
            </div>
        </Panel>
        <Panel>
            <div class="header" slot="header">
                <span>友情社区</span>
            </div>
            <div class="inner ie" slot="container">
                <a href="http://www.getweapp.com/">微信小程序学习社群</a>
                <a href="http://www.ctolib.com/">CTOLib码库</a>
                <a href="https://www.hubwiz.com/">汇智网</a>
                <a href="https://www.w3cvip.org/">w3c社区-前端专业综合性技术交流平台</a>
            </div>
        </Panel>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Panel from '../panel/panel.vue';

export default {
    components: {
        Panel
    },
    data() {
        return {
            at: ''
        };
    },
    methods: {
        login() {
            if (this.at) {
                this.$store.dispatch('axiosLogin', this.at);
            }
        }
    },
    computed: mapState({
        success: state => state.login.success,
        avatar_url: state => state.login.avatar_url,
        loginname: state => state.login.loginname,
        score: state => state.loginDetail.score
    })
};
</script>

<style lang="less">
    @import "./sideBar.less";
</style>
