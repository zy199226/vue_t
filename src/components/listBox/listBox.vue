<template lang="html">
    <div class="listBox" :style="`height: ${oh}`">
        <slot name="listBox"></slot>
    </div>
</template>

<script>
export default {
    props: ['otherHeight'],
    computed: {
        oh() {
            return this.otherHeight === 'auto' ? 'auto' : `${this.otherHeight}px`;
        }
    }
};
</script>

<style lang="less">
    @import "./listBox.less";
</style>
