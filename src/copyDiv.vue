<template lang="html">
    <div class="mDiv">
        <p @click="clicks">{{msg}}</p>
        <router-link :to="'/app'">link to app</router-link>
        <router-link :to="{ name: 'myDiv', params: {} }">link to myDiv</router-link>
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
        this.msg = 'today is sunday!';
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
