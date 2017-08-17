<template lang="html">
    <Mains>
        <SideBar slot="sideBar"></SideBar>
        <Panel slot="content">
            <div class="header" slot="header">
                <p>
                    <router-link
                    v-for="(tab, key, i) in tabs"
                    :key="key"
                    :class="['topicTab', curTab === key ? 'curTab' : '']"
                    :to="`/?tab=${key}`">{{tab}}</router-link>
                </p>
            </div>
            <ListBox slot="container"  v-for="(tab, key, i) in tabs" :key="key" v-if="key === curTab"
                :otherHeight="windowW < 980 ? otherHeight : 'auto'">
                <Cell v-for="(item, i) in home[key].topics" :key="i" slot="listBox" :item="item"></Cell>
                <Pagination slot="listBox" :tab="key"></Pagination>
            </ListBox>
        </Panel>
    </Mains>
</template>

<script>
import { mapState } from 'vuex';
import Mains from '../components/main/main.vue';
import Panel from '../components/panel/panel.vue';
import ListBox from '../components/listBox/listBox.vue';
import Cell from '../components/cell/cell.vue';
import Pagination from '../components/pagination/pagination.vue';
import SideBar from '../components/sideBar/sideBar.vue';
import { bus } from '../until/until';

export default {
    components: {
        Mains,
        Panel,
        ListBox,
        Cell,
        Pagination,
        SideBar
    },
    data() {
        return {
            tabs: {
                all: '全部',
                good: '精华',
                weex: 'weex',
                share: '分享',
                ask: '问答',
                job: '工作'
            },
            curTab: '',
            navbarHeight: '',
            windowW: '',
            windowH: ''
        };
    },
    methods: {
        axiosTopics(e = 'all', p) {
            this.curTab = e;
            this.axiosHome(e, p);
        },
        axiosHome(t = 'all', p, l) {
            this.$store.dispatch('axiosHome', { tab: t, limit: l, page: p });
        }
    },
    created() {
        this.curTab = this.$route.query.tab ? this.$route.query.tab : 'all';
        this.axiosHome(this.curTab, this.$route.query.page);
        bus.$on('navbarHeight', (nh, ww, wh) => {
            this.navbarHeight = nh;
            this.windowW = ww;
            this.windowH = wh;
        });
    },
    computed: mapState({
        home: state => state.home,
        otherHeight() {
            return this.windowH - this.navbarHeight - 38.4;
        }
    }),
    watch: {
        $route(e) {
            this.axiosTopics(e.query.tab, e.query.page);
        }
    }
};
</script>

<style lang="less">
    .topicTab{
        margin: 0 5px;
        color: #ff69d9;
        padding: 3px 4px;
        font-size: 14px;
        cursor: pointer;
        text-decoration: none;
    }
    .curTab{
        background: #ff69d9;
        color: #fff;
        border-radius: 3px;
    }
    @media (min-width:412px) {
        .topicTab{
            margin: 0 10px;
        }
    }
</style>
