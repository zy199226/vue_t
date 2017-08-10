<template lang="html">
    <Mains>
        <Panel slot="content">
            <span slot="header">首页</span>
            <TopicList slot="container">
                <Cell slot="cell"></Cell>
            </TopicList>
        </Panel>
    </Mains>
</template>

<script>
import Mains from '../components/main/main.vue';
import Panel from '../components/panel/panel.vue';
import TopicList from '../components/topicList/topicList.vue';
import Cell from '../components/cell/cell.vue';

export default {
    components: {
        Mains,
        Panel,
        TopicList,
        Cell
    },
    data() {
        return {
        };
    },
    methods: {
    },
    beforeMount() {
        this.$store.dispatch('axiosHome', { tab: 'all', limit: 40, pages: 1 });
    },
    mounted() {
        // console.log(this);
    }
};
</script>

<style lang="less">
</style>
