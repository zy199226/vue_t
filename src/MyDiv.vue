<template lang="html">
    <div class="mDiv">
        <p @click="clicks">{{msg}}</p>
        <router-link :to="'/test'">link to test</router-link>
        <!-- <router-link :to="'/test/CopyDiv'">link to test/CopyDiv</router-link> -->
        <router-link :to="{ name: 'CopyDiv', params: {} }">link to test/CopyDiv</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: 'this is a div'
        };
    },
    created() {
        this.msg = 'have a good day!';
    },
    methods: {
        clicks() {
            console.log(this);
        }
    }
};
</script>

<style lang="less">
    @import "../styles/MyDiv.less";
    // .mDiv{
    //     p{
    //         color: pink;
    //     }
    // }
</style>
