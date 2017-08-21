<template lang="html">
    <div class="inner markdownEditor">
        <textarea name="rContent" rows="8" v-model="content"></textarea>
        <button @click="replyContent">回复</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            content: this.loginname ? `@${this.loginname} ` : ''
        };
    },
    props: ['replyId', 'loginname'],
    methods: {
        replyContent() {
            this.$store.dispatch('axiosReply', { replyId: this.replyId, content: this.content });
            this.content = this.loginname ? `@${this.loginname} ` : '';
            this.$emit('replyThis', this.replyId);
        }
    }
};
</script>

<style lang="less">
@import "./reply.less";
</style>
