<template lang="html">
    <Mains :style="ww < 980 ? `height: ${wh - nh}px;overflow: auto` : ''">
        <SideBar slot="sideBar" :user="user" :visibility="true"></SideBar>
        <Panel slot="content">
            <div class="header userHeader" slot="header">
                <router-link :to="`/`">主页</router-link> /
            </div>
            <div class="inner userInner" slot="container">
                <div class="userPic">
                    <img :src="user.avatar_url" :alt="user.loginname">
                    <span>{{user.loginname}}</span>
                </div>
                <ul class="userInfo">
                    <li>{{user.score}} 积分</li>
                    <li><i>&#xe903; </i> <a :href="`https://www.vue-js.com/user/${user.githubUsername}`">@{{user.githubUsername}}</a></li>
                </ul>
                <p>注册时间 {{createTime}}</p>
            </div>
        </Panel>
        <Panel slot="content">
            <div class="header" slot="container">
                <span>最近创建的话题</span>
            </div>
            <Cell v-for="(topic, i) of topics" :key="i" :item="topic" slot="container"></Cell>
        </Panel>
        <Panel slot="content">
            <div class="header" slot="container">
                <span>最近参与的话题</span>
            </div>
            <Cell v-for="(reply, i) of replies" :key="i" :item="reply" slot="container"></Cell>
        </Panel>
    </Mains>
</template>

<script>
import { mapState } from 'vuex';
import Mains from '../components/main/main.vue';
import Panel from '../components/panel/panel.vue';
import SideBar from '../components/sideBar/sideBar.vue';
import ListBox from '../components/listBox/listBox.vue';
import Cell from '../components/cell/cell.vue';
import { ww, wh, time, bus } from '../until/until';

export default {
    data() {
        return {
            nh: '',
            ww,
            wh
        };
    },
    components: {
        Mains,
        Panel,
        SideBar,
        ListBox,
        Cell
    },
    created() {
        this.$store.dispatch('axiosUserDetail', this.$route.params.loginname);
        bus.$on('navbarHeight', (nh, ww, wh) => {
            this.nh = nh;
            this.ww = ww;
            this.wh = wh;
        });
    },
    watch: {
        $route(e) {
            this.$store.dispatch('axiosUserDetail', e.params.loginname);
        }
    },
    computed: mapState({
        user: state => state.userDetail,
        createTime: state => time(state.userDetail.create_at),
        topics: state => state.userDetail.recent_topics,
        replies: state => state.userDetail.recent_replies
    })
};
</script>

<style lang="less">
.userHeader{
    color: #777;
    a{
        color: #fe76d1;
        text-decoration: none;
    }
}
.userInner{
    .userPic{
        img{
            width: 48px;
            height: 48px;
            border-radius: 3px;
            vertical-align: middle;
        }
        span{
            color: #777;
        }
    }
    .userInfo{
        list-style: none;
        padding: 0;
        li{
            line-height: 2.4em;
            a{
                color: #777;
                text-decoration: none;
            }
        }
    }
    p{
        color: #777;
    }
}
</style>
