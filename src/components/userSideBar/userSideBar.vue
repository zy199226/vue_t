<template lang="html">
    <div id="sideBar">
        <Panel>
            <div class="header" slot="header">
                <span>作者</span>
            </div>
            <div class="inner user" slot="container">
                <router-link :to="{ name: '', params: {} }">
                    <img :src="avatar_url" :alt="loginname" :title="loginname">
                    <span>{{loginname}}</span>
                </router-link>
                <p><span>积分：{{score}}</span></p>
                <p>"API返回的数据没有这一项。。。"</p>
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
                <router-link :to="`/topic/${topic.id}`" v-for="(topic, i) of recentTopics" :key="i">{{topic.title}}</router-link>
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
        avatar_url: state => state.userDetail.avatar_url,
        loginname: state => state.userDetail.loginname,
        score: state => state.userDetail.score,
        recentTopics: state => state.userDetail.recent_topics
    }),
    created() {
        // console.log(this);
    }
};
</script>

<style lang="less">
    @import "./userSideBar.less";
</style>
