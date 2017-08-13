<template lang="html">
    <div class="pagination">
        <ul>
            <li>
                <router-link :to="`?tab=${tab}&page=1`"><i>&#xea1f;</i></router-link>
            </li>
            <li v-if="curPage >= 4">...</li>
            <li v-for="n in 5">
                <router-link :to="`?tab=${tab}&page=${curPage + n - 1}`">{{curPage + n - 1}}</router-link>
            </li>
            <li>...</li>
            <!-- <li>
                <router-link :to="`?tab=${tab}&page=25`"><i>&#xea20;</i></router-link>
            </li> -->
        </ul>
    </div>
</template>

<script>
export default {
    props: ['tab'],
    computed: {
        curPage() {
            return this.$route.query.page ? parseInt(this.$route.query.page, 10) : 1;
        }
    }
};
</script>

<style lang="less">
    @import "./pagination.less";
</style>
