<template lang="html">
    <Mains>
        <p slot="content">哈哈</p>
        <h1 slot="sideBar">呵呵</h1>
    </Mains>
</template>

<script>
import Mains from '../components/main/main.vue';
import Navbar from '../components/navbar/navbar.vue';

export default {
    components: {
        Mains,
        Navbar
    },
    data() {
        return {
            name: '哈哈',
            navbar: Navbar
        };
    },
    methods: {
    }
};
</script>

<style lang="less">
</style>
