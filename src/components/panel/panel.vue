<template lang="html">
    <div class="panel">
        <div class="header">
            <p>
                <slot name="header"></slot>
            </p>
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
