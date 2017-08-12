<template lang="html">
    <div class="cell" @click="click">
        <router-link class="userAvatar" :to="{ name: '', params: {} }">
            <img :src="item.author.avatar_url" :title="item.author.loginname">
        </router-link>
        <span class="replyCount">
            <span>{{item.reply_count}}</span>
            <span>/</span>
            <span>{{item.visit_count}}</span>
        </span>
        <span class="lastReply">{{lastTime}}</span>
        <div class="topicTitle">
            <span v-if="tips === 'top'">置顶</span>
            <span v-else-if="tips === 'good'">精华</span>
            <span v-else class="normal">{{tabs[tips]}}</span>
            <router-link :to="{ name: '', params: {} }">
                {{item.title}}
            </router-link>
        </div>
    </div>
</template>

<script>
import { time } from '../../until/until';

export default {
    data() {
        return {
            tabs: {
                all: '全部',
                good: '精华',
                weex: 'weex',
                share: '分享',
                ask: '问答',
                job: '工作'
            }
        };
    },
    props: ['item'],
    methods: {
        click() {
            console.log(this);
        }
    },
    computed: {
        lastTime() {
            return time(this.item.last_reply_at);
        },
        tips() {
            if (this.item.top) {
                return 'top';
            } else if (this.item.good) {
                return 'good';
            }
            return this.item.tab;
        }
    }
};
</script>

<style lang="less">
    @import "./cell.less";
</style>
