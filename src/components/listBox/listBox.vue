<template lang="html">
    <div class="topicList">
        <slot name="ListBox"></slot>
    </div>
</template>

<script>
export default {
    props: ['tab'],
    methods: {
        ccc() {
            // console.log(this);
        }
    }
};
</script>

<style lang="less">
    // @import "./topicList.less";
</style>
