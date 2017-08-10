<template lang="html">
    <div class="">
        <div class="">
            <button @click="decrease">----</button>
            <span>{{bbb}}, {{count}}</span>
            <button @click="include">++++</button>
        </div>
        <Mains>
            <Panel slot="content">
                <span slot="header" @click="ddd">首页</span>
                <ListBox slot="container"  v-for="tab in tabs" :key="tab">
                    <Cell v-for="(item, i) in aaa" :key="i" slot="ListBox"></Cell>
                </ListBox>
            </Panel>
        </Mains>
    </div>
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
            tabs: ['all', 'good', 'weex', 'share', 'ask', 'job'],
            home: this.$store.state.home,
            count: this.$store.state.count
        };
    },
    methods: {
        ddd() {
            console.log(this);
        },
        include() {
            this.$store.dispatch('include', 1);
            console.log(this, this.count);
        },
        decrease() {
            this.$store.dispatch('decrease', 1);
            console.log(this, this.count);
        }
    },
    created() {
        this.$store.dispatch('axiosHome', { tab: 'all', limit: 40, pages: 1 });
    },
    watch: {
        all(n, o) {
            console.log(n, o);
        },
        deep: true
    },
    computed: mapState({
        aaa: state => state.home.all,
        bbb: state => state.count
    })
};
</script>

<style lang="less">
</style>
