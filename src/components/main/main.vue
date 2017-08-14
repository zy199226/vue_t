<template lang="html">
    <div id="main">
        <slot name="sideBar"></slot>
        <div id="content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
export default {

};
</script>

<style lang="less">
    @import "./main.less";
</style>
