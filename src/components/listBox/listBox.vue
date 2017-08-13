<template lang="html">
    <div class="listBox">
        <slot name="listBox"></slot>
    </div>
</template>

<script>
export default {
    props: ['otherHeight'],
    computed: {
        otherH() {
            if (this.otherHeight === 'auto') {
                return 'auto';
            }
            return 88;
        }
    }
};
</script>

<style lang="less">
    @import "./listBox.less";
</style>
