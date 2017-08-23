<template lang="html">
    <Mains :style="ww < 980 ? `height: ${wh - nh}px;overflow: auto` : ''">
        <sideBar slot="sideBar" :user="user" :visibility="true"></sideBar>
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
    create() {
        bus.$on('navbarHeight', (nh, ww, wh) => {
            this.nh = nh;
            this.ww = ww;
            this.wh = wh;
        });
    },
    computed: mapState({
        user: state => state.loginDetail
    })
};
</script>

<style lang="less">
</style>
