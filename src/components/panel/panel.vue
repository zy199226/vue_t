<template lang="html">
    <div class="panel">
        <div class="header">
            <slot name="header"></slot>
        </div>
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
