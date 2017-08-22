<template lang="html">
    <Mains :style="ww < 980 ? `height: ${wh - nh}px;overflow: auto` : ''">
        <sideBar slot="sideBar" :user="user" :visibility="true"></sideBar>
        <Panel slot="content">
            <div class="header headerMsg" slot="header">
                <router-link :to="`/`">主页</router-link> / 新消息
            </div>
            <div class="inner innerMsg" slot="container">
                <div class="msg" v-if="hasNot && !hasNot[0]">
                    无消息
                </div>
                <div class="msg" v-for="(msg, i) of hasNot">
                    <router-link :to="`/user/${msg.author.loginname}`">{{msg.author.loginname}}</router-link>
                    回复了你的话题
                    <router-link :to="`/topic/${msg.topic.id}`">{{msg.topic.title}}</router-link>
                </div>
            </div>
        </Panel>
        <Panel slot="content">
            <div class="header headerMsg" slot="header">
                <span>过往消息</span>
            </div>
            <div class="inner innerMsg" slot="container">
                <div class="msg" v-if="has && !has[0]">
                    无消息
                </div>
                <div class="msg" v-for="(msg, i) of has">
                    <router-link :to="`/user/${msg.author.loginname}`">{{msg.author.loginname}}</router-link>
                    回复了你的话题
                    <router-link :to="`/topic/${msg.topic.id}`">{{msg.topic.title}}</router-link>
                </div>
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
            wh
        };
    },
    created() {
        this.$store.dispatch('axiosMessage');
        this.$store.dispatch('axiosMarkAll');
        bus.$on('navbarHeight', (nh, ww, wh) => {
            this.nh = nh;
            this.ww = ww;
            this.wh = wh;
        });
    },
    watch: {
        token() {
            this.$store.dispatch('axiosMessage');
            this.$store.dispatch('axiosMarkAll');
        }
    },
    computed: mapState({
        user: state => state.loginDetail,
        token: state => state.token,
        has: state => state.message.has_read_messages,
        hasNot: state => state.message.hasnot_read_messages
    })
};
</script>

<style lang="less">
.headerMsg{
    font-size: 14px;
    color: #777;
    a{
        text-decoration: none;
        color: #e861c6;
        &:hover{
            text-decoration: underline;
        }
    }
}
.panel div.innerMsg{
    padding: 0;
    .msg{
        padding: 10px;
        border-bottom: 1px solid #ddd;
        font-size: 14px;
        line-height: 2em;
        a{
            color: #08c;
            text-decoration: none;
            cursor: pointer;
            &:hover{
                color: #016293;
                text-decoration: underline;
            }
        }
        &:nth-last-of-type(1) {
            border: none;
        }
    }
}
</style>
