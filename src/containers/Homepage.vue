<template lang="html">
    <Mains>
        <Panel slot="content">
            <span slot="header" :class="['topicTab', curTab === key ? 'curTab' : '']"
            v-for="(tab, key, i) in tabs"
            :key="key"
            @click="clickTab(key)"
            >{{tab}}</span>
            <ListBox slot="container"  v-for="(tab, key, i) in tabs" :key="key" v-if="key === curTab">
                <Cell v-for="(item, i) in home[key].topics" :key="i" slot="listBox" :item="item"></Cell>
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

export default {
    components: {
        Mains,
        Panel,
        ListBox,
        Cell
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
            curTab: 'all'
        };
    },
    methods: {
        clickTab(e) {
            this.curTab = e;
            if (!this.home[this.curTab].topics) {
                const page = this.home[this.curTab].page;
                this.axiosHome(e, page + 1);
            }
        },
        axiosHome(t = 'all', p, l) {
            this.$store.dispatch('axiosHome', { tab: t, limit: l, page: p });
        }
    },
    created() {
        this.axiosHome();
    },
    watch: {
    },
    computed: mapState({
        home: state => state.home
    })
};
</script>

<style lang="less">
    .topicTab{
        margin: 0 10px;
        color: #ff69d9;
        padding: 3px 4px;
        font-size: 14px;
        cursor: pointer;
    }
    .curTab{
        background: #ff69d9;
        color: #fff;
        border-radius: 3px;
    }
</style>
