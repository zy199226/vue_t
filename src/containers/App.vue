<template lang="html">
    <div id="App">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'app'
};
</script>

<style lang="less">
    @import "~normalize.css/normalize.css";
    #App{
        width: 100%;
        background: #e1e1e1;
    }
    input{
        outline: none;
    }
</style>
