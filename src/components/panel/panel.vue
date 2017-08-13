<template lang="html">
    <div class="panel">
        <div class="header" ref="header">
            <p>
                <slot name="header"></slot>
            </p>
        </div>
        <slot name="container"></slot>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$emit('headerHeight', this.$refs.header.offsetHeight);
    }
};
</script>

<style lang="less">
    @import "./panel.less";
</style>
