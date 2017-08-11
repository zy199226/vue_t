<template lang="html">
    <div class="cell" @click="click">
        <router-link :to="{ name: '', params: {} }">
            <img :src="item.author.avatar_url" :title="item.author.loginname">
        </router-link>
        <span>
            <span>{{item.reply_count}}</span>
            <span>/</span>
            <span>{{item.visit_count}}</span>
        </span>
        <span>{{lastTime}}</span>
        <div>
            <router-link :to="{ name: '', params: {} }">
                {{item.title}}
            </router-link>
        </div>
    </div>
</template>

<script>
import { time } from '../../until/until';

export default {
    props: ['item'],
    methods: {
        click() {
            console.log(this);
        }
    },
    computed: {
        lastTime() {
            return time(this.item.last_reply_at);
        }
    }
};
</script>

<style lang="less">
    @import "./cell.less";
</style>
