<template lang="html">
    <Mains>
        <SideBar slot="sideBar" :user="user" :visibility="true"></SideBar>
        <Panel slot="content">
            
        </Panel>
    </Mains>
</template>

<script>
import { mapState } from 'vuex';
import Mains from '../components/main/main.vue';
import Panel from '../components/panel/panel.vue';
import SideBar from '../components/sideBar/sideBar.vue';

export default {
    components: {
        Mains,
        Panel,
        SideBar
    },
    created() {
        this.$store.dispatch('axiosUserDetail', this.$route.params.loginname);
    },
    watch: {
        $route(e) {
            this.$store.dispatch('axiosUserDetail', e.params.loginname);
        }
    },
    computed: mapState({
        user: state => state.userDetail
    })
};
</script>

<style lang="less">
</style>
