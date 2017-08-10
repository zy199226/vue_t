<template lang="html">
    <div class="cell" @click="click">
        abc
    </div>
</template>

<script>
export default {
    data() {
        return {
            ttt: this.tab
        };
    },
    props: ['item', 'tab'],
    beforeUpdate() {
        // console.log(this);
    },
    methods: {
        click() {
            // console.log(this);
        }
    }
};
</script>

<style lang="less">
    @import "./cell.less";
</style>
