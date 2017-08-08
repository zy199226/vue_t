<template lang="html">
    <div id="app">
        <Navbar />
        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from '../components/navbar/navbar.vue';

export default {
    name: 'app',
    components: {
        Navbar
    }
};
</script>

<style lang="less">
    @import "~normalize.css/normalize.css";

    //iconfont
    @font-face {
        font-family: 'icomoon';
        src: url('../fonts/icomoon.eot?-ivr5ln');
        src: url('../fonts/icomoon.eot?#iefix-ivr5ln') format('embedded-opentype'),
        url('../fonts/icomoon.ttf?-ivr5ln') format('truetype'),
        url('../fonts/icomoon.woff?-ivr5ln') format('woff'),
        url('../fonts/icomoon.svg?-ivr5ln#icomoon') format('svg');
        font-weight: normal;
        font-style: normal;
    }

    [class*="icon-"],
    [class^="icon-"],
    i {
        font-family: 'icomoon';
        speak: none;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        /* Better Font Rendering =========== */
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    #app{
        width: 100%;
        background: #e1e1e1;
    }
    input{
        outline: none;
    }
</style>
