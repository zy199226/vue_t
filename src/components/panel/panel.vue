<template lang="html">
    <div class="panel">
        <slot name="header"></slot>
        <slot name="container"></slot>
    </div>
</template>

<script>
export default {
};
</script>

<style lang="less">
    @import "./panel.less";
</style>
