<template lang="html">
    <div id="sideBar">
        <Panel>
            <div class="header" slot="header" v-if="success">
                <span>作者</span>
            </div>
            <div class="inner user" slot="container" v-if="success">
                <router-link :to="{ name: '', params: {} }">
                    <img :src="avatar_url" :alt="loginname" :title="loginname">
                    <span>{{loginname}}</span>
                </router-link>
                <p><span>积分：0</span></p>
                <p>"这家伙很懒，什么个性签名都没有留下。"</p>
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
                <span>作者其他话题</span>
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
    props: ['title'],
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
        loginname: state => state.login.loginname
    }),
    created() {
        // console.log(this);
    }
};
</script>

<style lang="less">
    @import "./userSideBar.less";
</style>
