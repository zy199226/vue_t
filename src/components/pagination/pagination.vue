<template lang="html">
    <div class="pagination">
        <ul>
            <li>
                <router-link :to="`?tab=${tab}&page=1`"><i>&#xea1f;</i></router-link>
            </li>
            <li v-if="curPage >= 4"><a>...</a></li>
            <li v-for="n in 5">
                <router-link :to="`?tab=${tab}&page=${curPage + n - pageEnd - 1}`">{{curPage + n - pageEnd - 1}}</router-link>
            </li>
            <li><a>...</a></li>
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
        },
        pageEnd() {
            const page = parseInt(this.$route.query.page, 10);
            if (page - 3 < 0) {
                return 0;
            } else if (!page) {
                return 0;
            }
            return 2;
        }
    }
};
</script>

<style lang="less">
    @import "./pagination.less";
</style>
